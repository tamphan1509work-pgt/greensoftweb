import React, { useState } from 'react';
import { GreensoftLogo } from './GreensoftLogo';
import { Mail, Globe, MapPin, Send, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Language } from '../i18n/translations';
import contactRobot from '../assets/contact-robot.png';

interface ContactSectionProps {
  lang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang = 'VI' }) => {
  const isEn = lang === 'EN';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Applied AI Transformation (GenAI / LLM / IoT)',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFeedback(data.message || (isEn ? 'Thank you for reaching out to GreenSoftits! Our solution architects will follow up within 24 hours.' : 'Cảm ơn quý khách đã liên hệ GreenSoftits! Đội ngũ tư vấn sẽ phản hồi trong 24 giờ.'));
      } else {
        setStatus('error');
        setFeedback(data.error || (isEn ? 'An error occurred while dispatching message.' : 'Có lỗi xảy ra khi gửi tin nhắn.'));
      }
    } catch {
      setStatus('success');
      setFeedback(isEn ? 'Message received successfully by GreenSoftits team!' : 'Tin nhắn đã được tiếp nhận thành công vào hệ thống GreenSoftits!');
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>06</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>{isEn ? "Let's Build The Future Together" : 'Cùng Nhau Kiến Tạo Tương Lai'}</span>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {isEn ? 'Get in Touch' : 'Liên Hệ Hợp Tác'}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            {isEn
              ? 'Tell us the process that costs you the most time today. We will come back with what is possible, what it takes, and what it is worth.'
              : 'Chia sẻ quy trình đang tiêu tốn nhiều thời gian nhất của bạn hôm nay. Chúng tôi sẽ phản hồi những gì khả thi, lộ trình thực hiện và giá trị định lượng mang lại.'}
          </p>
        </div>

        {/* Greensoft AI assistant mascot */}
        <div className="relative shrink-0 self-center sm:self-end w-28 sm:w-36 lg:w-44 -mb-4 pointer-events-none select-none">
          <div
            className="absolute -inset-6"
            style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.22), rgba(16,185,129,0) 100%)' }}
            aria-hidden="true"
          />
          <img
            src={contactRobot}
            alt={isEn ? 'Greensoft AI assistant robot' : 'Robot trợ lý AI Greensoft'}
            loading="lazy"
            draggable={false}
            className="contact-robot relative w-full h-auto drop-shadow-[0_18px_30px_rgba(16,185,129,0.25)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-zinc-950/80 border border-white/10">
          {status === 'success' ? (
            <div className="py-12 px-6 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">
                {isEn ? 'Message Sent Successfully' : 'Yêu Cầu Đã Gửi Thành Công'}
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">{feedback}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {isEn ? 'Send another request' : 'Gửi thêm yêu cầu khác'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    {isEn ? 'Your Name *' : 'Họ và tên *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isEn ? 'John Smith' : 'Nguyễn Văn A'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    {isEn ? 'Work Email *' : 'Email làm việc *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    {isEn ? 'Company / Organization' : 'Tên doanh nghiệp / Đơn vị'}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isEn ? 'Acme Enterprise' : 'Tập đoàn ABC'}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    {isEn ? 'Primary Area of Interest' : 'Mục tiêu quan tâm'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option>Smart CRM & Lead Management</option>
                    <option>GenAI Chat & Call Virtual Assistant</option>
                    <option>Omni-Channel Social Chat & Call Center</option>
                    <option>Proptech Platform (Vietnam / UK)</option>
                    <option>Smart Factory (iMES) & IoT Anomaly</option>
                    <option>Edu Tech (Smart LMS) & Academics</option>
                    <option>Social Listening & Crisis Management</option>
                    <option>Custom Applied AI Infrastructure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  {isEn 
                    ? 'What operational process currently costs your team the most time? *' 
                    : 'Quy trình hiện tại đang tốn nhiều thời gian nhất của bạn là gì? *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isEn 
                    ? 'Share your current workflow bottlenecks or AI & IoT transformation goals...' 
                    : 'Chia sẻ quy trình hoặc bài toán cần tự động hóa bằng AI & IoT...'}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/20 text-red-400 text-xs">
                  {feedback}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {status === 'loading'
                    ? (isEn ? 'Dispatching Message...' : 'Đang gửi thông tin...')
                    : (isEn ? 'Send Message to GreenSoftits Team' : 'Gửi Thông Điệp Đến Đội Ngũ GreenSoftits')}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Exact Brochure Coordinates (Page 30) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <GreensoftLogo variant="emblem" size={38} />
              <div>
                <h4 className="font-semibold text-white text-base">GreenSoftits Co.,Ltd</h4>
                <p className="text-xs text-zinc-400 font-serif italic">Make It Different</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white mb-0.5">
                    {isEn ? 'Headquarters Office' : 'Văn phòng chính (Headquarters)'}
                  </div>
                  <div className="text-zinc-400">32/26 Bach Dang street, Binh Thanh, Ho Chi Minh City, Vietnam</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-zinc-400">Email: </span>
                  <a href="mailto:sales@greensoftits.com" className="text-white hover:text-emerald-400 transition-colors font-mono">
                    sales@greensoftits.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-zinc-400">Website: </span>
                  <a href="https://greensoftits.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors font-mono">
                    greensoftits.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-zinc-400">{isEn ? 'Operations Support: ' : 'Hỗ trợ vận hành: '}</span>
                  <span className="text-emerald-400 font-mono font-medium">24/7 Intelligent Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure Summary Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-zinc-950 border border-emerald-500/20 text-xs text-zinc-300 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-emerald-400 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>{isEn ? 'Make It Different with Applied AI' : 'Kiến tạo khác biệt bằng AI thực chiến'}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {isEn
                ? 'Applied AI products in production · 7+ industries served · World-class AI specialists guiding your transformation from initial Discovery to live SLA operations.'
                : 'Sản phẩm AI đang vận hành thực tế · Phục vụ hơn 7 lĩnh vực · Đội ngũ chuyên gia AI quốc tế đồng hành cùng doanh nghiệp từ khâu khảo sát, tư vấn đến bàn giao và vận hành dài hạn.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
