import { Sailboat, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الشركة', href: '#about' },
  { label: 'الوجهات', href: '#destinations' },
  { label: 'جدول الرحلة', href: '#timeline' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'آراء السواح', href: '#testimonials' },
  { label: 'اتصل بنا', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center">
                <Sailboat className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">رافدين</span>
                <span className="text-[10px] tracking-widest text-white/50">RAFIDAIN TRAVEL</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              شركة سياحة بيئية مستدامة تأخذك إلى أجمل بقاع العراق — من أهوار الجنوب إلى جبال الشمال وآثار الحضارات.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  aria-label="تواصل اجتماعي"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
              روابط سريعة
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-white/70 hover:text-primary-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
              تواصل معنا
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <div dir="ltr" className="text-right">+964 770 123 4567</div>
              <div dir="ltr" className="text-right">info@rafidain-travel.iq</div>
              <div>بغداد، شارع الرشيد، العراق</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 رافدين للسياحة البيئية. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5">
            صُنع بـ <Heart className="w-3.5 h-3.5 fill-secondary-500 text-secondary-500" /> في العراق
          </p>
        </div>
      </div>
    </footer>
  );
}
