import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "@/types/type";

interface Props {
  onChange: (value: Filter) => void;
  defaultFilter: Filter;
}

export function SelectFilter({ onChange, defaultFilter }: Props) {
  return (
    <Select defaultValue={defaultFilter} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Options" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="flex flex-col justify-center-safe items-center-safe">
          <SelectLabel className="text-center">Options</SelectLabel>
          <SelectItem className="text-center" value="all">
            All
          </SelectItem>
          <SelectItem className="text-center" value="audio">
            Audio
          </SelectItem>
          <SelectItem className="text-center" value="video">
            Video
          </SelectItem>
          <SelectItem className="text-center" value="audio+video">
            Video + Audio
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
