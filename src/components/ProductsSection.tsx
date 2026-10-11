import React, { useState } from 'react';
import { 
  ShieldAlert, Bot, Store, Factory, Headphones, MessageSquare, 
  MessageCircle, PhoneCall, Users2, Target, Radio, FolderSearch, 
  Share2, AlertTriangle, GraduationCap, Briefcase, ArrowRight, Check
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { LazyBlock } from './LazyBlock';
import { Language } from '../i18n/translations';

interface ProductItem {
  id: string;
  name: string;
  category: 'ops' | 'biz';
  icon: React.ReactNode;
  summary: string;
  details: string[];
  deployedFor?: string;
}

interface ProductsSectionProps {
  lang?: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ lang = 'VI' }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ops' | 'biz'>('all');
  const [selectedProductId, setSelectedProductId] = useState<string>('01');
  const isEn = lang === 'EN';

  const products: ProductItem[] = [
    // --- Operations, Security & Customer Engagement (01 - 08) ---
    {
      id: '01',
      name: isEn ? 'Anomaly Detection with IoT' : 'Phát Hiện Bất Thường Qua IoT & AI',
      category: 'ops',
      icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Real-time urban and industrial security monitoring with computer vision and IoT telemetry, automatically flagging early anomalies.'
        : 'Giám sát an ninh đô thị & công nghiệp thời gian thực qua IoT và thị giác máy tính, tự động phát hiện và cảnh báo sớm sự cố.',
      details: isEn
        ? [
            'Object recognition, person re-identification, and vehicle telemetry across camera streams',
            'Vision-based smoke & fire early warnings before conventional thermal sensors trigger',
            'Multi-sensor fusion: Ambient temperature, vibration, acoustic decibels, and air quality',
            'Automated emergency dispatch notifications to central operations and field mobile apps'
          ]
        : [
            'Nhận diện & theo dõi người, phương tiện và đồ vật trên mọi camera',
            'Cảnh báo sớm khói & lửa bằng thị giác trước khi cảm biến truyền thống kích hoạt',
            'Hợp nhất dữ liệu cảm biến: Nhiệt độ, rung động, tiếng ồn và CO₂',
            'Tự động gửi cảnh báo khẩn cấp đến trung tâm điều hành và app di động'
          ],
      deployedFor: 'Urban Security · Industrial Parks · Smart Buildings'
    },
    {
      id: '02',
      name: isEn ? 'Bot Management' : 'Quản Trị & Ngăn Chặn Bot',
      category: 'ops',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Distinguishes good bots, bad bots, and genuine humans — protecting digital APIs and web apps from fraud and credential abuse.'
        : 'Phân loại chính xác bot tốt, bot xấu và người dùng thật — bảo vệ website, API khỏi gian lận và scraping mà không gây gián đoạn.',
      details: isEn
        ? [
            'Behavioral biometric fingerprinting captured non-intrusively upon initial connection',
            'Dynamic machine learning score filtering malicious web scrapers and credential stuffers',
            'Flexible policy enforcement: Hard block, adaptive rate-limiting, or invisible challenges',
            'Zero latency penalty on payment checkouts or genuine buyer session conversion'
          ]
        : [
            'Thu thập dấu vân tay hành vi ngay khi truy cập nền tảng',
            'AI chấm điểm liên tục để lọc bot quét dữ liệu độc hại',
            'Ngăn chặn linh hoạt: Chặn, bóp băng thông hoặc thử thách traffic khả nghi',
            'Không ảnh hưởng tốc độ tải trang và trải nghiệm thanh toán của khách hàng'
          ],
      deployedFor: 'E-commerce · Banking APIs · Media Platforms'
    },
    {
      id: '03',
      name: isEn ? 'Smart Supermarket Platform' : 'Nền Tảng Siêu Thị Thông Minh',
      category: 'ops',
      icon: <Store className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Centralized retail intelligence: Enhancing store operations, safety, and transforming foot-traffic behaviors into executive decisions.'
        : 'Nền tảng quản lý siêu thị tập trung: Tối ưu vận hành, an ninh và chuyển đổi hành vi mua sắm thành dữ liệu quyết định theo thời gian thực.',
      details: isEn
        ? [
            'Foot-traffic density mapping, dwell times, and checkout queue length optimization',
            'Shopper behavior heatmaps directing shelf layout strategy and promotional end-caps',
            'Cashier customer engagement monitoring with real-time service anomaly detection',
            'Root-cause diagnostic dashboards correlating revenue variances by branch location'
          ]
        : [
            'Bản đồ mật độ di chuyển, thời gian dừng và độ dài hàng đợi thanh toán',
            'Bản đồ nhiệt (Heatmap) hành vi giúp quy hoạch quầy kệ tối ưu doanh số',
            'Đánh giá thái độ phục vụ của nhân viên và cảnh báo bất thường tức thì',
            'Dashboard chẩn đoán nguyên nhân biến động doanh số theo từng chi nhánh'
          ],
      deployedFor: 'Supermarket Chains · Retail Flagships · Convenience Stores'
    },
    {
      id: '04',
      name: isEn ? 'Smart Factory (iMES)' : 'Nhà Máy Thông Minh (iMES)',
      category: 'ops',
      icon: <Factory className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Intelligent manufacturing execution system uniting IoT sensors, AI inspection, and telemetry to eradicate factory downtime.'
        : 'Hệ thống điều hành sản xuất thông minh kết nối IoT, AI và phân tích thời gian thực vào dây chuyền nhằm triệt tiêu thời gian chết máy.',
      details: isEn
        ? [
            'Overall Equipment Effectiveness (OEE) continuous monitoring minimizing emergency stops',
            'High-speed automated surface visual defect detection deployed along conveyor belts',
            'Predictive machine maintenance analyzing acoustic, vibration, and thermal harmonics',
            'Bidirectional data pipeline integrated with legacy ERP/MES enterprise backbones'
          ]
        : [
            'Giám sát hiệu suất thiết bị OEE và cắt giảm thời gian dừng máy đột xuất',
            'Kiểm soát chất lượng bằng thị giác máy tính tốc độ cao trên băng chuyền',
            'Bảo trì dự đoán từ dữ liệu cảm biến rung, nhiệt độ và dòng điện',
            'Kết nối thông suốt hai chiều với hệ thống ERP/MRP hiện hữu'
          ],
      deployedFor: 'Industrial Manufacturing · Assembly Lines · Electronics'
    },
    {
      id: '05',
      name: isEn ? 'Chat & Call Virtual Assistant' : 'Trợ Lý Ảo Chat & Voice Thoại',
      category: 'ops',
      icon: <Headphones className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? '24/7 autonomous multimodal assistant over text and voice. Explains products, qualifies buyers, and handoffs with complete context.'
        : 'Trợ lý ảo thông minh 24/7 trên cả chat và thoại. Giải đáp sản phẩm, sàng lọc khách hàng tiềm năng và chuyển tiếp liền mạch với đầy đủ ngữ cảnh.',
      details: isEn
        ? [
            'Omnichannel session persistence retaining conversational memory across touches',
            'Natural speech recognition tuned for Vietnamese multi-regional dialects and idioms',
            'Human-like responsive tone mirroring seasoned brand concierge specialists',
            'Successfully deployed across Trung Nguyen Legend Café flagship chains'
          ]
        : [
            'Ghi nhớ ngữ cảnh đa kênh xuyên suốt lịch sử tương tác của người dùng',
            'Xử lý ngôn ngữ tự nhiên linh hoạt theo vùng miền và khẩu âm',
            'Phản hồi sinh động, tự nhiên như chuyên viên tư vấn giàu kinh nghiệm',
            'Đã triển khai thành công cho chuỗi café Trung Nguyên Legend'
          ],
      deployedFor: 'Retail · Banking · Real Estate · Healthcare · Hospitality · Education'
    },
    {
      id: '06',
      name: isEn ? 'AI Chatbot Assistant' : 'AI Chatbot Tự Động Hóa',
      category: 'ops',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Automated 24/7 intelligent customer dialogue trained on corporate guidelines, dispatching support tickets automatically.'
        : 'Tự động hóa phản hồi thông minh 24/7 theo kịch bản doanh nghiệp, cá nhân hóa nội dung và tự tạo ticket hỗ trợ kỹ thuật.',
      details: isEn
        ? [
            'Trained directly on internal corporate docs, catalogues, and SOP guidelines',
            'Autonomous intent classification and calendar consultation booking',
            'Multilingual real-time translation for international customer inquiries',
            'Instant warm transfer to live specialist when handling escalated disputes'
          ]
        : [
            'Huấn luyện trên tài liệu, danh mục sản phẩm và quy trình nội bộ',
            'Tự động phân loại nhu cầu và xếp lịch hẹn tư vấn',
            'Hỗ trợ đa ngôn ngữ với dịch thuật thời gian thực',
            'Chuyển giao tức thì cho nhân viên khi gặp trường hợp phức tạp'
          ],
      deployedFor: 'Customer Support · Sales Inquiries · Helpdesks'
    },
    {
      id: '07',
      name: isEn ? 'Omni-Channel Social Chat' : 'Hộp Thư Hợp Nhất Đa Kênh',
      category: 'ops',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Unified social inbox consolidating Zalo OA, Facebook, Instagram, TikTok, and Web Live Chat into a single window for support teams.'
        : 'Hộp thư hợp nhất kết nối Zalo OA, Facebook, Instagram, TikTok và Live Chat về một cửa sổ duy nhất cho đội ngũ tư vấn.',
      details: isEn
        ? [
            'Consolidated inbox syncing all multi-brand conversations in one interface',
            'Smart ticket allocation based on staff competency, active shifts, and lead value',
            'Accessible on web browser consoles and native iOS/Android mobile applications',
            'Immediate visibility into customer purchase history and CRM notes during chat'
          ]
        : [
            'Hộp thư hợp nhất: Đồng bộ mọi cuộc trò chuyện trên một màn hình duy nhất',
            'Phân bổ hội thoại tự động theo kỹ năng và ca trực của tư vấn viên',
            'Hỗ trợ đầy đủ trên cả giao diện Web và ứng dụng di động iOS/Android',
            'Xem trọn vẹn lịch sử giao dịch và hồ sơ khách hàng ngay trong phiên chat'
          ],
      deployedFor: 'Multi-brand Retail · Online Stores · Customer Success'
    },
    {
      id: '08',
      name: isEn ? 'AI Call Center Suite' : 'Tổng Đài Thông Minh AI',
      category: 'ops',
      icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Intelligent telephony: Automated interactive voice routing, recording, real-time audio transcription, and caller sentiment analysis.'
        : 'Hạ tầng tổng đài AI thông minh: Định tuyến cuộc gọi tự động, ghi âm, bóc băng giọng nói theo thời gian thực và phân tích cảm xúc khách hàng.',
      details: isEn
        ? [
            'Conversational natural IVR eliminating rigid keypress menus',
            'Real-time live voice-to-text transcription with copilot script suggestions',
            '100% automated call quality scoring and compliance monitoring',
            'Instant CRM synchronization of call duration, outcome tags, and action items'
          ]
        : [
            'IVR thông minh đối thoại tự nhiên, không cần bấm phím số phức tạp',
            'Chuyển giọng nói thành văn bản trực tiếp và gợi ý kịch bản cho điện thoại viên',
            'Chấm điểm chất lượng cuộc gọi tự động 100% cuộc gọi vào/ra',
            'Đồng bộ tức thì dữ liệu thời lượng, kết quả vào hệ thống CRM'
          ],
      deployedFor: 'Tele-sales · Support Hotlines · Financial Teleservice'
    },

    // --- Marketing, Data Intelligence & Business Platforms (09 - 16) ---
    {
      id: '09',
      name: isEn ? 'Smart CRM & Lead Management' : 'Smart CRM & Quản Trị Khách Hàng',
      category: 'biz',
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Comprehensive lifecycle management from first awareness to brand loyalty via an integrated Single Customer View.'
        : 'Quản trị toàn diện hành trình khách hàng từ lần chạm đầu tiên đến khách hàng trung thành qua Hồ sơ Hợp nhất (Single Customer View).',
      details: isEn
        ? [
            'Unified candidate/buyer identity aggregating Marketing, Tele-sales, and Agency partners',
            'Autonomous lead deduplication, hygiene validation, and predictive conversion scoring',
            'Tracking 5 lifecycle stages: Reach → Engage → Qualify → Consult → Close',
            'Proven deployment at Gia Dinh University: Reduced CAC and personalized advisory'
          ]
        : [
            'Hồ sơ khách hàng duy nhất tổng hợp từ Marketing, Call Center và Đại lý',
            'Quy trình sàng lọc, khử trùng lặp và chấm điểm khách hàng tự động',
            'Theo dõi 5 giai đoạn: Tiếp cận → Tương tác → Thẩm định → Tư vấn → Chốt đơn',
            'Triển khai tại ĐH Gia Định: Tối ưu chi phí tuyển sinh và cá nhân hóa tư vấn'
          ],
      deployedFor: 'Higher Education · Real Estate · Financial Advisory'
    },
    {
      id: '10',
      name: isEn ? 'Personalised Campaigns' : 'Chiến Dịch Cá Nhân Hóa Đa Kênh',
      category: 'biz',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Audience segmentation and automated omnichannel conversion using machine learning propensity models and tailored messaging.'
        : 'Phân khúc, tự động hóa và tối ưu chuyển đổi đa kênh với thuật toán dự đoán hành vi và sinh nội dung cá nhân hóa theo từng người nhận.',
      details: isEn
        ? [
            'Clustering shoppers by purchase propensity and verified taste affinities',
            'Dynamic automated personalization across Email, SMS, and Zalo ZNS channels',
            'Precise incremental revenue attribution for individual campaign creatives',
            'Automated A/B bandit testing selecting top copy variations dynamically'
          ]
        : [
            'Phân cụm khách hàng theo xác suất mua hàng và sở thích thực tế',
            'Tự động cá nhân hóa thông điệp qua Email, SMS, Zalo ZNS',
            'Đo lường doanh thu đóng góp chính xác cho từng nội dung chiến dịch',
            'Tự động chọn phiên bản A/B tối ưu nhất để phân bổ ngân sách'
          ],
      deployedFor: 'Direct-to-Consumer Brands · Subscription Services · Retail'
    },
    {
      id: '11',
      name: isEn ? 'Social Listening Intelligence' : 'Lắng Nghe & Đo Lường Xã Hội',
      category: 'biz',
      icon: <Radio className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'High-throughput crawlers monitoring social platforms, press, and communities, turning public signals into sentiment intelligence.'
        : 'Hệ thống crawler liên tục rà quét mạng xã hội, báo chí và diễn đàn, chuyển hóa dữ liệu công chúng thành báo cáo xu hướng và đo lường sắc thái.',
      details: isEn
        ? [
            'Brand mentions and share of voice telemetry across Facebook, TikTok, YouTube, and news',
            'Early detection of nascent brand reputational risk before viral escalation',
            'Uncovering latent buyer preferences through vector semantic search',
            'Capturing high-intent sales signals the moment users request product recommendations'
          ]
        : [
            'Theo dõi nhắc tên thương hiệu và thị phần thảo luận trên Facebook, TikTok, YouTube',
            'Phát hiện sớm dấu hiệu khủng hoảng truyền thông trước khi lan rộng',
            'Nhận diện nhu cầu tiềm ẩn của khách hàng bằng tìm kiếm ngữ nghĩa',
            'Bắt trọn cơ hội bán hàng ngay khi người dùng bày tỏ ý định mua trên mạng'
          ],
      deployedFor: 'FMCG Brands · PR Agencies · Enterprise Risk Teams'
    },
    {
      id: '12',
      name: isEn ? 'Multimedia Asset Management' : 'Quản Lý Đa Phương Tiện Thông Minh',
      category: 'biz',
      icon: <FolderSearch className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Intelligent corporate vault indexing photos, footage, audio, and documents by deep semantic concepts rather than mere filenames.'
        : 'Kho lưu trữ thông minh đánh chỉ mục hình ảnh, video, âm thanh và tài liệu theo nội dung ngữ nghĩa thực tế thay vì chỉ theo tên file.',
      details: isEn
        ? [
            'Semantic natural language search: Describe remembered video scenes to retrieve exact frames',
            'OCR extraction and intelligent summarization of legal scans and digital contracts',
            'Multidimensional vector indexing: By facial identities, semantic context, and visual tags',
            'Large-scale video parsing accelerating media broadcast production turnaround'
          ]
        : [
            'Tìm kiếm thông minh: Mô tả chi tiết hình ảnh nhớ được để tìm chính xác khung hình',
            'Trích xuất và tóm tắt văn bản thông minh từ tài liệu scan và hợp đồng số',
            'Tìm kiếm đa chiều: Theo ngữ cảnh, khuôn mặt, siêu dữ liệu và nội dung',
            'Phân tích ngữ nghĩa video quy mô lớn phục vụ sản xuất truyền thông'
          ],
      deployedFor: 'Media Production · Legal Firms · Corporate Archives'
    },
    {
      id: '13',
      name: isEn ? 'Multi Social Posting' : 'Đăng Bài Đa Kênh Tự Động',
      category: 'biz',
      icon: <Share2 className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Schedule and publish content simultaneously across Zalo, Facebook, Instagram, and TikTok with an integrated AI generative copywriter.'
        : 'Lên lịch và xuất bản nội dung đa kênh đồng thời lên Zalo, Facebook, Instagram, TikTok từ một giao diện duy nhất với trợ lý viết AI.',
      details: isEn
        ? [
            'Autonomous posting scheduler recommending peak engagement time slots',
            'AI writing assistant adapting tone of voice to each social channel standard',
            'Automated media resizing and aspect ratio adaptation (Reels/Feed/Stories)',
            'Centralized performance dashboard tracking impressions, shares, and clicks'
          ]
        : [
            'Lên lịch đăng bài tự động đề xuất khung giờ tương tác cao nhất',
            'Trợ lý AI tự động điều chỉnh giọng văn phù hợp từng mạng xã hội',
            'Tự động căn chỉnh kích thước hình ảnh và video theo chuẩn từng nền tảng',
            'Báo cáo tổng hợp lượt tiếp cận, tương tác và chia sẻ tập trung'
          ],
      deployedFor: 'Marketing Agencies · Real Estate Agents · Brand Creators'
    },
    {
      id: '14',
      name: isEn ? 'Crisis Management Shield' : 'Kiểm Soát Khủng Hoảng Truyền Thông',
      category: 'biz',
      icon: <AlertTriangle className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Early warning and reputation damage mitigation: Scenario simulations, real-time monitoring, and pre-approved response activations.'
        : 'Cảnh báo sớm và kiểm soát khủng hoảng truyền thông: Lên kế hoạch, theo dõi phản hồi thời gian thực và kích hoạt kịch bản ứng phó kịp thời.',
      details: isEn
        ? [
            'Immediate alert triggers upon abnormal spikes in negative sentiment and hostile keywords',
            'Viral contagion forecasting and objective counter-narrative formulation assistance',
            'Round-the-clock monitoring of key online forums, trade publications, and influencer feeds',
            'Virtual command room coordinating pre-vetted spokesperson releases and PR statements'
          ]
        : [
            'Cảnh báo tức thời khi tần suất từ khóa tiêu cực tăng đột biến',
            'Dự báo xu hướng lan truyền và gợi ý nội dung phản hồi khách quan',
            'Quét liên tục các hội nhóm và trang tin tức trọng điểm',
            'Phòng tác chiến điều phối với thông điệp đã được phê duyệt sẵn'
          ],
      deployedFor: 'Corporate Communications · Public Entities · Consumer Brands'
    },
    {
      id: '15',
      name: isEn ? 'EduTech (Smart LMS)' : 'Nền Tảng Đào Tạo Số (Smart LMS)',
      category: 'biz',
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Next-generation LMS embedded with pervasive AI: Teacher AI copilot, automated lecture slide generation, and intelligent homework grading.'
        : 'Hệ thống quản lý học tập thế hệ mới tích hợp AI toàn diện: Trợ giảng AI Copilot, tự động sinh bài giảng slide/video và chấm điểm thông minh.',
      details: isEn
        ? [
            'AI Teaching Copilot: Benchmarks syllabus progression against lesson pacing in real time',
            'Generates slides, quizzes, and illustrative video materials directly from curriculum files',
            'Automated grading with constructive rationale and institutional plagiarism screening',
            'Private on-premise cloud deployment complying with data sovereignty and Decree 13/2023'
          ]
        : [
            'AI Teaching Copilot: Đối sánh đề cương với tiến độ giảng dạy và phát hiện rủi ro',
            'Tự động sinh slide, bài tập và video minh họa trực tiếp từ giáo trình',
            'Chấm điểm tự động với nhận xét chi tiết và quét kiểm tra đạo văn trước khi công bố',
            'Vận hành trên hạ tầng riêng của nhà trường, tuân thủ Nghị định 13/2023 bảo vệ dữ liệu'
          ],
      deployedFor: 'Universities · K-12 School Systems · Corporate Academies'
    },
    {
      id: '16',
      name: isEn ? 'Human Resource Management (HRMS)' : 'Quản Trị Nhân Sự Toàn Diện (HRMS)',
      category: 'biz',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Recruitment, smart timekeeping, payroll, KPI appraisals, and workforce upskilling co-engineered with Druce & Millennia.'
        : 'Tuyển dụng, chấm công, tính lương, đánh giá KPI và đào tạo nhân sự trên một nền tảng hợp tác chiến lược cùng Druce & Millennia.',
      details: isEn
        ? [
            'AI Job Description generator and semantic candidate CV matchmaking against requirements',
            'Automated interview scheduling and preliminary candidate qualification workflows',
            'Transparent automated timesheets, multi-tiered payroll computation, and KPI dashboards',
            'Prescriptive learning recommendations bridging individual employee skill gaps'
          ]
        : [
            'AI tạo mô tả công việc (JD) và khớp nối ngữ nghĩa hồ sơ ứng viên với vị trí',
            'Tự động xếp lịch phỏng vấn và hỗ trợ sàng lọc sơ bộ ứng viên',
            'Quy trình tự động chấm công, tính lương và đánh giá hiệu suất minh bạch',
            'Gợi ý lộ trình đào tạo nhân sự phù hợp với khoảng trống năng lực'
          ],
      deployedFor: 'Enterprise HR · Growth Tech Companies · Staffing Firms'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <section id="features" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>02</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>{isEn ? '16 Production AI Products · Enterprise Suite' : 'Hệ Sinh Thái 16 Sản Phẩm AI (Full Portfolio)'}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {isEn ? 'Enterprise AI Products in Production' : 'Toàn Bộ 16 Sản Phẩm AI Thương Mại'}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            {isEn
              ? 'Categorized into two mission-critical pillars: 08 operational security platforms and 08 revenue acceleration engines.'
              : 'Chia thành 2 nhóm giải pháp cốt lõi: 08 giải pháp Vận hành, An ninh & Tương tác khách hàng và 08 giải pháp Dữ liệu, Kinh doanh & Tăng trưởng.'}
          </p>
        </div>

        {/* Filter Pills */}
        <ScrollReveal delay={120} distance={16}>
          <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-900 border border-white/10 shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {isEn ? 'All (16 Products)' : 'Tất cả (16)'}
            </button>
            <button
              onClick={() => setActiveCategory('ops')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'ops' 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {isEn ? 'Operations & Security' : 'Vận hành & An ninh'}
            </button>
            <button
              onClick={() => setActiveCategory('biz')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === 'biz' 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {isEn ? 'Marketing & Business' : 'Kinh doanh & Tăng trưởng'}
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Grid of Products */}
      <ScrollReveal delay={180} distance={28}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {filtered.map((prod) => {
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/30'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {prod.icon}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">{prod.id}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1 leading-snug">{prod.name}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{prod.summary}</p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500">
                    {prod.category === 'ops' ? (isEn ? 'Operations & IoT' : 'Vận hành & IoT') : (isEn ? 'Business & Data' : 'Dữ liệu & Kinh doanh')}
                  </span>
                  <span className={`flex items-center gap-1 font-medium ${isSelected ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {isEn ? 'Details' : 'Chi tiết'} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Selected Product Deep Dive Card - Lazy Loaded */}
      <LazyBlock minHeight="420px">
        <ScrollReveal delay={220} distance={32}>
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PRODUCT {selectedProduct.id}
                  </span>
                  {selectedProduct.deployedFor && (
                    <span className="text-xs text-zinc-400">
                      {isEn ? 'Deployed for: ' : 'Lĩnh vực triển khai: '}<strong className="text-zinc-200">{selectedProduct.deployedFor}</strong>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedProduct.name}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProduct.summary}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h5 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {isEn ? 'Core Capabilities & Technical Highlights' : 'Khả năng & Tính năng cốt lõi (Core Capabilities)'}
                  </h5>
                  {selectedProduct.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {/* Brochure Visual Architecture Card */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-950/40 via-zinc-950/80 to-black border border-emerald-500/20 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono text-zinc-300 font-semibold uppercase">
                        {isEn ? 'Enterprise Deployment Spec' : 'Thông Số Triển Khai Doanh Nghiệp'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">PROD-SYS-2026</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-zinc-500 block uppercase">{isEn ? 'Architecture' : 'Kiến trúc'}</span>
                      <span className="text-white font-medium text-[11px]">Microservices / Edge</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-zinc-500 block uppercase">{isEn ? 'Inference Latency' : 'Độ trễ suy luận'}</span>
                      <span className="text-emerald-400 font-mono font-medium text-[11px]">&lt; 15ms P99</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-zinc-500 block uppercase">{isEn ? 'Security Model' : 'Bảo mật dữ liệu'}</span>
                      <span className="text-white font-medium text-[11px]">E2E Encrypted</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-zinc-500 block uppercase">{isEn ? 'Timeline' : 'Thời gian tích hợp'}</span>
                      <span className="text-white font-medium text-[11px]">{isEn ? '2 – 4 Weeks' : '2 – 4 tuần'}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                    {isEn
                      ? 'Turnkey handoff with exhaustive API specs, native SDKs, and dedicated GreenSoftits engineers for 24/7 SLA operations.'
                      : 'Bàn giao đầy đủ tài liệu API, SDK tích hợp và đội ngũ chuyên gia GreenSoftits hỗ trợ vận hành 24/7.'}
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href="#contact"
                    className="w-full py-3 px-5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                  >
                    <span>{isEn ? `Request Demo for ${selectedProduct.name}` : `Yêu cầu Demo ${selectedProduct.name}`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </LazyBlock>
    </section>
  );
};
