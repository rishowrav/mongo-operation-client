import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import useAxiosPublic from "./hooks/useAxiosPublic";

export default function App() {
  const [asc, setAsc] = useState(true);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    getProductData();
  }, [asc, min, max, search]);

  const getProductData = async () => {
    await axiosPublic
      .get(
        `/products?sort=${
          asc ? "asc" : "desc"
        }&min=${min}&max=${max}&search=${search}`
      )
      .then((res) => {
        setLoading(true);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleMinMax = (e) => {
    e.preventDefault();
    setMin(parseInt(e.target.min.value));
    setMax(parseInt(e.target.max.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

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
      {loading ? (
        <h1 className="text-center text-2xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {product.map((data) => (
            <Card key={data?.product_id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}
