import { Dispatch, SetStateAction, useState } from "react";

export interface UseSearchBar {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
  handleClear: () => void;
  searchKeyword: string;
}

export function useSearchBar({ keyword = "" }: { keyword?: string }): UseSearchBar {
  const [input, setInput] = useState<string>(keyword);
  const [searchKeyword, setSearchKeyword] = useState(input);

  const handleSearch = () => {
    setSearchKeyword(input);
  };

  const handleClear = () => {
    setInput("");
    setSearchKeyword("");
  };

  return {
    input,
    setInput,
    handleSearch,
    handleClear,
    searchKeyword,
  };
}
