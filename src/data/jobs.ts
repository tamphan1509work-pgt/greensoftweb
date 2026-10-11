import { Language } from '../i18n/translations';

export interface JobPosting {
  id: string;
  title: string;
  tagline: string;
  facts: { label: string; value: string }[];
  opportunity: string;
  responsibilities: string[];
  aiDev: {
    intro: string;
    lifecycle: string[];
    tools: string[];
    note: string;
  };
  requirements: string[];
  pluses: string[];
  students: string;
  benefits: string[];
  careerPath: string[];
  closing: string;
  howToApply: string;
}

/** Open positions. Content from "Thông báo tuyển dụng AI-Native Software Engineer". */
export const getJobs = (lang: Language): JobPosting[] => {
  const isEn = lang === 'EN';
  return [
    {
      id: 'ai-native-software-engineer',
      title: 'AI-Native Software Engineer',
      tagline: 'ERPNext • AI-Assisted Development • AI Transformation',
      facts: isEn
        ? [
            { label: 'Openings', value: '20 positions' },
            { label: 'Salary', value: 'From 20M VND/month' },
            { label: 'Who', value: 'Developer / Fresher / Final-year student' },
            { label: 'Type', value: 'Full-time' },
          ]
        : [
            { label: 'Số lượng', value: '20 vị trí' },
            { label: 'Mức lương', value: 'Từ 20 triệu VNĐ/tháng' },
            { label: 'Đối tượng', value: 'Developer / Fresher / SV năm cuối' },
            { label: 'Hình thức', value: 'Full-time' },
          ],
      opportunity: isEn
        ? 'Join the team building AI Transformation, Intelligent Enterprise and ERPNext projects. This role is for a new generation of software engineers who use AI as an everyday development tool — from requirement analysis, design, coding, testing and debugging to code review and documentation.'
        : 'Tham gia đội ngũ phát triển các dự án AI Transformation, Intelligent Enterprise và ERPNext. Đây là vị trí dành cho thế hệ Software Engineer mới: sử dụng AI như một công cụ phát triển phần mềm hàng ngày, từ phân tích yêu cầu, thiết kế, coding, testing, debugging đến code review và documentation.',
      responsibilities: isEn
        ? [
            'Develop and customise ERPNext/Frappe: custom apps, DocTypes, workflows, reports, REST APIs and business modules.',
            'Build software and microservices, and integrate ERPNext with CRM, data platforms, AI platforms, IoT, mobile and external systems.',
            'Work with REST APIs, webhooks, event-driven architecture, message queues/message bus and API gateways.',
            'Help build AI assistants, AI agents, LLM/RAG, intelligent workflows and AI-powered automation.',
            'Build workflow automation with n8n and bring AI agents into business processes.',
            'Take part in testing, optimisation, documentation and software deployment.',
          ]
        : [
            'Phát triển và tùy biến ERPNext/Frappe: Custom App, DocType, Workflow, Report, REST API và module nghiệp vụ.',
            'Phát triển Software/Microservices và tích hợp ERPNext với CRM, Data Platform, AI Platform, IoT, Mobile và hệ thống bên ngoài.',
            'Làm việc với REST API, Webhook, Event-driven Architecture, Message Queue/Message Bus và API Gateway.',
            'Tham gia xây dựng AI Assistant, AI Agent, LLM/RAG, Intelligent Workflow và AI-powered Automation.',
            'Phát triển workflow automation với n8n và tích hợp AI Agents vào quy trình doanh nghiệp.',
            'Tham gia kiểm thử, tối ưu, documentation và triển khai phần mềm.',
          ],
      aiDev: {
        intro: isEn
          ? 'Strong preference for candidates who use AI across the whole software development lifecycle:'
          : 'Ưu tiên cao ứng viên biết sử dụng AI trong toàn bộ Software Development Lifecycle:',
        lifecycle: ['Requirement', 'Design', 'Coding', 'Testing', 'Debugging', 'Code Review', 'Documentation'],
        tools: [
          'GitHub Copilot',
          'Claude Code / Claude',
          'OpenAI Codex',
          'Cursor',
          'Gemini Code Assist',
          'Windsurf',
          'Amazon Q Developer',
          'JetBrains AI Assistant',
          'Cline / Roo Code',
        ],
        note: isEn
          ? 'Comfortable using AI to generate, refactor and debug code, write tests, review code, analyse a codebase and optimise software.'
          : 'Biết dùng AI để generate/refactor/debug code, viết test, review code, phân tích codebase và tối ưu phần mềm.',
      },
      requirements: isEn
        ? [
            'Graduated or in the final year of IT, Computer Science, Software Engineering, Information Systems, AI/Data Science or a related field.',
            'Solid programming foundation in Python, JavaScript/TypeScript, Java, C# or an equivalent language.',
            'Knowledge of OOP, databases/SQL, REST APIs, Git and the software development lifecycle.',
            'Logical thinking, problem-solving and the ability to teach yourself new technology.',
            'ERPNext/Frappe experience is not required — candidates with strong software engineering fundamentals will be trained.',
          ]
        : [
            'Tốt nghiệp hoặc đang học năm cuối CNTT, Khoa học máy tính, Kỹ thuật phần mềm, Hệ thống thông tin, AI/Data Science hoặc ngành liên quan.',
            'Có nền tảng lập trình tốt; biết Python, JavaScript/TypeScript, Java, C# hoặc ngôn ngữ tương đương.',
            'Có kiến thức OOP, Database/SQL, REST API, Git và Software Development Lifecycle.',
            'Có tư duy logic, problem-solving và khả năng tự học công nghệ mới.',
            'Không bắt buộc có kinh nghiệm ERPNext/Frappe; ứng viên có nền tảng Software Engineering tốt sẽ được đào tạo.',
          ],
      pluses: isEn
        ? [
            'Have used AI coding assistants in personal or graduation projects.',
            'A GitHub profile, portfolio or real product to show.',
            'Experience with ERPNext/Frappe, Python, JavaScript/TypeScript.',
            'Docker, Linux, Redis, PostgreSQL/MariaDB, n8n, microservices, Kubernetes.',
            'Knowledge of LLMs, RAG, AI agents or prompt engineering.',
          ]
        : [
            'Đã sử dụng AI Coding Assistant trong các project cá nhân/đồ án.',
            'Có GitHub, portfolio hoặc sản phẩm thực tế.',
            'Có kinh nghiệm ERPNext/Frappe, Python, JavaScript/TypeScript.',
            'Biết Docker, Linux, Redis, PostgreSQL/MariaDB, n8n, Microservices, Kubernetes.',
            'Có kiến thức LLM, RAG, AI Agents hoặc Prompt Engineering.',
          ],
      students: isEn
        ? 'We do not weigh years of experience heavily. We value technical foundations, the ability to learn, an AI mindset and the ability to ship. Final-year students with a graduation project, GitHub or a real software/AI project are strongly encouraged to apply.'
        : 'Không đặt nặng số năm kinh nghiệm. Chúng tôi đánh giá cao nền tảng kỹ thuật, khả năng học hỏi, AI mindset và khả năng tạo ra sản phẩm. Sinh viên năm cuối có đồ án tốt nghiệp, GitHub hoặc project Software/AI thực tế được khuyến khích mạnh mẽ ứng tuyển.',
      benefits: isEn
        ? [
            'Salary from 20M VND/month based on ability, plus project/KPI bonuses.',
            'Real AI Transformation projects, mentored by Senior Engineers and Technical Leads.',
            'Training in ERPNext/Frappe and hands-on work with AI agents, LLMs, microservices, cloud and automation.',
          ]
        : [
            'Lương từ 20 triệu VNĐ/tháng theo năng lực; thưởng dự án/KPI.',
            'Tham gia các dự án AI Transformation thực tế và được mentoring bởi Senior Engineer/Technical Lead.',
            'Được đào tạo ERPNext/Frappe và tiếp cận AI Agents, LLM, Microservices, Cloud, Automation.',
          ],
      careerPath: [
        'Final-year Student / Fresher',
        'AI-Native Software Engineer',
        'Senior Engineer',
        'Technical Lead / AI Solution Architect',
      ],
      closing: "Don't just code with AI. Build the future of software with AI.",
      howToApply: isEn
        ? 'Apply: send your CV + GitHub/portfolio (if any)'
        : 'Ứng tuyển: Gửi CV + GitHub/Portfolio (nếu có)',
    },
  ];
};
