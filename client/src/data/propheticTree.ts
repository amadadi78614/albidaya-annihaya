// Prophetic Tree - All Prophets as Named in the Quran with English Translations
// Ordered chronologically and by lineage

export interface ProphetNode {
  id: string;
  quranicName: string; // Arabic name as in Quran
  englishName: string; // English translation
  year: number; // Approximate year (BCE for negative, CE for positive)
  birthYear?: number;
  deathYear?: number;
  description: string;
  parentId?: string; // ID of parent prophet
  childrenIds?: string[]; // IDs of children prophets
  significance: string; // Major achievement or message
  quranicMentions: number; // How many times mentioned in Quran
  emoji: string;
}

export const propheticTree: ProphetNode[] = [
  {
    id: 'adam',
    quranicName: 'آدم',
    englishName: 'Adam',
    year: -4000,
    description: 'First Prophet and First Human',
    significance: 'Created by Allah, father of humanity, given knowledge of all names',
    quranicMentions: 25,
    emoji: '👤',
    childrenIds: ['shith', 'qabil', 'habil']
  },
  {
    id: 'shith',
    quranicName: 'شيث',
    englishName: 'Shith (Seth)',
    year: -3900,
    parentId: 'adam',
    description: 'Second Prophet, Son of Adam',
    significance: 'Successor to Adam, preached to his people',
    quranicMentions: 1,
    emoji: '📿'
  },
  {
    id: 'qabil',
    quranicName: 'قابيل',
    englishName: 'Qabil (Cain)',
    year: -3850,
    parentId: 'adam',
    description: 'Son of Adam',
    significance: 'First murder in human history',
    quranicMentions: 1,
    emoji: '⚠️'
  },
  {
    id: 'habil',
    quranicName: 'هابيل',
    englishName: 'Habil (Abel)',
    year: -3850,
    parentId: 'adam',
    description: 'Son of Adam',
    significance: 'First martyr in Islam, accepted sacrifice',
    quranicMentions: 1,
    emoji: '✨'
  },
  {
    id: 'idris',
    quranicName: 'إدريس',
    englishName: 'Idris (Enoch)',
    year: -3500,
    description: 'Prophet of High Rank',
    significance: 'Raised to a high station, taught writing and arithmetic',
    quranicMentions: 2,
    emoji: '📚'
  },
  {
    id: 'nuh',
    quranicName: 'نوح',
    englishName: 'Nuh (Noah)',
    year: -2500,
    description: 'Messenger of Patience and Perseverance',
    significance: 'Preached for 950 years, only believers were saved in the Ark',
    quranicMentions: 43,
    emoji: '🌊'
  },
  {
    id: 'hud',
    quranicName: 'هود',
    englishName: 'Hud',
    year: -2000,
    description: 'Prophet to the People of Ad',
    significance: 'Warned against arrogance and idolatry',
    quranicMentions: 7,
    emoji: '⛰️'
  },
  {
    id: 'salih',
    quranicName: 'صالح',
    englishName: 'Salih',
    year: -1900,
    description: 'Prophet to the People of Thamud',
    significance: 'Brought the she-camel as a sign',
    quranicMentions: 9,
    emoji: '🐪'
  },
  {
    id: 'ibrahim',
    quranicName: 'إبراهيم',
    englishName: 'Ibrahim (Abraham)',
    year: -1500,
    description: 'Father of Prophets, Friend of Allah',
    significance: 'Built the Kaaba, tested with trials, father of Ismail and Ishaq',
    quranicMentions: 69,
    emoji: '🕌'
  },
  {
    id: 'ismail',
    quranicName: 'إسماعيل',
    englishName: 'Ismail (Ishmael)',
    year: -1400,
    parentId: 'ibrahim',
    description: 'Prophet and Ancestor of Arabs',
    significance: 'Sacrificed in obedience to Allah, father of Arab nation',
    quranicMentions: 12,
    emoji: '🗡️'
  },
  {
    id: 'ishaq',
    quranicName: 'إسحاق',
    englishName: 'Ishaq (Isaac)',
    year: -1400,
    parentId: 'ibrahim',
    description: 'Prophet and Ancestor of Israelites',
    significance: 'Blessed child, father of Yaqub',
    quranicMentions: 17,
    emoji: '👨‍👦'
  },
  {
    id: 'yaqub',
    quranicName: 'يعقوب',
    englishName: 'Yaqub (Jacob)',
    year: -1300,
    parentId: 'ishaq',
    description: 'Prophet and Ancestor of Israelites',
    significance: 'Father of 12 sons, renamed Israel by Allah',
    quranicMentions: 16,
    emoji: '👨‍👨‍👦‍👦'
  },
  {
    id: 'yusuf',
    quranicName: 'يوسف',
    englishName: 'Yusuf (Joseph)',
    year: -1200,
    parentId: 'yaqub',
    description: 'Prophet of Wisdom and Patience',
    significance: 'Sold into slavery, became ruler of Egypt, reunited with family',
    quranicMentions: 27,
    emoji: '👑'
  },
  {
    id: 'ayyub',
    quranicName: 'أيوب',
    englishName: 'Ayyub (Job)',
    year: -1100,
    description: 'Prophet of Patience',
    significance: 'Tested with severe afflictions, remained faithful',
    quranicMentions: 4,
    emoji: '💪'
  },
  {
    id: 'dhul-kifl',
    quranicName: 'ذو الكفل',
    englishName: 'Dhul-Kifl',
    year: -1000,
    description: 'Prophet of Righteousness',
    significance: 'Patient and righteous servant',
    quranicMentions: 2,
    emoji: '🙏'
  },
  {
    id: 'yunus',
    quranicName: 'يونس',
    englishName: 'Yunus (Jonah)',
    year: -900,
    description: 'Prophet to Nineveh',
    significance: 'Swallowed by whale, repented and was saved',
    quranicMentions: 5,
    emoji: '🐋'
  },
  {
    id: 'lut',
    quranicName: 'لوط',
    englishName: 'Lut (Lot)',
    year: -1100,
    description: 'Prophet to the People of Sodom',
    significance: 'Warned against immorality, saved with believers',
    quranicMentions: 27,
    emoji: '⚡'
  },
  {
    id: 'shuaib',
    quranicName: 'شعيب',
    englishName: 'Shuaib',
    year: -1000,
    description: 'Prophet to the People of Madyan',
    significance: 'Warned against cheating in commerce',
    quranicMentions: 11,
    emoji: '⚖️'
  },
  {
    id: 'musa',
    quranicName: 'موسى',
    englishName: 'Musa (Moses)',
    year: -700,
    description: 'Prophet and Messenger, Speaker with Allah',
    significance: 'Given the Torah, led Israelites from Egypt, received 10 Commandments',
    quranicMentions: 136,
    emoji: '📜'
  },
  {
    id: 'harun',
    quranicName: 'هارون',
    englishName: 'Harun (Aaron)',
    year: -700,
    parentId: 'musa',
    description: 'Prophet and Brother of Musa',
    significance: 'Supported Musa, made the golden calf, became high priest',
    quranicMentions: 24,
    emoji: '🔔'
  },
  {
    id: 'dawud',
    quranicName: 'داود',
    englishName: 'Dawud (David)',
    year: -600,
    description: 'Prophet and King',
    significance: 'Given the Psalms, defeated Goliath, established kingdom',
    quranicMentions: 16,
    emoji: '👑'
  },
  {
    id: 'sulaiman',
    quranicName: 'سليمان',
    englishName: 'Sulaiman (Solomon)',
    year: -550,
    parentId: 'dawud',
    description: 'Prophet and King, Given Unique Powers',
    significance: 'Controlled wind and jinn, understood animal speech, greatest kingdom',
    quranicMentions: 17,
    emoji: '🔱'
  },
  {
    id: 'ilyas',
    quranicName: 'إلياس',
    englishName: 'Ilyas (Elijah)',
    year: -500,
    description: 'Prophet to the People of Baal',
    significance: 'Warned against idolatry, raised to heaven',
    quranicMentions: 2,
    emoji: '🔥'
  },
  {
    id: 'al-yasa',
    quranicName: 'اليسع',
    englishName: 'Al-Yasa (Elisha)',
    year: -450,
    description: 'Prophet and Successor to Ilyas',
    significance: 'Continued the mission of Ilyas',
    quranicMentions: 2,
    emoji: '✨'
  },
  {
    id: 'zakariya',
    quranicName: 'زكريا',
    englishName: 'Zakariya (Zechariah)',
    year: -100,
    description: 'Prophet and Guardian of Maryam',
    significance: 'Given son Yahya in old age, murdered by his people',
    quranicMentions: 7,
    emoji: '👴'
  },
  {
    id: 'yahya',
    quranicName: 'يحيى',
    englishName: 'Yahya (John the Baptist)',
    year: -50,
    parentId: 'zakariya',
    description: 'Prophet and Forerunner',
    significance: 'Confirmed the truth of Isa, baptized people',
    quranicMentions: 9,
    emoji: '💧'
  },
  {
    id: 'isa',
    quranicName: 'عيسى',
    englishName: 'Isa (Jesus)',
    year: 0,
    description: 'Prophet and Messenger, Spirit of Allah',
    significance: 'Born of virgin Maryam, performed miracles, raised to heaven',
    quranicMentions: 25,
    emoji: '✨'
  },
  {
    id: 'muhammad',
    quranicName: 'محمد',
    englishName: 'Muhammad',
    year: 570,
    description: 'Final Prophet and Messenger, Seal of the Prophets',
    significance: 'Given the Quran, completed the religion, mercy to all worlds',
    quranicMentions: 4,
    emoji: '⭐'
  }
];

// Helper function to get prophet by ID
export function getProphetById(id: string): ProphetNode | undefined {
  return propheticTree.find(p => p.id === id);
}

// Helper function to get prophet's children
export function getProphetChildren(parentId: string): ProphetNode[] {
  return propheticTree.filter(p => p.parentId === parentId);
}

// Helper function to get prophet's lineage (ancestors)
export function getProphetLineage(prophetId: string): ProphetNode[] {
  const lineage: ProphetNode[] = [];
  let current = getProphetById(prophetId);
  
  while (current) {
    lineage.unshift(current);
    current = current.parentId ? getProphetById(current.parentId) : undefined;
  }
  
  return lineage;
}

// Get all prophets in chronological order
export function getProphetsChronological(): ProphetNode[] {
  return [...propheticTree].sort((a, b) => a.year - b.year);
}

// Get main lineages (descendants of Adam through different branches)
export function getMainLineages(): { [key: string]: ProphetNode[] } {
  return {
    'Nuh': getProphetLineage('nuh'),
    'Ibrahim': getProphetLineage('ibrahim'),
    'Musa': getProphetLineage('musa'),
    'Isa': getProphetLineage('isa'),
    'Muhammad': getProphetLineage('muhammad')
  };
}
