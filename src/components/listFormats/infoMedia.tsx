import { FaImage } from "react-icons/fa";
import Image from "next/image";
import Monica from "../../../public/images/bantumlum1.jpg";
import { SelectFilter } from "../ui/button-Select";
import useFancybox from "@/hooks/useFancybox";
import { useState } from "react";
import { Filter, ListFormats } from "@/types/type";
import ListFilterMedia from "./listMedia";
import Loading2 from "../ui/loading2";

interface Props {
  url: string;
  loading: boolean;
  list: ListFormats;
  thumbnail: string;
  title: string;
}

export const InfoMedia = ({ url, loading, list, thumbnail, title }: Props) => {
  const [fancyboxRef] = useFancybox({});
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <>
      {loading && (
        <div role="status" className="flex justify-center items-center py-8">
          <span className="sr-only">Loading...</span>
          <Loading2 />
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
          <ListFilterMedia
            filter={filter}
            url={url}
            list={list}
            title={title}
          ></ListFilterMedia>
        </div>
      )}
    </>
  );
};
