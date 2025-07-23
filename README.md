# nextjs-frontend-yt-dlp

<!-- Bilingual README: Vietnamese / English -->

## 🇻🇳 Giới thiệu

Frontend chuyên nghiệp dành cho yt-dlp, xây dựng trên nền tảng Next.js. Cho phép người dùng nhập URL video và tải xuống đa dạng định dạng.

## 🇬🇧 Introduction

A professional frontend for yt-dlp, built with Next.js. Enables users to input a video URL and download in various formats.

---

## 🇻🇳 Demo

* Bản thử nghiệm: [https://senoyt.vercel.app](https://senoyt.vercel.app)

## 🇬🇧 Demo

* Live demo: [https://senoyt.vercel.app](https://senoyt.vercel.app)

---

## 🇻🇳 Tính năng chính

* Nhập URL từ YouTube, Vimeo, TikTok, và hơn thế.
* Hiển thị tiêu đề, tác giả, thumbnail video.
* Liệt kê và chọn định dạng tải về (video & audio).
* Hỗ trợ reCAPTCHA bảo mật.
* Chế độ sáng/tối, lưu lựa chọn theme.
* Giao diện responsive, thân thiện với người dùng.

## 🇬🇧 Key Features

* Input URLs from YouTube, Vimeo, TikTok, and more.
* Display video title, author, and thumbnail.
* List available download formats (video & audio).
* Integrated reCAPTCHA for security.
* Light/dark mode with persisted theme.
* Responsive and user-friendly UI.

---

## 🇻🇳 Công nghệ sử dụng

* **Framework**: Next.js 15.x
* **Ngôn ngữ**: TypeScript, React 19.x
* **Style**: Tailwind CSS, Radix UI, Fancybox (@fancyapps/ui)
* **HTTP & State**: axios, clsx, tailwind-merge
* **UI Components**: lucide-react, sonner (toasts), react-type-animation
* **Theming**: next-themes
* **Quality**: ESLint, Prettier, Turbopack

## 🇬🇧 Tech Stack

* **Framework**: Next.js 15.x
* **Language**: TypeScript, React 19.x
* **Styling**: Tailwind CSS, Radix UI, Fancybox (@fancyapps/ui)
* **HTTP & State**: axios, clsx, tailwind-merge
* **Components**: lucide-react, sonner (toasts), react-type-animation
* **Theming**: next-themes
* **Lint & Build**: ESLint, Prettier, Turbopack

---

## 🇻🇳 Cài đặt & Chạy dự án

```bash
# Clone repository
git clone https://github.com/LDNVN86/nextjs-frontend-yt-dlp.git
cd nextjs-frontend-yt-dlp

# Cài đặt dependencies
npm install    # hoặc yarn install

# Tạo file môi trường\ ncp .env.local.example .env.local
# Điền API_URL và NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Chạy ứng dụng ở chế độ phát triển
npm run dev    # hoặc yarn dev
```

## 🇬🇧 Installation & Running

```bash
# Clone repository
git clone https://github.com/LDNVN86/nextjs-frontend-yt-dlp.git
cd nextjs-frontend-yt-dlp

# Install dependencies
npm install    # or yarn install

# Setup environment
cp .env.local.example .env.local
# Fill in API_URL and NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Start development server
npm run dev    # or yarn dev
```

---

## 🇻🇳 Build & Triển khai

```bash
# Build production
npm run build

# Chạy production
npm start
```

**Gợi ý deploy**: Vercel, Netlify hoặc bất kỳ nền tảng hỗ trợ Next.js.

## 🇬🇧 Build & Deploy

```bash
# Build production
npm run build

# Run production
npm start
```

**Suggested hosts**: Vercel, Netlify, or any Next.js-friendly platform.

---

## 🇻🇳 Đóng góp

1. Fork repository.
2. Tạo nhánh feature: `git checkout -b feature/your-feature`.
3. Commit code: `git commit -m "feat: mô tả tính năng"`.
4. Push và tạo Pull Request.

## 🇬🇧 Contributing

1. Fork this repo.
2. Create feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "feat: describe your feature"`.
4. Push and open a Pull Request.

---

## 🇻🇳 Giấy phép

Phát hành theo **MIT License**. Xem chi tiết tại [LICENSE](./LICENSE).

## 🇬🇧 License

Released under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

## 🇻🇳 Tác giả

* **LDNVN86** – [GitHub](https://github.com/LDNVN86)
* Website: [ldn86dev.io.vn](https://ldn86dev.io.vn)

## 🇬🇧 Author

* **LDNVN86** – [GitHub](https://github.com/LDNVN86)
* Website: [ldn86dev.io.vn](https://ldn86dev.io.vn)
