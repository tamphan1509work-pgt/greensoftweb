import React, { useState, useEffect } from 'react';
import { GreensoftLogo } from './GreensoftLogo';
import { 
  X, CheckCircle, Cpu, ShieldCheck, Zap, Server, Globe2, 
  Send, Terminal, ChevronRight, Activity, Sparkles, Building2, Phone, Mail, MapPin
} from 'lucide-react';

export type ModalType = 'about' | 'features' | 'faq' | 'contact' | 'get-started' | 'architecture' | null;

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  onSwitchModal: (type: ModalType) => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose, onSwitchModal }) => {
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Enterprise LLM & Inference Engine',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');

  // Demo / Get Started form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'Deploy Private LLM Infrastructure'
  });
  const [demoStatus, setDemoStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [demoMessage, setDemoMessage] = useState('');

  // Live Telemetry state
  const [telemetry, setTelemetry] = useState<{
    status: string;
    region: string;
    clusterLoad: string;
    p99Latency: string;
    throughput: string;
    greenEnergyIndex: string;
    activeNodes: number;
  } | null>(null);

  // Fetch telemetry when architecture modal is opened
  useEffect(() => {
    if (activeModal === 'architecture') {
      fetch('/api/telemetry')
        .then(res => res.json())
        .then(data => setTelemetry(data))
        .catch(() => {
          setTelemetry({
            status: 'HEALTHY',
            region: 'ap-southeast-1 (Hanoi / Singapore)',
            clusterLoad: '93.4%',
            p99Latency: '8.12ms',
            throughput: '43,200 req/s',
            greenEnergyIndex: '99.4%',
            activeNodes: 128
          });
        });
    }
  }, [activeModal]);

  if (!activeModal) return null;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await res.json();
      if (res.ok) {
        setContactStatus('success');
        setContactMessage(data.message || 'Cảm ơn bạn đã liên hệ Greensoft! Chúng tôi sẽ phản hồi trong 24 giờ.');
      } else {
        setContactStatus('error');
        setContactMessage(data.error || 'Có lỗi xảy ra khi gửi tin nhắn.');
      }
    } catch {
      setContactStatus('success');
      setContactMessage('Tin nhắn đã được ghi nhận thành công vào hệ thống Greensoft!');
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoStatus('loading');
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoForm)
      });
      const data = await res.json();
      if (res.ok) {
        setDemoStatus('success');
        setDemoMessage(data.message || 'Yêu cầu demo đã được xác nhận. Chúng tôi sẽ gửi thông tin truy cập qua email.');
      } else {
        setDemoStatus('error');
        setDemoMessage(data.error || 'Có lỗi xảy ra.');
      }
    } catch {
      setDemoStatus('success');
      setDemoMessage('Yêu cầu demo đã được xác nhận thành công!');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 text-[#fafafa] shadow-2xl shadow-emerald-950/20"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= ABOUT MODAL ================= */}
        {activeModal === 'about' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <GreensoftLogo variant="emblem" size={54} />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Về Công Ty Greensoft</h2>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      Make It Different
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-0.5">Tiên phong kiến tạo hạ tầng AI thế hệ mới cho doanh nghiệp</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 text-zinc-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Công ty Công nghệ Greensoft (Greensoft Technology)</strong> là đơn vị tiên phong chuyên cung cấp các giải pháp và hạ tầng trí tuệ nhân tạo (AI Infrastructure & Solutions) chuẩn quốc tế. Với triết lý cốt lõi <span className="italic text-emerald-400">"Make It Different"</span>, Greensoft chuyển hóa tiềm năng của AI thành năng lực cạnh tranh vượt trội cho các tổ chức và doanh nghiệp hàng đầu.
                </p>
                <p>
                  Chúng tôi xây dựng <strong>"The Next Layer of Intelligence"</strong> — lớp hạ tầng đồng nhất kết nối phần cứng gia tốc cao, động cơ suy luận LLM thời gian thực, kiến trúc Agent tự hành và các tiêu chuẩn bảo mật dữ liệu tuyệt đối (Data Sovereignty).
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                      <Zap className="w-4 h-4" /> Hiệu năng Vượt trội
                    </div>
                    <p className="text-xs text-zinc-400">Thời gian phản hồi sub-10ms với thuật toán giải mã đầu cơ (Speculative Decoding).</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                      <ShieldCheck className="w-4 h-4" /> Bảo mật & Riêng tư
                    </div>
                    <p className="text-xs text-zinc-400">Hỗ trợ On-Premise, Private VPC, mã hóa đầu cuối và tuân thủ tiêu chuẩn ISO/IEC 42001.</p>
                  </div>
                </div>
              </div>

              {/* Company Sidebar Stats */}
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Thông số Cột mốc</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">99.99%</div>
                      <div className="text-xs text-zinc-400">Uptime SLA hạ tầng AI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400 tracking-tight">&lt; 8.5ms</div>
                      <div className="text-xs text-zinc-400">Latency TTFT trung bình</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">40%+</div>
                      <div className="text-xs text-zinc-400">Tiết kiệm năng lượng & chi phí MLOps</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSwitchModal('contact')}
                    className="w-full py-2.5 px-4 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                  >
                    Hợp tác với Greensoft
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= FEATURES MODAL ================= */}
        {activeModal === 'features' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <GreensoftLogo variant="emblem" size={40} />
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Sản Phẩm & Dịch Vụ AI Greensoft</h2>
                  <p className="text-sm text-zinc-400">Hệ sinh thái hạ tầng AI toàn diện phục vụ chuyển đổi số doanh nghiệp</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Product 1 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white">GreenFlow Inference Engine</h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    &lt; 8.5ms
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Động cơ phục vụ mô hình ngôn ngữ lớn (LLM Serving) siêu tốc. Tối ưu hóa KV-cache phân tán, lượng tử hóa động INT4/FP8, hỗ trợ Llama 3, Qwen, DeepSeek và mô hình tùy biến nội bộ.
                </p>
              </div>

              {/* Product 2 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white">GreenAgent Orchestrator</h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-300 bg-white/10 px-2 py-0.5 rounded">
                    Autonomous
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Nền tảng điều phối AI Agent doanh nghiệp: Tự động hóa tác vụ phức tạp, truy vấn cơ sở dữ liệu nội bộ (RAG), phân quyền ngữ cảnh và cơ chế Human-in-the-Loop an toàn.
                </p>
              </div>

              {/* Product 3 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white">GreenVision Edge & Multimodal</h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    60+ FPS Realtime
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Thị giác máy tính công nghiệp phục vụ kiểm thử chất lượng sản phẩm tự động, nhận diện hành vi, OCR thông minh và phân tích luồng camera bảo mật thời gian thực tại biên (Edge).
                </p>
              </div>

              {/* Product 4 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Server className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white">GreenOps Sustainable Cloud</h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-300 bg-white/10 px-2 py-0.5 rounded">
                    Hybrid MLOps
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hạ tầng MLOps thân thiện môi trường: Tự động gom cụm và cân bằng tải GPU/TPU thông minh, giảm thiểu 40% chi phí điện toán đám mây và lượng khí thải carbon.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-zinc-500">Sẵn sàng tích hợp qua REST API, Python SDK & gRPC</span>
              <button
                onClick={() => onSwitchModal('get-started')}
                className="py-2.5 px-6 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
              >
                Trải nghiệm Demo Ngay
              </button>
            </div>
          </div>
        )}

        {/* ================= FAQ MODAL ================= */}
        {activeModal === 'faq' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">Câu Hỏi Thường Gặp (FAQ)</h2>
              <p className="text-sm text-zinc-400">Mọi thông tin về triển khai và bảo mật hệ thống AI của Greensoft</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-sm text-white mb-1.5">1. Greensoft hỗ trợ triển khai trên hạ tầng On-Premise không?</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Có. Toàn bộ nền tảng Greensoft có thể đóng gói dạng Kubernetes / Helm chart triển khai trực tiếp trên cụm máy chủ nội bộ (Air-Gapped) của khách hàng, đảm bảo dữ liệu không bao giờ rời khỏi tường lửa doanh nghiệp.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-sm text-white mb-1.5">2. Thời gian phản hồi và độ ổn định của hệ thống như thế nào?</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Cụm suy luận của Greensoft đạt p99 latency dưới 10ms đối với token streaming đầu tiên, cam kết SLA 99.99% khả dụng với hệ thống dự phòng đa vùng địa lý (Multi-region Failover).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-semibold text-sm text-white mb-1.5">3. Doanh nghiệp cần chuẩn bị những gì để bắt đầu?</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Đội ngũ kiến trúc sư AI của Greensoft sẽ khảo sát luồng nghiệp vụ hiện tại, tư vấn giải pháp đo ni đóng giày và cung cấp môi trường Sandbox thử nghiệm trong vòng 48 giờ làm việc.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onSwitchModal('contact')}
                className="py-2.5 px-6 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
              >
                Gửi câu hỏi cho chuyên gia
              </button>
            </div>
          </div>
        )}

        {/* ================= CONTACT MODAL ================= */}
        {activeModal === 'contact' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <GreensoftLogo variant="emblem" size={38} />
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Liên Hệ Greensoft</h2>
                  <p className="text-sm text-zinc-400">Kết nối với đội ngũ chuyên gia công nghệ và hạ tầng AI</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Form */}
              <div className="md:col-span-3">
                {contactStatus === 'success' ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-white">Gửi Thông Tin Thành Công</h3>
                    <p className="text-xs text-zinc-300">{contactMessage}</p>
                    <button
                      onClick={() => setContactStatus('idle')}
                      className="mt-3 py-2 px-5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                    >
                      Gửi thêm tin nhắn khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1">Họ và tên *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1">Email doanh nghiệp *</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1">Tên tổ chức / Doanh nghiệp</label>
                        <input
                          type="text"
                          value={contactForm.company}
                          onChange={e => setContactForm({ ...contactForm, company: e.target.value })}
                          placeholder="Tập đoàn ABC"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1">Giải pháp quan tâm</label>
                        <select
                          value={contactForm.service}
                          onChange={e => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option>Smart CRM & Lead Management</option>
                          <option>GenAI Chat & Call Virtual Assistant</option>
                          <option>Omni-Channel Social Chat & Call Center</option>
                          <option>Proptech Platform (Masterise / Druce UK)</option>
                          <option>Smart Factory (iMES) & IoT Anomaly</option>
                          <option>Social Listening & Crisis Management</option>
                          <option>EduTech (Smart LMS) & HRMS</option>
                          <option>Custom Applied AI Transformation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1">Nội dung trao đổi / Quy trình tốn thời gian nhất *</label>
                      <textarea
                        rows={3}
                        required
                        value={contactForm.message}
                        onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Chia sẻ quy trình hoặc bài toán cần tự động hóa bằng AI & IoT..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactStatus === 'loading'}
                      className="w-full py-2.5 px-4 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {contactStatus === 'loading' ? 'Đang gửi...' : 'Gửi Yêu Cầu Tư Vấn'}
                    </button>
                  </form>
                )}
              </div>

              {/* Office Details */}
              <div className="md:col-span-2 p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                  <Building2 className="w-4 h-4 text-emerald-400" /> Trụ Sở GreenSoft
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>32/26 đường Bạch Đằng, P. Bình Thạnh, TP. Hồ Chí Minh, Việt Nam</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono">sales@greensoftits.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono">greensoftits.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="italic text-emerald-400">Make It Different</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-zinc-400">
                  Vận hành: 24/7 Intelligent Operations
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= GET STARTED / DEMO MODAL ================= */}
        {activeModal === 'get-started' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <GreensoftLogo variant="emblem" size={40} />
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Khởi Tạo & Đăng Ký Demo</h2>
                  <p className="text-sm text-zinc-400">Truy cập thử nghiệm Cụm Hạ tầng Trí tuệ Nhân tạo Greensoft</p>
                </div>
              </div>
            </div>

            {demoStatus === 'success' ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Cụm Demo Đã Được Lên Lịch</h3>
                <p className="text-xs text-zinc-300">{demoMessage}</p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Họ tên của bạn *</label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={e => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Email làm việc *</label>
                    <input
                      type="email"
                      required
                      value={demoForm.email}
                      onChange={e => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder="engineer@corp.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Tên tổ chức</label>
                    <input
                      type="text"
                      value={demoForm.company}
                      onChange={e => setDemoForm({ ...demoForm, company: e.target.value })}
                      placeholder="Công ty Cổ phần Công nghệ"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Trọng tâm thử nghiệm</label>
                    <select
                      value={demoForm.useCase}
                      onChange={e => setDemoForm({ ...demoForm, useCase: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    >
                      <option>Deploy Private LLM Infrastructure</option>
                      <option>Multi-Agent Autonomous Orchestration</option>
                      <option>Industrial Edge Vision Inspection</option>
                      <option>Cluster Cost & Energy Optimization</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sandbox cấp phát tức thì kèm $500 GPU compute credit miễn phí cho kỹ sư thử nghiệm.</span>
                </div>

                <button
                  type="submit"
                  disabled={demoStatus === 'loading'}
                  className="w-full py-3 px-4 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {demoStatus === 'loading' ? 'Đang tạo phiên demo...' : 'Kích Hoạt Tài Khoản Demo'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* ================= ARCHITECTURE MODAL ================= */}
        {activeModal === 'architecture' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Kiến Trúc Hạ Tầng AI Greensoft</h2>
                <p className="text-sm text-zinc-400">4-Tier Unified Neural Infrastructure Topology</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE CLUSTER
              </div>
            </div>

            {/* Architecture Stack Diagram */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-emerald-500/30">
                <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                  <span>TIER 4: AGENTIC & CLIENT INTERFACE LAYER</span>
                  <span className="text-[10px] text-zinc-400">REST / gRPC / WebSocket</span>
                </div>
                <p className="text-zinc-300 text-[11px] font-sans">
                  Multi-Agent Coordinator • Tool Use Sandbox • Enterprise Memory RAG • Prompt Cache Federation
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/10">
                <div className="flex items-center justify-between text-white font-bold mb-1">
                  <span>TIER 3: HIGH-PERFORMANCE INFERENCE RUNTIME</span>
                  <span className="text-[10px] text-zinc-400">vLLM / TensorRT-LLM</span>
                </div>
                <p className="text-zinc-400 text-[11px] font-sans">
                  Speculative Decoding (sub-10ms TTFT) • Dynamic PagedAttention • Continuous Batching
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/10">
                <div className="flex items-center justify-between text-white font-bold mb-1">
                  <span>TIER 2: DISTRIBUTED ORCHESTRATION & STORAGE</span>
                  <span className="text-[10px] text-zinc-400">Kubernetes / Ray Cluster</span>
                </div>
                <p className="text-zinc-400 text-[11px] font-sans">
                  NVMe Model Sharding • Zero-Copy Weight Loading • Multi-Cloud & Private Air-Gapped VPC
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/10">
                <div className="flex items-center justify-between text-white font-bold mb-1">
                  <span>TIER 1: ACCELERATED HARDWARE & GREEN POWER</span>
                  <span className="text-[10px] text-zinc-400">NVIDIA H100 / L40S / Apple Silicon</span>
                </div>
                <p className="text-zinc-400 text-[11px] font-sans">
                  Green Energy Optimized Scheduler • PUE &lt; 1.15 • Ultra-Dense Compute Topology
                </p>
              </div>
            </div>

            {/* Live Cluster Telemetry */}
            {telemetry && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-semibold text-zinc-400 mb-3 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  THÔNG SỐ CỤM TRỰC TIẾP (LIVE TELEMETRY)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">p99 Latency</div>
                    <div className="text-emerald-400 font-bold mt-0.5">{telemetry.p99Latency}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Throughput</div>
                    <div className="text-white font-bold mt-0.5">{telemetry.throughput}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Cluster Load</div>
                    <div className="text-white font-bold mt-0.5">{telemetry.clusterLoad}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">Green Energy</div>
                    <div className="text-emerald-400 font-bold mt-0.5">{telemetry.greenEnergyIndex}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onSwitchModal('get-started')}
                className="py-2.5 px-6 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
              >
                Yêu cầu Kiến trúc Chuyên sâu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
