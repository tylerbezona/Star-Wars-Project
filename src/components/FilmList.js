import { useState } from "react";
import Film from "./Film";

export default function FilmList({ films }) {
  const [filmList, setFilmList] = useState(films ?? []);
  console.log(filmList);
  return (
    <>
      {films?.map((film) => (
        <Film filmUrl={film} />
      ))}
    </>
  );
}
