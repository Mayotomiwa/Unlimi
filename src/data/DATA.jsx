import axios from "axios";

const cache = {};

 const fetchData = async () => {
  if (cache["http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX"]) {
    return cache["http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX"];
  } else {
    const res = await axios.get(
      "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX"
    );
    cache["http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX"] = res.data;
    return res.data;
  }
};

export default fetchData;
