// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AboutUsStyle.css"; // Nhớ tạo file CSS và liên kết ở đây

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">
        Giới Thiệu Về Cửa Hàng Sneaker Chính Hãng
      </h1>
      <p className="about-us-description">
        Chào mừng bạn đến với SneakerShop - thiên đường của những tín đồ giày
        sneaker chính hãng. Chúng tôi tự hào là nhà phân phối các mẫu giày thời
        trang, đẳng cấp từ những thương hiệu hàng đầu thế giới, bao gồm
        <strong>
          {" "}
          Nike, Adidas, Puma, Ananas, New Balance, Converse, Vans{" "}
        </strong>
        và <strong>Bitis</strong>. Với cam kết mang đến sản phẩm chất lượng,
        chính hãng, SneakerShop chắc chắn là lựa chọn hàng đầu cho những ai yêu
        thích phong cách năng động và thời thượng.
      </p>

      <div className="brand-section about-us-layout">
        <div className="about-us-item">
          <h2 className="about-us-title">Nike - Đẳng Cấp Của Sự Tiên Phong</h2>
          <p className="about-us-description">
            Nike từ lâu đã trở thành biểu tượng của sự đổi mới trong ngành thời
            trang thể thao. Các mẫu giày nổi bật như{" "}
            <strong>Nike Air Force 1</strong>,<strong>Nike Air Jordan</strong>,
            và <strong>Nike Dunk</strong> là lựa chọn hàng đầu.
          </p>
          <img
            src="src/assets/nike-introducetion1.webp"
            alt="Nike"
            className="about-us-image"
          />
          <img
            src="src/assets/nike-introducetion2.jpeg"
            alt="Nike"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">Adidas - Tinh Tế Và Năng Động</h2>
          <p className="about-us-description">
            Với công nghệ <strong>Boost</strong> và <strong>Primeknit</strong>,
            Adidas tạo ra những đôi giày có độ nảy tuyệt vời. Các dòng sản phẩm
            như <strong>Adidas Ultraboost</strong>, <strong>Adidas NMD</strong>{" "}
            rất được yêu thích.
          </p>
          <img
            src="src/assets/adidas-introducetion1.jpg"
            alt="Adidas"
            className="about-us-image"
          />
          <img
            src="src/assets/adidas-introducetion2.jpg"
            alt="Adidas"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">Puma - Năng Động Và Sáng Tạo</h2>
          <p className="about-us-description">
            Puma với dòng sản phẩm <strong>Puma RS-X</strong> và{" "}
            <strong>Puma Suede</strong>, tạo nên dấu ấn với thiết kế sáng tạo và
            trẻ trung.
          </p>
          <img
            src="src/assets/puma-introducetion1.jpg"
            alt="Puma"
            className="about-us-image"
          />
          <img
            src="src/assets/puma-introducetion2.jpg"
            alt="Puma"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">Ananas - Phong Cách Việt Nam</h2>
          <p className="about-us-description">
            Là thương hiệu giày nội địa Việt Nam, <strong>Ananas</strong> luôn
            mang đến những sản phẩm độc đáo, phù hợp với văn hóa và phong cách
            của người trẻ Việt.
          </p>
          <img
            src="src/assets/ananas-introducetion1.jpg"
            alt="Ananas"
            className="about-us-image"
          />
          <img
            src="src/assets/ananas-introducetion2.webp"
            alt="Ananas"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">New Balance - Phong Cách Cổ Điển</h2>
          <p className="about-us-description">
            Với thiết kế đơn giản và cổ điển, các sản phẩm của{" "}
            <strong>New Balance</strong> luôn giữ được sự thanh lịch và thoải
            mái, phù hợp cho mọi lứa tuổi.
          </p>
          <img
            src="src/assets/new-balance-introducetion1.webp"
            alt="New Balance"
            className="about-us-image"
          />
          <img
            src="src/assets/new-balance-introducetion2.webp"
            alt="New Balance"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">Vans - Phong Cách Đường Phố</h2>
          <p className="about-us-description">
            <strong>Vans</strong> là biểu tượng của văn hóa đường phố với các
            dòng sản phẩm như <strong>Vans Old Skool</strong> và
            <strong>Vans Slip-On</strong>, mang đến sự năng động và phóng
            khoáng.
          </p>
          <img
            src="src/assets/vans-introducetion1.avif"
            alt="Vans"
            className="about-us-image"
          />
          <img
            src="src/assets/vans-introducetion2.jpg"
            alt="Vans"
            className="about-us-image"
          />
        </div>

        <div className="about-us-item">
          <h2 className="about-us-title">Bitis - Niềm Tự Hào Việt Nam</h2>
          <p className="about-us-description">
            <strong>Bitis</strong> với dòng sản phẩm <strong>Hunter</strong> đã
            vươn ra thế giới, là biểu tượng của chất lượng và phong cách Việt.
          </p>
          <img
            src="src/assets/bitis-introducetion1.webp"
            alt="Bitis"
            className="about-us-image"
          />
          <img
            src="src/assets/bitis-introducetion2.jpg"
            alt="Bitis"
            className="about-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
