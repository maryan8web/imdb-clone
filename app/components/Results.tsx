import React from "react";
import { Movie } from "../types/Movie";

interface Props {
  results: Movie[];
}

const Results = ({ results }: Props) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
