import { ChevronDown, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TimelineEvent as TimelineEventType } from '@/data/timelineData';

interface TimelineEventCardProps {
  event: TimelineEventType;
  isExpanded: boolean;
  onToggle: () => void;
  getCategoryColor: (categoryId: string) => string;
  isBookmarked?: boolean;
  onToggleBookmark?: (eventId: string) => void;
}

export default function TimelineEventCard({
  event,
  isExpanded,
  onToggle,
  getCategoryColor,
  isBookmarked = false,
  onToggleBookmark,
}: TimelineEventCardProps) {
  const categoryColor = getCategoryColor(event.category);

  return (
    <div className="relative pl-20" id={`event-${event.id}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-4 w-4 h-4 rounded-full bg-amber-600 border-4 border-slate-900 shadow-lg" />

      {/* Event Card */}
      <div
        onClick={onToggle}
        className="bg-slate-800 border-2 border-amber-600 rounded-lg p-5 hover:border-amber-400 transition-all cursor-pointer hover:shadow-xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-amber-200 arabic-text" style={{ fontFamily: 'Amiri, serif' }}>
              {event.title}
            </h3>
            <p className="text-sm text-amber-100 mt-1 font-semibold">
              {event.year} CE / {event.hijri}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge className="bg-amber-600 text-white border-0">
              {event.category}
            </Badge>
            {onToggleBookmark && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(event.id);
                }}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
                title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isBookmarked
                      ? 'fill-red-500 text-red-500'
                      : 'text-amber-400 hover:text-red-500'
                  }`}
                />
              </button>
            )}
            <ChevronDown
              className={`w-5 h-5 text-amber-400 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-amber-50 mb-3">
          {event.description}
        </p>

        {/* Location */}
        {event.location && (
          <p className="text-xs text-amber-200 mb-3">
            📍 <span className="font-medium">{event.location}</span>
          </p>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-amber-600 space-y-3">
            {/* Quranic Reference */}
            {event.quranicReference && (
              <div className="bg-slate-700 rounded p-3 border-l-4 border-amber-600">
                <p className="text-xs font-semibold text-amber-300 mb-1">Quranic Reference</p>
                <p className="text-sm text-amber-100 italic">{event.quranicReference}</p>
              </div>
            )}

            {/* Participants */}
            {event.participants && event.participants.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-amber-300 mb-2">Key Figures</p>
                <div className="flex flex-wrap gap-2">
                  {event.participants.map((participant, idx) => (
                    <span key={idx} className="text-xs bg-amber-600 text-white px-2 py-1 rounded">
                      {participant}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Casualties */}
            {event.casualties && (
              <div>
                <p className="text-xs font-semibold text-amber-300">Casualties</p>
                <p className="text-sm text-amber-100">{event.casualties}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
