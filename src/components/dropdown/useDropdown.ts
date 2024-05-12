import { Dispatch, SetStateAction, useState } from "react";

export interface UseDropdown {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  options: string[];
}

export const useDropdown = ({ options, defaultOption }: { options: string[]; defaultOption: string }): UseDropdown => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  return { selectedOption, setSelectedOption, options };
};
