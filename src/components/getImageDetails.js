import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [listData, setListData] = useState();
  const [searchTerm, setSearchTerm] = useState(0);

  const fetchURL = async () => {
    try {
      const URL = `https://dummyjson.com/products/${searchTerm}`;
      const response = await fetch(URL);
      // .then((res) => res.json())
      // .then((res) => {
      console.log(URL);
      const json = await response.json();
      // const { data } = json;
      console.log(json);
      setListData(json);
      //setSearchTerm(0);
      // });
    } catch (error) {}
  };

  const searchProduct = (e) => {
    //const imgURL = `${URL}`;
    setSearchTerm((c) => c + 1);
    fetchURL();
    console.log("API called");
  };
  return (
    <div className="App">
      Product Search
      {/* <input type="text" value={searchTerm}/> */}
      <button type="submit" onClick={searchProduct}>
        Search Product
      </button>
      <ul>
        {/* {listData &&
          listData.map((eachItem) => {
            const { id, images, thumbnail, title } = eachItem;

            <li key={id}>
              <h1>{title}</h1>
              <img src={thumbnail} />
            </li>;
          })} */}
        <img src={listData && listData.thumbnail} />
      </ul>
    </div>
  );
}
