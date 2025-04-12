import React, { useState } from "react";
import { useAppData } from "../context/AppContext";

const SearchBox = () => {
  const { search, setSearch, fetchData, loading } = useAppData();
  const [isEmpty, setIsEmpty] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const searchData = search.trim();
    const hasValue = searchData.length > 0;
    if (hasValue && isEmpty) {
      setIsEmpty(false);
    } else if (!hasValue) {
      setIsEmpty(true);
      return;
    }

    fetchData();
  };
  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={onSubmit} className="relative">
        <input
          value={loading ? "Searching..." : search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-5 text-appBlack3 dark:text-white rounded-2xl bg-appGray3 dark:bg-appBlack2 font-bold md:text-xl focus:outline-appPurple"
          type="text"
          inputMode="search"
          placeholder="Search for any word..."
          name="search"
          disabled={loading}
        />
        <img
          className="absolute right-6 top-1/2 -translate-y-1/2"
          src="/images/icon-search.svg"
          alt="Search"
        />
      </form>

      {isEmpty && (
        <p className="md:text-xl text-appRed">Whoops, can't be empty…</p>
      )}
    </div>
  );
};

export default SearchBox;
