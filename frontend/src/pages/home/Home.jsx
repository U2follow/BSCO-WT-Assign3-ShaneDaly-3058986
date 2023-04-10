import React, { useEffect, useState } from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Intro from "../../components/blog/Intro";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Intro />
      {/* <Category /> */}
      <Card posts={posts} />
    </>
  );
};
