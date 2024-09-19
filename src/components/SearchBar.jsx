'use client';
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[20rem]">
      <input
        ref={inputRef}
        type="text"
        className="bg-[#222528] text-gray-200 text-sm py-2 pl-4 rounded-lg w-full focus:outline-none"
        placeholder="Search for collections, stamps or users"
        value={query}
        onChange={handleSearch}
      />
      <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
        <Search className="w-4"/>
      </span>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="z-50 absolute left-0 right-0 mt-2 bg-zinc-800 text-white text-sm rounded-lg shadow-lg transition-transform duration-300 transform scale-y-100 origin-top"
        >
          <ul className="py-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setQuery(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-400">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
