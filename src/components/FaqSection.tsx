import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Greensoft có hỗ trợ triển khai trên cụm máy chủ On-Premise của doanh nghiệp không?',
      a: 'Hoàn toàn có. Nền tảng hạ tầng của Greensoft được đóng gói dưới dạng Kubernetes / Helm Charts đạt chuẩn Enterprise, hỗ trợ chạy 100% trong môi trường mạng cô lập hoàn toàn (Air-Gapped). Toàn bộ trọng số mô hình và luồng dữ liệu truy vấn không bao giờ rời khỏi tường lửa của quý doanh nghiệp.'
    },
    {
      q: 'Tiêu chuẩn cam kết độ trễ (Latency) sub-10ms và SLA 99.99% được bảo đảm như thế nào?',
      a: 'Chúng tôi sử dụng thuật toán suy luận độc quyền kết hợp PagedAttention, Speculative Decoding và kỹ thuật Zero-Copy nạp trọng số qua mạng RoCE v2 / InfiniBand. Hệ thống bao gồm cụm dự phòng Multi-Region Failover tự động kích hoạt chuyển hướng dưới 200ms khi có sự cố phần cứng.'
    },
    {
      q: 'Dữ liệu của khách hàng có được bảo mật và tuyệt đối không dùng để huấn luyện lại?',
      a: 'Chính sách bảo mật của Greensoft cam kết Zero Data Retention theo mặc định đối với các cụm suy luận. Dữ liệu ngữ cảnh của khách hàng chỉ tồn tại trong VRAM GPU trong suốt chu kỳ tính toán và tự động xóa sạch. Greensoft đạt chứng chỉ ISO/IEC 42001 và SOC 2 Type II về quản trị an toàn thông tin AI.'
    },
    {
      q: 'Nền tảng hỗ trợ những mô hình AI nào? Có thể fine-tune mô hình riêng không?',
      a: 'Greensoft hỗ trợ tất cả các kiến trúc mô hình ngôn ngữ lớn và đa phương thức hàng đầu (Llama 3.1/3.3, Qwen 2.5, DeepSeek V3/R1, Whisper, Segment Anything, v.v.), đồng thời cung cấp pipeline Fine-Tuning (LoRA / Full Fine-tuning) chuyên biệt trên dữ liệu riêng của doanh nghiệp.'
    },
    {
      q: 'Quy trình thử nghiệm PoC (Proof-of-Concept) và thời gian đưa vào sản xuất là bao lâu?',
      a: 'Thông thường, đội ngũ kiến trúc sư AI của Greensoft sẽ thiết lập môi trường Sandbox thử nghiệm trong vòng 48 giờ làm việc. Giai đoạn PoC đánh giá hiệu năng diễn ra từ 1 đến 2 tuần trước khi tiến hành chuyển giao và vận hành trên hệ thống production.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-emerald-400 font-semibold mb-6">
        <span>05</span>
        <span className="w-8 h-[1px] bg-emerald-400/40"></span>
        <span>Giải Đáp Thắc Mắc</span>
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
          Câu Hỏi Thường Gặp
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
          Tất cả thông tin chi tiết về triển khai, tính tương thích, bảo mật và chi phí vận hành hạ tầng Greensoft AI.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl bg-zinc-950/70 border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-white tracking-tight">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
