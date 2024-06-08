export default function Footer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 bg-header p-2 gap-2 items-center">
      <div>
        <div className="font-bold">Giới thiệu</div>
        <ul>
          <li>Trang chủ</li>
          <li>Phim</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Hợp tác</div>
        <ul>
          <li>Đăng quảng cáo</li>
          <li>Thông tin</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Hỗ trợ giúp đỡ</div>
        <ul>
          <li>Liên hệ</li>
          <li>Báo cáo</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Điều khoản</div>
        <ul>
          <li>Điều Khoản chung</li>
          <li>Chính sách riêng tư</li>
        </ul>
      </div>
    </div>
  );
}
