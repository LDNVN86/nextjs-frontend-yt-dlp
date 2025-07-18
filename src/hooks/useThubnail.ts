import { getThumbnail } from "@/lib/api/listFormat";
import { useEffect, useState } from "react";

const useThumbnails = (url: string) => {
  const [thumbnailUrl, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    const fetch = async () => {
      try {
        const res = await getThumbnail(url);
        if (isMounted) setThumbnail(res);
      } catch (error) {
        console.log("Lỗi Lấy Thumbnail ", error);
      }
    };
    fetch();
    return () => {
      isMounted = false;
    };
  }, [url, thumbnailUrl]);
  return thumbnailUrl;
};
export default useThumbnails;
