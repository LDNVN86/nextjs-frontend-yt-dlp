import axios from "axios";

export const listFormats = async (url: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/formats`, {
      params: { url },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getThumbnail = async (url: string) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/thumbnail`, {
    params: { url: url },
  });
  return res.data;
};

export const downloaded = (url: string, format: string) => {
  window.location.href = `${process.env.NEXT_PUBLIC_URL}/download?url=${url}&format=${format}`;
};
