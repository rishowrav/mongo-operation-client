import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import useAxiosPublic from "./hooks/useAxiosPublic";

export default function App() {
  const [asc, setAsc] = useState(true);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    await axiosPublic
      .get("/products/")
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

  return (
    <div className="space-y-10 mt-10">
      {/* search and button */}
      <div className="flex justify-center gap-2">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
          <button className="btn btn-neutral join-item ">Search</button>
        </div>

        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-active btn-accent"
        >
          {asc ? "Low to High" : "High to Low"}
        </button>
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
