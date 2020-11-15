import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string): Promise<void> => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Wilmington, North Carolina",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage] as const;
};
