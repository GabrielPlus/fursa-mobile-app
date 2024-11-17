// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query = {}) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Replace with your API's base URL
//   const BASE_URL = 'http://192.168.0.113:3000/api'; 

//   // Updated options object without RapidAPI headers
//   const options = {
//     method: "GET",
//     url: `${BASE_URL}/${endpoint}`,
//     params: { ...query }, // Pass any query params like filters or search terms
//   };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);
//       // Update this line based on your API response format
//       setData(response.data.data || response.data); 
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       console.error("Fetch error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [endpoint, query]); // Fetch data when endpoint or query changes

//   // Refetch function for manual reload
//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;



import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '18d4af02e0msha0fb3a0cadbe32cp10b9cbjsne9e5e3bcb552',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
