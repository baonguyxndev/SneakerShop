// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./SneakerDisplayStyle.css";
import SneakerItem from "../SneakerItem/SneakerItem";
import { StoreContext } from "../context/StoreContext";
import { category_list } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const SneakerDisplay = ({ category }) => {
  const { sneaker_list } = useContext(StoreContext);

  // Tạo một đối tượng ánh xạ danh mục với ảnh và nền
  const categoryData = category_list.reduce((acc, item) => {
    acc[item.category_name] = {
      image: item.category_image,
      background: item.category_background,
    };
    return acc;
  }, {});

  return (
    <div className="sneaker-display" id="sneaker-display">
      {category === "All" ? (
        category_list.map((categoryItem) => {
          const categoryName = categoryItem.category_name;
          const {background } = categoryData[categoryName];
          return (
            <div key={categoryName} className="category-section">
              <img
                className="category-image"
                src={background}
                alt={categoryName}
              />
              <div className="sneaker-display-list">
                {sneaker_list
                  .filter((item) => item.category === categoryName)
                  .slice(0, 4) // Hiển thị 4 sản phẩm đầu tiên trong mỗi danh mục
                  .map((item) => (
                    <SneakerItem
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="category-section">
          {categoryData[category] && (
            <>
              <img
                className="category-image"
                src={categoryData[category].background}
                alt={category}
              />
            </>
          )}
          <div className="sneaker-display-list">
            {sneaker_list
              .filter((item) => item.category === category)
              .map((item) => (
                <SneakerItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SneakerDisplay;
