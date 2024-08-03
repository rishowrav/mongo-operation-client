import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (asc, max, min, search) => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductData();
  }, [asc, max, min, search]);

  const getProductData = async () => {
    await axiosPublic
      .get(
        `/products?sort=${
          asc ? "asc" : "desc"
        }&min=${min}&max=${max}&search=${search}`
      )
      .then((res) => {
        setLoading(true);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  console.log(asc, max, min, search);
  return [products, loading];
};

export default useProducts;
