# Prophet Timeline - Enhanced Version Installation Guide

## 🎉 What's New in This Enhanced Version

### ✅ **Major Improvements:**

1. **TRUE Horizontal Timeline** ⭐⭐⭐⭐⭐
   - Shows ALL 150+ events on a scrollable horizontal line
   - Click any dot to jump to that event
   - Zoom controls (+/- buttons)
   - Hover tooltips with event previews
   - Color-coded by category
   - Sized by importance (major events are larger)

2. **Bookmarks/Favorites** ⭐⭐⭐⭐⭐
   - Click heart icon to bookmark events
   - Filter to show only favorites
   - Export favorites to JSON
   - Persists in localStorage

3. **Share Functionality** ⭐⭐⭐⭐
   - Share timeline via native share API
   - Copy link to clipboard
   - Export favorites

4. **Better Performance** ⭐⭐⭐⭐
   - Optimized rendering
   - Smooth scrolling
   - Better memory management

---

## 📦 Installation Steps

### Step 1: Extract the Enhanced Files

The following new files have been created:

```
client/src/
├── components/
│   └── EnhancedHorizontalTimeline.tsx  (NEW - Replace HorizontalTimeline)
├── hooks/
│   └── useFavorites.ts                  (NEW)
└── pages/
    └── EnhancedHome.tsx                 (NEW - Enhanced Home component)
```

### Step 2: Install Required Dependencies

```bash
cd /path/to/prophet_timeline
pnpm install sonner  # Toast notifications
```

### Step 3: Replace/Update Files

#### Option A: Use Enhanced Home (Recommended)

Replace `client/src/pages/Home.tsx` with `EnhancedHome.tsx`:

```bash
mv client/src/pages/EnhancedHome.tsx client/src/pages/Home.tsx
```

#### Option B: Manual Integration

If you want to keep your existing Home.tsx and just add features:

1. **Add the favorites hook**:
```typescript
import { useFavorites } from '@/hooks/useFavorites';

// In your component:
const { favorites, toggleFavorite, isFavorite, clearAllFavorites, count } = useFavorites();
```

2. **Update TimelineEventCard props**:
```typescript
<TimelineEventCard
  event={event}
  isExpanded={expandedEventId === event.id}
  onToggle={() => setExpandedEventId(expandedEventId === event.id ? null : event.id)}
  getCategoryColor={getCategoryColor}
  isBookmarked={isFavorite(event.id)}  // NEW
  onToggleBookmark={toggleFavorite}     // NEW
/>
```

3. **Replace HorizontalTimeline**:
```typescript
// Replace this:
import HorizontalTimeline from '@/components/HorizontalTimeline';

// With this:
import EnhancedHorizontalTimeline from '@/components/EnhancedHorizontalTimeline';

// And use it:
<EnhancedHorizontalTimeline 
  onEventClick={handleEventClick}
  selectedEventId={expandedEventId}
/>
```

### Step 4: Add Toast Provider

Update `client/src/App.tsx` to include the toast provider:

```typescript
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" />  {/* Add this */}
    </>
  );
}
```

### Step 5: Run the Application

```bash
pnpm dev
```

Open your browser to `http://localhost:3000`

---

## 🎯 Features & How to Use

### 1. **Enhanced Horizontal Timeline**

**Location**: Top of the page

**Features**:
- **Scroll horizontally** to see all events from 520-640 CE
- **Zoom In/Out**: Use the + and - buttons
- **Reset Zoom**: Click the reset button
- **Hover**: See event preview tooltip
- **Click**: Jump to that event in the main timeline below
- **Color-coded dots**: Each category has its own color
- **Sized dots**: Larger dots = more important events

**Usage**:
```typescript
<EnhancedHorizontalTimeline 
  onEventClick={(eventId) => {
    // This scrolls to the event in the main timeline
    const element = document.getElementById(`event-${eventId}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  }}
  selectedEventId={currentEventId}  // Highlights this event
/>
```

### 2. **Bookmarks/Favorites**

**Features**:
- Click ❤️ icon on any event card to bookmark
- Filled heart = bookmarked
- Empty heart = not bookmarked
- Filter to show only favorites
- Export favorites to JSON file

**Usage**:
```typescript
const { favorites, toggleFavorite, isFavorite, count } = useFavorites();

// Check if event is favorited
if (isFavorite('birth-event-id')) {
  console.log('This event is bookmarked!');
}

// Toggle favorite
toggleFavorite('birth-event-id');

// Get count
console.log(`You have ${count} favorites`);
```

**Data Structure**:
Favorites are stored in `localStorage` as:
```json
{
  "prophet-timeline-favorites": ["event-id-1", "event-id-2", ...]
}
```

### 3. **Share Functionality**

**Features**:
- Share button in sidebar
- Uses native share API on mobile
- Falls back to clipboard copy on desktop
- Toast notification confirms action

**Usage**:
Click the "Share Timeline" button in the sidebar

### 4. **Export Favorites**

**Features**:
- Export button appears when you have favorites
- Downloads JSON file with full event data
- Filename includes current date
- Toast notification confirms export

**Usage**:
Click "Export Favorites" button in sidebar

---

## 🎨 Customization

### Change Timeline Colors

Edit `EnhancedHorizontalTimeline.tsx`:

```typescript
// Line colors
const getCategoryColor = (category: string) => {
  return {
    genealogy: 'bg-gray-500',     // Change these colors
    birth: 'bg-purple-500',
    revelation: 'bg-blue-500',
    // ... add more
  }[category] || 'bg-gray-400';
};
```

### Change Zoom Limits

```typescript
const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));  // Max 3x
const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5)); // Min 0.5x
```

### Change Timeline Width

```typescript
style={{
  minWidth: `${3000 * zoom}px`,  // Change 3000 to adjust base width
  height: '180px',
}}
```

### Change Event Importance

Edit which events are considered "important" (larger dots):

```typescript
const getEventSize = (event: any) => {
  const importantKeywords = [
    'birth', 'revelation', 'hijrah', 'badr', 'uhud',  // Add/remove keywords
    'conquest', 'mecca', 'death', 'farewell'
  ];
  // ...
};
```

---

## 🐛 Troubleshooting

### Issue: Timeline not showing

**Solution**: Make sure you have events in the date range (520-640 CE)

```typescript
// Check your data
const prophetEvents = timelineData.filter(
  event => event.year >= 520 && event.year <= 640
);
console.log(`Found ${prophetEvents.length} events`);
```

### Issue: Favorites not persisting

**Solution**: Check localStorage is enabled

```javascript
// Test in browser console
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test')); // Should print 'value'
```

### Issue: Zoom not working

**Solution**: Make sure lucide-react icons are installed

```bash
pnpm install lucide-react
```

### Issue: Toast notifications not showing

**Solution**: Make sure you added the Toaster component

```typescript
import { Toaster } from 'sonner';
// Add <Toaster /> to your App.tsx
```

### Issue: Timeline dots overlapping

**Solution**: Increase the timeline width

```typescript
minWidth: `${5000 * zoom}px`,  // Increase from 3000
```

---

## 📊 Performance Tips

### For Large Number of Events

If you have more than 200 events, consider adding virtualization:

```bash
pnpm install react-window
```

```typescript
import { FixedSizeList } from 'react-window';

// In your timeline render:
<FixedSizeList
  height={600}
  itemCount={filteredEvents.length}
  itemSize={200}
>
  {({ index, style }) => (
    <div style={style}>
      <TimelineEventCard event={filteredEvents[index]} />
    </div>
  )}
</FixedSizeList>
```

### Optimize Timeline Rendering

```typescript
// Memoize the timeline component
const MemoizedTimeline = React.memo(EnhancedHorizontalTimeline);

// Use it
<MemoizedTimeline onEventClick={handleEventClick} selectedEventId={expandedEventId} />
```

---

## 🎓 Advanced Features to Add Next

### 1. URL Routing

Make events shareable via URL:

```typescript
// Install wouter if not already
import { useLocation } from 'wouter';

const [location, setLocation] = useLocation();

const handleEventClick = (eventId: string) => {
  setLocation(`/event/${eventId}`);
};

// Read from URL on mount
useEffect(() => {
  const match = location.match(/\/event\/(.+)/);
  if (match) {
    const eventId = match[1];
    handleEventClick(eventId);
  }
}, [location]);
```

### 2. Add Interactive Map

See the main IMPROVEMENTS.md document for map integration code.

### 3. Add Print Functionality

```typescript
import jsPDF from 'jspdf';

const handlePrint = () => {
  const doc = new jsPDF();
  filteredEvents.forEach((event, i) => {
    doc.text(`${event.year}: ${event.title}`, 10, 10 + (i * 10));
  });
  doc.save('timeline.pdf');
};
```

---

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all dependencies are installed
3. Make sure you're using Node 18+
4. Clear browser cache and localStorage
5. Try the development build first (`pnpm dev`)

---

## ✅ Checklist

After installation, verify:

- [ ] Enhanced timeline shows at the top
- [ ] Can scroll horizontally
- [ ] Zoom buttons work
- [ ] Clicking dots jumps to events
- [ ] Hover shows tooltips
- [ ] Heart icons appear on event cards
- [ ] Clicking heart bookmarks events
- [ ] Favorites filter works
- [ ] Export favorites works
- [ ] Share button works
- [ ] Toast notifications appear

---

## 🎉 Success!

If everything works, you should now have:
- ✅ A beautiful TRUE horizontal timeline
- ✅ Working bookmarks/favorites system
- ✅ Share and export functionality
- ✅ Much better user experience!

**Enjoy your enhanced Prophet Timeline!** 🌟

May Allah bless this project and make it beneficial for all who use it. ﷺ
