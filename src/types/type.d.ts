export interface ListFormats {
  title: string;
  options: [
    {
      label: string;
      format_id: string;
      ext: string;
      resolution: string;
      type: string;
    }
  ];
}
