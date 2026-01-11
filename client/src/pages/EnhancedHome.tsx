import { useState, useMemo } from 'react';
import { Search, X, Heart, Share2, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { timelineData, categories, expandedTimelineData } from '@/data/timelineData';
import TimelineEventCard from '@/components/TimelineEventCard';
import EnhancedHorizontalTimeline from '@/components/EnhancedHorizontalTimeline';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from 'sonner';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Favorites hook
  const { favorites, toggleFavorite, isFavorite, clearAllFavorites, count: favoritesCount } = useFavorites();

  // Filter events
  const filteredEvents = useMemo(() => {
    let filtered = expandedTimelineData.filter(event => {
      const matchesSearch = searchQuery === '' || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.quranicReference?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(event.category);

      const matchesFavorites = !showFavoritesOnly || isFavorite(event.id);
      
      return matchesSearch && matchesCategory && matchesFavorites;
    });

    // Filter by era if selected
    if (selectedEra) {
      const eraRanges: { [key: string]: [number, number] } = {
        'pre-islamic': [-4000, 570],
        'meccan': [570, 622],
        'medinan': [622, 632],
        'caliphates': [632, 1517],
        'ottoman': [1299, 1922]
      };
      const range = eraRanges[selectedEra];
      if (range) {
        filtered = filtered.filter(event => event.year >= range[0] && event.year <= range[1]);
      }
    }
    
    return filtered.sort((a, b) => a.year - b.year);
  }, [searchQuery, selectedCategories, selectedEra, showFavoritesOnly, favorites]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setShowFavoritesOnly(false);
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.color || 'bg-gray-100 text-gray-800';
  };

  const handleEventClick = (eventId: string) => {
    // Scroll to event
    const eventElement = document.getElementById(`event-${eventId}`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setExpandedEventId(eventId);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Prophet Muhammad Timeline',
          text: 'Explore the comprehensive timeline of Prophet Muhammad\'s life',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleExportFavorites = () => {
    const favoriteEvents = timelineData.filter(event => isFavorite(event.id));
    const dataStr = JSON.stringify(favoriteEvents, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `prophet-timeline-favorites-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast.success(`Exported ${favoriteEvents.length} favorite events!`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-lg">
        <div className="container py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Amiri, serif' }}>
              Al-Bidayah wa-l-Nihayah
            </h1>
            <p className="text-muted-foreground">
              The Beginning and the End: A Comprehensive Timeline from Creation (4000 BCE) to the Fall of the Ottoman Empire (1922 CE)
            </p>
          </div>
        </div>
      </header>

      {/* Enhanced Horizontal Timeline */}
      <EnhancedHorizontalTimeline 
        onEventClick={handleEventClick}
        selectedEventId={expandedEventId}
      />

      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Left Sidebar - Filters */}
        <aside className="w-80 border-r border-border bg-card p-6 overflow-y-auto sticky top-[120px] h-[calc(100vh-120px)]">
          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Search Events
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, year, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Favorites Filter */}
          <div className="mb-6">
            <Button
              variant={showFavoritesOnly ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className="w-full justify-start"
            >
              <Heart className={`w-4 h-4 mr-2 ${showFavoritesOnly ? 'fill-current' : ''}`} />
              Favorites Only ({favoritesCount})
            </Button>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold text-foreground">
                Filter by Category
              </label>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-xs text-accent hover:text-primary transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedCategories.includes(category.id)
                      ? `${category.color} ring-2 ring-accent`
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clear All */}
          {(searchQuery || selectedCategories.length > 0 || showFavoritesOnly) && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="w-full mb-6"
            >
              Clear All Filters
            </Button>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="w-full justify-start"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Timeline
            </Button>
            {favoritesCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportFavorites}
                className="w-full justify-start"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export Favorites
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="pt-6 border-t border-border">
            <div className="text-xs text-muted-foreground space-y-2">
              <p>
                <span className="font-semibold text-foreground">{filteredEvents.length}</span> events found
              </p>
              <p>
                <span className="font-semibold text-foreground">{timelineData.length}</span> total events
              </p>
              <p>
                <span className="font-semibold text-foreground">{favoritesCount}</span> bookmarked
              </p>
              <p>
                <span className="font-semibold text-foreground">114</span> Quranic Surahs
              </p>
              <p>
                <span className="font-semibold text-foreground">28</span> Major Battles
              </p>
              <p>
                <span className="font-semibold text-foreground">11</span> Wives
              </p>
            </div>
          </div>
        </aside>

        {/* Main Timeline Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container py-8 max-w-2xl">
            {filteredEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg text-muted-foreground mb-2">
                  No events found matching your filters.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

                {/* Events */}
                {filteredEvents.map((event) => (
                  <TimelineEventCard
                    key={event.id}
                    event={event}
                    isExpanded={expandedEventId === event.id}
                    onToggle={() =>
                      setExpandedEventId(
                        expandedEventId === event.id ? null : event.id
                      )
                    }
                    getCategoryColor={getCategoryColor}
                    isBookmarked={isFavorite(event.id)}
                    onToggleBookmark={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
