import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [asc, setAsc] = useState(true);

  return (
    <div className="space-y-10 mt-10">
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

      <div className="grid grid-cols-5 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
