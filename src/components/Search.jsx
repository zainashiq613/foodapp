/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./Search.module.css";
import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "054824006e03444381f12a4dbe6d930c";
export default function Search(props) {
  const [query, setquery] = useState("pasta");
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      props.setfooddata(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
}
