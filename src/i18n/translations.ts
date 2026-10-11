export type Language = 'EN' | 'VI';

export interface Translations {
  nav: {
    about: string;
    products: string;
    recruitment: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    kickerTag: string;
    kickerSub: string;
    headlineLine1: string;
    headlineLine2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      productsNum: string;
      productsLabel: string;
      industriesNum: string;
      industriesLabel: string;
      operationsNum: string;
      operationsLabel: string;
    };
    scrollCue: string;
  };
  common: {
    readMore: string;
    viewAll: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      about: 'About',
      products: 'Products',
      recruitment: 'Recruitment',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
    },
    hero: {
      kickerTag: 'GreenSoftits Co.,Ltd',
      kickerSub: 'Applied AI Platform',
      headlineLine1: 'Make It Different',
      headlineLine2: 'with Applied AI',
      sub: 'Generative AI · Large Language Models · IoT — engineered into high-performance enterprise systems that automate workflows, secure digital operations, and convert telemetry into competitive advantage.',
      ctaPrimary: 'Get in Touch',
      ctaSecondary: 'Explore Products',
      metrics: {
        productsNum: '16',
        productsLabel: 'AI Products in production',
        industriesNum: '7+',
        industriesLabel: 'Enterprise industries served',
        operationsNum: '24/7',
        operationsLabel: 'Intelligent autonomic operations',
      },
      scrollCue: 'Scroll to explore',
    },
    common: {
      readMore: 'Learn More',
      viewAll: 'View All',
    },
  },
  VI: {
    nav: {
      about: 'Về chúng tôi',
      products: 'Sản phẩm',
      recruitment: 'Tuyển dụng',
      contact: 'Liên hệ',
      getInTouch: 'Liên hệ ngay',
    },
    hero: {
      kickerTag: 'GreenSoftits Co.,Ltd',
      kickerSub: 'Nền tảng Trí tuệ nhân tạo Ứng dụng',
      headlineLine1: 'Khác biệt vượt trội',
      headlineLine2: 'với Applied AI',
      sub: 'Generative AI · Large Language Models · IoT — kiến trúc thành giải pháp doanh nghiệp thực chiến giúp tự động hóa quy trình, bảo vệ nền tảng và biến dữ liệu thành quyết định chuẩn xác.',
      ctaPrimary: 'Liên hệ hợp tác',
      ctaSecondary: 'Khám phá sản phẩm',
      metrics: {
        productsNum: '16',
        productsLabel: 'Sản phẩm AI sẵn sàng thương mại',
        industriesNum: '7+',
        industriesLabel: 'Lĩnh vực công nghiệp then chốt',
        operationsNum: '24/7',
        operationsLabel: 'Vận hành thông minh không gián đoạn',
      },
      scrollCue: 'Cuộn xuống khám phá',
    },
    common: {
      readMore: 'Xem chi tiết',
      viewAll: 'Xem tất cả',
    },
  },
};
