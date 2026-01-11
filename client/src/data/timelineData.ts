export interface TimelineEvent {
  id: string;
  year: number;
  hijri: string;
  date: string;
  title: string;
  description: string;
  category: 'prophet' | 'genealogy' | 'birth' | 'marriage' | 'revelation' | 'battle' | 'expedition' | 'event' | 'death' | 'mother' | 'caliphate';
  location?: string;
  details?: string;
  quranicReference?: string;
  casualties?: string;
  participants?: string[];
}

export const timelineData: TimelineEvent[] = [
  // Pre-Birth Genealogy and Family History
  {
    id: 'zamzam-discovery',
    year: 440,
    hijri: '100 BH',
    date: 'Ancient Times',
    title: 'Discovery of Zamzam Well by Abd al-Muttalib',
    description: 'Abd al-Muttalib ibn Hashim discovered the sacred well of Zamzam in Mecca. This discovery became one of the most significant events in the history of Mecca and the Kaaba.',
    category: 'genealogy',
    location: 'Mecca',
    details: 'According to Islamic tradition, Abd al-Muttalib was guided to the well through a dream. The discovery of Zamzam provided water for pilgrims to the Kaaba and brought great honor and responsibility to the Hashim family. Abd al-Muttalib was given the privilege of providing water (Siqaya) and food (Rifada) to the pilgrims.'
  },
  {
    id: 'abd-muttalib-vow',
    year: 450,
    hijri: '90 BH',
    date: 'Before Abdullah\'s Birth',
    title: 'Abd al-Muttalib\'s Vow and the Sacrifice of Abdullah',
    description: 'Abd al-Muttalib made a vow to Allah that if he were blessed with ten sons, he would sacrifice one of them at the Kaaba. When he had ten sons, he drew lots to determine which son would be sacrificed.',
    category: 'genealogy',
    location: 'Mecca',
    details: 'The lot fell upon Abdullah, the youngest and most beloved son of Abd al-Muttalib. However, through divine intervention and the intercession of the people of Mecca, Abd al-Muttalib was allowed to ransom Abdullah with one hundred camels instead. This event is considered a prefiguration of Prophet Ibrahim\'s sacrifice and is deeply significant in Islamic history. Abdullah was spared to become the father of Prophet Muhammad (SAW).'
  },
  {
    id: 'abdullah-birth',
    year: 546,
    hijri: '24 BH',
    date: 'Age of Abdullah',
    title: 'Birth and Life of Abdullah ibn Abd al-Muttalib',
    description: 'Abdullah ibn Abd al-Muttalib was born as the youngest son of Abd al-Muttalib. He was known for his beauty, virtue, and noble character among the Quraysh.',
    category: 'genealogy',
    location: 'Mecca',
    details: 'Abdullah was the most beloved son of Abd al-Muttalib and was destined to become the father of the Prophet Muhammad (SAW). He inherited his father\'s noble qualities and was highly respected in Mecca for his integrity and character.'
  },
  {
    id: 'abdullah-aminah-marriage',
    year: 569,
    hijri: '1 BH',
    date: 'Before Muhammad\'s Birth',
    title: 'Marriage of Abdullah to Aminah bint Wahb',
    description: 'Abdullah ibn Abd al-Muttalib married Aminah bint Wahb, a noble woman from the tribe of Banu Zuhrah. This union was blessed and would produce the Prophet Muhammad (SAW).',
    category: 'marriage',
    location: 'Mecca',
    details: 'Aminah bint Wahb was the daughter of Wahb ibn Abd Manaf, a respected merchant of Mecca. The marriage was arranged with great care, as both families were of high standing in Mecca. According to Islamic tradition, Aminah became pregnant immediately after the marriage.'
  },
  {
    id: 'year-of-elephant',
    year: 570,
    hijri: '0 BH',
    date: 'Same Year as Muhammad\'s Birth',
    title: 'The Year of the Elephant - Abraha\'s Invasion',
    description: 'In the same year that Prophet Muhammad (SAW) was born, Abraha al-Ashram, the Christian governor of Yemen, marched against Mecca with a large army and an elephant to destroy the Kaaba.',
    category: 'event',
    location: 'Mecca',
    details: 'Abraha led an army of thousands with an elephant named Mahmud to demolish the House of God (the Kaaba). However, Allah sent flocks of birds (Ababil) carrying stones of baked clay, which destroyed Abraha\'s army. This miraculous event is mentioned in the Quran in Surah Al-Fil (Chapter 105). The year came to be known as "Aam al-Fil" (Year of the Elephant) and marked the birth of Prophet Muhammad (SAW).'
  },
  {
    id: 'abdullah-death',
    year: 570,
    hijri: '0 BH',
    date: 'Before or Shortly After Muhammad\'s Birth',
    title: 'Death of Abdullah ibn Abd al-Muttalib',
    description: 'Abdullah ibn Abd al-Muttalib, the father of Prophet Muhammad (SAW), passed away before or shortly after his son\'s birth. Muhammad never knew his father.',
    category: 'death',
    location: 'Medina (or Mecca)',
    details: 'Abdullah died at a young age, either in Medina during a trading journey or in Mecca. Some sources indicate he died of illness. His death meant that Prophet Muhammad (SAW) was born an orphan, never knowing his father. This early loss would shape much of the Prophet\'s early life and experiences.'
  },
  {
    id: 'aminah-abwa-death',
    year: 576,
    hijri: '6 BH',
    date: 'Age 6',
    title: 'Death of Aminah bint Wahb in Abwa',
    description: 'Aminah bint Wahb, the mother of Prophet Muhammad (SAW), passed away in Abwa during a journey to visit her son\'s paternal relatives in Medina. Muhammad was six years old.',
    category: 'death',
    location: 'Abwa (between Mecca and Medina)',
    details: 'Aminah had taken young Muhammad on a journey to Medina to visit his maternal uncles and to show his relatives the son of Abdullah. On the return journey to Mecca, she fell ill in Abwa and passed away there. She was buried in Abwa. Muhammad was deeply affected by the loss of his mother at such a young age. With the death of his mother, he became a complete orphan, having lost both his father before birth and his mother at age six.'
  },

  // The Four Mothers/Wet Nurses
  {
    id: 'thuwaybah-wet-nurse',
    year: 570,
    hijri: '0 BH',
    date: 'Birth Year',
    title: 'Thuwaybah - First Wet Nurse of the Prophet',
    description: 'Thuwaybah was a freed maid of Abu Lahab (Abdul-Uzza ibn Abdul-Muttalib), the uncle of Prophet Muhammad (SAW). She was the first to nurse the Prophet after his birth.',
    category: 'mother',
    location: 'Mecca',
    details: 'Thuwaybah was a slave girl in the household of Abu Lahab. When the Prophet was born, she offered to nurse him. She was the first wet nurse to care for the young Muhammad. Although Abu Lahab was hostile to Islam later in life, he initially showed kindness by allowing Thuwaybah to nurse the Prophet. Thuwaybah later became Muslim and was greatly honored by the Prophet for her service. She is mentioned in Islamic sources as one of the most important figures in the Prophet\'s infancy.'
  },
  {
    id: 'barakah-umm-ayman',
    year: 570,
    hijri: '0 BH',
    date: 'Birth Year',
    title: 'Barakah (Umm Ayman) - Beloved Caretaker',
    description: 'Barakah, known as Umm Ayman (Mother of Ayman), was an Abyssinian slave girl who became the devoted caretaker and mother figure of Prophet Muhammad (SAW) after his mother\'s death.',
    category: 'mother',
    location: 'Mecca',
    details: 'Barakah came to the household of Abdullah (the Prophet\'s father) as a slave. After Aminah\'s death, she became the primary caregiver for young Muhammad. She was with him throughout his childhood and remained his devoted companion throughout his life. The Prophet loved her deeply and treated her with great respect and affection. She was present at many significant events in the Prophet\'s life and was one of the earliest believers in Islam. The Prophet said about her, "She is my mother after my mother." Barakah lived to an old age and died during the time of Umar ibn al-Khattab.'
  },
  {
    id: 'halimah-sa-diyah',
    year: 571,
    hijri: '1 BH',
    date: 'Age 1-2',
    title: 'Jaleemah as-Sa\'diyah (Halimah as-Sa\'diyah) - Bedouin Wet Nurse',
    description: 'Halimah as-Sa\'diyah from the tribe of Banu Sa\'d was the Bedouin wet nurse who raised Prophet Muhammad (SAW) in the desert for approximately two years.',
    category: 'mother',
    location: 'Desert of Banu Sa\'d',
    details: 'Following the custom of Meccan nobility, the young Muhammad was sent to be raised by a Bedouin family in the desert. Halimah as-Sa\'diyah, a nursing mother from Banu Sa\'d, took him as her charge. During his time with her, the Prophet thrived and grew strong in the healthy desert environment. Halimah loved him deeply and reported many miraculous events during his stay with her. She witnessed signs of his future prophethood. When she returned him to Mecca at around age 2, she was reluctant to part with him. Halimah remained devoted to the Prophet throughout her life and was honored by him for her care and affection.'
  },
  {
    id: 'fatimah-asad',
    year: 578,
    hijri: '8 BH',
    date: 'Age 8',
    title: 'Fatimah bint Asad - Aunt and Mother Figure',
    description: 'Fatimah bint Asad, the wife of Abu Talib and mother of Ali ibn Abi Talib, became the primary mother figure for Prophet Muhammad (SAW) after his grandfather\'s death.',
    category: 'mother',
    location: 'Mecca',
    details: 'When Abd al-Muttalib passed away and Abu Talib became the guardian of young Muhammad, Fatimah bint Asad took him into her home and heart. She treated him as her own son, alongside her biological children including Ali. She was known for her kindness, wisdom, and devotion to the Prophet. She provided him with maternal love and care throughout his childhood and adolescence. Fatimah bint Asad was among the early believers in Islam and was greatly honored by the Prophet. When she died, the Prophet performed her funeral prayer himself and made special supplications for her, demonstrating his deep love and gratitude for her maternal care.'
  },

  // Birth and Early Life
  {
    id: 'birth-570',
    year: 570,
    hijri: '52 BH',
    date: 'Year of the Elephant',
    title: 'Birth of Prophet Muhammad (SAW)',
    description: 'Muhammad ibn Abd Allah was born in Mecca, in the Year of the Elephant. His father, Abdullah, had passed away before his birth.',
    category: 'birth',
    location: 'Mecca',
    details: 'Born into the clan of Banu Hashim within the tribe of Quraysh. According to Islamic tradition, he was born on the 12th of Rabi\' al-Awwal.'
  },
  {
    id: 'mother-death-576',
    year: 576,
    hijri: '46 BH',
    date: 'Age 6',
    title: 'Death of Mother Aminah',
    description: 'His mother, Aminah bint Wahb, passed away when Muhammad was 6 years old. He was then raised by his grandfather, Abd al-Muttalib.',
    category: 'death',
    location: 'Abwa'
  },
  {
    id: 'grandfather-death-578',
    year: 578,
    hijri: '44 BH',
    date: 'Age 8',
    title: 'Death of Grandfather Abd al-Muttalib',
    description: 'His grandfather Abd al-Muttalib passed away when Muhammad was 8 years old. His uncle Abu Talib became his guardian.',
    category: 'death',
    location: 'Mecca'
  },
  {
    id: 'syria-journey-583',
    year: 583,
    hijri: '39 BH',
    date: 'Age 12',
    title: 'Journey to Syria with Uncle Abu Talib',
    description: 'Muhammad traveled to Syria with his uncle Abu Talib. During this journey, he met Bahira, a Christian monk who recognized signs of his future prophethood.',
    category: 'event',
    location: 'Syria (Busra al-Sham)',
    details: 'The monk Bahira observed a cloud giving shade to young Muhammad and recognized the "seal of prophecy" between his shoulders from ancient manuscripts.'
  },
  {
    id: 'hilf-al-fudul-591',
    year: 591,
    hijri: '31 BH',
    date: 'Age 19',
    title: 'Hilf al-Fudul (League of the Virtuous)',
    description: 'Muhammad participated in a pact of chivalry established by notables of Quraysh for the establishment of justice and protection of the weak.',
    category: 'event',
    location: 'Mecca',
    details: 'He was chosen for this pact because of his absolute truthfulness, trustworthiness, integrity, and compassion. He was known as "Al-Amin" (The Trustworthy) and "As-Sadiq" (The Truthful).'
  },
  {
    id: 'marriage-khadijah-595',
    year: 595,
    hijri: '28/27 BH',
    date: 'Age 25',
    title: 'Marriage to Khadijah bint Khuwaylid',
    description: 'Muhammad married Khadijah, a wealthy widow and successful merchant. She was impressed by his honesty and trustworthiness during a business transaction to Syria.',
    category: 'marriage',
    location: 'Mecca',
    details: 'Khadijah was approximately 40 years old at the time of marriage. She was the first to believe in his prophethood and remained his only wife for 24 years until her death.'
  },
  {
    id: 'kaabah-rebuild-605',
    year: 605,
    hijri: '17 BH',
    date: 'Age 35',
    title: 'Reconstruction of the Ka\'bah',
    description: 'The Ka\'bah was rebuilt following a major fire that had partly destroyed the structure. Muhammad participated in the reconstruction and was honored with placing the Black Stone.',
    category: 'event',
    location: 'Mecca'
  },

  // First Revelation
  {
    id: 'first-revelation-610',
    year: 610,
    hijri: '0 AH',
    date: 'Ramadan, Age 40',
    title: 'First Revelation - Surah Al-Alaq (96)',
    description: 'Muhammad received the first revelation of the Quran in the Cave of Hira. The first five verses of Surah Al-Alaq were revealed.',
    category: 'revelation',
    location: 'Cave of Hira, Mecca',
    quranicReference: 'Surah Al-Alaq 96:1-5 - "Read in the name of your Lord who created..."',
    details: 'This marked the beginning of the 23-year revelation period. The revelation came through the Angel Gabriel (Jibril).'
  },

  // Quranic Revelations - Meccan Period (Chronological Order)
  {
    id: 'surah-qalam-68',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Qalam (68)',
    description: 'The second surah to be revealed according to most scholars.',
    category: 'revelation',
    quranicReference: 'Surah Al-Qalam 68 - "Nun. By the pen and what they write..."'
  },
  {
    id: 'surah-muzzammil-73',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Muzzammil (73)',
    description: 'Third surah revealed, addressing the Prophet to stand in prayer at night.',
    category: 'revelation',
    quranicReference: 'Surah Al-Muzzammil 73 - "O you wrapped in garments..."'
  },
  {
    id: 'surah-muddaththir-74',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Muddaththir (74)',
    description: 'Fourth surah revealed, commanding the Prophet to warn people.',
    category: 'revelation',
    quranicReference: 'Surah Al-Muddaththir 74 - "O you wrapped up in a cloak..."'
  },
  {
    id: 'surah-faatiha-1',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Faatiha (1)',
    description: 'The Opening chapter of the Quran, revealed early in the prophetic mission.',
    category: 'revelation',
    quranicReference: 'Surah Al-Faatiha 1 - "All praise is due to Allah, Lord of the worlds..."'
  },
  {
    id: 'surah-masad-111',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Masad (111)',
    description: 'Revealed regarding the opposition of Abu Lahab to the Prophet.',
    category: 'revelation',
    quranicReference: 'Surah Al-Masad 111 - "Perish the two hands of Abu Lahab..."'
  },
  {
    id: 'surah-takwir-81',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah At-Takwir (81)',
    description: 'Surah about the cosmic events of the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah At-Takwir 81 - "When the sun is wrapped up..."'
  },
  {
    id: 'surah-alaa-87',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-A\'laa (87)',
    description: 'Surah about glorifying the Lord and purification.',
    category: 'revelation',
    quranicReference: 'Surah Al-A\'laa 87 - "Glorify the name of your Lord, the Most High..."'
  },
  {
    id: 'surah-lail-92',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Lail (92)',
    description: 'Surah about the night and the contrast between the righteous and the wicked.',
    category: 'revelation',
    quranicReference: 'Surah Al-Lail 92 - "By the night when it covers..."'
  },
  {
    id: 'surah-fajr-89',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Fajr (89)',
    description: 'Surah about the dawn and the fate of past nations.',
    category: 'revelation',
    quranicReference: 'Surah Al-Fajr 89 - "By the dawn..."'
  },
  {
    id: 'surah-dhuha-93',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Ad-Dhuhaa (93)',
    description: 'Surah revealed during a period when revelations ceased, comforting the Prophet.',
    category: 'revelation',
    quranicReference: 'Surah Ad-Dhuhaa 93 - "By the morning brightness..."'
  },
  {
    id: 'surah-sharh-94',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Ash-Sharh (94)',
    description: 'Surah about the expansion of the Prophet\'s heart and removal of his burden.',
    category: 'revelation',
    quranicReference: 'Surah Ash-Sharh 94 - "Did We not expand for you your breast..."'
  },
  {
    id: 'surah-asr-103',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Asr (103)',
    description: 'Short surah about time and the conditions for success.',
    category: 'revelation',
    quranicReference: 'Surah Al-Asr 103 - "By the time..."'
  },
  {
    id: 'surah-aadiyaat-100',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Aadiyaat (100)',
    description: 'Surah about the horses and human nature.',
    category: 'revelation',
    quranicReference: 'Surah Al-Aadiyaat 100 - "By the steeds that run with panting..."'
  },
  {
    id: 'surah-kawthar-108',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Kawthar (108)',
    description: 'Short surah about the river Al-Kawthar in Paradise.',
    category: 'revelation',
    quranicReference: 'Surah Al-Kawthar 108 - "Indeed, We have given you Al-Kawthar..."'
  },
  {
    id: 'surah-takaathur-102',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah At-Takaathur (102)',
    description: 'Surah about the distraction of worldly abundance.',
    category: 'revelation',
    quranicReference: 'Surah At-Takaathur 102 - "The mutual rivalry for piling up..."'
  },
  {
    id: 'surah-maun-107',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Maa\'un (107)',
    description: 'Surah about small kindnesses and denying aid to the needy.',
    category: 'revelation',
    quranicReference: 'Surah Al-Maa\'un 107 - "Have you seen the one who denies the Day of Judgment..."'
  },
  {
    id: 'surah-kaafiroon-109',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Kaafiroon (109)',
    description: 'Surah declaring religious freedom and separation from disbelief.',
    category: 'revelation',
    quranicReference: 'Surah Al-Kaafiroon 109 - "Say, O disbelievers..."'
  },
  {
    id: 'surah-fil-105',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Fil (105)',
    description: 'Surah about the Year of the Elephant and the destruction of Abrahah\'s army.',
    category: 'revelation',
    quranicReference: 'Surah Al-Fil 105 - "Have you not seen how your Lord dealt with the companions of the elephant..."'
  },
  {
    id: 'surah-falaq-113',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Falaq (113)',
    description: 'One of the two protective surahs (Mu\'awwidhatayn).',
    category: 'revelation',
    quranicReference: 'Surah Al-Falaq 113 - "Say, I seek refuge in the Lord of the dawn..."'
  },
  {
    id: 'surah-naas-114',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah An-Naas (114)',
    description: 'The final surah of the Quran, one of the protective surahs.',
    category: 'revelation',
    quranicReference: 'Surah An-Naas 114 - "Say, I seek refuge in the Lord of mankind..."'
  },
  {
    id: 'surah-ikhlaas-112',
    year: 610,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Ikhlaas (112)',
    description: 'Surah about the absolute oneness of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ikhlaas 112 - "Say, He is Allah, the One..."'
  },
  {
    id: 'surah-najm-53',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah An-Najm (53)',
    description: 'Surah about the Night Journey and the Prophet\'s vision of Gabriel.',
    category: 'revelation',
    quranicReference: 'Surah An-Najm 53 - "By the star when it descends..."'
  },
  {
    id: 'surah-abasa-80',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Abasa (80)',
    description: 'Surah revealed when the Prophet frowned at a blind man.',
    category: 'revelation',
    quranicReference: 'Surah Abasa 80 - "He frowned and turned away..."'
  },
  {
    id: 'surah-qadr-97',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Qadr (97)',
    description: 'Surah about the Night of Power (Laylat al-Qadr).',
    category: 'revelation',
    quranicReference: 'Surah Al-Qadr 97 - "Indeed, We sent it down during the Night of Power..."'
  },
  {
    id: 'surah-shams-91',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Ash-Shams (91)',
    description: 'Surah about the sun and the purification of the soul.',
    category: 'revelation',
    quranicReference: 'Surah Ash-Shams 91 - "By the sun and its brightness..."'
  },
  {
    id: 'surah-burooj-85',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Burooj (85)',
    description: 'Surah about the constellations and the story of the companions of the ditch.',
    category: 'revelation',
    quranicReference: 'Surah Al-Burooj 85 - "By the sky containing the big stars..."'
  },
  {
    id: 'surah-tin-95',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah At-Tin (95)',
    description: 'Surah about the fig and the creation of mankind.',
    category: 'revelation',
    quranicReference: 'Surah At-Tin 95 - "By the fig and the olive..."'
  },
  {
    id: 'surah-quraish-106',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Quraish (106)',
    description: 'Surah about the Quraysh and their trade journeys.',
    category: 'revelation',
    quranicReference: 'Surah Quraish 106 - "For the familiarization of the Quraysh..."'
  },
  {
    id: 'surah-qaaria-101',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Qaari\'a (101)',
    description: 'Surah about the Day of Judgment called "The Striking Hour".',
    category: 'revelation',
    quranicReference: 'Surah Al-Qaari\'a 101 - "The Striking Hour..."'
  },
  {
    id: 'surah-qiyama-75',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Qiyama (75)',
    description: 'Surah about the Resurrection and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah Al-Qiyama 75 - "I do not swear by the Day of Resurrection..."'
  },
  {
    id: 'surah-humaza-104',
    year: 611,
    hijri: '1 AH',
    date: 'Early Revelation',
    title: 'Revelation of Surah Al-Humaza (104)',
    description: 'Surah condemning the slanderer and backbiter.',
    category: 'revelation',
    quranicReference: 'Surah Al-Humaza 104 - "Woe to every slanderer and backbiter..."'
  },

  // Private Preaching Period
  {
    id: 'private-preaching-610-613',
    year: 613,
    hijri: '3 AH',
    date: 'Age 40-43',
    title: 'Private Preaching Period (3 Years)',
    description: 'For the first three years after receiving revelation, Muhammad preached Islam privately to close family and trusted friends.',
    category: 'event',
    location: 'Mecca',
    details: 'Early believers included his wife Khadijah, his cousin Ali, his friend Abu Bakr, and others. The preaching was kept secret to avoid persecution.'
  },

  // Public Preaching
  {
    id: 'public-preaching-613',
    year: 613,
    hijri: '3 AH',
    date: 'Age 43',
    title: 'Beginning of Public Preaching',
    description: 'Muhammad began to preach Islam publicly in Mecca, calling people to abandon idolatry and worship Allah alone.',
    category: 'event',
    location: 'Mecca',
    details: 'This marked the beginning of intense opposition from the Quraysh. The Prophet faced ridicule, threats, and persecution.'
  },

  // Migration to Abyssinia
  {
    id: 'migration-abyssinia-614',
    year: 614,
    hijri: '5 AH',
    date: 'Age 44',
    title: 'Migration to Abyssinia',
    description: 'Due to persecution in Mecca, Muhammad commanded his followers to migrate to Abyssinia (modern-day Ethiopia) for safety.',
    category: 'event',
    location: 'Abyssinia',
    details: 'The first group of Muslims migrated to Abyssinia where they were protected by the Christian king Negus. Some returned to Mecca later.'
  },

  // More Quranic Revelations - Meccan Period (continuing chronologically)
  {
    id: 'surah-mursalat-77',
    year: 615,
    hijri: '6 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Mursalat (77)',
    description: 'Surah about the angels sent forth and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah Al-Mursalat 77 - "By the winds sent forth..."'
  },
  {
    id: 'surah-qaf-50',
    year: 615,
    hijri: '6 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Qaf (50)',
    description: 'Surah about the Quran, resurrection, and divine knowledge.',
    category: 'revelation',
    quranicReference: 'Surah Qaf 50 - "Qaf. By the Quran of Majesty..."'
  },
  {
    id: 'surah-balad-90',
    year: 615,
    hijri: '6 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Balad (90)',
    description: 'Surah about the sacred city (Mecca) and the path to righteousness.',
    category: 'revelation',
    quranicReference: 'Surah Al-Balad 90 - "I do not need to swear by this city..."'
  },
  {
    id: 'surah-tariq-86',
    year: 615,
    hijri: '6 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah At-Tariq (86)',
    description: 'Surah about the night-comer (the morning star) and the creation of man.',
    category: 'revelation',
    quranicReference: 'Surah At-Tariq 86 - "By the sky and the night-comer..."'
  },
  {
    id: 'surah-qamar-54',
    year: 615,
    hijri: '6 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Qamar (54)',
    description: 'Surah about the moon and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Qamar 54 - "The Hour has come near and the moon has split..."'
  },
  {
    id: 'surah-saad-38',
    year: 616,
    hijri: '7 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Saad (38)',
    description: 'Surah about various prophets and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah Saad 38 - "Saad. By the Quran containing reminder..."'
  },
  {
    id: 'surah-araf-7',
    year: 616,
    hijri: '7 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-A\'raf (7)',
    description: 'Long surah about the heights between paradise and hell, stories of prophets.',
    category: 'revelation',
    quranicReference: 'Surah Al-A\'raf 7 - "Alif, Lam, Mim, Sad..."'
  },
  {
    id: 'surah-jinn-72',
    year: 616,
    hijri: '7 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Jinn (72)',
    description: 'Surah about the jinn who listened to the Quran.',
    category: 'revelation',
    quranicReference: 'Surah Al-Jinn 72 - "Say, it has been revealed to me that a group of jinn listened..."'
  },
  {
    id: 'surah-yaseen-36',
    year: 617,
    hijri: '8 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Yaseen (36)',
    description: 'Surah about the Quran and resurrection, often called "the heart of the Quran".',
    category: 'revelation',
    quranicReference: 'Surah Yaseen 36 - "Ya Seen. By the Quran of wisdom..."'
  },
  {
    id: 'surah-furqan-25',
    year: 617,
    hijri: '8 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Furqan (25)',
    description: 'Surah about the Criterion (Al-Furqan) and the attributes of the Merciful.',
    category: 'revelation',
    quranicReference: 'Surah Al-Furqan 25 - "Blessed is He who sent down the Criterion..."'
  },
  {
    id: 'surah-fatir-35',
    year: 617,
    hijri: '8 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Fatir (35)',
    description: 'Surah about the Originator and the signs of creation.',
    category: 'revelation',
    quranicReference: 'Surah Fatir 35 - "All praise is due to Allah, the Originator of the heavens and the earth..."'
  },
  {
    id: 'surah-maryam-19',
    year: 618,
    hijri: '9 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Maryam (19)',
    description: 'Surah about Mary and the birth of Jesus, and other prophets.',
    category: 'revelation',
    quranicReference: 'Surah Maryam 19 - "Kaf Ha Ya Ain Sad. A mention of the mercy of your Lord to His servant Zachariah..."'
  },
  {
    id: 'surah-taha-20',
    year: 618,
    hijri: '9 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Taha (20)',
    description: 'Surah about Moses and the revelation to Muhammad.',
    category: 'revelation',
    quranicReference: 'Surah Taha 20 - "Ta Ha. We have not sent down to you the Quran that you be in distress..."'
  },
  {
    id: 'surah-waqia-56',
    year: 618,
    hijri: '9 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Waqia (56)',
    description: 'Surah about the Inevitable Event (Resurrection) and the three categories of people.',
    category: 'revelation',
    quranicReference: 'Surah Al-Waqia 56 - "When the Inevitable Event comes to pass..."'
  },
  {
    id: 'surah-shuara-26',
    year: 619,
    hijri: '10 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Ash-Shu\'ara (26)',
    description: 'Surah about the poets and stories of various prophets.',
    category: 'revelation',
    quranicReference: 'Surah Ash-Shu\'ara 26 - "Ta Seen Mim. These are the verses of the clear Book..."'
  },
  {
    id: 'surah-naml-27',
    year: 619,
    hijri: '10 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah An-Naml (27)',
    description: 'Surah about the ant and the story of Solomon and the Queen of Sheba.',
    category: 'revelation',
    quranicReference: 'Surah An-Naml 27 - "Ta Seen. These are the verses of the Quran and a clear Book..."'
  },
  {
    id: 'surah-qasas-28',
    year: 619,
    hijri: '10 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Qasas (28)',
    description: 'Surah about the stories and the life of Moses.',
    category: 'revelation',
    quranicReference: 'Surah Al-Qasas 28 - "Ta Seen Mim. These are the verses of the clear Book..."'
  },
  {
    id: 'surah-isra-17',
    year: 620,
    hijri: '11 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Isra (17)',
    description: 'Surah about the Night Journey (Isra) and Ascension (Mi\'raj).',
    category: 'revelation',
    quranicReference: 'Surah Al-Isra 17 - "Exalted is He who took His Servant by night from Al-Masjid Al-Haram..."'
  },
  {
    id: 'surah-yunus-10',
    year: 620,
    hijri: '11 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Yunus (10)',
    description: 'Surah about Jonah and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Yunus 10 - "Alif, Lam, Ra. These are the verses of the wise Book..."'
  },
  {
    id: 'surah-hud-11',
    year: 620,
    hijri: '11 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Hud (11)',
    description: 'Surah about Hud and stories of various prophets.',
    category: 'revelation',
    quranicReference: 'Surah Hud 11 - "Alif, Lam, Ra. A Book whose verses are perfected..."'
  },
  {
    id: 'surah-yusuf-12',
    year: 620,
    hijri: '11 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Yusuf (12)',
    description: 'Surah about Joseph and his story, called "the best of stories".',
    category: 'revelation',
    quranicReference: 'Surah Yusuf 12 - "Alif, Lam, Ra. These are the verses of the clear Book..."'
  },
  {
    id: 'surah-hijr-15',
    year: 620,
    hijri: '11 AH',
    date: 'Mid-Meccan Period',
    title: 'Revelation of Surah Al-Hijr (15)',
    description: 'Surah about the Rocky Tract and the story of Lot.',
    category: 'revelation',
    quranicReference: 'Surah Al-Hijr 15 - "Alif, Lam, Ra. These are the verses of the Book and a clear Quran..."'
  },
  {
    id: 'surah-anam-6',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-An\'am (6)',
    description: 'Long surah about cattle and the oneness of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-An\'am 6 - "All praise is due to Allah who created the heavens and the earth..."'
  },
  {
    id: 'surah-saaffat-37',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah As-Saaffat (37)',
    description: 'Surah about those ranged in ranks and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah As-Saaffat 37 - "By those ranged in ranks..."'
  },
  {
    id: 'surah-luqman-31',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Luqman (31)',
    description: 'Surah about Luqman\'s moral teachings to his son.',
    category: 'revelation',
    quranicReference: 'Surah Luqman 31 - "Alif, Lam, Mim. These are the verses of the wise Book..."'
  },
  {
    id: 'surah-saba-34',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Saba (34)',
    description: 'Surah about Sheba and Solomon\'s kingdom.',
    category: 'revelation',
    quranicReference: 'Surah Saba 34 - "All praise is due to Allah to whom belongs whatever is in the heavens and the earth..."'
  },
  {
    id: 'surah-zumar-39',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Az-Zumar (39)',
    description: 'Surah about the groups and the oneness of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Az-Zumar 39 - "The revelation of this Book is from Allah, the Mighty, the Wise..."'
  },
  {
    id: 'surah-ghafir-40',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Ghafir (40)',
    description: 'Surah about the Forgiver and the believer from Pharaoh\'s family.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ghafir 40 - "Ha Mim. The revelation of the Book is from Allah, the Mighty, the Wise..."'
  },
  {
    id: 'surah-fussilat-41',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Fussilat (41)',
    description: 'Surah about the Quran being clearly expounded.',
    category: 'revelation',
    quranicReference: 'Surah Fussilat 41 - "Ha Mim. A revelation from the Most Merciful, the Merciful..."'
  },
  {
    id: 'surah-shura-42',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Ash-Shura (42)',
    description: 'Surah about consultation and the revelation to Muhammad.',
    category: 'revelation',
    quranicReference: 'Surah Ash-Shura 42 - "Ha Mim. Ain Seen Qaf. Thus has He revealed to you..."'
  },
  {
    id: 'surah-zukhruf-43',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Az-Zukhruf (43)',
    description: 'Surah about the Ornaments of Life.',
    category: 'revelation',
    quranicReference: 'Surah Az-Zukhruf 43 - "Ha Mim. By the clear Book..."'
  },
  {
    id: 'surah-dukhaan-44',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Ad-Dukhaan (44)',
    description: 'Surah about the Smoke and the night of Qadr.',
    category: 'revelation',
    quranicReference: 'Surah Ad-Dukhaan 44 - "Ha Mim. By the clear Book..."'
  },
  {
    id: 'surah-jathiya-45',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Jathiya (45)',
    description: 'Surah about the Crouching and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Jathiya 45 - "Ha Mim. The revelation of the Book is from Allah, the Mighty, the Wise..."'
  },
  {
    id: 'surah-ahqaf-46',
    year: 621,
    hijri: '12 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Ahqaf (46)',
    description: 'Surah about the Winding Sand-tracts and the jinn.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ahqaf 46 - "Ha Mim. The revelation of the Book is from Allah, the Mighty, the Wise..."'
  },
  {
    id: 'surah-dhariyat-51',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Adh-Dhariyat (51)',
    description: 'Surah about the Winds that scatter and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Adh-Dhariyat 51 - "By the winds that scatter..."'
  },
  {
    id: 'surah-tur-52',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah At-Tur (52)',
    description: 'Surah about the Mount and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah At-Tur 52 - "By the Mount..."'
  },
  {
    id: 'surah-mulk-67',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Mulk (67)',
    description: 'Surah about the Kingdom and the signs in creation.',
    category: 'revelation',
    quranicReference: 'Surah Al-Mulk 67 - "Blessed is He in whose hand is the dominion..."'
  },
  {
    id: 'surah-haqqa-69',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Haqqa (69)',
    description: 'Surah about the Inevitable Reality (Resurrection).',
    category: 'revelation',
    quranicReference: 'Surah Al-Haqqa 69 - "The Inevitable Reality..."'
  },
  {
    id: 'surah-maarij-70',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Ma\'arij (70)',
    description: 'Surah about the Ascending Stairways.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ma\'arij 70 - "A questioner asked about the punishment bound to happen..."'
  },
  {
    id: 'surah-nuh-71',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Nuh (71)',
    description: 'Surah about Noah and his preaching to his people.',
    category: 'revelation',
    quranicReference: 'Surah Nuh 71 - "Indeed, We sent Noah to his people..."'
  },
  {
    id: 'surah-anbiya-21',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Anbiya (21)',
    description: 'Surah about the Prophets and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah Al-Anbiya 21 - "Approaching for mankind is their reckoning..."'
  },
  {
    id: 'surah-muminun-23',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Muminun (23)',
    description: 'Surah about the Believers and the creation of man.',
    category: 'revelation',
    quranicReference: 'Surah Al-Muminun 23 - "Certainly will the believers have succeeded..."'
  },
  {
    id: 'surah-sajda-32',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah As-Sajda (32)',
    description: 'Surah about the Prostration and the creation of the heavens and earth.',
    category: 'revelation',
    quranicReference: 'Surah As-Sajda 32 - "Alif, Lam, Mim. The revelation of the Book is from Allah..."'
  },
  {
    id: 'surah-tur-52-continued',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah At-Tur (52) - Continued',
    description: 'Additional verses of Surah At-Tur about the Mount and divine revelation.',
    category: 'revelation',
    quranicReference: 'Surah At-Tur 52 (continued)'
  },
  {
    id: 'surah-rum-30',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Ar-Rum (30)',
    description: 'Surah about the Romans and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Ar-Rum 30 - "Alif, Lam, Mim. The Romans have been defeated..."'
  },
  {
    id: 'surah-ankabut-29',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Ankabut (29)',
    description: 'Surah about the Spider and trials of faith.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ankabut 29 - "Alif, Lam, Mim. Do the people think..."'
  },
  {
    id: 'surah-mutaffifin-83',
    year: 622,
    hijri: '1 AH',
    date: 'Late Meccan Period',
    title: 'Revelation of Surah Al-Mutaffifin (83)',
    description: 'Surah about the Cheaters and those who give short measure.',
    category: 'revelation',
    quranicReference: 'Surah Al-Mutaffifin 83 - "Woe to those who give less..."'
  },

  // Year of Sorrow
  {
    id: 'year-of-sorrow-619',
    year: 619,
    hijri: '13 BH',
    date: 'Age 49',
    title: 'Year of Sorrow (Khadijah and Abu Talib Die)',
    description: 'Both Khadijah, the Prophet\'s beloved first wife, and his uncle Abu Talib, his main protector, died in the same year.',
    category: 'death',
    location: 'Mecca',
    details: 'This year marked a turning point in the Prophet\'s life. Without Abu Talib\'s protection, persecution increased significantly. Khadijah\'s death left him grief-stricken.'
  },

  // Marriages after Khadijah
  {
    id: 'marriage-sawdah-619',
    year: 619,
    hijri: '13 BH',
    date: 'Age 49',
    title: 'Marriage to Sawdah bint Zam\'ah',
    description: 'After Khadijah\'s death, Muhammad married Sawdah, a widow with children.',
    category: 'marriage',
    location: 'Mecca'
  },
  {
    id: 'marriage-aisha-620',
    year: 620,
    hijri: '12 BH',
    date: 'Age 50',
    title: 'Marriage to Aisha bint Abi Bakr',
    description: 'Muhammad married Aisha, the daughter of his close companion Abu Bakr.',
    category: 'marriage',
    location: 'Mecca',
    details: 'Aisha became one of the most important figures in Islamic history, narrating many hadith and serving as a source of knowledge about the Prophet\'s life.'
  },

  // Hijrah to Medina
  {
    id: 'hijrah-medina-622',
    year: 622,
    hijri: '1 AH',
    date: 'September, Age 52',
    title: 'Hijrah (Migration) to Medina',
    description: 'The Prophet and Abu Bakr migrated to Medina to escape persecution in Mecca. This marks the beginning of the Islamic calendar (1 AH).',
    category: 'event',
    location: 'Medina',
    details: 'The journey took several days. The Prophet and Abu Bakr hid in a cave to avoid pursuers. Upon arrival in Medina, the Prophet was received with great joy by the Ansar (helpers).'
  },

  // Medinan Period - Battles and Expeditions
  {
    id: 'battle-badr-624',
    year: 624,
    hijri: '2 AH',
    date: '13 March, Age 52',
    title: 'Battle of Badr',
    description: 'The first major battle between Muslims and the Quraysh. Despite being outnumbered, the Muslims achieved a decisive victory.',
    category: 'battle',
    location: 'Badr, near Medina',
    casualties: 'Muslim: ~14 killed, Quraysh: ~70 killed',
    participants: ['Muslims', 'Quraysh'],
    details: 'Muslim forces: 313, Quraysh forces: 950-1000. This battle is mentioned in the Quran and is considered a turning point in Islamic history.'
  },
  {
    id: 'invasion-banu-qaynuqa-624',
    year: 624,
    hijri: '2 AH',
    date: 'April, Age 52',
    title: 'Invasion of Banu Qaynuqa',
    description: 'The Prophet led an expedition against the Jewish tribe of Banu Qaynuqa who had violated their treaty with the Muslims.',
    category: 'expedition',
    location: 'Near Medina'
  },
  {
    id: 'marriage-hafsah-625',
    year: 625,
    hijri: '3 AH',
    date: 'Age 53',
    title: 'Marriage to Hafsah bint Umar',
    description: 'Muhammad married Hafsah, the daughter of Umar ibn al-Khattab, after the death of her first husband.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'battle-uhud-625',
    year: 625,
    hijri: '3 AH',
    date: '23 March, Age 53',
    title: 'Battle of Uhud',
    description: 'A major battle where the Quraysh sought revenge for their defeat at Badr. The Muslims initially gained the upper hand but were defeated when archers left their positions.',
    category: 'battle',
    location: 'Mount Uhud, near Medina',
    casualties: 'Muslim: ~70 killed, Quraysh: ~22 killed',
    participants: ['Muslims', 'Quraysh'],
    details: 'Muslim forces: 700, Quraysh forces: 3000. The Prophet was wounded in this battle. This battle taught important lessons about obedience and discipline.'
  },
  {
    id: 'marriage-zaynab-khuzaymah-625',
    year: 625,
    hijri: '3 AH',
    date: 'Age 53',
    title: 'Marriage to Zaynab bint Khuzaymah',
    description: 'Muhammad married Zaynab, known as "Umm al-Masakin" (Mother of the Poor) for her charity.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'marriage-umm-salamah-625',
    year: 625,
    hijri: '3 AH',
    date: 'Age 53',
    title: 'Marriage to Umm Salamah',
    description: 'Muhammad married Umm Salamah, a widow with children, known for her wisdom and piety.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'invasion-banu-nadir-625',
    year: 625,
    hijri: '4 AH',
    date: 'August, Age 53',
    title: 'Invasion of Banu Nadir',
    description: 'The Prophet led an expedition against the Jewish tribe of Banu Nadir who had violated their treaty.',
    category: 'expedition',
    location: 'Near Medina'
  },
  {
    id: 'marriage-zaynab-jahsh-626',
    year: 626,
    hijri: '4 AH',
    date: 'Age 54',
    title: 'Marriage to Zaynab bint Jahsh',
    description: 'Muhammad married Zaynab bint Jahsh, his cousin, after her divorce from Zayd ibn Harithah.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'battle-khandaq-627',
    year: 627,
    hijri: '5 AH',
    date: 'April, Age 55',
    title: 'Battle of Khandaq (Battle of the Trench)',
    description: 'A major defensive battle where the Muslims dug a trench around Medina to defend against a coalition of tribes. The siege lasted about two weeks.',
    category: 'battle',
    location: 'Medina',
    casualties: 'Coalition: ~6 killed, Muslims: minimal casualties',
    participants: ['Muslims', 'Coalition of tribes'],
    details: 'Muslim forces: 3000, Coalition forces: 10,000+. The strategy of digging a trench was suggested by Salman al-Farsi. The coalition eventually withdrew without breaching the trench.'
  },
  {
    id: 'invasion-banu-qurayza-627',
    year: 627,
    hijri: '5 AH',
    date: 'May, Age 55',
    title: 'Invasion of Banu Qurayza',
    description: 'After the Battle of Khandaq, the Prophet led an expedition against Banu Qurayza, a Jewish tribe that had betrayed their treaty during the siege.',
    category: 'expedition',
    location: 'Near Medina'
  },
  {
    id: 'marriage-juwayriyyah-627',
    year: 627,
    hijri: '5 AH',
    date: 'Age 55',
    title: 'Marriage to Juwayriyyah bint al-Harith',
    description: 'Muhammad married Juwayriyyah, a captive from the Banu al-Mustaliq tribe. Her marriage led to the release of her tribe.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'treaty-hudaybiyyah-628',
    year: 628,
    hijri: '6 AH',
    date: 'March, Age 56',
    title: 'Treaty of Hudaybiyyah',
    description: 'A peace treaty between the Muslims and the Quraysh. Although it appeared to favor the Quraysh, it was a strategic victory for the Muslims.',
    category: 'event',
    location: 'Hudaybiyyah, near Mecca',
    details: 'The treaty allowed Muslims to perform Umrah the following year and established a 10-year peace period. It also allowed the Muslims to gain time to strengthen their position.'
  },
  {
    id: 'marriage-safiyyah-628',
    year: 628,
    hijri: '7 AH',
    date: 'Age 56',
    title: 'Marriage to Safiyyah bint Huyayy',
    description: 'Muhammad married Safiyyah, a captive from the Jewish tribe of Banu Nadir, after the Battle of Khaybar.',
    category: 'marriage',
    location: 'Khaybar'
  },
  {
    id: 'battle-khaybar-628',
    year: 628,
    hijri: '7 AH',
    date: 'May/June, Age 56',
    title: 'Battle of Khaybar',
    description: 'The Prophet led a campaign against the Jewish fortress of Khaybar. After a series of battles, the Muslims conquered the fortress.',
    category: 'battle',
    location: 'Khaybar, north of Medina',
    details: 'The conquest of Khaybar secured the northern frontier of Medina and provided resources for the Muslim community.'
  },
  {
    id: 'marriage-umm-habibah-628',
    year: 628,
    hijri: '7 AH',
    date: 'Age 56',
    title: 'Marriage to Umm Habibah',
    description: 'Muhammad married Umm Habibah, a widow who had previously been married to Ubaydullah ibn Jahsh.',
    category: 'marriage',
    location: 'Medina'
  },
  {
    id: 'marriage-maymunah-629',
    year: 629,
    hijri: '7 AH',
    date: 'Age 57',
    title: 'Marriage to Maymunah bint al-Harith',
    description: 'Muhammad married Maymunah, the sister of Umm al-Fadl, during the Umrah of al-Qada.',
    category: 'marriage',
    location: 'Sarif, near Mecca'
  },
  {
    id: 'umrah-qada-629',
    year: 629,
    hijri: '7 AH',
    date: 'March, Age 57',
    title: 'Umrah of al-Qada (Pilgrimage of Fulfillment)',
    description: 'The Prophet and his followers performed the Umrah (minor pilgrimage) that had been prevented the previous year by the Treaty of Hudaybiyyah.',
    category: 'event',
    location: 'Mecca'
  },
  {
    id: 'battle-mutah-629',
    year: 629,
    hijri: '8 AH',
    date: 'September, Age 57',
    title: 'Battle of Mu\'tah',
    description: 'The Prophet sent an expedition to confront the Byzantine Empire. Although the Muslims were defeated, they withdrew in good order.',
    category: 'battle',
    location: 'Mu\'tah, in present-day Jordan',
    details: 'This was the first direct confrontation between Muslims and the Byzantine Empire. The Prophet appointed Zayd ibn Harithah as commander.'
  },

  // Conquest of Mecca
  {
    id: 'conquest-mecca-630',
    year: 630,
    hijri: '8 AH',
    date: 'January, Age 58',
    title: 'Conquest of Mecca',
    description: 'The Prophet led a large Muslim army to Mecca and conquered the city without significant bloodshed. The Quraysh surrendered peacefully.',
    category: 'event',
    location: 'Mecca',
    details: 'The Prophet entered Mecca with 10,000 followers. He pardoned the Quraysh and destroyed the idols in the Ka\'bah. This was a pivotal moment in Islamic history.'
  },
  {
    id: 'battle-hunayn-630',
    year: 630,
    hijri: '8 AH',
    date: 'January, Age 58',
    title: 'Battle of Hunayn',
    description: 'Shortly after the Conquest of Mecca, the Prophet faced a coalition of tribes at Hunayn. The Muslims achieved a decisive victory.',
    category: 'battle',
    location: 'Hunayn Valley, near Mecca',
    casualties: 'Coalition: ~4000 killed, Muslims: ~12 killed',
    participants: ['Muslims', 'Coalition of tribes'],
    details: 'Muslim forces: 12,000, Coalition forces: ~20,000. Initially, the Muslims were surprised and began to retreat, but the Prophet rallied them to victory.'
  },
  {
    id: 'siege-taif-630',
    year: 630,
    hijri: '8 AH',
    date: 'February, Age 58',
    title: 'Siege of Ta\'if',
    description: 'After the Battle of Hunayn, the Prophet led a siege of the city of Ta\'if, which resisted Muslim authority.',
    category: 'expedition',
    location: 'Ta\'if, near Mecca',
    details: 'The siege lasted about two weeks. Although the city did not surrender, the siege demonstrated Muslim military strength in the region.'
  },

  // Final Years
  {
    id: 'expedition-tabuk-630',
    year: 630,
    hijri: '9 AH',
    date: 'October-December, Age 58',
    title: 'Expedition of Tabuk',
    description: 'The Prophet led the largest military expedition to Tabuk in northern Arabia to confront the Byzantine threat. No major battle occurred.',
    category: 'expedition',
    location: 'Tabuk, northern Arabia',
    details: 'This expedition demonstrated Muslim military capability and secured the northern frontier. It was the last major military expedition led by the Prophet.'
  },
  {
    id: 'farewell-pilgrimage-632',
    year: 632,
    hijri: '10 AH',
    date: 'March, Age 62',
    title: 'Farewell Pilgrimage (Hajj)',
    description: 'The Prophet performed his final pilgrimage to Mecca, delivering the Farewell Sermon to a large gathering of Muslims.',
    category: 'event',
    location: 'Mecca and Mount Arafat',
    details: 'During this pilgrimage, the Prophet delivered his famous Farewell Sermon, addressing issues of justice, equality, and the completion of Islam.'
  },

  // Final Quranic Revelations - Medinan Period
  {
    id: 'surah-baqara-2',
    year: 622,
    hijri: '1-2 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Baqara (2)',
    description: 'The longest surah of the Quran, revealed in Medina. It covers legal rulings, stories of prophets, and guidance for the Muslim community.',
    category: 'revelation',
    quranicReference: 'Surah Al-Baqara 2 - "Alif, Lam, Mim. This is the Book..."'
  },
  {
    id: 'surah-anfal-8',
    year: 624,
    hijri: '2 AH',
    date: 'After Battle of Badr',
    title: 'Revelation of Surah Al-Anfal (8)',
    description: 'Surah about the spoils of war and the Battle of Badr.',
    category: 'revelation',
    quranicReference: 'Surah Al-Anfal 8 - "They ask you about the spoils of war..."'
  },
  {
    id: 'surah-imran-3',
    year: 625,
    hijri: '3 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Aal-i-Imran (3)',
    description: 'Surah about the family of Imran and the story of Mary and Jesus.',
    category: 'revelation',
    quranicReference: 'Surah Aal-i-Imran 3 - "Alif, Lam, Mim..."'
  },
  {
    id: 'surah-ahzab-33',
    year: 627,
    hijri: '5 AH',
    date: 'After Battle of Khandaq',
    title: 'Revelation of Surah Al-Ahzab (33)',
    description: 'Surah about the Confederates and the Battle of Khandaq.',
    category: 'revelation',
    quranicReference: 'Surah Al-Ahzab 33 - "O Prophet, fear Allah..."'
  },
  {
    id: 'surah-mumtahana-60',
    year: 628,
    hijri: '6 AH',
    date: 'Around Treaty of Hudaybiyyah',
    title: 'Revelation of Surah Al-Mumtahana (60)',
    description: 'Surah about the examination of believers.',
    category: 'revelation',
    quranicReference: 'Surah Al-Mumtahana 60 - "O you who believe, do not take My enemies..."'
  },
  {
    id: 'surah-nisa-4',
    year: 627,
    hijri: '5 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah An-Nisa (4)',
    description: 'Surah about women and family law.',
    category: 'revelation',
    quranicReference: 'Surah An-Nisa 4 - "O mankind, fear your Lord..."'
  },
  {
    id: 'surah-zalzala-99',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Az-Zalzala (99)',
    description: 'Surah about the earthquake and the Day of Judgment.',
    category: 'revelation',
    quranicReference: 'Surah Az-Zalzala 99 - "When the earth is shaken with its earthquake..."'
  },
  {
    id: 'surah-hadid-57',
    year: 628,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Hadid (57)',
    description: 'Surah about Iron and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Hadid 57 - "All that is in the heavens and the earth glorifies Allah..."'
  },
  {
    id: 'surah-rahman-55',
    year: 628,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Ar-Rahman (55)',
    description: 'Surah about the Most Merciful and the blessings of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Ar-Rahman 55 - "The Most Merciful taught the Quran..."'
  },
  {
    id: 'surah-insan-76',
    year: 628,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Insan (76)',
    description: 'Surah about Man and the description of the righteous.',
    category: 'revelation',
    quranicReference: 'Surah Al-Insan 76 - "Has there come upon man a period of time..."'
  },
  {
    id: 'surah-talaq-65',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah At-Talaq (65)',
    description: 'Surah about divorce and family law.',
    category: 'revelation',
    quranicReference: 'Surah At-Talaq 65 - "O Prophet, when you divorce women..."'
  },
  {
    id: 'surah-bayyina-98',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Bayyina (98)',
    description: 'Surah about the Clear Proof.',
    category: 'revelation',
    quranicReference: 'Surah Al-Bayyina 98 - "Those who disbelieved from the People of the Scripture..."'
  },
  {
    id: 'surah-hajj-22',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Hajj (22)',
    description: 'Surah about the Pilgrimage and the signs of Allah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Hajj 22 - "O mankind, fear your Lord..."'
  },
  {
    id: 'surah-munafiqun-63',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Munafiqun (63)',
    description: 'Surah about the Hypocrites.',
    category: 'revelation',
    quranicReference: 'Surah Al-Munafiqun 63 - "When the hypocrites come to you..."'
  },
  {
    id: 'surah-mujadila-58',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Mujadila (58)',
    description: 'Surah about the Disputer.',
    category: 'revelation',
    quranicReference: 'Surah Al-Mujadila 58 - "Allah has heard the statement of the woman..."'
  },
  {
    id: 'surah-hujurat-49',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Hujurat (49)',
    description: 'Surah about the Chambers and etiquette of believers.',
    category: 'revelation',
    quranicReference: 'Surah Al-Hujurat 49 - "O you who believe, do not raise your voices..."'
  },
  {
    id: 'surah-tahrim-66',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah At-Tahrim (66)',
    description: 'Surah about the Prohibition.',
    category: 'revelation',
    quranicReference: 'Surah At-Tahrim 66 - "O Prophet, why do you prohibit..."'
  },
  {
    id: 'surah-saff-61',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah As-Saff (61)',
    description: 'Surah about the Ranks.',
    category: 'revelation',
    quranicReference: 'Surah As-Saff 61 - "All that is in the heavens and the earth glorifies Allah..."'
  },
  {
    id: 'surah-juma-62',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah Al-Jumu\'a (62)',
    description: 'Surah about Friday and the gathering of believers.',
    category: 'revelation',
    quranicReference: 'Surah Al-Jumu\'a 62 - "Whatever is in the heavens and whatever is on the earth..."'
  },
  {
    id: 'surah-taghabun-64',
    year: 629,
    hijri: '7 AH',
    date: 'Medinan Period',
    title: 'Revelation of Surah At-Taghabun (64)',
    description: 'Surah about the Mutual Loss and Gain.',
    category: 'revelation',
    quranicReference: 'Surah At-Taghabun 64 - "Whatever is in the heavens and whatever is on the earth..."'
  },
  {
    id: 'surah-fath-48',
    year: 628,
    hijri: '6 AH',
    date: 'After Treaty of Hudaybiyyah',
    title: 'Revelation of Surah Al-Fath (48)',
    description: 'Surah about the Victory and the Treaty of Hudaybiyyah.',
    category: 'revelation',
    quranicReference: 'Surah Al-Fath 48 - "Indeed, We have given you a clear victory..."'
  },
  {
    id: 'surah-maidah-5',
    year: 632,
    hijri: '10 AH',
    date: 'Last Revelation Period',
    title: 'Revelation of Surah Al-Maidah (5)',
    description: 'Surah about the Table and the completion of the religion.',
    category: 'revelation',
    quranicReference: 'Surah Al-Maidah 5 - "O you who believe, fulfill your contracts..."'
  },
  {
    id: 'surah-tawba-9',
    year: 631,
    hijri: '9 AH',
    date: 'Late Medinan Period',
    title: 'Revelation of Surah At-Tawba (9)',
    description: 'Surah about Repentance and the final commands.',
    category: 'revelation',
    quranicReference: 'Surah At-Tawba 9 - "Disavowal from Allah and His Messenger..."'
  },
  {
    id: 'surah-nasr-110',
    year: 632,
    hijri: '10 AH',
    date: 'Last Revelation',
    title: 'Revelation of Surah An-Nasr (110)',
    description: 'The last surah revealed, about the Help and the victory of Islam.',
    category: 'revelation',
    quranicReference: 'Surah An-Nasr 110 - "When the victory of Allah has come and the Conquest..."',
    details: 'This surah was revealed shortly before the Prophet\'s death, marking the completion of the Quranic revelation.'
  },

  // Death
  {
    id: 'death-632',
    year: 632,
    hijri: '11 AH',
    date: '8 June (12 Rabi\' al-awwal), Age 62',
    title: 'Death of Prophet Muhammad (SAW)',
    description: 'The Prophet Muhammad passed away in Medina after a brief illness. He was buried in the Prophet\'s Mosque (Al-Masjid an-Nabawi).',
    category: 'death',
    location: 'Medina',
    details: 'The Prophet died about three months after his Farewell Pilgrimage. His death marked the end of the prophetic mission and the completion of the Islamic religion. He was 62 years old at the time of his death.'
  }
];

export const categories = [
  { id: 'prophet', label: 'Prophets & Messengers', color: 'bg-amber-100 text-amber-800' },
  { id: 'genealogy', label: 'Genealogy & Pre-Birth', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'birth', label: 'Birth & Early Life', color: 'bg-blue-100 text-blue-800' },
  { id: 'marriage', label: 'Marriages', color: 'bg-pink-100 text-pink-800' },
  { id: 'mother', label: 'Mothers & Wet Nurses', color: 'bg-rose-100 text-rose-800' },
  { id: 'revelation', label: 'Quranic Revelations', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'battle', label: 'Battles', color: 'bg-red-100 text-red-800' },
  { id: 'expedition', label: 'Expeditions', color: 'bg-orange-100 text-orange-800' },
  { id: 'caliphate', label: 'Caliphates & Dynasties', color: 'bg-cyan-100 text-cyan-800' },
  { id: 'event', label: 'Events', color: 'bg-purple-100 text-purple-800' },
  { id: 'death', label: 'Deaths', color: 'bg-gray-100 text-gray-800' }
];


// ===== AL-BIDAYAH WA-L-NIHAYAH EXPANSION =====
// Pre-Islamic Prophets Era (Creation - 570 CE)
const preIslamicProphets: TimelineEvent[] = [
  {
    id: 'adam-creation',
    year: -4000,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Creation of Adam (Alayhi Assalam)',
    description: 'Allah created Adam, the first human being and first prophet. Adam was created from clay and given the spirit of Allah.',
    category: 'prophet',
    location: 'Paradise',
    details: 'Adam is considered the father of all humanity and the first messenger of Allah. He was given knowledge of all things and taught the names of all creatures.'
  },
  {
    id: 'idris-prophet',
    year: -3500,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Idris (Alayhi Assalam)',
    description: 'Idris was a righteous prophet who was raised to an exalted place. He is mentioned in the Quran as one who was truthful and a prophet.',
    category: 'prophet',
    location: 'Ancient lands',
    details: 'Idris is identified with Enoch in Biblical tradition. He was known for his piety and righteousness.'
  },
  {
    id: 'noah-flood',
    year: -2500,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Noah (Alayhi Assalam) and the Great Flood',
    description: 'Noah preached to his people for 950 years, calling them to worship Allah alone. Only a few believed. Allah commanded Noah to build the Ark.',
    category: 'prophet',
    location: 'Ancient lands',
    details: 'Noah was one of the most important prophets. The flood destroyed all disbelievers except those who believed in Noah.'
  },
  {
    id: 'hud-prophet',
    year: -2000,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Hud (Alayhi Assalam) - Sent to the Ad',
    description: 'Hud was sent to the Ad tribe, a powerful people known for their great buildings and strength.',
    category: 'prophet',
    location: 'Arabia',
    details: 'The Ad people were arrogant and rejected Hud\'s message. They were destroyed by a fierce wind as punishment.'
  },
  {
    id: 'salih-prophet',
    year: -1800,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Salih (Alayhi Assalam) - Sent to the Thamud',
    description: 'Salih was sent to the Thamud tribe. He was a camel breeder and called his people to worship Allah alone.',
    category: 'prophet',
    location: 'Arabia',
    details: 'The Thamud people rejected Salih and hamstrung the miraculous she-camel. They were destroyed by a terrible blast.'
  },
  {
    id: 'abraham-kaaba',
    year: -1500,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Abraham (Alayhi Assalam) - Builder of the Kaaba',
    description: 'Abraham was one of the greatest prophets. He built the Kaaba with his son Ishmael as a house of worship for Allah.',
    category: 'prophet',
    location: 'Mecca',
    details: 'Abraham is known as the Friend of Allah (Khalil Allah). He built the Kaaba with Ishmael, which became the center of Islamic worship.'
  },
  {
    id: 'lot-prophet',
    year: -1400,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Lot (Alayhi Assalam) - Sent to Sodom and Gomorrah',
    description: 'Lot was sent to the people of Sodom and Gomorrah to call them away from their evil practices.',
    category: 'prophet',
    location: 'Sodom and Gomorrah',
    details: 'Lot warned his people against their immoral practices. Allah destroyed Sodom and Gomorrah with a terrible punishment.'
  },
  {
    id: 'ishmael-arabs',
    year: -1300,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Ishmael (Alayhi Assalam) - Father of the Arabs',
    description: 'Ishmael was the son of Abraham and Hagar. He was a righteous prophet and the father of the Arab people.',
    category: 'prophet',
    location: 'Arabia',
    details: 'Ishmael helped his father build the Kaaba and became the father of the Arab nation.'
  },
  {
    id: 'isaac-israel',
    year: -1200,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Isaac (Alayhi Assalam) - Father of Israel',
    description: 'Isaac was the son of Abraham and Sarah. He was a righteous prophet and the father of the Israelite people.',
    category: 'prophet',
    location: 'Canaan',
    details: 'Isaac was born as a miracle to Abraham and Sarah in their old age.'
  },
  {
    id: 'jacob-israel',
    year: -1100,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Jacob (Alayhi Assalam) - Israel',
    description: 'Jacob was the son of Isaac and grandson of Abraham. He was given the name Israel meaning Servant of Allah.',
    category: 'prophet',
    location: 'Canaan',
    details: 'Jacob had twelve sons who became the heads of the twelve tribes of Israel.'
  },
  {
    id: 'joseph-egypt',
    year: -1000,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Joseph (Alayhi Assalam) - Sent to Egypt',
    description: 'Joseph was the son of Jacob. He was sold into slavery but became a trusted advisor to the Pharaoh of Egypt.',
    category: 'prophet',
    location: 'Egypt',
    details: 'Joseph was known for his exceptional beauty and righteousness. He became the treasurer of Egypt and saved the people from famine.'
  },
  {
    id: 'job-patience',
    year: -900,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Job (Alayhi Assalam) - Model of Patience',
    description: 'Job was a righteous prophet known for his extraordinary patience in the face of severe trials and afflictions.',
    category: 'prophet',
    location: 'Edom',
    details: 'Job was tested with loss of wealth, health, and family. Despite his suffering, he never lost faith in Allah.'
  },
  {
    id: 'shuayb-midian',
    year: -800,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Shuayb (Alayhi Assalam) - Sent to Midian',
    description: 'Shuayb was a prophet sent to the people of Midian. He was a shepherd and called his people to worship Allah.',
    category: 'prophet',
    location: 'Midian',
    details: 'The people of Midian were known for their dishonesty in commerce. Shuayb warned them against cheating.'
  },
  {
    id: 'moses-pharaoh',
    year: -700,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Moses (Alayhi Assalam) - Challenged Pharaoh',
    description: 'Moses was one of the greatest prophets. He was sent to challenge the Pharaoh of Egypt and lead the Israelites to freedom.',
    category: 'prophet',
    location: 'Egypt',
    details: 'Moses performed great miracles including turning his staff into a serpent and parting the Red Sea.'
  },
  {
    id: 'aaron-moses',
    year: -700,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Aaron (Alayhi Assalam) - Brother of Moses',
    description: 'Aaron was the brother of Moses and served as his vizier (advisor). He was a righteous prophet and preacher.',
    category: 'prophet',
    location: 'Egypt',
    details: 'Aaron supported Moses in his mission against Pharaoh. He became the High Priest of the Israelites.'
  },
  {
    id: 'david-king',
    year: -600,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet David (Alayhi Assalam) - King of Israel',
    description: 'David was a righteous king and prophet of Israel. He was known for his strength, wisdom, and piety.',
    category: 'prophet',
    location: 'Israel',
    details: 'David defeated Goliath in single combat. He was given the Psalms (Zabur) by Allah.'
  },
  {
    id: 'solomon-jerusalem',
    year: -550,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Solomon (Alayhi Assalam) - King of Jerusalem',
    description: 'Solomon was the son of David and one of the greatest kings in history. He was given miraculous powers.',
    category: 'prophet',
    location: 'Jerusalem',
    details: 'Solomon built the First Temple in Jerusalem. He could command the wind and the jinn.'
  },
  {
    id: 'elijah-israel',
    year: -500,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Elijah (Alayhi Assalam) - Sent to Israel',
    description: 'Elijah was a prophet sent to the Children of Israel to call them back to the worship of Allah alone.',
    category: 'prophet',
    location: 'Israel',
    details: 'Elijah performed miracles and challenged the false prophets of Baal.'
  },
  {
    id: 'elisha-israel',
    year: -450,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Elisha (Alayhi Assalam) - Sent to Israel',
    description: 'Elisha was a prophet and the successor of Elijah. He continued the mission of calling people to worship Allah.',
    category: 'prophet',
    location: 'Israel',
    details: 'Elisha performed many miracles and was known for his compassion and righteousness.'
  },
  {
    id: 'jonah-fish',
    year: -400,
    hijri: 'Before time',
    date: 'Ancient Times',
    title: 'Prophet Jonah (Alayhi Assalam) - Swallowed by a Fish',
    description: 'Jonah was sent to the people of Nineveh. When they rejected him, he fled but was swallowed by a great fish.',
    category: 'prophet',
    location: 'Nineveh',
    details: 'Inside the fish, Jonah repented and called upon Allah. Allah saved him and cast him onto the shore.'
  },
  {
    id: 'jesus-messiah',
    year: -4,
    hijri: 'Before time',
    date: '1 CE',
    title: 'Prophet Jesus (Alayhi Assalam) - The Messiah',
    description: 'Jesus was born of the Virgin Mary and was a righteous prophet and messenger sent to the Children of Israel.',
    category: 'prophet',
    location: 'Bethlehem',
    details: 'Jesus performed miracles including healing the sick, raising the dead, and creating life from clay.'
  }
];

// Islamic Caliphates Era (632-1517 CE)
const islamicCaliphates: TimelineEvent[] = [
  {
    id: 'rashidun-caliphate-start',
    year: 632,
    hijri: '11 AH',
    date: '632 CE',
    title: 'Beginning of Rashidun Caliphate',
    description: 'After the death of Prophet Muhammad (SAW), Abu Bakr was elected as the first Caliph, beginning the era of the Rightly Guided Caliphs.',
    category: 'caliphate',
    location: 'Medina',
    details: 'The Rashidun Caliphate (632-661 CE) was led by four caliphs: Abu Bakr, Umar, Uthman, and Ali.'
  },
  {
    id: 'abu-bakr-caliph',
    year: 632,
    hijri: '11 AH',
    date: '632-634 CE',
    title: 'Caliphate of Abu Bakr',
    description: 'Abu Bakr was the first Caliph and a close companion of Prophet Muhammad. He led the Muslims for two years.',
    category: 'caliphate',
    location: 'Medina',
    details: 'Abu Bakr faced the challenge of false prophets and rebellions. He sent armies to conquer Syria and Iraq.'
  },
  {
    id: 'umar-caliph',
    year: 634,
    hijri: '13 AH',
    date: '634-644 CE',
    title: 'Caliphate of Umar ibn al-Khattab',
    description: 'Umar was the second Caliph and one of the greatest leaders in Islamic history. He expanded the Islamic empire.',
    category: 'caliphate',
    location: 'Medina',
    details: 'During Umar\'s reign, the Islamic empire expanded to include Syria, Iraq, Egypt, and Persia.'
  },
  {
    id: 'conquest-damascus',
    year: 636,
    hijri: '15 AH',
    date: '636 CE',
    title: 'Conquest of Damascus',
    description: 'The Muslim army under Khalid ibn al-Walid conquered Damascus, the capital of Syria.',
    category: 'battle',
    location: 'Damascus',
    details: 'This was a major victory that opened the way for the conquest of all of Syria.'
  },
  {
    id: 'battle-yarmouk',
    year: 636,
    hijri: '15 AH',
    date: '636 CE',
    title: 'Battle of Yarmouk',
    description: 'The Muslim army defeated the Byzantine forces in a decisive battle at Yarmouk, securing the conquest of Syria.',
    category: 'battle',
    location: 'Yarmouk',
    details: 'This was one of the most important battles in history. The Muslim forces defeated a much larger Byzantine army.'
  },
  {
    id: 'conquest-egypt',
    year: 641,
    hijri: '20 AH',
    date: '641 CE',
    title: 'Conquest of Egypt',
    description: 'The Muslim army conquered Egypt under the command of Amr ibn al-As.',
    category: 'battle',
    location: 'Egypt',
    details: 'The conquest of Egypt was completed after the fall of Alexandria. Egypt became an Islamic province.'
  },
  {
    id: 'uthman-caliph',
    year: 644,
    hijri: '23 AH',
    date: '644-656 CE',
    title: 'Caliphate of Uthman ibn Affan',
    description: 'Uthman was the third Caliph. He continued the expansion of the Islamic empire and standardized the Quran.',
    category: 'caliphate',
    location: 'Medina',
    details: 'Uthman is famous for standardizing the Quran into one official text to prevent variations.'
  },
  {
    id: 'ali-caliph',
    year: 656,
    hijri: '35 AH',
    date: '656-661 CE',
    title: 'Caliphate of Ali ibn Abi Talib',
    description: 'Ali was the fourth Caliph and cousin of Prophet Muhammad. His caliphate was marked by civil conflicts.',
    category: 'caliphate',
    location: 'Kufa',
    details: 'Ali faced opposition from Mu\'awiya and others. His reign saw the beginning of internal divisions.'
  },
  {
    id: 'umayyad-caliphate-start',
    year: 661,
    hijri: '41 AH',
    date: '661 CE',
    title: 'Beginning of Umayyad Caliphate',
    description: 'Mu\'awiya established the Umayyad Caliphate, transforming the caliphate from an elective to a hereditary position.',
    category: 'caliphate',
    location: 'Damascus',
    details: 'The Umayyad Caliphate (661-750 CE) was centered in Damascus. It saw further expansion to Spain and Central Asia.'
  },
  {
    id: 'muawiya-caliph',
    year: 661,
    hijri: '41 AH',
    date: '661-680 CE',
    title: 'Caliphate of Mu\'awiya I',
    description: 'Mu\'awiya was the first Umayyad Caliph. He established a strong centralized government and expanded the empire.',
    category: 'caliphate',
    location: 'Damascus',
    details: 'Mu\'awiya made Damascus the capital of the Islamic empire. He established a powerful navy.'
  },
  {
    id: 'conquest-north-africa',
    year: 670,
    hijri: '50 AH',
    date: '670 CE',
    title: 'Conquest of North Africa',
    description: 'The Muslim armies conquered North Africa, including present-day Tunisia, Algeria, and Morocco.',
    category: 'battle',
    location: 'North Africa',
    details: 'The conquest of North Africa was completed under the Umayyad Caliphate.'
  },
  {
    id: 'conquest-spain',
    year: 711,
    hijri: '92 AH',
    date: '711 CE',
    title: 'Conquest of Spain',
    description: 'Muslim forces crossed from North Africa and conquered most of the Iberian Peninsula.',
    category: 'battle',
    location: 'Spain',
    details: 'Under the command of Tariq ibn Ziyad, Muslim forces conquered Spain. Islamic rule lasted for nearly 800 years.'
  },
  {
    id: 'battle-tours',
    year: 732,
    hijri: '114 AH',
    date: '732 CE',
    title: 'Battle of Tours',
    description: 'Muslim forces were defeated by Frankish forces at the Battle of Tours, halting further Islamic expansion into Europe.',
    category: 'battle',
    location: 'Tours, France',
    details: 'This battle marked the limit of Islamic expansion in Europe. Spain remained the westernmost extent.'
  },
  {
    id: 'abbasid-caliphate-start',
    year: 750,
    hijri: '132 AH',
    date: '750 CE',
    title: 'Beginning of Abbasid Caliphate',
    description: 'The Abbasid Revolution overthrew the Umayyad Caliphate, establishing the Abbasid Caliphate.',
    category: 'caliphate',
    location: 'Khorasan',
    details: 'The Abbasid Caliphate (750-1258 CE) saw a golden age of Islamic civilization.'
  },
  {
    id: 'al-mansur-caliph',
    year: 754,
    hijri: '136 AH',
    date: '754-775 CE',
    title: 'Caliphate of Al-Mansur',
    description: 'Al-Mansur was the second Abbasid Caliph. He established the foundations of the Abbasid state and founded Baghdad.',
    category: 'caliphate',
    location: 'Baghdad',
    details: 'Al-Mansur founded Baghdad in 762 CE as the new capital of the Islamic empire.'
  },
  {
    id: 'founding-baghdad',
    year: 762,
    hijri: '145 AH',
    date: '762 CE',
    title: 'Founding of Baghdad',
    description: 'Al-Mansur founded the city of Baghdad as the new capital of the Islamic empire.',
    category: 'event',
    location: 'Baghdad',
    details: 'Baghdad was built as a circular city with the Caliph\'s palace at the center. It became one of the greatest cities in the world.'
  },
  {
    id: 'harun-rashid-caliph',
    year: 786,
    hijri: '170 AH',
    date: '786-809 CE',
    title: 'Caliphate of Harun al-Rashid',
    description: 'Harun al-Rashid was the fifth Abbasid Caliph and one of the most famous rulers in Islamic history.',
    category: 'caliphate',
    location: 'Baghdad',
    details: 'Harun al-Rashid is famous for his patronage of learning and culture. He established the House of Wisdom.'
  },
  {
    id: 'house-of-wisdom',
    year: 813,
    hijri: '198 AH',
    date: '813 CE',
    title: 'Establishment of the House of Wisdom',
    description: 'The House of Wisdom was established in Baghdad as a center of learning and translation.',
    category: 'event',
    location: 'Baghdad',
    details: 'The House of Wisdom became one of the most important centers of learning in the medieval world.'
  },
  {
    id: 'al-mamun-caliph',
    year: 813,
    hijri: '198 AH',
    date: '813-833 CE',
    title: 'Caliphate of Al-Ma\'mun',
    description: 'Al-Ma\'mun was the seventh Abbasid Caliph and a great patron of learning and science.',
    category: 'caliphate',
    location: 'Baghdad',
    details: 'Al-Ma\'mun continued the patronage of the House of Wisdom. His reign saw major advances in mathematics and astronomy.'
  },
  {
    id: 'fatimid-caliphate-start',
    year: 909,
    hijri: '297 AH',
    date: '909 CE',
    title: 'Beginning of Fatimid Caliphate',
    description: 'The Fatimid Caliphate was established in North Africa, parallel to the Abbasid Caliphate.',
    category: 'caliphate',
    location: 'North Africa',
    details: 'The Fatimid Caliphate (909-1171 CE) was a major Islamic state that controlled North Africa, Egypt, and the Levant.'
  },
  {
    id: 'founding-cairo',
    year: 969,
    hijri: '358 AH',
    date: '969 CE',
    title: 'Founding of Cairo',
    description: 'The Fatimid Caliph Al-Mu\'izz founded Cairo as the new capital of the Fatimid Caliphate.',
    category: 'event',
    location: 'Cairo',
    details: 'Cairo became one of the greatest cities in the Islamic world. It was a center of learning, culture, and commerce.'
  },
  {
    id: 'al-azhar-mosque',
    year: 970,
    hijri: '359 AH',
    date: '970 CE',
    title: 'Founding of Al-Azhar Mosque and University',
    description: 'The Al-Azhar Mosque was founded in Cairo, which later became one of the most important Islamic universities.',
    category: 'event',
    location: 'Cairo',
    details: 'Al-Azhar became a center of Islamic learning and remains one of the most prestigious Islamic universities today.'
  },
  {
    id: 'seljuk-empire-start',
    year: 1037,
    hijri: '429 AH',
    date: '1037 CE',
    title: 'Rise of the Seljuk Empire',
    description: 'The Seljuk Turks established a powerful empire in Central Asia and Anatolia.',
    category: 'event',
    location: 'Central Asia',
    details: 'The Seljuk Empire became a major Islamic power and played an important role in Islamic history.'
  },
  {
    id: 'crusades-start',
    year: 1096,
    hijri: '489 AH',
    date: '1096 CE',
    title: 'Beginning of the Crusades',
    description: 'European Christian forces launched the First Crusade to recapture Jerusalem from Muslim control.',
    category: 'battle',
    location: 'Levant',
    details: 'The Crusades were a series of military campaigns lasting nearly 200 years.'
  },
  {
    id: 'saladin-rise',
    year: 1169,
    hijri: '564 AH',
    date: '1169 CE',
    title: 'Rise of Saladin',
    description: 'Saladin (Salah ad-Din) became the vizier of Egypt and began his rise to power.',
    category: 'event',
    location: 'Egypt',
    details: 'Saladin eventually unified the Muslim states and led the Muslims against the Crusaders.'
  },
  {
    id: 'battle-hattin',
    year: 1187,
    hijri: '583 AH',
    date: '1187 CE',
    title: 'Battle of Hattin',
    description: 'Saladin defeated the Crusader forces at the Battle of Hattin, a decisive victory that led to the reconquest of Jerusalem.',
    category: 'battle',
    location: 'Hattin',
    details: 'This was one of the most important battles in Islamic history. Saladin\'s victory led to the liberation of Jerusalem.'
  },
  {
    id: 'reconquest-jerusalem',
    year: 1187,
    hijri: '583 AH',
    date: '1187 CE',
    title: 'Reconquest of Jerusalem',
    description: 'Saladin reconquered Jerusalem from the Crusaders after nearly 90 years of Crusader rule.',
    category: 'event',
    location: 'Jerusalem',
    details: 'Saladin\'s reconquest of Jerusalem was a major victory for the Islamic world. He treated the Christian population with mercy.'
  },
  {
    id: 'mamluk-sultanate-start',
    year: 1250,
    hijri: '648 AH',
    date: '1250 CE',
    title: 'Beginning of Mamluk Sultanate',
    description: 'The Mamluk Sultanate was established in Egypt, replacing the Ayyubid dynasty.',
    category: 'event',
    location: 'Egypt',
    details: 'The Mamluk Sultanate (1250-1517 CE) was a powerful Islamic state that controlled Egypt, Syria, and the Hijaz.'
  },
  {
    id: 'battle-ain-jalut',
    year: 1260,
    hijri: '658 AH',
    date: '1260 CE',
    title: 'Battle of Ain Jalut',
    description: 'The Mamluk forces defeated the Mongols at the Battle of Ain Jalut, halting the Mongol invasion of the Islamic world.',
    category: 'battle',
    location: 'Ain Jalut',
    details: 'This was one of the most important battles in Islamic history. The Mamluks\' victory stopped the Mongol advance.'
  }
];

// Ottoman Empire Era (1299-1922 CE)
const ottomanEmpire: TimelineEvent[] = [
  {
    id: 'ottoman-empire-start',
    year: 1299,
    hijri: '699 AH',
    date: '1299 CE',
    title: 'Founding of the Ottoman Empire',
    description: 'Osman I founded the Ottoman Empire in Anatolia, establishing a small kingdom that would become a major world power.',
    category: 'event',
    location: 'Anatolia',
    details: 'The Ottoman Empire (1299-1922 CE) was founded by Osman I. It began as a small kingdom and gradually expanded.'
  },
  {
    id: 'osman-i-reign',
    year: 1299,
    hijri: '699 AH',
    date: '1299-1326 CE',
    title: 'Reign of Osman I',
    description: 'Osman I ruled the early Ottoman state and laid the foundations for Ottoman expansion.',
    category: 'event',
    location: 'Anatolia',
    details: 'Osman I established the Ottoman dynasty and began the conquest of Anatolia.'
  },
  {
    id: 'conquest-bursa',
    year: 1326,
    hijri: '726 AH',
    date: '1326 CE',
    title: 'Conquest of Bursa',
    description: 'The Ottomans conquered Bursa, which became the capital of the Ottoman Empire.',
    category: 'battle',
    location: 'Bursa',
    details: 'Bursa was a major Byzantine city. Its conquest was a significant victory for the Ottomans.'
  },
  {
    id: 'mehmed-ii-reign',
    year: 1451,
    hijri: '856 AH',
    date: '1451-1481 CE',
    title: 'Reign of Mehmed II (The Conqueror)',
    description: 'Mehmed II was one of the greatest Ottoman sultans. He conquered Constantinople and established Ottoman dominance.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'Mehmed II is famous for conquering Constantinople in 1453, ending the Byzantine Empire.'
  },
  {
    id: 'conquest-constantinople',
    year: 1453,
    hijri: '857 AH',
    date: '1453 CE',
    title: 'Conquest of Constantinople',
    description: 'Mehmed II conquered Constantinople, the capital of the Byzantine Empire, ending over 1000 years of Byzantine rule.',
    category: 'battle',
    location: 'Constantinople',
    details: 'The conquest of Constantinople was one of the most significant events in world history.'
  },
  {
    id: 'suleiman-magnificent-reign',
    year: 1520,
    hijri: '926 AH',
    date: '1520-1566 CE',
    title: 'Reign of Suleiman the Magnificent',
    description: 'Suleiman the Magnificent was one of the greatest Ottoman sultans. His reign saw the peak of Ottoman power.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'Suleiman expanded Ottoman territory to its greatest extent. His reign is considered the golden age of the Ottoman Empire.'
  },
  {
    id: 'ottoman-golden-age',
    year: 1520,
    hijri: '926 AH',
    date: '1520-1566 CE',
    title: 'Golden Age of the Ottoman Empire',
    description: 'The reign of Suleiman the Magnificent marked the peak of Ottoman power and cultural achievement.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'During this period, the Ottoman Empire was at its greatest territorial extent.'
  },
  {
    id: 'ottoman-decline-start',
    year: 1566,
    hijri: '974 AH',
    date: '1566 CE',
    title: 'Beginning of Ottoman Decline',
    description: 'After the death of Suleiman the Magnificent, the Ottoman Empire began a period of gradual decline.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Ottoman Empire faced military defeats, economic problems, and internal instability.'
  },
  {
    id: 'battle-lepanto',
    year: 1571,
    hijri: '979 AH',
    date: '1571 CE',
    title: 'Battle of Lepanto',
    description: 'The Ottoman navy was defeated by the Holy League at the Battle of Lepanto, a major naval battle.',
    category: 'battle',
    location: 'Lepanto',
    details: 'Although the Ottomans quickly rebuilt their navy, this battle marked a symbolic end to Ottoman naval supremacy.'
  },
  {
    id: 'russo-ottoman-wars',
    year: 1768,
    hijri: '1182 AH',
    date: '1768-1774 CE',
    title: 'First Russo-Ottoman War',
    description: 'The Ottoman Empire fought a series of wars with Russia, resulting in territorial losses.',
    category: 'battle',
    location: 'Black Sea Region',
    details: 'The Russo-Ottoman Wars resulted in significant territorial losses for the Ottoman Empire.'
  },
  {
    id: 'treaty-kutchuk-kainardji',
    year: 1774,
    hijri: '1188 AH',
    date: '1774 CE',
    title: 'Treaty of Kutchuk Kainardji',
    description: 'The Ottoman Empire signed a peace treaty with Russia, ceding significant territory.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'This treaty marked a major turning point in Ottoman history. It resulted in the loss of Crimea and other territories.'
  },
  {
    id: 'tanzimat-reforms',
    year: 1839,
    hijri: '1255 AH',
    date: '1839 CE',
    title: 'Tanzimat Reforms',
    description: 'The Ottoman Empire initiated a series of reforms aimed at modernizing the state and military.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Tanzimat reforms were an attempt to modernize the Ottoman Empire and prevent further decline.'
  },
  {
    id: 'crimean-war',
    year: 1853,
    hijri: '1269 AH',
    date: '1853-1856 CE',
    title: 'Crimean War',
    description: 'The Ottoman Empire fought against Russia in the Crimean War, with support from Britain and France.',
    category: 'battle',
    location: 'Crimea',
    details: 'Although the Ottomans were supported by Western powers, the war highlighted Ottoman military weakness.'
  },
  {
    id: 'young-turk-revolution',
    year: 1908,
    hijri: '1326 AH',
    date: '1908 CE',
    title: 'Young Turk Revolution',
    description: 'The Young Turk movement led a revolution that restored the Ottoman constitution and limited the Sultan\'s power.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Young Turk Revolution was an attempt to modernize and reform the Ottoman Empire.'
  },
  {
    id: 'balkan-wars',
    year: 1912,
    hijri: '1330 AH',
    date: '1912-1913 CE',
    title: 'Balkan Wars',
    description: 'The Ottoman Empire lost most of its remaining European territories in the Balkan Wars.',
    category: 'battle',
    location: 'Balkans',
    details: 'The Balkan Wars resulted in the loss of Macedonia, Albania, and other territories.'
  },
  {
    id: 'world-war-i',
    year: 1914,
    hijri: '1332 AH',
    date: '1914-1918 CE',
    title: 'Ottoman Empire in World War I',
    description: 'The Ottoman Empire joined World War I on the side of the Central Powers.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Ottoman Empire\'s participation in World War I was disastrous. It resulted in military defeats and territorial losses.'
  },
  {
    id: 'armenian-genocide',
    year: 1915,
    hijri: '1333 AH',
    date: '1915 CE',
    title: 'Armenian Genocide',
    description: 'The Ottoman government carried out the genocide of the Armenian population.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Armenian Genocide resulted in the deaths of hundreds of thousands of Armenians.'
  },
  {
    id: 'treaty-sevres',
    year: 1920,
    hijri: '1338 AH',
    date: '1920 CE',
    title: 'Treaty of Sevres',
    description: 'The Ottoman Empire signed the Treaty of Sevres, which dismembered the empire and reduced it to a small territory.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Treaty of Sevres was one of the harshest peace treaties in history.'
  },
  {
    id: 'turkish-war-independence',
    year: 1919,
    hijri: '1337 AH',
    date: '1919-1923 CE',
    title: 'Turkish War of Independence',
    description: 'Turkish forces led by Mustafa Kemal fought against occupying forces and the Ottoman government.',
    category: 'battle',
    location: 'Anatolia',
    details: 'The Turkish War of Independence resulted in the establishment of the Turkish Republic.'
  },
  {
    id: 'ottoman-empire-end',
    year: 1922,
    hijri: '1340 AH',
    date: '1922 CE',
    title: 'Fall of the Ottoman Empire',
    description: 'The Ottoman Empire officially ended with the abolition of the sultanate and the establishment of the Turkish Republic.',
    category: 'event',
    location: 'Ottoman Empire',
    details: 'The Ottoman Empire, which had lasted for over 600 years, came to an end in 1922. The Turkish Republic was established.'
  }
];

// Combine all timeline data
export const expandedTimelineData = [
  ...timelineData,
  ...preIslamicProphets,
  ...islamicCaliphates,
  ...ottomanEmpire
];
