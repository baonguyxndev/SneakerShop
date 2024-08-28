// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './SneakerDisplayStyle.css';
import SneakerItem from '../SneakerItem/SneakerItem';
import { StoreContext } from '../context/StoreContext';

const SneakerDisplay = () => {
  const { sneaker_list } = useContext(StoreContext);

  // Lấy danh sách các danh mục khác nhau
  const categories = [...new Set(sneaker_list.map((item) => item.category))];

  return (
    <div className='sneaker-display' id='sneaker-display'>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="sneaker-display-list">
            {sneaker_list
              .filter((item) => item.category === category)
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
      ))}
    </div>
  );
};

export default SneakerDisplay;
