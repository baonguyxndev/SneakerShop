// Products.js
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./ProductsStyle.css";
import { StoreContext } from "../../context/StoreContext";
import SneakerItem from "../../SneakerItem/SneakerItem";

const Products = () => {
  const { sneaker_list } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000000); // Giá tối đa mặc định

  const categories = Array.from(
    new Set(sneaker_list.map((product) => product.category))
  ).concat("All");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const filteredProducts = sneaker_list.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price <= maxPrice
  );

  return (
    <div className="products-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Tìm theo tên"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="price-filter">
          <label htmlFor="price-range">Phạm vi giá: 0 - {maxPrice}</label>
          <input
            type="range"
            id="price-range"
            min="0"
            max="10000000"
            step="10000"
            value={maxPrice}
            onChange={handlePriceChange}
            className="price-range"
          />
        </div>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <SneakerItem
            key={product._id}
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
