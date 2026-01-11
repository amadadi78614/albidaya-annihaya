import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { timelineData, categories, expandedTimelineData } from '@/data/timelineData';
import TimelineEventCard from '@/components/TimelineEventCard';
import ComprehensiveTimeline from '@/components/ComprehensiveTimeline';

import { useBookmarks } from '@/hooks/useBookmarks';
import PropheticTree from '@/components/PropheticTree';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('timeline');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const { bookmarks, toggleBookmark, isBookmarked, clearAllBookmarks, bookmarkCount } = useBookmarks();
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Filter events based on search, categories, and era
  const filteredEvents = useMemo(() => {
    let filtered = expandedTimelineData.filter(event => {
      const matchesSearch = searchQuery === '' || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.quranicReference?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(event.category);
      
      return matchesSearch && matchesCategory;
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

    // Filter by bookmarks if enabled
    if (showBookmarksOnly) {
      filtered = filtered.filter(event => isBookmarked(event.id));
    }
    
    // Sort chronologically from Creation onwards
    return filtered.sort((a, b) => a.year - b.year);
  }, [searchQuery, selectedCategories, selectedEra, showBookmarksOnly, bookmarks]);

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
    setSelectedEra(null);
    setShowBookmarksOnly(false);
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
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

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full rounded-none border-b bg-slate-900 text-amber-200 h-auto p-0 justify-start">
          <TabsTrigger value="timeline" className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:bg-transparent px-6 py-3">
            Timeline
          </TabsTrigger>
          <TabsTrigger value="prophets" className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:bg-transparent px-6 py-3">
            Prophetic Tree
          </TabsTrigger>
        </TabsList>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="m-0">
          {/* Comprehensive Timeline */}
          <ComprehensiveTimeline 
            onMilestoneClick={(eraId, milestoneId) => {
              setSelectedEra(eraId);
              setSelectedCategories([]);
              setSearchQuery('');
              // Scroll to events section
              setTimeout(() => {
                const eventsSection = document.getElementById('events-section');
                if (eventsSection) {
                  eventsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            selectedEra={selectedEra}
          />

          <div className="flex min-h-[calc(100vh-120px)]">
            {/* Left Sidebar - Filters */}
            <aside className="w-80 border-r border-border bg-card p-6 overflow-y-auto">
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
                </div>
              </div>

              {/* Bookmarks Filter */}
              <div className="mb-6">
                <Button
                  variant={showBookmarksOnly ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                  className="w-full"
                >
                  ❤️ Bookmarks ({bookmarkCount})
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 text-foreground">
                  Filter by Category
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategories.includes(category.id)
                          ? `${category.color} ring-2 ring-offset-2 ring-primary`
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-sm mb-3 text-foreground">Statistics</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">{filteredEvents.length}</span> events found
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">{timelineData.length}</span> total events
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

              {/* Clear Filters */}
              {(searchQuery || selectedCategories.length > 0 || selectedEra) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </aside>

            {/* Main Timeline Content */}
            <main className="flex-1 overflow-y-auto" id="events-section">
              <div className="container py-8 max-w-2xl">
                {filteredEvents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <p className="text-lg text-muted-foreground mb-2">
                      No events found matching your search.
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
                    {selectedEra && (
                      <div className="bg-slate-800 border-2 border-amber-600 rounded-lg p-4 mb-6">
                        <h3 className="text-xl font-bold text-amber-200 mb-2">
                          {selectedEra === 'pre-islamic' && 'Pre-Islamic Prophets Era'}
                          {selectedEra === 'meccan' && 'Meccan Period'}
                          {selectedEra === 'medinan' && 'Medinan Period'}
                          {selectedEra === 'caliphates' && 'Islamic Caliphates Era'}
                          {selectedEra === 'ottoman' && 'Ottoman Empire Era'}
                        </h3>
                        <p className="text-amber-100 text-sm">
                          Showing {filteredEvents.length} events from this era
                        </p>
                      </div>
                    )}
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
                        isBookmarked={isBookmarked(event.id)}
                        onBookmarkToggle={() => toggleBookmark(event.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </main>
          </div>
        </TabsContent>

        {/* Prophetic Tree Tab */}
        <TabsContent value="prophets" className="m-0 p-6">
          <PropheticTree />
        </TabsContent>
      </Tabs>
    </div>
  );
}
