// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "./CategoryStyle.css";
import { StoreContext } from '../../context/StoreContext';
import SneakerItem from '../../SneakerItem/SneakerItem';
import { category_list } from '../../assets/assets'; // Import danh sách danh mục

const Category = () => {
  const { category } = useParams(); // Lấy danh mục từ URL
  const { sneaker_list } = useContext(StoreContext); // Lấy danh sách sản phẩm từ StoreContext

  // Lấy thông tin category (ảnh nền, background)
  const categoryData = category_list.find(item => item.category_name === category);

  // Lọc sản phẩm theo danh mục
  const filteredSneakers = sneaker_list.filter(item => item.category === category);

  return (
    <div className="category-page">
      {/* Hiển thị tên danh mục */}
      <h2>{category}</h2>

      {/* Hiển thị background nếu có */}
      {categoryData && (
        <div className="category-background">
          <img src={categoryData.category_background} alt={category} className="category-bg-image" />
        </div>
      )}

      {/* Hiển thị danh sách sản phẩm */}
      <div className="sneaker-display-list">
        {filteredSneakers.length > 0 ? (
          filteredSneakers.map(item => (
            <SneakerItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>Không có sản phẩm nào trong danh mục này.</p>
        )}
      </div>
    </div>
  );
}

export default Category;
