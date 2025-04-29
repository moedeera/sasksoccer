"use client";

import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export const Page = () => {
  const { keyword } = useParams();
  const { suggestionList } = useContext(GlobalContext);

  const [results, setResults] = useState([]);

  const getNonMatchingLetters = (originalKeyword, potentialMatch) => {
    const originalWords = originalKeyword.toLowerCase().split(" ");
    const potentialWords = potentialMatch.toLowerCase().split(" ");

    return potentialWords
      .filter((word) => !originalWords.includes(word))
      .join(" ");
  };

  const highlightMatch = (originalKeyword, potentialMatch) => {
    const originalLower = originalKeyword.toLowerCase();
    const potentialLower = potentialMatch.toLowerCase();

    return potentialMatch.split(" ").map((word, index) => {
      if (originalLower.includes(word.toLowerCase())) {
        return (
          <span key={index} className="font-bold underline">
            {word}
          </span>
        );
      } else {
        return <span key={index}> {word} </span>;
      }
    });
  };

  useEffect(() => {
    const searchSuggestions = () => {
      if (!keyword || !suggestionList) return;

      const filteredResults = suggestionList.filter((item) =>
        item.keywords.some((kw) =>
          kw.toLowerCase().includes(keyword.toLowerCase())
        )
      );

      setResults(filteredResults);
    };

    searchSuggestions();
  }, [keyword, suggestionList]);

  return (
    <div className="component-container">
      <div className="text-xl mb-8">
        {results.length} Search Results for{" "}
        <span className="font-bold text-cyan-600 ">{keyword}</span>{" "}
      </div>
      <div className="results-container flex flex-col gap-4">
        {results.map((result, index) => (
          <div key={index}>
            - {highlightMatch(keyword, result.name)}
            {getNonMatchingLetters} in{" "}
            <Link href={result.link} className="text-cyan-600 font-bold">
              {result.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
