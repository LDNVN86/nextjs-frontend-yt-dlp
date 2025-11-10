import { FaImage } from "react-icons/fa";
import Image from "next/image";
import Monica from "../../../public/images/bantumlum1.jpg";
import { SelectFilter } from "../ui/button-Select";
import useFancybox from "@/hooks/useFancybox";
import { useMemo, useState } from "react";
import { Filter, ListFormats } from "@/types/type";
import ListFilterMedia from "./listMedia";
import Loading2 from "../ui/loading2";

interface Props {
  url: string;
  loading: boolean;
  data: ListFormats | null;
}

const formatDuration = (duration?: number) => {
  if (!duration || duration <= 0) {
    return null;
  }
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const formatted = [
    hours > 0 ? hours.toString().padStart(2, "0") : null,
    hours > 0
      ? minutes.toString().padStart(2, "0")
      : minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].filter(Boolean);

  return formatted.join(":");
};

export const InfoMedia = ({ url, loading, data }: Props) => {
  const [fancyboxRef] = useFancybox({});
  const [filter, setFilter] = useState<Filter>("all");
  const durationLabel = useMemo(() => formatDuration(data?.duration), [data]);
  const sourceLabel = data?.source
    ? data.source.charAt(0).toUpperCase() + data.source.slice(1)
    : null;

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center py-8">
        <span className="sr-only">Loading...</span>
        <Loading2 />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="p-3 flex flex-col justify-center items-center gap-4">
      <div className="text-center">
        <p className="text-xs uppercase tracking-wide text-cyan-600 dark:text-cyan-300">
          {sourceLabel ?? "Preview"}
        </p>
        <h2 className="text-2xl font-bold text-black dark:text-white">
          {data.title}
        </h2>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300 flex flex-col md:flex-row gap-2 justify-center items-center">
          {data.uploader && (
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1">
              Uploader: {data.uploader}
            </span>
          )}
          {durationLabel && (
            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1">
              Duration: {durationLabel}
            </span>
          )}
        </div>
      </div>
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
        <a
          data-fancybox="gallery"
          href={data.thumbnail || Monica.src}
          aria-label="Open preview image"
        >
          <Image
            src={data.thumbnail || Monica}
            alt="Preview Image"
            height={200}
            width={400}
          ></Image>
        </a>
      </div>
      <div className="flex justify-center-safe px-4 mb-4">
        <SelectFilter defaultFilter="all" onChange={setFilter}></SelectFilter>
      </div>
      <ListFilterMedia filter={filter} url={url} list={data}></ListFilterMedia>
    </div>
  );
};
