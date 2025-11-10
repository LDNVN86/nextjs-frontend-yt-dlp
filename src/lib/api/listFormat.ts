import axios from "axios";

export const listFormats = async (url: string) => {
  const res = await axios.get(`/api/formats`, {
    params: { url },
  });
  return res;
};

export const downloaded = (url: string, format: string, title?: string) => {
  const params = new URLSearchParams();
  params.set("url", url);
  params.set("format", format);
  if (title) {
    params.set("title", title);
  }

  window.location.href = `/api/download?${params.toString()}`;
};
