// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./ServiceStyle.css";

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Dịch Vụ Chăm Sóc Giày Cao Cấp Tại BaoBao</h1>
      <p>Chúng tôi, tại BaoBao, tự hào cung cấp các dịch vụ chăm sóc giày chuyên nghiệp với mục tiêu mang lại sự hài lòng tối đa cho khách hàng. Dưới đây là chi tiết các dịch vụ chúng tôi cung cấp, cùng với những lợi ích và quy trình thực hiện, giúp bạn hiểu rõ hơn về cách chúng tôi có thể làm cho đôi giày của bạn trở nên hoàn hảo nhất.</p>

      <div className="service-item">
        <div className="image-grid">
          <img src="src/assets/clean-sneaker.jpg" alt="Làm sạch giày" className="service-image" />
        </div>
        <h2>Làm Sạch Giày Chuyên Nghiệp – Đem Lại Sự Tươi Mới Cho Đôi Giày Của Bạn</h2>
        <p>Chăm sóc giày không chỉ là việc làm sạch bề mặt, mà còn là việc bảo vệ và duy trì chất lượng của từng chi tiết. Dịch vụ làm sạch giày của chúng tôi được thiết kế để đáp ứng mọi nhu cầu của bạn, từ việc loại bỏ bụi bẩn hàng ngày đến các vết bẩn cứng đầu.</p>
        <ul>
          <li><strong>Quy Trình Làm Sạch:</strong> Đầu tiên, chúng tôi thực hiện bước kiểm tra để xác định loại vết bẩn và chất liệu của giày. Sau đó, áp dụng các sản phẩm làm sạch chuyên biệt và công nghệ làm sạch sâu để loại bỏ bụi bẩn và vết bẩn. Cuối cùng, giày được xử lý bằng lớp bảo vệ chống nước và bẩn để giữ cho chúng luôn mới và sạch.</li>
          <li><strong>Sản Phẩm Sử Dụng:</strong> Chúng tôi chỉ sử dụng các sản phẩm làm sạch không chứa hóa chất độc hại, bảo vệ an toàn cho chất liệu giày và môi trường. Các sản phẩm này được chọn lọc kỹ lưỡng để đảm bảo hiệu quả và sự an toàn tối đa.</li>
        </ul>
        <p>Chúng tôi cam kết mang đến cho bạn dịch vụ làm sạch giày chất lượng nhất, giúp đôi giày của bạn luôn tươi mới và sáng bóng như mới. Đội ngũ kỹ thuật viên của chúng tôi là những người dày dạn kinh nghiệm và am hiểu sâu về các loại giày và cách chăm sóc chúng.</p>
      </div>
    
      <div className="service-item">
        <div className="image-grid">
          <img src="src/assets/glue-sole.png" alt="Bọc đế giày" className="service-image" />
        </div>
        <h2>Bọc Đế Giày – Giải Pháp Bảo Vệ Đế Giày Toàn Diện</h2>
        <p>Đế giày là phần quan trọng nhưng cũng là phần dễ bị mài mòn nhất. Để bảo vệ đế giày của bạn khỏi sự hao mòn và hư hỏng, chúng tôi cung cấp dịch vụ bọc đế giày chất lượng cao. Dịch vụ này không chỉ giúp kéo dài tuổi thọ của giày mà còn duy trì vẻ đẹp và sự thoải mái của đôi giày.</p>
        <ul>
          <li><strong>Vật Liệu Sử Dụng:</strong> Chúng tôi sử dụng các vật liệu bọc đế cao cấp, được thiết kế đặc biệt để chống mài mòn và hư hỏng. Vật liệu này không chỉ đảm bảo độ bền mà còn giữ được sự thẩm mỹ và cảm giác thoải mái khi đi giày.</li>
          <li><strong>Quy Trình Thực Hiện:</strong> Đầu tiên, chúng tôi sẽ làm sạch và chuẩn bị đế giày. Sau đó, đo và cắt vật liệu bọc đế chính xác để phù hợp hoàn hảo với đế giày của bạn. Cuối cùng, chúng tôi thực hiện việc gắn bọc đế bằng công nghệ tiên tiến để đảm bảo độ bám dính và bảo vệ tối ưu.</li>
        </ul>
        <p>Với dịch vụ bọc đế giày của chúng tôi, bạn có thể hoàn toàn yên tâm rằng đôi giày của bạn sẽ được bảo vệ khỏi sự mài mòn và hư hỏng, giúp bạn sử dụng lâu dài mà không phải lo lắng về việc sửa chữa đế giày thường xuyên.</p>
      </div>

      <div className="service-item">
        <div className="image-grid">
          <img src="src/assets/custom-sneaker.jpg" alt="Custom giày" className="service-image" />
        </div>
        <h2>Custom Giày – Tạo Dấu Ấn Cá Nhân Với Thiết Kế Độc Đáo</h2>
        <p>Nếu bạn muốn thể hiện cá tính và phong cách riêng của mình, dịch vụ custom giày của chúng tôi chính là sự lựa chọn lý tưởng. Chúng tôi cung cấp dịch vụ thiết kế và tùy chỉnh giày theo ý tưởng và sở thích của bạn, giúp bạn sở hữu những đôi giày độc đáo và không thể tìm thấy ở đâu khác.</p>
        <ul>
          <li><strong>Dịch Vụ Tùy Chỉnh:</strong> Chúng tôi hỗ trợ thiết kế và tùy chỉnh từ các chi tiết nhỏ nhất như màu sắc, hoa văn đến các yếu tố thiết kế lớn hơn như kiểu dáng và chất liệu. Đội ngũ thiết kế của chúng tôi sẽ làm việc chặt chẽ với bạn để đảm bảo rằng đôi giày cuối cùng phản ánh chính xác ý tưởng của bạn.</li>
          <li><strong>Quy Trình Thực Hiện:</strong> Quy trình bắt đầu bằng việc thảo luận và xác định ý tưởng thiết kế. Sau đó, chúng tôi tạo mẫu thử để bạn xem trước. Khi bạn hài lòng với thiết kế, chúng tôi tiến hành thực hiện và hoàn thiện giày với sự tỉ mỉ và cẩn thận nhất.</li>
        </ul>
        <p>Chúng tôi cam kết cung cấp cho bạn những đôi giày tùy chỉnh với chất lượng hoàn hảo và thiết kế độc quyền. Đội ngũ của chúng tôi sẽ làm việc không mệt mỏi để tạo ra những sản phẩm mà bạn sẽ tự hào khi sở hữu và diện.</p>
      </div>

      <div className="service-item">
        <div className="image-grid">
          <img src="src/assets/fix-sneaker.jpg" alt="Sửa chữa giày" className="service-image" />
        </div>
        <h2>Sửa Chữa Giày – Khôi Phục Đôi Giày Của Bạn Đến Từng Chi Tiết</h2>
        <p>Các vấn đề như hỏng đế, rách da, hoặc hỏng dây kéo có thể làm giảm giá trị và sự thoải mái của đôi giày của bạn. Dịch vụ sửa chữa giày của chúng tôi cung cấp các giải pháp hiệu quả để khắc phục những vấn đề này, giúp đôi giày của bạn trở lại trạng thái hoàn hảo.</p>
        <ul>
          <li><strong>Dịch Vụ Sửa Chữa:</strong> Chúng tôi sửa chữa mọi loại vấn đề như hỏng đế, rách da, thay thế dây kéo, và nhiều hơn nữa. Các vấn đề sẽ được xử lý bằng các kỹ thuật sửa chữa tiên tiến và vật liệu chất lượng cao để đảm bảo sự bền bỉ và thẩm mỹ của giày.</li>
          <li><strong>Chất Lượng Sửa Chữa:</strong> Chúng tôi cam kết sử dụng các công nghệ và vật liệu sửa chữa hiện đại nhất để đảm bảo rằng đôi giày của bạn sẽ được khôi phục về trạng thái tối ưu nhất. Đội ngũ kỹ thuật viên của chúng tôi luôn sẵn sàng để xử lý mọi yêu cầu của bạn với sự tỉ mỉ và chính xác.</li>
        </ul>
        <p>Với dịch vụ sửa chữa giày của chúng tôi, bạn không cần phải lo lắng về việc phải thay thế giày mới khi gặp vấn đề. Chúng tôi sẽ khôi phục đôi giày của bạn đến từng chi tiết, giúp bạn tiếp tục sử dụng và yêu thích đôi giày của mình lâu dài.</p>
      </div>
    </div>
  )
}

export default Service
