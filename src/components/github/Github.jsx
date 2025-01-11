// import { useState, useEffect } from "react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Github() {
  // const [data, setdata] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/shaik-mohammed-uwais")
  //     .then((res) => res.json())
  //     .then((data) => setdata(data));
  // });

  const data = useLoaderData();

  return (
    <div className="bg-blue-900 lex justify-center items-center ">
      <div className="text-center text-white text-3xl">
        followers : {data.followers}
      </div>
      <div className="text-center text-white text-3xl">
        no of projects : {data.public_repos}
      </div>
      <LazyLoadImage width={300} src={data.avatar_url} alt="profile image" />
    </div>
  );
}
export default Github;
