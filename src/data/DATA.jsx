import axios from "axios";

const cache = {};

const fetchData = async () => {
  const url = "https://3.88.1.181:8000/products/public/catalog?supplier=FragranceX"; // Updated to HTTPS
  
  if (cache[url]) {
    return cache[url];
  } else {
    try {
      const res = await axios.get(url);
      cache[url] = res.data;
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to be handled by the calling code
    }
  }
};

export default fetchData;
