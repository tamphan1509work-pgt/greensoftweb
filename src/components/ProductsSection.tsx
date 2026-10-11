import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldAlert, Bot, Store, Factory, Headphones, MessageSquare, 
  MessageCircle, PhoneCall, Users2, Target, Radio, FolderSearch, 
  Share2, AlertTriangle, GraduationCap, Briefcase, ArrowRight, Check,
  Building2, TrendingUp, Home, Sparkles, ChevronLeft, ChevronRight, Pause, Play
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Language } from '../i18n/translations';

// Product illustrations cropped from the GreenSoft Company Brochure 2026, keyed by product slug
const PRODUCT_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>('../assets/products/*.webp', { eager: true, query: '?url', import: 'default' }),
  ).map(([path, url]) => [path.split('/').pop()!.replace(/\.webp$/, ''), url]),
);

interface ProductItem {
  id: string;
  /** Matches the illustration file name in src/assets/products */
  slug: string;
  name: string;
  category: 'ops' | 'biz';
  icon: React.ReactNode;
  summary: string;
  details: string[];
  deployedFor?: string;
}

/** How long each product stays on screen before auto-advancing */
const SLIDE_MS = 7000;
const TICK_MS = 100;

interface ProductsSectionProps {
  lang?: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ lang = 'VI' }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ops' | 'biz'>('all');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false); // explicit pause button
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [elapsed, setElapsed] = useState(0); // ms spent on the current slide while running
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isEn = lang === 'EN';

  const products: ProductItem[] = [
    // --- Operations, Security & Customer Engagement (brochure p.05) ---
    {
      id: '01',
      slug: 'anomaly-detection',
      name: isEn ? 'Anomaly Detection with IoT' : 'Phát Hiện Bất Thường với IoT',
      category: 'ops',
      icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Urban and industrial security that watches everything at once: IoT devices and computer vision feed one platform that monitors in real time, predicts what is about to go wrong and responds automatically.'
        : 'Giải pháp an ninh đô thị và công nghiệp giám sát mọi thứ cùng lúc: thiết bị IoT và thị giác máy tính đổ về một nền tảng duy nhất để theo dõi thời gian thực, dự báo sự cố và tự động phản ứng.',
      details: isEn
        ? [
            'Human & object detection: live identification and tracking of people, vehicles and objects across every camera',
            'Fire & smoke detection straight from existing camera feeds, long before a conventional sensor would react',
            'Multi-sensor fusion: temperature, noise, motion and CO₂ readings correlated with the video stream',
            'Automated escalation: alerts pushed to the monitoring centre and mobile app the moment a rule is breached'
          ]
        : [
            'Nhận diện người & vật thể: định danh và theo dõi người, phương tiện, đồ vật trên mọi camera',
            'Phát hiện khói & lửa ngay từ camera sẵn có, sớm hơn nhiều so với cảm biến truyền thống',
            'Hợp nhất đa cảm biến: nhiệt độ, tiếng ồn, chuyển động và CO₂ đối chiếu cùng luồng video',
            'Tự động leo thang cảnh báo đến trung tâm giám sát và ứng dụng di động ngay khi vi phạm quy tắc'
          ],
      deployedFor: isEn ? 'Smart City · Industrial Parks · Buildings' : 'Đô thị thông minh · Khu công nghiệp · Tòa nhà'
    },
    {
      id: '02',
      slug: 'bot-management',
      name: 'Bot Management',
      category: 'ops',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Tells good bots, bad bots and real people apart — protecting websites, APIs and applications from fraud, scraping and credential stuffing without adding friction for genuine customers.'
        : 'Phân biệt bot tốt, bot xấu và người dùng thật — bảo vệ website, API và ứng dụng khỏi gian lận, thu thập dữ liệu trái phép và tấn công đăng nhập mà không làm chậm khách hàng thật.',
      details: isEn
        ? [
            'Detect: behavioural fingerprinting flags automation the moment it touches your platform',
            'Analyse: AI scoring separates good bots, bad bots and humans, and keeps learning',
            'Mitigate: block, throttle or challenge suspicious traffic while legitimate access flows on',
            'Protects against DDoS, credential stuffing and data scraping'
          ]
        : [
            'Phát hiện: dấu vân tay hành vi nhận diện tự động hóa ngay khi chạm vào nền tảng',
            'Phân tích: AI chấm điểm, tách bạch bot tốt, bot xấu và người dùng thật, liên tục tự học',
            'Ngăn chặn: chặn, giới hạn hoặc thử thách lưu lượng đáng ngờ, truy cập hợp lệ vẫn thông suốt',
            'Bảo vệ trước DDoS, tấn công dò mật khẩu (credential stuffing) và cào dữ liệu'
          ],
      deployedFor: isEn ? 'E-commerce · Banking · Online Platforms' : 'Thương mại điện tử · Ngân hàng · Nền tảng trực tuyến'
    },
    {
      id: '03',
      slug: 'smart-supermarket',
      name: isEn ? 'Smart Supermarket' : 'Siêu Thị Thông Minh AI & IoT',
      category: 'ops',
      icon: <Store className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'One platform that optimises operations, hardens security and turns shopper behaviour into data-driven decisions — across every branch, in real time.'
        : 'Một nền tảng tập trung giúp tối ưu vận hành, tăng cường an ninh và biến hành vi mua sắm thành quyết định dựa trên dữ liệu — trên toàn chuỗi cửa hàng, theo thời gian thực.',
      details: isEn
        ? [
            'Face recognition for staff check-in/out and returning customers from a single camera',
            'Behaviour heatmaps: footpaths, dwell time and queue length that drive shelf placement and floor plans',
            'Anomaly recognition and early warnings pushed to the monitoring centre and operations app',
            'Diagnostic & predictive analytics: explain sales drops and forecast demand, traffic and stock needs'
          ]
        : [
            'Nhận diện khuôn mặt: chấm công nhân viên và nhận biết khách hàng quay lại chỉ với một camera',
            'Bản đồ nhiệt hành vi: lối đi, thời gian dừng, độ dài hàng chờ để tối ưu kệ hàng và mặt bằng',
            'Nhận diện bất thường và cảnh báo sớm đến trung tâm giám sát và ứng dụng vận hành',
            'Phân tích chẩn đoán & dự báo: giải thích doanh số sụt giảm, dự báo nhu cầu, lưu lượng và tồn kho'
          ],
      deployedFor: isEn ? 'Retail chains · Supermarkets · Convenience stores' : 'Chuỗi bán lẻ · Siêu thị · Cửa hàng tiện lợi'
    },
    {
      id: '04',
      slug: 'smart-factory',
      name: isEn ? 'Smart Factory (iMES)' : 'Nhà Máy Thông Minh (iMES)',
      category: 'ops',
      icon: <Factory className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'An intelligent manufacturing execution system that joins IoT, AI, automation and real-time analytics to the factory floor — linking planning (MRP/ERP), execution (MES) and control (PLC) layers.'
        : 'Hệ thống điều hành sản xuất thông minh kết nối IoT, AI, tự động hóa và phân tích thời gian thực vào xưởng sản xuất — liên thông tầng kế hoạch (MRP/ERP), điều hành (MES) và điều khiển (PLC).',
      details: isEn
        ? [
            'Monitor equipment performance and reduce downtime',
            'Tighten quality control with automated inspection',
            'Predictive maintenance from live sensor data',
            'Lower operating cost with a data-driven production line'
          ]
        : [
            'Giám sát hiệu suất thiết bị và giảm thời gian dừng máy',
            'Siết chặt kiểm soát chất lượng với kiểm tra tự động',
            'Bảo trì dự đoán từ dữ liệu cảm biến trực tiếp',
            'Giảm chi phí vận hành với dây chuyền vận hành bằng dữ liệu'
          ],
      deployedFor: isEn ? 'Manufacturing · Industrial plants' : 'Sản xuất · Nhà máy công nghiệp'
    },
    {
      id: '05',
      slug: 'virtual-assistant',
      name: isEn ? 'GenAI Chat & Call Virtual Assistant' : 'Trợ Lý Ảo GenAI Chat & Gọi Thoại',
      category: 'ops',
      icon: <Headphones className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'A human-like assistant that works every hour of the day, on chat and on the phone. It answers product and company questions, qualifies buyers and hands over to your team with the full conversation already understood.'
        : 'Trợ lý ảo như người thật, làm việc 24/7 qua chat và điện thoại: trả lời câu hỏi về sản phẩm, doanh nghiệp, sàng lọc khách hàng tiềm năng và chuyển cho đội ngũ kèm toàn bộ ngữ cảnh hội thoại.',
      details: isEn
        ? [
            'Contextual awareness: connects conversations with context and remembers previous interactions',
            'Natural language understanding of varied speech and text, replying with what is actually relevant',
            'Creative responses that keep the conversation fluid and natural',
            'Continuous learning: gains insight from every interaction and improves with each use'
          ]
        : [
            'Hiểu ngữ cảnh: kết nối hội thoại và ghi nhớ các tương tác trước đó',
            'Hiểu ngôn ngữ tự nhiên qua giọng nói và văn bản, phản hồi đúng trọng tâm',
            'Phản hồi sáng tạo giúp cuộc trò chuyện tự nhiên, trôi chảy',
            'Liên tục học hỏi từ mỗi tương tác và cải thiện sau mỗi lần sử dụng'
          ],
      deployedFor: isEn ? 'Retail · Banking · Real estate · Healthcare · Hospitality · Education' : 'Bán lẻ · Ngân hàng · Bất động sản · Y tế · Khách sạn · Giáo dục'
    },
    {
      id: '06',
      slug: 'ai-chatbot',
      name: 'AI Chatbot',
      category: 'ops',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'AI playbook automation with personalised replies, 24/7 — engaging every customer instantly on web and mobile and capturing leads while your team is offline.'
        : 'Tự động hóa kịch bản tư vấn bằng AI với phản hồi cá nhân hóa 24/7 — tương tác tức thì với khách hàng trên web và di động, ghi nhận khách hàng tiềm năng kể cả ngoài giờ làm việc.',
      details: isEn
        ? [
            'AI playbooks that automate consultation scenarios end to end',
            'Personalised replies based on each customer’s profile and history',
            'Available 24/7 on website, mobile app and social channels',
            'Seamless handover to a human consultant with the full conversation'
          ]
        : [
            'Kịch bản (playbook) AI tự động hóa toàn bộ quy trình tư vấn',
            'Phản hồi cá nhân hóa theo hồ sơ và lịch sử của từng khách hàng',
            'Hoạt động 24/7 trên website, ứng dụng di động và mạng xã hội',
            'Chuyển tiếp liền mạch cho tư vấn viên kèm toàn bộ nội dung hội thoại'
          ],
      deployedFor: isEn ? 'Education · Real estate · Retail' : 'Giáo dục · Bất động sản · Bán lẻ'
    },
    {
      id: '07',
      slug: 'omni-channel-chat',
      name: isEn ? 'Omni-Channel Social Chat' : 'Hộp Thư Hợp Nhất Đa Kênh',
      category: 'ops',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Facebook, Zalo, Instagram, TikTok, live chat and the phone line — handled by one team, in one window, with the full customer context beside every conversation.'
        : 'Facebook, Zalo, Instagram, TikTok, live chat và tổng đài — được một đội ngũ xử lý trên cùng một màn hình, luôn kèm đầy đủ thông tin khách hàng bên cạnh mỗi cuộc hội thoại.',
      details: isEn
        ? [
            'Unified inbox: every channel and every conversation in one place',
            'Automated allocation: customisable rules route each customer to the right consultation group',
            'Live chat with the full customer profile and history',
            'Agents work from the desktop console or the mobile app'
          ]
        : [
            'Hộp thư hợp nhất: mọi kênh, mọi cuộc hội thoại ở cùng một nơi',
            'Tự động phân bổ: quy tắc tùy chỉnh chuyển khách hàng đến đúng nhóm tư vấn',
            'Chat trực tiếp kèm đầy đủ hồ sơ và lịch sử khách hàng',
            'Nhân viên làm việc trên máy tính hoặc ứng dụng di động'
          ],
      deployedFor: isEn ? 'Education · Retail · Services' : 'Giáo dục · Bán lẻ · Dịch vụ'
    },
    {
      id: '08',
      slug: 'call-center',
      name: isEn ? 'Call Center' : 'Tổng Đài Thông Minh',
      category: 'ops',
      icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Routing, recording and real-time analytics for every call, connected to the same customer record as your chat channels.'
        : 'Định tuyến, ghi âm và phân tích thời gian thực cho mọi cuộc gọi, liên kết cùng hồ sơ khách hàng với các kênh chat.',
      details: isEn
        ? [
            'Smart routing of inbound calls to the right agent or group',
            'Call recording linked to the customer profile',
            'Real-time analytics on call volume, wait time and agent performance',
            'One record for calls and chats across every channel'
          ]
        : [
            'Định tuyến thông minh cuộc gọi đến đúng nhân viên hoặc nhóm',
            'Ghi âm cuộc gọi gắn với hồ sơ khách hàng',
            'Phân tích thời gian thực về lưu lượng, thời gian chờ và hiệu suất nhân viên',
            'Một hồ sơ duy nhất cho cả cuộc gọi và tin nhắn trên mọi kênh'
          ],
      deployedFor: isEn ? 'Customer service · Sales · Admissions' : 'Chăm sóc khách hàng · Bán hàng · Tuyển sinh'
    },

    // --- Marketing, Data Intelligence & Business Platforms (brochure p.06) ---
    {
      id: '09',
      slug: 'smart-crm',
      name: isEn ? 'Smart CRM & Lead Management' : 'Smart CRM & Quản Lý Khách Hàng Tiềm Năng',
      category: 'biz',
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'One customer record, one journey, one set of numbers — from first touch to loyal customer, with centralised data, automated workflows and live insight.'
        : 'Một hồ sơ khách hàng, một hành trình, một bộ số liệu — từ lần tiếp cận đầu tiên đến khách hàng trung thành, với dữ liệu tập trung, quy trình tự động và báo cáo tức thời.',
      details: isEn
        ? [
            'Single customer view across every channel',
            'Automated lead capture, de-duplication and qualification',
            'Journey stages, tasks and SLAs with clear ownership',
            'KPI dashboards and forecasting — higher conversion at a lower acquisition cost'
          ]
        : [
            'Góc nhìn khách hàng hợp nhất (Single Customer View) trên mọi kênh',
            'Tự động thu thập, loại trùng và đánh giá khách hàng tiềm năng',
            'Giai đoạn hành trình, công việc và SLA với trách nhiệm rõ ràng',
            'Dashboard KPI và dự báo — tăng chuyển đổi, giảm chi phí thu hút khách hàng (CAC)'
          ],
      deployedFor: isEn ? 'Education · Real estate · Enterprise' : 'Giáo dục · Bất động sản · Doanh nghiệp'
    },
    {
      id: '10',
      slug: 'personalised-campaigns',
      name: isEn ? 'Personalised Campaigns' : 'Chiến Dịch Cá Nhân Hóa',
      category: 'biz',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Segment, automate and convert across channels — plan a campaign, publish it everywhere, then follow its performance live.'
        : 'Phân khúc, tự động hóa và chuyển đổi trên đa kênh — lên kế hoạch chiến dịch, đăng tải mọi nơi và theo dõi hiệu quả theo thời gian thực.',
      details: isEn
        ? [
            'Audience segmentation from CRM and behavioural data',
            'Campaign pool with live reach, engagement and conversion',
            'Build and schedule: choose platforms, input content, select accounts, set the posting schedule',
            'Multi-channel orchestration with integrated performance analytics'
          ]
        : [
            'Phân khúc khách hàng từ dữ liệu CRM và hành vi',
            'Kho chiến dịch với số liệu tiếp cận, tương tác và chuyển đổi trực tiếp',
            'Tạo và lên lịch: chọn nền tảng, nhập nội dung, chọn tài khoản, đặt lịch đăng',
            'Điều phối đa kênh tích hợp phân tích hiệu quả'
          ],
      deployedFor: isEn ? 'Marketing teams · Retail · Real estate' : 'Đội ngũ Marketing · Bán lẻ · Bất động sản'
    },
    {
      id: '11',
      slug: 'social-listening',
      name: 'Social Listening',
      category: 'biz',
      icon: <Radio className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Millions of public conversations, read continuously. Crawlers and language models monitor social platforms, news and forums, then turn the noise into sentiment, trends and entities you can act on — in real time.'
        : 'Đọc liên tục hàng triệu cuộc hội thoại công khai. Hệ thống thu thập và mô hình ngôn ngữ theo dõi mạng xã hội, báo chí, diễn đàn rồi chuyển thành cảm xúc, xu hướng và đối tượng có thể hành động ngay — theo thời gian thực.',
      details: isEn
        ? [
            'Track brand mentions and share of voice across channels',
            'Analyse sentiment and detect communication crises early',
            'Identify customer needs and emerging market trends',
            'Correlate entities with face ID and vector search; surface leads the moment intent appears'
          ]
        : [
            'Theo dõi lượt nhắc thương hiệu và thị phần thảo luận trên các kênh',
            'Phân tích cảm xúc và phát hiện sớm khủng hoảng truyền thông',
            'Nắm bắt nhu cầu khách hàng và xu hướng thị trường mới',
            'Liên kết đối tượng bằng nhận diện khuôn mặt và tìm kiếm vector; phát hiện khách hàng tiềm năng ngay khi có ý định'
          ],
      deployedFor: isEn ? 'Brands · Agencies · Public sector' : 'Thương hiệu · Agency · Khối công'
    },
    {
      id: '12',
      slug: 'multimedia-management',
      name: isEn ? 'Multimedia Management' : 'Quản Lý Đa Phương Tiện',
      category: 'biz',
      icon: <FolderSearch className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'A single place for every file your organisation produces. Images, video, audio and documents are indexed by content — so a search for “a man in a white shirt” returns the right frame.'
        : 'Một nơi duy nhất cho mọi tệp tin của doanh nghiệp. Hình ảnh, video, âm thanh và tài liệu được lập chỉ mục theo nội dung — tìm “người đàn ông áo sơ mi trắng” sẽ ra đúng khung hình.',
      details: isEn
        ? [
            'Smart context search: describe what you remember and it finds the asset',
            'Search by context, file name, face name, face image, metadata or content',
            'Document intelligence: summarise, extract and compare an original against its scan',
            'Frame-level video and media indexing across the whole library'
          ]
        : [
            'Tìm kiếm theo ngữ cảnh: mô tả điều bạn nhớ, hệ thống tìm ra tệp tin',
            'Tìm theo ngữ cảnh, tên tệp, tên người, ảnh khuôn mặt, metadata hoặc nội dung',
            'Xử lý tài liệu thông minh: tóm tắt, trích xuất và đối chiếu bản gốc với bản scan',
            'Lập chỉ mục video theo từng khung hình trên toàn bộ thư viện'
          ],
      deployedFor: isEn ? 'Media · Government · Enterprise archives' : 'Truyền thông · Cơ quan nhà nước · Lưu trữ doanh nghiệp'
    },
    {
      id: '13',
      slug: 'multi-social-posting',
      name: 'Multi Social Posting',
      category: 'biz',
      icon: <Share2 className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Publish and schedule from a single screen: link your social accounts, draft posts with AI suggestions, post to every platform at once and review results with AI insights.'
        : 'Đăng và lên lịch bài viết từ một màn hình: liên kết tài khoản mạng xã hội, soạn bài với gợi ý từ AI, đăng đồng loạt lên mọi nền tảng và xem kết quả kèm phân tích AI.',
      details: isEn
        ? [
            'Link Zalo, Facebook, Instagram, TikTok and websites in one place',
            'Draft posts with AI suggestions, including content from linked product listings',
            'Multi-platform posting and scheduling in one step',
            'Results dashboard with AI insights per post'
          ]
        : [
            'Liên kết Zalo, Facebook, Instagram, TikTok và website ở một nơi',
            'Soạn bài với gợi ý AI, lấy nội dung từ sản phẩm đã liên kết',
            'Đăng và lên lịch đồng loạt trên nhiều nền tảng chỉ với một thao tác',
            'Xem kết quả từng bài viết kèm phân tích từ AI'
          ],
      deployedFor: isEn ? 'Real estate agents · Retail · SMEs' : 'Môi giới bất động sản · Bán lẻ · Doanh nghiệp SME'
    },
    {
      id: '14',
      slug: 'crisis-management',
      name: isEn ? 'Crisis Management' : 'Quản Lý Khủng Hoảng Truyền Thông',
      category: 'biz',
      icon: <AlertTriangle className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Detect and defuse negative coverage early — watch the response to every campaign and step in the moment sentiment turns.'
        : 'Phát hiện và xử lý sớm thông tin tiêu cực — theo dõi phản hồi của từng chiến dịch và can thiệp ngay khi dư luận chuyển hướng.',
      details: isEn
        ? [
            'Group monitoring and scanning across communities and pages',
            'Early alerts when negative sentiment spikes',
            'Coordinated response from the same console used to publish',
            'Post-crisis reports on reach and sentiment recovery'
          ]
        : [
            'Giám sát và quét các hội nhóm, cộng đồng, fanpage',
            'Cảnh báo sớm khi cảm xúc tiêu cực tăng đột biến',
            'Phối hợp phản hồi ngay trên cùng hệ thống đăng bài',
            'Báo cáo sau khủng hoảng về mức độ lan truyền và phục hồi hình ảnh'
          ],
      deployedFor: isEn ? 'Brands · PR agencies · Public figures' : 'Thương hiệu · Agency PR · Người nổi tiếng'
    },
    {
      id: '15',
      slug: 'edutech',
      name: 'EduTech',
      category: 'biz',
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'A next-generation LMS with AI across teaching — from smart reminders and lecture authoring to approval before publishing to students — built on Moodle 5 for Vietnamese universities.'
        : 'Nền tảng LMS thế hệ mới tích hợp AI xuyên suốt hoạt động giảng dạy — từ nhắc việc thông minh, soạn bài giảng đến phê duyệt trước khi xuất bản cho sinh viên — mở rộng từ Moodle 5 cho đại học Việt Nam.',
      details: isEn
        ? [
            'AI Teaching Copilot: compares the syllabus with actual teaching and flags risks for lecturers',
            'Multimedia lecture authoring: AI-generated slides, videos and labs from the course outline',
            'Smart grading with rubrics, AI-suggested scores and plagiarism warnings',
            'AI teaching-quality review; data kept on the school’s own infrastructure (Decree 13/2023)'
          ]
        : [
            'AI Teaching Copilot: đối chiếu đề cương với thực tế giảng dạy, tự sinh việc cần làm và cảnh báo rủi ro',
            'Soạn bài giảng đa phương tiện: AI tạo Slide, Video, Bài thực hành từ đề cương môn học',
            'Chấm bài thông minh: rubric chi tiết, điểm gợi ý từ AI và cảnh báo đạo văn',
            'Đánh giá chất lượng giảng dạy bằng AI; dữ liệu lưu tại hạ tầng riêng của trường, tuân thủ Nghị định 13/2023'
          ],
      deployedFor: isEn ? 'Universities · Colleges · Training centres' : 'Đại học · Cao đẳng · Trung tâm đào tạo'
    },
    {
      id: '16',
      slug: 'hrms',
      name: 'HRMS',
      category: 'biz',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Recruitment, attendance, payroll, performance and training on one platform — built with Druce and Millennia.'
        : 'Tuyển dụng, chấm công, tính lương, đánh giá hiệu suất và đào tạo trên một nền tảng — xây dựng cùng Druce và Millennia.',
      details: isEn
        ? [
            'Job description management, generated with AI',
            'Candidate profiles with AI CV scoring',
            'AI interview scheduling',
            'Attendance, payroll, performance and training in one system'
          ]
        : [
            'Quản lý mô tả công việc (JD) được tạo bằng AI',
            'Hồ sơ ứng viên và chấm điểm CV bằng AI',
            'Tự động xếp lịch phỏng vấn bằng AI',
            'Chấm công, tính lương, đánh giá hiệu suất và đào tạo trên cùng hệ thống'
          ],
      deployedFor: isEn ? 'Enterprise HR · Education groups' : 'Nhân sự doanh nghiệp · Tập đoàn giáo dục'
    },
    {
      id: '17',
      slug: 'property-management',
      name: isEn ? 'Property Management' : 'Quản Lý Bất Động Sản',
      category: 'biz',
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'A proptech ecosystem — business app, customer app and merchant app on one platform — for portfolio, pricing and owner–buyer matching. Delivered for Masterise Homes in Vietnam and Druce in the UK.'
        : 'Hệ sinh thái proptech — Biz App, Customer App và Merchant App trên cùng nền tảng — quản lý danh mục, giá bán và kết nối chủ nhà với người mua. Đã triển khai cho Masterise Homes (Việt Nam) và Druce (Anh).',
      details: isEn
        ? [
            'Centralised inventory with lifecycle tracking, ownership insight and real-time availability',
            'Lead & KPI management: multi-channel lead scoring, smart assignment, commission and revenue forecasting',
            'Integrated Smart CRM, CMS, accounting, event management and presales modules',
            'Customer app for property discovery and services; merchant app for partners and suppliers'
          ]
        : [
            'Quản lý giỏ hàng tập trung, theo dõi vòng đời, chủ sở hữu và tình trạng trống theo thời gian thực',
            'Quản lý khách hàng tiềm năng & KPI: chấm điểm đa kênh, phân bổ thông minh, dự báo hoa hồng và doanh thu',
            'Tích hợp Smart CRM, CMS, Kế toán, Quản lý sự kiện và Presales',
            'App khách hàng tìm kiếm bất động sản và dịch vụ; App đối tác cho nhà cung cấp'
          ],
      deployedFor: 'Masterise Homes · Druce (UK)'
    },
    {
      id: '18',
      slug: 'ai-valuation',
      name: isEn ? 'AI Valuation' : 'Định Giá Bất Động Sản Bằng AI',
      category: 'biz',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Live market data and predictive pricing models give confident pricing and negotiation positions for every unit.'
        : 'Dữ liệu thị trường trực tiếp kết hợp mô hình dự báo giá giúp định giá và đàm phán tự tin cho từng sản phẩm.',
      details: isEn
        ? [
            'Live market data feeding predictive pricing models',
            'Price recommendations per unit, floor and view',
            'Negotiation ranges for sales teams and agents',
            'Built into the business app alongside inventory and sales plans'
          ]
        : [
            'Dữ liệu thị trường trực tiếp đưa vào mô hình dự báo giá',
            'Gợi ý giá cho từng căn theo tầng, hướng và tầm nhìn',
            'Khung giá đàm phán cho đội ngũ kinh doanh và môi giới',
            'Tích hợp sẵn trong Biz App cùng giỏ hàng và bảng hàng'
          ],
      deployedFor: isEn ? 'Developers · Brokerages' : 'Chủ đầu tư · Sàn giao dịch'
    },
    {
      id: '19',
      slug: 'home-toolkits',
      name: 'Home Toolkits',
      category: 'biz',
      icon: <Home className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? '2D/3D floor plans, 360° virtual tours and AI-enhanced listing imagery that help buyers experience a property before they visit.'
        : 'Mặt bằng 2D/3D, tham quan ảo 360° và hình ảnh tin đăng được AI nâng cấp giúp khách hàng trải nghiệm bất động sản trước khi đến xem trực tiếp.',
      details: isEn
        ? [
            '2D/3D floor plans for every unit',
            '360° virtual tours inside the customer app',
            'AI-enhanced listing imagery',
            'Shareable listings that feed straight into multi-channel posting'
          ]
        : [
            'Mặt bằng 2D/3D cho từng căn hộ',
            'Tham quan ảo 360° ngay trong ứng dụng khách hàng',
            'Hình ảnh tin đăng được AI nâng cấp',
            'Chia sẻ tin đăng và đăng đa kênh chỉ với một thao tác'
          ],
      deployedFor: isEn ? 'Developers · Agents · Property portals' : 'Chủ đầu tư · Môi giới · Cổng thông tin bất động sản'
    },
    {
      id: '20',
      slug: 'custom-ai',
      name: isEn ? 'Custom AI Solutions' : 'Giải Pháp AI Theo Yêu Cầu',
      category: 'biz',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      summary: isEn
        ? 'Your workflow, your data, our models — end to end. We combine generative AI, large language models and IoT into products that are deployed, measured and improved.'
        : 'Quy trình của bạn, dữ liệu của bạn, mô hình của chúng tôi — trọn gói từ đầu đến cuối. Kết hợp Generative AI, LLM và IoT thành sản phẩm được triển khai, đo lường và liên tục cải tiến.',
      details: isEn
        ? [
            'Retrieval-augmented generation (RAG) over your own documents, tickets and conversations',
            'Domain fine-tuning and vector & semantic search',
            'Computer vision at the edge and real-time IoT monitoring',
            'Delivered by AI experts and engineers from discovery to day-to-day operations'
          ]
        : [
            'RAG trên chính tài liệu, ticket và hội thoại của doanh nghiệp',
            'Tinh chỉnh mô hình theo lĩnh vực, tìm kiếm vector & ngữ nghĩa',
            'Thị giác máy tính tại biên (edge) và giám sát IoT thời gian thực',
            'Chuyên gia và kỹ sư AI đồng hành từ khảo sát đến vận hành hằng ngày'
          ],
      deployedFor: isEn ? 'Any industry' : 'Mọi lĩnh vực'
    }
  ];

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);
  const total = filtered.length;
  const current = filtered[Math.min(index, total - 1)];
  const isRunning = !isPaused && !isHovered && isInView;

  const goTo = (next: number, dir: 1 | -1) => {
    setDirection(dir);
    setElapsed(0);
    setIndex(((next % total) + total) % total);
  };
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  const changeCategory = (cat: 'all' | 'ops' | 'biz') => {
    setActiveCategory(cat);
    setDirection(1);
    setElapsed(0);
    setIndex(0);
  };

  // Auto-advance timer; pauses on hover, via the pause button or when off screen
  useEffect(() => {
    if (!isRunning) return;
    const t = window.setInterval(() => setElapsed(e => e + TICK_MS), TICK_MS);
    return () => window.clearInterval(t);
  }, [isRunning]);

  useEffect(() => {
    if (elapsed >= SLIDE_MS) next();
  }, [elapsed]);

  // Only auto-advance while the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep the active product chip visible inside the strip (scrolls the strip only, not the page)
  useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (!strip || !chip) return;
    strip.scrollTo({ left: chip.offsetLeft - strip.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' });
  }, [index, activeCategory]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
  };

  const categoryLabel = (cat: 'ops' | 'biz') =>
    cat === 'ops'
      ? (isEn ? 'Operations & Engagement' : 'Vận hành & Tương tác')
      : (isEn ? 'Marketing, Data & Business' : 'Marketing, Dữ liệu & Kinh doanh');

  const tabs: { key: 'all' | 'ops' | 'biz'; label: string }[] = [
    { key: 'all', label: isEn ? 'All · 20' : 'Tất cả · 20' },
    { key: 'ops', label: isEn ? 'Operations · 8' : 'Vận hành · 8' },
    { key: 'biz', label: isEn ? 'Business · 12' : 'Kinh doanh · 12' },
  ];

  return (
    <section ref={sectionRef} id="features" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>02</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>{isEn ? 'Products & Solutions' : 'Sản Phẩm & Giải Pháp'}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {isEn ? <>An AI Ecosystem Built to <span className="text-emerald-400 sm:block">Make It Different</span></> : <>Hệ Sinh Thái AI <span className="text-emerald-400 sm:block">Kiến Tạo Khác Biệt</span></>}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            {isEn
              ? 'Twenty AI products and solutions already running in production — from security and operations to marketing, data and business — on one GreenSoft platform.'
              : '20 sản phẩm và giải pháp AI đã vận hành thực tế — từ an ninh, vận hành đến marketing, dữ liệu và kinh doanh — hội tụ trên một nền tảng GreenSoft duy nhất.'}
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 self-start lg:self-auto" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeCategory === tab.key}
              onClick={() => changeCategory(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === tab.key ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <ScrollReveal delay={120} distance={28}>
        {/* Product carousel: one product at a time, auto-advancing */}
        <div
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-black overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
          role="region"
          aria-roledescription="carousel"
          aria-label={isEn ? 'GreenSoft AI products' : 'Sản phẩm AI GreenSoft'}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.14), transparent)' }} aria-hidden="true" />

          <div
            key={`${activeCategory}-${current.id}`}
            className="product-slide relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-5 sm:p-8 lg:p-12"
            style={{ '--slide-from': `${direction * 32}px` } as React.CSSProperties}
            aria-live={isRunning ? 'off' : 'polite'}
          >
            {/* Illustration */}
            <div className="lg:col-span-7 order-1 lg:self-center">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-emerald-950/40">
                <img
                  src={PRODUCT_IMAGES[current.slug]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
                />
                <img
                  src={PRODUCT_IMAGES[current.slug]}
                  alt={current.name}
                  draggable={false}
                  className="product-slide-image relative w-full h-full object-contain p-3 sm:p-4"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 order-2 flex flex-col">
              <span className="self-start mb-5 text-[11px] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 whitespace-nowrap">
                {categoryLabel(current.category)}
              </span>

              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {current.icon}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">{current.name}</h3>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5">{current.summary}</p>

              <ul className="space-y-2.5 mb-6">
                {current.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-zinc-300 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4 pt-5 border-t border-white/10">
                {current.deployedFor && (
                  <div className="text-xs text-zinc-500 flex-1 min-w-0">
                    <span className="block uppercase tracking-wider text-[10px] mb-1">{isEn ? 'Deployed for' : 'Lĩnh vực triển khai'}</span>
                    <span className="text-zinc-200">{current.deployedFor}</span>
                  </div>
                )}
                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  {isEn ? 'Request a demo' : 'Yêu cầu demo'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="relative flex items-center gap-3 sm:gap-4 px-5 sm:px-8 lg:px-12 pb-5 sm:pb-8">
            <button
              onClick={prev}
              aria-label={isEn ? 'Previous product' : 'Sản phẩm trước'}
              className="w-11 h-11 shrink-0 rounded-full border border-white/15 bg-white/[0.03] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label={isEn ? 'Next product' : 'Sản phẩm tiếp theo'}
              className="w-11 h-11 shrink-0 rounded-full border border-white/15 bg-white/[0.03] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Autoplay progress for the current slide */}
            <div className="flex-1 h-[3px] rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
              <div
                className="h-full bg-emerald-400 rounded-full"
                style={{
                  width: `${Math.min(100, (elapsed / SLIDE_MS) * 100)}%`,
                  transition: elapsed === 0 ? 'none' : `width ${TICK_MS}ms linear`,
                }}
              />
            </div>

            <button
              onClick={() => setIsPaused(p => !p)}
              aria-label={isPaused ? (isEn ? 'Play' : 'Tự động chạy') : (isEn ? 'Pause' : 'Tạm dừng')}
              className="w-9 h-9 shrink-0 rounded-full text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Product strip: jump straight to any product */}
      <div
        ref={stripRef}
        className="mt-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]"
      >
        {filtered.map((prod, i) => (
          <button
            key={prod.id}
            data-index={i}
            onClick={() => goTo(i, i >= index ? 1 : -1)}
            aria-current={i === index}
            className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs transition-colors cursor-pointer whitespace-nowrap ${
              i === index
                ? 'border-emerald-500/50 bg-emerald-500/10 text-white'
                : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/25'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-emerald-400' : 'bg-white/20'}`} aria-hidden="true" />
            {prod.name}
          </button>
        ))}
      </div>
    </section>
  );
};
