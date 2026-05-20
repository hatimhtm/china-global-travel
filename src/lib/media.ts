/**
 * Curated media manifest for Cloud Pavilion.
 * Mixes Pexels videos (drone + ground) and Unsplash photos.
 * All URLs are direct-download / hotlinkable per their license terms (Pexels CC0, Unsplash free).
 * Replace with locally-hosted assets in production.
 *
 * Video sources are ordered smallest → largest so browsers pick the first that satisfies
 * the network; we list 1080p first as a sensible baseline.
 */

export const heroVideo = {
  poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=75',
  sources: [
    // Drone — aerial mist mountains (Pexels CC0). 1080p first for fast-start; 1440p as upgrade.
    { src: 'https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4', type: 'video/mp4' },
    { src: 'https://videos.pexels.com/video-files/2491284/2491284-uhd_2732_1440_24fps.mp4', type: 'video/mp4' },
  ],
};

/**
 * Per-destination drone hero videos. If a slug isn't listed, the destination page
 * falls back to its static photo. Sources point at confirmed-reachable Pexels CDN URLs.
 */
export const heroVideoBySlug: Record<string, { poster: string; sources: { src: string; type?: string }[] }> = {
  lushan: {
    poster: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=2400&q=75',
    sources: [
      { src: 'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4', type: 'video/mp4' },
    ],
  },
  sanqingshan: {
    poster: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=2400&q=75',
    sources: [
      { src: 'https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4', type: 'video/mp4' },
    ],
  },
};

export const photos = {
  // Destinations — chosen for mist, scale, and a contemplative palette
  wuyuan: 'https://images.unsplash.com/photo-1521150932951-303a95503ed3?auto=format&fit=crop&w=2400&q=75',
  lushan: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=2400&q=75',
  jingdezhen: 'https://images.unsplash.com/photo-1565193298434-a9c8c8c10ffd?auto=format&fit=crop&w=2400&q=75',
  longhu: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=75',
  sanqingshan: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=2400&q=75',
  wugong: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=75',
  poyang: 'https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?auto=format&fit=crop&w=2400&q=75',
  tengwang: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=2400&q=75',

  // Journey hero images
  essential: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2400&q=75',
  inDepth: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?auto=format&fit=crop&w=2400&q=75',
  heritage: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=2400&q=75',

  // Experience strips
  craft: 'https://images.unsplash.com/photo-1565193298434-a9c8c8c10ffd?auto=format&fit=crop&w=1600&q=70',
  pilgrimage: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?auto=format&fit=crop&w=1600&q=70',
  tea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1600&q=70',
  landscape: 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=1600&q=70',

  // Atelier
  atelierHero: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=2400&q=70',
  atelierStudio: 'https://images.unsplash.com/photo-1452194130670-c64b00d6b8a4?auto=format&fit=crop&w=1600&q=70',

  // Journal
  journalClay: 'https://images.unsplash.com/photo-1565193298434-a9c8c8c10ffd?auto=format&fit=crop&w=2000&q=70',
  journalLushan: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=2000&q=70',
  journalRapeseed: 'https://images.unsplash.com/photo-1521150932951-303a95503ed3?auto=format&fit=crop&w=2000&q=70',

  // Bridge / cultural images
  bridge: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=2400&q=70',
  inquire: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?auto=format&fit=crop&w=2400&q=70',
};

// Mapping from slugs to photos
export const journeyImageBySlug: Record<string, string> = {
  'essential-jiangxi': photos.essential,
  'in-depth': photos.inDepth,
  'heritage-and-mist': photos.heritage,
};

export const destinationImageBySlug: Record<string, string> = {
  wuyuan: photos.wuyuan,
  lushan: photos.lushan,
  jingdezhen: photos.jingdezhen,
  'longhu-mountain': photos.longhu,
  sanqingshan: photos.sanqingshan,
};

export const journalImageBySlug: Record<string, string> = {
  'the-weight-of-clay': photos.journalClay,
  'what-the-mountain-knows': photos.journalLushan,
  'the-first-week-of-gold': photos.journalRapeseed,
};

export const experienceImageByKey: Record<number, string> = {
  0: photos.craft,
  1: photos.pilgrimage,
  2: photos.tea,
  3: photos.landscape,
};
