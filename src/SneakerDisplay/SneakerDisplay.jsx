// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SneakerDisplayStyle.css";
import SneakerItem from "../SneakerItem/SneakerItem";
import { StoreContext } from "../context/StoreContext";
import { category_list } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const SneakerDisplay = ({ category }) => {
  const { sneaker_list } = useContext(StoreContext);
  const navigate = useNavigate();

  // Tạo một đối tượng ánh xạ danh mục với ảnh và nền
  const categoryData = category_list.reduce((acc, item) => {
    acc[item.category_name] = {
      image: item.category_image,
      background: item.category_background,
    };
    return acc;
  }, {});

  // eslint-disable-next-line no-unused-vars
  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
    window.scrollTo(0, 0); // Điều hướng tới trang category
  };

  const handleSeeMoreClick = (categoryName) => {
    navigate(`/category/${categoryName}`); // Điều hướng tới toàn bộ sản phẩm trong danh mục
    window.scrollTo(0, 0); // Điều hướng tới trang category
  };

  return (
    <div className="sneaker-display" id="sneaker-display">
      {category === "All" ? (
        category_list.map((categoryItem) => {
          const categoryName = categoryItem.category_name;
          const { background } = categoryData[categoryName];
          const filteredSneakers = sneaker_list.filter(
            (item) => item.category === categoryName
          );

          return (
            <div key={categoryName} className="category-section">
              <img
                className="category-image"
                src={background}
                alt={categoryName}
              />
              <div className="sneaker-display-list">
                {filteredSneakers
                  .slice(0, 7) // Hiển thị 7 sản phẩm đầu tiên
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

                {filteredSneakers.length > 7 && (
                  <div
                    className="see-more-card"
                    onClick={() => handleSeeMoreClick(categoryName)}
                  >
                    <span className="see-more-text">Xem thêm</span>
                  </div>
                )}
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
