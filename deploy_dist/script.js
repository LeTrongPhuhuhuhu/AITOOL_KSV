const categories = [
    { id: "all", label: "Tất cả" },
    { id: "free", label: "Miễn phí / đáng tiền" },
    { id: "core", label: "Mô hình nền tảng" },
    { id: "video", label: "Tạo video" },
    { id: "avatar", label: "Avatar / người nói" },
    { id: "creative", label: "Thiết kế quảng cáo" },
    { id: "content", label: "Viết nội dung" },
    { id: "social", label: "Mạng xã hội" }
];

const metricLabels = {
    video: "Video",
    avatar: "Avatar",
    copy: "Viết nội dung",
    ad: "Quảng cáo",
    social: "Mạng xã hội",
    automation: "Tự động hóa",
    control: "Kiểm soát",
    ease: "Dễ dùng",
    speed: "Tốc độ",
    vietnamese: "Tiếng Việt",
    safety: "An toàn",
    costClarity: "Rõ chi phí"
};

const compareMetrics = [
    ["video", "Khả năng video"],
    ["avatar", "Avatar & lồng tiếng"],
    ["copy", "Chiến lược và nội dung"],
    ["ad", "Thiết kế quảng cáo"],
    ["social", "Quản trị mạng xã hội"],
    ["automation", "Tự động hóa quy trình"],
    ["control", "Độ kiểm soát kết quả"],
    ["ease", "Dễ triển khai"],
    ["speed", "Tốc độ sản xuất"],
    ["vietnamese", "Hỗ trợ tiếng Việt"],
    ["safety", "An toàn thương mại"],
    ["costClarity", "Độ rõ chi phí"]
];

const statusMap = {
    active: { label: "Nên cân nhắc", color: "#74d99f" },
    watch: { label: "Theo dõi kỹ", color: "#f2c14e" },
    early: { label: "Mới / thử nghiệm", color: "#7aa7ff" },
    legacy: { label: "Không khuyên build mới", color: "#ff6b6b" }
};

const sources = [
    { group: "Design reference", label: "Taste Skill", url: "https://www.tasteskill.dev/" },
    { group: "Core models", label: "ChatGPT Pricing", url: "https://chatgpt.com/pricing/" },
    { group: "Core models", label: "Claude Pricing", url: "https://claude.com/pricing" },
    { group: "Core models", label: "Kimi K2.6 pricing", url: "https://platform.kimi.ai/docs/pricing/chat-k26" },
    { group: "Core models", label: "Grok Pricing", url: "https://x.ai/pricing" },
    { group: "Core models", label: "DeepSeek pricing", url: "https://api-docs.deepseek.com/quick_start/pricing" },
    { group: "Core models", label: "Qwen Model Studio pricing", url: "https://www.alibabacloud.com/help/en/model-studio/model-pricing" },
    { group: "Core models", label: "Microsoft 365 Premium", url: "https://www.microsoft.com/en-us/store/b/copilotpro" },
    { group: "Core models", label: "Perplexity Pro perks", url: "https://www.perplexity.ai/properks" },
    { group: "Core models", label: "Mistral pricing", url: "https://mistral.ai/pricing/" },
    { group: "Video", label: "Gemini Omni video generation", url: "https://gemini.google/us/overview/video-generation/" },
    { group: "Video", label: "Google AI subscriptions", url: "https://gemini.google/us/subscriptions/" },
    { group: "Video", label: "Runway pricing", url: "https://runwayml.com/pricing?upgrade=unlimited" },
    { group: "Video", label: "Kling 3.0 guide", url: "https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide" },
    { group: "Video", label: "Luma Dream Machine pricing", url: "https://lumalabs.ai/learning-hub/dream-machine-support-pricing-information" },
    { group: "Video", label: "OpenAI Sora availability", url: "https://openai.com/index/sora-is-here/" },
    { group: "Avatar", label: "HeyGen pricing", url: "https://www.heygen.com/pricing" },
    { group: "Avatar", label: "Synthesia pricing", url: "https://www.synthesia.io/es/precios" },
    { group: "Creative", label: "Adobe Firefly plans", url: "https://www.adobe.com/products/firefly/plans.html" },
    { group: "Creative", label: "Canva Magic Studio", url: "https://www.canva.com/newsroom/news/magic-studio/" },
    { group: "Creative", label: "Midjourney plans", url: "https://docs.midjourney.com/docs/plans" },
    { group: "Creative", label: "AdCreative.ai", url: "https://www.adcreative.ai/" },
    { group: "Content", label: "Jasper pricing", url: "https://www.jasper.ai/pricing" },
    { group: "Content", label: "Copy.ai pricing", url: "https://www.copy.ai/prices" },
    { group: "Social", label: "Buffer pricing", url: "https://buffer.com/pricing" },
    { group: "Social", label: "Sprout Social pricing", url: "https://sproutsocial.com/es/pricing/" },
    { group: "Social", label: "Predis pricing", url: "https://predis.ai/es/pricing/" },
    { group: "Editor", label: "CapCut AI credits and Pro", url: "https://www.capcut.com/help/new-capcut-subscription-pricing" }
];

const displayLabelMap = {
    "Design reference": "Tham khảo thiết kế",
    "Core models": "Mô hình nền tảng",
    "Video": "Tạo video",
    "Avatar": "Avatar / người nói",
    "Creative": "Thiết kế quảng cáo",
    "Content": "Viết nội dung",
    "Social": "Mạng xã hội",
    "Editor": "Dựng video",
    "Pricing / cost": "Giá / chi phí",
    "Official source": "Nguồn chính thức",
    "ChatGPT Pricing": "Bảng giá ChatGPT",
    "Claude Pricing": "Bảng giá Claude",
    "Kimi K2.6 pricing": "Bảng giá Kimi K2.6",
    "Grok Pricing": "Bảng giá Grok",
    "DeepSeek pricing": "Bảng giá DeepSeek",
    "Qwen Model Studio pricing": "Bảng giá Qwen Model Studio",
    "Perplexity Pro perks": "Quyền lợi Perplexity Pro",
    "Mistral pricing": "Bảng giá Mistral",
    "Gemini Omni video generation": "Gemini Omni tạo video",
    "Google AI subscriptions": "Gói Google AI",
    "Runway pricing": "Bảng giá Runway",
    "Kling 3.0 guide": "Hướng dẫn Kling 3.0",
    "Luma Dream Machine pricing": "Bảng giá Luma Dream Machine",
    "OpenAI Sora availability": "Tình trạng OpenAI Sora",
    "HeyGen pricing": "Bảng giá HeyGen",
    "Synthesia pricing": "Bảng giá Synthesia",
    "Adobe Firefly plans": "Gói Adobe Firefly",
    "Midjourney plans": "Gói Midjourney",
    "Jasper pricing": "Bảng giá Jasper",
    "Copy.ai pricing": "Bảng giá Copy.ai",
    "Buffer pricing": "Bảng giá Buffer",
    "Sprout Social pricing": "Bảng giá Sprout Social",
    "Predis pricing": "Bảng giá Predis",
    "CapCut AI credits and Pro": "Điểm AI và gói Pro của CapCut",
    "OpenAI Help - ChatGPT Plus": "Trợ giúp OpenAI - ChatGPT Plus",
    "OpenAI Sora discontinuation": "Thông báo dừng Sora của OpenAI",
    "CapCut pricing update": "Cập nhật giá CapCut"
};

function displayLabel(label = "") {
    return displayLabelMap[label] || label || "Nguồn chính thức";
}

function viText(value = "") {
    return String(value)
        .replace(/\bStarter SME\b/g, "SME khởi đầu")
        .replace(/\bFree-first Office\b/g, "Văn phòng ưu tiên miễn phí")
        .replace(/\bGrowth Team\b/g, "Đội tăng trưởng")
        .replace(/\bAgency \/ Enterprise\b/g, "Agency / doanh nghiệp lớn")
        .replace(/\bContent engine\b/gi, "Bộ máy nội dung")
        .replace(/\bSocial operation\b/gi, "Vận hành mạng xã hội")
        .replace(/\bmodel nền tảng\b/gi, "mô hình nền tảng")
        .replace(/\bad scoring\b/gi, "chấm điểm mẫu quảng cáo")
        .replace(/\bvideo generation\b/gi, "tạo video")
        .replace(/\bad creative\b/gi, "thiết kế quảng cáo")
        .replace(/\bsocial automation\b/gi, "tự động hóa mạng xã hội")
        .replace(/\bsocial listening\b/gi, "lắng nghe mạng xã hội")
        .replace(/\bsocial post\b/gi, "bài đăng mạng xã hội")
        .replace(/\bsocial\b/gi, "mạng xã hội")
        .replace(/\bscheduling\b/gi, "lên lịch đăng")
        .replace(/\bpublishing\b/gi, "đăng bài")
        .replace(/\bcalendar\b/gi, "lịch đăng")
        .replace(/\bworkflow\b/gi, "quy trình")
        .replace(/\boutput\b/gi, "kết quả")
        .replace(/\bprompt\b/gi, "câu lệnh")
        .replace(/\bbrief\b/gi, "bản yêu cầu")
        .replace(/\bcopy\b/gi, "nội dung chữ")
        .replace(/\btool(s)?\b/gi, "công cụ")
        .replace(/\bvalue\b/gi, "độ đáng tiền")
        .replace(/\ball-in-one\b/gi, "tất cả trong một")
        .replace(/\bpost\b/gi, "bài đăng")
        .replace(/\bcompetitor\b/gi, "đối thủ")
        .replace(/\bpublish\b/gi, "đăng bài")
        .replace(/\bresearch\b/gi, "nghiên cứu")
        .replace(/\bbrand voice\b/gi, "giọng thương hiệu")
        .replace(/\bbrand\b/gi, "thương hiệu")
        .replace(/\bfree tier\b/gi, "gói miễn phí")
        .replace(/\bfree plan\b/gi, "gói miễn phí")
        .replace(/\bfree\b/gi, "miễn phí")
        .replace(/\bcredit(s)?\b/gi, "điểm sử dụng")
        .replace(/\bmonthly\b/gi, "trả tháng")
        .replace(/\bannual\b/gi, "trả năm")
        .replace(/\bcommercial use\b/gi, "quyền dùng thương mại")
        .replace(/\bnon-commercial\b/gi, "không dùng thương mại")
        .replace(/\brealtime\b/gi, "thời gian thực")
        .replace(/\bweb search\b/gi, "tìm kiếm web")
        .replace(/\blong-context\b/gi, "ngữ cảnh dài")
        .replace(/\bmultimodal\b/gi, "đa phương tiện")
        .replace(/\breasoning\b/gi, "suy luận")
        .replace(/\bcoding\b/gi, "lập trình")
        .replace(/\bagent task(s)?\b/gi, "tác vụ tác nhân")
        .replace(/\bagent mode\b/gi, "chế độ tác nhân")
        .replace(/\bdeep research\b/gi, "nghiên cứu sâu")
        .replace(/\breview\b/gi, "kiểm duyệt")
        .replace(/\buse case\b/gi, "tình huống sử dụng")
        .replace(/\bstack\b/gi, "bộ công cụ")
        .replace(/\bstoryboard\b/gi, "bảng phân cảnh")
        .replace(/\bcamera movement\b/gi, "chuyển động máy quay")
        .replace(/\btext overlay\b/gi, "chữ phủ trên video")
        .replace(/\bnegative prompt\b/gi, "câu lệnh loại trừ")
        .replace(/\bvisual\b/gi, "hình ảnh")
        .replace(/\bfootage\b/gi, "cảnh quay");
}

const tools = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        category: "core",
        group: "Model nền tảng",
        accent: "#74d99f",
        price: "Free + paid plans",
        priceMonthly: 20,
        status: "active",
        url: "https://chatgpt.com/pricing/",
        source: "ChatGPT Pricing",
        bestFor: "Chiến lược, research, brief, copy đa kênh",
        audience: "Founder, marketer, strategist, content team",
        summary: "Trợ lý tổng quát mạnh cho chiến lược marketing, phân tích dữ liệu, viết brief, tạo copy và hỗ trợ hình ảnh. Không thay thế tool chuyên dụng cho scheduling hoặc ad scoring.",
        currentNote: "Trang giá hiện tại liệt kê các tầng Free, Go, Plus, Pro, Business và Enterprise, với model GPT-5.5 Instant/Thinking/Pro theo từng plan.",        demoSource: "https://www.youtube.com/watch?v=Wgn4JeYI9lY",
        metrics: { video: 2, avatar: 1, copy: 5, ad: 4, social: 3, automation: 4, control: 4, ease: 5, speed: 5, vietnamese: 5, safety: 4, costClarity: 3 },
        pros: ["Rất mạnh ở phân tích chiến dịch, insight khách hàng và biến một brief thành nhiều phiên bản copy.", "Có thể dùng làm bộ não điều phối trước khi đẩy sang Canva, Runway, Buffer hoặc AdCreative.", "Phù hợp thuyết trình vì giải thích được logic lựa chọn công cụ."],
        cons: ["Không có sẵn hệ thống calendar, publishing, creative scoring chuyên sâu.", "Cần quy trình review để tránh output nghe chung chung.", "Giới hạn plan và model thay đổi nhanh."],
        workflow: ["Tạo positioning và message house.", "Sinh 20 hook quảng cáo cho từng persona.", "Tóm tắt dữ liệu campaign thành insight trình bày."],
        avoid: "Không dùng một mình để xuất bản hàng loạt nếu team chưa có bước kiểm duyệt brand và pháp lý.",
        verdict: "Dùng làm trung tâm tư duy và viết nháp. Kết hợp với tool chuyên dụng để sản xuất asset và vận hành."
    },
    {
        id: "claude",
        name: "Claude",
        category: "core",
        group: "Model nền tảng",
        accent: "#f2c14e",
        price: "Free / Pro / Max / Team",
        priceMonthly: 20,
        status: "active",
        url: "https://claude.com/pricing",
        source: "Claude Pricing",
        bestFor: "Copy dài, phân tích tài liệu, brand QA",
        audience: "Content lead, researcher, legal-conscious teams",
        summary: "Mạnh ở đọc tài liệu dài, chỉnh tone, phản biện logic và tạo bản nháp có cấu trúc. Hợp với phần nghiên cứu và kiểm soát chất lượng nội dung marketing.",
        currentNote: "Trang Claude hiện hiển thị Free, Pro, Max 5x, Max 20x và các plan team/enterprise.",        demoSource: "https://www.youtube.com/watch?v=RCKo7OdjrCw",
        metrics: { video: 1, avatar: 1, copy: 5, ad: 3, social: 3, automation: 3, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 5, costClarity: 4 },
        pros: ["Tốt cho long-form, phân tích tài liệu thương hiệu và kiểm tra lập luận.", "Output thường giữ giọng điệu điềm và rõ.", "Hữu ích khi cần phản biện slide hoặc proposal."],
        cons: ["Không phải công cụ tạo hình/video trực tiếp.", "Tự động hóa marketing cần tích hợp ngoài.", "Plan Max phù hợp power user hơn là SME thử nghiệm."],
        workflow: ["Review brand guideline và chỉnh tone.", "Rút insight từ báo cáo survey.", "Viết kịch bản webinar hoặc landing page dài."],
        avoid: "Không chọn nếu mục tiêu chính là tạo video, banner hoặc scheduling social.",
        verdict: "Dùng làm lớp kiểm định nội dung và phân tích sâu, nhất là khi có nhiều tài liệu đầu vào."
    },
    {
        id: "kimi",
        name: "Kimi K2.6",
        category: "core",
        group: "Model nền tảng",
        accent: "#8da2ff",
        price: "Free chat / API $0.95 in",
        priceMonthly: 0,
        status: "active",
        url: "https://www.kimi.com/",
        logoDomain: "kimi.com",
        source: "Kimi K2.6 pricing",
        bestFor: "Long context, coding, agent task, research tài liệu dài",
        audience: "Founder, analyst, technical marketer, office power user",
        summary: "Kimi K2.6 của Moonshot AI là lựa chọn free-value đáng thêm vào nhóm model nền tảng: mạnh ở long-context 256k, coding/agent task, tài liệu dài, multimodal input và web search.",
        currentNote: "Kimi API docs ghi Kimi K2.6 là model mới nhất, context 256k, hỗ trợ text/image/video input, thinking/non-thinking modes, ToolCalls, JSON Mode, Partial Mode và internet search. Dòng kimi-k2 cũ đã discontinued ngày 25/05/2026.",        demoSource: "https://www.youtube.com/watch?v=ufQUODgy3_U",
        metrics: { video: 2, avatar: 1, copy: 5, ad: 3, social: 3, automation: 5, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 3, costClarity: 4 },
        pros: ["Rất mạnh cho long-context 256k, đọc tài liệu dài, coding và agent workflow.", "API pricing thấp so với nhiều model frontier nếu dùng đúng cache.", "Có web search, tool calls và JSON mode nên hợp automation/research."],
        cons: ["Không phải tool video/avatar/creative chuyên dụng.", "Free chat và API là hai kênh khác nhau, cần kiểm quota/checkout trước khi scale.", "Nên ghi rõ đang nói về Kimi K2.6 vì các model K2 cũ đã bị ngừng hỗ trợ."],
        workflow: ["Đưa tài liệu dài, guideline hoặc research note vào để tóm tắt và rút insight.", "Sinh SOP, checklist, prompt agent hoặc phân tích code/workflow.", "Dùng Perplexity/nguồn chính thức để kiểm claim trước khi đưa vào slide."],
        avoid: "Không dùng tên Kimi K2 cũ trong slide khuyến nghị mua mới; dùng Kimi K2.6 theo docs hiện tại.",
        verdict: "Rất đáng thêm vào nhóm ngon bổ rẻ/free-value cho tài liệu dài, coding, agent task và nghiên cứu có khối lượng lớn."
    },
    {
        id: "grok",
        name: "Grok",
        category: "core",
        group: "Model nền tảng",
        accent: "#7aa7ff",
        price: "Free / SuperGrok $30",
        priceMonthly: 30,
        status: "active",
        url: "https://grok.com/",
        source: "Grok Pricing",
        bestFor: "Trend X, realtime search, social insight, copy phản ứng nhanh",
        audience: "Marketer, social lead, founder, sales team",
        summary: "Grok mạnh khi cần bắt trend, đọc bối cảnh web/X realtime, biến insight thị trường thành hook, caption, angle quảng cáo và phản biện ý tưởng nhanh.",
        currentNote: "Trang xAI Pricing ghi Grok có Free $0/month với real-time web/X search, và SuperGrok $30/month có frontier models, higher limits, image và video generation.",        demoSource: "https://www.youtube.com/watch?v=grxiFAC-NNI",
        metrics: { video: 3, avatar: 1, copy: 5, ad: 4, social: 5, automation: 3, control: 3, ease: 4, speed: 5, vietnamese: 4, safety: 3, costClarity: 4 },
        pros: ["Rất hợp social listening nhẹ, trend X và phản ứng nhanh với tin mới.", "Free tier đủ để thử trước khi mua SuperGrok.", "Có lợi thế khi campaign cần góc nhìn đang diễn ra ngoài thị trường."],
        cons: ["Không thay thế planner có kiểm chứng nguồn cho báo cáo quan trọng.", "Video/image generation nằm ở gói cao hơn và cần xem giới hạn thật trong app.", "Tone có thể sắc, cần biên tập lại nếu dùng cho brand an toàn."],
        workflow: ["Tìm trend và pain point đang được bàn luận.", "Sinh hook, caption, angle ads theo từng persona.", "Đưa output qua ChatGPT/Claude để chỉnh brand voice trước khi xuất bản."],
        avoid: "Không dùng một mình cho claim nhạy cảm về pháp lý, tài chính, y tế hoặc số liệu chưa kiểm chứng.",
        verdict: "Đáng thêm vào stack free-value cho social marketing vì mạnh ở trend và tốc độ, nhưng cần lớp kiểm chứng nguồn trước khi trình bày."
    },
    {
        id: "deepseek",
        name: "DeepSeek",
        category: "core",
        group: "Model nền tảng",
        accent: "#46d9c7",
        price: "Free chat / API rất rẻ",
        priceMonthly: 0,
        status: "active",
        url: "https://chat.deepseek.com/",
        source: "DeepSeek pricing",
        bestFor: "Reasoning rẻ, code, phân tích tài liệu, nháp content dài",
        audience: "Office, analyst, developer, marketer tiết kiệm",
        summary: "DeepSeek là lựa chọn rất đáng thử khi ưu tiên miễn phí hoặc chi phí thấp cho lập luận, tóm tắt, viết nháp, phân tích bảng dữ liệu và hỗ trợ code/workflow.",
        currentNote: "DeepSeek API docs đang liệt kê DeepSeek-V4-Flash và V4-Pro, context 1M, output tối đa 384K, với giá API thấp theo 1M tokens.",        demoSource: "https://www.youtube.com/watch?v=ExhKoFKEvh8",
        metrics: { video: 1, avatar: 1, copy: 5, ad: 3, social: 3, automation: 4, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 3, costClarity: 5 },
        pros: ["Value rất tốt nếu cần suy luận, tóm tắt và code với chi phí thấp.", "Hợp người mới vì có thể thử chat trước khi tính API.", "Rất mạnh để dựng outline, checklist, SOP và prompt kỹ thuật."],
        cons: ["Không phải tool video, avatar hay thiết kế quảng cáo.", "Cần kiểm nguồn khi dùng cho báo cáo thị trường.", "Một số môi trường doanh nghiệp có thể cần xét lại chính sách dữ liệu."],
        workflow: ["Dùng để phân rã yêu cầu thành checklist và logic.", "Viết nháp báo cáo, SOP, email, script rồi đưa qua tool thiết kế/video.", "Dùng API cho batch nội dung nếu cần tiết kiệm hơn các model premium."],
        avoid: "Không dùng làm nguồn duy nhất cho claim factual quan trọng nếu chưa đối chiếu với tài liệu gốc.",
        verdict: "Một trong các lựa chọn ngon bổ rẻ nhất cho office, phân tích và automation nhẹ; nên nằm cao trong filter free-value."
    },
    {
        id: "qwen",
        name: "Qwen Chat",
        category: "core",
        group: "Model nền tảng",
        accent: "#f2c14e",
        price: "Free quota / API rẻ",
        priceMonthly: 0,
        status: "active",
        url: "https://chat.qwen.ai/",
        source: "Qwen Model Studio pricing",
        bestFor: "Đa ngôn ngữ, tài liệu dài, trợ lý văn phòng, prompt kỹ thuật",
        audience: "Office, e-commerce, education, startup, analyst",
        summary: "Qwen đáng đưa vào nhóm free-value vì hệ sinh thái model rộng, hỗ trợ đa ngôn ngữ tốt, có lựa chọn flash/plus/max và chi phí API thấp hơn nhiều model premium.",
        currentNote: "Alibaba Cloud Model Studio ghi Qwen-Flash/Qwen3.5-Flash có pricing theo 1M tokens và free quota quốc tế có hạn trong 90 ngày sau khi kích hoạt Model Studio.",        demoSource: "https://www.youtube.com/watch?v=kCWmk6f66Sk",
        metrics: { video: 2, avatar: 1, copy: 4, ad: 3, social: 3, automation: 4, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 3, costClarity: 4 },
        pros: ["Giá API rất cạnh tranh cho text generation và tài liệu dài.", "Hợp các workflow đa ngôn ngữ, e-commerce và vận hành văn phòng.", "Có nhiều model để chọn theo ngân sách và độ mạnh."],
        cons: ["Free quota có điều kiện theo region/deployment, cần kiểm lại trước khi demo thật.", "Không phải công cụ marketing end-to-end.", "Tên model và plan trong Model Studio thay đổi nhanh."],
        workflow: ["Dùng để tóm tắt, dịch, chuẩn hóa nội dung đa ngôn ngữ.", "Sinh prompt hoặc nội dung batch cho e-commerce/social.", "Nếu dùng API, chọn Flash trước để tối ưu chi phí."],
        avoid: "Không chốt ngân sách API nếu chưa xác nhận region, free quota và deployment mode.",
        verdict: "Rất đáng có trong nhóm ngon bổ rẻ cho team cần đa ngôn ngữ, tài liệu dài và chi phí thấp."
    },
    {
        id: "copilot",
        name: "Microsoft Copilot",
        category: "core",
        group: "Model nền tảng",
        accent: "#74d99f",
        price: "Free / Microsoft 365 $19.99",
        priceMonthly: 19.99,
        status: "active",
        url: "https://copilot.microsoft.com/",
        logoDomain: "microsoft.com",
        source: "Microsoft 365 Premium",
        bestFor: "Word, Excel, PowerPoint, Outlook, báo cáo văn phòng",
        audience: "Nhân viên văn phòng, admin, HR, finance, manager",
        summary: "Copilot rất thực dụng cho người dùng Microsoft 365: hỏi đáp, tóm tắt, soạn văn bản, bảng tính, slide, email và tạo ảnh/video nhẹ trong hệ Microsoft.",
        currentNote: "Microsoft Store ghi Microsoft 365 Premium $19.99/month, có productivity apps with Microsoft Copilot, extensive usage cho một số Copilot features và Designer/Clipchamp.",        demoSource: "https://www.youtube.com/watch?v=Ai4zozXuV4s",
        metrics: { video: 1, avatar: 1, copy: 4, ad: 3, social: 2, automation: 4, control: 4, ease: 5, speed: 4, vietnamese: 4, safety: 4, costClarity: 4 },
        pros: ["Ngon bổ rẻ nếu công ty đã dùng Word, Excel, PowerPoint, Outlook.", "Rất hợp báo cáo, slide, email, tóm tắt file và thao tác văn phòng lặp lại.", "Ít phải học tool mới vì nằm trong hệ Microsoft quen thuộc."],
        cons: ["Không mạnh bằng tool chuyên video/ad creative.", "Giá trị phụ thuộc việc người dùng có Microsoft 365 và file nằm đúng hệ sinh thái.", "Một số tính năng AI có giới hạn usage và region."],
        workflow: ["Tóm tắt tài liệu/email thành brief hành động.", "Biến dữ liệu Excel thành insight và slide.", "Dùng ChatGPT/Claude/DeepSeek để phản biện thêm nếu cần góc nhìn ngoài Microsoft."],
        avoid: "Không chọn làm công cụ chính nếu team không dùng Microsoft 365 hoặc cần video/social scheduling chuyên sâu.",
        verdict: "Lựa chọn free-value rất mạnh cho văn phòng, HR, finance và manager vì tiết kiệm thời gian trên bộ công cụ đang dùng sẵn."
    },
    {
        id: "perplexity",
        name: "Perplexity",
        category: "core",
        group: "Research AI",
        accent: "#46d9c7",
        price: "Free / Pro $20",
        priceMonthly: 20,
        status: "active",
        url: "https://www.perplexity.ai/",
        source: "Perplexity Pro perks",
        bestFor: "Research có nguồn, competitor scan, market brief, fact-check",
        audience: "Marketer, planner, researcher, founder, sales",
        summary: "Perplexity là công cụ research đáng dùng khi cần câu trả lời có nguồn, scan đối thủ, tổng hợp thị trường và kiểm chứng trước khi đưa claim vào slide hoặc campaign.",
        currentNote: "Trang Perplexity Pro Perks ghi Pro ở mức $20/month; tài liệu API Sonar có pricing riêng theo request và token cho nhu cầu tích hợp.",        demoSource: "https://www.youtube.com/watch?v=yoD6LUiTuH8",
        metrics: { video: 1, avatar: 1, copy: 4, ad: 3, social: 3, automation: 3, control: 4, ease: 5, speed: 5, vietnamese: 4, safety: 4, costClarity: 4 },
        pros: ["Rất hợp research nhanh có citation để đưa vào thuyết trình.", "Tốt cho competitor scan, market trend, câu hỏi factual và kiểm chứng claim.", "Free tier đủ để dùng nhẹ trước khi cân nhắc Pro."],
        cons: ["Không phải công cụ viết brand voice sâu như Claude/Jasper.", "Cần mở từng nguồn khi claim quan trọng, citation vẫn có thể lệch.", "API và Pro app là hai bài toán chi phí khác nhau."],
        workflow: ["Research thị trường và đối thủ bằng câu hỏi cụ thể.", "Lưu nguồn chính thức cho slide/bằng chứng.", "Đưa insight qua ChatGPT/Claude để biến thành kế hoạch nội dung."],
        avoid: "Không copy nguyên câu trả lời vào báo cáo nếu chưa mở nguồn và đọc ngữ cảnh.",
        verdict: "Đáng nằm trong top free-value cho mọi team cần research có dẫn chứng, nhất là khi làm slide so sánh AI."
    },
    {
        id: "mistral",
        name: "Mistral Le Chat",
        category: "core",
        group: "Model nền tảng",
        accent: "#ff6b6b",
        price: "Free / Pro $14.99",
        priceMonthly: 14.99,
        status: "active",
        url: "https://chat.mistral.ai/chat",
        source: "Mistral pricing",
        bestFor: "Chat miễn phí, research nhẹ, tài liệu, coding và workflow cá nhân",
        audience: "Office, student, founder, technical marketer",
        summary: "Mistral Le Chat là lựa chọn free-value tốt cho trợ lý cá nhân, phân tích tài liệu, tìm kiếm web, tạo nội dung và workflow nhẹ, đặc biệt khi muốn thêm một model nền tảng ngoài Mỹ.",
        currentNote: "Trang Mistral Pricing ghi Free plan có web/mobile access, SOTA models, limited messages và web searches; Pro ở mức $14.99/month.",        demoSource: "https://www.youtube.com/watch?v=YxYbSnzcVSM",
        metrics: { video: 1, avatar: 1, copy: 4, ad: 3, social: 3, automation: 4, control: 4, ease: 4, speed: 5, vietnamese: 4, safety: 4, costClarity: 4 },
        pros: ["Free plan đủ tốt để thử như trợ lý đa năng.", "Pro rẻ hơn nhóm $20/month phổ biến.", "Hợp research nhẹ, văn bản, tài liệu và workflow/coding cá nhân."],
        cons: ["Không phải tool marketing chuyên sâu hoặc video generation.", "Free plan có giới hạn message/search.", "Ở Việt Nam vẫn cần test chất lượng tiếng Việt theo từng task cụ thể."],
        workflow: ["Dùng làm trợ lý nháp và phân tích tài liệu nhanh.", "Tạo checklist, outline, email, SOP hoặc prompt cho tool khác.", "So sánh output với ChatGPT/Claude/DeepSeek để chọn bản tốt nhất."],
        avoid: "Không dùng thay thế Perplexity khi yêu cầu chính là citation/research có nguồn rõ.",
        verdict: "Một lựa chọn ngon bổ rẻ đáng đưa vào danh sách vì có free plan và Pro dưới $15/tháng."
    },
    {
        id: "gemini",
        name: "Gemini Omni",
        category: "video",
        group: "Video generation",
        accent: "#46d9c7",
        price: "Google AI Plus/Pro/Ultra",
        priceMonthly: 19.99,
        status: "early",
        url: "https://gemini.google/us/overview/video-generation/",
        source: "Gemini Omni video generation",
        bestFor: "Video ý tưởng, chỉnh sửa bằng hội thoại, avatar",
        audience: "Creator, content team, product marketer",
        summary: "Google đang thay Veo trong Gemini app bằng Gemini Omni: video 10 giây, native audio, image-to-video, video-to-video editing, multi-turn editing và avatar.",
        currentNote: "Nguồn Google nói Gemini Omni sẽ thay Veo trong Gemini app và yêu cầu Google AI subscription.",        demoSource: "https://www.youtube.com/watch?v=ecTqFLS-9mg",
        metrics: { video: 5, avatar: 4, copy: 4, ad: 4, social: 4, automation: 4, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 5, costClarity: 3 },
        pros: ["Rất mạnh cho quy trình hội thoại: sửa video bằng prompt thay vì làm thủ công từng bước.", "Native audio và avatar giúp hợp với nội dung social ngắn.", "Nằm trong hệ sinh thái Google Flow, Gemini và Workspace."],
        cons: ["Tính năng mới, phạm vi quốc gia và tier có thể khác nhau.", "Video 10 giây phù hợp clip ngắn hơn là TVC dài.", "Cần xác minh quyền truy cập theo tài khoản trước khi demo."],
        workflow: ["Biến moodboard sản phẩm thành clip 10 giây.", "Sửa background hoặc wardrobe bằng prompt.", "Tạo avatar ngắn để mở đầu video social."],
        avoid: "Không dùng làm nguồn duy nhất cho campaign cần deadline chắc nếu tài khoản chưa mở đủ tính năng.",
        verdict: "Đáng đưa vào slide như đại diện mới của video AI hội thoại, nhất là sau khi Sora không còn là lựa chọn build mới."
    },
    {
        id: "runway",
        name: "Runway Gen-4.5",
        category: "video",
        group: "Video generation",
        accent: "#7aa7ff",
        price: "From $12/mo annual",
        priceMonthly: 12,
        status: "active",
        url: "https://runwayml.com/pricing?upgrade=unlimited",
        source: "Runway pricing",
        bestFor: "TVC, B-roll cinematic, product showcase",
        audience: "Agency, filmmaker, creative team",
        summary: "Runway là lựa chọn mạnh cho video cinematic và workflow sản xuất chuyên nghiệp, có Gen-4.5, Aleph video editing, Act-Two và cả mô hình bên thứ ba trong cùng workspace.",
        currentNote: "Standard $12/user/mo annual có 625 credits, gồm 25 giây Gen-4.5 hoặc 52 giây Gen-4 theo bảng giá Runway.",        demoSource: "https://www.youtube.com/watch?v=uRkfzKYFOxc",
        metrics: { video: 5, avatar: 2, copy: 1, ad: 5, social: 4, automation: 4, control: 5, ease: 3, speed: 3, vietnamese: 2, safety: 4, costClarity: 3 },
        pros: ["Chất lượng cinematic và kiểm soát camera tốt.", "Có workflow chỉnh sửa video, performance capture và nhiều model trong một giao diện.", "Hợp để tạo B-roll sản phẩm, fashion, automotive, tech ads."],
        cons: ["Credit cháy nhanh nếu thử nhiều prompt.", "Cần kỹ năng art direction và prompt visual.", "Không phải tool avatar presenter chuyên dụng."],
        workflow: ["Tạo reference frame bằng Midjourney hoặc Firefly.", "Đưa vào Runway để dựng motion, camera, transition.", "Chỉnh lại bằng Aleph hoặc editor ngoài."],
        avoid: "Không nên dùng cho team chỉ cần 10 clip social đơn giản mỗi tuần nhưng không có người kiểm prompt.",
        verdict: "Lựa chọn video cao cấp cho agency. Đáng trả tiền khi output cần cảm giác TVC thật."
    },
    {
        id: "kling",
        name: "Kling AI 3.0",
        category: "video",
        group: "Video generation",
        accent: "#ff6b6b",
        price: "Credit based",
        priceMonthly: 10,
        status: "active",
        url: "https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide",
        source: "Kling 3.0 guide",
        bestFor: "Fashion, lifestyle, chuyển động người, multi-shot",
        audience: "Creator, e-commerce, social video team",
        summary: "Kling 3.0 hỗ trợ native audio, multi-shot, giữ nhất quán subject, nhiều ngôn ngữ và video đến 15 giây. Rất hợp clip sản phẩm, người mẫu và lifestyle.",
        currentNote: "Kling 3.0 tính phí theo credit/giây, có mode native audio, no native audio và voice control.",        demoSource: "https://www.youtube.com/watch?v=ZqxP616nvIE",
        metrics: { video: 5, avatar: 3, copy: 1, ad: 4, social: 5, automation: 3, control: 4, ease: 3, speed: 3, vietnamese: 2, safety: 3, costClarity: 3 },
        pros: ["Chuyển động người và sản phẩm nhìn tự nhiên.", "Multi-shot giúp một prompt tạo được nhịp dựng phim hơn.", "Tốt cho TikTok, Reels, fashion và lifestyle ads."],
        cons: ["Không phải avatar presenter kiểu HeyGen.", "Credit theo giây cần kiểm soát chặt khi test.", "Giao diện và tài liệu có thể khó hơn cho người mới."],
        workflow: ["Dùng ảnh sản phẩm hoặc người mẫu làm reference.", "Tạo 3-15 giây video với prompt shot-by-shot.", "Dựng lại thành ad ngắn trong CapCut hoặc Premiere."],
        avoid: "Không chọn nếu cần khóa brand safety theo tiêu chuẩn enterprise ngay từ đầu.",
        verdict: "Rất đáng so sánh với Runway cho social và fashion vì chất lượng motion tốt trên clip ngắn."
    },
    {
        id: "luma",
        name: "Luma Dream Machine",
        category: "video",
        group: "Video generation",
        accent: "#46d9c7",
        price: "From $9.99/mo",
        priceMonthly: 9.99,
        status: "active",
        url: "https://lumalabs.ai/learning-hub/dream-machine-support-pricing-information",
        source: "Luma Dream Machine pricing",
        bestFor: "Cinematic motion, Ray3, video thử nghiệm",
        audience: "Creator, indie studio, visual team",
        summary: "Dream Machine có Ray3 access từ Lite, Plus cho commercial use, 4K up-res/HDR ở tier cao. Phù hợp thử ý tưởng motion và tạo clip có mood cinematic.",
        currentNote: "Web Lite $9.99/mo có 3,200 credits và Full Ray3 access nhưng non-commercial, Plus $29.99/mo cho commercial use.",        demoSource: "https://www.youtube.com/watch?v=Zb3tffmBPRE",
        metrics: { video: 4, avatar: 2, copy: 1, ad: 4, social: 4, automation: 2, control: 3, ease: 4, speed: 4, vietnamese: 2, safety: 3, costClarity: 4 },
        pros: ["Dễ thử nhiều hướng hình ảnh và motion.", "Plus cho commercial use và bỏ watermark.", "Hợp vai trò phụ trong pipeline khi cần so output giữa các model."],
        cons: ["Control shot chưa chặt như Runway trong workflow chuyên nghiệp.", "Lite không dành cho thương mại.", "Thông số khác nhau giữa web và iOS."],
        workflow: ["Dùng để test mood trước khi chốt model cuối.", "Tạo clip concept cho pitch deck.", "Kết hợp với Firefly hoặc Midjourney để tạo first frame."],
        avoid: "Không dùng Lite cho campaign thương mại vì có watermark và non-commercial.",
        verdict: "Tốt cho experimentation và mood video. Agency nên tính từ Plus trở lên nếu dùng trong dự án khách hàng."
    },
    {
        id: "heygen",
        name: "HeyGen",
        category: "avatar",
        group: "Avatar UGC",
        accent: "#f2c14e",
        price: "Free / $29+",
        priceMonthly: 29,
        status: "active",
        url: "https://www.heygen.com/pricing",
        source: "HeyGen pricing",
        bestFor: "Avatar bán hàng, localization, onboarding",
        audience: "Marketing, sales, customer education",
        summary: "HeyGen tập trung vào video avatar, digital twin, dịch video và voice cloning. Creator $29/mo có 600 credits, video 30 phút, 1080p và 175+ ngôn ngữ.",
        currentNote: "Nguồn HeyGen nêu Free 3 video/tháng, Creator $29/mo, Pro $49/mo, Business $149/mo.",        demoSource: "https://www.youtube.com/watch?v=z8KL7ULSuxo",
        metrics: { video: 4, avatar: 5, copy: 2, ad: 4, social: 4, automation: 4, control: 4, ease: 5, speed: 5, vietnamese: 4, safety: 4, costClarity: 4 },
        pros: ["Avatar và lip-sync tốt cho sales video, onboarding, khóa học ngắn.", "Hỗ trợ nhiều ngôn ngữ, voice clone và dịch video.", "Có integration với n8n, Make, HubSpot, Zapier ở tier business."],
        cons: ["Credit và giới hạn avatar engine cần đọc kỹ.", "Không phải công cụ cinematic B-roll.", "Team scale cần Business hoặc Enterprise."],
        workflow: ["Viết script bằng ChatGPT hoặc Claude.", "Dùng HeyGen tạo avatar nói tiếng Việt/Anh.", "Đẩy bản ngắn sang landing page hoặc email sales."],
        avoid: "Không dùng cho scene điện ảnh có nhiều chuyển động phức tạp.",
        verdict: "Lựa chọn rất mạnh cho video có người nói, đặc biệt khi cần localization và tốc độ ra nội dung."
    },
    {
        id: "synthesia",
        name: "Synthesia",
        category: "avatar",
        group: "Avatar UGC",
        accent: "#7aa7ff",
        price: "Free / Starter / Creator",
        priceMonthly: 19,
        status: "active",
        url: "https://www.synthesia.io/es/precios",
        source: "Synthesia pricing",
        bestFor: "Training, corporate comms, video SOP",
        audience: "L&D, HR, enterprise marketing",
        summary: "Synthesia phù hợp doanh nghiệp cần video training, hướng dẫn sản phẩm và nội dung nội bộ có avatar ổn định, template rõ, nhiều ngôn ngữ.",
        currentNote: "Trang giá Synthesia hiển thị Basic miễn phí, Starter, Creator và Enterprise, kèm hệ thống credit dùng cho video/dubbing.",        demoSource: "https://www.youtube.com/watch?v=G-7jbNPQ0TQ",
        metrics: { video: 4, avatar: 5, copy: 2, ad: 2, social: 2, automation: 3, control: 3, ease: 5, speed: 5, vietnamese: 4, safety: 5, costClarity: 4 },
        pros: ["Rất hợp training và video giải thích nghiêm túc.", "Giao diện dễ cho non-designer.", "Enterprise có các yếu tố bảo mật, API, LMS/SCORM tùy plan."],
        cons: ["Avatar có thể corporate và ít cảm xúc hơn HeyGen.", "Không hợp TVC cinematic.", "Chi phí lên Creator/Enterprise cần tính theo volume video."],
        workflow: ["Chuyển SOP hoặc slide training thành video.", "Tạo phiên bản đa ngôn ngữ cho team quốc tế.", "Nhúng vào LMS hoặc knowledge base."],
        avoid: "Không chọn nếu brand cần UGC tự nhiên kiểu TikTok.",
        verdict: "Thắng ở training và corporate. HeyGen thường hợp marketing/sales cảm xúc hơn."
    },
    {
        id: "pika",
        name: "Pika",
        category: "video",
        group: "Video generation",
        accent: "#ff6b6b",
        price: "Free + paid tiers",
        priceMonthly: 8,
        status: "watch",
        url: "https://pika.art/",
        source: "Pika",
        bestFor: "Social effects, meme ads, Reels thử nghiệm",
        audience: "Creator, social team, short-form editor",
        summary: "Pika hợp các clip ngắn có hiệu ứng vui, remix và social-first. Nên coi là công cụ tạo ý tưởng và asset ngắn, không phải nền tảng TVC hoặc corporate training.",
        currentNote: "Giá và credit Pika thay đổi theo tài khoản. Kiểm tra trực tiếp trong app trước khi đưa số vào slide ngân sách.",        demoSource: "https://www.youtube.com/watch?v=3P_GvqFbylY",
        metrics: { video: 3, avatar: 2, copy: 1, ad: 3, social: 5, automation: 2, control: 3, ease: 5, speed: 4, vietnamese: 2, safety: 3, costClarity: 2 },
        pros: ["Dễ tạo hiệu ứng social và clip ngắn.", "Hợp thử hook cho TikTok/Reels.", "Learning curve thấp."],
        cons: ["Kiểm soát brand và consistency kém hơn Runway/Kling.", "Không mạnh ở video dài hoặc scene phức tạp.", "Cần xác minh giá/credit live."],
        workflow: ["Tạo 5-10 biến thể visual hook.", "Chọn clip thắng để dựng thành Reel.", "Test organic trước khi sản xuất bản paid polished."],
        avoid: "Không dùng làm công cụ chính cho campaign cần hình ảnh thương hiệu cao cấp.",
        verdict: "Dùng như phòng lab ý tưởng social. Khi concept thắng, chuyển sang Runway, Kling hoặc editor chuyên nghiệp."
    },
    {
        id: "sora",
        name: "Sora",
        category: "video",
        group: "Video generation",
        accent: "#ff6b6b",
        price: "Không còn sản phẩm consumer",
        priceMonthly: 999,
        status: "legacy",
        url: "https://openai.com/index/sora-is-here/",
        source: "OpenAI Sora availability",
        bestFor: "Case study thị trường video AI",
        audience: "Presenter, strategy discussion",
        summary: "Sora từng là ví dụ mạnh cho text-to-video và storyboard, nhưng nguồn OpenAI hiện ghi sản phẩm Sora không còn khả dụng từ 26/04/2026.",
        currentNote: "Không nên đề xuất Sora như stack mới cho khách hàng nếu cần công cụ dùng ngay.",        demoSource: "https://www.youtube.com/watch?v=1PaoWKvcJP0",
        metrics: { video: 4, avatar: 1, copy: 3, ad: 3, social: 2, automation: 1, control: 3, ease: 1, speed: 1, vietnamese: 2, safety: 4, costClarity: 1 },
        pros: ["Có giá trị minh họa lịch sử phát triển video AI.", "Demos cũ vẫn giúp giải thích world simulation.", "Tạo điểm thảo luận về rủi ro phụ thuộc nền tảng."],
        cons: ["Không còn khả dụng như sản phẩm consumer theo nguồn OpenAI.", "Không phù hợp đưa vào stack vận hành mới.", "Tài liệu cũ dễ gây nhầm nếu không ghi ngày."],
        workflow: ["Dùng trong slide 'điều gì thay đổi trong 2026'.", "So sánh vì sao Gemini Omni, Runway, Kling đang thay thế vai trò này.", "Nêu rủi ro platform shutdown khi chọn tool."],
        avoid: "Không dùng để cam kết production pipeline mới.",
        verdict: "Giữ trong bài như bài học thị trường, không giữ trong recommendation stack."
    },
    {
        id: "midjourney",
        name: "Midjourney",
        category: "creative",
        group: "Ad creative",
        accent: "#f2c14e",
        price: "$10-$120/mo",
        priceMonthly: 10,
        status: "active",
        url: "https://docs.midjourney.com/docs/plans",
        source: "Midjourney plans",
        bestFor: "Key visual, concept art, image-to-video ngắn",
        audience: "Designer, creative director, social creator",
        summary: "Midjourney vẫn mạnh về thẩm mỹ hình ảnh và visual concept. Các plan có Basic, Standard, Pro, Mega, với video prompt và Relax Mode theo tier.",
        currentNote: "Tài liệu Midjourney ghi monthly price $10, $30, $60, $120 và video generation theo plan.",        demoSource: "https://www.youtube.com/watch?v=E9PvSeIO5NY",
        metrics: { video: 3, avatar: 1, copy: 1, ad: 5, social: 4, automation: 2, control: 4, ease: 3, speed: 4, vietnamese: 2, safety: 3, costClarity: 4 },
        pros: ["Thẩm mỹ visual mạnh, nhanh có moodboard đẹp.", "Tốt cho concept key visual, poster, social static.", "Có image-to-video ngắn cho motion từ ảnh."],
        cons: ["Không phải công cụ ad performance hoặc brand template.", "Quyền riêng tư cần Pro/Mega nếu cần Stealth Mode.", "Designer vẫn phải kiểm typography, logo, compliance."],
        workflow: ["Sinh key visual concept.", "Chọn style direction và đưa sang Firefly/Photoshop để chỉnh thương mại.", "Dùng ảnh làm first frame cho Runway/Kling."],
        avoid: "Không dùng trực tiếp cho ad final có logo/text quan trọng mà chưa qua chỉnh sửa.",
        verdict: "Rất mạnh ở giai đoạn ý tưởng. Kết hợp Firefly hoặc Canva để ra asset sạch hơn."
    },
    {
        id: "firefly",
        name: "Adobe Firefly",
        category: "creative",
        group: "Ad creative",
        accent: "#ff6b6b",
        price: "$9.99+",
        priceMonthly: 9.99,
        status: "active",
        url: "https://www.adobe.com/products/firefly/plans.html",
        source: "Adobe Firefly plans",
        bestFor: "Retouch sản phẩm, generative fill, creative suite",
        audience: "Designer, brand team, studio",
        summary: "Firefly hợp workflow thương mại trong hệ Adobe: tạo, chỉnh ảnh, video/audio bằng generative credits, gắn với Photoshop, Premiere, Express và Firefly web.",
        currentNote: "Adobe ghi Firefly Standard US$9.99/mo, Pro US$19.99/mo và Pro Plus cao hơn, có generative credits cho image, video, audio.",        demoSource: "https://www.youtube.com/watch?v=3VYpWxokxps",
        metrics: { video: 3, avatar: 1, copy: 1, ad: 5, social: 4, automation: 3, control: 5, ease: 3, speed: 4, vietnamese: 2, safety: 5, costClarity: 4 },
        pros: ["An toàn thương mại tốt hơn cho brand lớn.", "Tích hợp sâu Adobe nên hợp designer chuyên nghiệp.", "Generative Fill và chỉnh ảnh sản phẩm rất mạnh."],
        cons: ["Không rẻ nếu team chưa dùng Adobe.", "Cần kỹ năng thiết kế để ra output tốt.", "Không phải scheduler hay copy workflow."],
        workflow: ["Tạo ảnh nền sản phẩm và retouch.", "Dùng Photoshop/Firefly để chỉnh compositing.", "Xuất asset sang Canva hoặc ad platform."],
        avoid: "Không chọn cho team non-designer cần template nhanh và rẻ.",
        verdict: "Chọn khi brand cần chất lượng, quyền thương mại và kiểm soát thiết kế cao."
    },
    {
        id: "canva",
        name: "Canva Magic Studio",
        category: "creative",
        group: "Ad creative",
        accent: "#46d9c7",
        price: "Free / Pro",
        priceMonthly: 15,
        status: "active",
        url: "https://www.canva.com/newsroom/news/magic-studio/",
        source: "Canva Magic Studio",
        bestFor: "Social post, banner, deck, template nhanh",
        audience: "SME, content team, non-designer",
        summary: "Canva gom nhiều tính năng AI trong Magic Studio: Magic Design, Magic Media, Magic Grab, Magic Expand, Magic Switch và app marketplace.",
        currentNote: "Nguồn Canva mô tả Magic Studio là nơi gom AI tools trong một workflow dễ dùng cho cá nhân, team và tổ chức.",        demoSource: "https://www.youtube.com/watch?v=bVCRcNlY1yw",
        metrics: { video: 2, avatar: 2, copy: 3, ad: 4, social: 5, automation: 3, control: 3, ease: 5, speed: 5, vietnamese: 4, safety: 4, costClarity: 4 },
        pros: ["Dễ nhất cho team không chuyên thiết kế.", "Nhanh tạo social post, deck, story, banner.", "Brand Kit và template giúp giữ nhận diện."],
        cons: ["Không tối ưu ad performance sâu như AdCreative.", "Creative output dễ giống template nếu không có art direction.", "Video AI không sâu bằng tool video chuyên dụng."],
        workflow: ["Tạo bộ template campaign.", "Dùng Magic Resize để biến một visual thành nhiều format.", "Xuất nhanh cho social và slide."],
        avoid: "Không dùng làm công cụ duy nhất cho TVC hoặc visual cao cấp.",
        verdict: "Lựa chọn starter gần như bắt buộc cho SME vì tốc độ, chi phí và độ dễ dùng."
    },
    {
        id: "adcreative",
        name: "AdCreative.ai",
        category: "creative",
        group: "Ad creative",
        accent: "#f2c14e",
        price: "$39/mo monthly",
        priceMonthly: 39,
        status: "watch",
        url: "https://www.adcreative.ai/",
        source: "AdCreative.ai",
        bestFor: "A/B testing banner, creative scoring, competitor insight",
        audience: "Performance marketer, e-commerce, agency",
        summary: "AdCreative.ai tập trung tạo ad creative, text, creative insight, stock image và competitor insights. Mạnh cho paid ads hơn Canva nhưng credit cần quản trị kỹ.",
        currentNote: "Trang AdCreative hiển thị Starter Plans với 10 credits/month, 1 brand và giá theo billing monthly/quarterly/yearly.",        demoSource: "https://www.youtube.com/watch?v=KUcxh4Ma_z4",
        metrics: { video: 2, avatar: 1, copy: 3, ad: 5, social: 3, automation: 4, control: 3, ease: 4, speed: 5, vietnamese: 3, safety: 3, costClarity: 2 },
        pros: ["Tập trung đúng bài toán performance ad creative.", "Có creative insight và competitor insight.", "Sinh nhiều biến thể nhanh cho A/B testing."],
        cons: ["Credit system và billing cần đọc kỹ trước khi dùng.", "Output có thể lặp nếu brief và brand asset yếu.", "Không thay thế designer trong campaign lớn."],
        workflow: ["Upload brand và landing page.", "Sinh biến thể ad theo góc bán hàng.", "Chọn top creative để test Facebook/Google."],
        avoid: "Không chọn nếu bạn chỉ cần vài banner đơn giản, Canva có thể đủ.",
        verdict: "Hợp performance marketing, nhưng phải quản credit và điều khoản trial/billing cẩn thận."
    },
    {
        id: "jasper",
        name: "Jasper",
        category: "content",
        group: "Content",
        accent: "#7aa7ff",
        price: "$69/mo seat",
        priceMonthly: 69,
        status: "active",
        url: "https://www.jasper.ai/pricing",
        source: "Jasper pricing",
        bestFor: "Brand voice, campaign content, marketing agents",
        audience: "Marketing team, content agency, enterprise",
        summary: "Jasper định vị cho marketing team cần on-brand content, agents, canvas, knowledge assets và business plan có custom agents, SSO, style guide, API.",
        currentNote: "Trang Jasper nêu Pro $69/month/seat theo billing monthly và Business custom pricing.",        demoSource: "https://www.youtube.com/watch?v=4GO82RerfcY",
        metrics: { video: 1, avatar: 1, copy: 5, ad: 4, social: 4, automation: 4, control: 4, ease: 4, speed: 4, vietnamese: 4, safety: 4, costClarity: 3 },
        pros: ["Tập trung vào brand voice và workflow marketing hơn chatbot tổng quát.", "Phù hợp team có nhiều chiến dịch lặp lại.", "Business plan mở rộng agents, SSO, API và style guide."],
        cons: ["Đắt hơn ChatGPT/Claude nếu chỉ viết content cơ bản.", "Giá trị thật nằm ở setup brand và workflow, không phải prompt đơn lẻ.", "Business plan cần sales."],
        workflow: ["Thiết lập brand voice và audience.", "Tạo campaign kit: landing, email, social, ad copy.", "Dùng agent cho quy trình content lặp lại."],
        avoid: "Không chọn nếu solo creator chỉ cần vài caption mỗi tuần.",
        verdict: "Đáng dùng khi team cần consistency và quản trị content, không chỉ cần AI viết nhanh."
    },
    {
        id: "copyai",
        name: "Copy.ai",
        category: "content",
        group: "Content",
        accent: "#46d9c7",
        price: "$29/mo Chat",
        priceMonthly: 29,
        status: "active",
        url: "https://www.copy.ai/prices",
        source: "Copy.ai pricing",
        bestFor: "GTM workflow, content volume, multi-model chat",
        audience: "Startup, sales/marketing ops, GTM team",
        summary: "Copy.ai chuyển mạnh sang GTM AI. Chat $29/mo cho 5 seats, unlimited words, access OpenAI, Anthropic, Gemini; Growth và cao hơn tính theo workflow credits.",
        currentNote: "Nguồn Copy.ai ghi Chat $29/mo monthly, Growth $1,000/mo với 20K workflow credits.",        demoSource: "https://www.youtube.com/watch?v=gmlGzEWG31I",
        metrics: { video: 1, avatar: 1, copy: 4, ad: 3, social: 4, automation: 5, control: 3, ease: 4, speed: 5, vietnamese: 4, safety: 3, costClarity: 4 },
        pros: ["Giá Chat tốt cho team nhỏ nhiều seat.", "GTM workflow hữu ích khi muốn tự động hóa quy trình sales/marketing.", "Có nhiều model trong một giao diện."],
        cons: ["Không chuyên brand voice bằng Jasper ở enterprise marketing.", "Workflow credits có thể khó ước lượng nếu quy trình phức tạp.", "Không tạo visual/video chuyên sâu."],
        workflow: ["Tạo account plan hoặc email sequence.", "Sinh landing copy và product description hàng loạt.", "Xây workflow nghiên cứu khách hàng và tạo nội dung."],
        avoid: "Không chọn chỉ vì template nếu team không dùng workflow.",
        verdict: "Tốt cho startup/GTM team cần automation và nhiều seat với chi phí entry dễ chịu."
    },
    {
        id: "buffer",
        name: "Buffer AI",
        category: "social",
        group: "Social",
        accent: "#74d99f",
        price: "Free / $5+",
        priceMonthly: 5,
        status: "active",
        url: "https://buffer.com/pricing",
        source: "Buffer pricing",
        bestFor: "Lên lịch social, caption nhanh, SME",
        audience: "SME, creator, lean marketing team",
        summary: "Buffer có Free plan, Essentials $5/channel/mo annual, AI Assistant, ideas, scheduling và analytics đủ gọn cho team nhỏ.",
        currentNote: "Nguồn Buffer ghi Essentials $5/month cho 1 channel, có AI Assistant và unlimited scheduled posts per channel.",        demoSource: "https://www.youtube.com/watch?v=8ImwfQ1WeKI",
        metrics: { video: 1, avatar: 1, copy: 3, ad: 2, social: 5, automation: 4, control: 4, ease: 5, speed: 5, vietnamese: 3, safety: 4, costClarity: 5 },
        pros: ["Dễ dùng và rẻ cho scheduling cơ bản.", "AI Assistant đủ cho caption, repurpose content.", "Hợp SME cần đều bài hơn là analytics phức tạp."],
        cons: ["Social listening và enterprise analytics không sâu như Sprout.", "Không tạo video/visual mạnh.", "Chi phí tăng theo channel nếu mở rộng nhiều kênh."],
        workflow: ["Tạo caption bằng ChatGPT/Copy.ai.", "Lên lịch trong Buffer theo kênh.", "Đọc analytics cơ bản để cải thiện lịch đăng."],
        avoid: "Không chọn nếu bạn cần social listening, sentiment và quy trình CSKH lớn.",
        verdict: "Starter tốt nhất cho social operations gọn nhẹ."
    },
    {
        id: "sprout",
        name: "Sprout Social",
        category: "social",
        group: "Social",
        accent: "#74d99f",
        price: "$199+/seat",
        priceMonthly: 199,
        status: "active",
        url: "https://sproutsocial.com/es/pricing/",
        source: "Sprout Social pricing",
        bestFor: "Enterprise social, listening, reporting, governance",
        audience: "Enterprise, multi-brand team, agency lớn",
        summary: "Sprout Social là social management cấp enterprise với publishing, inbox, AI Assist, sentiment, social listening add-on và reporting mạnh.",
        currentNote: "Nguồn Sprout ghi Standard $199/seat/mo, Professional $299, Advanced $399, có AI Assist và sentiment ở tier cao.",        demoSource: "https://www.youtube.com/watch?v=A6L6HgNW8pk",
        metrics: { video: 1, avatar: 1, copy: 3, ad: 2, social: 5, automation: 5, control: 5, ease: 3, speed: 4, vietnamese: 2, safety: 5, costClarity: 4 },
        pros: ["Mạnh ở social governance, reporting, inbox và listening.", "Hợp team lớn có nhiều account, approval và CSKH.", "AI Assist và sentiment giúp xử lý phản hồi social."],
        cons: ["Giá cao, quá nặng cho SME.", "Không tạo creative asset mạnh.", "Cần quy trình vận hành mới khai thác hết."],
        workflow: ["Quản tất cả social profile và phân quyền.", "Theo dõi sentiment và crisis signals.", "Xuất báo cáo cho stakeholder."],
        avoid: "Không dùng cho team nhỏ chỉ cần lên lịch 3 kênh.",
        verdict: "Chọn cho enterprise social intelligence. SME nên dùng Buffer hoặc Predis trước."
    },
    {
        id: "predis",
        name: "Predis.ai",
        category: "social",
        group: "Social",
        accent: "#46d9c7",
        price: "$19+",
        priceMonthly: 19,
        status: "active",
        url: "https://predis.ai/es/pricing/",
        source: "Predis pricing",
        bestFor: "Tạo social post, carousel, video ngắn, phân tích đối thủ",
        audience: "Creator, SME, social manager",
        summary: "Predis tạo và tối ưu content social bằng AI, gồm post, image, video, brand, competitor analysis và publishing tùy plan.",
        currentNote: "Nguồn Predis ghi plan entry $19/mo annual với 1,300 credits/month, 1 brand, publish 10 channels và competitor analysis.",        demoSource: "https://www.youtube.com/watch?v=Yqv_KOb9dvk",
        metrics: { video: 3, avatar: 2, copy: 4, ad: 3, social: 5, automation: 4, control: 3, ease: 5, speed: 5, vietnamese: 3, safety: 3, costClarity: 4 },
        pros: ["All-in-one cho social post, carousel và video ngắn.", "Có competitor analysis và brand setup.", "Hợp team nhỏ muốn giảm số tool."],
        cons: ["Video không mạnh bằng Runway/Kling.", "Auto-posting không có ở entry plan.", "Creative có thể cần chỉnh lại để tránh cảm giác template."],
        workflow: ["Nhập URL hoặc topic.", "Sinh carousel, caption, hashtag và video ngắn.", "Đăng hoặc xuất sang Buffer/Sprout tùy quy trình."],
        avoid: "Không dùng cho TVC hoặc ad creative cần hiệu năng cao.",
        verdict: "Lựa chọn social all-in-one hợp SME, nhất là khi cần nhiều format nhanh."
    },
    {
        id: "capcut",
        name: "CapCut Pro",
        category: "video",
        group: "Video editor",
        accent: "#ff6b6b",
        price: "Region based",
        priceMonthly: 10,
        status: "active",
        url: "https://www.capcut.com/help/new-capcut-subscription-pricing",
        source: "CapCut AI credits and Pro",
        bestFor: "Dựng video social, auto captions, AI editing",
        audience: "TikTok/Reels team, creator, SME",
        summary: "CapCut không phải model generation thuần, nhưng rất thực dụng cho hậu kỳ social: template, auto captions, AI tools, Pro subscription và AI credits.",
        currentNote: "CapCut ghi giá thay đổi theo region/platform; Pro mới tăng AI credits và cloud storage cho creator/marketing.",        demoSource: "https://www.youtube.com/watch?v=5pZkbUFs9lM",
        metrics: { video: 4, avatar: 2, copy: 2, ad: 3, social: 5, automation: 3, control: 4, ease: 5, speed: 5, vietnamese: 4, safety: 3, costClarity: 2 },
        pros: ["Nhanh nhất để dựng Reels/TikTok từ asset AI.", "Auto captions, template và AI editing hữu ích cho social.", "Phù hợp kết thúc pipeline từ Runway, Kling, Pika."],
        cons: ["Giá phụ thuộc region/platform nên khó đưa con số cố định.", "Không thay thế model generation cinematic.", "Template phổ biến dễ bị giống nhau."],
        workflow: ["Nhập clip từ Kling/Runway/Pika.", "Cắt nhịp, thêm caption, voice, nhạc và hook.", "Xuất theo format TikTok/Reels/Shorts."],
        avoid: "Không dùng làm nơi chốt art direction hoặc tạo key visual cao cấp.",
        verdict: "Không nên thiếu trong stack social video vì nó biến output AI thành video đăng được."
    }
];

const mediaProfiles = {
    chatgpt: { officialVideo: true, mediaLabel: "Clip chính thức của OpenAI" },
    claude: { officialVideo: true, mediaLabel: "Clip chính thức của Anthropic", image: "https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/68c469d23594abeb9ab6ee48_70ed020ecf8fa028b9bc95fa819720b6_og_claude-generic.jpg" },
    kimi: { officialVideo: false, mediaLabel: "Ảnh/nhận diện từ website Kimi" },
    grok: { officialVideo: true, mediaLabel: "Clip web của Grok" },
    deepseek: { officialVideo: false, mediaLabel: "Ảnh/nhận diện từ website DeepSeek" },
    qwen: { officialVideo: true, mediaLabel: "Clip chính thức của Alibaba Cloud", image: "https://assets.alicdn.com/g/qwenweb/qwen-chat-fe/0.2.38/favicon.png" },
    copilot: { officialVideo: true, mediaLabel: "Clip chính thức của Microsoft", image: "https://copilot.microsoft.com/static/cmc/images/meta-image.jpg" },
    perplexity: { officialVideo: true, mediaLabel: "Clip chính thức của Perplexity" },
    mistral: { officialVideo: true, mediaLabel: "Clip chính thức của Mistral" },
    gemini: { officialVideo: true, mediaLabel: "Clip/ảnh chính thức của Google", image: "https://lh3.googleusercontent.com/1E500rkSh8Gqkz2l12tkrKkMgsDmbQot0h3afeiRukXNficphb2zEE8o6J3dSKkiDGOOCcQ8WtRYzEYudgiYK9FkoQeYg_SP92-C=e365-pa-nu-w1200-rj" },
    runway: { officialVideo: true, mediaLabel: "Clip chính thức của Runway", image: "https://runwayml.com/opengraph-image.png?opengraph-image.0bt75ga2._tb4.png" },
    kling: { officialVideo: false, mediaLabel: "Ảnh từ hướng dẫn Kling 3.0", image: "https://static--52.klingai-cdn-aws.com/kling-blog/file/bb76565f587a267afb61f40b9089dc4e88a77621e2939ae137e5210207cda36d.png" },
    luma: { officialVideo: true, mediaLabel: "Clip chính thức của Luma", image: "https://framerusercontent.com/images/CZk5BAv3q0e6IGAaJR6TqAAhhaI.jpg" },
    heygen: { officialVideo: false, mediaLabel: "Ảnh từ website HeyGen", image: "https://cdn.sanity.io/images/pdhqcmb1/production/8a4f91321dd9aa4d73140e133701a3080cd703ed-2048x2048.heif?fit=max&fm=png" },
    synthesia: { officialVideo: true, mediaLabel: "Clip chính thức của Synthesia", image: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/67ffbefcfd6ea6ab85d941b1_ES%20OG%20Image.jpg" },
    pika: { officialVideo: false, mediaLabel: "Ảnh từ website Pika", image: "https://pika.art/images/og.jpeg" },
    sora: { officialVideo: true, mediaLabel: "Clip chính thức của OpenAI" },
    midjourney: { officialVideo: true, mediaLabel: "Clip chính thức của Midjourney" },
    firefly: { officialVideo: true, mediaLabel: "Clip/ảnh chính thức của Adobe", image: "https://www.adobe.com/products/firefly/media_18576786d32067809a9840475c385318890fc7893.jpg?width=1200&format=pjpg&optimize=medium" },
    canva: { officialVideo: true, mediaLabel: "Clip chính thức của Canva" },
    adcreative: { officialVideo: false, mediaLabel: "Ảnh từ website AdCreative.ai", image: "https://cdn.prod.website-files.com/661ce890f68a1d352ebbed35/6798994af847e3d5f12f2e3f_Home.png" },
    jasper: { officialVideo: true, mediaLabel: "Clip chính thức của Jasper", image: "https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/6846454f67d96b7825b969bb_OpenGraph%20-%20Plans%20and%20Pricing.png" },
    copyai: { officialVideo: true, mediaLabel: "Clip chính thức của Copy.ai", image: "https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/65f211155542743ea73badb5_vimeo-title-card.png" },
    buffer: { officialVideo: true, mediaLabel: "Clip chính thức của Buffer", image: "https://buffer.com/ogImages/pricing-og.png" },
    sprout: { officialVideo: true, mediaLabel: "Clip chính thức của Sprout Social", image: "https://brandfolder.sproutsocial.com/VXTUTVL1/at/wmnbtg2bnjv7tpfpxv7p97s3/og_pricing-page-green.png?auto=webp" },
    predis: { officialVideo: false, mediaLabel: "Ảnh từ website Predis.ai", image: "https://predis.ai/assets/img/try-out/temp-thumb/ads/ai-ad-generator.webp" },
    capcut: { officialVideo: false, mediaLabel: "Ảnh từ website CapCut", image: "https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/ece76295fa4a402cb5499bc82f6a476d~tplv-2zwwjm3azk-image.image" }
};

function mediaFor(tool) {
    const media = mediaProfiles[tool.id] || {};
    const videoId = media.officialVideo ? youtubeId(tool.demoSource || "") : "";
    return {
        ...media,
        videoId,
        image: media.image || (videoId ? youtubeThumb(videoId) : "")
    };
}

const priceProfiles = {
    chatgpt: {
        label: "Free / Plus $20",
        entryMonthly: 0,
        practicalMonthly: 20,
        billing: "Plus $20/tháng; API tính riêng",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Rẻ nhất nếu cần research, brief, copy và phân tích đa năng. Không thay thế tool video/ad chuyên dụng.",
        sourceUrl: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
        sourceLabel: "OpenAI Help - ChatGPT Plus"
    },
    claude: {
        label: "Free / Pro $20",
        entryMonthly: 0,
        practicalMonthly: 20,
        billing: "Pro $20/tháng hoặc $17/tháng khi trả năm",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Đáng tiền cho long-form, phân tích tài liệu và kiểm tone. Không mua nếu mục tiêu chính là tạo video.",
        sourceUrl: "https://claude.com/pricing",
        sourceLabel: "Claude pricing"
    },
    kimi: {
        label: "Free chat / API $0.95 in",
        entryMonthly: 0,
        practicalMonthly: 0,
        billing: "Kimi K2.6 API: $0.16 cache hit input, $0.95 cache miss input, $4.00 output / 1M tokens",
        freeTier: true,
        creditRisk: 2,
        confidence: "official",
        note: "Rất đáng thử cho long-context, coding, agent task và tài liệu dài. Value cao nếu dùng cache tốt; cần tránh gọi nhầm dòng Kimi K2 cũ đã discontinued.",
        sourceUrl: "https://platform.kimi.ai/docs/pricing/chat-k26",
        sourceLabel: "Kimi K2.6 pricing"
    },
    grok: {
        label: "Free / SuperGrok $30",
        entryMonthly: 0,
        practicalMonthly: 30,
        billing: "Free $0/tháng; SuperGrok $30/tháng cho higher limits, frontier models, image/video",
        freeTier: true,
        creditRisk: 2,
        confidence: "official",
        note: "Rất đáng thử miễn phí cho trend, social insight và realtime web/X search. Chỉ mua SuperGrok nếu cần limit cao hoặc image/video.",
        sourceUrl: "https://x.ai/pricing",
        sourceLabel: "Grok Pricing"
    },
    deepseek: {
        label: "Free chat / API rất rẻ",
        entryMonthly: 0,
        practicalMonthly: 0,
        billing: "Chat dùng thử miễn phí; API V4-Flash từ $0.14 input miss và $0.28 output / 1M tokens",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Một trong các lựa chọn ngon bổ rẻ nhất cho reasoning, tóm tắt, code, SOP và nháp content. Không dành cho video/creative asset.",
        sourceUrl: "https://api-docs.deepseek.com/quick_start/pricing",
        sourceLabel: "DeepSeek pricing"
    },
    qwen: {
        label: "Free quota / API rẻ",
        entryMonthly: 0,
        practicalMonthly: 0,
        billing: "Qwen-Flash/Qwen3.5-Flash tính theo 1M tokens; International có free quota 90 ngày sau khi kích hoạt",
        freeTier: true,
        creditRisk: 2,
        confidence: "official-region",
        note: "Value tốt cho đa ngôn ngữ, tài liệu dài và batch content. Cần kiểm region/free quota trước khi chốt demo hoặc ngân sách.",
        sourceUrl: "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
        sourceLabel: "Qwen Model Studio pricing"
    },
    copilot: {
        label: "Free / M365 $19.99",
        entryMonthly: 0,
        practicalMonthly: 19.99,
        billing: "Microsoft 365 Premium $19.99/tháng, có Copilot trong productivity apps và AI usage mở rộng",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Ngon bổ rẻ nhất cho người đã sống trong Word, Excel, PowerPoint, Outlook. Giá trị giảm mạnh nếu team không dùng Microsoft 365.",
        sourceUrl: "https://www.microsoft.com/en-us/store/b/copilotpro",
        sourceLabel: "Microsoft 365 Premium"
    },
    perplexity: {
        label: "Free / Pro $20",
        entryMonthly: 0,
        practicalMonthly: 20,
        billing: "Pro $20/tháng; API Sonar tính riêng theo request, search context và token",
        freeTier: true,
        creditRisk: 2,
        confidence: "official",
        note: "Rất đáng tiền cho research có nguồn, competitor scan và fact-check. Free đủ dùng nhẹ; Pro hợp người làm báo cáo/slide thường xuyên.",
        sourceUrl: "https://www.perplexity.ai/properks",
        sourceLabel: "Perplexity Pro perks"
    },
    mistral: {
        label: "Free / Pro $14.99",
        entryMonthly: 0,
        practicalMonthly: 14.99,
        billing: "Free plan có giới hạn; Pro $14.99/tháng",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Rẻ hơn nhóm $20/tháng và đủ mạnh để thử làm trợ lý cá nhân, tài liệu, research nhẹ, code/workflow.",
        sourceUrl: "https://mistral.ai/pricing/",
        sourceLabel: "Mistral pricing"
    },
    gemini: {
        label: "AI Plus $7.99 / Pro $19.99",
        entryMonthly: 7.99,
        practicalMonthly: 19.99,
        billing: "AI Plus có 200 Flow credits; AI Pro có 1,000 Flow credits",
        freeTier: true,
        creditRisk: 3,
        confidence: "official",
        note: "Rất đáng thử nếu đã ở hệ Google. Với video thật nên tính từ AI Pro vì có nhiều credit hơn.",
        sourceUrl: "https://gemini.google/us/subscriptions/",
        sourceLabel: "Google AI subscriptions"
    },
    runway: {
        label: "Standard $12+",
        entryMonthly: 12,
        practicalMonthly: 12,
        billing: "$12/user/tháng khi trả năm, 625 credits/tháng",
        freeTier: true,
        creditRisk: 4,
        confidence: "official",
        note: "Giá vào thấp nhưng credit video cháy nhanh. Đáng tiền khi cần cinematic/TVC và có người art direction.",
        sourceUrl: "https://runwayml.com/pricing",
        sourceLabel: "Runway pricing"
    },
    kling: {
        label: "Credit based",
        entryMonthly: 10,
        practicalMonthly: 30,
        billing: "Giá/credit thay đổi theo app, region và model",
        freeTier: true,
        creditRisk: 5,
        confidence: "verify",
        note: "Chất lượng/giá tốt cho motion social, nhưng phải mở app kiểm credit trước khi chốt ngân sách.",
        sourceUrl: "https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide",
        sourceLabel: "Kling 3.0 guide"
    },
    luma: {
        label: "Lite $9.99 / Plus $29.99",
        entryMonthly: 9.99,
        practicalMonthly: 29.99,
        billing: "Lite non-commercial/watermark; Plus commercial/no watermark",
        freeTier: true,
        creditRisk: 4,
        confidence: "official",
        note: "Không tính Lite là lựa chọn commercial. Nếu dùng cho khách hàng, xem Plus là mốc thực tế.",
        sourceUrl: "https://lumalabs.ai/learning-hub/dream-machine-support-pricing-information",
        sourceLabel: "Luma Dream Machine pricing"
    },
    heygen: {
        label: "Free / Creator $29",
        entryMonthly: 0,
        practicalMonthly: 29,
        billing: "Creator $29/tháng, 600 credits; Pro $49/tháng, 1,000 credits",
        freeTier: true,
        creditRisk: 3,
        confidence: "official",
        note: "Ngon bổ rẻ nhất trong nhóm avatar/sales video nếu cần người nói, voice và localization.",
        sourceUrl: "https://www.heygen.com/pricing",
        sourceLabel: "HeyGen pricing"
    },
    synthesia: {
        label: "Free / Starter $29",
        entryMonthly: 18,
        practicalMonthly: 29,
        billing: "Starter $29/tháng hoặc $18/tháng khi trả năm; Creator $89/tháng",
        freeTier: true,
        creditRisk: 2,
        confidence: "official",
        note: "Đắt hơn HeyGen ở entry nếu trả tháng, nhưng hợp training/corporate và quản trị nội dung nghiêm túc.",
        sourceUrl: "https://www.synthesia.io/pricing",
        sourceLabel: "Synthesia pricing"
    },
    pika: {
        label: "Free / Standard $8",
        entryMonthly: 0,
        practicalMonthly: 8,
        billing: "Basic free 80 credits; Standard $8/tháng khi trả năm, 700 credits",
        freeTier: true,
        creditRisk: 3,
        confidence: "official",
        note: "Rẻ để test hiệu ứng social và meme ads, không nên dùng làm tool cinematic chính.",
        sourceUrl: "https://pika.art/pricing",
        sourceLabel: "Pika pricing"
    },
    sora: {
        label: "Discontinued",
        entryMonthly: 999,
        practicalMonthly: 999,
        billing: "Web/app đã dừng 26/04/2026; API dừng 24/09/2026",
        freeTier: false,
        creditRisk: 5,
        confidence: "official",
        discontinued: true,
        note: "Không đưa vào lựa chọn mua mới. Chỉ giữ làm case study rủi ro nền tảng.",
        sourceUrl: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
        sourceLabel: "OpenAI Sora discontinuation"
    },
    midjourney: {
        label: "$10 / $30 / $60 / $120",
        entryMonthly: 10,
        practicalMonthly: 30,
        billing: "Basic $10; Standard $30; Pro $60; Mega $120",
        freeTier: false,
        creditRisk: 3,
        confidence: "official",
        note: "Ảnh/ad visual rất mạnh. Nếu cần video relax/unlimited thì phải tính từ Pro/Mega.",
        sourceUrl: "https://docs.midjourney.com/docs/plans",
        sourceLabel: "Midjourney plans"
    },
    firefly: {
        label: "$9.99+",
        entryMonthly: 9.99,
        practicalMonthly: 9.99,
        billing: "Adobe plan theo generative credits và khu vực",
        freeTier: true,
        creditRisk: 2,
        confidence: "verify",
        note: "Đáng tiền khi team đã dùng Adobe và cần quyền thương mại/brand safety hơn là số lượng rẻ.",
        sourceUrl: "https://www.adobe.com/products/firefly/plans.html",
        sourceLabel: "Adobe Firefly plans"
    },
    canva: {
        label: "Free / Pro $15",
        entryMonthly: 0,
        practicalMonthly: 15,
        billing: "Pro khoảng $15/tháng hoặc $10/tháng khi trả năm; giá có thể theo region",
        freeTier: true,
        creditRisk: 1,
        confidence: "verify",
        note: "Ngon bổ rẻ nhất cho social post, deck, banner, template nhanh nếu team không chuyên design.",
        sourceUrl: "https://www.canva.com/pricing/",
        sourceLabel: "Canva pricing"
    },
    adcreative: {
        label: "$39+",
        entryMonthly: 39,
        practicalMonthly: 39,
        billing: "Starter thường quanh $39/tháng với credit/download giới hạn",
        freeTier: false,
        creditRisk: 4,
        confidence: "verify",
        note: "Chỉ đáng tiền khi chạy paid ads thật và cần scoring/A-B testing; credit thấp dễ thiếu khi test nhiều.",
        sourceUrl: "https://www.adcreative.ai/",
        sourceLabel: "AdCreative.ai"
    },
    jasper: {
        label: "$69/seat",
        entryMonthly: 69,
        practicalMonthly: 69,
        billing: "Pro $69/tháng/seat; $59/tháng/seat khi trả năm",
        freeTier: false,
        creditRisk: 2,
        confidence: "official",
        note: "Không rẻ cho cá nhân. Đáng tiền khi team cần brand voice, agent và governance marketing.",
        sourceUrl: "https://www.jasper.ai/pricing",
        sourceLabel: "Jasper pricing"
    },
    copyai: {
        label: "$29 Chat / $1000 Growth",
        entryMonthly: 29,
        practicalMonthly: 29,
        billing: "Chat $29/tháng; Growth $1,000/tháng với workflow credits",
        freeTier: false,
        creditRisk: 3,
        confidence: "official",
        note: "Rẻ cho multi-model chat nhiều seat, nhưng automation GTM thật nhảy lên Growth rất cao.",
        sourceUrl: "https://www.copy.ai/prices",
        sourceLabel: "Copy.ai pricing"
    },
    buffer: {
        label: "Free / $5 per channel",
        entryMonthly: 0,
        practicalMonthly: 5,
        billing: "Essentials $5/tháng/channel khi trả năm",
        freeTier: true,
        creditRisk: 1,
        confidence: "official",
        note: "Ngon bổ rẻ nhất cho scheduling social cơ bản. Chi phí tăng theo số channel.",
        sourceUrl: "https://buffer.com/pricing",
        sourceLabel: "Buffer pricing"
    },
    sprout: {
        label: "Essentials $79 / Standard $199",
        entryMonthly: 79,
        practicalMonthly: 199,
        billing: "Essentials $79/seat/tháng annual hoặc $99 monthly; Standard $199/seat/tháng",
        freeTier: false,
        creditRisk: 1,
        confidence: "official",
        note: "Không phải lựa chọn rẻ. Chỉ đáng tiền khi cần governance, inbox, reporting và listening cấp team lớn.",
        sourceUrl: "https://sproutsocial.com/pricing/",
        sourceLabel: "Sprout Social pricing"
    },
    predis: {
        label: "Core $19",
        entryMonthly: 19,
        practicalMonthly: 19,
        billing: "Core $19/tháng annual, 1,300 credits; Rise $40/tháng",
        freeTier: true,
        creditRisk: 3,
        confidence: "official",
        note: "Value tốt cho SME muốn social all-in-one: post, carousel, video ngắn, competitor và publish.",
        sourceUrl: "https://predis.ai/pricing/",
        sourceLabel: "Predis pricing"
    },
    capcut: {
        label: "Region based",
        entryMonthly: 10,
        practicalMonthly: 10,
        billing: "Giá theo app/region; Pro mới tăng AI credits từ 550 lên 1200",
        freeTier: true,
        creditRisk: 2,
        confidence: "official-region",
        note: "Gần như bắt buộc trong stack video social vì rẻ so với giá trị hậu kỳ, nhưng phải kiểm giá trong app.",
        sourceUrl: "https://www.capcut.com/help/new-capcut-subscription-pricing",
        sourceLabel: "CapCut pricing update"
    }
};

const planProfiles = {
    chatgpt: [
        ["Free", "$0/tháng", "Thử nhanh, hỏi đáp hằng ngày", ["GPT-5.5 Instant giới hạn", "Tin nhắn, upload, tạo ảnh, deep research và memory giới hạn", "Phù hợp demo nội bộ hoặc người mới"], "Nâng lên Plus khi cần reasoning, file, ảnh và research nhiều hơn."],
        ["Plus", "$20/tháng", "Cá nhân làm việc nghiêm túc", ["GPT-5.5 Thinking, message/upload mở rộng", "Deep research, agent mode, memory/context và custom GPTs mở rộng", "Phù hợp marketing, báo cáo, prompt, phân tích tài liệu"], "Hơn Free/Go ở reasoning, giới hạn dùng và công cụ làm việc."],
        ["Pro", "Theo trang giá", "Power user cần giới hạn cao", ["Usage cao hơn Plus, truy cập GPT-5.5 Pro", "Codex, deep research, agent mode và tạo ảnh mức cao", "Phù hợp người làm AI mỗi ngày"], "Hơn Plus ở hạn mức, model Pro và ưu tiên tính năng mới."],
        ["Business / Enterprise", "Theo seat / custom", "Team cần quản trị và bảo mật", ["Workspace chung, quản lý user, bảo mật, SSO/MFA tùy gói", "Kết nối app doanh nghiệp và không dùng dữ liệu để train theo chính sách gói", "Phù hợp triển khai công ty"], "Hơn Pro ở admin, compliance, data control và hỗ trợ."]
    ],
    claude: [
        ["Free", "$0/tháng", "Thử viết, đọc tài liệu nhẹ", ["Truy cập Claude trên web/app với giới hạn", "Hợp kiểm tone, tóm tắt ngắn, hỏi đáp", "Không phù hợp volume lớn"], "Nâng Pro khi cần làm việc đều với tài liệu dài."],
        ["Pro", "$20/tháng", "Cá nhân viết, phân tích, research", ["Usage cao hơn Free", "Hợp long-form, tài liệu, coding và phân tích", "Giá rẻ hơn nhiều so với Max"], "Hơn Free ở hạn mức và độ ổn định khi dùng hằng ngày."],
        ["Max 5x / 20x", "Từ $100/tháng", "Power user cần nhiều lượt", ["5x hoặc 20x usage hơn Pro", "Output limit cao hơn, ưu tiên lúc cao điểm", "Early access tính năng nâng cao"], "Hơn Pro ở quota, ưu tiên và khả năng xử lý task nặng."],
        ["Team / Enterprise", "Theo team / custom", "Doanh nghiệp cần quản trị", ["Workspace, quyền truy cập, bảo mật và hợp đồng doanh nghiệp", "Phù hợp triển khai nhiều phòng ban", "Cần hỏi sales để chốt điều khoản"], "Hơn Max cá nhân ở quản trị, bảo mật và triển khai đội nhóm."]
    ],
    kimi: [
        ["Free chat", "$0/tháng", "Thử long-context và coding", ["Chat miễn phí cho tài liệu dài và agent task", "Có web/search tùy kênh dùng", "Phù hợp benchmark trước khi tích hợp"], "Nâng API khi cần batch, automation hoặc đo chi phí rõ."],
        ["Kimi K2.6 API", "Theo token", "Tích hợp app/workflow", ["Input cache hit/miss và output tính theo 1M tokens", "Hợp xử lý tài liệu dài, coding, tool call, JSON", "Cần thiết kế cache để tiết kiệm"], "Hơn Free ở tự động hóa, quota và kiểm soát pipeline."],
        ["Enterprise / private", "Liên hệ", "Nhu cầu bảo mật hoặc volume lớn", ["Đàm phán quota, bảo mật, SLA và thanh toán", "Phù hợp hệ thống nội bộ", "Cần kiểm điều khoản dữ liệu"], "Hơn API public ở hợp đồng, hỗ trợ và kiểm soát vận hành."]
    ],
    grok: [
        ["Free", "$0/tháng", "Theo trend và hỏi đáp nhanh", ["Có real-time web/X search theo giới hạn", "Hợp social insight và trend scan nhẹ", "Không nên dùng làm nguồn duy nhất cho báo cáo"], "Nâng SuperGrok khi cần frontier model và limit cao hơn."],
        ["SuperGrok", "$30/tháng", "Cá nhân cần limit cao", ["Frontier models, higher limits", "Image/video generation theo gói", "Hợp social, trend, idea nhanh"], "Hơn Free ở model, hạn mức và multimedia."],
        ["API / Enterprise", "Theo usage/custom", "Tích hợp hoặc team lớn", ["Tính theo API hoặc hợp đồng", "Phù hợp automation realtime", "Cần kiểm chính sách dữ liệu và region"], "Hơn SuperGrok ở tích hợp và quản trị."]
    ],
    deepseek: [
        ["Free chat", "$0/tháng", "Thử reasoning, code, SOP", ["Chat miễn phí có giới hạn", "Hợp nháp nội dung, logic, code, checklist", "Không phải tool video/creative"], "Nâng API khi cần batch rẻ và tích hợp."],
        ["API Flash/Pro", "Theo token", "Batch content và automation", ["Chi phí thấp theo 1M tokens", "Có dòng Flash/Pro tùy chất lượng/tốc độ", "Hợp xử lý volume lớn"], "Hơn chat ở giá đo được, tự động hóa và scale."],
        ["Private / enterprise", "Liên hệ", "Dữ liệu nhạy cảm hoặc volume lớn", ["Đàm phán quota, bảo mật, support", "Phù hợp hệ thống nội bộ", "Cần kiểm chính sách lưu trữ dữ liệu"], "Hơn API public ở kiểm soát và hỗ trợ."]
    ],
    qwen: [
        ["Free quota", "$0 ban đầu", "Thử model và benchmark", ["International có free quota có hạn sau kích hoạt", "Hợp test đa ngôn ngữ và tài liệu", "Cần theo dõi ngày hết quota"], "Nâng API trả phí khi chạy ổn định."],
        ["Model Studio API", "Theo 1M tokens", "Automation và batch content", ["Qwen-Flash/Qwen3.5-Flash tính theo token", "Chọn model theo tốc độ, giá, chất lượng", "Hợp pipeline content đa ngôn ngữ"], "Hơn free ở scale, theo dõi chi phí và tích hợp."],
        ["Enterprise Alibaba Cloud", "Theo hợp đồng", "Doanh nghiệp cần cloud governance", ["Quota, billing, bảo mật và support theo cloud", "Phù hợp team kỹ thuật có hạ tầng Alibaba", "Cần kiểm region"], "Hơn API lẻ ở quản trị và cam kết vận hành."]
    ],
    copilot: [
        ["Free Copilot", "$0/tháng", "Hỏi đáp và tạo nội dung nhẹ", ["Truy cập Copilot cơ bản", "Hợp người mới và tác vụ web đơn giản", "Giới hạn tùy tài khoản/region"], "Nâng Microsoft 365 khi làm việc trong Word/Excel/PowerPoint."],
        ["Microsoft 365 Premium", "$19.99/tháng", "Người dùng Office cá nhân", ["Copilot trong productivity apps", "AI usage mở rộng, Designer/Clipchamp tùy gói", "Rất hợp báo cáo, email, slide"], "Hơn Free ở tích hợp Office và workflow tài liệu."],
        ["Copilot for business", "Theo seat", "Công ty dùng Microsoft 365", ["Quản trị user, bảo mật, quyền truy cập dữ liệu", "Phù hợp triển khai theo phòng ban", "Cần kiểm license hiện có"], "Hơn cá nhân ở compliance, admin và dữ liệu công ty."]
    ],
    perplexity: [
        ["Free", "$0/tháng", "Research nhanh có nguồn", ["Search và trả lời có citation theo giới hạn", "Hợp fact-check nhẹ", "Không đủ cho báo cáo nhiều mỗi ngày"], "Nâng Pro khi cần research sâu và limit cao."],
        ["Pro", "$20/tháng", "Người làm báo cáo, slide, phân tích", ["More searches, model tốt hơn, file/research nâng cao", "Hợp competitor scan, market brief, fact-check", "API Sonar tính riêng"], "Hơn Free ở hạn mức, model và research workflow."],
        ["API / Enterprise", "Theo usage/custom", "Tích hợp search vào hệ thống", ["Sonar API tính theo request/token/search context", "Quản trị và bảo mật tùy gói", "Cần dự toán theo số truy vấn"], "Hơn Pro ở tích hợp, automation và governance."]
    ],
    mistral: [
        ["Free", "$0/tháng", "Thử chat, web/mobile, search nhẹ", ["SOTA models với giới hạn message/search", "Hợp trợ lý cá nhân và thử model EU", "Không dành cho video"], "Nâng Pro khi cần dùng đều và ít gián đoạn."],
        ["Pro", "$14.99/tháng", "Cá nhân cần model tốt giá thấp", ["Hạn mức cao hơn Free", "Hợp tài liệu, code, research nhẹ", "Giá thấp hơn nhóm $20"], "Hơn Free ở hạn mức và độ ổn định."],
        ["La Plateforme / Enterprise", "Theo token/custom", "Tích hợp và doanh nghiệp", ["API model theo usage", "Có lựa chọn triển khai/bảo mật doanh nghiệp", "Cần kỹ thuật setup"], "Hơn Pro ở tích hợp sản phẩm và kiểm soát dữ liệu."]
    ],
    gemini: [
        ["Free", "$0/tháng", "Hỏi đáp và thử hệ Google", ["Truy cập Gemini cơ bản", "Hợp research nhẹ và nội dung nhanh", "Video/Flow bị giới hạn"], "Nâng AI Plus/Pro khi cần credit video và Workspace."],
        ["Google AI Plus", "$7.99/tháng", "Entry có credit AI", ["Có Flow credits mức thấp", "Hợp thử image/video ngắn", "Phù hợp cá nhân tiết kiệm"], "Hơn Free ở credit và quyền dùng tính năng AI mới."],
        ["Google AI Pro", "$19.99/tháng", "Dùng thực tế cho video/workflow", ["Flow credits cao hơn Plus", "Hợp Gemini, Flow, Workspace tùy region", "Nên chọn nếu demo video cho sếp"], "Hơn Plus ở credit, model/tính năng và độ thực dụng."],
        ["Ultra / Enterprise", "Cao hơn / custom", "Team cần limit và quản trị", ["Hạn mức cao, tính năng premium, quản trị theo Workspace", "Phù hợp triển khai công ty", "Cần kiểm region"], "Hơn Pro ở quota, quản trị và hỗ trợ."]
    ],
    runway: [
        ["Free", "$0/tháng", "Thử UI và model", ["Credit giới hạn, thường có watermark/limit", "Hợp test prompt và workflow", "Không đủ cho production"], "Nâng Standard khi cần xuất demo nghiêm túc."],
        ["Standard", "$12/user/tháng annual", "Entry production nhẹ", ["625 credits/tháng", "Dùng video model và editor", "Hợp test TVC/social ngắn"], "Hơn Free ở credit, export và khả năng dùng thực tế."],
        ["Pro / Unlimited", "Cao hơn", "Agency làm nhiều video", ["Nhiều credits hơn, storage và project nhiều hơn", "Có lựa chọn unlimited/editor tùy gói", "Phù hợp team sản xuất thường xuyên"], "Hơn Standard ở volume, storage và tốc độ thử nhiều biến thể."],
        ["Enterprise", "Custom", "Brand lớn cần governance", ["SLA, bảo mật, team controls, hợp đồng", "Phù hợp agency/enterprise", "Cần sales chốt usage"], "Hơn Pro ở quản trị, hỗ trợ và cam kết."]
    ],
    kling: [
        ["Free / trial credits", "$0 ban đầu", "Thử motion và prompt", ["Credit dùng thử tùy region/app", "Hợp test nhân vật, sản phẩm, lifestyle", "Không đủ để chốt ngân sách"], "Nâng paid credit khi cần nhiều render."],
        ["Paid credits", "Theo credit/giây", "Sản xuất social video", ["Chi phí phụ thuộc model, mode audio, thời lượng", "Dùng cho 3-15 giây, multi-shot, subject consistency", "Cần tính retry vì video dễ render lại"], "Hơn Free ở volume, model tốt hơn và output production."],
        ["Team/API", "Liên hệ/tuỳ kênh", "Scale hoặc tích hợp", ["Quota, automation, billing và support tùy kênh", "Phù hợp studio có pipeline", "Cần kiểm quyền thương mại"], "Hơn paid lẻ ở quy mô và vận hành."]
    ],
    luma: [
        ["Free / trial", "$0 ban đầu", "Thử Dream Machine", ["Credit hạn chế", "Hợp mood video và test Ray", "Có giới hạn commercial/watermark tùy gói"], "Nâng Lite/Plus khi cần dùng thường xuyên."],
        ["Lite", "$9.99/tháng", "Cá nhân thử nghiệm", ["3,200 credits và Full Ray3 access", "Non-commercial/watermark theo nguồn hiện có", "Không nên dùng cho khách hàng"], "Hơn Free ở credit và khả năng test nhiều hơn."],
        ["Plus", "$29.99/tháng", "Commercial nhẹ", ["Commercial use/no watermark theo nguồn hiện có", "Hợp agency nhỏ, creator, ad concept", "Cần theo dõi credit"], "Hơn Lite ở quyền thương mại và output sạch hơn."],
        ["Higher / Enterprise", "Cao hơn/custom", "Volume lớn", ["Nhiều credit, storage/support hơn", "Phù hợp team sản xuất", "Cần kiểm giá hiện hành"], "Hơn Plus ở quota và hỗ trợ."]
    ],
    heygen: [
        ["Free", "$0/tháng", "Thử avatar nhanh", ["3 video/tháng theo nguồn hiện có", "Video ngắn, watermark/limit tùy gói", "Hợp demo concept"], "Nâng Creator khi cần video sales/onboarding thật."],
        ["Creator", "$29/tháng", "Creator/SME làm avatar", ["600 credits", "Video tới 30 phút, 1080p", "Hợp sales video, nội dung đào tạo ngắn"], "Hơn Free ở thời lượng, credit và chất lượng output."],
        ["Pro", "$49/tháng", "Người dùng nhiều hơn", ["1,000 credits", "Nhiều custom avatar/voice và processing tốt hơn", "Hợp team nhỏ sản xuất đều"], "Hơn Creator ở credit, tốc độ và khả năng mở rộng."],
        ["Business", "$149/tháng", "Team cần collaboration", ["1,500 credits, video tới 60 phút, 4K", "SSO, billing, workspace collaboration, integrations", "Hợp doanh nghiệp đào tạo/sales"], "Hơn Pro ở team controls, 4K, concurrency và integration."],
        ["Enterprise", "Contact sales", "Tập đoàn hoặc production lớn", ["Không giới hạn duration theo hợp đồng", "Security, SCIM, MFA, success manager", "Commercial terms và invoice billing"], "Hơn Business ở bảo mật, hỗ trợ và điều khoản."]
    ],
    synthesia: [
        ["Free / Basic", "$0/tháng", "Thử video training", ["Basic miễn phí theo nguồn hiện có", "Credit/video giới hạn", "Hợp demo nội bộ"], "Nâng Starter khi cần xuất training đều."],
        ["Starter", "$29/tháng hoặc $18 annual", "Cá nhân/team nhỏ", ["Credit video/dubbing cơ bản", "Template và avatar cho training", "Hợp SOP, onboarding ngắn"], "Hơn Free ở credit, template và output thực dụng."],
        ["Creator", "$89/tháng", "Team làm nội dung đều", ["Nhiều credit, asset và tính năng production hơn", "Hợp khóa học, comms, localization", "Giá cao hơn HeyGen entry"], "Hơn Starter ở volume và workflow sản xuất."],
        ["Enterprise", "Custom", "Doanh nghiệp đào tạo lớn", ["Security, API/LMS/SCORM tùy hợp đồng", "Quản trị brand, user, workspace", "Phù hợp learning & development"], "Hơn Creator ở governance, tích hợp và scale."]
    ],
    pika: [
        ["Basic", "$0/tháng", "Thử hiệu ứng social", ["80 credits theo nguồn hiện có", "Hợp meme/social test", "Không đủ production lớn"], "Nâng Standard khi cần thử nhiều biến thể."],
        ["Standard", "$8/tháng annual", "Creator tiết kiệm", ["700 credits theo nguồn hiện có", "Nhiều lượt render hơn Basic", "Hợp short video, effect, concept"], "Hơn Basic ở credit và tần suất thử."],
        ["Pro / higher", "Cao hơn", "Dùng thường xuyên", ["Nhiều credit, tốc độ/queue tốt hơn tùy gói", "Phù hợp social team", "Cần kiểm checkout hiện tại"], "Hơn Standard ở volume và priority."]
    ],
    sora: [
        ["Không mua mới", "Discontinued", "Chỉ làm case study", ["Sản phẩm consumer đã dừng theo nguồn hiện có", "Không phù hợp đề xuất stack mới", "Giữ để giải thích rủi ro nền tảng"], "Không nâng cấp. Chọn Gemini/Runway/Kling/Luma thay thế."],
        ["API legacy", "Đã/đang dừng theo mốc nguồn", "Chỉ tham khảo lịch sử", ["Không dùng làm kế hoạch mới", "Cần kiểm thông báo OpenAI nếu có thay đổi", "Rủi ro vận hành cao"], "Không nên trình như lựa chọn mua."]
    ],
    midjourney: [
        ["Basic", "$10/tháng", "Ảnh concept nhẹ", ["Fast hours thấp", "Hợp moodboard và visual thử", "Video/relax hạn chế"], "Nâng Standard khi cần làm visual đều."],
        ["Standard", "$30/tháng", "Designer/marketer dùng đều", ["Nhiều fast hours hơn Basic", "Relax mode theo plan", "Hợp key visual, poster, social static"], "Hơn Basic ở quota và khả năng sản xuất liên tục."],
        ["Pro", "$60/tháng", "Agency/creative director", ["Fast hours cao hơn", "Stealth/advanced workflow tùy gói", "Tốt hơn nếu cần video relax/unlimited"], "Hơn Standard ở quota, quyền riêng tư/tính năng nâng cao."],
        ["Mega", "$120/tháng", "Volume lớn", ["Quota cao nhất trong nhóm cá nhân", "Hợp studio làm nhiều concept", "Cần cân credit so với Adobe/Canva"], "Hơn Pro ở sản lượng."]
    ],
    firefly: [
        ["Free / trial", "$0 ban đầu", "Thử generative asset", ["Credit miễn phí có hạn", "Hợp test Photoshop/Express/Firefly", "Cần Adobe account"], "Nâng Standard khi cần output thương mại đều."],
        ["Standard", "$9.99/tháng", "Marketer/designer cá nhân", ["Generative credits cho image/video/audio tùy vùng", "Tích hợp hệ Adobe", "Hợp brand-safe visual"], "Hơn Free ở credit và workflow sản xuất."],
        ["Pro / Pro Plus", "$19.99+ / cao hơn", "Team creative cần nhiều credit", ["Nhiều generative credits hơn", "Hợp Premiere/Photoshop/Express workflow", "Giá theo khu vực"], "Hơn Standard ở volume và khả năng dùng đa định dạng."]
    ],
    canva: [
        ["Free", "$0/tháng", "Template và thiết kế cơ bản", ["Thiết kế, template, Magic Studio giới hạn", "Hợp non-designer", "Không đủ brand/team governance"], "Nâng Pro khi cần brand kit, resize, stock và AI nhiều hơn."],
        ["Pro", "~$15/tháng", "Cá nhân/SME làm social đều", ["Magic Studio, brand kit, stock/template nhiều hơn", "Hợp bài social, banner, deck", "Giá có thể theo region"], "Hơn Free ở asset, AI, brand và xuất bản nhanh."],
        ["Teams / Enterprise", "Theo seat/custom", "Team marketing", ["Collaboration, approval, brand control", "Phù hợp phòng marketing", "Cần kiểm giá seat"], "Hơn Pro ở quản trị và workflow đội nhóm."]
    ],
    adcreative: [
        ["Starter", "$39+/tháng", "Chạy ads thử", ["Credit/download giới hạn", "1 brand theo nguồn hiện có", "Hợp test creative scoring"], "Nâng gói cao khi cần nhiều brand/creative."],
        ["Professional / higher", "Cao hơn", "Performance team chạy nhiều", ["Nhiều credit, brand, user hơn", "Hợp A/B test nhiều kênh", "Cần đọc kỹ billing/trial"], "Hơn Starter ở volume, brand và khả năng test."],
        ["Agency / custom", "Custom", "Quản lý nhiều khách hàng", ["Nhiều brand/client, quyền team", "Phù hợp agency ads", "Cần kiểm điều khoản credit"], "Hơn gói giữa ở multi-client và governance."]
    ],
    jasper: [
        ["Creator / entry", "Theo trang giá", "Cá nhân viết content", ["Viết, chỉnh tone, campaign content", "Hợp content marketer", "Không rẻ như ChatGPT/Claude"], "Nâng Pro khi cần brand voice và team workflow."],
        ["Pro", "$69/seat/tháng", "Marketing team nghiêm túc", ["Brand voice, agents/workflows theo nguồn hiện có", "Hợp content operation, campaign", "Giá theo seat"], "Hơn entry ở governance nội dung và workflow marketing."],
        ["Business", "Custom", "Enterprise marketing", ["SSO, admin, security, custom workflow", "Hợp brand lớn", "Cần sales"], "Hơn Pro ở bảo mật, quản trị và hỗ trợ."]
    ],
    copyai: [
        ["Chat", "$29/tháng", "Multi-model chat cho GTM", ["Chat/copywriting cho cá nhân hoặc team nhỏ", "Hợp idea, email, sales copy", "Automation sâu chưa phải trọng tâm"], "Nâng Growth khi cần workflow automation."],
        ["Growth", "$1,000/tháng", "GTM automation nghiêm túc", ["20K workflow credits theo nguồn hiện có", "Hợp outbound, enrichment, process tự động", "Chi phí nhảy mạnh"], "Hơn Chat ở workflow credits và automation."],
        ["Enterprise", "Custom", "Scale GTM", ["Governance, bảo mật, custom workflow", "Hợp đội sales/marketing lớn", "Cần sales"], "Hơn Growth ở control, support và volume."]
    ],
    buffer: [
        ["Free", "$0/tháng", "Lên lịch rất cơ bản", ["Một số channel/post giới hạn", "AI Assistant dùng nhẹ", "Hợp thử quy trình social"], "Nâng Essentials khi cần đều bài."],
        ["Essentials", "$5/channel/tháng annual", "SME quản kênh social", ["Unlimited scheduled posts per channel theo nguồn hiện có", "Analytics cơ bản, scheduling gọn", "Chi phí tăng theo channel"], "Hơn Free ở số bài, analytics và vận hành đều."],
        ["Team / Agency", "Cao hơn", "Nhiều người duyệt bài", ["Collaboration, approval, reporting tốt hơn", "Phù hợp team social", "Cần tính số channel"], "Hơn Essentials ở teamwork và governance."]
    ],
    sprout: [
        ["Essentials", "$79/seat/tháng annual", "Entry cho team cần inbox/report", ["Quản social tập trung", "Phù hợp team nhỏ nhưng nghiêm túc", "Không rẻ cho SME nhỏ"], "Nâng Standard khi cần tính năng quản trị đầy đủ hơn."],
        ["Standard", "$199/seat/tháng", "Social team chuyên nghiệp", ["Publishing, engagement, reporting cấp team", "Hợp doanh nghiệp vận hành nhiều kênh", "Giá theo seat"], "Hơn Essentials ở workflow và reporting."],
        ["Professional / Advanced", "$299-$399/seat/tháng", "Listening và analytics sâu", ["AI Assist/sentiment/listening tùy tier", "Hợp thương hiệu lớn", "Cần đo ROI social rõ"], "Hơn Standard ở phân tích, automation và insight."],
        ["Enterprise", "Custom", "Tập đoàn", ["Governance, support, security, custom needs", "Phù hợp nhiều brand/region", "Cần sales"], "Hơn Advanced ở quản trị và hỗ trợ."]
    ],
    predis: [
        ["Free / trial", "$0 ban đầu", "Thử tạo post/carousel/video", ["Credit giới hạn", "Hợp demo workflow all-in-one", "Không đủ đăng đều"], "Nâng Core khi cần social calendar thật."],
        ["Core", "$19/tháng annual", "SME làm social đều", ["1,300 credits, 1 brand, publish 10 channels theo nguồn hiện có", "Competitor analysis", "Hợp team nhỏ"], "Hơn Free ở credit, brand và publishing."],
        ["Rise / higher", "$40+/tháng", "Nhiều channel/brand hơn", ["Nhiều credit và brand hơn", "Phù hợp agency nhỏ", "Cần kiểm gói hiện hành"], "Hơn Core ở volume và multi-brand."]
    ],
    capcut: [
        ["Free", "$0/tháng", "Dựng video social cơ bản", ["Template, edit, caption tùy region", "Hợp hậu kỳ nhanh", "AI credit bị giới hạn"], "Nâng Pro khi cần AI credits và asset nhiều hơn."],
        ["Pro", "Theo region/app", "Creator/marketing dùng đều", ["AI credits tăng theo nguồn hiện có", "Cloud storage, template, export tốt hơn", "Hợp TikTok/Reels/Shorts"], "Hơn Free ở credits, storage, asset và tốc độ dựng."],
        ["Business / team", "Theo region", "Team làm content", ["Quản asset/team tùy thị trường", "Phù hợp đội social", "Cần mở app để xác nhận giá"], "Hơn Pro cá nhân ở collaboration và quản trị."]
    ]
};

const valueUseCases = [
    { id: "all", label: "Tất cả mục tiêu", focus: ["ease", "speed", "costClarity"] },
    { id: "research", label: "Nghiên cứu có nguồn", focus: ["copy", "control", "safety", "vietnamese"] },
    { id: "office", label: "Văn phòng / báo cáo", focus: ["copy", "ease", "automation", "costClarity"] },
    { id: "video", label: "Sản xuất video", focus: ["video", "ad", "social"] },
    { id: "avatar", label: "Avatar / đào tạo", focus: ["avatar", "video", "ease"] },
    { id: "creative", label: "Banner / thiết kế quảng cáo", focus: ["ad", "control", "speed"] },
    { id: "content", label: "Nội dung / bản yêu cầu / nghiên cứu", focus: ["copy", "automation", "vietnamese"] },
    { id: "social", label: "Lên lịch mạng xã hội", focus: ["social", "automation", "ease"] }
];

const valueStrategies = [
    { id: "balanced", label: "Ngon bổ rẻ" },
    { id: "cheapest", label: "Rẻ nhất vẫn dùng được" },
    { id: "low-risk", label: "Ít rủi ro credit" },
    { id: "premium", label: "Chất lượng hơn giá" }
];

const budgetOptions = [
    { id: "any", label: "Không giới hạn", value: Infinity },
    { id: "0", label: "Miễn phí / thử trước", value: 0 },
    { id: "10", label: "≤ $10/tháng", value: 10 },
    { id: "20", label: "≤ $20/tháng", value: 20 },
    { id: "30", label: "≤ $30/tháng", value: 30 },
    { id: "50", label: "≤ $50/tháng", value: 50 },
    { id: "100", label: "≤ $100/tháng", value: 100 },
    { id: "200", label: "≤ $200/tháng", value: 200 }
];


let valueState = {
    useCase: "all",
    strategy: "balanced",
    budget: "0"
};

const insights = [
    {
        kicker: "01",
        title: "Model nền tảng là lớp tư duy",
        body: "ChatGPT và Claude mạnh ở brief, insight, copy và phản biện. Chúng không thay thế Runway, HeyGen, Canva hay Buffer ở lớp sản xuất và vận hành.",
        color: "#74d99f"
    },
    {
        kicker: "02",
        title: "Video AI đã tách vai trò",
        body: "Runway cho cinematic, Kling/Luma/Pika cho motion ngắn, HeyGen/Synthesia cho avatar. So sánh chung một thang sẽ dễ sai quyết định.",
        color: "#7aa7ff"
    },
    {
        kicker: "03",
        title: "Credit mới là chi phí thật",
        body: "Giá monthly chỉ là vé vào cửa. Tool video và ad creative cần tính thêm credit, retry, watermark, commercial rights và tốc độ render.",
        color: "#f2c14e"
    },
    {
        kicker: "04",
        title: "Sora là case study rủi ro nền tảng",
        body: "OpenAI ghi Sora không còn khả dụng từ 26/04/2026. Bài trình bày nên dùng Sora để nói về tốc độ đổi thay, không khuyến nghị build mới.",
        color: "#ff6b6b"
    }
];

const useCases = [
    {
        title: "Video có người nói cho sales và training",
        body: "Ưu tiên avatar, voice clone, dịch video và khả năng xuất bản nhanh.",
        tools: ["HeyGen", "Synthesia", "ChatGPT"]
    },
    {
        title: "TVC, product B-roll và fashion ads",
        body: "Cần kiểm soát camera, consistency, motion thật và output có cảm giác điện ảnh.",
        tools: ["Runway Gen-4.5", "Kling AI 3.0", "Luma Dream Machine"]
    },
    {
        title: "Short-form cho TikTok, Reels, Shorts",
        body: "Cần tốc độ, caption, hook, nhạc, template và nhiều biến thể để test.",
        tools: ["Kling AI 3.0", "Pika", "CapCut Pro"]
    },
    {
        title: "Banner và ad creative A/B testing",
        body: "Cần tạo nhiều biến thể, giữ brand, dự đoán hiệu quả và chỉnh sửa thương mại.",
        tools: ["AdCreative.ai", "Canva Magic Studio", "Adobe Firefly"]
    },
    {
        title: "Content engine cho team marketing",
        body: "Cần brand voice, workflow, nhiều kênh và hệ thống hóa từ brief đến asset.",
        tools: ["Jasper", "Copy.ai", "Claude"]
    },
    {
        title: "Research, báo cáo và fact-check giá rẻ",
        body: "Cần nguồn rõ, tóm tắt nhanh, so sánh đối thủ và nháp báo cáo trước khi làm slide.",
        tools: ["Perplexity", "Kimi K2.6", "DeepSeek"]
    },
    {
        title: "Social operation nhiều kênh",
        body: "Cần lịch đăng, approval, analytics, inbox và social listening theo quy mô.",
        tools: ["Buffer AI", "Predis.ai", "Sprout Social"]
    }
];

const stacks = [
    {
        title: "Starter SME",
        price: "~$50-$90/tháng",
        body: "DeepSeek/Grok/Perplexity free trước, rồi chọn thêm ChatGPT hoặc Claude + Canva Pro + Buffer + CapCut nếu thật sự cần.",
        tokens: ["Tốc độ", "Chi phí thấp", "Ít người vận hành"]
    },
    {
        title: "Free-first Office",
        price: "$0-$20/tháng",
        body: "Copilot free hoặc Microsoft 365 đang có sẵn + DeepSeek + Kimi K2.6 + Perplexity free + Qwen/Mistral để làm báo cáo, email, SOP và research có nguồn.",
        tokens: ["Ngon bổ rẻ", "Báo cáo", "Research có nguồn"]
    },
    {
        title: "Growth Team",
        price: "~$150-$350/tháng",
        body: "HeyGen + Runway hoặc Kling + Jasper/Copy.ai + AdCreative + Buffer/Predis.",
        tokens: ["Video đều", "Brand voice", "A/B testing"]
    },
    {
        title: "Agency / Enterprise",
        price: "$500+/tháng",
        body: "Runway + Kling/Luma + Midjourney + Firefly + HeyGen Business + Sprout + AdCreative.",
        tokens: ["Scale", "Governance", "Creative quality"]
    }
];

const finderIndustries = [
    { id: "marketing", label: "Marketing / quảng cáo", roles: ["marketer", "content", "social-manager", "designer", "manager"] },
    { id: "office", label: "Văn phòng / hành chính", roles: ["office", "admin", "assistant", "manager"] },
    { id: "hr", label: "Hành chính nhân sự", roles: ["hr", "recruiter", "trainer", "admin", "manager"] },
    { id: "sales", label: "Sales / chăm sóc khách hàng", roles: ["sales", "account", "customer-success", "manager"] },
    { id: "education", label: "Đào tạo / giáo dục", roles: ["teacher", "trainer", "content", "manager"] },
    { id: "ecommerce", label: "E-commerce / bán lẻ", roles: ["ecommerce", "marketer", "content", "designer", "sales"] },
    { id: "agency", label: "Agency / studio sáng tạo", roles: ["planner", "creative-director", "designer", "content", "manager"] },
    { id: "finance", label: "Tài chính / kế toán", roles: ["finance", "office", "manager"] },
    { id: "realestate", label: "Bất động sản", roles: ["realestate-sales", "marketer", "content", "manager"] },
    { id: "healthcare", label: "Y tế / clinic / wellness", roles: ["healthcare-admin", "marketer", "customer-success", "manager"] },
    { id: "hospitality", label: "Nhà hàng / khách sạn / du lịch", roles: ["hospitality", "marketer", "content", "sales"] },
    { id: "legal", label: "Pháp lý / compliance", roles: ["legal", "office", "manager"] },
    { id: "manufacturing", label: "Sản xuất / vận hành", roles: ["operations", "trainer", "office", "manager"] },
    { id: "startup", label: "Startup / founder", roles: ["founder", "marketer", "sales", "content", "manager"] }
];

const finderRoles = [
    { id: "marketer", label: "Nhân viên marketing", tasks: ["copy", "video", "ads", "social", "design", "automation"] },
    { id: "content", label: "Người làm nội dung", tasks: ["copy", "video", "social", "design"] },
    { id: "social-manager", label: "Quản lý mạng xã hội", tasks: ["social", "copy", "video", "ads"] },
    { id: "designer", label: "Thiết kế / sáng tạo", tasks: ["design", "ads", "video"] },
    { id: "manager", label: "Quản lý / trưởng bộ phận", tasks: ["office-report", "automation", "copy", "social", "ads"] },
    { id: "office", label: "Nhân viên văn phòng", tasks: ["office-report", "copy", "automation", "design"] },
    { id: "admin", label: "Hành chính / admin", tasks: ["office-report", "hr", "automation", "copy"] },
    { id: "assistant", label: "Trợ lý / thư ký", tasks: ["office-report", "copy", "automation"] },
    { id: "hr", label: "Nhân sự / C&B / HRBP", tasks: ["hr", "avatar", "office-report", "copy", "automation"] },
    { id: "recruiter", label: "Tuyển dụng", tasks: ["recruitment", "copy", "automation", "social"] },
    { id: "trainer", label: "Đào tạo nội bộ", tasks: ["avatar", "training", "office-report", "copy", "video"] },
    { id: "sales", label: "Nhân viên bán hàng", tasks: ["sales", "copy", "avatar", "automation", "video"] },
    { id: "account", label: "Account / tư vấn khách hàng", tasks: ["sales", "office-report", "copy", "avatar"] },
    { id: "customer-success", label: "CSKH / customer success", tasks: ["customer-support", "copy", "avatar", "automation"] },
    { id: "teacher", label: "Giảng viên / giáo viên", tasks: ["training", "avatar", "office-report", "copy", "video"] },
    { id: "ecommerce", label: "Vận hành thương mại điện tử", tasks: ["ads", "design", "social", "video", "copy"] },
    { id: "planner", label: "Planner chiến lược", tasks: ["copy", "office-report", "ads", "design"] },
    { id: "creative-director", label: "Giám đốc sáng tạo", tasks: ["video", "design", "ads", "copy"] },
    { id: "finance", label: "Kế toán / tài chính", tasks: ["finance-report", "office-report", "automation", "copy"] },
    { id: "realestate-sales", label: "Môi giới / sales bất động sản", tasks: ["sales", "video", "avatar", "copy", "social"] },
    { id: "healthcare-admin", label: "Quản trị clinic / wellness", tasks: ["customer-support", "office-report", "copy", "social"] },
    { id: "hospitality", label: "Vận hành nhà hàng / khách sạn", tasks: ["social", "customer-support", "video", "copy"] },
    { id: "legal", label: "Pháp lý / compliance", tasks: ["compliance", "office-report", "copy"] },
    { id: "operations", label: "Vận hành / sản xuất", tasks: ["operations-doc", "training", "automation", "office-report"] },
    { id: "founder", label: "Chủ doanh nghiệp / founder", tasks: ["office-report", "copy", "ads", "automation", "video"] }
];

const finderTasks = [
    { id: "video", label: "Sản xuất video quảng cáo / social", focus: ["video", "ad", "social", "speed"] },
    { id: "avatar", label: "Video có người nói, training, onboarding", focus: ["avatar", "video", "ease", "safety"] },
    { id: "copy", label: "Viết content, email, kịch bản, proposal", focus: ["copy", "control", "vietnamese", "speed"] },
    { id: "office-report", label: "Tóm tắt tài liệu, báo cáo, slide văn phòng", focus: ["copy", "ease", "control", "vietnamese"] },
    { id: "hr", label: "Onboarding, chính sách, tài liệu HR", focus: ["avatar", "copy", "safety", "ease"] },
    { id: "recruitment", label: "Tin tuyển dụng, sàng lọc, email ứng viên", focus: ["copy", "automation", "vietnamese", "speed"] },
    { id: "training", label: "Giáo án, khóa học, video đào tạo", focus: ["avatar", "copy", "video", "ease"] },
    { id: "sales", label: "Sales script, proposal, video cá nhân hóa", focus: ["copy", "avatar", "automation", "speed"] },
    { id: "customer-support", label: "FAQ, phản hồi khách hàng, knowledge base", focus: ["copy", "automation", "safety", "vietnamese"] },
    { id: "social", label: "Lên lịch và vận hành social nhiều kênh", focus: ["social", "automation", "ease", "costClarity"] },
    { id: "ads", label: "Banner, creative scoring, A/B testing ads", focus: ["ad", "speed", "control", "costClarity"] },
    { id: "automation", label: "Tự động hóa workflow marketing/sales", focus: ["automation", "copy", "control", "costClarity"] },
    { id: "design", label: "Key visual, ảnh, banner, slide đẹp nhanh", focus: ["ad", "control", "ease", "speed"] },
    { id: "finance-report", label: "Báo cáo tài chính, phân tích số liệu, memo", focus: ["copy", "control", "safety", "costClarity"] },
    { id: "compliance", label: "Tóm tắt quy định, checklist pháp lý", focus: ["copy", "safety", "control", "vietnamese"] },
    { id: "operations-doc", label: "SOP, checklist vận hành, hướng dẫn nội bộ", focus: ["copy", "automation", "ease", "safety"] }
];

const finderIndustryAliases = {
    finance: ["office"],
    realestate: ["sales", "marketing"],
    healthcare: ["office", "sales", "marketing"],
    hospitality: ["marketing", "sales", "ecommerce"],
    legal: ["office"],
    manufacturing: ["office", "education"],
    startup: ["marketing", "sales", "office", "ecommerce"]
};

const finderRoleAliases = {
    "social-manager": ["marketer", "content"],
    admin: ["office", "hr"],
    assistant: ["office"],
    recruiter: ["hr"],
    trainer: ["hr", "teacher"],
    account: ["sales"],
    "customer-success": ["sales", "office"],
    ecommerce: ["marketer", "content"],
    planner: ["marketer", "content", "manager"],
    "creative-director": ["designer", "marketer", "content"],
    finance: ["office", "manager"],
    "realestate-sales": ["sales", "marketer"],
    "healthcare-admin": ["office", "sales"],
    hospitality: ["sales", "marketer", "content"],
    legal: ["office", "manager"],
    operations: ["office", "manager", "teacher"],
    founder: ["manager", "marketer", "sales"]
};

const finderTaskAliases = {
    recruitment: ["hr", "copy", "automation"],
    training: ["avatar", "copy", "video"],
    sales: ["copy", "avatar", "automation"],
    "customer-support": ["copy", "automation", "office-report"],
    "finance-report": ["office-report", "copy"],
    compliance: ["office-report", "copy"],
    "operations-doc": ["office-report", "automation", "copy"]
};

const finderProfiles = {
    chatgpt: {
        industries: ["marketing", "office", "hr", "sales", "education", "ecommerce", "agency"],
        roles: ["marketer", "office", "hr", "sales", "content", "manager", "teacher"],
        tasks: ["copy", "office-report", "automation", "ads", "hr"],
        keywords: ["brief", "email", "báo cáo", "slide", "kịch bản", "ý tưởng", "phân tích", "prompt"],
        guide: ["Dùng để biến yêu cầu mơ hồ thành brief rõ.", "Tạo outline, kịch bản, caption, email và checklist review.", "Kết hợp với Canva, HeyGen, Runway hoặc Buffer để sản xuất asset."]
    },
    claude: {
        industries: ["marketing", "office", "hr", "sales", "education", "agency"],
        roles: ["office", "hr", "content", "manager", "teacher"],
        tasks: ["copy", "office-report", "hr", "automation"],
        keywords: ["tài liệu", "quy trình", "policy", "proposal", "kiểm tra", "tone", "đào tạo"],
        guide: ["Đưa tài liệu dài vào để tóm tắt, rút insight và kiểm tra logic.", "Hợp khi cần giọng văn nghiêm túc, rõ ràng.", "Dùng làm lớp review trước khi xuất bản nội dung."]
    },
    kimi: {
        industries: ["marketing", "office", "education", "finance", "legal", "manufacturing", "startup", "agency"],
        roles: ["office", "assistant", "content", "finance", "legal", "operations", "founder", "planner", "manager", "marketer"],
        tasks: ["copy", "office-report", "automation", "finance-report", "compliance", "operations-doc", "training"],
        keywords: ["kimi", "moonshot", "long context", "256k", "coding", "agent", "tài liệu dài", "json", "tool call", "research"],
        guide: ["Dùng khi input dài: tài liệu, báo cáo, guideline, transcript hoặc requirement kỹ thuật.", "Tạo SOP, checklist, outline, agent prompt hoặc phân tích workflow/code.", "Ghi rõ đang dùng Kimi K2.6 và kiểm nguồn nếu nội dung đưa vào slide có claim quan trọng."]
    },
    grok: {
        industries: ["marketing", "sales", "ecommerce", "agency", "startup"],
        roles: ["marketer", "content", "social-manager", "sales", "founder", "manager"],
        tasks: ["copy", "social", "ads", "office-report", "automation"],
        keywords: ["grok", "x", "trend", "realtime", "social", "meme", "tin mới", "insight", "hook"],
        guide: ["Dùng để lấy góc trend và câu hỏi thị trường đang nóng.", "Sinh hook, caption, angle ads theo từng persona.", "Luôn mở nguồn hoặc dùng Perplexity/Google để kiểm claim trước khi đưa vào slide."]
    },
    deepseek: {
        industries: ["marketing", "office", "hr", "sales", "education", "finance", "legal", "manufacturing", "startup"],
        roles: ["office", "assistant", "admin", "finance", "legal", "operations", "founder", "manager", "content", "marketer"],
        tasks: ["copy", "office-report", "automation", "finance-report", "compliance", "operations-doc", "training"],
        keywords: ["free", "rẻ", "reasoning", "code", "sop", "báo cáo", "phân tích", "checklist", "dữ liệu"],
        guide: ["Dùng để phân rã yêu cầu thành bước làm rõ ràng.", "Tạo outline, SOP, checklist, script hoặc prompt kỹ thuật.", "Dùng thêm nguồn chính thức nếu nội dung có số liệu hoặc claim quan trọng."]
    },
    qwen: {
        industries: ["marketing", "office", "education", "ecommerce", "finance", "manufacturing", "startup"],
        roles: ["office", "assistant", "content", "teacher", "ecommerce", "operations", "founder", "manager", "marketer"],
        tasks: ["copy", "office-report", "automation", "design", "operations-doc", "training"],
        keywords: ["qwen", "đa ngôn ngữ", "dịch", "tài liệu dài", "api rẻ", "batch", "ecommerce", "long context"],
        guide: ["Dùng cho dịch, tóm tắt và chuẩn hóa nội dung đa ngôn ngữ.", "Tạo nội dung batch cho e-commerce hoặc tài liệu nội bộ.", "Nếu cần API, thử nhóm Flash trước để tối ưu chi phí."]
    },
    copilot: {
        industries: ["office", "hr", "sales", "education", "finance", "legal", "manufacturing", "startup"],
        roles: ["office", "admin", "assistant", "hr", "finance", "legal", "operations", "manager", "sales"],
        tasks: ["office-report", "copy", "automation", "finance-report", "compliance", "operations-doc", "hr"],
        keywords: ["word", "excel", "powerpoint", "outlook", "microsoft", "slide", "báo cáo", "email", "office"],
        guide: ["Dùng ngay trên Word, Excel, PowerPoint, Outlook nếu team đã có Microsoft 365.", "Tóm tắt email/tài liệu thành action item.", "Biến bảng số liệu thành insight, memo và slide."]
    },
    perplexity: {
        industries: ["marketing", "office", "sales", "education", "ecommerce", "agency", "finance", "legal", "startup"],
        roles: ["marketer", "planner", "content", "office", "sales", "founder", "manager", "finance", "legal"],
        tasks: ["office-report", "copy", "ads", "social", "finance-report", "compliance"],
        keywords: ["research", "nguồn", "dẫn chứng", "citation", "đối thủ", "market", "fact check", "perplexity"],
        guide: ["Đặt câu hỏi research cụ thể và yêu cầu nguồn chính thức.", "Mở citation để kiểm ngữ cảnh trước khi đưa vào slide.", "Dùng insight đã kiểm chứng để viết brief bằng ChatGPT/Claude hoặc Canva."]
    },
    mistral: {
        industries: ["marketing", "office", "education", "startup", "manufacturing", "legal"],
        roles: ["office", "assistant", "content", "teacher", "founder", "operations", "manager", "marketer"],
        tasks: ["copy", "office-report", "automation", "operations-doc", "training"],
        keywords: ["mistral", "le chat", "free", "rẻ", "workflow", "coding", "tài liệu", "web search"],
        guide: ["Dùng như trợ lý free-value cho nháp, tài liệu và checklist.", "Tạo prompt, SOP, email hoặc outline nhanh.", "So sánh output với DeepSeek/Claude khi cần bản final chắc hơn."]
    },
    gemini: {
        industries: ["marketing", "education", "ecommerce", "agency"],
        roles: ["marketer", "content", "designer", "teacher"],
        tasks: ["video", "avatar", "design"],
        keywords: ["video", "avatar", "chỉnh sửa", "google", "workspace", "clip"],
        guide: ["Dùng khi muốn thử video hội thoại và chỉnh sửa bằng prompt.", "Phù hợp clip ngắn có audio/avatar.", "Kiểm tra quyền truy cập tài khoản trước khi demo thật."]
    },
    runway: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["marketer", "content", "designer"],
        tasks: ["video", "design", "ads"],
        keywords: ["tvc", "b-roll", "cinematic", "camera", "product", "fashion"],
        guide: ["Chuẩn bị first frame/reference rõ trước khi render.", "Dùng cho B-roll, product showcase, TVC-style clip.", "Cần người art direction để giảm retry và đốt credit."]
    },
    kling: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["marketer", "content", "designer"],
        tasks: ["video", "social", "design"],
        keywords: ["fashion", "lifestyle", "người mẫu", "motion", "tiktok", "reels"],
        guide: ["Hợp video ngắn có chuyển động người, sản phẩm, lifestyle.", "Dùng prompt shot-by-shot để kiểm soát nhịp.", "Kết hợp CapCut để cắt nhịp, caption và xuất social."]
    },
    luma: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["content", "designer", "marketer"],
        tasks: ["video", "design"],
        keywords: ["cinematic", "mood", "concept", "ray", "motion"],
        guide: ["Dùng để test mood và concept motion.", "Phù hợp pitch deck hoặc ý tưởng trước sản xuất.", "Chọn plan commercial nếu dùng cho khách hàng."]
    },
    heygen: {
        industries: ["marketing", "hr", "sales", "education"],
        roles: ["marketer", "hr", "sales", "teacher", "manager"],
        tasks: ["avatar", "hr", "sales"],
        keywords: ["avatar", "người nói", "onboarding", "training", "localization", "sales video"],
        guide: ["Viết script ngắn, chia đoạn rõ rồi mới đưa vào avatar.", "Dùng cho video sales, onboarding, course intro và localization.", "Kiểm tra credit, thời lượng và quyền dùng voice clone."]
    },
    synthesia: {
        industries: ["hr", "education", "office", "sales"],
        roles: ["hr", "teacher", "office", "manager"],
        tasks: ["avatar", "hr", "office-report"],
        keywords: ["training", "sop", "đào tạo", "onboarding", "corporate"],
        guide: ["Hợp tài liệu training, SOP, video giải thích nghiêm túc.", "Chuẩn bị script dạng bullet theo module.", "Dùng template để giữ consistency cho nội bộ."]
    },
    pika: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["content", "marketer", "designer"],
        tasks: ["video", "social"],
        keywords: ["meme", "effect", "short", "reels", "hook"],
        guide: ["Dùng như phòng thử ý tưởng visual hook.", "Tạo nhiều biến thể nhanh rồi chọn hướng thắng.", "Không dùng một mình cho campaign cần brand control cao."]
    },
    sora: {
        industries: ["marketing", "agency", "education"],
        roles: ["manager", "marketer", "teacher"],
        tasks: ["video"],
        keywords: ["case study", "sora", "rủi ro", "thị trường"],
        guide: ["Chỉ dùng làm case study về biến động nền tảng.", "Không đề xuất làm stack sản xuất mới.", "Luôn mở nguồn OpenAI trước khi nói về trạng thái khả dụng."]
    },
    midjourney: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["designer", "content", "marketer"],
        tasks: ["design", "ads"],
        keywords: ["key visual", "concept art", "image", "moodboard", "first frame"],
        guide: ["Dùng để tạo moodboard, key visual và first frame.", "Sau đó đưa asset sang Runway/Kling hoặc Canva.", "Cần prompt style/reference để giữ nhận diện."]
    },
    firefly: {
        industries: ["marketing", "ecommerce", "agency", "office"],
        roles: ["designer", "marketer", "office"],
        tasks: ["design", "ads"],
        keywords: ["adobe", "retouch", "commercial", "banner", "generative fill"],
        guide: ["Dùng khi cần chỉnh ảnh thương mại trong hệ Adobe.", "Phù hợp retouch sản phẩm, fill, remove và biến thể banner.", "Kiểm tra credit generative trước khi scale."]
    },
    canva: {
        industries: ["marketing", "office", "hr", "education", "ecommerce"],
        roles: ["office", "marketer", "hr", "teacher", "content", "manager"],
        tasks: ["design", "office-report", "social", "ads"],
        keywords: ["slide", "poster", "banner", "social post", "template", "deck"],
        guide: ["Dùng cho slide, social post, banner, template nhanh.", "Kết hợp ChatGPT/Claude để tạo nội dung trước.", "Thiết lập Brand Kit để tránh output rời rạc."]
    },
    adcreative: {
        industries: ["marketing", "ecommerce", "agency"],
        roles: ["marketer", "designer", "manager"],
        tasks: ["ads", "design"],
        keywords: ["a/b testing", "creative scoring", "facebook ads", "google ads", "competitor"],
        guide: ["Dùng khi cần nhiều biến thể quảng cáo và scoring.", "Nạp brand asset/landing page trước để output sát hơn.", "Quản credit kỹ nếu test nhiều campaign."]
    },
    jasper: {
        industries: ["marketing", "agency", "ecommerce"],
        roles: ["marketer", "content", "manager"],
        tasks: ["copy", "ads", "automation"],
        keywords: ["brand voice", "campaign", "content engine", "marketing agent"],
        guide: ["Dùng khi team cần brand voice và quy trình content lặp lại.", "Thiết lập knowledge/brand trước khi tạo campaign.", "Hợp team marketing hơn là cá nhân viết vài caption."]
    },
    copyai: {
        industries: ["marketing", "sales", "ecommerce"],
        roles: ["marketer", "sales", "manager", "content"],
        tasks: ["copy", "automation", "sales"],
        keywords: ["gtm", "sales email", "workflow", "lead", "outreach"],
        guide: ["Dùng cho GTM workflow, email sequence và content volume.", "Tốt khi cần nhiều seat entry và workflow tự động.", "Xác định workflow credits trước khi scale."]
    },
    buffer: {
        industries: ["marketing", "office", "ecommerce"],
        roles: ["marketer", "content", "office", "manager"],
        tasks: ["social", "copy"],
        keywords: ["lên lịch", "caption", "social calendar", "posting"],
        guide: ["Dùng để lên lịch và duy trì nhịp đăng đều.", "Chuẩn bị caption bằng ChatGPT/Jasper rồi đưa vào calendar.", "Phù hợp team nhỏ cần đơn giản, rõ chi phí."]
    },
    sprout: {
        industries: ["marketing", "agency", "ecommerce"],
        roles: ["manager", "marketer", "sales"],
        tasks: ["social", "automation"],
        keywords: ["enterprise", "listening", "reporting", "inbox", "governance"],
        guide: ["Dùng cho social governance, inbox, reporting và listening.", "Hợp team lớn nhiều account/approval.", "SME nên cân nhắc Buffer/Predis trước vì chi phí."]
    },
    predis: {
        industries: ["marketing", "ecommerce", "office"],
        roles: ["marketer", "content", "office"],
        tasks: ["social", "design"],
        keywords: ["carousel", "social post", "competitor", "hashtag", "short video"],
        guide: ["Dùng để sinh post, carousel, video ngắn và caption.", "Hợp SME muốn giảm số tool.", "Dùng competitor analysis để lấy góc nội dung."]
    },
    capcut: {
        industries: ["marketing", "ecommerce", "education"],
        roles: ["content", "marketer", "teacher"],
        tasks: ["social"],
        keywords: ["caption", "edit", "tiktok", "reels", "shorts", "cắt video"],
        guide: ["Dùng để hoàn thiện clip: cắt nhịp, caption, nhạc, format social.", "Kết thúc pipeline từ Runway/Kling/Pika/HeyGen.", "Phù hợp người mới vì thao tác nhanh và nhiều template."]
    }
};

let activeCategory = "all";
let searchTerm = "";
let sortState = { key: "overall", direction: "desc" };
let finderState = {
    industry: "marketing",
    role: "marketer",
    task: "video",
    budget: "0",
    valueMode: "balanced",
    brief: ""
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
    setupReveal();
    setupNav();
    renderInsights();
    setupFinder();
    renderFinderResults();
    setupValueOptimizer();
    renderValueOptimizer();
    renderFilters();
    renderTools();
    renderCompareSelectors();
    renderUseCases();
    renderStacks();
    renderScoreTable();
    renderSources();
    setupModal();
    setupPresentationMode();
});

function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.02 });

    $$(".section-reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add("visible");
        }
        observer.observe(element);
    });
}

function setupNav() {
    $$("[data-scroll]").forEach((button) => {
        button.addEventListener("click", () => {
            const target = document.getElementById(button.dataset.scroll);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function setupPresentationMode() {
    const toggle = $("#presentationToggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("presentation-mode");
        toggle.textContent = document.body.classList.contains("presentation-mode") ? "Thoát trình chiếu" : "Trình chiếu";
    });
}

function renderInsights() {
    const grid = $("#insightGrid");
    grid.innerHTML = insights.map((item) => `
        <article class="insight-card" style="--accent: ${item.color}">
            <span class="insight-kicker">${item.kicker}</span>
            <h3>${viText(item.title)}</h3>
            <p>${inlineToolNames(item.body)}</p>
        </article>
    `).join("");
}

function setupFinder() {
    fillFinderSelect("#finderIndustry", finderIndustries, finderState.industry);
    syncFinderRoleOptions(finderState.role);
    syncFinderTaskOptions(finderState.task);
    fillFinderSelect("#finderBudget", budgetOptions, finderState.budget);
    fillFinderSelect("#finderValueMode", valueStrategies, finderState.valueMode);

    $("#finderIndustry").addEventListener("change", () => {
        syncFinderRoleOptions();
        syncFinderTaskOptions();
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderRole").addEventListener("change", () => {
        syncFinderTaskOptions();
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderTask").addEventListener("change", () => {
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderBudget").addEventListener("change", () => {
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderValueMode").addEventListener("change", () => {
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderRun").addEventListener("click", () => {
        finderState = currentFinderContext();
        renderFinderResults();
    });

    $("#finderReset").addEventListener("click", () => {
        finderState = { industry: "marketing", role: "marketer", task: "video", budget: "0", valueMode: "balanced", brief: "" };
        $("#finderIndustry").value = finderState.industry;
        syncFinderRoleOptions(finderState.role);
        syncFinderTaskOptions(finderState.task);
        $("#finderBudget").value = finderState.budget;
        $("#finderValueMode").value = finderState.valueMode;
        $("#finderBrief").value = "";
        renderFinderResults();
    });
}

function fillFinderSelect(selector, options, value) {
    const select = $(selector);
    select.innerHTML = options.map((option) => `<option value="${option.id}">${option.label}</option>`).join("");
    select.value = value;
}

function syncFinderRoleOptions(preferredRole = "") {
    const industry = $("#finderIndustry")?.value || finderState.industry;
    const roleOptions = rolesForIndustry(industry);
    const role = roleOptions.some((option) => option.id === preferredRole) ? preferredRole : roleOptions[0]?.id;
    fillFinderSelect("#finderRole", roleOptions, role);
}

function syncFinderTaskOptions(preferredTask = "") {
    const role = $("#finderRole")?.value || finderState.role;
    const taskOptions = tasksForRole(role);
    const task = taskOptions.some((option) => option.id === preferredTask) ? preferredTask : taskOptions[0]?.id;
    fillFinderSelect("#finderTask", taskOptions, task);
}

function rolesForIndustry(industryId) {
    const industry = finderIndustries.find((item) => item.id === industryId) || finderIndustries[0];
    return industry.roles
        .map((roleId) => finderRoles.find((role) => role.id === roleId))
        .filter(Boolean);
}

function tasksForRole(roleId) {
    const role = finderRoles.find((item) => item.id === roleId) || finderRoles[0];
    return role.tasks
        .map((taskId) => finderTasks.find((task) => task.id === taskId))
        .filter(Boolean);
}

function currentFinderContext() {
    const industry = $("#finderIndustry")?.value || finderState.industry;
    const role = $("#finderRole")?.value || finderState.role;
    const task = $("#finderTask")?.value || finderState.task;
    const budget = $("#finderBudget")?.value || finderState.budget;
    const valueMode = $("#finderValueMode")?.value || finderState.valueMode;
    const brief = ($("#finderBrief")?.value || "").trim();

    return {
        industry,
        role,
        task,
        budget,
        valueMode,
        brief,
        industryLabel: optionLabel(finderIndustries, industry),
        roleLabel: optionLabel(finderRoles, role),
        taskLabel: optionLabel(finderTasks, task),
        budgetLabel: optionLabel(budgetOptions, budget),
        valueModeLabel: optionLabel(valueStrategies, valueMode)
    };
}

function optionLabel(options, id) {
    return options.find((option) => option.id === id)?.label || id;
}

function pricingFor(tool) {
    return priceProfiles[tool.id] || {
        label: tool.price,
        entryMonthly: tool.priceMonthly,
        practicalMonthly: tool.priceMonthly,
        billing: tool.price,
        freeTier: false,
        creditRisk: Math.max(1, 6 - metricScore(tool, "costClarity")),
        confidence: "verify",
        note: "Cần kiểm tra lại trang giá trước khi chốt ngân sách.",
        sourceUrl: tool.url,
        sourceLabel: tool.source || "Official source"
    };
}

function priceLabel(tool) {
    return viText(pricingFor(tool).label);
}

function priceSource(tool) {
    const pricing = pricingFor(tool);
    return {
        label: displayLabel(pricing.sourceLabel || sourceFor(tool).label),
        url: pricing.sourceUrl || sourceFor(tool).url
    };
}

function budgetValue(id) {
    return budgetOptions.find((option) => option.id === id)?.value ?? Infinity;
}

function monthlyCost(tool, mode = "practical") {
    const pricing = pricingFor(tool);
    const value = mode === "entry" ? pricing.entryMonthly : pricing.practicalMonthly;
    return Number.isFinite(value) ? value : Number(tool.priceMonthly || 999);
}

function money(value) {
    if (!Number.isFinite(value)) return "N/A";
    if (value >= 999) return "N/A";
    return `$${Number(value).toFixed(value % 1 ? 2 : 0)}`;
}

function costRiskLabel(risk) {
    if (risk <= 1) return "Rõ chi phí";
    if (risk === 2) return "Khá rõ";
    if (risk === 3) return "Cần canh credit";
    if (risk === 4) return "Credit dễ cháy";
    return "Rủi ro chi phí cao";
}

function confidenceLabel(value) {
    if (value === "official") return "Nguồn giá chính thức";
    if (value === "official-region") return "Nguồn chính thức, giá theo region";
    return "Cần mở checkout/app để xác nhận";
}

function priceScore(tool) {
    const pricing = pricingFor(tool);
    if (pricing.discontinued) return 0.2;
    const cost = monthlyCost(tool);
    let score = cost <= 0 ? 5 : cost <= 10 ? 4.7 : cost <= 20 ? 4.25 : cost <= 30 ? 3.85 : cost <= 50 ? 3.2 : cost <= 100 ? 2.45 : cost <= 200 ? 1.65 : 0.8;
    if (pricing.freeTier) score += 0.25;
    score -= Math.max(0, pricing.creditRisk - 2) * 0.22;
    if (pricing.confidence === "verify") score -= 0.25;
    if (pricing.confidence === "official-region") score -= 0.1;
    return Math.max(0.2, Math.min(5, score));
}

function valueScore(tool, focus = valueUseCases[0].focus, strategy = "balanced", budget = Infinity) {
    const pricing = pricingFor(tool);
    if (pricing.discontinued) return 0.3;
    const focusScore = focus.reduce((sum, key) => sum + metricScore(tool, key), 0) / focus.length;
    const costScore = priceScore(tool);
    const clarity = metricScore(tool, "costClarity");
    const cost = monthlyCost(tool);
    const entry = monthlyCost(tool, "entry");
    const withinBudget = !Number.isFinite(budget) || cost <= budget || entry <= budget || (budget === 0 && pricing.freeTier);
    let score = weightedScore(tool) * 0.34 + focusScore * 0.24 + costScore * 0.28 + clarity * 0.14;

    if (strategy === "cheapest") score = focusScore * 0.22 + costScore * 0.52 + clarity * 0.16 + weightedScore(tool) * 0.1;
    if (strategy === "low-risk") score = weightedScore(tool) * 0.28 + focusScore * 0.18 + costScore * 0.22 + clarity * 0.2 + (6 - pricing.creditRisk) * 0.12;
    if (strategy === "premium") score = weightedScore(tool) * 0.45 + focusScore * 0.33 + costScore * 0.12 + clarity * 0.1;

    if (!withinBudget) score -= strategy === "premium" ? 0.45 : 1.05;
    if (withinBudget && pricing.freeTier) score += 0.12;
    return Math.max(0.2, Math.min(5, score));
}

function valuePercent(score) {
    return Math.round((score / 5) * 100);
}

function priceMiniCard(tool) {
    const pricing = pricingFor(tool);
    return `
        <div class="price-mini-card">
            <span>Giá thực tế</span>
            <strong>${priceLabel(tool)}</strong>
            <small>${viText(pricing.billing)}</small>
            <small>${costRiskLabel(pricing.creditRisk)} · ${confidenceLabel(pricing.confidence)}</small>
        </div>
    `;
}

function normalizePlan(plan) {
    return {
        name: plan[0],
        price: plan[1],
        bestFor: plan[2],
        includes: plan[3] || [],
        upgrade: plan[4] || "Nâng cấp khi cần nhiều hạn mức, quyền thương mại hoặc quản trị đội nhóm hơn."
    };
}

function defaultPlanProfile(tool) {
    const pricing = pricingFor(tool);
    const categoryFocus = {
        video: ["Credit/thời lượng render là chi phí chính", "Cần tính retry, watermark và quyền thương mại", "Nên thử prompt trước khi mua gói cao"],
        avatar: ["Tính theo credit/phút video và avatar", "Cần kiểm voice clone, ngôn ngữ và quyền thương mại", "Team nên xét collaboration và approval"],
        creative: ["Tính theo credit/asset hoặc subscription", "Cần brand kit, commercial rights và export sạch", "Hợp visual, banner, key art"],
        social: ["Chi phí thường theo channel/seat/brand", "Cần publishing, analytics và approval", "Hợp vận hành nội dung đều"],
        content: ["Chi phí theo seat hoặc workflow credits", "Cần brand voice, template và automation", "Hợp marketing copy và GTM"],
        editor: ["Giá theo region/app và AI credits", "Cần hậu kỳ, caption, template, export social", "Hợp biến output AI thành video đăng được"],
        core: ["Chi phí theo subscription hoặc API token", "Cần kiểm limit, file upload, context và data policy", "Hợp research, viết, phân tích, coding"]
    };
    const focus = categoryFocus[tool.category] || categoryFocus.core;
    return [
        ["Free / trial", pricing.freeTier ? "$0 ban đầu" : "Có thể không có free", "Dùng để thử nhanh trước khi trình sếp", [pricing.billing, focus[0], "Không dùng để cam kết ngân sách production"], "Nâng gói trả phí khi kết quả đã hợp workflow."],
        ["Gói thực tế", pricing.label, "Mốc nên so sánh ngân sách", [pricing.note, focus[1], `Rủi ro chi phí: ${costRiskLabel(pricing.creditRisk)}`], "Hơn trial ở hạn mức, output sạch và độ ổn định."],
        ["Team / scale", "Custom hoặc gói cao hơn", "Khi nhiều người dùng hoặc volume lớn", ["Thường thêm quản trị user, bảo mật, billing và support", focus[2], "Cần mở nguồn giá hoặc checkout trước khi mua"], "Hơn gói thực tế ở governance, quota và hỗ trợ."]
    ].map(normalizePlan);
}

function planDetailsFor(tool) {
    return (planProfiles[tool.id] || defaultPlanProfile(tool)).map((plan) => Array.isArray(plan) ? normalizePlan(plan) : plan);
}

function planComparisonSection(tool) {
    const pricing = pricingFor(tool);
    const priceRef = priceSource(tool);
    const plans = planDetailsFor(tool);

    return `
        <section class="modal-section plan-detail-section">
            <div class="plan-detail-head">
                <div>
                    <h3>Gói giá & nâng cấp</h3>
                    <p>Đọc nhanh để quyết định mua gói nào, gói sau hơn gói trước ở đâu.</p>
                </div>
                <a class="source-link compact" href="${priceRef.url}" target="_blank" rel="noreferrer">Nguồn giá</a>
            </div>
            <div class="plan-summary-strip">
                <span><strong>Gói vào:</strong> ${money(monthlyCost(tool, "entry"))}</span>
                <span><strong>Thực tế:</strong> ${money(monthlyCost(tool))}</span>
                <span><strong>Độ chắc:</strong> ${confidenceLabel(pricing.confidence)}</span>
                <span><strong>Chi phí:</strong> ${costRiskLabel(pricing.creditRisk)}</span>
            </div>
            <div class="plan-grid">
                ${plans.map((plan, index) => `
                    <article class="plan-card ${index === 1 ? "recommended-plan" : ""}">
                        <div class="plan-card-top">
                            <span>Gói ${index + 1}</span>
                            ${index === 1 ? "<em>mốc so sánh</em>" : ""}
                        </div>
                        <h4>${plan.name}</h4>
                        <strong>${plan.price}</strong>
                        <p>${inlineToolNames(plan.bestFor)}</p>
                        <ul>
                            ${plan.includes.map((item) => `<li>${inlineToolNames(item)}</li>`).join("")}
                        </ul>
                        <div class="upgrade-note">
                            <span>Hơn gói trước</span>
                            <p>${inlineToolNames(plan.upgrade)}</p>
                        </div>
                    </article>
                `).join("")}
            </div>
            <p class="plan-footnote">Giá/credit có thể đổi theo region, tax, billing monthly/annual và checkout. Khi mua thật nên mở link nguồn trong ngày chốt ngân sách.</p>
        </section>
    `;
}

function renderFinderResults() {
    const context = currentFinderContext();
    finderState = context;
    const recommendations = finderRecommendations(context).slice(0, 8);
    const top = recommendations[0];

    $("#finderSummaryTitle").textContent = top
        ? `${top.tool.name} đang là lựa chọn nhỉnh nhất cho ${context.roleLabel.toLowerCase()}`
        : "Chưa có đề xuất phù hợp";
    $("#finderSummaryCopy").textContent = top
        ? `Công việc: ${context.taskLabel}. Ưu tiên giá: ${context.valueModeLabel}. Ngân sách: ${context.budgetLabel}. Độ đáng tiền ${valuePercent(top.value)}%, giá: ${priceLabel(top.tool)}.`
        : "Hãy đổi ngành, vị trí hoặc mô tả công việc cụ thể hơn.";
    $("#finderStack").innerHTML = recommendations.slice(0, 3).map(({ tool, fit, value }) => `
        <button class="stack-pill" type="button" data-tool-id="${tool.id}" data-finder-context="true">
            ${toolLogo(tool, "tiny")}
            <span>${tool.name}</span>
            <strong>${fit}% · ${valuePercent(value)}% đáng tiền</strong>
        </button>
    `).join("");

    $("#finderResults").innerHTML = recommendations.map((item, index) => finderResultCard(item, index, context)).join("");
    bindDetailButtons($("#finder"));
    activateMedia($("#finder"));
}

function finderRecommendations(context) {
    const task = finderTasks.find((item) => item.id === context.task) || finderTasks[0];
    const query = normalizeText(context.brief);
    const queryTokens = query.split(/\s+/).filter((token) => token.length > 2);
    const budget = budgetValue(context.budget);

    return tools.map((tool) => {
        const profile = finderProfiles[tool.id] || { industries: [], roles: [], tasks: [], keywords: [], guide: [] };
        const roleMatch = matchesWithAliases(profile.roles, context.role, finderRoleAliases);
        const industryMatch = matchesWithAliases(profile.industries, context.industry, finderIndustryAliases);
        const taskMatch = matchesWithAliases(profile.tasks, context.task, finderTaskAliases);
        const haystack = normalizeText([
            tool.name,
            tool.group,
            tool.bestFor,
            tool.audience,
            tool.summary,
            tool.verdict,
            profile.keywords.join(" ")
        ].join(" "));
        const keywordHits = queryTokens.filter((token) => haystack.includes(token)).length;
        const focusScore = task.focus.reduce((sum, key) => sum + metricScore(tool, key), 0) / task.focus.length;
        const value = valueScore(tool, task.focus, context.valueMode, budget);
        const pricing = pricingFor(tool);
        const baseScore = 20 + weightedScore(tool) * 3 + focusScore * 7;
        const matchScore = (roleMatch ? 12 : 0) + (industryMatch ? 10 : 0) + (taskMatch ? 22 : 0) + Math.min(keywordHits * 4, 12);
        const statusPenalty = tool.status === "legacy" ? 28 : tool.status === "early" ? 4 : 0;
        const budgetPenalty = budget !== Infinity && monthlyCost(tool) > budget && monthlyCost(tool, "entry") > budget && !(budget === 0 && pricing.freeTier) ? 14 : 0;
        const valueBoost = context.valueMode === "balanced" ? value * 4 : value * 6;
        const raw = Math.max(0, baseScore + matchScore + valueBoost - statusPenalty - budgetPenalty);
        const fit = Math.max(35, Math.min(97, Math.round(35 + (raw / 125) * 62)));
        const reasons = finderReasons(tool, profile, context, task, { roleMatch, industryMatch, taskMatch, keywordHits });

        return { tool, profile, fit, reasons, focusScore, value };
    }).sort((a, b) => (b.fit + b.value * 3) - (a.fit + a.value * 3));
}

function matchesWithAliases(values = [], id, aliases = {}) {
    return [id, ...(aliases[id] || [])].some((candidate) => values.includes(candidate));
}

function finderReasons(tool, profile, context, task, matches) {
    const reasons = [];
    if (matches.taskMatch) reasons.push(`Khớp trực tiếp với việc: ${context.taskLabel}.`);
    if (matches.roleMatch) reasons.push(`Phù hợp vai trò ${context.roleLabel}.`);
    if (matches.industryMatch) reasons.push(`Có tình huống sử dụng tốt trong bối cảnh ${context.industryLabel}.`);
    if (matches.keywordHits) reasons.push(`Mô tả của bạn khớp ${matches.keywordHits} cụm keyword trong hồ sơ tool.`);

    const strengths = task.focus
        .map((key) => [metricLabels[key] || key, metricScore(tool, key)])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([label, value]) => `${label} ${value}/5`);
    reasons.push(`Điểm mạnh theo task: ${strengths.join(", ")}.`);
    reasons.push(`Giá: ${priceLabel(tool)}; ${costRiskLabel(pricingFor(tool).creditRisk).toLowerCase()}.`);

    return reasons.slice(0, 4);
}

function youtubeId(value = "") {
    const direct = value.match(/^[A-Za-z0-9_-]{11}$/);
    if (direct) return value;

    try {
        const url = new URL(value);
        if (url.hostname.includes("youtu.be")) return url.pathname.split("/").filter(Boolean)[0] || "";
        if (url.searchParams.get("v")) return url.searchParams.get("v");
        const embedMatch = url.pathname.match(/\/(?:embed|shorts)\/([A-Za-z0-9_-]{11})/);
        return embedMatch ? embedMatch[1] : "";
    } catch {
        const fallback = value.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
        return fallback ? fallback[1] : "";
    }
}

function youtubeThumb(videoId, quality = "maxresdefault") {
    return videoId ? `https://i.ytimg.com/vi/${videoId}/${quality}.jpg` : "";
}

function youtubeEmbedUrl(videoId) {
    const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",
        loop: "1",
        playlist: videoId,
        controls: "0",
        playsinline: "1",
        modestbranding: "1",
        rel: "0",
        disablekb: "1",
        iv_load_policy: "3",
        fs: "0",
        start: "1"
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

let autoplayEmbedObserver = null;
const AUTOPLAY_REVEAL_DELAY_MS = 2800;
const AUTOPLAY_INITIAL_MARGIN_PX = 1600;
const AUTOPLAY_INTERSECTION_MARGIN_PX = 4200;
const AUTOPLAY_PRELOAD_BATCH_SIZE = 4;
const AUTOPLAY_PRELOAD_START_MS = 250;
const AUTOPLAY_PRELOAD_STAGGER_MS = 500;
let autoplayPreloadQueue = [];
let autoplayPreloadTimer = null;

function sampleClip(tool, className = "") {
    const media = mediaFor(tool);
    const websiteUrl = originFromUrl(tool.url);

    if (media.videoId) {
        const thumb = youtubeThumb(media.videoId, "hqdefault");
        return `
            <div class="sample-clip sample-youtube sample-autoplay ${className}" aria-label="Clip tự chạy của ${tool.name}">
                <img class="youtube-thumb" src="${thumb}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${youtubeThumb(media.videoId, "mqdefault")}';">
                <iframe class="youtube-autoplay" title="Clip tự chạy của ${tool.name}" data-src="${youtubeEmbedUrl(media.videoId)}" loading="eager" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" aria-hidden="true"></iframe>
                <div class="youtube-vignette" aria-hidden="true"></div>
                <div class="youtube-loading">
                    ${toolLogo(tool)}
                    <strong>${tool.name}</strong>
                    <small>${media.mediaLabel || "Clip chính thức"} · tự chạy</small>
                </div>
                <a class="sample-source-link" href="${tool.demoSource}" target="_blank" rel="noreferrer">Nguồn clip</a>
            </div>
        `;
    }

    if (media.image) {
        return `
            <a class="sample-clip sample-website ${className}" href="${websiteUrl}" target="_blank" rel="noreferrer" aria-label="Mở website của ${tool.name}">
                <img class="website-thumb" src="${media.image}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.closest('.sample-clip').classList.add('image-failed');this.remove();">
                <div class="youtube-vignette" aria-hidden="true"></div>
                <div class="youtube-loading">
                    ${toolLogo(tool)}
                    <strong>${tool.name}</strong>
                    <small>${media.mediaLabel || "Ảnh từ website chính thức"}</small>
                </div>
                <span>Ảnh web - ${tool.name}</span>
            </a>
        `;
    }

    return `
        <a class="sample-clip sample-generated ${className}" href="${websiteUrl}" target="_blank" rel="noreferrer" aria-label="Mở website của ${tool.name}">
            <div class="sample-motion" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="sample-generated-copy">
                ${toolLogo(tool)}
                <strong>${tool.name}</strong>
                <small>Mở website chính thức để xem hình ảnh hoặc demo mới nhất</small>
            </div>
        </a>
    `;
}

function activateMedia(root = document) {
    const embeds = $$(".youtube-autoplay[data-src]:not([data-media-ready])", root);
    if (!embeds.length) return;

    embeds
        .filter((embed) => isNearViewport(embed, AUTOPLAY_INITIAL_MARGIN_PX))
        .forEach(loadAutoplayEmbed);

    if (!("IntersectionObserver" in window)) {
        embeds.forEach(loadAutoplayEmbed);
        return;
    }

    if (!autoplayEmbedObserver) {
        autoplayEmbedObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                loadAutoplayEmbed(entry.target);
                autoplayEmbedObserver.unobserve(entry.target);
            });
        }, { rootMargin: `${AUTOPLAY_INTERSECTION_MARGIN_PX}px 0px`, threshold: 0.01 });
    }

    embeds.forEach((embed) => {
        if (embed.dataset.mediaLoaded === "true") return;
        embed.dataset.mediaReady = "true";
        autoplayEmbedObserver.observe(embed);
    });

    queueAutoplayPreload(embeds);
}

function isNearViewport(element, margin = 0) {
    const rect = element.getBoundingClientRect();
    return rect.bottom >= -margin && rect.top <= window.innerHeight + margin;
}

function queueAutoplayPreload(embeds) {
    const pending = embeds
        .filter((embed) => embed.isConnected && embed.dataset.mediaLoaded !== "true")
        .sort((a, b) => Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top));

    pending.forEach((embed) => {
        if (embed.dataset.preloadQueued === "true") return;
        embed.dataset.preloadQueued = "true";
        autoplayPreloadQueue.push(embed);
    });

    scheduleAutoplayPreload(AUTOPLAY_PRELOAD_START_MS);
}

function scheduleAutoplayPreload(delay = AUTOPLAY_PRELOAD_STAGGER_MS) {
    if (autoplayPreloadTimer || !autoplayPreloadQueue.length) return;
    autoplayPreloadTimer = window.setTimeout(() => {
        autoplayPreloadTimer = null;
        runWhenIdle(preloadNextAutoplayBatch);
    }, delay);
}

function preloadNextAutoplayBatch() {
    let loaded = 0;
    const batchSize = autoplayBatchSize();

    while (autoplayPreloadQueue.length && loaded < batchSize) {
        const embed = autoplayPreloadQueue.shift();
        if (!embed?.isConnected || embed.dataset.mediaLoaded === "true") continue;
        loadAutoplayEmbed(embed);
        loaded += 1;
    }

    autoplayPreloadQueue = autoplayPreloadQueue.filter((embed) => embed?.isConnected && embed.dataset.mediaLoaded !== "true");
    scheduleAutoplayPreload(autoplayPreloadDelay());
}

function runWhenIdle(callback) {
    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(callback, { timeout: 900 });
        return;
    }
    callback();
}

function networkHints() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const type = connection?.effectiveType || "";
    return {
        saveData: Boolean(connection?.saveData),
        slow: /(^|-)2g$|slow-2g/i.test(type)
    };
}

function autoplayBatchSize() {
    const hints = networkHints();
    if (hints.saveData || hints.slow) return 1;
    if (window.innerWidth < 720) return 2;
    return AUTOPLAY_PRELOAD_BATCH_SIZE;
}

function autoplayPreloadDelay() {
    const hints = networkHints();
    if (hints.saveData || hints.slow) return 1600;
    if (window.innerWidth < 720) return 1100;
    return AUTOPLAY_PRELOAD_STAGGER_MS;
}

function loadAutoplayEmbed(embed) {
    if (embed.dataset.mediaLoaded === "true") return;
    embed.dataset.mediaReady = "true";
    const sample = embed.closest(".sample-autoplay");
    embed.addEventListener("load", () => {
        sample?.classList.add("is-frame-loaded");
    }, { once: true });
    embed.src = embed.dataset.src;
    embed.dataset.mediaLoaded = "true";
    sample?.classList.add("is-active");
    revealAutoplaySample(sample);
}

function revealAutoplaySample(sample) {
    if (!sample || sample.dataset.revealQueued === "true") return;
    sample.dataset.revealQueued = "true";
    sample.classList.add("is-warming");
    window.setTimeout(() => {
        sample.classList.add("is-loaded");
        sample.classList.remove("is-warming");
    }, AUTOPLAY_REVEAL_DELAY_MS);
}

function finderResultCard(item, index, context) {
    const { tool, fit, reasons, value } = item;
    const source = sourceFor(tool);
    const shortReasons = reasons.slice(0, 2);

    return `
        <article class="finder-card" style="--accent: ${tool.accent}">
            ${sampleClip(tool, "card-sample")}
            <div class="finder-rank">
                <span>#${index + 1}</span>
                <strong>${fit}% phù hợp · ${valuePercent(value)}% đáng tiền</strong>
            </div>
            <div class="finder-card-head">
                ${toolTitle(tool)}
                <span class="price-tag">${priceLabel(tool)}</span>
            </div>
            <div class="fit-meter" aria-hidden="true"><span style="--fit: ${fit}"></span></div>
            ${priceMiniCard(tool)}
            <p class="result-fit-line">${inlineToolNames(tool.bestFor)}</p>
            <div class="result-tags">
                ${shortReasons.map((reason) => `<span>${inlineToolNames(reason)}</span>`).join("")}
            </div>
            <div class="tool-actions">
                <button class="detail-button" type="button" data-tool-id="${tool.id}" data-finder-context="true">Xem chi tiết</button>
                <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">Dẫn chứng</a>
                <a class="source-link" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Trang web</a>
            </div>
        </article>
    `;
}

function setupValueOptimizer() {
    fillFinderSelect("#valueUseCase", valueUseCases, valueState.useCase);
    fillFinderSelect("#valueBudget", budgetOptions, valueState.budget);
    fillFinderSelect("#valueStrategy", valueStrategies, valueState.strategy);

    ["#valueUseCase", "#valueBudget", "#valueStrategy"].forEach((selector) => {
        $(selector).addEventListener("change", () => {
            valueState = currentValueContext();
            renderValueOptimizer();
        });
    });
}

function currentValueContext() {
    return {
        useCase: $("#valueUseCase")?.value || valueState.useCase,
        budget: $("#valueBudget")?.value || valueState.budget,
        strategy: $("#valueStrategy")?.value || valueState.strategy
    };
}

function valueRecommendations(context) {
    const useCase = valueUseCases.find((item) => item.id === context.useCase) || valueUseCases[0];
    const budget = budgetValue(context.budget);
    const strategy = context.strategy || "balanced";

    return tools.map((tool) => {
        const pricing = pricingFor(tool);
        const score = valueScore(tool, useCase.focus, strategy, budget);
        const practical = monthlyCost(tool);
        const entry = monthlyCost(tool, "entry");
        const withinBudget = budget === Infinity || practical <= budget || entry <= budget || (budget === 0 && pricing.freeTier);
        const focusScore = useCase.focus.reduce((sum, key) => sum + metricScore(tool, key), 0) / useCase.focus.length;
        return { tool, pricing, score, practical, entry, withinBudget, focusScore };
    })
        .filter((item) => !item.pricing.discontinued || context.useCase === "all")
        .sort((a, b) => {
            if (a.withinBudget !== b.withinBudget) return a.withinBudget ? -1 : 1;
            return b.score - a.score;
        });
}

function renderValueOptimizer() {
    const context = currentValueContext();
    valueState = context;
    const useCase = valueUseCases.find((item) => item.id === context.useCase) || valueUseCases[0];
    const strategy = valueStrategies.find((item) => item.id === context.strategy) || valueStrategies[0];
    const budgetLabel = optionLabel(budgetOptions, context.budget);
    const recommendations = valueRecommendations(context).slice(0, 8);
    const top = recommendations[0];

    $("#valueSummaryTitle").textContent = top
        ? `${top.tool.name} đang là lựa chọn đáng tiền nhất`
        : "Chưa có lựa chọn phù hợp ngân sách";
    $("#valueSummaryCopy").textContent = top
        ? `${useCase.label} · ${strategy.label} · ${budgetLabel}. ${top.tool.name}: đáng tiền ${valuePercent(top.score)}%, giá ${priceLabel(top.tool)}, ${costRiskLabel(top.pricing.creditRisk).toLowerCase()}.`
        : "Nới ngân sách hoặc đổi mục tiêu để xem thêm lựa chọn.";

    $("#valueResults").innerHTML = recommendations.map((item, index) => valueCard(item, index, useCase)).join("");
    bindDetailButtons($("#valueResults"));
}

function valueCard(item, index, useCase) {
    const { tool, pricing, score, withinBudget, focusScore } = item;
    const priceRef = priceSource(tool);
    const rankLabel = withinBudget ? "Trong ngân sách" : "Vượt ngân sách";
    const value = valuePercent(score);
    const focusLabel = `${useCase.focus.map((key) => metricLabels[key] || key).join(" + ")}: ${focusScore.toFixed(1)}/5`;

    return `
        <article class="value-card ${withinBudget ? "" : "over-budget"}" style="--accent: ${tool.accent}">
            <div class="value-rank">
                <span>#${index + 1}</span>
                <strong>${value}% value</strong>
            </div>
            <div class="value-title">
                ${toolTitle(tool)}
                <span class="price-tag">${priceLabel(tool)}</span>
            </div>
            <div class="value-meter" aria-hidden="true"><span style="--value: ${value}"></span></div>
            ${priceMiniCard(tool)}
            <div class="value-facts">
                <span>${rankLabel}</span>
                <span>${pricing.freeTier ? "Có free tier" : "Không free tier rõ"}</span>
                <span>${costRiskLabel(pricing.creditRisk)}</span>
                <span>${focusLabel}</span>
            </div>
            <p>${inlineToolNames(pricing.note)}</p>
            <div class="tool-actions">
                <button class="detail-button" type="button" data-tool-id="${tool.id}">Xem chi tiết</button>
                <a class="source-link" href="${priceRef.url}" target="_blank" rel="noreferrer">Nguồn giá</a>
                <a class="source-link" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Trang web</a>
            </div>
        </article>
    `;
}

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}

function renderFilters() {
    const wrap = $("#categoryFilters");
    wrap.innerHTML = categories.map((category) => `
        <button class="filter-chip ${category.id === activeCategory ? "active" : ""}" type="button" data-category="${category.id}">
            ${category.label}
        </button>
    `).join("");

    wrap.addEventListener("click", (event) => {
        const button = event.target.closest("[data-category]");
        if (!button) return;
        activeCategory = button.dataset.category;
        $$(".filter-chip", wrap).forEach((item) => item.classList.toggle("active", item === button));
        renderTools();
    });

    $("#toolSearch").addEventListener("input", (event) => {
        searchTerm = event.target.value.trim().toLowerCase();
        renderTools();
    });
}

function filteredTools() {
    return tools.filter((tool) => {
        const pricing = pricingFor(tool);
        const freeValueMatch = pricing.freeTier || monthlyCost(tool, "entry") === 0 || monthlyCost(tool) <= 20;
        const categoryMatch = activeCategory === "all" || (activeCategory === "free" ? freeValueMatch : tool.category === activeCategory);
        const haystack = [
            tool.name,
            tool.group,
            tool.bestFor,
            tool.audience,
            tool.summary,
            tool.workflow.join(" "),
            priceLabel(tool),
            pricing.note
        ].join(" ").toLowerCase();
        return categoryMatch && (!searchTerm || haystack.includes(searchTerm));
    });
}

function renderTools() {
    const grid = $("#toolGrid");
    const list = filteredTools();

    if (!list.length) {
        grid.innerHTML = `<p class="muted-copy">Không tìm thấy công cụ phù hợp bộ lọc hiện tại.</p>`;
        return;
    }

    grid.innerHTML = list.map((tool) => {
        const status = statusMap[tool.status] || statusMap.active;
        const source = sourceFor(tool);
        return `
            <article class="tool-card" style="--accent: ${tool.accent}; --status-color: ${status.color}">
                <div class="tool-media">
                    <span class="status-badge">${status.label}</span>
                    <span class="media-logo">${toolLogo(tool, "large")}</span>
                    <a class="media-source" href="${source.url}" target="_blank" rel="noreferrer">Nguồn: ${displayLabel(source.label)}</a>
                    ${sampleClip(tool, "media-sample")}
                </div>
                <div class="tool-body">
                    <div class="tool-header">
                        ${toolTitle(tool)}
                        <span class="price-tag">${priceLabel(tool)}</span>
                    </div>
                    <p class="tool-summary">${inlineToolNames(tool.summary)}</p>
                    ${priceMiniCard(tool)}
                    <div class="evidence-row">
                        ${sourceBadge(tool)}
                        ${websiteLink(tool)}
                    </div>
                    <p class="fit-line">Phù hợp: ${inlineToolNames(tool.bestFor)}</p>
                </div>
                <div class="metric-list">
                    ${metricRow("Video", tool.metrics.video, tool.accent)}
                    ${metricRow("Quảng cáo", tool.metrics.ad, tool.accent)}
                    ${metricRow("Mạng xã hội", tool.metrics.social, tool.accent)}
                    ${metricRow("Tự động hóa", tool.metrics.automation, tool.accent)}
                </div>
                <div class="tool-actions">
                    <button class="detail-button" type="button" data-tool-id="${tool.id}">Xem chi tiết</button>
                    <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">Dẫn chứng</a>
                    <a class="source-link" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Trang web</a>
                </div>
            </article>
        `;
    }).join("");

    bindDetailButtons(grid);
    activateMedia(grid);
}

function metricRow(label, value, accent) {
    return `
        <div class="metric-row" style="--accent: ${accent}">
            <span>${label}</span>
            <div class="bar" aria-hidden="true"><span style="--value: ${value}"></span></div>
            <strong>${value}</strong>
        </div>
    `;
}

function initials(name) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();
}

function sourceFor(tool) {
    return sources.find((source) => source.label === tool.source) || { label: tool.source || "Official source", url: tool.url, group: tool.group };
}

function domainFromUrl(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return "";
    }
}

function originFromUrl(url) {
    try {
        return new URL(url).origin;
    } catch {
        return url;
    }
}

function logoUrl(tool) {
    const domain = tool.logoDomain || domainFromUrl(tool.url);
    return domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=96` : "";
}

function toolLogo(tool, className = "") {
    const logo = logoUrl(tool);
    return `
        <span class="tool-logo ${className}" aria-hidden="true">
            ${logo ? `<img src="${logo}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
            <span>${initials(tool.name)}</span>
        </span>
    `;
}

function toolTitle(tool, heading = "h3") {
    return `
        <div class="tool-titleline">
            ${toolLogo(tool)}
            <div>
                <span class="tool-category">${viText(tool.group)}</span>
                <${heading}>${tool.name}</${heading}>
            </div>
        </div>
    `;
}

function sourceBadge(tool, label = "Dẫn chứng") {
    const source = sourceFor(tool);
    return `<a class="evidence-link" href="${source.url}" target="_blank" rel="noreferrer">${label}: ${displayLabel(source.label)}</a>`;
}

function websiteLink(tool, label = "Trang web") {
    return `<a class="website-link" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function toolToken(label) {
    const normalizedLabel = normalizeText(label);
    const tool = tools.find((item) => item.name === label)
        || tools.find((item) => normalizeText(item.name).includes(normalizedLabel) || normalizedLabel.includes(normalizeText(item.name)));
    if (!tool) return `<span class="tool-token">${label}</span>`;

    return `
        <button class="tool-token logo-token" type="button" data-tool-id="${tool.id}" title="Xem chi tiết ${tool.name}">
            ${toolLogo(tool, "tiny")}
            <span>${tool.name}</span>
        </button>
    `;
}

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function inlineToolNames(text) {
    const placeholders = [];
    let displayText = String(text || "");

    tools
        .filter((tool) => displayText.includes(tool.name))
        .sort((a, b) => b.name.length - a.name.length)
        .forEach((tool, index) => {
            const placeholder = `__TOOL_${index}__`;
            placeholders.push([placeholder, `
            <span class="inline-tool">${toolLogo(tool, "tiny")}<span>${tool.name}</span></span>
        `]);
            displayText = displayText.replace(new RegExp(escapeRegExp(tool.name), "g"), placeholder);
        });

    displayText = viText(displayText);
    placeholders.forEach(([placeholder, html]) => {
        displayText = displayText.replace(new RegExp(placeholder, "g"), html);
    });
    return displayText;
}

function buildPrompt(tool, context, variant = 0) {
    const role = context?.roleLabel || "người dùng";
    const industry = context?.industryLabel || "doanh nghiệp";
    const task = context?.taskLabel || "công việc hiện tại";
    const brief = context?.brief || `Tôi cần hỗ trợ ${task.toLowerCase()} trong bối cảnh ${industry}.`;
    const toolName = tool?.name || "AI";
    const contextLine = `Bối cảnh: tôi là ${role}, ngành ${industry}. Công việc cần làm: "${brief}".`;
    const variantsByCategory = {
        video: [
            `${contextLine} Hãy viết prompt video cho ${toolName}: gồm mục tiêu clip, đối tượng xem, bối cảnh hình ảnh, nhân vật/sản phẩm chính, chuyển động camera, ánh sáng, mood màu, thời lượng, CTA và 3 cảnh quay nối tiếp nhau.`,
            `${contextLine} Hãy tạo storyboard 5 cảnh cho video ngắn. Mỗi cảnh gồm: mô tả visual, hành động, camera movement, text overlay, âm thanh/voice, rủi ro cần tránh khi render bằng ${toolName}.`,
            `${contextLine} Hãy tạo 3 biến thể prompt video khác nhau: bản chuyên nghiệp, bản social hook mạnh, bản tối giản dễ render. Mỗi bản phải có negative prompt và tiêu chí chọn bản tốt nhất.`
        ],
        avatar: [
            `${contextLine} Hãy viết script video avatar cho ${toolName}. Chia thành mở đầu, vấn đề, nội dung chính, hướng dẫn hành động và CTA. Giọng văn rõ, tự nhiên, phù hợp người Việt.`,
            `${contextLine} Hãy tạo checklist sản xuất video avatar: độ dài từng đoạn, tone giọng, avatar phù hợp, caption, ngôn ngữ, tài liệu đầu vào và bước review trước khi xuất bản.`,
            `${contextLine} Hãy viết 3 phiên bản script: trang trọng, thân thiện, ngắn gọn. Mỗi phiên bản kèm hướng dẫn chọn avatar, background và nhịp đọc.`
        ],
        creative: [
            `${contextLine} Hãy tạo brief thiết kế cho ${toolName}: mục tiêu, insight, thông điệp chính, bố cục, màu sắc, font mood, định dạng cần xuất và checklist brand consistency.`,
            `${contextLine} Hãy viết 5 prompt tạo visual/banner, mỗi prompt gồm subject, style, composition, màu chủ đạo, text overlay, định dạng và điểm cần tránh.`,
            `${contextLine} Hãy đề xuất 3 concept visual khác nhau cho cùng một nhiệm vụ, nêu ưu/nhược và concept nên dùng để test trước.`
        ],
        social: [
            `${contextLine} Hãy lập lịch nội dung 14 ngày bằng ${toolName}. Mỗi ngày gồm chủ đề, caption nháp, format, kênh đăng, CTA và chỉ số cần theo dõi.`,
            `${contextLine} Hãy tạo 10 caption social theo 5 góc nội dung khác nhau, kèm hashtag, hook đầu câu và phiên bản ngắn cho story/reel.`,
            `${contextLine} Hãy thiết kế workflow vận hành social: tạo ý tưởng, duyệt nội dung, lên lịch, đo lường, tái sử dụng nội dung và cảnh báo rủi ro.`
        ],
        content: [
            `${contextLine} Hãy xây dựng content brief bằng ${toolName}: mục tiêu, audience, insight, outline, key message, tone, CTA và checklist kiểm tra trước khi gửi.`,
            `${contextLine} Hãy viết bản nháp nội dung đầu tiên, sau đó tự review theo tiêu chí: rõ ý, đúng tone, có dẫn chứng, dễ hiểu, tránh sáo rỗng.`,
            `${contextLine} Hãy tạo 5 biến thể nội dung cho các kênh khác nhau: email, LinkedIn/Facebook, landing page, script video và thông báo nội bộ.`
        ],
        core: [
            `${contextLine} Hãy phân tích yêu cầu và biến nó thành kế hoạch hành động: mục tiêu, dữ liệu cần có, quy trình, output mong muốn, checklist review và rủi ro.`,
            `${contextLine} Hãy tạo prompt chi tiết để tôi đưa sang các tool chuyên dụng khác. Prompt phải có vai trò, bối cảnh, input, format output và tiêu chí đánh giá.`,
            `${contextLine} Hãy đề xuất stack AI phù hợp, thứ tự dùng từng tool, việc nào nên để con người review và ví dụ đầu ra cần đạt.`
        ],
        editor: [
            `${contextLine} Hãy lập plan dựng video trong ${toolName}: cấu trúc timeline, nhịp cắt, caption, nhạc, hiệu ứng, format xuất và checklist đăng TikTok/Reels/Shorts.`,
            `${contextLine} Hãy biến footage thô thành kịch bản dựng 45 giây: hook 3 giây, phần chính, proof, CTA, overlay text và nhịp chuyển cảnh.`,
            `${contextLine} Hãy tạo 3 phiên bản edit: bản bán hàng, bản giáo dục, bản social trend. Mỗi bản có cấu trúc, caption và tiêu chí chọn.`
        ]
    };
    const variants = variantsByCategory[tool?.category] || variantsByCategory.core;
    return variants[variant % variants.length];
}

function finderModalSection(tool, context) {
    const profile = finderProfiles[tool.id] || { guide: [] };
    const safeContext = context || {
        industry: "marketing",
        role: "marketer",
        task: "copy",
        brief: tool.bestFor,
        industryLabel: "Marketing / quảng cáo",
        roleLabel: "Marketing executive",
        taskLabel: tool.bestFor
    };
    const prompts = [0, 1, 2].map((index) => viText(buildPrompt(tool, safeContext, index)));

    return `
        <section class="modal-section usage-section">
            <h3>Hướng dẫn dùng theo nhu cầu</h3>
            <p><strong>Bối cảnh:</strong> ${safeContext.roleLabel} - ${safeContext.industryLabel} - ${safeContext.taskLabel}</p>
            <ol>
                ${(profile.guide || []).slice(0, 3).map((step) => `<li>${inlineToolNames(step)}</li>`).join("")}
            </ol>
            <div class="prompt-grid">
                ${prompts.map((prompt, index) => `
                    <article class="prompt-card">
                        <span>Câu lệnh ${index + 1}</span>
                        <p>${prompt}</p>
                        <button type="button" data-copy-prompt="${escapeHtml(prompt)}">Sao chép câu lệnh</button>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function bindDetailButtons(root = document) {
    $$("[data-tool-id]", root).forEach((button) => {
        button.addEventListener("click", () => {
            const context = button.dataset.finderContext === "true" ? currentFinderContext() : null;
            openToolModal(button.dataset.toolId, context);
        });
    });
}

function setupModal() {
    const modal = $("#toolModal");
    $$("[data-close-modal]", modal).forEach((element) => {
        element.addEventListener("click", closeToolModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("active")) closeToolModal();
    });
}

function openToolModal(toolId, finderContext = null) {
    const tool = tools.find((item) => item.id === toolId);
    if (!tool) return;

    const status = statusMap[tool.status] || statusMap.active;
    const source = sourceFor(tool);
    $("#modalContent").innerHTML = `
        <div class="modal-inner" style="--accent: ${tool.accent}">
            <div class="modal-title-row">
                <div class="modal-title-brand">
                    ${toolLogo(tool, "large")}
                    <div>
                        <p class="eyebrow">${viText(tool.group)} - ${status.label}</p>
                        <h2 id="modalTitle">${tool.name}</h2>
                    </div>
                </div>
                <span class="modal-price">${priceLabel(tool)}</span>
            </div>
            <div class="modal-tabs" role="tablist" aria-label="Nội dung chi tiết">
                <button class="modal-tab active" type="button" data-modal-tab="info">Thông tin chi tiết</button>
                <button class="modal-tab" type="button" data-modal-tab="plans">Gói & nâng cấp</button>
                <button class="modal-tab" type="button" data-modal-tab="prompts">Câu lệnh mẫu</button>
            </div>
            <section class="modal-tab-panel active" data-modal-panel="info">
                ${sampleClip(tool, "modal-sample")}
                <p class="tool-summary">${inlineToolNames(tool.summary)}</p>
                ${priceMiniCard(tool)}
                <div class="compare-metrics">
                    ${compareMetrics.slice(0, 6).map(([key, label]) => metricRow(label, tool.metrics[key], tool.accent)).join("")}
                </div>
                <div class="modal-grid">
                    ${modalSection("Điểm mạnh", tool.pros)}
                    ${modalSection("Hạn chế", tool.cons)}
                    ${modalSection("Quy trình gợi ý", tool.workflow)}
                    ${modalSection("Không nên dùng khi", [tool.avoid])}
                </div>
                <div class="modal-section" style="margin-top: 1rem;">
                    <h3>Ghi chú cập nhật</h3>
                    <p>${inlineToolNames(tool.currentNote)}</p>
                    <p><strong>Kết luận:</strong> ${inlineToolNames(tool.verdict)}</p>
                    <div class="modal-evidence-actions">
                        <a class="modal-link" href="${source.url}" target="_blank" rel="noreferrer">Mở dẫn chứng: ${displayLabel(source.label)}</a>
                        <a class="modal-link secondary" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Mở trang web ${tool.name}</a>
                    </div>
                </div>
            </section>
            <section class="modal-tab-panel" data-modal-panel="plans">
                ${planComparisonSection(tool)}
            </section>
            <section class="modal-tab-panel" data-modal-panel="prompts">
                ${finderModalSection(tool, finderContext)}
            </section>
        </div>
    `;

    const modal = $("#toolModal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setupModalTabs(modal);
    setupCopyPromptButtons(modal);
    activateMedia(modal);
}

function setupModalTabs(root) {
    $$("[data-modal-tab]", root).forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.modalTab;
            $$("[data-modal-tab]", root).forEach((item) => item.classList.toggle("active", item === tab));
            $$("[data-modal-panel]", root).forEach((panel) => panel.classList.toggle("active", panel.dataset.modalPanel === target));
        });
    });
}

function setupCopyPromptButtons(root) {
    $$("[data-copy-prompt]", root).forEach((button) => {
        button.addEventListener("click", async () => {
            const prompt = button.dataset.copyPrompt || "";
            try {
                await navigator.clipboard.writeText(prompt);
                button.textContent = "Đã sao chép";
            } catch {
                button.textContent = "Không sao chép được";
            }
            window.setTimeout(() => {
                button.textContent = "Sao chép câu lệnh";
            }, 1400);
        });
    });
}

function modalSection(title, items) {
    return `
        <section class="modal-section">
            <h3>${title}</h3>
            <ul>
                ${items.map((item) => `<li>${inlineToolNames(item)}</li>`).join("")}
            </ul>
        </section>
    `;
}

function closeToolModal() {
    const modal = $("#toolModal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function renderCompareSelectors() {
    const selectA = $("#compareA");
    const selectB = $("#compareB");
    const options = tools.map((tool) => `<option value="${tool.id}">${tool.name}</option>`).join("");
    selectA.innerHTML = options;
    selectB.innerHTML = options;
    selectA.value = "heygen";
    selectB.value = "synthesia";
    selectA.addEventListener("change", renderComparison);
    selectB.addEventListener("change", renderComparison);
    renderComparison();
}

function renderComparison() {
    const toolA = tools.find((tool) => tool.id === $("#compareA").value);
    const toolB = tools.find((tool) => tool.id === $("#compareB").value);
    if (!toolA || !toolB) return;

    $("#compareResult").innerHTML = `
        ${compareVerdict(toolA, toolB)}
        <div class="compare-pair">
            ${compareToolPanel(toolA, toolB)}
            ${compareToolPanel(toolB, toolA)}
        </div>
    `;

    bindDetailButtons($("#compareResult"));
}

function compareToolPanel(tool, opponent) {
    const status = statusMap[tool.status] || statusMap.active;
    const score = weightedScore(tool);
    const value = valueScore(tool);
    const opponentScore = weightedScore(opponent);
    const gap = score - opponentScore;
    const relationClass = Math.abs(gap) < 0.05 ? "compare-even" : gap > 0 ? "compare-winner" : "compare-loser";
    const relationLabel = Math.abs(gap) < 0.05 ? "Ngang tổng thể" : gap > 0 ? "Nhỉnh hơn tổng thể" : "Yếu hơn tổng thể";
    const breakdown = comparisonBreakdown(tool, opponent);
    const source = sourceFor(tool);

    return `
        <article class="compare-tool ${relationClass}" style="--accent: ${tool.accent}">
            <div class="compare-status-line">
                <span class="winner-ribbon">${relationLabel}</span>
                <span class="panel-score">${score.toFixed(1)}/5 · ${valuePercent(value)}V</span>
            </div>
            <div class="compare-top">
                ${toolTitle(tool)}
                <span class="price-tag">${priceLabel(tool)}</span>
            </div>
            <p class="tool-summary">${inlineToolNames(tool.verdict)}</p>
            ${priceMiniCard(tool)}
            <div class="compare-meta">
                <span class="mini-pill">${status.label}</span>
                <span class="mini-pill">Thắng ${breakdown.wins.length} / Thua ${breakdown.losses.length}</span>
                <span class="mini-pill">${tool.bestFor}</span>
            </div>
            <div class="compare-actions">
                <button class="detail-button compact" type="button" data-tool-id="${tool.id}">Xem chi tiết</button>
                <a class="source-link compact" href="${source.url}" target="_blank" rel="noreferrer">Dẫn chứng</a>
                <a class="source-link compact" href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Trang web</a>
            </div>
            <div class="compare-metrics" style="margin-top: 1rem;">
                ${compareMetrics.map(([key, label]) => compareMetricRow(label, metricScore(tool, key), metricScore(opponent, key), tool.accent)).join("")}
            </div>
        </article>
    `;
}

function compareMetricRow(label, value, otherValue, accent) {
    const delta = value - otherValue;
    const stateClass = delta > 0 ? "metric-win" : delta < 0 ? "metric-lose" : "metric-tie";
    const stateLabel = delta > 0 ? "Hơn" : delta < 0 ? "Thua" : "Ngang";
    const deltaLabel = delta === 0 ? "0" : `${delta > 0 ? "+" : ""}${delta}`;

    return `
        <div class="compare-metric ${stateClass}" style="--accent: ${accent}">
            <div class="metric-title">
                <strong>${label}</strong>
                <span class="metric-state">${stateLabel} ${deltaLabel}</span>
            </div>
            <div class="metric-row">
                <div class="bar" aria-hidden="true"><span style="--value: ${value}"></span></div>
                <strong class="metric-value">${value}/5</strong>
            </div>
        </div>
    `;
}

function compareVerdict(toolA, toolB) {
    const totalA = weightedScore(toolA);
    const totalB = weightedScore(toolB);
    const valueA = valueScore(toolA);
    const valueB = valueScore(toolB);
    const totalGap = Math.abs(totalA - totalB);
    const tieResult = totalGap < 0.05;
    const leaderTool = totalA >= totalB ? toolA : toolB;
    const trailingTool = leaderTool === toolA ? toolB : toolA;
    const valueLeader = valueA >= valueB ? toolA : toolB;
    const valueGap = Math.abs(valueA - valueB);
    const leaderBreakdown = comparisonBreakdown(leaderTool, trailingTool);
    const trailingBreakdown = comparisonBreakdown(trailingTool, leaderTool);
    const verdictTitle = tieResult ? `${toolA.name} và ${toolB.name} gần như ngang nhau` : `${leaderTool.name} nhỉnh hơn ${trailingTool.name}`;
    const verdictCopy = tieResult
        ? `Điểm tổng chỉ lệch ${totalGap.toFixed(1)}. Chọn theo tình huống sử dụng chính: ${toolA.name} hợp ${toolA.bestFor}; ${toolB.name} hợp ${toolB.bestFor}.`
        : `${leaderTool.name} dẫn ${totalGap.toFixed(1)} điểm tổng, thắng ${leaderBreakdown.wins.length}/${compareMetrics.length} tiêu chí và hợp hơn khi mục tiêu là: ${leaderTool.bestFor}.`;
    const counterTitle = tieResult ? "Điểm mạnh riêng" : `Vẫn chọn ${trailingTool.name} khi`;

    return `
        <div class="verdict-panel ${tieResult ? "is-tie" : ""}" style="--accent: ${leaderTool.accent}">
            <div class="verdict-main">
                <span class="decision-kicker">Kết luận nhanh</span>
                <div class="verdict-title-row">
                    ${toolLogo(leaderTool, "large")}
                    <h3>${verdictTitle}</h3>
                </div>
                <p>${inlineToolNames(verdictCopy)}</p>
                <span class="decision-pill">${tieResult ? "Chọn theo tình huống sử dụng" : `Nên chọn ${leaderTool.name}`}</span>
                <div class="verdict-chips" aria-label="Tiêu chí thắng nổi bật">
                    ${criteriaChips(leaderBreakdown.wins, "Không có tiêu chí vượt rõ")}
                </div>
                <div class="evidence-pair">
                    <span>Điểm nhỉnh hơn là điểm thực dụng nội bộ, mô tả/giá/credit đối chiếu từ nguồn chính thức:</span>
                    ${sourceBadge(toolA, `Nguồn ${toolA.name}`)}
                    ${sourceBadge(toolB, `Nguồn ${toolB.name}`)}
                </div>
            </div>
            <div class="verdict-side">
                <div class="score-strip" aria-label="Điểm tổng so sánh">
                    ${compareScoreLine(toolA, totalA, !tieResult && leaderTool === toolA)}
                    ${compareScoreLine(toolB, totalB, !tieResult && leaderTool === toolB)}
                </div>
                <div class="value-callout">
                    <span>Ngon bổ rẻ hơn</span>
                    <strong>${valueGap < 0.08 ? "Gần như ngang nhau" : valueLeader.name}</strong>
                    <p>${valueGap < 0.08 ? "Hai công cụ không lệch nhiều về độ đáng tiền. Chọn theo quy trình và nguồn giá." : `${valueLeader.name} có độ đáng tiền ${valuePercent(valueScore(valueLeader))}% với giá ${priceLabel(valueLeader)}.`}</p>
                </div>
                <div class="counter-choice">
                    <h4>${counterTitle}</h4>
                    ${tieResult
                        ? `<ul>
                            <li>${inlineToolNames(`${toolA.name}: ${criteriaText(comparisonBreakdown(toolA, toolB).wins, toolA.bestFor)}`)}</li>
                            <li>${inlineToolNames(`${toolB.name}: ${criteriaText(comparisonBreakdown(toolB, toolA).wins, toolB.bestFor)}`)}</li>
                        </ul>`
                        : `<ul>
                            <li>${trailingTool.bestFor}</li>
                            <li>${trailingBreakdown.wins.length ? `Vượt lại ở: ${criteriaText(trailingBreakdown.wins, trailingTool.bestFor)}` : "Không vượt rõ về điểm số, chỉ chọn khi workflow hoặc giá phù hợp hơn."}</li>
                            <li>${inlineToolNames(trailingTool.pros[0])}</li>
                        </ul>`}
                </div>
            </div>
        </div>
    `;

    /*
    const scoreA = weightedScore(toolA);
    const scoreB = weightedScore(toolB);
    const winner = scoreA >= scoreB ? toolA : toolB;
    const other = winner === toolA ? toolB : toolA;

    return `
        <div class="verdict-panel">
            <div>
                <h3>Nên nghiêng về ${winner.name}</h3>
                <p>${winner.verdict}</p>
                <p class="stack-price">Điểm thực dụng: ${weightedScore(winner).toFixed(1)}/5</p>
            </div>
            <div>
                <h3>Khi nào chọn ${other.name}</h3>
                <ul>
                    <li>${other.bestFor}</li>
                    <li>${other.pros[0]}</li>
                    <li>${other.cons[0]}</li>
                </ul>
            </div>
        </div>
    `;
    */
}

function compareScoreLine(tool, score, isLeader) {
    const source = sourceFor(tool);
    return `
        <div class="score-line ${isLeader ? "is-leading" : ""}">
            <span class="score-tool-name">${toolLogo(tool, "tiny")}<span>${tool.name}</span></span>
            <strong>${score.toFixed(1)}/5</strong>
            <span class="score-actions">
                <button type="button" data-tool-id="${tool.id}">Chi tiết</button>
                <a href="${source.url}" target="_blank" rel="noreferrer">Nguồn</a>
            </span>
        </div>
    `;
}

function comparisonBreakdown(tool, opponent) {
    return compareMetrics.reduce((result, [key, label]) => {
        const value = metricScore(tool, key);
        const otherValue = metricScore(opponent, key);
        if (value > otherValue) result.wins.push(label);
        if (value < otherValue) result.losses.push(label);
        if (value === otherValue) result.ties.push(label);
        return result;
    }, { wins: [], losses: [], ties: [] });
}

function criteriaChips(labels, fallback) {
    const visible = labels.slice(0, 5);
    if (!visible.length) return `<span class="reason-chip neutral">${fallback}</span>`;
    return visible.map((label) => `<span class="reason-chip">${label}</span>`).join("");
}

function criteriaText(labels, fallback) {
    return labels.length ? labels.slice(0, 4).join(", ") : fallback;
}

function metricScore(tool, key) {
    return Number(tool.metrics?.[key] ?? 0);
}

function weightedScore(tool) {
    const weights = {
        video: 1.1,
        avatar: 0.7,
        copy: 0.9,
        ad: 1.1,
        social: 0.9,
        automation: 0.9,
        control: 0.9,
        ease: 0.8,
        speed: 0.8,
        vietnamese: 0.5,
        safety: 0.8,
        costClarity: 0.6
    };
    const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);
    return Object.entries(weights).reduce((sum, [key, weight]) => sum + (metricScore(tool, key) * weight), 0) / totalWeight;
}

function renderUseCases() {
    $("#useCaseGrid").innerHTML = useCases.map((useCase) => `
        <article class="usecase-card">
            <h3>${viText(useCase.title)}</h3>
            <p>${inlineToolNames(useCase.body)}</p>
            <div class="recommended-tools">
                ${useCase.tools.map((tool) => toolToken(tool)).join("")}
            </div>
        </article>
    `).join("");

    bindDetailButtons($("#useCaseGrid"));
}

function renderStacks() {
    $("#stackGrid").innerHTML = stacks.map((stack) => `
        <article class="stack-card">
            <h3>${viText(stack.title)}</h3>
            <p class="stack-price">${stack.price}</p>
            <p>${inlineToolNames(stack.body)}</p>
            <div class="recommended-tools">
                ${stack.tokens.map((token) => `<span class="mini-pill">${viText(token)}</span>`).join("")}
            </div>
            <div class="recommended-tools stack-tool-strip">
                ${tools.filter((tool) => stack.body.includes(tool.name)).map((tool) => toolToken(tool.name)).join("")}
            </div>
        </article>
    `).join("");

    bindDetailButtons($("#stackGrid"));
}

function renderScoreTable() {
    const head = $("#scoreTableHead");
    const body = $("#scoreTableBody");
    const columns = [
        { key: "name", label: "Công cụ", sortable: true },
        { key: "group", label: "Nhóm", sortable: true },
        { key: "priceMonthly", label: "Giá từ", sortable: true },
        { key: "value", label: "Đáng tiền", sortable: true },
        { key: "risk", label: "Rủi ro giá", sortable: true },
        { key: "video", label: "Video", sortable: true },
        { key: "copy", label: "Nội dung", sortable: true },
        { key: "ad", label: "Quảng cáo", sortable: true },
        { key: "social", label: "Mạng xã hội", sortable: true },
        { key: "automation", label: "Tự động hóa", sortable: true },
        { key: "ease", label: "Dễ dùng", sortable: true },
        { key: "overall", label: "Tổng", sortable: true }
    ];

    head.innerHTML = `
        <tr>
            ${columns.map((column) => `
                <th>
                    ${column.sortable ? `<button type="button" data-sort="${column.key}">${column.label}</button>` : column.label}
                </th>
            `).join("")}
        </tr>
    `;

    $$("[data-sort]", head).forEach((button) => {
        button.addEventListener("click", () => {
            const key = button.dataset.sort;
            if (sortState.key === key) {
                sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
            } else {
                sortState = { key, direction: ["priceMonthly", "risk"].includes(key) ? "asc" : "desc" };
            }
            renderScoreTable();
        });
    });

    const sorted = [...tools].sort((a, b) => compareBySort(a, b, sortState.key, sortState.direction));
    body.innerHTML = sorted.map((tool) => {
        const source = sourceFor(tool);
        return `
            <tr>
                <td>
                    <div class="table-tool-cell">
                        ${toolLogo(tool)}
                        <div>
                            <strong>${tool.name}</strong><br>
                            <span class="muted-copy">${inlineToolNames(tool.bestFor)}</span>
                            <div class="table-actions">
                                <button type="button" data-tool-id="${tool.id}">Chi tiết</button>
                                <a href="${source.url}" target="_blank" rel="noreferrer">Nguồn</a>
                                <a href="${originFromUrl(tool.url)}" target="_blank" rel="noreferrer">Trang web</a>
                            </div>
                        </div>
                    </div>
                </td>
                <td>${viText(tool.group)}</td>
                <td>
                    <strong>${priceLabel(tool)}</strong><br>
                    <span class="muted-copy">${viText(pricingFor(tool).billing)}</span>
                </td>
                <td class="score-number">${valuePercent(valueScore(tool))}%</td>
                <td>${costRiskLabel(pricingFor(tool).creditRisk)}</td>
                <td class="score-number">${tool.metrics.video}</td>
                <td class="score-number">${tool.metrics.copy}</td>
                <td class="score-number">${tool.metrics.ad}</td>
                <td class="score-number">${tool.metrics.social}</td>
                <td class="score-number">${tool.metrics.automation}</td>
                <td class="score-number">${tool.metrics.ease}</td>
                <td class="score-number">${weightedScore(tool).toFixed(1)}</td>
            </tr>
        `;
    }).join("");

    bindDetailButtons(body);
}

function compareBySort(a, b, key, direction) {
    const multiplier = direction === "asc" ? 1 : -1;
    const valueA = sortValue(a, key);
    const valueB = sortValue(b, key);

    if (typeof valueA === "string") {
        return valueA.localeCompare(valueB, "vi") * multiplier;
    }

    return (valueA - valueB) * multiplier;
}

function sortValue(tool, key) {
    if (key === "overall") return weightedScore(tool);
    if (key === "value") return valueScore(tool);
    if (key === "risk") return pricingFor(tool).creditRisk;
    if (key === "priceMonthly") return monthlyCost(tool, "entry");
    if (key in tool.metrics) return tool.metrics[key];
    return tool[key] || "";
}

function renderSources() {
    const priceSources = Object.values(priceProfiles)
        .map((item) => ({ group: "Pricing / cost", label: item.sourceLabel, url: item.sourceUrl }))
        .filter((item) => item.label && item.url);
    const mergedSources = [...sources, ...priceSources]
        .filter((source, index, list) => index === list.findIndex((item) => item.label === source.label && item.url === source.url));

    $("#sourceList").innerHTML = mergedSources.map((source) => {
        const tool = tools.find((item) => item.source === source.label) || tools.find((item) => pricingFor(item).sourceLabel === source.label);
        return `
            <a class="source-item" href="${source.url}" target="_blank" rel="noreferrer">
                <div class="source-titleline">
                    ${tool ? toolLogo(tool, "tiny") : ""}
                    <div>
                        <span>${displayLabel(source.group)}</span>
                        <strong>${displayLabel(source.label)}</strong>
                    </div>
                </div>
            </a>
        `;
    }).join("");
}




