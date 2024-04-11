import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
  }, []);

  const url = useSelector((store) => {
    return store.home.url;
  });

  console.log("url", url);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      App
      {url?.total_pages}
    </div>
  );
}

export default App;
