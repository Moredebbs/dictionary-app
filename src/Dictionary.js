import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
    let apiKey = "80428f51a21b4t3dfe9d3b547of6cb3f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?${keyword}=sunset&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
