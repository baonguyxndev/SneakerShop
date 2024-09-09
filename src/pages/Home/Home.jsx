// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./HomeStyle.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import SneakerDisplay from "../../SneakerDisplay/SneakerDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <SneakerDisplay category={category} />
    </div>
  );
};

export default Home;
