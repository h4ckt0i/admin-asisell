import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Input from "../input/input";
import IconButton from "../iconButton/iconButton";
import SearchIcon from "~/assets/icons/searchIcon";
import useDebounce from "~/hooks/useDebounce";
import { fetchApi } from "~/utils/common";
// import * as productSlice from "~/store/common/slice/productSlice";

import styles from "./search.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Search({ placeholder, isDisabled, className }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const dispatch = useDispatch();

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    // if (!debouncedValue.trim()) {
    //   setSearchResult([]);
    //   return;
    // }
    // const getProducts = (keyWords) =>
    //   fetchApi(productSlice.getAllBySearch(keyWords), dispatch);
    // getProducts({ search: debouncedValue }).then((result) => {
    //   setSearchResult(result);
    // });
  }, [debouncedValue]);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className={clsx(generalStyles.search, styles.container, className)}>
      <div className={styles.inputContainer}>
        <Input
          ref={inputRef}
          value={searchValue}
          placeholder={placeholder}
          spellCheck={false}
          onChange={handleChange}
          rightChildren={
            <IconButton className={styles.searchBtn}>
              <SearchIcon className={styles.searchIcon} />
            </IconButton>
          }
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
}

export default Search;
