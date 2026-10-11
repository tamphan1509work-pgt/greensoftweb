import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Language } from '../i18n/translations';
import { getJobs } from '../data/jobs';

interface ApplyFormProps {
  lang?: Language;
  /** Pre-selected position id */
  defaultRole?: string;
}

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors';

/** Job application form shared by the homepage recruitment section and the careers page. */
export const ApplyForm: React.FC<ApplyFormProps> = ({ lang = 'VI', defaultRole }) => {
  const isEn = lang === 'EN';
  const jobs = getJobs(lang);
  const openRole = 'open-application';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: defaultRole ?? jobs[0]?.id ?? openRole,
    link: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
        <h4 className="text-lg font-bold text-white">
          {isEn ? 'Application received' : 'Đã tiếp nhận hồ sơ ứng tuyển'}
        </h4>
        <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
          {isEn
            ? 'Thank you! Our talent team will review your profile and get back to you within 48 business hours.'
            : 'Cảm ơn bạn! Đội ngũ tuyển dụng GreenSoft sẽ xem hồ sơ và liên hệ với bạn trong vòng 48 giờ làm việc.'}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors cursor-pointer"
        >
          {isEn ? 'Send another application' : 'Gửi hồ sơ khác'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <input type="text" required placeholder={isEn ? 'Full name *' : 'Họ và tên *'} value={form.name} onChange={update('name')} className={inputClass} />
        <input type="email" required placeholder={isEn ? 'Email *' : 'Email *'} value={form.email} onChange={update('email')} className={inputClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <input type="tel" required placeholder={isEn ? 'Phone number *' : 'Số điện thoại *'} value={form.phone} onChange={update('phone')} className={inputClass} />
        <select value={form.role} onChange={update('role')} className={inputClass} aria-label={isEn ? 'Position' : 'Vị trí ứng tuyển'}>
          {jobs.map(job => (
            <option key={job.id} value={job.id}>{job.title}</option>
          ))}
          <option value={openRole}>{isEn ? 'Open application' : 'Ứng tuyển tự do'}</option>
        </select>
      </div>
      <input
        type="url"
        required
        placeholder={isEn ? 'Link to your CV / GitHub / Portfolio *' : 'Link CV / GitHub / Portfolio *'}
        value={form.link}
        onChange={update('link')}
        className={inputClass}
      />
      <textarea
        rows={3}
        placeholder={isEn ? 'Tell us about a project you built with AI…' : 'Chia sẻ ngắn về dự án bạn đã làm cùng AI…'}
        value={form.notes}
        onChange={update('notes')}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {status === 'loading' ? (isEn ? 'Sending…' : 'Đang gửi…') : (isEn ? 'Submit application' : 'Gửi hồ sơ ứng tuyển')}
      </button>
    </form>
  );
};
