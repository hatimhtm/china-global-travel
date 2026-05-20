/**
 * Build a portrait-cropped Unsplash URL from any of our hero base URLs.
 * Mobile phones are tall portrait surfaces; serving a landscape source forces
 * object-cover to throw away ~70% of the photo. Portrait variants (around 9:16
 * to 9:19 ratio) preserve the subject on a phone screen.
 */
export function unsplashPortrait(url: string, w = 900, h = 1600): string {
  const base = url.split('?')[0];
  return `${base}?auto=format&fit=crop&crop=center&w=${w}&h=${h}&q=72`;
}

/**
 * Build a square-ish Unsplash URL — for card grids on phones where 4:5 or 1:1
 * reads better than landscape.
 */
export function unsplashSquare(url: string, w = 900, h = 1100): string {
  const base = url.split('?')[0];
  return `${base}?auto=format&fit=crop&crop=center&w=${w}&h=${h}&q=72`;
}

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
  // Mobile sources (≤768px) — small SD clips for cellular networks
  mobileSources: [
    { src: 'https://videos.pexels.com/video-files/1851190/1851190-sd_640_360_25fps.mp4', type: 'video/mp4' },
  ],
  // Desktop sources (>768px) — 1080p first, 1440p upgrade
  sources: [
    { src: 'https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4', type: 'video/mp4' },
    { src: 'https://videos.pexels.com/video-files/2491284/2491284-uhd_2732_1440_24fps.mp4', type: 'video/mp4' },
  ],
};

/**
 * Per-destination drone hero videos. If a slug isn't listed, the destination page
 * falls back to its static photo. Sources point at confirmed-reachable Pexels CDN URLs.
 */
export const heroVideoBySlug: Record<string, { poster: string; mobileSources?: { src: string; type?: string }[]; sources: { src: string; type?: string }[] }> = {
  lushan: {
    poster: 'https://images.unsplash.com/photo-1768141793124-6d53679bce28?auto=format&fit=crop&w=2400&q=75',
    mobileSources: [
      { src: 'https://videos.pexels.com/video-files/1093662/1093662-sd_640_360_30fps.mp4', type: 'video/mp4' },
    ],
    sources: [
      { src: 'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4', type: 'video/mp4' },
    ],
  },
  sanqingshan: {
    poster: 'https://images.unsplash.com/photo-1568454158153-6bf6cfda9070?auto=format&fit=crop&w=2400&q=75',
    mobileSources: [
      { src: 'https://videos.pexels.com/video-files/1448735/1448735-sd_640_360_24fps.mp4', type: 'video/mp4' },
    ],
    sources: [
      { src: 'https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4', type: 'video/mp4' },
    ],
  },
};

export const photos = {
  // Destinations — every URL curl-verified 200 + visually confirmed on-subject (Asian/Chinese, no Western stock)
  wuyuan: 'https://images.unsplash.com/photo-1773649967967-bfd301b989db?auto=format&fit=crop&w=2400&q=75',          // rural village with traditional tiled roofs and trees
  lushan: 'https://images.unsplash.com/photo-1768141793124-6d53679bce28?auto=format&fit=crop&w=2400&q=75',          // temples on lush green mountain above clouds
  jingdezhen: 'https://images.unsplash.com/photo-1723779235394-2e406c604269?auto=format&fit=crop&w=2400&q=75',      // blue-and-white Chinese porcelain vase
  longhu: 'https://images.unsplash.com/photo-1568454158284-8b858a0c914e?auto=format&fit=crop&w=2400&q=75',          // dark silhouetted peaks with layered clouds
  sanqingshan: 'https://images.unsplash.com/photo-1568454158153-6bf6cfda9070?auto=format&fit=crop&w=2400&q=75',     // expansive mountain ridge in thick fog (was sneakers — fixed)
  wugong: 'https://images.unsplash.com/photo-1632977186603-90fbe59a1a86?auto=format&fit=crop&w=2400&q=75',          // mountain range with atmospheric mist
  poyang: 'https://images.unsplash.com/photo-1591116446368-2078ad1c0fea?auto=format&fit=crop&w=2400&q=75',          // B&W peaks under cloudy sky (water/wetland mood)
  tengwang: 'https://images.unsplash.com/photo-1770838128195-bc4c1b5fd467?auto=format&fit=crop&w=2400&q=75',        // traditional temple in mountain landscape

  // Journey hero images
  essential: 'https://images.unsplash.com/photo-1690177075988-7d03698728d6?auto=format&fit=crop&w=2400&q=75',        // Chinese-village buildings on a green hillside
  inDepth: 'https://images.unsplash.com/photo-1777177966980-ab507fc291ad?auto=format&fit=crop&w=2400&q=75',          // traditional temple nestled among trees
  heritage: 'https://images.unsplash.com/photo-1563417076952-54936e3bb25c?auto=format&fit=crop&w=2400&q=75',         // rocky peak enveloped by fog — pilgrimage feel

  // Experience strips
  craft: 'https://images.unsplash.com/photo-1723779234748-76108418fea1?auto=format&fit=crop&w=1600&q=70',            // fish-painted Chinese porcelain (was 404 — fixed)
  pilgrimage: 'https://images.unsplash.com/photo-1770838128195-bc4c1b5fd467?auto=format&fit=crop&w=1600&q=70',       // temple in green mountain landscape
  tea: 'https://images.unsplash.com/photo-1689067468083-2e5f44e43f40?auto=format&fit=crop&w=1600&q=70',              // three bowls of tea on wooden table (was iced tea — fixed)
  landscape: 'https://images.unsplash.com/photo-1563417077095-39ec4a411d92?auto=format&fit=crop&w=1600&q=70',        // granite formation emerging from cloud cover

  // Atelier — curated for the studio's still-life mood
  atelierHero: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=2400&q=70',      // refined ikebana / floral still life
  atelierStudio: 'https://images.unsplash.com/photo-1538723364222-ea30b1683033?auto=format&fit=crop&w=1600&q=70',    // ceremonial pour — quiet practice (was 404 — fixed)

  // Journal
  journalClay: 'https://images.unsplash.com/photo-1723779235394-2e406c604269?auto=format&fit=crop&w=2000&q=70',      // blue-and-white porcelain (was 404 — fixed)
  journalLushan: 'https://images.unsplash.com/photo-1768141793124-6d53679bce28?auto=format&fit=crop&w=2000&q=70',    // mountain temple above clouds
  journalRapeseed: 'https://images.unsplash.com/photo-1778350514106-871089fd2d15?auto=format&fit=crop&w=2000&q=70',  // vast yellow rapeseed field under blue sky

  // Bridge / cultural images
  bridge: 'https://images.unsplash.com/photo-1627491362358-6d437e65a3bc?auto=format&fit=crop&w=2400&q=70',           // ceremonial bowls — craft bridge
  inquire: 'https://images.unsplash.com/photo-1632977186603-90fbe59a1a86?auto=format&fit=crop&w=2400&q=70',          // mist mountain landscape
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
