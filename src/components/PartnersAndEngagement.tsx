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
    { id: 'gia-dinh', name: 'Gia Dinh University', sector: isEn ? 'Higher Education' : 'Viện Đại học' },
    { id: 'masterise-homes', name: 'Masterise Homes', sector: isEn ? 'Luxury Real Estate' : 'Bất động sản cao cấp' },
    { id: 'druce', name: 'Druce Real Estate', sector: isEn ? 'Global Property' : 'Bất động sản quốc tế' },
    { id: 'millennia', name: 'Millennia Education', sector: isEn ? 'Education' : 'Tập đoàn Giáo dục' },
    { id: 'modale', name: 'Modale European Luxury', sector: isEn ? 'Luxury Living' : 'Nội thất & Không gian sống' },
    // Row 2: Technology, Security & Investment (Bottom Row of Image)
    { id: 'imes-pro', name: 'IMES PRO', sector: isEn ? 'Industrial Solutions' : 'Giải pháp công nghiệp' },
    { id: 'smartland', name: 'Smartland Real Estate', sector: isEn ? 'Property Distribution' : 'Phân phối Bất động sản' },
    { id: 'inmatech', name: 'INMATECH', sector: isEn ? 'Technology & Automation' : 'Công nghệ & Tự động hóa' },
    { id: 'stormbird', name: 'Stormbird', sector: isEn ? 'Maritime & Logistics' : 'Hàng hải & Logistics' },
    { id: 'tsp', name: 'TSP - Total Service Provider', sector: isEn ? 'Facility & Security' : 'Dịch vụ & An ninh' },
    { id: 'we-angels', name: 'WeAngels Capital', sector: isEn ? 'Venture Investment' : 'Quỹ Đầu tư Khởi nghiệp' }
  ];

  const steps = [
    {
      num: '01',
      title: isEn ? 'Discovery & alignment' : 'Khám phá & Định hướng',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'A working session to understand your current processes, the pain points that cost you most, and your transformation priorities.'
        : 'Phiên làm việc chuyên sâu nhằm thấu hiểu quy trình hiện tại, các nút thắt tốn kém nhất và thứ tự ưu tiên chuyển đổi số của doanh nghiệp.'
    },
    {
      num: '02',
      title: isEn ? 'Define phase one' : 'Xác định giai đoạn một',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'We identify the early wins — the functions that deliver measurable value fastest — and agree what success looks like in numbers.'
        : 'Xác định các mục tiêu sớm (early wins) mang lại giá trị định lượng nhanh nhất và thống nhất tiêu chí thành công bằng số liệu cụ thể.'
    },
    {
      num: '03',
      title: isEn ? 'Confirm the framework' : 'Chuẩn hóa khung hợp tác',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: isEn
        ? 'Delivery model, timeline, governance and commercial terms agreed for a long-term partnership rather than a one-off project.'
        : 'Mô hình triển khai, lộ trình, quản trị và các điều khoản thương mại được thống nhất cho mối quan hệ đối tác chiến lược dài hạn.'
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
                  <span className="text-[10px] text-zinc-500 mt-2 font-mono font-medium line-clamp-1">
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
          {isEn ? 'Three Short Steps to Scaled Impact' : 'Ba Bước Ngắn Gọn Để Tạo Đột Phá Quy Mô'}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
          {isEn
            ? 'From first conversation to a scoped, funded first phase with measurable numbers.'
            : 'Từ cuộc trao đổi đầu tiên đến giai đoạn triển khai có phạm vi rõ ràng cùng các chỉ số đo lường chuẩn xác.'}
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
                {isEn ? `Phase 0${idx + 1} Delivery Alignment` : `Giai đoạn 0${idx + 1} Thống nhất mục tiêu`}
              </div>
            </div>
          ))}
        </div>

        {/* Value Promise Banner from Page 29 */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-zinc-950 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-zinc-200 leading-relaxed max-w-3xl">
            <strong className="text-white">
              {isEn ? 'With the right digital foundation:' : 'Với nền tảng kỹ thuật số chuẩn xác:'}
            </strong>{' '}
            {isEn
              ? 'you achieve elevated operational velocity, seamless customer and employee touchpoints, and resilient systems engineered to scale.'
              : 'doanh nghiệp tối ưu hóa hiệu suất vận hành, mang đến trải nghiệm khách hàng và nhân viên liền mạch, cùng hạ tầng sẵn sàng mở rộng bền vững.'}
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>{isEn ? 'Start Phase 01' : 'Bắt đầu Bước 01'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
