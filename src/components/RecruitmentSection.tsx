import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle, GraduationCap, Laptop, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../i18n/translations';

interface RecruitmentSectionProps {
  lang?: Language;
}

export const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({ lang = 'VI' }) => {
  const [selectedJob, setSelectedJob] = useState<string>('llm');
  const isEn = lang === 'EN';

  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Senior Generative AI / LLM Engineer',
    linkedin: '',
    notes: ''
  });
  const [applyStatus, setApplyStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const jobs = [
    {
      id: 'llm',
      title: 'Senior GenAI & LLM Engineer',
      department: 'AI Core Lab',
      location: isEn ? 'Ho Chi Minh City / Hybrid' : 'TP. Hồ Chí Minh / Hybrid',
      type: 'Full-time',
      experience: isEn ? '3+ years AI/ML' : '3+ năm AI/ML',
      description: isEn
        ? 'Optimize distributed LLM inference clusters, construct next-gen agentic RAG pipelines, and implement speculative decoding across NVIDIA H100 pods.'
        : 'Tối ưu hạ tầng suy luận LLM phân tán, xây dựng pipeline RAG thế hệ mới và triển khai Speculative Decoding trên cụm GPU H100.',
      requirements: isEn
        ? [
            'Proficiency in PyTorch, Transformers, vLLM, or TensorRT-LLM engines',
            'Hands-on production track record with enterprise RAG & Vector DBs (Milvus, Qdrant, pgvector)',
            'Deep mental model of Transformer KV-cache mechanics and tensor parallelism (TP/PP)'
          ]
        : [
            'Thành thạo PyTorch, Transformers, vLLM hoặc TensorRT-LLM',
            'Kinh nghiệm thực chiến với RAG & Vector DB (Milvus, Qdrant)',
            'Hiểu sâu cấu trúc Transformer, KV-cache và Parallelism (TP/PP)'
          ]
    },
    {
      id: 'cv',
      title: 'Computer Vision & Edge AI',
      department: 'IoT & Edge Intelligence',
      location: isEn ? 'Ho Chi Minh City' : 'TP. Hồ Chí Minh',
      type: 'Full-time',
      experience: isEn ? '2+ years CV/IoT' : '2+ năm CV/IoT',
      description: isEn
        ? 'Develop high-speed industrial computer vision pipelines (60+ FPS), real-time surveillance stream analytics, and edge acceleration on NVIDIA Jetson.'
        : 'Phát triển mô hình thị giác công nghiệp tốc độ cao (60+ FPS), phân tích luồng camera an ninh và tối ưu trên vi xử lý nhúng NVIDIA Jetson.',
      requirements: isEn
        ? [
            'Extensive experience with OpenCV, PyTorch, TensorRT, and DeepStream pipelines',
            'Model quantization (INT8/FP8) and hardware profiling for embedded Edge AI',
            'Real-time low-latency video streaming over RTSP and WebRTC protocols'
          ]
        : [
            'Kinh nghiệm với OpenCV, PyTorch, TensorRT, DeepStream',
            'Tối ưu hóa mô hình suy luận trên thiết bị nhúng (Edge AI)',
            'Xử lý luồng video thời gian thực RTSP, WebRTC'
          ]
    },
    {
      id: 'mlops',
      title: 'Cloud MLOps Architect',
      department: 'Infrastructure Platform',
      location: isEn ? 'Ho Chi Minh City / Hybrid' : 'TP. Hồ Chí Minh / Hybrid',
      type: 'Full-time',
      experience: isEn ? '3+ years MLOps' : '3+ năm MLOps',
      description: isEn
        ? 'Architect large-scale GPU compute fabrics, automate model CI/CD validation gates, integrate Kubernetes orchestration, and optimize compute TCO.'
        : 'Thiết kế hạ tầng tính toán GPU quy mô lớn, tự động hóa CI/CD mô hình, tích hợp Kubernetes và tối ưu chi phí điện toán đám mây.',
      requirements: isEn
        ? [
            'Deep expertise in Kubernetes, Helm, Ray Cluster, and autoscaling node pools',
            'Multi-GPU cluster orchestration using Triton Inference Server and vLLM',
            'Observability and distributed tracing with Prometheus, Grafana, and OpenTelemetry'
          ]
        : [
            'Kinh nghiệm chuyên sâu Kubernetes, Helm, Ray Cluster',
            'Quản trị cụm GPU với Triton Inference Server',
            'Giám sát hệ thống với Prometheus, Grafana, OpenTelemetry'
          ]
    },
    {
      id: 'pm',
      title: 'AI Solution Architect / PM',
      department: 'Product Delivery',
      location: isEn ? 'Ho Chi Minh City' : 'TP. Hồ Chí Minh',
      type: 'Full-time',
      experience: isEn ? '2+ years AI Solutions' : '2+ năm AI Solutions',
      description: isEn
        ? 'Serve as the bridge between client executive roadmaps and engineering squads. Lead Discovery phases, design solutions, and drive live acceptance.'
        : 'Cầu nối bài toán nghiệp vụ khách hàng và đội ngũ AI. Dẫn dắt Discovery, thiết kế kiến trúc và nghiệm thu giải pháp thực tế.',
      requirements: isEn
        ? [
            'Domain acumen across Real Estate, Retail, Higher Education, and Manufacturing',
            'Exceptional consultative communication demystifying AI capabilities clearly',
            'Product-centric mindset grounded in telemetry and verifiable metrics'
          ]
        : [
            'Thấu hiểu bài toán nghiệp vụ BĐS, Bán lẻ, Giáo dục, Sản xuất',
            'Giao tiếp xuất sắc, diễn giải công nghệ AI dễ hiểu',
            'Tư duy hướng sản phẩm, thực chiến và dữ liệu'
          ]
    }
  ];

  const currentJob = jobs.find(j => j.id === selectedJob) || jobs[0];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStatus('loading');
    setTimeout(() => {
      setApplyStatus('success');
    }, 800);
  };

  return (
    <section id="recruitment" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>05</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>{isEn ? 'Careers & Recruitment · GreenSoftits Talent' : 'Tuyển Dụng & Sự Nghiệp · GreenSoftits Talent'}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            {isEn ? 'Build the Future of Applied AI with GreenSoftits' : 'Cùng GreenSoftits Kiến Tạo Tương Lai AI Ứng Dụng'}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            {isEn
              ? 'Join our world-class research and engineering team — working directly with international AI scientists to bring state-of-the-art algorithms into high-impact enterprise production.'
              : 'Gia nhập đội ngũ nghiên cứu và kỹ sư hàng đầu — làm việc trực tiếp cùng các chuyên gia quốc tế để đưa các thuật toán AI tiên tiến nhất vào cuộc sống thực tiễn.'}
          </p>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/10 shrink-0">
          <GraduationCap className="w-5 h-5 text-emerald-400" />
          <div className="text-xs">
            <span className="text-white font-semibold block">{isEn ? 'Research & Real-World Impact' : 'Nghiên cứu & Thực chiến'}</span>
            <span className="text-zinc-400">Australia · USA · Korea · Vietnam</span>
          </div>
        </div>
      </div>

      {/* Grid of Job Openings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Job List */}
        <div className="lg:col-span-5 space-y-3">
          {jobs.map((job) => {
            const isSelected = job.id === selectedJob;
            return (
              <button
                key={job.id}
                onClick={() => setSelectedJob(job.id)}
                className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400 font-semibold">
                    {job.department}
                  </span>
                  <span className="text-xs text-zinc-500">{job.type}</span>
                </div>
                <h4 className="font-semibold text-base text-white mb-1.5 leading-snug">{job.title}</h4>
                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Job Details & Quick Apply Box */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                {currentJob.department}
              </span>
              <span className="text-xs text-zinc-400">{currentJob.location}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{currentJob.title}</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{currentJob.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h5 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              {isEn ? 'Core Technical & Professional Requirements' : 'Yêu cầu chuyên môn cốt lõi'}
            </h5>
            <div className="space-y-2.5">
              {currentJob.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span className="leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="pt-4 border-t border-white/10">
            {applyStatus === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {isEn ? 'Application Received Successfully' : 'Đã Tiếp Nhận Hồ Sơ Ứng Tuyển'}
                </h4>
                <p className="text-xs text-zinc-300">
                  {isEn
                    ? 'Thank you! The GreenSoftits Talent Acquisition team will review your credentials and contact you within 48 business hours.'
                    : 'Cảm ơn bạn! Đội ngũ Talent Acquisition của GreenSoftits sẽ liên hệ trao đổi chi tiết trong vòng 48 giờ làm việc.'}
                </p>
                <button
                  onClick={() => setApplyStatus('idle')}
                  className="mt-3 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors cursor-pointer"
                >
                  {isEn ? 'Apply for another role' : 'Ứng tuyển vị trí khác'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3.5">
                <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  {isEn ? `Fast Apply for ${currentJob.title}` : 'Ứng tuyển nhanh vào vị trí này'}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? 'Your Full Name *' : 'Họ và tên của bạn *'}
                      value={applyForm.name}
                      onChange={e => setApplyForm({ ...applyForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder={isEn ? 'Your Email Address *' : 'Email liên hệ *'}
                      value={applyForm.email}
                      onChange={e => setApplyForm({ ...applyForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={isEn ? 'Phone Number *' : 'Số điện thoại *'}
                      value={applyForm.phone}
                      onChange={e => setApplyForm({ ...applyForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder={isEn ? 'LinkedIn / GitHub / Portfolio Link' : 'Link CV / LinkedIn / GitHub'}
                      value={applyForm.linkedin}
                      onChange={e => setApplyForm({ ...applyForm, linkedin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder={isEn ? 'Summary of relevant AI experience or message...' : 'Tóm tắt ngắn gọn kinh nghiệm AI hoặc ghi chú thêm...'}
                    value={applyForm.notes}
                    onChange={e => setApplyForm({ ...applyForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={applyStatus === 'loading'}
                  className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {applyStatus === 'loading'
                      ? (isEn ? 'Submitting Application...' : 'Đang gửi hồ sơ...')
                      : (isEn ? `Submit Application for ${currentJob.title}` : `Nộp Hồ Sơ Ứng Tuyển: ${currentJob.title}`)}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
