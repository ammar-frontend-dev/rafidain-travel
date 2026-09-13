import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
  Compass,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { destinations } from '@/data';

type FormState = {
  name: string;
  email: string;
  destination: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'الرجاء إدخال الاسم';
    if (!form.email.trim()) {
      newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (!form.destination) newErrors.destination = 'الرجاء اختيار وجهة';
    if (!form.message.trim()) newErrors.message = 'الرجاء كتابة رسالة';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate a successful submission (front-end only)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', destination: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-5">
            <Mail className="w-4 h-4" />
            اتصل بنا
          </div>
          <h2 className="section-title">
            احجز <span className="gradient-text">رحلتك القادمة</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            جاهز لمغامرة العمر؟ تواصل معنا واحجز رحلتك الآن.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-primary-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-700/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-700/20 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">الهاتف</div>
                      <div className="text-sm font-medium" dir="ltr">+964 770 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">البريد الإلكتروني</div>
                      <div className="text-sm font-medium" dir="ltr">info@rafidain-travel.iq</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">العنوان</div>
                      <div className="text-sm font-medium">بغداد، شارع الرشيد، العراق</div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-xs text-white/50 mb-3">تابعنا</div>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Twitter].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors"
                        aria-label="تواصل اجتماعي"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="font-bold text-primary-900">ساعات العمل</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-charcoal/70">
                  <span>السبت - الخميس</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>الجمعة</span>
                  <span className="font-medium text-secondary-600">مغلق</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-gray-100 relative">
              {submitted && (
                <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center z-10 animate-fade-in">
                  <div className="relative">
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-success-100 animate-pulse-ring" />
                    <div className="w-20 h-20 rounded-full bg-success-500 flex items-center justify-center relative">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mt-6 mb-2">تم إرسال طلبك بنجاح!</h3>
                  <p className="text-sm text-charcoal/60 text-center max-w-xs">
                    شكراً لتواصلك معنا. سيتواصل معك فريقنا خلال 24 ساعة.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-primary-800 mb-2">
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-300" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="أدخل اسمك"
                      className={`input-field pr-12 ${errors.name ? 'border-error-400 ring-2 ring-error-400/20' : ''}`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-error-500 mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-primary-800 mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-300" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="example@email.com"
                      className={`input-field pr-12 ${errors.email ? 'border-error-400 ring-2 ring-error-400/20' : ''}`}
                      dir="ltr"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-error-500 mt-1.5">{errors.email}</p>}
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-semibold text-primary-800 mb-2">
                    الوجهة المفضلة
                  </label>
                  <div className="relative">
                    <Compass className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-300 z-10" />
                    <select
                      value={form.destination}
                      onChange={(e) => updateField('destination', e.target.value)}
                      className={`input-field pr-12 appearance-none cursor-pointer ${errors.destination ? 'border-error-400 ring-2 ring-error-400/20' : ''}`}
                    >
                      <option value="">اختر وجهتك...</option>
                      {destinations.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} — {d.location}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.destination && <p className="text-xs text-error-500 mt-1.5">{errors.destination}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-primary-800 mb-2">
                    رسالتك
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-primary-300" />
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="اكتب تفاصيل طلبك هنا..."
                      rows={4}
                      className={`input-field pr-12 resize-none ${errors.message ? 'border-error-400 ring-2 ring-error-400/20' : ''}`}
                    />
                  </div>
                  {errors.message && <p className="text-xs text-error-500 mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الطلب
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
