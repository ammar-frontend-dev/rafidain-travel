export type DestinationCategory = 'water' | 'mountain' | 'archaeological';

export interface Destination {
  id: number;
  name: string;
  category: DestinationCategory;
  categoryLabel: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  location: string;
}

export interface TimelineDay {
  day: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  text: string;
  avatar: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'سفاري الأهوار',
    category: 'water',
    categoryLabel: 'رحلة مائية',
    description: 'تجديف بقوارب المشحوف في أهوار الجبايش، مراقبة الطيور المهاجرة، ومبيت في بيوت الصيادين التقليدية.',
    duration: '3 أيام',
    price: '350,000 د.ع',
    image: 'https://images.pexels.com/photos/6105634/pexels-photo-6105634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'أهوار الجبايش، الناصرية',
  },
  {
    id: 2,
    name: 'التخييم في جبال راوندوز',
    category: 'mountain',
    categoryLabel: 'رحلة جبلية',
    description: 'تخييم فوق قمم كردستان الخضراء، مسارات المشي الجبلي، وشلالات طبيعية خلابة في أحضان الطبيعة.',
    duration: '4 أيام',
    price: '450,000 د.ع',
    image: 'https://images.pexels.com/photos/24861075/pexels-photo-24861075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'راوندوز، أربيل',
  },
  {
    id: 3,
    name: 'استكشاف آثار بابل',
    category: 'archaeological',
    categoryLabel: 'رحلة أثرية',
    description: 'جولة في مدينة بابل التاريخية، أسوار المدينة القديمة، متحف بابل، وقصر الملك نبوخذنصر.',
    duration: 'يوم واحد',
    price: '150,000 د.ع',
    image: 'https://images.pexels.com/photos/12050747/pexels-photo-12050747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'بابل، الحلة',
  },
  {
    id: 4,
    name: 'تجديف بحيرة دوكان',
    category: 'water',
    categoryLabel: 'رحلة مائية',
    description: 'تجديف بالكاياك في مياه بحيرة دوكان الزرقاء الصافية، غداء على ضفاف البحيرة، وغروب فوق الجبال.',
    duration: 'يومين',
    price: '250,000 د.ع',
    image: 'https://images.pexels.com/photos/38266450/pexels-photo-38266450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'بحيرة دوكان، السليمانية',
  },
  {
    id: 5,
    name: 'جولة زقورة أور',
    category: 'archaeological',
    categoryLabel: 'رحلة أثرية',
    description: 'زيارة زقورة أور النموذجية، أحد أقدم المعابد في تاريخ البشرية، ومدينة الوركاء التاريخية.',
    duration: 'يوم واحد',
    price: '180,000 د.ع',
    image: 'https://images.pexels.com/photos/23432417/pexels-photo-23432417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'أور، ذي قار',
  },
  {
    id: 6,
    name: 'مسارات جبل بنجوين',
    category: 'mountain',
    categoryLabel: 'رحلة جبلية',
    description: 'مغامرة مشي في مسارات جبل بنجوين الوعرة، قرى جبلية أصيلة، وشاي كرك على ارتفاع 2000 متر.',
    duration: '3 أيام',
    price: '400,000 د.ع',
    image: 'https://images.pexels.com/photos/10127631/pexels-photo-10127631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'بنجوين، السليمانية',
  },
];

export const timelineDays: TimelineDay[] = [
  {
    day: 'اليوم الأول',
    title: 'التجمع والانطلاق',
    description: 'نلتقي في نقطة التجمع صباحاً، نتعرف على فريق المرشدين ونستلم معدات الرحلة. ننطلق في حافلة مكيّفة نحو الوجهة مع استراحة لشاي الطريق.',
    icon: 'Users',
  },
  {
    day: 'اليوم الثاني',
    title: 'جولة الزوارق والغداء المسكوف',
    description: 'صباحاً نركب قوارب المشحوف التقليدية لجولة في الأهوار، نراقب الطيور ونستمتع بالطبيعة. غداءً نأكل سمكة المسكوف الشهية على ضفاف الماء.',
    icon: 'Sailboat',
  },
  {
    day: 'اليوم الثالث',
    title: 'العودة والوداع',
    description: 'نستيقظ على صوت الطيور، فطور ريفي تقليدي، ثم جولة مصوّرة أخيرة قبل العودة. نصل إلى نقطة الانطلاق بعد عصرٍ مليء بالذكريات.',
    icon: 'Home',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/6105634/pexels-photo-6105634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'قارب في أهوار العراق',
    caption: 'أهوار الجبايش عند الغروب',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/24861075/pexels-photo-24861075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'جبال كردستان الخضراء',
    caption: 'وادي سليمانية',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/12050747/pexels-photo-12050747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'آثار بابل',
    caption: 'مدينة بابل التاريخية',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/23423727/pexels-photo-23423727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'قارب في بحيرة أربيل',
    caption: 'غروب بحيرة أربيل',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/9741287/pexels-photo-9741287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'منظر طبيعي في أربيل',
    caption: 'سهول كردستان',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/11876369/pexels-photo-11876369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'صبي يقود قارب في الناصرية',
    caption: 'حياة الأهوار اليومية',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/10374326/pexels-photo-10374326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'تلال خضراء في كردستان',
    caption: 'مسارات جبلية خضراء',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/23432417/pexels-photo-23432417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'زقورة أور',
    caption: 'زقورة أور النموذجية',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/38266450/pexels-photo-38266450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'بحيرة دوكان',
    caption: 'غروب بحيرة دوكان',
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/32279994/pexels-photo-32279994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'وادي في أربيل',
    caption: 'وديان كردستان',
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/13189028/pexels-photo-13189028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'غروب في البصرة',
    caption: 'غروب شط العرب',
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/37442964/pexels-photo-37442964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'جسر في كردستان',
    caption: 'جسور الجبال',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'سارة العبيدي',
    country: 'بغداد، العراق',
    flag: '🇮🇶',
    text: 'تجربة لا تُنسى! قوارب المشحوف في الأهوار كانت كأنها رحلة عبر الزمن. المرشدون محترفون جداً والتنظيم كان ممتاز.',
    avatar: 'https://images.pexels.com/photos/5225493/pexels-photo-5225493.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Morrison',
    country: 'لندن، بريطانيا',
    flag: '🇬🇧',
    text: 'لم أكن أعرف أن العراق بهذه الطبيعة الخلابة. جبال كردستان تنافس جبال الألب. تنظيم رائع من البداية للنهاية.',
    avatar: 'https://images.pexels.com/photos/7968948/pexels-photo-7968948.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
  {
    id: 3,
    name: 'أحمد الكناني',
    country: 'البصرة، العراق',
    flag: '🇮🇶',
    text: 'أخذت عائلتي في رحلة آثار بابل وكانت تجربة تعليمية ممتعة للأطفال. الشركة تهتم بأدق التفاصيل.',
    avatar: 'https://images.pexels.com/photos/3782173/pexels-photo-3782173.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sophie Laurent',
    country: 'باريس، فرنسا',
    flag: '🇫🇷',
    text: 'زقورة أور تركتني مذهولة. حضارة بلاد ما بين النهرين أمام عينيك. شكراً لفريق رافدين على هذه الرحلة الثقافية.',
    avatar: 'https://images.pexels.com/photos/17436034/pexels-photo-17436034.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
  {
    id: 5,
    name: 'محمد جواد',
    country: 'النجف، العراق',
    flag: '🇮🇶',
    text: 'بحيرة دوكان كانت حلماً تحقق. المياه صافية والهواء نقي. أفضل رحلة عائلية قضيناها منذ سنوات.',
    avatar: 'https://images.pexels.com/photos/38397059/pexels-photo-38397059.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
  {
    id: 6,
    name: 'Emma Schmidt',
    country: 'برلين، ألمانيا',
    flag: '🇩🇪',
    text: 'التخييم في جبال راوندوز كان مغامرة العمر. النجوم في الليل لا تُصدق. أنصح كل محبي الطبيعة بتجربتها.',
    avatar: 'https://images.pexels.com/photos/28996740/pexels-photo-28996740.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
  },
];
