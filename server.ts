import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory submissions stores
const contactSubmissions: Array<{
  id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  createdAt: string;
}> = [];

const demoRequests: Array<{
  id: string;
  name: string;
  email: string;
  company?: string;
  useCase?: string;
  createdAt: string;
}> = [];

// API Endpoints matching GreenSoft Company Brochure 2026
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    company: 'GreenSoft',
    slogan: 'Make It Different with Applied AI',
    brochureEdition: '2026',
    address: '32/26 Bach Dang street, Binh Thanh, Ho Chi Minh City, Vietnam',
    email: 'sales@greensoftits.com',
    website: 'greensoftits.com',
    stats: {
      productsInProduction: 16,
      industriesServed: '7+',
      operations: '24/7 Intelligent operations'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/api/services', (_req, res) => {
  res.json({
    company: 'GreenSoft',
    brochureYear: 2026,
    tagline: 'Make It Different with Applied AI',
    mission: 'Generative AI · Large Language Models · IoT — engineered into working products that automate operations, protect your platforms and turn data into decisions.',
    pillars: [
      {
        id: 'genai',
        title: 'Generative AI',
        desc: 'Content generation, predictive analytics and personalisation at enterprise scale.'
      },
      {
        id: 'llm',
        title: 'Large Language Models',
        desc: 'RAG pipelines, fine-tuning and vector search turn your own documents, tickets and conversations into an assistant that actually knows your business.'
      },
      {
        id: 'iot',
        title: 'IoT & Edge Intelligence',
        desc: 'Cameras, sensors and edge inference feed a single control plane, so anomalies are detected and escalated in seconds rather than reviewed after the fact.'
      }
    ],
    products: [
      { id: '01', name: 'Anomaly Detection with IoT', category: 'Operations & Security' },
      { id: '02', name: 'Bot Management', category: 'Operations & Security' },
      { id: '03', name: 'Smart Supermarket Platform', category: 'Operations & Security' },
      { id: '04', name: 'Smart Factory (iMES)', category: 'Operations & Security' },
      { id: '05', name: 'Chat & Call Virtual Assistant', category: 'Customer Engagement' },
      { id: '06', name: 'AI Chatbot', category: 'Customer Engagement' },
      { id: '07', name: 'Omni-Channel Social Chat', category: 'Customer Engagement' },
      { id: '08', name: 'Call Center', category: 'Customer Engagement' },
      { id: '09', name: 'Smart CRM & Lead Management', category: 'Marketing & Business' },
      { id: '10', name: 'Personalised Campaigns', category: 'Marketing & Business' },
      { id: '11', name: 'Social Listening', category: 'Marketing & Business' },
      { id: '12', name: 'Multimedia Management System', category: 'Data Intelligence' },
      { id: '13', name: 'Multi Social Posting', category: 'Marketing & Business' },
      { id: '14', name: 'Crisis Management', category: 'Marketing & Business' },
      { id: '15', name: 'EduTech (Smart LMS)', category: 'Education' },
      { id: '16', name: 'HRMS', category: 'Business Platform' }
    ]
  });
});

app.get('/api/telemetry', (_req, res) => {
  const p99 = +(7.6 + Math.random() * 1.4).toFixed(2);
  const throughput = Math.floor(42000 + Math.random() * 3000);
  const clusterLoad = +(93 + Math.random() * 4).toFixed(1);
  res.json({
    status: 'ONLINE',
    region: 'ap-southeast-1 (Ho Chi Minh City / Singapore)',
    clusterLoad: `${clusterLoad}%`,
    p99Latency: `${p99}ms`,
    throughput: `${throughput.toLocaleString()} req/s`,
    greenEnergyIndex: '99.4%',
    activeNodes: 128
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, service, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const submission = {
    id: `gs-msg-${Date.now()}`,
    name,
    email,
    company: company || 'Not specified',
    service: service || 'General AI Inquiry',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(submission);
  return res.json({
    success: true,
    message: 'Cảm ơn quý khách đã gửi thông tin đến GreenSoft! Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ.',
    submissionId: submission.id
  });
});

app.post('/api/demo-request', (req, res) => {
  const { name, email, company, useCase } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const demo = {
    id: `gs-demo-${Date.now()}`,
    name,
    email,
    company: company || 'Enterprise',
    useCase: useCase || 'Applied AI Product Deployment',
    createdAt: new Date().toISOString()
  };

  demoRequests.push(demo);
  return res.json({
    success: true,
    message: 'Yêu cầu Demo sản phẩm GreenSoft đã được ghi nhận. Chúng tôi sẽ liên hệ để chuẩn bị kịch bản thử nghiệm.',
    demoId: demo.id
  });
});

async function start() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GreenSoft Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
