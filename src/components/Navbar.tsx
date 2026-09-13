import { useEffect, useState } from 'react';
import { Menu, X, Sailboat } from 'lucide-react';

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن الشركة', href: '#about' },
  { label: 'الوجهات', href: '#destinations' },
  { label: 'جدول الرحلة', href: '#timeline' },
  { label: 'المعرض', href: '#gallery' },
  { label: 'آراء السواح', href: '#testimonials' },
  { label: 'اتصل بنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Track active section
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
              scrolled ? 'bg-primary-600' : 'bg-white/15 backdrop-blur-md border border-white/20'
            }`}>
              <Sailboat className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-tight transition-colors duration-500 ${
              scrolled ? 'text-primary-800' : 'text-white'
            }`}>
              رافدين
            </span>
            <span className={`text-[10px] tracking-widest transition-colors duration-500 ${
              scrolled ? 'text-primary-500' : 'text-white/70'
            }`}>
              RAFIDAIN TRAVEL
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? activeSection === link.href
                    ? 'text-primary-700 active'
                    : 'text-charcoal/70 hover:text-primary-700'
                  : activeSection === link.href
                    ? 'text-white active'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary !px-6 !py-2.5 !text-sm"
          >
            احجز رحلتك
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-primary-800 hover:bg-primary-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label="القائمة"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${
        menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass mx-4 mt-3 rounded-2xl p-5 shadow-xl">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.href
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-charcoal/70 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary mt-2 !w-full"
            >
              احجز رحلتك
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
