import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3000/blogs");
  return (
    <div className="home">
      <h1>HOMEPAGE</h1>
      {/* {error && <div>{error}</div>} */}
      {isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} title="All" />
    </div>
  );
};
export default Home;
