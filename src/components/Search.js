// import { Store } from "../UI/Body/Gender/Store";
import classes from "../UI/Header/Header.module.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { IoCloseOutline } from "react-icons/io5";

const Search = ({ data }) => {
  const [searchValue, setSearchValue] = useState();
  const [suggest, setSuggest] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const changeSuggestion = (e) => {
    setSuggest(true);
    setSearchValue(e.target.value);
    const newFilter = data.filter((val) =>
      val[2].toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newFilter);
  };

  const submitLink = (each) => {
    setSearchValue(each);
    setSuggest(false);
  };

  return (
    <div className={classes.searchMenu}>
      <input
        type="text"
        value={searchValue}
        onInput={changeSuggestion}
        placeholder=" I'm shopping for "
        name=""
      />
      <button>
        <AiOutlineSearch color="" />
      </button>
      {suggest && searchValue !== "" ? (
        <ul className={classes.suggestion}>
          {filteredData.map((each) => (
            <Link
              className={classes.alink}
              to={`/search/${each[0]}`}
              onClick={submitLink.bind(null, each[2])}
            >
              {each[2]}
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
