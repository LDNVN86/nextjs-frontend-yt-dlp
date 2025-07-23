import axios from "axios";

export const listFormats = async (url: string) => {
  const res = await axios.get(`/api/formats`, {
    params: { url },
  });
  return res;
};

export const downloaded = (url: string, format: string, title: string) => {
  window.location.href = `/api/download?url=${url}&format=${format}&title=${title}`;
};
