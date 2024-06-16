import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value, delay);

  useEffect(() => {
    const handle = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
