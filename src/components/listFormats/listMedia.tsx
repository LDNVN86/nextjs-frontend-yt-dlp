"use client";
import { downloaded } from "@/lib/api/listFormat";
import { ListFormats } from "@/types/type";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdCodeDownload } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import { toast } from "sonner";

interface Props {
  url: string;
  list: ListFormats;
  filter: string;
  title: string;
}

const ListFilterMedia = ({ url, list, filter, title }: Props) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleDownload = async (format: string) => {
    if (!captchaToken) {
      toast.error("Vui lòng xác minh captcha");
      return;
    }
    try {
      await downloaded(url, format, title);
      toast.success(`Bạn đã chọn và tải xuống ${title}`);
    } catch (error) {
      toast.error("Tải thất bại, vui lòng thử lại sau");
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
    toast.info("Captcha hết hạn, vui lòng xác minh lại");
  };

  const filteredOptions =
    list?.options.filter((opt) =>
      filter === "all" ? true : opt.type === filter
    ) || [];

  return (
    <>
      {filteredOptions.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center gap-1 text-xl font-semibold mb-2 text-black dark:text-white">
            <MdOutlineSubtitles className="size-10" />
            {`Available ${
              filter === "all" ? "Formats" : filter.replace("+", " + ")
            } for "${list.title}"`}
          </div>
          <ul className="h-96 max-w-5xl overflow-y-auto p-5 flex flex-col gap-2 border-2 border-cyan-400 mt-4 border-dashed rounded-2xl">
            {filteredOptions.map((opt, idx) => (
              <li
                key={idx}
                className="flex justify-between gap-20 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <span className="flex items-center text-black dark:text-white">
                  {opt.label} ({opt.ext} - {opt.resolution})
                </span>
                <button
                  disabled={!captchaToken}
                  className={`flex items-center gap-1 ${
                    captchaToken
                      ? "cursor-pointer hover:text-blue-600"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => handleDownload(opt.format_id)}
                >
                  <IoMdCodeDownload className="size-5" />
                  Download
                </button>
              </li>
            ))}
          </ul>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
            onChange={handleCaptchaChange}
            onExpired={handleCaptchaExpired}
            className="mt-4 cursor-pointer bg-black"
            theme="dark"
            // size="compact"
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">No formats available.</p>
      )}
    </>
  );
};

export default ListFilterMedia;
