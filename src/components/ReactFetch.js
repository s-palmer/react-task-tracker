import React, { useEffect } from "react";

const Data = () => {
  useEffect(() => {
    const url = "/posts/index";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json[json.length - 1].message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  return <div></div>;
};

export default Data;
