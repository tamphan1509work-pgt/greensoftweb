import React from 'react';
import { ArrowRight, Sparkles, Users2, TrendingUp } from 'lucide-react';
import { Language } from '../i18n/translations';
import { ApplyForm } from './ApplyForm';

interface RecruitmentSectionProps {
  lang?: Language;
}

/** Link to the standalone careers page, keeping the visitor's language. */
export const careersPageUrl = (lang: Language) => `${import.meta.env.BASE_URL}careers.html?lang=${lang.toLowerCase()}`;

export const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({ lang = 'VI' }) => {
  const isEn = lang === 'EN';

  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      title: isEn ? 'Build with AI, every day' : 'Làm việc cùng AI mỗi ngày',
      desc: isEn
        ? 'AI is part of how we design, code, test and ship — not a side project.'
        : 'AI là công cụ hằng ngày trong thiết kế, lập trình, kiểm thử và triển khai — không phải dự án phụ.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      title: isEn ? 'Real projects, real mentors' : 'Dự án thật, mentor thật',
      desc: isEn
        ? 'Work on AI Transformation projects alongside senior engineers and AI researchers.'
        : 'Tham gia dự án AI Transformation thực tế cùng Senior Engineer và chuyên gia nghiên cứu AI.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: isEn ? 'A clear path to grow' : 'Lộ trình phát triển rõ ràng',
      desc: isEn
        ? 'From fresher to engineer, technical lead and AI solution architect.'
        : 'Từ Fresher đến Engineer, Technical Lead và AI Solution Architect.',
    },
  ];

  return (
    <section id="recruitment" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>05</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>{isEn ? 'Careers at GreenSoft' : 'Tuyển Dụng & Sự Nghiệp'}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: invitation */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {isEn ? (
              <>Don't just code with AI. <span className="text-emerald-400">Build the future</span> with us.</>
            ) : (
              <>Đừng chỉ code cùng AI. Hãy cùng chúng tôi <span className="text-emerald-400">kiến tạo tương lai</span>.</>
            )}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
            {isEn
              ? 'GreenSoft is looking for engineers who are curious, love building products and are ready to make AI their everyday tool. Fresh graduates and final-year students are warmly welcome.'
              : 'GreenSoft tìm kiếm những kỹ sư ham học hỏi, đam mê tạo ra sản phẩm và sẵn sàng biến AI thành công cụ làm việc hằng ngày. Chào đón cả sinh viên năm cuối và các bạn mới tốt nghiệp.'}
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map(item => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={careersPageUrl(lang)}
            className="mt-10 inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            {isEn ? 'View open positions' : 'Xem chi tiết vị trí tuyển dụng'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right: application form */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            {isEn ? 'Send us your application' : 'Gửi hồ sơ ứng tuyển'}
          </h3>
          <p className="text-sm text-zinc-400 mt-1.5 mb-6">
            {isEn
              ? 'Leave your details and a link to your CV, GitHub or portfolio — we will be in touch.'
              : 'Để lại thông tin cùng link CV, GitHub hoặc portfolio — chúng tôi sẽ liên hệ với bạn.'}
          </p>
          <ApplyForm lang={lang} />
        </div>
      </div>
    </section>
  );
};
