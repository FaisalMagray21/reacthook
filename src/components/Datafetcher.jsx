import React from "react";
import { useEffect, useState } from "react";
function Datafetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">Data Fetcher</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center w-64"
              >
                <p className="text-3xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Datafetcher;
//in this component, we are fetching data from an API and displaying it in the browser.
//we are using the useEffect hook to fetch data when the component mounts.
//we are using the useState hook to manage the loading, error, and data state.
//we are displaying a loading message while the data is being fetched, an error message if there is an error, and the data if the fetch is successful.
//we are mapping over the data array and displaying each item in a card.
