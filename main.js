const book = document.querySelector("#book");
const indicator = document.querySelector("#page-indicator");
const progress = document.querySelector("#progress");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

const pages = [
  { kind: "cover", title: "TÍCH LŨY TƯ BẢN", subtitle: "Bản chất · Nhân tố ảnh hưởng · Hệ quả", note: "TÀI LIỆU HỌC TẬP KINH TẾ CHÍNH TRỊ", image: "./image/anhbia.png" },
  { kind: "toc", title: "Mục lục", sections: [
    ["I. Bản chất của tích lũy tư bản", "03"],
    ["1. Tái sản xuất và tích lũy tư bản", "03"],
    ["2. Bản chất và nguồn gốc", "04"],
    ["II. Nhân tố ảnh hưởng đến quy mô tích lũy", "05"],
    ["1. Mức độ khai thác sức lao động", "05"],
    ["2. Năng suất lao động xã hội", "06"],
    ["3. Chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng", "07"],
    ["4. Quy mô tư bản ứng trước", "08"],
    ["III. Hệ quả của tích lũy tư bản", "09"],
    ["1. Tăng cấu tạo hữu cơ của tư bản", "09"],
    ["2. Tích tụ và tập trung tư bản", "10"],
    ["3. Tác động đến người lao động", "11"],
    ["IV. Ví dụ và tổng kết", "12"]
  ]},
  { title: "I. Bản chất của tích lũy tư bản", subtitle: "1. Tái sản xuất và tích lũy tư bản", body: [
    ["Tái sản xuất là gì?", "Tái sản xuất là quá trình sản xuất được lặp lại và khôi phục thường xuyên. Có thể phân thành tái sản xuất giản đơn và tái sản xuất mở rộng."],
    ["Tái sản xuất giản đơn", "Quá trình sản xuất được lặp lại với quy mô không đổi. Giá trị thặng dư tạo ra được nhà tư bản sử dụng cho tiêu dùng cá nhân, không chuyển thêm vào sản xuất."],
    ["Tái sản xuất mở rộng", "Quá trình sản xuất được lặp lại với quy mô lớn hơn trước. Một phần giá trị thặng dư được chuyển hóa thành tư bản phụ thêm để mua tư liệu sản xuất và sức lao động."],
    ["Khái niệm tích lũy tư bản", "Tích lũy tư bản là sự chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm để mở rộng sản xuất. Đây là cơ sở trực tiếp của tái sản xuất mở rộng trong chủ nghĩa tư bản."]
  ], callout: "Giá trị thặng dư → phân chia thành tiêu dùng và tích lũy → đầu tư bổ sung → mở rộng sản xuất."},
  { title: "2. Bản chất và nguồn gốc", body: [
    ["Nguồn gốc của tư bản tích lũy", "Nguồn trực tiếp của tích lũy tư bản là giá trị thặng dư do lao động làm thuê tạo ra. Sau khi được thực hiện thông qua trao đổi hàng hóa, một phần giá trị thặng dư được tái đầu tư."],
    ["Tích lũy không đồng nghĩa với tiết kiệm đơn thuần", "Tiết kiệm là giữ lại một phần thu nhập; còn tích lũy tư bản trong phân tích kinh tế chính trị là quá trình chuyển hóa giá trị thặng dư thành tư bản nhằm mở rộng quá trình sản xuất."],
    ["Công thức khái quát", "Nếu m là tổng giá trị thặng dư, phần dành cho tích lũy là mₐ và phần dành cho tiêu dùng của nhà tư bản là mₜ, thì: m = mₐ + mₜ."],
    ["Ý nghĩa", "Tỷ lệ phân chia giá trị thặng dư giữa tích lũy và tiêu dùng ảnh hưởng trực tiếp đến tốc độ mở rộng sản xuất. Tỷ lệ tích lũy cao hơn có thể thúc đẩy đầu tư, nhưng kết quả còn phụ thuộc điều kiện thị trường và hiệu quả sử dụng vốn."]
  ]},
  { title: "II. Nhân tố ảnh hưởng đến quy mô tích lũy", subtitle: "1. Mức độ khai thác sức lao động", body: [
    ["Khái niệm", "Trong lý luận kinh tế chính trị Mác, mức độ khai thác sức lao động thường được phân tích thông qua tỷ suất giá trị thặng dư, phản ánh quan hệ giữa giá trị thặng dư và tư bản khả biến."],
    ["Tỷ suất giá trị thặng dư", "Có thể biểu diễn khái quát: m′ = m/v × 100%, trong đó m là giá trị thặng dư và v là tư bản khả biến dùng để mua sức lao động."],
    ["Ảnh hưởng đến tích lũy", "Khi các điều kiện khác không đổi, tỷ suất giá trị thặng dư tăng có thể làm tăng khối lượng giá trị thặng dư, từ đó tạo thêm nguồn để tích lũy tư bản."],
    ["Lưu ý thực tiễn", "Việc tăng hiệu quả sản xuất nên gắn với công nghệ, tổ chức lao động, đào tạo, an toàn và quyền lợi hợp pháp của người lao động; không nên xem kéo dài giờ làm hay cắt giảm tiền công là giải pháp mặc nhiên phù hợp."]
  ]},
  { title: "2. Năng suất lao động xã hội", body: [
    ["Khái niệm", "Năng suất lao động thể hiện lượng sản phẩm tạo ra trong một đơn vị thời gian hoặc thời gian cần thiết để sản xuất một đơn vị sản phẩm."],
    ["Các yếu tố tác động", "Trình độ và kỹ năng người lao động; trình độ khoa học – công nghệ; cách tổ chức và phối hợp sản xuất; chất lượng tư liệu sản xuất; điều kiện tự nhiên và hạ tầng."],
    ["Vì sao năng suất cao có thể thúc đẩy tích lũy?", "Năng suất tăng giúp giảm hao phí lao động trên mỗi sản phẩm và có thể hạ chi phí đơn vị. Khi sản phẩm được tiêu thụ và các điều kiện khác thuận lợi, lợi nhuận hoặc giá trị thặng dư có thể tăng, tạo điều kiện mở rộng đầu tư."],
    ["Ví dụ", "Một dây chuyền cải tiến tạo ra 120 sản phẩm mỗi giờ thay vì 100, trong khi chất lượng vẫn đạt chuẩn. Nếu nhu cầu thị trường đủ lớn và chi phí đầu tư được kiểm soát, doanh nghiệp có thể tăng sản lượng với mức hao phí bình quân thấp hơn."]
  ], callout: "Năng suất lao động tăng không tự động bảo đảm tích lũy tăng: còn cần đầu ra thị trường, chất lượng và quản trị chi phí."},
  { title: "3. Chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng", body: [
    ["Tư bản sử dụng", "Là toàn bộ công năng của máy móc, nhà xưởng và thiết bị được huy động trong quá trình sản xuất."],
    ["Tư bản tiêu dùng", "Là phần giá trị của tư liệu lao động chuyển vào sản phẩm trong một thời kỳ, thường thông qua hao mòn và khấu hao."],
    ["Chênh lệch có ý nghĩa gì?", "Máy móc có thể phục vụ nhiều chu kỳ sản xuất nhưng chỉ chuyển từng phần giá trị vào sản phẩm qua thời gian. Khai thác công suất hợp lý giúp tạo ra nhiều sản phẩm hơn trên cùng cơ sở vật chất."],
    ["Ví dụ thực tế", "Hai xưởng có thiết bị tương đương. Xưởng A thường xuyên dừng máy do bảo trì kém; xưởng B lập lịch bảo trì, đào tạo vận hành và giảm sản phẩm lỗi. Nếu nhu cầu và điều kiện khác tương tự, xưởng B có thể tận dụng tư bản hiện có tốt hơn."],
    ["Kết luận", "Quản trị thiết bị tốt có thể làm giảm chi phí trên đơn vị sản phẩm và hỗ trợ tích lũy. Tuy nhiên, vận hành quá tải gây hỏng hóc, mất an toàn và chi phí dài hạn cao hơn."]
  ]},
  { title: "4. Quy mô tư bản ứng trước", body: [
    ["Khái niệm", "Tư bản ứng trước là lượng tư bản nhà đầu tư đưa vào để tổ chức và duy trì hoạt động sản xuất kinh doanh."],
    ["Các bộ phận", "Tư bản bất biến (c) dùng để mua tư liệu sản xuất như máy móc, nhà xưởng, nguyên vật liệu; tư bản khả biến (v) dùng để mua sức lao động theo cách phân tích của kinh tế chính trị Mác."],
    ["Tác động đến quy mô tích lũy", "Quy mô vốn ban đầu lớn hơn có thể giúp doanh nghiệp đầu tư thiết bị, nguyên liệu, nhân lực và mở rộng sản lượng. Nhưng vốn lớn không đồng nghĩa chắc chắn với hiệu quả cao."],
    ["Những điều kiện đi kèm", "Khả năng tiêu thụ sản phẩm, năng lực quản trị, công nghệ phù hợp, chi phí vốn, dòng tiền và rủi ro thị trường đều ảnh hưởng đến kết quả tích lũy."],
    ["Ví dụ", "Một cơ sở dùng vốn để mua thiết bị phù hợp, đào tạo nhân viên và khảo sát nhu cầu có thể sử dụng vốn hiệu quả hơn cơ sở đầu tư dàn trải nhưng thiếu kế hoạch tiêu thụ."]
  ]},
  { title: "III. Hệ quả của tích lũy tư bản", subtitle: "1. Tăng cấu tạo hữu cơ của tư bản", body: [
    ["Khái niệm", "Cấu tạo kỹ thuật của tư bản phản ánh quan hệ giữa khối lượng tư liệu sản xuất và lượng sức lao động được sử dụng. Cấu tạo giá trị phản ánh quan hệ giữa tư bản bất biến (c) và tư bản khả biến (v)."],
    ["Cấu tạo hữu cơ", "Cấu tạo hữu cơ của tư bản là cấu tạo giá trị do cấu tạo kỹ thuật quyết định và phản ánh sự biến đổi của cấu tạo kỹ thuật."],
    ["Xu hướng thay đổi", "Khi doanh nghiệp đầu tư nhiều hơn vào máy móc, công nghệ và tự động hóa so với lao động trực tiếp, tỷ trọng tư bản bất biến có thể tăng tương đối so với tư bản khả biến."],
    ["Mặt tích cực", "Công nghệ và thiết bị mới có thể nâng cao năng suất, cải thiện chất lượng, giảm công việc nguy hiểm và tạo ra ngành nghề mới."],
    ["Thách thức", "Một số công việc có thể bị thay thế hoặc thay đổi yêu cầu kỹ năng. Đào tạo lại, học tập suốt đời và chính sách hỗ trợ chuyển đổi việc làm giúp giảm tác động tiêu cực."]
  ]},
  { title: "2. Tích tụ và tập trung tư bản", body: [
    ["Tích tụ tư bản", "Là sự tăng lên của tư bản cá biệt thông qua việc tư bản hóa một phần giá trị thặng dư. Quá trình này làm tăng quy mô tư bản cá biệt và góp phần làm tăng tổng tư bản xã hội."],
    ["Tập trung tư bản", "Là sự hợp nhất hoặc phân phối lại các tư bản đã tồn tại thành tư bản cá biệt lớn hơn, chẳng hạn thông qua sáp nhập hoặc mua lại. Bản thân việc tập trung không nhất thiết làm tăng tổng tư bản xã hội ngay lập tức."],
    ["So sánh nhanh", "Tích tụ: mở rộng vốn từ phần giá trị thặng dư được tích lũy. Tập trung: kết hợp những tư bản đã có để hình thành đơn vị vốn lớn hơn."],
    ["Hệ quả kinh tế", "Quy mô lớn có thể giúp tận dụng lợi thế quy mô, đầu tư nghiên cứu và triển khai công nghệ. Ngược lại, tập trung quá mức có thể làm suy giảm cạnh tranh và tăng quyền lực thị trường."],
    ["Ví dụ", "Doanh nghiệp giữ lại lợi nhuận để mở thêm dây chuyền là tích tụ; hai doanh nghiệp sáp nhập thành một tổ chức lớn hơn là tập trung."]
  ]},
  { title: "3. Tác động đến người lao động", body: [
    ["Tác động đến việc làm", "Tự động hóa và thay đổi cơ cấu sản xuất có thể làm giảm nhu cầu ở một số vị trí, đồng thời tạo ra nhu cầu mới về vận hành, bảo trì, dữ liệu và dịch vụ."],
    ["Thu nhập và điều kiện lao động", "Tác động của tích lũy không giống nhau trong mọi ngành hay thời kỳ. Kết quả phụ thuộc vào năng suất, quan hệ lao động, chính sách tiền lương, mức độ cạnh tranh và cách phân phối thành quả tăng trưởng."],
    ["Khái niệm bần cùng hóa trong lý luận", "Trong kinh tế chính trị Mác, đây là vấn đề lý luận về xu hướng và điều kiện sống của giai cấp công nhân dưới chủ nghĩa tư bản. Khi trình bày, cần phân biệt luận điểm lý thuyết với dữ liệu thực nghiệm của từng quốc gia và giai đoạn."],
    ["Giảm thiểu rủi ro", "Đào tạo lại kỹ năng, đối thoại tại nơi làm việc, bảo đảm an toàn lao động, bảo vệ quyền lợi hợp pháp và hỗ trợ chuyển đổi nghề giúp người lao động thích ứng với thay đổi."]
  ], callout: "Đánh giá hệ quả cần xem xét cả năng suất, phân phối thu nhập, chất lượng việc làm và khả năng tiếp cận cơ hội."},
  { title: "IV. Ví dụ tổng hợp", subtitle: "So sánh hai xưởng sản xuất", body: [
    ["Xưởng A — sử dụng nguồn lực chưa hiệu quả", "Bảo trì không theo lịch; công nhân chưa được đào tạo đầy đủ; máy dừng thường xuyên; tỷ lệ sản phẩm lỗi cao; chi phí năng lượng và sửa chữa tăng."],
    ["Xưởng B — quản trị nguồn lực tốt hơn", "Có kế hoạch bảo trì; quy trình vận hành rõ ràng; theo dõi chất lượng; đào tạo nhân sự; sắp xếp ca làm hợp lý và sử dụng năng lượng tiết kiệm."],
    ["Kết quả có thể xảy ra", "Nếu thị trường, chất lượng đầu vào và các điều kiện khác tương đương, xưởng B có thể giảm chi phí đơn vị, tăng sản lượng đạt chuẩn và tạo nguồn lực tốt hơn cho tái đầu tư."],
    ["Điểm cần nhớ", "Không thể kết luận lợi nhuận chỉ từ mức độ sử dụng máy móc. Cần xét thêm chi phí đầu tư, giá bán, nhu cầu, năng lực quản lý và điều kiện lao động."]
  ]},
  { title: "Tổng kết và ôn tập", body: [
    ["Ba ý cốt lõi", "1. Tích lũy tư bản là chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm. 2. Quy mô tích lũy chịu tác động bởi mức độ khai thác sức lao động, năng suất, hiệu quả sử dụng tư liệu sản xuất và quy mô vốn ứng trước. 3. Tích lũy có thể thúc đẩy phát triển lực lượng sản xuất, đồng thời làm thay đổi cơ cấu vốn, cạnh tranh và việc làm."],
    ["Câu hỏi ôn tập", "• Phân biệt tái sản xuất giản đơn và tái sản xuất mở rộng.\n• Vì sao năng suất lao động có thể ảnh hưởng đến quy mô tích lũy?\n• Phân biệt tích tụ tư bản với tập trung tư bản.\n• Nêu một lợi ích và một thách thức của tự động hóa đối với người lao động."],
    ["Gợi ý trả lời", "Trả lời bằng cách nêu khái niệm, giải thích cơ chế tác động và minh họa bằng ví dụ. Với các hệ quả xã hội, cần nêu điều kiện cụ thể thay vì khẳng định một chiều."],
    ["Tài liệu tham khảo gợi ý", "Giáo trình Kinh tế chính trị Mác – Lênin dùng trong chương trình học; tài liệu bài giảng do giảng viên cung cấp. Đối chiếu thuật ngữ và yêu cầu trích dẫn theo giáo trình chính thức của lớp."]
  ], callout: "Hoàn thành ebook · Hãy dùng mục lục và câu hỏi ôn tập để hệ thống hóa kiến thức."}
];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderPage(page, number) {
  if (page.kind === "cover") {
    return `<article class="page cover-page"><img class="cover-image" src="${page.image}" alt="Ảnh bìa ebook"><div class="cover-shade"></div><div class="cover-copy"><p class="cover-kicker">${escapeHTML(page.note)}</p><h2>${escapeHTML(page.title)}</h2><p>${escapeHTML(page.subtitle)}</p></div></article>`;
  }
  if (page.kind === "toc") {
    return `<article class="page"><div class="page-top"><span>HỌC TẬP · KINH TẾ CHÍNH TRỊ</span><span>${String(number).padStart(2,"0")}</span></div><h2 class="page-title">${escapeHTML(page.title)}</h2><ol class="toc">${page.sections.map(([label, n]) => `<li><span>${escapeHTML(label)}</span><b>${escapeHTML(n)}</b></li>`).join("")}</ol><div class="page-bottom">TÍCH LŨY TƯ BẢN</div></article>`;
  }
  const body = (page.body || []).map(([heading, text]) => `<section class="content-block"><h3>${escapeHTML(heading)}</h3><p>${escapeHTML(text).replace(/\n/g,"<br>")}</p></section>`).join("");
  return `<article class="page"><div class="page-top"><span>CHUYÊN ĐỀ · TÍCH LŨY TƯ BẢN</span><span>${String(number).padStart(2,"0")}</span></div><h2 class="page-title">${escapeHTML(page.title)}</h2>${page.subtitle ? `<h3 class="page-subtitle">${escapeHTML(page.subtitle)}</h3>` : ""}${body}${page.callout ? `<aside class="callout">${escapeHTML(page.callout)}</aside>` : ""}<div class="page-bottom">EBOOK HỌC TẬP · ${String(number).padStart(2,"0")}</div></article>`;
}

// Each content section is a page; add blank backs only when required to make a complete page-flip sequence.
const renderedPages = pages.map((p, i) => renderPage(p, i + 1));
renderedPages.forEach((markup, index) => {
  const paper = document.createElement("div");
  paper.className = "paper";
  paper.dataset.index = String(index);
  paper.innerHTML = markup;
  book.appendChild(paper);
});

let current = 0;
const papers = [...document.querySelectorAll(".paper")];
papers.forEach((paper, index) => {
  paper.style.zIndex = String(papers.length - index);
  paper.addEventListener("click", event => {
    if (event.target.closest("a, button")) return;
    if (index <= current) nextPage();
    else previousPage();
  });
});

function updateUI() {
  indicator.textContent = current === 0 ? "Bìa sách" : `Trang ${current + 1} / ${papers.length}`;
  progress.style.width = `${((current + 1) / papers.length) * 100}%`;
  prevButton.disabled = current === 0;
  nextButton.disabled = current >= papers.length - 1;
}
function nextPage() {
  if (current >= papers.length - 1) return;
  papers[current].classList.add("flipped");
  current++;
  updateUI();
}
function previousPage() {
  if (current <= 0) return;
  current--;
  papers[current].classList.remove("flipped");
  updateUI();
}
function goToPage(index) {
  current = Math.max(0, Math.min(index, papers.length - 1));
  papers.forEach((paper, i) => paper.classList.toggle("flipped", i < current));
  updateUI();
}
prevButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
document.querySelector("#first").addEventListener("click", () => goToPage(0));
document.querySelector("#last").addEventListener("click", () => goToPage(papers.length - 1));
document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") nextPage();
  if (event.key === "ArrowLeft") previousPage();
  if (event.key === "Home") goToPage(0);
  if (event.key === "End") goToPage(papers.length - 1);
});
updateUI();