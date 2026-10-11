import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Building2, GraduationCap, Coffee, MessageSquare, 
  Armchair, Factory, BookOpen, ShieldCheck, CheckCircle2, ArrowRight, Maximize2, X 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { GeometricDepthBackground } from './GeometricDepthBackground';
import { LazyBlock } from './LazyBlock';
import { DepthParallaxImage } from './DepthParallaxImage';
import { Language } from '../i18n/translations';

// Real project slides (16:9), keyed by solution id; solutions without one keep the stock photo
const SOLUTION_SLIDES: Record<string, string> = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>('../assets/solutions/*.webp', { eager: true, query: '?url', import: 'default' }),
  ).map(([path, url]) => [path.split('/').pop()!.replace(/\.webp$/, ''), url]),
);

interface SolutionsSectionProps {
  lang?: Language;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ lang = 'VI' }) => {
  const [activeSolution, setActiveSolution] = useState<string>('crm');
  const [zoomedSlide, setZoomedSlide] = useState<string | null>(null);
  const isEn = lang === 'EN';

  // Close the slide lightbox with Escape
  useEffect(() => {
    if (!zoomedSlide) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomedSlide(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomedSlide]);

  const solutions = [
    {
      id: 'crm',
      code: 'SOLUTION 01',
      title: 'Smart CRM & Lead Management',
      client: 'Gia Dinh University',
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'Single unified profile, synchronized journey, amplified conversion.'
        : 'Hồ sơ duy nhất, hành trình đồng bộ, chuyển đổi vượt trội.',
      description: isEn
        ? 'Orchestrates the entire student and parent admissions journey from first touchpoint to enrollment via a Single Customer View.'
        : 'Điều phối toàn bộ hành trình trải nghiệm của sinh viên và phụ huynh từ lần chạm đầu tiên đến nhập học thành công qua Hồ sơ Hợp nhất (Single Customer View).',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Smart CRM & Higher Education Admissions Journey Analytics',
      systemTag: 'SINGLE CUSTOMER VIEW',
      journey: isEn 
        ? ['Reach', 'Engage', 'Qualify', 'Consult', 'Enrollment']
        : ['Tiếp cận', 'Tương tác', 'Thẩm định', 'Tư vấn', 'Quyết định'],
      deliveredValues: isEn
        ? [
            'Boost admissions throughput by 35%, drastically lowering Customer Acquisition Cost (CAC)',
            'Centralized candidate records across Digital Marketing, Call Center, and campus events',
            'Real-time automated consultation guidance and autonomous KPI benchmarking'
          ]
        : [
            'Tăng 35% hiệu suất tuyển sinh, cắt giảm mạnh chi phí thu hút khách hàng (CAC)',
            'Quản trị hồ sơ tập trung từ Marketing, Call Center và mạng lưới đối tác',
            'Cá nhân hóa tư vấn theo thời gian thực và đo lường KPI tự động'
          ]
    },
    {
      id: 'assistant',
      code: 'SOLUTION 02',
      title: 'GenAI Chat & Call Assistant',
      client: 'Trung Nguyen Legend Café',
      icon: <Coffee className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? '24/7 autonomous conversational agent across chat and voice telephony.'
        : 'Trợ lý ảo thông minh 24/7 trên chat và tổng đài thoại.',
      description: isEn
        ? 'Automatically advises on products, aroma notes, order pricing, qualifies high-intent leads, and handoffs with complete remembered context.'
        : 'Tự động tư vấn sản phẩm, hương vị, giá bán, sàng lọc khách hàng tiềm năng và chuyển giao cho nhân viên với đầy đủ ngữ cảnh được ghi nhớ.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Trung Nguyen Legend Conversational AI & Omnichannel Orders',
      systemTag: 'VOICE & CHATBOT AI',
      journey: isEn
        ? ['Context Memory', 'Voice Processing', 'Reasoning Response', 'Continuous Learning']
        : ['Ghi nhớ ngữ cảnh', 'Xử lý tiếng nói', 'Phản hồi thông minh', 'Tự học liên tục'],
      deliveredValues: isEn
        ? [
            'Omnichannel conversational continuity preserving contextual history across all touchpoints',
            'Natural regional voice synthesis handling multi-dialect Vietnamese accents fluently',
            'Frictionless dialogue recovery with precision self-correction improving each turn'
          ]
        : [
            'Tương tác đa kênh với ngữ cảnh ghi nhớ xuyên suốt lịch sử người dùng',
            'Xử lý giọng nói tự nhiên, linh hoạt theo phương ngữ ba miền',
            'Giữ mạch đối thoại liền mạch, tự động nâng cao độ chính xác sau mỗi ca'
          ]
    },
    {
      id: 'omnichannel',
      code: 'SOLUTION 03',
      title: 'Omni-Channel Social Chat & Call Center',
      client: 'Multi-Brand Enterprises',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'All customer communications converged in a single consolidated window.'
        : 'Mọi kênh giao tiếp hội tụ trong một cửa sổ duy nhất.',
      description: isEn
        ? 'Unified inbox connecting Zalo OA, Facebook, Instagram, TikTok, Web Live Chat, and VoIP telephony into an integrated workspace.'
        : 'Hộp thư hợp nhất kết nối Zalo OA, Facebook, Instagram, TikTok, Live Chat và tổng đài thoại vào một giao diện duy nhất cho đội ngũ chăm sóc.',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Omni-channel Customer Service Hub & Telephony Routing',
      systemTag: 'UNIFIED INBOX',
      journey: isEn
        ? ['Unified Inbox', 'Smart Routing', 'Live Context', 'Web & Mobile Apps']
        : ['Hộp thư hợp nhất', 'Phân bổ tự động', 'Ngữ cảnh trực tiếp', 'Web & Mobile App'],
      deliveredValues: isEn
        ? [
            'Intelligent skill-based routing matching tickets to agent expertise and priority queues',
            'Zero-latency sync across Web dashboards and native iOS/Android mobile apps',
            'Instant order history and CRM customer lookup available directly in chat view'
          ]
        : [
            'Định tuyến thông minh theo kỹ năng tư vấn viên và độ ưu tiên khách hàng',
            'Đồng bộ tức thời trên cả ứng dụng Web và Mobile (iOS/Android)',
            'Tra cứu nhanh lịch sử mua sắm và thông tin khách hàng ngay lúc trò chuyện'
          ]
    },
    {
      id: 'proptech-vn',
      code: 'SOLUTION 04',
      title: 'Proptech Platform Vietnam',
      client: 'Masterise Homes',
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'Comprehensive digital ecosystem transforming high-end real estate operations.'
        : 'Hệ sinh thái số toàn diện chuyển đổi số ngành bất động sản.',
      description: isEn
        ? 'Suite of Biz App, Customer App, and Merchant App serving residents, luxury investors, and service partners with integrated CRM, CMS, and AI analytics.'
        : 'Bộ ứng dụng Biz App, Customer App và Merchant App phục vụ cư dân, nhà đầu tư và đối tác dịch vụ với các phân hệ CRM, CMS và AI phân tích.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Masterise Homes High-End Real Estate Ecosystem & Resident App',
      systemTag: 'PROPTECH ECOSYSTEM',
      journey: isEn
        ? ['Biz App', 'Customer App', 'Merchant App', 'Integrated Modules']
        : ['Biz App', 'Customer App', 'Merchant App', 'Mô-đun tích hợp'],
      deliveredValues: isEn
        ? [
            'Biz App powers inventory management, unit allocations, and sales force enablement',
            'Customer App elevates resident lifestyle, amenity booking, and smart utility billing',
            'Deep integration with Smart CRM, payment gateways, and seamless digital handover'
          ]
        : [
            'Biz App phục vụ quản trị dự án, quỹ căn và hỗ trợ đội ngũ bán hàng',
            'Customer App số hóa trải nghiệm tiện ích nội khu và dịch vụ cư dân',
            'Kết nối Smart CRM, thanh toán, quản lý sự kiện và bàn giao căn hộ'
          ]
    },
    {
      id: 'proptech-uk',
      code: 'SOLUTION 05',
      title: 'Proptech Platform in the UK',
      client: 'Druce UK Portal',
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      tagline: 'Your Property Hub, All in One App — London & Global.',
      description: isEn
        ? 'International-grade proptech platform featuring AI automated valuation, central inventory registry, and 360° virtual VR tour walkthroughs.'
        : 'Nền tảng công nghệ bất động sản chuẩn quốc tế tích hợp định giá bằng AI, kho hàng trung tâm và công cụ thực tế ảo 360° virtual tours.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Druce London & Global Luxury Residential Real Estate Portal',
      systemTag: 'AI VALUATION & VR 360°',
      journey: isEn
        ? ['Lead & KPI Mgmt', 'AI Valuation', '24/7 Assistant', '3D Virtual Tours']
        : ['Quản trị Lead & KPI', 'AI Định giá', 'Chatbot 24/7', 'Tour 3D ảo'],
      deliveredValues: isEn
        ? [
            'AI Valuation: Deep market regression suggesting optimal negotiation price bands',
            'Centralized property repository tracking complete life cycle across territories',
            'Home Toolkits: 3D architectural floor plans and immersive 360° virtual staging'
          ]
        : [
            'AI Valuation: Phân tích thị trường đề xuất biên độ giá đàm phán tối ưu',
            'Kho sản phẩm tập trung theo dõi vòng đời từng bất động sản',
            'Home Toolkits: Bản vẽ mặt bằng 3D và tour tham quan thực tế ảo 360°'
          ]
    },
    {
      id: 'luxury',
      code: 'SOLUTION 06',
      title: 'Digital & AI Luxury Furniture',
      client: 'Modale Luxury Furniture',
      icon: <Armchair className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'End-to-end digital transformation for luxury European furniture & interiors.'
        : 'Chuyển đổi số toàn diện cho thương hiệu nội thất cao cấp.',
      description: isEn
        ? 'Bespoke luxury shopping experience with customer mobile app, AI interior styling assistant, legal e-contracts, and curated product catalogues.'
        : 'Trải nghiệm mua sắm xa xỉ từ ứng dụng khách hàng, trợ lý tư vấn phong cách AI, ký hợp đồng điện tử pháp lý và quản trị danh mục sản phẩm.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Modale Luxury Furniture Interior Design AI & Virtual Staging',
      systemTag: 'LUXURY COMMERCE',
      journey: isEn
        ? ['Customer App', 'AI Stylist 24/7', 'Digital Contracts', 'Catalogue CMS']
        : ['Customer App', 'AI Chatbot 24/7', 'Ký hợp đồng số', 'Quản trị sản phẩm'],
      deliveredValues: isEn
        ? [
            'AI Interior Stylist assisting clients with spatial palettes and virtual room staging',
            'In-app electronic contract signing shortening high-ticket sales closing cycles',
            'Premium inventory tracking and personalized marketing tailored for VIP client cohorts'
          ]
        : [
            'Tư vấn phong cách thiết kế nội thất và phối cảnh phòng khách ảo',
            'Ký hợp đồng điện tử trực tiếp trên app rút ngắn chu kỳ chốt đơn',
            'Quản trị tồn kho cao cấp và tiếp thị cá nhân hóa theo từng khách hàng VIP'
          ]
    },
    {
      id: 'factory',
      code: 'SOLUTION 13',
      title: 'Smart Factory (iMES) & IoT',
      client: 'ImesPro',
      icon: <Factory className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'Intelligent manufacturing converging IoT, AI, and real-time operations analytics.'
        : 'Sản xuất thông minh hợp nhất IoT, AI và phân tích thời gian thực.',
      description: isEn
        ? 'Direct integration from machinery PLC sensors to iMES execution systems and ERP, featuring computer vision for defect inspection and smoke detection.'
        : 'Kết nối trực tiếp từ cảm biến PLC máy móc đến hệ thống điều hành iMES và ERP, tích hợp camera phát hiện khói lửa và khuyết tật sản phẩm.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Smart Factory iMES Industrial Automation & Computer Vision',
      systemTag: 'iMES & EDGE VISION',
      journey: isEn
        ? ['ERP Scheduling', 'iMES Execution', 'PLC Telemetry', 'Edge Vision']
        : ['Kế hoạch ERP', 'Điều hành iMES', 'Điều khiển PLC', 'Thị giác biên'],
      deliveredValues: isEn
        ? [
            'Real-time Overall Equipment Effectiveness (OEE) tracking, mitigating unplanned downtime',
            'Automated surface defect detection via high-speed edge computer vision on conveyor lines',
            'Instant fire and smoke hazard early warnings utilizing existing surveillance infrastructure'
          ]
        : [
            'Theo dõi chỉ số OEE thời gian thực, triệt tiêu thời gian dừng máy đột xuất',
            'Phát hiện lỗi bề mặt sản phẩm bằng thị giác máy tính trên băng chuyền',
            'Cảnh báo sớm khói lửa từ camera hiện hữu mà không cần phần cứng mới'
          ]
    },
    {
      id: 'edutech',
      code: 'SOLUTION 16',
      title: 'Edu Tech (Smart LMS)',
      client: 'NHG & Gia Dinh University',
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      tagline: isEn
        ? 'Intelligent learning platform with embedded AI tutors and academic telemetry.'
        : 'Nền tảng học tập thông minh tích hợp trợ lý AI đồng hành cùng giảng viên & sinh viên.',
      description: isEn
        ? 'AI-powered Learning Management System (LMS) with personalized learning pathways, automated homework evaluation, behavioral analytics, and online proctoring.'
        : 'Hệ thống quản lý học tập thông minh (LMS) tích hợp trợ lý AI cá nhân hóa lộ trình học, tự động chấm điểm bài tập, phân tích hành vi học tập và phát hiện gian lận thi cử trực tuyến.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Edu Tech Smart LMS Learning Management System with AI Tutor',
      systemTag: 'SMART LMS & AI TUTOR',
      journey: isEn
        ? ['Curriculum Ingestion', 'AI Tutor 24/7', 'Online Assessment', 'Competency Analytics']
        : ['Đăng ký khóa học', 'AI Tutor 24/7', 'Thi trực tuyến', 'Đánh giá năng lực'],
      deliveredValues: isEn
        ? [
            '24/7 AI Tutor clarifying concepts and customizing study materials to student pacing',
            'Automated grading, plagiarism detection, and anti-cheating anomaly detection in exams',
            'Actionable predictive dashboards forecasting course completion and retention rates'
          ]
        : [
            'Trợ lý AI đồng hành giải đáp thắc mắc và cá nhân hóa tài liệu theo tốc độ học viên',
            'Tự động chấm bài, phát hiện đạo văn và cảnh báo bất thường trong phòng thi online',
            'Báo cáo phân tích chuyên sâu mức độ tương tác và dự báo tỷ lệ hoàn thành khóa học'
          ]
    }
  ];

  const current = solutions.find(s => s.id === activeSolution) || solutions[0];

  return (
    <section id="solutions" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Depth Layering: Slow-moving abstract geometric elements reacting to scroll */}
      <GeometricDepthBackground variant="solutions" />

      <div className="relative z-10">
        <ScrollReveal delay={0} distance={18} blur={8}>
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
            <span>03</span>
            <span className="w-8 h-[1px] bg-emerald-400/40"></span>
            <span>{isEn ? 'Featured Deployments · Live AI Systems' : 'Giải Pháp Triển Khai Thực Tế (Featured Deployments)'}</span>
          </div>
        </ScrollReveal>

        {/* Heading container widened with max-w-4xl lg:max-w-5xl so "Hành" stays on the same line */}
        <ScrollReveal delay={60} distance={24} blur={10}>
          <div className="max-w-4xl lg:max-w-5xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
              {isEn ? (
                'Enterprise AI Deployments in Active Production'
              ) : (
                <>Những Dự Án AI Thực Tiễn Đang Vận&nbsp;Hành</>
              )}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
              {isEn
                ? 'Proven through high-stakes systems delivered for Masterise Homes, Trung Nguyen Legend, Gia Dinh University, Druce UK, ImesPro, and leading enterprises.'
                : 'Được minh chứng qua các hệ thống lớn đã bàn giao cho Masterise Homes, Trung Nguyên Legend, Gia Định University, Druce UK, ImesPro và các tập đoàn hàng đầu.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs of Solutions */}
        <ScrollReveal delay={120} distance={18} blur={8}>
          {/* All deployments visible at once in a wrapping grid (no horizontal scrolling) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8" role="tablist">
            {solutions.map((sol) => {
              const isActive = activeSolution === sol.id;
              return (
                <button
                  key={sol.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSolution(sol.id)}
                  className={`relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl text-left border transition-all cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                      : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`hidden min-[420px]:flex w-9 h-9 shrink-0 rounded-lg items-center justify-center border ${isActive ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-white/[0.03] border-white/10'}`}>
                    {sol.icon}
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold leading-snug line-clamp-3 lg:line-clamp-2">{sol.title}</span>
                  {isActive && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r bg-emerald-400" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Solution In-Depth Showcase - Lazy Loaded */}
        <LazyBlock minHeight="420px">
          <ScrollReveal delay={180} distance={28} blur={12}>
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/80 border border-white/10 relative overflow-hidden">
              <div key={current.id} className="animate-blur-in grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white/10 text-white">
                      {current.code}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {isEn ? 'Client / Partner: ' : 'Khách hàng / Đối tác: '}{current.client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm font-medium text-emerald-400/90 italic">
                    "{current.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Journey Stages */}
                  <div className="pt-2">
                    <h5 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                      {isEn ? 'Operational Lifecycle Stages' : 'Các giai đoạn trong chu trình (Operational Stages)'}
                    </h5>
                    <div className="flex flex-wrap items-center gap-2">
                      {current.journey.map((step, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                        >
                          {idx + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Delivered Values */}
                  <div className="pt-2 space-y-2">
                    <h5 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      {isEn ? 'Delivered Value & Proven Impact' : 'Giá trị thực tế đem lại (Delivered Values)'}
                    </h5>
                    {current.deliveredValues.map((val, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Preview with Subtle Depth-Parallax */}
                <div className="lg:col-span-5">
                  {SOLUTION_SLIDES[current.id] ? (
                    <figure className="space-y-2.5">
                      <button
                        type="button"
                        onClick={() => setZoomedSlide(SOLUTION_SLIDES[current.id])}
                        className="group relative block w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in bg-zinc-900"
                        aria-label={isEn ? `Enlarge: ${current.title}` : `Phóng to: ${current.title}`}
                      >
                        <img
                          src={SOLUTION_SLIDES[current.id]}
                          alt={current.imageAlt}
                          loading="lazy"
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <span className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </button>
                      <figcaption className="flex items-center justify-between gap-3 text-[11px] text-zinc-500">
                        <span className="font-mono uppercase tracking-widest text-emerald-400 font-bold">{current.systemTag}</span>
                        <span>{isEn ? 'Click to enlarge' : 'Bấm để phóng to'}</span>
                      </figcaption>
                    </figure>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                      <DepthParallaxImage
                        src={current.image}
                        alt={current.imageAlt}
                        className="w-full h-80 object-cover"
                        speed={0.16}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-black/60 px-2.5 py-1 rounded border border-emerald-500/30">
                          {current.systemTag}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </LazyBlock>
      </div>
      {/* Slide lightbox (portalled to <body> so it sits above the sticky nav) */}
      {zoomedSlide && createPortal(
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-8 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomedSlide(null)}
        >
          <img src={zoomedSlide} alt="" className="max-w-full max-h-full rounded-lg shadow-2xl" />
          <button
            type="button"
            onClick={() => setZoomedSlide(null)}
            aria-label={isEn ? 'Close' : 'Đóng'}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>,
        document.body,
      )}
    </section>
  );
};
