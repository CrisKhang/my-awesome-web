export const SITE = {
  name: "Nhà Lắp Ghép Bảo Thịnh Phát",
  shortName: "Bảo Thịnh Phát",
  tagline: "Dựng xây ước mơ",
  phone: "0866 195 108",
  phoneRaw: "0866195108",
  facebook: "https://www.facebook.com/profile.php?id=61581514989152",
  tiktok: "https://www.tiktok.com/@baothinhphat",
  email: "baothinhphat@gmail.com",
  contactEmail: "bgia35990@gmail.com",
  address: "Bình Quới - Bình Thạnh, TP. Hồ Chí Minh",
  hours: "Luôn mở cửa",
  logo: "/logo-bao-thinh-phat.jpg",
} as const;

export const PHONE_HREF = `tel:+84${SITE.phoneRaw.slice(1)}`;
export const ZALO_HREF = `https://zalo.me/${SITE.phoneRaw}`;
export const MAILTO_HREF = `mailto:${SITE.email}?subject=${encodeURIComponent(`Liên hệ tư vấn - ${SITE.shortName}`)}`;

export const categories = [
  "Nhà lắp ghép",
  "Nhà tiền chế",
  "Khung thép",
  "Panel lợp",
  "Phụ kiện",
  "Cửa sắt",
  "Lan can",
] as const;

/** Đánh giá khách hàng — thay `image` bằng ảnh công trình thật, vd: `/cong-trinh/nha-lap-ghep-1.jpg` */
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: 5 | 4 | 3 | 2 | 1;
  quote: string;
  image: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anh Nguyễn Văn Hùng",
    role: "Chủ thầu — Bình Dương",
    rating: 5,
    quote:
      "Tấm panel EPS cách nhiệt rất tốt, bề mặt phẳng đẹp, không cong vênh. Đội thợ lắp ghép nhiệt tình, làm việc gọn gàng và bàn giao đúng tiến độ cam kết.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    project: "Nhà lắp ghép 120m² — Dĩ An",
  },
  {
    id: "2",
    name: "Chị Trần Thị Mai",
    role: "Khách hàng — Bình Thạnh, TP.HCM",
    rating: 5,
    quote:
      "Panel lợp chống nóng hiệu quả, nhà mát hơn hẳn so với trước. Thợ thi công lắp ghép cẩn thận từng chi tiết, tư vấn nhiệt tình từ khâu thiết kế đến bàn giao.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    project: "Nhà tiền chế cấp 4 — Bình Thạnh",
  },
  {
    id: "3",
    name: "Anh Lê Quốc Bảo",
    role: "Chủ thầu — Long An",
    rating: 5,
    quote:
      "Khung thép và panel đồng bộ, chất lượng ổn định qua nhiều công trình. Bảo Thịnh Phát hỗ trợ kỹ thuật nhanh, đội lắp ghép làm việc có tổ chức, an toàn lao động tốt.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    project: "Văn phòng lắp ghép 200m² — Long An",
  },
  {
    id: "4",
    name: "Anh Phạm Đức Thắng",
    role: "Chủ thầu — Đồng Nai",
    rating: 5,
    quote:
      "Tấm panel dày, khóa liên kết chắc, thi công nhanh gọn trong 3 tuần. Thợ lắp ghép nhiệt tình, sửa chi tiết nhỏ đến khi chủ đầu tư hài lòng mới nghiệm thu.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    project: "Nhà lắp ghép 2 tầng — Biên Hòa",
  },
  {
    id: "5",
    name: "Chị Hoàng Thị Lan",
    role: "Khách hàng — Gò Vấp, TP.HCM",
    rating: 5,
    quote:
      "Mình rất hài lòng với chất lượng panel và lan can sắt đi kèm. Đội thi công lắp ghép sạch sẽ, dọn dẹp hiện trường sau khi hoàn thành — đáng tin cậy.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    project: "Nhà lắp ghép 80m² — Gò Vấp",
  },
  {
    id: "6",
    name: "Anh Võ Minh Khang",
    role: "Đối tác thi công — TP.HCM",
    rating: 5,
    quote:
      "Hợp tác nhiều dự án panel lợp và khung thép. Vật liệu đúng spec, giao hàng đúng hạn. Đội ngũ lắp ghép phối hợp tốt với bên mình trên công trường.",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    project: "Kho xưởng tiền chế — Củ Chi",
  },
];
