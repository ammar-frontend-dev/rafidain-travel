import { ChevronDown, Compass, Leaf, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToDestinations = () => {
    const el = document.querySelector('#destinations');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6105634/pexels-photo-6105634.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="أهوار العراق عند الغروب"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary-400/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-accent-400/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up">
          <Leaf className="w-4 h-4 text-primary-300" />
          <span className="text-sm text-white/90 font-medium">سياحة بيئية مستدامة</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up text-balance" style={{ animationDelay: '0.1s', opacity: 0 }}>
          اكتشف العراق
          <br />
          <span className="gradient-text">كما لم تشهده من قبل</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
          رحلات بيئية مستدامة تأخذك إلى قلب الطبيعة العراقية — من أهوار الجنوب إلى جبال كردستان الخضراء وآثار الحضارات العريقة.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <button
            onClick={scrollToDestinations}
            className="group inline-flex items-center gap-2 px-9 py-4 bg-primary-600 text-white font-semibold rounded-xl
                       hover:bg-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/40
                       hover:-translate-y-1 active:translate-y-0"
          >
            <Compass className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            استكشف رحلاتنا
          </button>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#about');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-9 py-4 border-2 border-white/30 text-white font-semibold rounded-xl
                       hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
          >
            تعرف علينا
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-in-up" style={{ animationDelay: '0.55s', opacity: 0 }}>
          {[
            { icon: MapPin, value: '+12', label: 'وجهة سياحية' },
            { icon: Compass, value: '+500', label: 'مسافر سعيد' },
            { icon: Leaf, value: '100%', label: 'صديقة للبيئة' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary-300" />
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToDestinations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="انتقل للأسفل"
      >
        <span className="text-xs font-medium">اكتشف المزيد</span>
        <div className="w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce-slow" />
        </div>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}
