import React from 'react';
import { GreensoftLogo } from './GreensoftLogo';
import { Language } from '../i18n/translations';

interface FooterProps {
  lang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang = 'VI' }) => {
  const isEn = lang === 'EN';

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] py-16 px-6 sm:px-12 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <GreensoftLogo variant="compact" size={42} />
          <div className="text-xs space-y-1">
            <div className="text-white font-semibold">GreenSoftits Co.,Ltd</div>
            <div className="text-zinc-500">Make It Different with Applied AI</div>
            <div className="text-zinc-500">{isEn ? '32/26 Bach Dang street, Binh Thanh, Ho Chi Minh City, Vietnam' : '32/26 đường Bạch Đằng, P. Bình Thạnh, TP. Hồ Chí Minh, Việt Nam'}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">{isEn ? 'About' : 'Về chúng tôi'}</a>
          <a href="#features" className="hover:text-white transition-colors">{isEn ? 'Products' : 'Sản phẩm'}</a>
          <a href="#solutions" className="hover:text-white transition-colors">{isEn ? 'Deployments' : 'Giải pháp'}</a>
          <a href="#recruitment" className="hover:text-white transition-colors">{isEn ? 'Recruitment' : 'Tuyển dụng'}</a>
          <a href="#contact" className="hover:text-white transition-colors">{isEn ? 'Contact' : 'Liên hệ'}</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          © 2026 GreenSoftits Co.,Ltd. All rights reserved. · greensoftits.com · sales@greensoftits.com
        </div>
        <div className="flex items-center gap-6">
          <span>{isEn ? 'AI Production Systems' : 'Hệ thống AI Thương mại'}</span>
          <span>{isEn ? '7+ Industries Served' : '7+ Ngành công nghiệp'}</span>
          <span>{isEn ? '24/7 Intelligent Operations' : 'Vận hành thông minh 24/7'}</span>
        </div>
      </div>
    </footer>
  );
};
