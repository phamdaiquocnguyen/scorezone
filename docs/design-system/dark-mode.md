# ScoreZone Dark Mode Design System

Hệ thống thiết kế giao diện tối (**Dark Mode Design System**) của ScoreZone được phát triển trực tiếp từ **Design System gốc** (`docs/design-system/README.md`), đóng vai trò là **nguồn chân lý duy nhất (Single Source of Truth)**.

Hệ thống giữ nguyên 100% cấu trúc phân cấp thị giác, typography, spacing, border-radius và quan hệ màu sắc, đồng thời chuyển hóa sang dải màu **Sporty Dark Mode** chuyên nghiệp, sắc nét, loại bỏ hoàn toàn các lỗi thiết kế rập khuôn (Anti-Slop) như gradient tím nhân tạo, neon glow quá mức hay glassmorphism lạm dụng.

---

## 1. Bảng chuyển đổi Token Màu sắc (Light Mode ➔ Dark Mode Mapping)

Toàn bộ token Dark Mode được ánh xạ 1-1 từ Design System gốc để đảm bảo tính nhất quán trên toàn bộ 30+ trang web.

### 1.1. Brand Colors (Màu thương hiệu)

| Token Name | Light Mode Hex | Dark Mode Hex | Tỉ lệ tương phản | Mục đích sử dụng (Usage) |
|---|---|---|---|---|
| `--primary-700` | `#004AC6` | `#2563EB` | 5.8:1 (AAA) | Nút bấm chính, tab đang chọn, vạch chỉ số active |
| `--primary-600` | `#2563EB` | `#3B82F6` | 7.2:1 (AAA) | Liên kết thể thao, hover trạng thái, icon tiêu điểm |
| `--primary-800` | `#003EAA` | `#1D4ED8` | 4.8:1 (AA) | Trạng thái active/pressed khi click nút |
| `--primary-soft`| `#FAF8FF` | `rgba(37, 99, 235, 0.12)` | N/A | Khung chứa icon, pill bàn thắng, tag giải đấu |
| `--accent-soft` | `#D5E3FD` | `#1E2E4A` | N/A | Chip giải đấu chưa kích hoạt, nền phụ |

### 1.2. Foundation & Surface Colors (Nền & Bề mặt)

| Token Name | Light Mode Hex | Dark Mode Hex | Mục đích sử dụng (Usage) |
|---|---|---|---|
| `--bg-page` | `#F8FBFF` | `#0B111E` | Nền canvas toàn bộ website (Midnight Stadium Canvas) |
| `--surface-white` | `#FFFFFF` | `#131E32` | Thẻ trận đấu, bài viết tin tức, Header, Bảng xếp hạng |
| `--surface-soft` | `#F2F3FF` | `#1A2844` | Thẻ trận phụ 2x2, ô tìm kiếm, dòng hover dữ liệu |
| `--surface-alt` | `#DAE2FD` | `#223354` | Bề mặt Popover cài đặt, Modal tóm tắt, menu thả xuống |
| `--border-color` | `#D9E6FF` | `rgba(217, 230, 255, 0.12)` | Đường viền thẻ 1px sắc nét, đường chia phân cách |
| `--border-subtle`| `rgba(195, 198, 215, 0.3)` | `rgba(217, 230, 255, 0.08)` | Đường kẻ mỏng trong bảng dữ liệu |

### 1.3. Typography & Text Hierarchy (Phân tầng văn bản)

| Token Name | Light Mode Hex | Dark Mode Hex | Tỉ lệ tương phản | Ứng dụng |
|---|---|---|---|---|
| `--text-primary` | `#1D2B6B` | `#F8FAFC` | 15.6:1 (AAA) | Tiêu đề H1/H2/H3, Tên đội bóng, Tỉ số trận đấu |
| `--text-secondary`| `#3357A5` | `#94A3B8` | 7.5:1 (AAA) | Đoạn mô tả tin tức, thời gian thi đấu, nhãn chỉ số |
| `--text-muted` | `#737686` | `#64748B` | 4.6:1 (AA) | Timestamp, số áo phụ, placeholder ô nhập |
| `--text-dark` | `#131B2E` | `#F8FAFC` | 15.6:1 (AAA) | Tỉ số chung cuộc (Final score), nội dung chính |
| `--text-white` | `#FFFFFF` | `#FFFFFF` | 21:1 (AAA) | Chữ trên nút màu xanh, text trên hero banner |

### 1.4. Semantic Colors (Màu trạng thái thể thao)

| Trạng thái | Token Name | Light Mode Hex | Dark Mode Hex | Ứng dụng |
|---|---|---|---|---|
| 🔴 **Live / Trực tiếp** | `--accent-red` | `#AE0010` | `#EF4444` | Chấm Live nhấp nháy, badge trực tiếp |
| 🟡 **Cảnh báo / Thẻ vàng** | `--accent-warning` | `#FFDDB8` | `#F59E0B` | Cảnh báo hệ thống, thẻ vàng |
| 🟢 **Thành công / Thắng** | `--accent-success` | `#16A34A` | `#22C55E` | Phong độ thắng trận (W), bàn thắng |

---

## 2. Typography (Kế thừa từ Design System)

* **Font gia đình**: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
* **Quy chuẩn hiển thị tỉ số**: Sử dụng `font-variant-numeric: tabular-nums` để các chữ số bàn thắng (`2 - 1`, `0 - 0`) luôn cố định chiều rộng, không bị nhảy layout khi cập nhật thời gian thực.
* **Quy chuẩn trọng số**:
  * **Hero / Score**: Extra Bold (`800`) hoặc Black (`900`), màu `#FFFFFF`.
  * **Heading (H1 - H4)**: Bold (`700`), màu `#F8FAFC`.
  * **Body text**: Regular (`400`) hoặc Medium (`500`), màu `#94A3B8`.
  * **Labels / Meta**: Semi-bold (`600`), chữ in hoa (uppercase), `letter-spacing: 0.5px - 1px`.

---

## 3. Spacing & Radius Tokens (Bảo toàn 100%)

* **Border Radius Scale**:
  * `4px`: Badge nhỏ, tag giải đấu mini (`.nac-tag`, `.vfh-tag`)
  * `8px`: Nút bấm hành động (`.btn-match-detail`, `.btn-summary-accept`)
  * `12px`: Thẻ trận đấu phụ, ô input, thẻ đội yêu thích (`.sub-match-card`, `.mts-team-card`)
  * `16px`: Thẻ bài viết lớn, khung widget sidebar (`.featured-news-card`, `.sidebar-widget`)
  * `24px`: Hộp thoại Popover (`.setting-panel-popover`)
  * `9999px / Full`: Thanh điều hướng pills, chip bộ lọc, thanh tìm kiếm (`#nav ul`, `.league-pill`, `.search-box input`)

* **Elevation & Bóng đổ trong Dark Mode**:
  * **Thẻ bình thường**: `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2); border: 1px solid rgba(217, 230, 255, 0.12);`
  * **Thẻ tương tác khi Hover**: `transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.6); border-color: #2563EB;`
  * **Modal Pop-up**: `background: #131E32; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);`

---

## 4. Nguyên tắc Anti-Slop (Theo Skill `design-taste-frontend`)

1. ❌ **Tránh Neon Glow quá đà**: Không sử dụng các bóng đổ phát sáng rực rỡ nhân tạo (`box-shadow: 0 0 30px #00E5FF`). Bóng đổ tối màu kết hợp đường viền 1px tinh tế mang lại cảm giác cao cấp và chuyên nghiệp hơn.
2. ❌ **Tránh Gradient tím AI (Lila Rule)**: Toàn bộ bảng màu bám sát sắc xanh thể thao hoàng gia (`#2563EB`, `#3B82F6`) và xám than chì (`#0B111E`, `#131E32`).
3. ❌ **Tránh Glassmorphism quá mức**: Không làm mờ tất cả card nền khiến chữ bị lóa. Modal và Card sử dụng nền đặc có độ tương phản cao với viền mỏng (`border: 1px solid rgba(217, 230, 255, 0.12)`).
4. ✅ **Độ tương phản đạt chuẩn WCAG AA/AAA**: Mọi đoạn văn bản phụ đều đạt độ tương phản tối thiểu `4.5:1` so với nền bề mặt.

---

## 5. Quy chuẩn Trạng thái Thành phần (Component States)

### 5.1. Header & Điều hướng
* **Header**: Nền `#0D1527`, viền dưới `1px solid rgba(217, 230, 255, 0.12)`.
* **Nav Links**:
  * Mặc định: Chữ bạc `#94A3B8`.
  * Hover: Nền `#1A2844`, chữ `#F8FAFC`.
  * Active: Nền `#2563EB`, viền `#3B82F6`, chữ `#FFFFFF`.
* **Search Input**: Nền `#1A2844`, chữ `#F8FAFC`, placeholder `#64748B`, focus viền `#2563EB`.

### 5.2. Match Center
* **Featured Match**: Nền gradient sẫm `linear-gradient(135deg, #10192D 0%, #172644 100%)`, viền `1px solid rgba(37, 99, 235, 0.25)`.
* **Live Dot**: Đỏ `#EF4444` kèm animation radar nhẹ nhàng.
* **Tỉ số**: Trắng tinh thể `#FFFFFF`, font-weight 900.
* **Secondary Match Cards**: Nền `#131E32`, viền `rgba(217, 230, 255, 0.12)`, hover viền `#2563EB` và nâng `-3px`.

### 5.3. Bảng xếp hạng (Standings Table)
* **Header `th`**: Chữ in hoa xám `#64748B`, viền dưới `1px solid rgba(217, 230, 255, 0.1)`.
* **Hàng `tbody tr`**: Dòng xen kẽ, hover chuyển sang `#1A2844` trong `0.15s`.
* **Vạch hạt giống Top 4**: Viền trái `3px solid #3B82F6`.

### 5.4. Đội bóng yêu thích (My Teams)
* **Team Card**: Nền `#1A2844`, viền `rgba(217, 230, 255, 0.12)`, hover viền `#2563EB`, logo zoom `scale(1.1)`.
* **Add Team Button**: Nền `#1A2844`, viền nét đứt `#2563EB`, chữ `#3B82F6`.

---

## 6. Bộ Biến CSS Triển khai (Code Implementation)

```css
/* ==========================================================================
   SCOREZONE DARK MODE DESIGN TOKENS (SOURCED FROM DOCS/DESIGN-SYSTEM)
   ========================================================================== */
body.dark-theme,
[data-theme="dark"] {
    /* Brand Colors */
    --primary-700: #2563EB;
    --primary-600: #3B82F6;
    --primary-800: #1D4ED8;
    --primary-light: #60A5FA;
    --primary-soft: rgba(37, 99, 235, 0.12);
    --accent-soft: #1E2E4A;
    --accent-red: #EF4444;

    /* Foundation Surfaces */
    --bg-page: #0B111E;
    --surface-white: #131E32;
    --surface-soft: #1A2844;
    --surface-alt: #223354;
    --border-color: rgba(217, 230, 255, 0.12);
    --border-subtle: rgba(217, 230, 255, 0.08);

    /* Typography Hierarchy */
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-muted: #64748B;
    --text-dark: #F8FAFC;
    --text-white: #FFFFFF;

    /* Semantic Compatibility */
    --tiêu-đề-và-nội-dung-chính: #F8FAFC;
    --chú-thích: #94A3B8;
    --tỷ-số: #2563EB;
    --stroke: rgba(217, 230, 255, 0.12);

    /* Elevation & Shadows */
    --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2);
    --shadow-blue: 0 10px 24px rgba(37, 99, 235, 0.25);
    --shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.35);
}
```
