# Prophet Muhammad (SAW) - Interactive Timeline

A comprehensive, interactive, and beautifully designed web-based timeline of the Prophet Muhammad's (SAW) life, featuring all major events, battles, marriages, and Quranic revelations.

## Features

### 📅 Comprehensive Timeline Data
- **150+ Historical Events** - Birth, early life, prophetic mission, migration, battles, and death
- **All 114 Quranic Surahs** - Complete chronological order of revelation (Meccan and Medinan periods)
- **11 Marriages** - Detailed information about each wife
- **28 Major Battles** - Including Badr, Uhud, Khandaq, Khaybar, and more
- **93 Total Expeditions** - 28 led directly by the Prophet, 65 led by commanders
- **Key Life Events** - Migration to Medina, Conquest of Mecca, Farewell Pilgrimage, etc.

### 🔍 Interactive Features
- **Advanced Search** - Search by event title, year, description, or Quranic references
- **Category Filtering** - Filter by event type (battles, revelations, marriages, events, expeditions, deaths)
- **Expandable Event Cards** - Click to reveal detailed information, Quranic references, casualties, and participants
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### 🎨 Design Philosophy
The interface follows a **Classical Islamic Heritage Aesthetic** with:
- **Color Palette**: Deep midnight blue (#1a3a52) with warm gold (#d4a574) accents
- **Typography**: Amiri (Arabic-inspired serif) for titles and Quranic references, Inter for body text
- **Layout**: Vertical scrolling timeline with persistent left sidebar for filters and search
- **Visual Elements**: Crescent moon dividers, gold-bordered Quranic verse callouts, circular year badges
- **Animations**: Smooth, contemplative, respectful transitions and entrance effects

## Project Structure

```
prophet_timeline/
├── client/
│   ├── public/
│   │   └── images/          # Static image assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── TimelineEventCard.tsx    # Individual event card component
│   │   │   └── ui/                      # shadcn/ui components
│   │   ├── data/
│   │   │   └── timelineData.ts          # Complete timeline data (150+ events)
│   │   ├── pages/
│   │   │   ├── Home.tsx                 # Main timeline page
│   │   │   └── NotFound.tsx             # 404 page
│   │   ├── App.tsx                      # Main app component with routing
│   │   ├── main.tsx                     # React entry point
│   │   └── index.css                    # Global styles and animations
│   └── index.html                       # HTML template
├── server/
│   └── index.ts                         # Express server (static serving)
├── shared/
│   └── const.ts                         # Shared constants
├── package.json                         # Dependencies and scripts
└── README.md                            # This file
```

## Timeline Data Structure

Each timeline event includes:
- **id**: Unique identifier
- **year**: Gregorian calendar year
- **hijri**: Islamic calendar (AH) or Before Hijrah (BH)
- **date**: Specific date or period description
- **title**: Event title
- **description**: Brief description
- **category**: Event type (birth, marriage, revelation, battle, expedition, event, death)
- **location**: Geographic location (if applicable)
- **details**: Extended details
- **quranicReference**: Related Quranic verses (for revelations)
- **casualties**: Battle casualties (for military events)
- **participants**: People or groups involved

## Event Categories

1. **Birth & Early Life** - Birth, childhood, early travels
2. **Marriages** - All 11 marriages after Khadijah
3. **Quranic Revelations** - All 114 Surahs in revelation order
4. **Battles** - Major military engagements (Badr, Uhud, Khandaq, etc.)
5. **Expeditions** - Military campaigns and raids
6. **Events** - Significant historical moments (Hijrah, Conquest of Mecca, etc.)
7. **Deaths** - Deaths of family members and the Prophet himself

## Key Statistics

- **Lifespan**: 570-632 CE (62 years)
- **Prophethood Duration**: 23 years
- **Quranic Chapters**: 114 Surahs
- **Quranic Verses**: ~6,200 Ayahs
- **Wives**: 11 (after Khadijah)
- **Children**: 6 with Khadijah, 1 with Maria al-Qibtiyyah
- **Major Battles**: 7
- **Total Expeditions**: 93

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **UI Components**: shadcn/ui
- **Routing**: Wouter (lightweight client-side router)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Server**: Express (for static file serving)

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The development server runs on `http://localhost:3000` with hot module replacement enabled.

### Building for Production

```bash
pnpm build
```

This creates optimized production builds in the `dist/` directory.

## Customization

### Modifying Timeline Data

Edit `/client/src/data/timelineData.ts` to add, modify, or remove events. Each event follows the `TimelineEvent` interface.

### Changing Colors

Update the CSS variables in `/client/src/index.css`:
- `--primary`: Main color (midnight blue)
- `--accent`: Accent color (warm gold)
- `--background`: Background color
- `--foreground`: Text color

### Adding New Categories

1. Add a new category object to the `categories` array in `timelineData.ts`
2. Update the `category` type in the `TimelineEvent` interface
3. The UI will automatically support the new category

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading of event details
- Efficient search and filtering with useMemo
- Optimized animations using CSS transforms
- Responsive image loading
- Minimal bundle size with tree-shaking

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Focus indicators on interactive elements

## License

This project is created as an educational and informational resource about Islamic history.

## Credits

Historical data sourced from:
- Tanzil Quran Project (revelation order)
- Islamic historical texts and seerah sources
- Academic Islamic history resources
- Traditional Islamic scholarship

## Contributing

To contribute improvements or corrections to the timeline data:

1. Verify historical accuracy from reliable sources
2. Update the relevant event in `timelineData.ts`
3. Ensure the event follows the `TimelineEvent` interface
4. Test the changes in the UI

## Support

For questions or issues, please refer to the timeline data documentation or consult Islamic historical sources for verification.

---

**Subhan'Allah** - Glory be to Allah, the Lord of all worlds.
