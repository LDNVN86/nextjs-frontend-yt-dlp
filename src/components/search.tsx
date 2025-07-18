"use client";
import { downloaded, listFormats } from "@/lib/api/listFormat";
import { ListFormats } from "@/types/type";
import React, { useState } from "react";
import Loading from "./ui/loading";
import Image from "next/image";
import Monica from "../../public/images/bantumlum1.jpg";
import { toast } from "sonner";
import useThumbnails from "@/hooks/useThubnail";

import { IoMdCodeDownload } from "react-icons/io";
import { SelectFilter } from "./ui/button-Select";
import { FaImage } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";
import useFancybox from "@/hooks/useFancybox";

export default function CenteredSearchForm() {
  const [linkUrl, setUrl] = useState("");
  const [filter, setFilter] = useState<
    "all" | "audio" | "video" | "audio+video"
  >("all");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<ListFormats | null>(null);
  const thumbnail: any = useThumbnails(linkUrl);
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkUrl) return;
    setLoading(true);
    setList(null);
    try {
      const res = await listFormats(linkUrl);
      setList(res?.data);
    } catch (err) {
      console.error("Error fetching formats:", err);
    } finally {
      setLoading(false);
    }
  };
  const filteredOptions =
    list?.options.filter((opt) => {
      if (filter === "all") return true;
      return opt.type === filter;
    }) || [];

  const handleDownloaded = async (format: string) => {
    try {
      await downloaded(linkUrl, format);
      toast.success("tải thành công");
    } catch (error) {
      toast.error("tải thất bại vui lòng thử lại sao");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <form
          onSubmit={handleFetch}
          className="w-full max-w-md bg-cyan-100 dark:bg-cyan-900 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
              <div className="flex-1 relative">
                <input
                  type="search"
                  id="default-search"
                  value={linkUrl}
                  onChange={(e) => setUrl(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 text-sm text-black dark:text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Paste YouTube URL..."
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg px-6 py-3 transition"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div role="status" className="flex justify-center items-center py-8">
          <span className="sr-only">Loading...</span>
          <Loading />
        </div>
      )}

      {!loading && list && thumbnail && (
        <div className="p-3 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold flex flex-row justify-center-safe items-center-safe gap-2 border-b-4 ">
            <div>
              <span className="text-center flex flex-row justify-center items-center gap-2">
                <FaImage />
                Preview Image
              </span>
              <p className="text-sm font-light">
                Click on the image to see more clearly!
              </p>
            </div>
          </div>
          <div
            ref={fancyboxRef}
            className="flex justify-center-safe items-center-safe my-4 border-cyan-300 border-6 border-double p-4"
          >
            <a data-fancybox="gallery" href={thumbnail}>
              <Image
                src={thumbnail || Monica}
                alt="Preview Image"
                height={200}
                width={400}
              ></Image>
            </a>
          </div>

          <div className="flex justify-center-safe px-4 mb-4">
            <SelectFilter
              defaultFilter="all"
              onChange={setFilter}
            ></SelectFilter>
          </div>

          {filteredOptions.length > 0 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-1 text-xl text-center font-semibold mb-2 text-black dark:text-white">
                <MdOutlineSubtitles className="size-10" /> Available{" "}
                {filter === "all" ? "Formats" : filter.replace("+", " + ")} for
                "{list.title}"
              </div>
              <ul className=" h-96 max-w-5xl overflow-y-auto p-5 flex flex-col gap-2 justify-center-safe border-2 border-cyan-400 mt-4 border-dashed rounded-2xl">
                {filteredOptions.map((opt, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between font-medium gap-20 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
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
            </div>
          ) : (
            <p className="text-center text-gray-500">No formats available.</p>
          )}
        </div>
      )}
    </div>
  );
}
