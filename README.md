# yt-dlp-frontend (Next.js)

UI Next.js để nhập URL, lấy metadata/định dạng từ API yt-dlp và stream tải xuống. Tập trung trải nghiệm đơn giản, có reCAPTCHA và hỗ trợ theme.

## Điểm nổi bật
- Form dán URL, gọi API `/video/formats` để lấy metadata + danh sách định dạng, hiển thị preview và filter theo loại stream (all/audio/video/audio+video).
- Tải xuống bằng `/video/download` qua rewrite `/api/**` đến backend (config trong `next.config.ts`), tự kèm tiêu đề và format đã chọn.
- reCAPTCHA (client) bắt buộc trước khi tải, toast thông báo thành công/thất bại.
- Dark/light mode với `next-themes`, phông chữ Chewy, giao diện Tailwind + Radix UI.
- Fancybox xem ảnh thumbnail, progress giả lập khi đang tải để giữ tương tác người dùng.

## Cấu trúc chính
```
src/
  app/            # layout, page chính
  components/     # search form, info media, danh sách format, UI nhỏ
  hooks/          # useFancybox
  lib/            # axios helper, utils
  types/          # định nghĩa ListFormats/FormatOption
public/images/    # ảnh fallback cho thumbnail
next.config.ts    # cấu hình images + rewrites tới backend
```

## Yêu cầu
- Node.js 18+.
- Backend API đang chạy và truy cập được (điểm vào `/video/formats`, `/video/download`).
- reCAPTCHA site key (client).

## Biến môi trường
Sao chép file mẫu và điền giá trị:
```bash
cp .env.local.exmaple .env.local
```
- `NEXT_PUBLIC_URL`        : URL gốc của backend (ví dụ https://api.example.com). Được dùng cho `rewrites` trong Next để proxy `/api/*` sang backend.
- `NEXT_PUBLIC_RECAPTCHA_KEY`: reCAPTCHA site key dùng trên client.
- `RECAPCHAR_SECRET`       : Secret key (hiện chỉ khai báo, chưa dùng trong mã).

> Lưu ý: file mẫu tên `.env.local.exmaple` (có typo “exmaple”), giữ nguyên hoặc đổi nếu muốn.

## Chạy dự án
```bash
npm install
npm run dev        # dev + Turbopack
```
Ứng dụng chạy tại http://localhost:3000.

## Build & chạy production
```bash
npm run build
npm start
```

## Luồng hoạt động
1) Người dùng dán URL → `listFormats` gọi `/api/formats?url=...` (rewrite sang backend).  
2) Hiển thị tiêu đề/uploader/duration, thumbnail (Fancybox). Filter danh sách theo loại stream.  
3) Người dùng chọn format, vượt qua reCAPTCHA → `downloaded()` chuyển hướng đến `/api/download?...` (backend stream file).  
4) Toast hiển thị trạng thái; progress thanh giả lập cho cảm giác phản hồi.

## Ghi chú triển khai
- Rewrites cho `/api/:path*` đặt trong `next.config.ts`; cần `NEXT_PUBLIC_URL` hợp lệ.
- Nếu backend yêu cầu CORS, đảm bảo đã bật (backend Nest có CORS bật sẵn).
- `images.remotePatterns` mở cho mọi host, đủ để hiển thị thumbnail từ CDN/yt.

## Giấy phép
MIT (xem LICENSE nếu có). If missing, hãy thêm để rõ ràng khi phân phối. 
