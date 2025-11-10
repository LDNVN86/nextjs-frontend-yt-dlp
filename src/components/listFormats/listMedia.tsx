"use client";
import { downloaded } from "@/lib/api/listFormat";
import { Filter, ListFormats } from "@/types/type";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdCodeDownload } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import { toast } from "sonner";
import { DownloadProgress } from "../ui/download-progress";

interface Props {
  url: string;
  list: ListFormats;
  filter: Filter;
}

const ListFilterMedia = ({ url, list, filter }: Props) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadingLabel, setDownloadingLabel] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isDownloading) {
      setProgress(0);
      return;
    }
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 80);
    return () => clearInterval(timer);
  }, [isDownloading]);

  const handleDownload = async (format: string, label: string) => {
    if (!captchaToken) {
      toast.error("Vui lòng xác minh captcha");
      return;
    }
    try {
      setIsDownloading(true);
      setDownloadingLabel(label);
      await downloaded(url, format, list.title);
      toast.success(`Bạn đã chọn và tải xuống ${list.title}`);
    } catch {
      toast.error("Tải thất bại, vui lòng thử lại sau");
      setIsDownloading(false);
      setDownloadingLabel(null);
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
    list.options.filter((opt) =>
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
          <ul className="h-96 w-full max-w-5xl overflow-y-auto p-5 flex flex-col gap-2 border-2 border-cyan-400 mt-4 border-dashed rounded-2xl">
            {filteredOptions.map((opt) => (
              <li
                key={opt.format_id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <span className="flex-1 text-black dark:text-white">
                  <span className="font-semibold">{opt.label}</span>{" "}
                  <span className="text-sm text-gray-500">
                    ({opt.ext.toUpperCase()} · {opt.resolution})
                  </span>
                  <span className="block text-xs text-gray-500 mt-1">
                    {opt.sizeLabel ? `~${opt.sizeLabel}` : "Kích thước không rõ"}
                    {opt.fps ? ` · ${opt.fps}fps` : ""}
                  </span>
                </span>
                <button
                  disabled={!captchaToken}
                  className={`flex items-center justify-center gap-1 rounded-lg px-4 py-2 transition-colors ${
                    captchaToken
                      ? "cursor-pointer bg-cyan-600 text-white hover:bg-cyan-700"
                      : "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                  onClick={() => handleDownload(opt.format_id, opt.label)}
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
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">No formats available.</p>
      )}
      {isDownloading && downloadingLabel && (
        <DownloadProgress
          label={downloadingLabel}
          progress={progress}
          onClose={() => {
            setIsDownloading(false);
            setDownloadingLabel(null);
          }}
        />
      )}
    </>
  );
};

export default ListFilterMedia;
