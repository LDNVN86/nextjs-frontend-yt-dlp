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
  const [reCapcha, setRecapcha] = useState<boolean>(false);
  const handleDownloaded = async (format: string) => {
    if (!reCapcha) {
      await toast.error("vui lòng xác minh capcha");
      return;
    }
    try {
      downloaded(url, format, title);
      toast.success(`Bạn Đã Chọn Và Tải Xuống ${title}`);
    } catch (error) {
      toast.error("tải thất bại vui lòng thử lại sao");
    }
  };
  const filteredOptions =
    list?.options.filter((opt) => {
      if (filter === "all") return true;
      return opt.type === filter;
    }) || [];

  const onChange = () => {
    setRecapcha(true);
  };

  return (
    <>
      {filteredOptions.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center-safe gap-1 text-xl text-center font-semibold mb-2 text-black dark:text-white">
            <MdOutlineSubtitles className="size-10" /> Available{" "}
            {filter === "all" ? "Formats" : filter.replace("+", " + ")} for "
            {list.title}"
          </div>
          <ul className=" h-96 max-w-5xl overflow-y-auto p-5 flex flex-col gap-2 justify-center-safe border-2 border-cyan-400 mt-4 border-dashed rounded-2xl">
            {filteredOptions.map((opt, idx) => (
              <li
                key={idx}
                className="flex justify-between font-[chinacat] gap-20 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <span className="flex flex-row items-center-safe text-black dark:text-white">
                  {opt.label} ({opt.ext} - {opt.resolution})
                </span>
                <button
                  className="cursor-pointer flex flex-row gap-1 justify-center-safe items-center-safe"
                  onClick={() => {
                    handleDownloaded(opt.format_id);
                  }}
                >
                  <IoMdCodeDownload className="text-center size-5" />
                  Download
                </button>
              </li>
            ))}
          </ul>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
            onChange={onChange}
            className="mt-4 cursor-pointer"
            size="compact"
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">No formats available.</p>
      )}
    </>
  );
};

export default ListFilterMedia;
