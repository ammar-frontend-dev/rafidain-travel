import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-gradient-to-b from-primary-50/30 to-cream"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-5">
            <Quote className="w-4 h-4" />
            آراء السواح
          </div>
          <h2 className="section-title">
            ماذا قال <span className="gradient-text">مسافرونا</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            تجارب حقيقية من مسافرين اكتشفوا العراق معنا.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-10 h-10 text-primary-200 mx-auto mb-4" />
                    <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
                      «{t.text}»
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-100"
                        />
                        <span className="absolute -bottom-1 -left-1 text-lg">{t.flag}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary-900">{t.name}</div>
                        <div className="text-sm text-charcoal/50">{t.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="السابق"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="التالي"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? 'w-8 bg-primary-600'
                    : 'w-2.5 bg-primary-200 hover:bg-primary-300'
                }`}
                aria-label={`رأي ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
