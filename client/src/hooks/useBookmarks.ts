import { useState, useEffect } from 'react';

const BOOKMARKS_KEY = 'prophet_timeline_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      if (saved) {
        setBookmarks(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load bookmarks:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
      } catch (error) {
        console.error('Failed to save bookmarks:', error);
      }
    }
  }, [bookmarks, isLoaded]);

  const toggleBookmark = (eventId: string) => {
    setBookmarks(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const isBookmarked = (eventId: string) => bookmarks.includes(eventId);

  const clearAllBookmarks = () => {
    setBookmarks([]);
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    clearAllBookmarks,
    bookmarkCount: bookmarks.length,
  };
}
