import { Users, Sailboat, Home, CalendarDays } from 'lucide-react';
import { timelineDays } from '@/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Sailboat,
  Home,
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-primary-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-700/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-primary-300 text-sm font-semibold mb-5">
            <CalendarDays className="w-4 h-4" />
            جدول الرحلة
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            رحلة <span className="gradient-text">نموذجية</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            تعرّف على ما ينتظرك في رحلة سفاري الأهوار — خطوة بخطوة.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute right-8 md:right-1/2 md:translate-x-1/2 top-0 bottom-0 w-1 timeline-line rounded-full" />

          <div className="space-y-12 md:space-y-0">
            {timelineDays.map((day, i) => {
              const Icon = iconMap[day.icon] ?? Users;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } reveal ${isLeft ? 'reveal-left' : 'reveal-right'}`}
                >
                  {/* Node dot */}
                  <div className="absolute right-8 md:right-1/2 md:translate-x-1/2 -translate-y-0 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-accent-400 ring-4 ring-primary-950" />
                      <div className="absolute inset-0 w-5 h-5 rounded-full bg-accent-400 animate-pulse-ring" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 pr-16 md:pr-0 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-primary-400/30 transition-all duration-400">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-300" />
                        </div>
                        <div>
                          <span className="text-xs text-accent-400 font-semibold uppercase tracking-wider">
                            {day.day}
                          </span>
                          <h3 className="text-lg font-bold text-white">
                            {day.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other half */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
