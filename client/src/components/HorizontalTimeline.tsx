import { useState } from 'react';

interface TimelineMilestone {
  year: number;
  label: string;
  labelArabic: string;
  description: string;
  type: 'birth' | 'revelation' | 'migration' | 'battle' | 'conquest' | 'death';
  icon: string;
}

const milestones: TimelineMilestone[] = [
  {
    year: 570,
    label: 'Birth',
    labelArabic: 'الميلاد',
    description: 'Born in Mecca (Year of the Elephant)',
    type: 'birth',
    icon: '👶'
  },
  {
    year: 610,
    label: 'First Revelation',
    labelArabic: 'الوحي الأول',
    description: 'Received first revelation at age 40',
    type: 'revelation',
    icon: '📖'
  },
  {
    year: 622,
    label: 'Hijrah',
    labelArabic: 'الهجرة',
    description: 'Migration to Medina (1 AH)',
    type: 'migration',
    icon: '🚶'
  },
  {
    year: 624,
    label: 'Badr',
    labelArabic: 'بدر',
    description: 'First major victory',
    type: 'battle',
    icon: '⚔️'
  },
  {
    year: 630,
    label: 'Conquest',
    labelArabic: 'الفتح',
    description: 'Peaceful conquest of Mecca',
    type: 'conquest',
    icon: '🏛️'
  },
  {
    year: 632,
    label: 'Farewell',
    labelArabic: 'الوداع',
    description: 'Final pilgrimage and sermon',
    type: 'conquest',
    icon: '🕌'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'birth':
      return 'from-blue-500 to-blue-600';
    case 'revelation':
      return 'from-emerald-500 to-emerald-600';
    case 'migration':
      return 'from-purple-500 to-purple-600';
    case 'battle':
      return 'from-red-500 to-red-600';
    case 'conquest':
      return 'from-amber-500 to-amber-600';
    case 'death':
      return 'from-gray-500 to-gray-600';
    default:
      return 'from-slate-500 to-slate-600';
  }
};

export default function HorizontalTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background with Islamic Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Ornamental Header */}
          <div className="mb-4 text-center">
            <div className="inline-block text-4xl mb-2">✦</div>
          </div>

          {/* Title with Arabic Calligraphy Style */}
          <div className="mb-2 text-center">
            <h2 
              className="text-4xl font-bold mb-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              رحلة النبي
            </h2>
            <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Amiri, serif' }}>
              The Prophet's Journey
            </h2>
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
            <span className="text-amber-600 text-2xl">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
          </div>

          <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
            Major milestones spanning 62 years (570-632 CE) • من 570 إلى 632 م
          </p>

          {/* Timeline Container */}
          <div className="relative mb-12">
            {/* Decorative Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40" />

            {/* Milestones Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.year}-${index}`}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Milestone Container */}
                  <div className="flex flex-col items-center">
                    {/* Decorative Circle Background */}
                    <div className="relative mb-2">
                      {/* Outer Ring */}
                      <div
                        className={`absolute inset-0 w-12 h-12 rounded-full border-2 border-amber-400 opacity-30 ${
                          hoveredIndex === index ? 'animate-pulse' : ''
                        }`}
                      />

                      {/* Main Dot */}
                      <div
                        className={`w-10 h-10 rounded-full border-4 border-background shadow-lg cursor-pointer transition-all transform bg-gradient-to-br ${getTypeColor(
                          milestone.type
                        )} ${hoveredIndex === index ? 'scale-125 shadow-2xl' : 'scale-100'}`}
                      >
                        <div className="w-full h-full flex items-center justify-center text-lg">
                          {milestone.icon}
                        </div>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="mt-8 text-center">
                      <p 
                        className="text-xs font-bold text-amber-600 mb-1"
                        style={{ fontFamily: 'Amiri, serif' }}
                      >
                        {milestone.labelArabic}
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {milestone.label}
                      </p>
                      <p className="text-xs text-muted-foreground font-semibold">
                        {milestone.year} CE
                      </p>
                    </div>

                    {/* Tooltip on Hover */}
                    {hoveredIndex === index && (
                      <div className="absolute top-full mt-16 left-1/2 transform -translate-x-1/2 z-50 w-56 animate-in fade-in">
                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-2 border-amber-400 rounded-lg p-4 arabic-shadow">
                          <p 
                            className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-1"
                            style={{ fontFamily: 'Amiri, serif' }}
                          >
                            {milestone.label}
                          </p>
                          <p className="text-xs text-amber-800 dark:text-amber-200">
                            {milestone.description}
                          </p>
                          <div className="mt-2 pt-2 border-t border-amber-300 dark:border-amber-700 text-xs text-amber-700 dark:text-amber-300 font-semibold">
                            {milestone.year} CE
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
            <span className="text-amber-600 text-2xl">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
          </div>

          {/* Period Indicators with Islamic Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Meccan Period */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 islamic-pattern opacity-20" />
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">📍</div>
                  <div>
                    <h3 
                      className="font-bold text-xl text-blue-900 dark:text-blue-100 mb-1"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      العصر المكي
                    </h3>
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-200">
                      Meccan Period
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-semibold mt-1">
                      570-622 CE (52 years)
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 leading-relaxed">
                      Birth, early life, first revelation, public preaching, and persecution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medinan Period */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 islamic-pattern opacity-20" />
              <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-2 border-emerald-300 dark:border-emerald-700 rounded-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🕌</div>
                  <div>
                    <h3 
                      className="font-bold text-xl text-emerald-900 dark:text-emerald-100 mb-1"
                      style={{ fontFamily: 'Amiri, serif' }}
                    >
                      العصر المدني
                    </h3>
                    <h3 className="font-bold text-lg text-emerald-800 dark:text-emerald-200">
                      Medinan Period
                    </h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 font-semibold mt-1">
                      622-632 CE (10 years)
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 leading-relaxed">
                      Migration, battles, community building, and conquest of Mecca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend with Islamic Design */}
          <div className="flex flex-wrap gap-6 justify-center items-center py-6 px-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
            <div className="text-center">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-3">
                Event Types • أنواع الأحداث
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { type: 'birth', label: 'Birth', color: 'bg-blue-500' },
                { type: 'revelation', label: 'Revelation', color: 'bg-emerald-500' },
                { type: 'migration', label: 'Migration', color: 'bg-purple-500' },
                { type: 'battle', label: 'Battle', color: 'bg-red-500' },
                { type: 'conquest', label: 'Conquest', color: 'bg-amber-500' }
              ].map(item => (
                <div key={item.type} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ornamental Footer */}
          <div className="mt-8 text-center">
            <div className="inline-block text-2xl text-amber-600">✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}
