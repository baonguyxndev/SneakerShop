// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FooterStyle.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_footer} alt="logo" />
          <p>
            BaoBaoSneaker tự hào mang đến cho bạn những đôi giày chất lượng cao,
            phong cách và đa dạng. Với các thiết kế trẻ trung, hợp xu hướng và
            giá cả cạnh tranh, chúng tôi luôn nỗ lực mang lại trải nghiệm mua
            sắm tuyệt vời nhất. Hãy đến với BaoBaoSneaker để thể hiện phong cách
            riêng của bạn qua từng bước chân!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="icon-facebook" />
            <img src={assets.twitter_icon} alt="icon-twitter" />
            <img src={assets.linkedin_icon} alt="icon-linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 783356437</li>
            <li>giabao2005bbb@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Ⓒ BaoBaoSneaker.com - All right Reserved.
      </p>
    </div>
  );
}

export default Footer;
