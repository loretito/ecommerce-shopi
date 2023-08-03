import { useContext, useState } from "react";
import { Card, ProductDetail, Loader } from "../components";
import { ShoppingContext } from "../context/ShoppingContext";

export const Home = () => {
  const {
    setsearchByTitle,
    searchByTitle,
    filteredItems,
    categories,
    setcategory,
    loading,
  } = useContext(ShoppingContext);
  const [openSelect, setOpenSelect] = useState(false);
  const [showCategory, setShowCategory] = useState("All categories");

  const selectCategory = category => {
    setOpenSelect(false);
    setcategory(category);
    setShowCategory(category);
  };

  const removeFilters = () => {
    setcategory("");
    setShowCategory("All categories");
    setOpenSelect(false);
  };

  return (
    <>
      <h1 className="title">Exclusive Products</h1>
      <div className="rounded-lg border flex justify-between items-center pr-4 relative">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0  inline-flex items-center py-2.5 px-3 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
          onClick={() => setOpenSelect(state => !state)}
        >
          {showCategory}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden={openSelect}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            openSelect ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-38 dark:bg-gray-700 absolute -bottom-[10rem]`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {categories.map(category => (
              <li key={category}>
                <button
                  type="button"
                  className="inline-flex w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <input
          type="text"
          placeholder="Search a product"
          className="py-2 focus:outline-none md:w-96 pl-4 w-40"
          value={searchByTitle}
          onChange={event => setsearchByTitle(event.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#94a3b8"
          className="w-6 h-6 md:block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        {!(showCategory === "All categories") && (
          <div
            className="absolute right-0 -bottom-10 text-sm bg-slate-400 text-white py-1 px-2 rounded-lg hover:bg-slate-500 hover:cursor-pointer"
            onClick={() => removeFilters()}
          >
            Remove filters x
          </div>
        )}
      </div>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3  w-fit max-x-screen-lg my-12">
        {filteredItems.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {loading && <Loader />}
      {!loading && filteredItems.length === 0 && <p>No results found</p>}
      <ProductDetail />
    </>
  );
};
