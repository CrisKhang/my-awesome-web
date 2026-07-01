export const SITE = {
  name: "Nhà Lắp Ghép Bảo Thịnh Phát",
  shortName: "Bảo Thịnh Phát",
  tagline: "Dựng xây ước mơ",
  phone: "0337 429 181",
  phoneRaw: "0337429181",
  facebook: "https://www.facebook.com/profile.php?id=61581514989152",
  address: "Bình Quới - Bình Thạnh, TP. Hồ Chí Minh",
  hours: "Luôn mở cửa",
  logo: "/logo-bao-thinh-phat.jpg",
} as const;

export const PHONE_HREF = `tel:+84${SITE.phoneRaw.slice(1)}`;
export const ZALO_HREF = `https://zalo.me/${SITE.phoneRaw}`;

export const categories = [
  "Nhà lắp ghép",
  "Nhà tiền chế",
  "Khung thép",
  "Panel lợp",
  "Phụ kiện",
  "Cửa sắt",
  "Lan can",
] as const;
