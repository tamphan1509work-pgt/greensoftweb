import React from 'react';
import { Compass, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { PartnerLogo, CustomerBrandLogo } from './BrandLogos';
import { Language } from '../i18n/translations';

interface PartnersAndEngagementProps {
  lang?: Language;
}

export const PartnersAndEngagement: React.FC<PartnersAndEngagementProps> = ({ lang = 'VI' }) => {
  const isEn = lang === 'EN';

  // Technology Partners (Full 14 Global Cloud & AI Infrastructure Ecosystem Partners)
  const techPartners = [
    { id: 'google', name: 'Google Cloud' },
    { id: 'microsoft', name: 'Microsoft Azure' },
    { id: 'aws', name: 'AWS Cloud' },
    { id: 'openai', name: 'OpenAI' },
    { id: 'databricks', name: 'Databricks' },
    { id: 'datastax', name: 'DataStax' },
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'darktrace', name: 'Darktrace' },
    { id: 'splunk', name: 'Splunk' },
    { id: 'synopsys', name: 'Synopsys' },
    { id: 'adobe', name: 'Adobe' },
    { id: 'cisco', name: 'Cisco' },
    { id: 'accenture', name: 'Accenture' },
    { id: 'informatica', name: 'Informatica' }
  ];

  // Exact 12 customer logos from the slide (2 rows of 6)
  const customers = [
    // Row 1: Strategic Enterprise Clients (Top Row of Image)
    { id: 'nhg', name: 'NHG - Nguyen Hoang Group', sector: isEn ? 'Education Group' : 'Tập đoàn Giáo dục' },
    { id: 'gia-dinh', name: 'Gia Dinh University', sector: isEn ? 'University' : 'Trường Đại học' },
    { id: 'masterise-homes', name: 'Masterise Homes', sector: isEn ? 'Luxury Real Estate' : 'Bất động sản cao cấp' },
    { id: 'druce', name: 'Druce Real Estate', sector: isEn ? 'Global Property' : 'Bất động sản quốc tế' },
    { id: 'millennia', name: 'Millennia Education', sector: isEn ? 'Education' : 'Tập đoàn Giáo dục' },
    { id: 'modale', name: 'Modale European Luxury', sector: isEn ? 'Furniture' : 'Nội thất' },
    // Row 2: Technology, Security & Investment (Bottom Row of Image)
    { id: 'imes-pro', name: 'IMES PRO', sector: isEn ? 'Manufacturing Solutions' : 'Giải pháp sản xuất' },
    { id: 'smartland', name: 'Smartland Real Estate', sector: isEn ? 'Property Distribution' : 'Phân phối Bất động sản' },
    { id: 'inmatech', name: 'INMATECH', sector: isEn ? 'Technology & Automation' : 'Công nghệ & Tự động hóa' },
    { id: 'stormbird', name: 'Stormbird', sector: isEn ? 'Cybersecurity' : 'An ninh mạng' },
    { id: 'tsp', name: 'TSP - Total Service Provider', sector: isEn ? 'Facility & Security' : 'Dịch vụ & An ninh' },
    { id: 'we-angels', name: 'WeAngels Capital', sector: isEn ? 'Venture Investment' : 'Quỹ Đầu tư Khởi nghiệp' }
  ];

  const steps = [
    {
      num: '01',
      title: isEn ? 'Listen & understand' : 'Lắng nghe & Thấu hiểu',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'We sit down with your team to map how work really flows today, pinpoint the bottlenecks that cost you most and agree on the transformation priorities that matter.'
        : 'Chúng tôi ngồi lại cùng đội ngũ của bạn để hiểu quy trình đang vận hành, nhận diện những điểm nghẽn tốn kém nhất và xác định đâu là ưu tiên chuyển đổi quan trọng nhất.',
      outcome: isEn ? 'Outcome · Problem map & priorities' : 'Kết quả · Bản đồ vấn đề & thứ tự ưu tiên'
    },
    {
      num: '02',
      title: isEn ? 'Pick the breakthrough' : 'Chọn điểm bứt phá',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'We single out the quick wins that deliver clear, measurable value fastest — and agree on exactly how success will be measured.'
        : 'Khoanh vùng những hạng mục tạo ra giá trị nhanh và rõ ràng nhất, đồng thời thống nhất thước đo thành công bằng những con số cụ thể.',
      outcome: isEn ? 'Outcome · Phase-one scope & KPIs' : 'Kết quả · Phạm vi & KPI giai đoạn đầu'
    },
    {
      num: '03',
      title: isEn ? 'Commit to the journey' : 'Cam kết đồng hành',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'Delivery model, roadmap, governance and commercial terms agreed up front — the foundation of a long-term partnership, not a one-off project.'
        : 'Thống nhất mô hình triển khai, lộ trình, cơ chế quản trị và điều khoản hợp tác — đặt nền móng cho mối quan hệ đối tác lâu dài, không chỉ là một dự án đơn lẻ.',
      outcome: isEn ? 'Outcome · Long-term partnership roadmap' : 'Kết quả · Lộ trình hợp tác dài hạn'
    }
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* ================= PARTNERS & CUSTOMERS (Page 28) ================= */}
      <div className="mb-24">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
          <span>04</span>
          <span className="w-8 h-[1px] bg-emerald-400/40"></span>
          <span>{isEn ? 'Our Partners & Customers' : 'Đối Tác & Khách Hàng Của Chúng Tôi'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15] mb-4">
          {isEn ? 'Trusted by Industry Leaders' : 'Được Tin Tưởng Bởi Các Doanh Nghiệp Hàng Đầu'}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
          {isEn
            ? 'GreenSoftits AI systems are actively running in production across 7+ key enterprise industries, trusted by leading corporate groups and universities in Vietnam and internationally.'
            : 'Hệ thống AI của GreenSoftits đã được đưa vào vận hành sản xuất thực tế tại hơn 7 ngành trọng điểm, đồng hành cùng các tập đoàn và viện đại học hàng đầu Việt Nam & quốc tế.'}
        </p>

        {/* ================= CUSTOMERS SECTION (Exact 12 Customer Logos in 2 rows of 6) ================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 mb-14 shadow-2xl relative overflow-hidden">
          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full"></span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-sans">
                {isEn ? 'Customers' : 'Khách Hàng'}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {isEn ? 'Enterprise Deployments & Applied AI Operations' : 'Triển Khai Doanh Nghiệp & Vận Hành AI Ứng Dụng'}
            </span>
          </div>

          {/* 12 Customer Logos in 2 rows of 6 (6-column grid on desktop) */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center justify-between">
              <span>{isEn ? 'Strategic Enterprise & Key Client Accounts' : 'Doanh Nghiệp & Khách Hàng Trọng Điểm'}</span>
              <span className="text-emerald-400/80 font-medium">{isEn ? '12 Featured Accounts' : '12 Khách hàng tiêu biểu'}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {customers.map((client) => (
                <div
                  key={client.id}
                  className="group relative p-4 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[102px] text-center"
                >
                  <div className="w-full h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                    <CustomerBrandLogo id={client.id} name={client.name} />
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-2 font-medium leading-snug">
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Partners Strip with Brand Logos */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/10 mb-10 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div className="text-xs uppercase font-semibold text-zinc-400 tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isEn ? 'Technology Partners & Platform Ecosystem' : 'Đối Tác Công Nghệ & Hệ Sinh Thái Nền Tảng'}
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              {isEn ? 'Global Cloud & AI Infrastructure' : 'Hạ Tầng Đám Mây & AI Toàn Cầu'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
            {techPartners.map((tech) => (
              <div
                key={tech.id}
                className="group p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/50 hover:bg-white/[0.06] transition-all flex flex-col items-center justify-center gap-2.5 text-center shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/30 transition-all">
                  <PartnerLogo id={tech.id} name={tech.name} size={26} />
                </div>
                <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ENGAGEMENT FRAMEWORK (Page 29) ================= */}
      <div className="pt-8">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
          <span>05</span>
          <span className="w-8 h-[1px] bg-emerald-400/40"></span>
          <span>{isEn ? 'Engagement · How We Start' : 'Quy Trình Hợp Tác · Cách Chúng Tôi Khởi Đầu'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15] mb-4">
          {isEn ? 'Three Steps to Start. A Partnership Built to Scale.' : 'Ba Bước Khởi Đầu, Một Hành Trình Bứt Phá'}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
          {isEn
            ? 'From the first conversation to a clearly scoped, funded first phase — with results you can measure in numbers.'
            : 'Từ buổi trò chuyện đầu tiên đến giai đoạn triển khai đầu tiên — phạm vi rõ ràng, ngân sách minh bạch và kết quả đo đếm được bằng con số.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-bold text-white tracking-tight">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                {step.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Value Promise Banner from Page 29 */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-zinc-950 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-zinc-200 leading-relaxed max-w-3xl">
            <strong className="text-white">
              {isEn ? 'The right digital foundation is a launchpad for growth:' : 'Nền tảng số vững chắc là bệ phóng cho tăng trưởng:'}
            </strong>{' '}
            {isEn
              ? 'faster, leaner operations, seamless experiences for customers and employees alike, and systems ready to scale as you grow.'
              : 'vận hành nhanh và hiệu quả hơn, trải nghiệm liền mạch cho cả khách hàng lẫn nhân viên, cùng một hệ thống sẵn sàng mở rộng khi doanh nghiệp lớn mạnh.'}
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>{isEn ? 'Start the conversation' : 'Bắt đầu trò chuyện'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
