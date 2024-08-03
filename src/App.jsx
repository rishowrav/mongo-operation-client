import { useState } from "react";
import Card from "./components/Card";

import useProducts from "./hooks/useProducts";

export default function App() {
  const [asc, setAsc] = useState(true);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);
  const [search, setSearch] = useState("");
  const [products, loading] = useProducts(asc, max, min, search);

  const handleMinMax = (e) => {
    e.preventDefault();
    setMin(parseInt(e.target.min.value));
    setMax(parseInt(e.target.max.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  console.log(products, loading);

  return (
    <div className="space-y-10 mt-10">
      {/* search and button */}
      <div className="flex justify-center gap-2">
        <form onSubmit={handleSearch} className="join">
          <input
            name="search"
            className="input input-bordered join-item"
            placeholder="Search"
          />
          <button type="submit" className="btn btn-neutral join-item ">
            Search
          </button>
        </form>

        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-active btn-accent"
        >
          Price: {asc ? "Low to High" : "High to Low"}
        </button>

        <form onSubmit={handleMinMax} className="join">
          <div>
            <div>
              <input
                type="number"
                name="min"
                className="input w-32 input-bordered join-item"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="max"
                className="input w-32 input-bordered join-item"
                placeholder="Max Price"
              />
            </div>
          </div>

          <input
            type="submit"
            className="btn join-item btn-neutral"
            value="search"
          />
        </form>
      </div>

      {/*  all card */}

      <div className="grid grid-cols-5 gap-2">
        {loading ? (
          <h1 className="flex justify-center text-2xl">
            <span>Loading...</span>
          </h1>
        ) : (
          products.map((data) => <Card key={data?.product_id} data={data} />)
        )}
      </div>
    </div>
  );
}
