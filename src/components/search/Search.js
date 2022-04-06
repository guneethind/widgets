import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };
  //   hello;
  useEffect(() => {
    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: inputText,
        },
      });
      setResult(response.data.query.search);
      //   console.log(result);
    };

    if (result.length) {
      let timer = setTimeout(() => {
        // console.log("hello");
        inputText && search();
      }, 800);
      return () => {
        clearTimeout(timer);
      };
    }

    // console.log("hello2");
    search();

    // inputText ? search() : (() => {})();
  }, [inputText, result.length]);

  const renderedResult = result.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="content">
          <div className="header">
            <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>
              {item.title}
            </a>
          </div>

          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
          {/* {item.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label className="label">Search</label>
          <input
            className="input"
            type="text"
            value={inputText}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </>
  );
};

export default Search;
