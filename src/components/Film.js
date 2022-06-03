import axios from "axios";
import { useEffect, useState } from "react";

export default function Film({ filmUrl }) {
  const [film, setFilm] = useState({
    title: "",
  });

  const fetchFilm = async () => {
    console.log(film);
    const response = await axios.get(filmUrl);
    setFilm(response.data);
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  return <>{film.title}</>;
}
