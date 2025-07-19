import axios from "axios";
import { toast } from "sonner";

export const listFormats = async (url: string) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/formats`, {
    params: { url },
  });
  return res;
};

export const downloaded = (url: string, format: string, title: string) => {
  window.location.href = `${process.env.NEXT_PUBLIC_URL}/download?url=${url}&format=${format}&title=${title}`;
};
