import { useState } from 'react';
import { Clock, MapPin, Tag, ArrowLeft } from 'lucide-react';
import { destinations, type DestinationCategory } from '@/data';

type Filter = 'all' | DestinationCategory;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'الكل' },
  { key: 'water', label: 'رحلات مائية' },
  { key: 'mountain', label: 'رحلات جبلية' },
  { key: 'archaeological', label: 'رحلات أثرية' },
];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = destinations.filter(
    (d) => activeFilter === 'all' || d.category === activeFilter
  );

  return (
    <section id="destinations" className="py-24 md:py-32 bg-gradient-to-b from-cream to-primary-50/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-5">
            <MapPin className="w-4 h-4" />
            وجهاتنا
          </div>
          <h2 className="section-title">
            رحلات <span className="gradient-text">لا تُنسى</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            اختر من بين رحلاتنا المصممة بعناية لتأخذك إلى أجمل بقاع العراق.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                  : 'bg-white text-charcoal/70 hover:bg-primary-50 hover:text-primary-700 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((dest, i) => (
            <article
              key={dest.id}
              className="card-base group cursor-pointer animate-scale-in"
              style={{
                animationDelay: `${i * 0.08}s`,
                opacity: 0,
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-xs font-semibold text-primary-700">
                  {dest.categoryLabel}
                </span>

                {/* Hover details */}
                <div className="absolute bottom-0 right-0 left-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary-300" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-accent-300" />
                      {dest.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-secondary-600 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.location}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* Animated underline */}
                <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
                  <span className="relative">
                    تفاصيل الرحلة
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state (shouldn't happen but safe) */}
        {filtered.length === 0 && (
          <div className="text-center text-charcoal/50 py-12">
            لا توجد رحلات في هذا التصنيف حالياً.
          </div>
        )}
      </div>
    </section>
  );
}
