import { useEffect, useRef, useState } from 'react';
import { Leaf, Heart, Globe2, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'مسافر سعيد' },
  { icon: Globe2, value: 12, suffix: '+', label: 'وجهة سياحية' },
  { icon: Leaf, value: 5, suffix: '', label: 'سنوات خبرة' },
  { icon: Heart, value: 100, suffix: '%', label: 'صديقة للبيئة' },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="https://images.pexels.com/photos/24861075/pexels-photo-24861075.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="جبال كردستان الخضراء"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-xs">
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary-800">سياحة مستدامة</div>
                <div className="text-xs text-charcoal/60 leading-relaxed">نحافظ على الطبيعة العراقية في كل رحلة</div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-primary-200 -z-10" />
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-5">
              <Heart className="w-4 h-4" />
              عن رافدين
            </div>
            <h2 className="section-title">
              نُحيي السياحة الداخلية
              <br />
              <span className="gradient-text">ونحمي طبيعة العراق</span>
            </h2>
            <p className="text-base md:text-lg text-charcoal/70 leading-relaxed mb-5">
              في «رافدين» نؤمن بأن العراق يخفي كنوزاً طبيعية وحضارية تستحق أن تُكتشف. من أهوار الجبايش المدرجة على قائمة التراث العالمي، إلى قمم كردستان الخضراء، وآثار بابل وأور — وجهات تنبض بالحياة والتاريخ.
            </p>
            <p className="text-base md:text-lg text-charcoal/70 leading-relaxed mb-8">
              رسالتنا هي إحياء السياحة الداخلية بطريقة مستدامة تحترم البيئة وتدعم المجتمعات المحلية، وتُعرّف العالم بجمال العراق الطبيعي والحضاري.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['مرشدون محترفون', 'معدات حديثة', 'أمان كامل', 'تجارب أصيلة'].map((feat) => (
                <span
                  key={feat}
                  className="px-4 py-2 bg-white border border-primary-200 rounded-lg text-sm font-medium text-primary-700"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 text-center border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-800">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-charcoal/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
