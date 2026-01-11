import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEra {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  bgColor: string;
  description: string;
  milestones: {
    id: string;
    year: number;
    title: string;
    emoji: string;
  }[];
}

interface ComprehensiveTimelineProps {
  onMilestoneClick: (eraId: string, milestoneId?: string) => void;
  selectedEra: string | null;
}

const eras: TimelineEra[] = [
  {
    id: 'pre-islamic',
    name: 'Pre-Islamic Prophets',
    startYear: -4000,
    endYear: 570,
    color: 'from-amber-600 to-amber-400',
    bgColor: 'bg-amber-50',
    description: 'From Creation to Prophet Muhammad\'s Birth',
    milestones: [
      { id: 'adam', year: -4000, title: 'Adam - First Prophet', emoji: '👤' },
      { id: 'noah', year: -2500, title: 'Noah - Great Flood', emoji: '🌊' },
      { id: 'abraham', year: -1500, title: 'Abraham - Kaaba', emoji: '🕌' },
      { id: 'moses', year: -700, title: 'Moses - Torah', emoji: '📜' },
      { id: 'david', year: -600, title: 'David - King', emoji: '👑' },
      { id: 'jesus', year: -4, title: 'Jesus - Messiah', emoji: '✨' },
    ]
  },
  {
    id: 'meccan',
    name: 'Meccan Period',
    startYear: 570,
    endYear: 622,
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-50',
    description: 'Early Life & Preaching',
    milestones: [
      { id: 'birth', year: 570, title: 'Birth', emoji: '👶' },
      { id: 'first-revelation', year: 610, title: 'First Revelation', emoji: '📖' },
      { id: 'public-preaching', year: 613, title: 'Public Preaching', emoji: '📣' },
      { id: 'persecution', year: 615, title: 'Persecution', emoji: '⚔️' },
      { id: 'night-journey', year: 620, title: 'Isra & Mi\'raj', emoji: '🌙' },
    ]
  },
  {
    id: 'medinan',
    name: 'Medinan Period',
    startYear: 622,
    endYear: 632,
    color: 'from-emerald-600 to-emerald-400',
    bgColor: 'bg-emerald-50',
    description: 'Leadership & Battles',
    milestones: [
      { id: 'hijrah', year: 622, title: 'Hijrah (Migration)', emoji: '🏃' },
      { id: 'badr', year: 624, title: 'Battle of Badr', emoji: '⚔️' },
      { id: 'uhud', year: 625, title: 'Battle of Uhud', emoji: '🏔️' },
      { id: 'khandaq', year: 627, title: 'Battle of Khandaq', emoji: '🛡️' },
      { id: 'khaybar', year: 628, title: 'Khaybar Conquest', emoji: '🏰' },
      { id: 'mecca', year: 630, title: 'Conquest of Mecca', emoji: '🕌' },
      { id: 'farewell', year: 632, title: 'Farewell Pilgrimage', emoji: '🕋' },
      { id: 'death', year: 632, title: 'Death of Prophet', emoji: '⭐' },
    ]
  },
  {
    id: 'caliphates',
    name: 'Islamic Caliphates',
    startYear: 632,
    endYear: 1517,
    color: 'from-cyan-600 to-cyan-400',
    bgColor: 'bg-cyan-50',
    description: 'Rashidun to Mamluk',
    milestones: [
      { id: 'rashidun', year: 632, title: 'Rashidun Caliphate', emoji: '👥' },
      { id: 'umayyad', year: 661, title: 'Umayyad Dynasty', emoji: '🏛️' },
      { id: 'spain', year: 711, title: 'Conquest of Spain', emoji: '🌍' },
      { id: 'abbasid', year: 750, title: 'Abbasid Dynasty', emoji: '📚' },
      { id: 'baghdad', year: 762, title: 'Foundation of Baghdad', emoji: '🏙️' },
      { id: 'fatimid', year: 909, title: 'Fatimid Dynasty', emoji: '🌟' },
      { id: 'cairo', year: 970, title: 'Foundation of Cairo', emoji: '🏛️' },
      { id: 'crusades', year: 1096, title: 'Crusades Begin', emoji: '⚔️' },
      { id: 'saladin', year: 1187, title: 'Saladin Era', emoji: '🗡️' },
      { id: 'mamluk', year: 1250, title: 'Mamluk Sultanate', emoji: '🛡️' },
      { id: 'ain-jalut', year: 1260, title: 'Battle of Ain Jalut', emoji: '🏹' },
    ]
  },
  {
    id: 'ottoman',
    name: 'Ottoman Empire',
    startYear: 1299,
    endYear: 1922,
    color: 'from-red-600 to-red-400',
    bgColor: 'bg-red-50',
    description: 'Rise & Fall',
    milestones: [
      { id: 'ottoman-found', year: 1299, title: 'Ottoman Founded', emoji: '🏰' },
      { id: 'bursa', year: 1326, title: 'Capital: Bursa', emoji: '🏛️' },
      { id: 'mehmed', year: 1451, title: 'Mehmed II Era', emoji: '👑' },
      { id: 'constantinople', year: 1453, title: 'Constantinople Conquered', emoji: '🌉' },
      { id: 'suleiman', year: 1520, title: 'Suleiman the Magnificent', emoji: '👨‍⚖️' },
      { id: 'golden-age', year: 1520, title: 'Golden Age', emoji: '✨' },
      { id: 'decline', year: 1566, title: 'Decline Begins', emoji: '📉' },
      { id: 'lepanto', year: 1571, title: 'Battle of Lepanto', emoji: '⛵' },
      { id: 'tanzimat', year: 1839, title: 'Tanzimat Reforms', emoji: '📋' },
      { id: 'wwi', year: 1914, title: 'World War I', emoji: '💥' },
      { id: 'ottoman-end', year: 1922, title: 'Ottoman Fall', emoji: '🏁' },
    ]
  }
];

export default function ComprehensiveTimeline({ onMilestoneClick, selectedEra }: ComprehensiveTimelineProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      scrollContainerRef.current.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b-4 border-amber-600 py-12 px-4 islamic-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Top */}
        <div className="text-center mb-8">
          <div className="text-3xl text-amber-600 mb-2">✦ ✦ ✦</div>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-amber-600 mb-3">
            Islamic History Timeline
          </h2>
          <p className="text-amber-200 text-lg font-semibold mb-2">
            From Creation to the Fall of the Ottoman Empire
          </p>
          <p className="text-sm text-amber-100 max-w-2xl mx-auto">
            Explore 5922 years of Islamic civilization, prophets, dynasties, and empires
          </p>
          <div className="text-2xl text-amber-600 mt-4">✦</div>
        </div>

        {/* Eras Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {eras.map(era => (
            <button
              key={era.id}
              onClick={() => onMilestoneClick(era.id)}
              className={`p-4 rounded-lg text-center transition-all transform hover:scale-105 ${
                selectedEra === era.id
                  ? `bg-gradient-to-r ${era.color} text-white shadow-2xl scale-105 border-2 border-white`
                  : 'bg-slate-700 border-2 border-amber-600 text-amber-100 hover:bg-slate-600'
              }`}
            >
              <div className="text-sm font-bold mb-1 text-amber-300">{era.name}</div>
              <div className="text-xs text-opacity-90 mt-2 font-semibold">
                {era.startYear > 0 ? era.startYear : Math.abs(era.startYear) + ' BCE'} - {era.endYear}
              </div>
            </button>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
          <div className="text-amber-600 text-2xl">✦</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
        </div>

        {/* Milestones Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-500 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Milestones Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-4 pb-4">
              {eras.map(era => (
                <div key={era.id} className="flex-shrink-0">
                  <div className="text-amber-400 font-bold text-sm mb-3 text-center">{era.name}</div>
                  <div className="flex gap-2">
                    {era.milestones.map(milestone => (
                      <button
                        key={milestone.id}
                        onClick={() => onMilestoneClick(era.id, milestone.id)}
                        className="flex flex-col items-center gap-1 p-3 bg-slate-700 border-2 border-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all group"
                        title={`${milestone.title} (${milestone.year} CE)`}
                      >
                        <span className="text-2xl">{milestone.emoji}</span>
                        <span className="text-xs font-semibold text-amber-200 group-hover:text-white text-center max-w-[60px]">
                          {milestone.title}
                        </span>
                        <span className="text-xs text-amber-100 group-hover:text-white">
                          {milestone.year > 0 ? milestone.year : Math.abs(milestone.year) + ' BCE'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-500 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Legend */}
        <div className="mt-8 text-center">
          <p className="text-amber-100 text-sm">
            Click on any era or milestone to filter the timeline below
          </p>
        </div>
      </div>
    </div>
  );
}
