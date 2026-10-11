import React from 'react';
import { GreensoftLogo } from './GreensoftLogo';
import { Sparkles, Brain, Cpu, GraduationCap, Code2, Layers, LineChart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { GeometricDepthBackground } from './GeometricDepthBackground';
import { LazyBlock } from './LazyBlock';
import { Language } from '../i18n/translations';

interface AboutSectionProps {
  lang?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang = 'VI' }) => {
  const isEn = lang === 'EN';

  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Depth Layering: Slow-moving abstract geometric elements reacting to scroll */}
      <GeometricDepthBackground variant="about" />

      <div className="relative z-10">
        {/* Section label */}
        <ScrollReveal delay={0} distance={18} blur={8}>
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
            <span>01</span>
            <span className="w-8 h-[1px] bg-emerald-400/40"></span>
            <span>{isEn ? 'About Us · GreenSoftits' : 'Về chúng tôi · GreenSoftits'}</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Concise Narrative + Visual Cards */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={60} distance={24} blur={10}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
                {isEn ? 'Innovating the Future with GenAI, LLM & IoT' : 'Đổi Mới Tương Lai Cùng GenAI, LLM & IoT'}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120} distance={20} blur={8}>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white font-semibold">GreenSoftits</strong>{' '}
                {isEn 
                  ? 'turns Generative AI, Large Language Models and connected IoT into software that runs real businesses — not pilots, but products that are deployed, measured and improved every day to build a lasting competitive edge.'
                  : 'biến Generative AI, mô hình ngôn ngữ lớn và IoT thành những sản phẩm vận hành thật trong doanh nghiệp — không dừng ở thử nghiệm, mà được triển khai, đo lường và cải tiến mỗi ngày để tạo nên lợi thế cạnh tranh bền vững.'}
              </p>
            </ScrollReveal>

            {/* Brochure Visual Badge: 3 Pillars Compact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {/* Pillar 1 */}
              <ScrollReveal delay={180} distance={20} blur={10}>
                <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-emerald-500/40 transition-all h-full group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">PILLAR 01</span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">Generative AI</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {isEn 
                      ? 'Automating creative production, predictive modeling, and real-time experience personalization.'
                      : 'Tự động hóa sáng tạo nội dung, dự báo xu hướng và cá nhân hóa trải nghiệm.'}
                  </p>
                  <div className="space-y-1 text-[11px] text-zinc-500 font-mono">
                    <div className="text-emerald-400/80">• Media Generation</div>
                    <div>• Predictive Analytics</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pillar 2 */}
              <ScrollReveal delay={240} distance={20} blur={10}>
                <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-emerald-500/40 transition-all h-full group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">PILLAR 02</span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">Large Language Models</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {isEn
                      ? 'Enterprise RAG pipelines, semantic vector search, and proprietary domain fine-tuning.'
                      : 'Đường ống RAG, tìm kiếm ngữ nghĩa và fine-tune dữ liệu doanh nghiệp độc quyền.'}
                  </p>
                  <div className="space-y-1 text-[11px] text-zinc-500 font-mono">
                    <div className="text-emerald-400/80">• Enterprise RAG</div>
                    <div>• Semantic Vector Search</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pillar 3 */}
              <ScrollReveal delay={300} distance={20} blur={10}>
                <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-emerald-500/40 transition-all h-full group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">PILLAR 03</span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">IoT & Edge Vision</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {isEn
                      ? 'Computer vision cameras and edge sensor telemetry for immediate anomaly alerts.'
                      : 'Camera thị giác máy tính và cảm biến cảnh báo tức thì mọi bất thường tại biên.'}
                  </p>
                  <div className="space-y-1 text-[11px] text-zinc-500 font-mono">
                    <div className="text-emerald-400/80">• Real-Time Edge Vision</div>
                    <div>• Multi-sensor Telemetry</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Brochure Visual Strip: Global Presence & Engineering Hubs */}
            <ScrollReveal delay={340} distance={20} blur={10}>
              <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <GreensoftLogo variant="emblem" size={26} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      {isEn ? 'Global Deployment Footprint' : 'Hạ tầng triển khai toàn cầu'}
                    </h5>
                    <p className="text-[11px] text-zinc-400">Vietnam · Australia · United States · Korea</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="text-right">
                    <div className="text-emerald-400 font-bold">AI Portfolio</div>
                    <div className="text-[10px] text-zinc-500">{isEn ? 'Commercial Ready' : 'Thương mại hóa'}</div>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="text-right">
                    <div className="text-white font-bold">7+ Sectors</div>
                    <div className="text-[10px] text-zinc-500">{isEn ? 'Deployed' : 'Đã triển khai'}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: The People Behind the Platform (Concise & Visual) - Lazy Block */}
          <div className="lg:col-span-5">
            <LazyBlock minHeight="360px">
              <ScrollReveal delay={220} distance={28} blur={12}>
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                        {isEn ? 'Core Leadership Team' : 'Đội Ngũ Lãnh Đạo Cốt Lõi'}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-0.5">
                        {isEn ? 'The People Behind The Platform' : 'Những Con Người Kiến Tạo Nền Tảng'}
                      </h3>
                    </div>
                    <GreensoftLogo variant="emblem" size={32} />
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {isEn
                      ? 'Distinguished AI professors, researchers, and systems architects trained in Australia, the US, and South Korea — guiding enterprise solutions from blueprint to live production.'
                      : 'Đội ngũ chuyên gia và giảng viên AI từng tu nghiệp tại Úc, Hoa Kỳ và Hàn Quốc — đồng hành trực tiếp cùng kỹ sư giải pháp từ thiết kế đến vận hành thực chiến.'}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                        <h4 className="text-xs font-semibold text-white">AI Experts</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {isEn ? 'Global academic faculty & AI researchers.' : 'Giảng viên & nghiên cứu sinh quốc tế định hướng công nghệ.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                        <h4 className="text-xs font-semibold text-white">AI Engineers</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {isEn ? 'GenAI, RAG, LLM & high-speed data engineers.' : 'Chuyên gia GenAI, RAG, LLM & hạ tầng dữ liệu tốc độ cao.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <h4 className="text-xs font-semibold text-white">Product Team</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {isEn ? 'UI/UX optimized for operational excellence.' : 'Tối ưu UI/UX thực tiễn theo bài toán nghiệp vụ khách hàng.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <LineChart className="w-3.5 h-3.5 text-emerald-400" />
                        <h4 className="text-xs font-semibold text-white">Business Dev</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {isEn ? 'Strategic partnerships & enduring client success.' : 'Xây dựng quan hệ chiến lược và cam kết chất lượng dài lâu.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Vietnam · Australia · USA · Korea
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </LazyBlock>
          </div>
        </div>
      </div>
    </section>
  );
};
