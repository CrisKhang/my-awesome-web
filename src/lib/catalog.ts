import { SITE } from "./site";

const SITE_NAME = SITE.shortName;

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  price: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  content: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export type DesignArticle = {
  slug: string;
  title: string;
  tag: string;
  category: string;
  categorySlug: string;
  date: string;
  image: string;
  excerpt: string;
  content: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const products: Product[] = [
  {
    slug: "nha-lap-ghep",
    title: "Nhà lắp ghép",
    description:
      "Giải pháp nhà ở lắp ghép hiện đại, thi công nhanh, tiết kiệm chi phí, phù hợp biệt thự và nhà vườn.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    ],
    price: "Liên hệ",
    highlights: [
      "Thi công nhanh 2–4 tuần",
      "Khung thép + panel cách nhiệt",
      "Thiết kế theo yêu cầu",
      "Bảo hành công trình",
    ],
    specs: [
      { label: "Khung", value: "Thép mạ kẽm, chống gỉ" },
      { label: "Vách", value: "Panel EPS/PU hoặc tấm xi măng" },
      { label: "Mái", value: "Tôn lạnh / panel lợp" },
      { label: "Tuổi thọ", value: "20–50 năm (tùy vật liệu)" },
    ],
    applications: ["Nhà ở dân dụng", "Biệt thự vườn", "Văn phòng", "Nhà trọ"],
    content: [
      {
        paragraphs: [
          "Nhà lắp ghép là giải pháp xây dựng các cấu kiện được sản xuất sẵn tại xưởng, vận chuyển đến công trình và lắp ráp hoàn thiện. So với xây dựng truyền thống, thời gian thi công rút ngắn đáng kể mà vẫn đảm bảo chất lượng khi sử dụng vật liệu đạt chuẩn.",
          `${SITE_NAME} tư vấn – thiết kế – thi công trọn gói nhà lắp ghép với khung thép bền bỉ, hệ vách chống nóng và hoàn thiện nội thất theo nhu cầu.`,
        ],
      },
      {
        heading: "Ưu điểm nổi bật",
        list: [
          "Tiết kiệm 20–30% chi phí so với xây gạch truyền thống",
          "Thi công sạch, ít bụi bẩn tại công trường",
          "Dễ mở rộng, cải tạo trong tương lai",
          "Phù hợp nhiều phong cách kiến trúc",
        ],
      },
    ],
  },
  {
    slug: "nha-tien-che",
    title: "Nhà tiền chế",
    description:
      "Nhà xưởng, văn phòng, quán cà phê khung thép tiền chế — bền chắc, linh hoạt mở rộng.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    ],
    price: "Liên hệ",
    highlights: ["Khung thép chịu lực", "Lắp đặt nhanh", "Mở rộng linh hoạt"],
    specs: [
      { label: "Kết cấu", value: "Khung thép tiền chế" },
      { label: "Móng", value: "Móng đơn / móng băng tùy tải" },
      { label: "Diện tích", value: "Từ 50m² trở lên" },
    ],
    applications: ["Nhà xưởng", "Kho bãi", "Quán cà phê", "Văn phòng"],
    content: [
      {
        paragraphs: [
          "Nhà tiền chế sử dụng khung thép được gia công sẵn tại xưởng, lắp dựng nhanh tại hiện trường. Giải pháp lý tưởng cho doanh nghiệp cần không gian sản xuất, kinh doanh với chi phí tối ưu.",
        ],
      },
    ],
  },
  {
    slug: "khung-thep",
    title: "Khung thép",
    description:
      "Khung thép tiền chế chịu lực tốt, thi công chuẩn kỹ thuật cho mọi quy mô công trình.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    ],
    price: "Liên hệ",
    highlights: ["Chịu lực cao", "Gia công CNC", "Sơn chống gỉ"],
    specs: [
      { label: "Vật liệu", value: "Thép Q235/Q345" },
      { label: "Xử lý", value: "Mạ kẽm / sơn epoxy" },
    ],
    applications: ["Nhà thép", "Mái che", "Nhà kho", "Cầu thang thép"],
    content: [
      {
        paragraphs: [
          "Khung thép là xương sống của công trình tiền chế và lắp ghép. Chúng tôi gia công khung thép theo bản vẽ kỹ thuật, đảm bảo an toàn và độ chính xác cao.",
        ],
      },
    ],
  },
  {
    slug: "panel-lop",
    title: "Panel & tấm lợp",
    description:
      "Tấm panel cách nhiệt, chống nóng — vật liệu bền bỉ, thân thiện môi trường.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    ],
    price: "Liên hệ",
    highlights: ["Cách nhiệt", "Chống cháy", "Nhẹ, dễ lắp"],
    specs: [
      { label: "Loại", value: "EPS / PU / tấm xi măng" },
      { label: "Ứng dụng", value: "Vách, trần, mái" },
    ],
    applications: ["Vách ngăn", "Mái lợp", "Phòng sạch"],
    content: [
      {
        paragraphs: [
          "Panel và tấm lợp giúp công trình lắp ghép đạt hiệu quả cách nhiệt, giảm chi phí điện năng và tăng độ bền tổng thể.",
        ],
      },
    ],
  },
  {
    slug: "phu-kien-thi-cong",
    title: "Phụ kiện thi công",
    description:
      "Vít, bulong, keo, phụ kiện lắp ghép đầy đủ — hỗ trợ thi công trọn gói.",
    image:
      "https://images.unsplash.com/photo-1605276374101-dee2ffb0f962?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1605276374101-dee2ffb0f962?w=900&q=80",
    ],
    price: "Liên hệ",
    highlights: ["Đầy đủ chủng loại", "Chất lượng cao", "Giao nhanh"],
    specs: [
      { label: "Bao gồm", value: "Vít, bulong, keo, ty dây, băng keo" },
    ],
    applications: ["Lắp ghép nhà", "Thi công panel", "Khung trần vách"],
    content: [
      {
        paragraphs: [
          "Phụ kiện thi công đúng chuẩn giúp mối nối chắc chắn, kéo dài tuổi thọ công trình. Bảo Thịnh Phát cung cấp trọn bộ phụ kiện kèm tư vấn kỹ thuật.",
        ],
      },
    ],
  },
];

export const designTabs = [
  { id: "lap-ghep", label: "Nhà lắp ghép" },
  { id: "tien-che", label: "Nhà tiền chế" },
  { id: "cua-sat", label: "Cửa sắt" },
  { id: "mau-dep", label: "Mẫu đẹp" },
] as const;

export const designArticles: DesignArticle[] = [
  {
    slug: "nha-lap-ghep-co-ben-khong",
    title:
      "Nhà lắp ghép có bền không? Tiết lộ tuổi thọ thực tế của loại hình nhà ở này",
    tag: "Kiến thức",
    category: "Nhà lắp ghép",
    categorySlug: "lap-ghep",
    date: "25 Th5",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    excerpt:
      "Nhà lắp ghép có bền không? Tuổi thọ thực tế có thể kéo dài bao nhiêu năm? Khám phá các yếu tố ảnh hưởng và cách kéo dài tuổi thọ cho ngôi nhà của bạn.",
    content: [
      {
        paragraphs: [
          "Khi quyết định đầu tư vào một ngôi nhà, câu hỏi \"nhà lắp ghép có bền không\" luôn là mối quan tâm hàng đầu. Với xu hướng xây dựng nhanh, tiết kiệm chi phí, nhà lắp ghép đang ngày càng phổ biến tại Việt Nam.",
        ],
      },
      {
        heading: "1. Nhà lắp ghép là gì?",
        paragraphs: [
          "Nhà lắp ghép là công trình được sản xuất sẵn các bộ phận cấu kiện tại nhà máy, sau đó vận chuyển đến địa điểm và lắp ráp hoàn thiện. Không giống nhà truyền thống xây bằng gạch xi măng, quy trình này giúp rút ngắn thời gian thi công và giảm chi phí nhân công.",
        ],
      },
      {
        heading: "2. Nhà lắp ghép có bền không?",
        paragraphs: [
          "Câu trả lời là CÓ. Các công trình nhà lắp ghép hoàn toàn có thể đạt độ bền cao nếu được thiết kế đúng chuẩn, sử dụng vật liệu chất lượng và có quy trình bảo trì định kỳ. Nhiều công trình đã vận hành ổn định hàng chục năm.",
        ],
      },
      {
        heading: "3. Tuổi thọ thực tế theo từng loại",
        paragraphs: [
          "Tùy vật liệu mà tuổi thọ khác nhau: nhà khung thép tiền chế 20–50 năm; nhà container cải tạo 25–50 năm; nhà panel EPS/PU trung bình 15–25 năm.",
        ],
      },
      {
        heading: "4. Các yếu tố quyết định độ bền",
        list: [
          "Chất lượng vật liệu: khung thép, panel, tấm xi măng phải có chứng nhận",
          "Thiết kế và thi công: thoát nước, thông gió, xử lý mối nối đạt chuẩn",
          "Điều kiện môi trường: vùng biển cần xử lý chống ăn mòn đặc biệt",
          "Bảo trì định kỳ: kiểm tra mái, khung thép, sơn chống gỉ 6–12 tháng/lần",
        ],
      },
      {
        heading: "5. Bí quyết kéo dài tuổi thọ lên trên 50 năm",
        list: [
          "Sơn chống gỉ khung thép 2–3 năm/lần",
          "Kiểm tra hệ thống thoát nước, máng xối thường xuyên",
          "Bảo trì tổng thể 6 tháng – 1 năm/lần",
          "Cải tạo, thay thế bộ phận hư hỏng sau 10–15 năm",
        ],
      },
      {
        paragraphs: [
          `Với câu hỏi "nhà lắp ghép có bền không?" — câu trả lời là CÓ, tuổi thọ từ 20–50 năm tùy loại. ${SITE_NAME} tư vấn và thi công nhà lắp ghép bền chắc. Liên hệ hotline để được báo giá miễn phí.`,
        ],
      },
    ],
  },
  {
    slug: "top-15-mau-nha-lap-ghep-duoi-100-trieu",
    title: "Top 15+ mẫu nhà lắp ghép dưới 100 triệu đẹp, thi công nhanh",
    tag: "Mẫu nhà",
    category: "Nhà lắp ghép",
    categorySlug: "lap-ghep",
    date: "02 Th5",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    excerpt:
      "Khám phá top 15 mẫu nhà lắp ghép dưới 100 triệu, đẹp, hoàn thiện nhanh chỉ trong vài tuần.",
    content: [
      {
        paragraphs: [
          "Nhà lắp ghép dưới 100 triệu là lựa chọn phù hợp cho gia đình trẻ, nhà vườn quê hoặc công trình phụ. Thiết kế gọn, tối ưu công năng và thi công nhanh chóng.",
        ],
      },
    ],
  },
  {
    slug: "10-mau-nha-lap-ghep-200-trieu",
    title: "10+ mẫu nhà lắp ghép 200 triệu đẹp, hiện đại",
    tag: "Mẫu nhà",
    category: "Nhà lắp ghép",
    categorySlug: "lap-ghep",
    date: "27 Th4",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    excerpt:
      "Giải pháp xây nhà nhanh, bền, tiết kiệm với ngân sách khoảng 200 triệu.",
    content: [
      {
        paragraphs: [
          "Với ngân sách 200 triệu, bạn có thể sở hữu nhà lắp ghép 2–3 phòng, hoàn thiện nội thất cơ bản và khung thép chất lượng cao.",
        ],
      },
    ],
  },
  {
    slug: "van-phong-lap-ghep",
    title: "Văn phòng lắp ghép — tối ưu chi phí doanh nghiệp",
    tag: "Dự án",
    category: "Nhà lắp ghép",
    categorySlug: "lap-ghep",
    date: "16 Th4",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    excerpt:
      "Văn phòng lắp ghép thi công nhanh, linh hoạt mở rộng, phù hợp doanh nghiệp startup và văn phòng chi nhánh.",
    content: [
      {
        paragraphs: [
          "Văn phòng lắp ghép giúp doanh nghiệp có không gian làm việc chuyên nghiệp trong thời gian ngắn, dễ dàng di dời hoặc mở rộng khi cần.",
        ],
      },
    ],
  },
  {
    slug: "nha-tien-che-cap-4",
    title: "Nhà tiền chế cấp 4 đẹp, chi phí hợp lý",
    tag: "Mẫu nhà",
    category: "Nhà tiền chế",
    categorySlug: "tien-che",
    date: "02 Th5",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
    excerpt: "Mẫu nhà tiền chế cấp 4 hiện đại, thi công nhanh, tiết kiệm.",
    content: [
      {
        paragraphs: [
          "Nhà tiền chế cấp 4 kết hợp khung thép và vách panel tạo không gian sống thoáng mát, phù hợp nhà phố và vùng ngoại ô.",
        ],
      },
    ],
  },
  {
    slug: "quan-ca-phe-khung-thep",
    title: "Quán cà phê khung thép tiền chế đẹp mắt",
    tag: "Dự án",
    category: "Nhà tiền chế",
    categorySlug: "tien-che",
    date: "27 Th4",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
    excerpt: "20+ mẫu quán cà phê khung thép thu hút khách, thi công nhanh.",
    content: [
      {
        paragraphs: [
          "Khung thép mở, kính và mái che tạo không gian quán cà phê hiện đại, dễ thi công và tùy biến theo concept thương hiệu.",
        ],
      },
    ],
  },
  {
    slug: "chi-phi-nha-tien-che",
    title: "Chi phí xây nhà tiền chế 1 người ở",
    tag: "Báo giá",
    category: "Nhà tiền chế",
    categorySlug: "tien-che",
    date: "16 Th4",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
    excerpt: "Cập nhật bảng giá và chi phí thi công nhà tiền chế mini.",
    content: [
      {
        paragraphs: [
          "Nhà tiền chế mini phù hợp 1–2 người ở với diện tích 20–40m², chi phí tối ưu so với xây truyền thống.",
        ],
      },
    ],
  },
  {
    slug: "30-mau-nha-tien-che",
    title: "30+ mẫu nhà tiền chế hiện đại HOT nhất",
    tag: "Mẫu nhà",
    category: "Nhà tiền chế",
    categorySlug: "tien-che",
    date: "05 Th4",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    excerpt: "Tổng hợp mẫu nhà tiền chế đẹp, đa phong cách.",
    content: [
      {
        paragraphs: [
          "Từ nhà phố, biệt thự mini đến văn phòng — nhà tiền chế đáp ứng đa dạng nhu cầu với thời gian thi công ngắn.",
        ],
      },
    ],
  },
  {
    slug: "cua-cong-sat-2-canh",
    title: "Cửa cổng sắt 2 cánh mặt tiền biệt thự",
    tag: "Cửa cổng",
    category: "Cửa sắt",
    categorySlug: "cua-sat",
    date: "25 Th5",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    excerpt: "Mẫu cửa cổng sắt 2 cánh sang trọng cho biệt thự, nhà phố.",
    content: [
      {
        paragraphs: [
          "Cửa cổng sắt 2 cánh kết hợp hoa văn CNC và sơn tĩnh điện tạo điểm nhấn mặt tiền, an toàn và bền màu.",
        ],
      },
    ],
  },
  {
    slug: "cua-sat-cnc",
    title: "Cửa sắt hoa văn CNC sang trọng",
    tag: "Cửa sắt",
    category: "Cửa sắt",
    categorySlug: "cua-sat",
    date: "02 Th5",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    excerpt: "Cửa sắt CNC tinh xảo, phù hợp nhà phố và biệt thự.",
    content: [
      {
        paragraphs: [
          "Gia công CNC cho phép tạo hoa văn phức tạp, đồng nhất và thẩm mỹ cao trên cửa sắt, lan can.",
        ],
      },
    ],
  },
  {
    slug: "cong-truot-tu-dong",
    title: "Cổng trượt tự động nhà xưởng",
    tag: "Cửa cổng",
    category: "Cửa sắt",
    categorySlug: "cua-sat",
    date: "27 Th4",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&q=80",
    excerpt: "Hệ cổng trượt motor tự động cho nhà xưởng, kho bãi.",
    content: [
      {
        paragraphs: [
          "Cổng trượt tự động tiết kiệm diện tích, vận hành êm ái, phù hợp xe container ra vào thuận tiện.",
        ],
      },
    ],
  },
  {
    slug: "khung-sat-bao-ve",
    title: "Khung sắt bảo vệ kết hợp cửa kính",
    tag: "An toàn",
    category: "Cửa sắt",
    categorySlug: "cua-sat",
    date: "16 Th4",
    image:
      "https://images.unsplash.com/photo-1605276374101-dee2ffb0f962?w=900&q=80",
    excerpt: "Giải pháp an toàn và thẩm mỹ cho mặt tiền nhà phố.",
    content: [
      {
        paragraphs: [
          "Khung sắt bảo vệ kết hợp kính cường lực vừa an toàn vừa đón sáng tự nhiên cho không gian sống.",
        ],
      },
    ],
  },
  {
    slug: "lan-can-cau-thang-kinh",
    title: "Lan can cầu thang kính cường lực",
    tag: "Lan can",
    category: "Mẫu đẹp",
    categorySlug: "mau-dep",
    date: "25 Th5",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    excerpt: "Lan can kính tay vịn inox sang trọng cho cầu thang.",
    content: [
      {
        paragraphs: [
          "Lan can kính cường lực tạo cảm giác rộng rãi, hiện đại, an toàn theo tiêu chuẩn xây dựng.",
        ],
      },
    ],
  },
  {
    slug: "hang-rao-biet-thu",
    title: "Hàng rào sắt biệt thự sơn tĩnh điện",
    tag: "Hàng rào",
    category: "Mẫu đẹp",
    categorySlug: "mau-dep",
    date: "02 Th5",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    excerpt: "Hàng rào sắt bền màu, thiết kế tinh tế cho biệt thự.",
    content: [
      {
        paragraphs: [
          "Sơn tĩnh điện giúp hàng rào chống gỉ hiệu quả, giữ màu bền đẹp trong khí hậu nhiệt đới.",
        ],
      },
    ],
  },
  {
    slug: "mai-che-san-vuon",
    title: "Mái che sân vườn khung thép",
    tag: "Ngoại thất",
    category: "Mẫu đẹp",
    categorySlug: "mau-dep",
    date: "27 Th4",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
    excerpt: "Mái che khung thép chắc chắn, chống nắng mưa hiệu quả.",
    content: [
      {
        paragraphs: [
          "Mái che sân vườn tạo không gian sinh hoạt ngoài trời thoải mái quanh năm.",
        ],
      },
    ],
  },
  {
    slug: "nha-pho-lan-can-cua-sat",
    title: "Nhà phố kết hợp lan can & cửa sắt",
    tag: "Tổng thể",
    category: "Mẫu đẹp",
    categorySlug: "mau-dep",
    date: "16 Th4",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80",
    excerpt: "Giải pháp tổng thể lan can, cửa sắt cho nhà phố hiện đại.",
    content: [
      {
        paragraphs: [
          "Thi công đồng bộ lan can và cửa sắt giúp công trình nhất quán về phong cách và chất lượng.",
        ],
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getDesignArticle(slug: string) {
  return designArticles.find((a) => a.slug === slug);
}

export function getDesignByCategory(categorySlug: string) {
  return designArticles.filter((a) => a.categorySlug === categorySlug);
}

export const designProjects: Record<
  string,
  { slug: string; title: string; tag: string; image: string }[]
> = Object.fromEntries(
  designTabs.map((tab) => [
    tab.id,
    designArticles
      .filter((a) => a.categorySlug === tab.id)
      .map(({ slug, title, tag, image }) => ({ slug, title, tag, image })),
  ]),
);
