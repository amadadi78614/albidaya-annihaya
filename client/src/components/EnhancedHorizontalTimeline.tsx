import { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { timelineData } from '@/data/timelineData';

interface EnhancedHorizontalTimelineProps {
  onEventClick: (eventId: string) => void;
  selectedEventId?: string | null;
}

export default function EnhancedHorizontalTimeline({ 
  onEventClick, 
  selectedEventId 
}: EnhancedHorizontalTimelineProps) {
  const [zoom, setZoom] = useState(1);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter events to relevant timeline (520-640 CE)
  const prophetEvents = timelineData.filter(
    event => event.year >= 520 && event.year <= 640
  );

  // Calculate position on timeline (0-100%)
  const calculatePosition = (year: number) => {
    const minYear = 520;
    const maxYear = 640;
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  // Get color based on category
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      genealogy: 'bg-gray-500',
      birth: 'bg-purple-500',
      mother: 'bg-pink-500',
      marriage: 'bg-rose-500',
      revelation: 'bg-blue-500',
      battle: 'bg-red-500',
      expedition: 'bg-orange-500',
      event: 'bg-amber-500',
      death: 'bg-gray-600',
      prophet: 'bg-emerald-500',
    };
    return colors[category] || 'bg-gray-400';
  };

  // Get importance-based size
  const getEventSize = (event: any) => {
    const importantKeywords = [
      'birth', 'revelation', 'hijrah', 'badr', 'uhud', 
      'conquest', 'mecca', 'death', 'farewell'
    ];
    const isImportant = importantKeywords.some(keyword => 
      event.title.toLowerCase().includes(keyword) || 
      event.id.toLowerCase().includes(keyword)
    );
    return isImportant ? 'w-5 h-5' : 'w-3 h-3';
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  const handleEventClick = (eventId: string) => {
    onEventClick(eventId);
    // Scroll the event into view
    const eventElement = document.getElementById(`timeline-dot-${eventId}`);
    if (eventElement && scrollContainerRef.current) {
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const eventRect = eventElement.getBoundingClientRect();
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const targetScroll = scrollLeft + (eventRect.left - containerRect.left) - containerRect.width / 2;
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  // Scroll to selected event
  useEffect(() => {
    if (selectedEventId) {
      setTimeout(() => {
        const eventElement = document.getElementById(`timeline-dot-${selectedEventId}`);
        if (eventElement && scrollContainerRef.current) {
          const containerRect = scrollContainerRef.current.getBoundingClientRect();
          const eventRect = eventElement.getBoundingClientRect();
          const scrollLeft = scrollContainerRef.current.scrollLeft;
          const targetScroll = scrollLeft + (eventRect.left - containerRect.left) - containerRect.width / 2;
          scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [selectedEventId]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b-4 border-amber-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="text-2xl text-amber-600 mb-2">✦</div>
          <h2 
            className="text-3xl font-bold mb-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            رحلة النبي ﷺ
          </h2>
          <h2 className="text-2xl font-bold text-white mb-2">
            Interactive Timeline Journey
          </h2>
          <p className="text-sm text-gray-300">
            520 CE - 640 CE • Click any event to jump to details • Scroll horizontally
          </p>
        </div>

        {/* Zoom Controls */}
        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomOut}
            className="bg-slate-700 border-amber-600 text-white hover:bg-slate-600"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetZoom}
            className="bg-slate-700 border-amber-600 text-white hover:bg-slate-600"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomIn}
            className="bg-slate-700 border-amber-600 text-white hover:bg-slate-600"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <span className="px-3 py-1 bg-slate-700 border border-amber-600 rounded text-white text-sm">
            {Math.round(zoom * 100)}%
          </span>
        </div>

        {/* Timeline Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-visible pb-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d97706 #1e293b',
          }}
        >
          <div
            className="relative"
            style={{
              minWidth: `${3000 * zoom}px`,
              height: '180px',
            }}
          >
            {/* Year Markers */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-4 text-xs font-semibold text-amber-500">
              <span>520 CE</span>
              <span>540</span>
              <span>560</span>
              <span>580</span>
              <span>600</span>
              <span>620</span>
              <span>640 CE</span>
            </div>

            {/* Main Timeline Line */}
            <div 
              className="absolute left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-emerald-500 to-amber-600 rounded-full shadow-lg"
              style={{ top: '80px' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 rounded-full blur-sm opacity-50" />
            </div>

            {/* Event Dots */}
            {prophetEvents.map((event) => {
              const position = calculatePosition(event.year);
              const isSelected = selectedEventId === event.id;
              const isHovered = hoveredEventId === event.id;
              const sizeClass = getEventSize(event);
              
              return (
                <button
                  key={event.id}
                  id={`timeline-dot-${event.id}`}
                  className={`absolute transition-all duration-300 cursor-pointer group ${
                    isSelected ? 'z-30' : isHovered ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: `${position}%`,
                    top: '80px',
                    transform: `translate(-50%, -50%) scale(${
                      isSelected ? 1.8 : isHovered ? 1.5 : 1
                    })`,
                  }}
                  onClick={() => handleEventClick(event.id)}
                  onMouseEnter={() => setHoveredEventId(event.id)}
                  onMouseLeave={() => setHoveredEventId(null)}
                >
                  {/* Dot */}
                  <div
                    className={`${sizeClass} rounded-full border-4 border-white shadow-lg transition-all ${getCategoryColor(
                      event.category
                    )} ${
                      isSelected
                        ? 'ring-4 ring-amber-400 ring-offset-2 ring-offset-slate-900'
                        : ''
                    }`}
                  >
                    {/* Inner glow */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                  </div>

                  {/* Year Label */}
                  <div
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-opacity ${
                      isHovered || isSelected
                        ? 'opacity-100 text-amber-400'
                        : 'opacity-60 text-gray-400'
                    }`}
                  >
                    {event.year}
                  </div>

                  {/* Hover Tooltip */}
                  {(isHovered || isSelected) && (
                    <div className="absolute bottom-full mb-8 left-1/2 -translate-x-1/2 w-64 animate-in fade-in zoom-in-95 duration-200">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500 rounded-lg p-4 shadow-2xl">
                        {/* Arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-r-2 border-b-2 border-amber-500 transform rotate-45" />
                        
                        <div className="relative">
                          {/* Category Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-bold text-white ${getCategoryColor(
                                event.category
                              )}`}
                            >
                              {event.category}
                            </span>
                            <span className="text-xs font-semibold text-amber-400">
                              {event.year} CE
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-white mb-2 text-sm">
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                            {event.description}
                          </p>

                          {/* Location */}
                          {event.location && (
                            <p className="text-xs text-amber-400 mt-2">
                              📍 {event.location}
                            </p>
                          )}

                          {/* Click hint */}
                          <p className="text-xs text-gray-500 mt-3 italic">
                            Click to view full details →
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}

            {/* Era Indicators */}
            <div className="absolute top-[140px] left-0 right-0 flex justify-between px-4">
              <div className="text-xs text-blue-400 font-semibold">
                ← Pre-Islamic Era
              </div>
              <div className="text-xs text-blue-400 font-semibold">
                Meccan Period →
              </div>
              <div className="text-xs text-emerald-400 font-semibold">
                → Medinan Period
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
          {[
            { category: 'genealogy', label: 'Ancestry', color: 'bg-gray-500' },
            { category: 'birth', label: 'Birth/Life', color: 'bg-purple-500' },
            { category: 'revelation', label: 'Revelations', color: 'bg-blue-500' },
            { category: 'battle', label: 'Battles', color: 'bg-red-500' },
            { category: 'marriage', label: 'Marriages', color: 'bg-rose-500' },
            { category: 'event', label: 'Events', color: 'bg-amber-500' },
          ].map((item) => (
            <div key={item.category} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-gray-300 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>💡 Tip: Larger dots indicate major events • Hover for preview • Click to view full details</p>
        </div>
      </div>
    </div>
  );
}
