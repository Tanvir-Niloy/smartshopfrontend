import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Slider from '../components/Slider'
import HomeModal from "../components/HomeModal";

const Home = () => {
  return (
    <>
    <Slider/>
    <HomeModal/>
    <br/>
      <div className="jumbotron bg-danger text-white h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers","Reasonable Price"]} />
      </div>

      <h5 className="text-center bg-danger text-white  p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h5>
      <NewArrivals />

      <h5 className="text-center bg-danger text-white  p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h5>
      <BestSellers />

      <h5 className="text-center bg-danger text-white  p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h5>
      <CategoryList />

      <h5 className="text-center bg-danger text-white  p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h5>
      <SubList />
    </>
  );
};

export default Home;
