export type StreamCategory = "audio" | "video" | "audio+video";

export type Filter = "all" | StreamCategory;

export interface FormatOption {
  label: string;
  format_id: string;
  ext: string;
  resolution: string;
  type: StreamCategory;
  sizeBytes?: number;
  sizeLabel?: string;
  fps?: number | null;
}

export interface ListFormats {
  title: string;
  thumbnail: string;
  duration?: number;
  uploader?: string;
  source?: string;
  options: FormatOption[];
}
