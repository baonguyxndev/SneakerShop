// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Sắm giày xịn cùng BaoBao Sneaker</h2>
        <p>
          Chúng tôi có tất cả các thương hiệu đã và đang trending, cùng với đầy
          đủ size và màu cho các bạn có thể thỏa sức lựa chọn. Còn chờ gì nữa
          này chốt ngay cho mình những em giày thật chất lượng mà giá cả lại
          phải chăng nhé.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
