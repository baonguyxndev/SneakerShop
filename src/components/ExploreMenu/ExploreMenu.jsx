// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExploreMenuStyle.css";
import { category_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate();  // Đưa useNavigate ra ngoài

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);  // Cập nhật trạng thái danh mục hiện tại
    navigate(`/category/${categoryName}`); // Điều hướng đến trang chi tiết danh mục
    window.scrollTo(0, 0); //Scroll lên đầu trang
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Nhãn hàng</h1>
      <p className="explore-menu-text">
        Nike, Adidas, Puma, Converse, Vans, và New Balance đều là những biểu
        tượng hàng đầu trong thế giới sneaker, mỗi thương hiệu mang đến một nét
        độc đáo riêng biệt. Nike nổi tiếng với sự đổi mới và các dòng sản phẩm
        như Air Max và Jordan, kết hợp thời trang với hiệu suất thể thao.
        Adidas, với công nghệ Boost và dòng Yeezy, thể hiện sự sáng tạo và phong
        cách đường phố đầy cá tính. Puma gây ấn tượng với thiết kế trẻ trung,
        thoải mái và hiện đại. Converse, biểu tượng của sự đơn giản vượt thời
        gian, vẫn luôn được yêu thích qua nhiều thế hệ với Chuck Taylor All
        Star. Vans, thương hiệu gắn liền với văn hóa skate, mang lại sự bền bỉ
        và cá tính với các mẫu như Old Skool và Slip-On. Trong khi đó, New
        Balance mang đến sự kết hợp hoàn hảo giữa phong cách retro và hiện đại,
        làm hài lòng cả những người yêu thích thời trang và hiệu suất.
      </p>
      <div className="explore-menu-list">
        {category_list.map((item, index) => (
          <div
            onClick={() => handleCategoryClick(item.category_name)} // Sử dụng handleCategoryClick để xử lý sự kiện
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.category_name ? "active" : ""}
              src={item.category_image}
              alt={item.category_name}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
