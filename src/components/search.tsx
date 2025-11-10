"use client";
import { listFormats } from "@/lib/api/listFormat";
import { ListFormats } from "@/types/type";
import React, { useState } from "react";
import { InfoMedia } from "./listFormats/infoMedia";
import { toast } from "sonner";

export default function CenteredSearchForm() {
  const [linkUrl, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<ListFormats | null>(null);

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkUrl) return;
    setLoading(true);
    setList(null);
    try {
      const res = await listFormats(linkUrl);
      toast.success("Đã Tìm Thấy Danh Sách Fomat Cho Video");
      setList(res?.data);
    } catch (_err: unknown) {
      toast.error("Lỗi Lấy Dữ Liệu Từ URL❌, Vui Lòng Thử Lại Sau");
      throw _err;
    } finally {
      setLoading(false);
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
      <InfoMedia url={linkUrl} loading={loading} data={list}></InfoMedia>
    </div>
  );
}
