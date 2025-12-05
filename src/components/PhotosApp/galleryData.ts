export interface Photo {
  path: string;
  name: string;
  album: string;
  isFavorite: boolean;
}

// Achievement screenshots from public/photos/ directory
const achievementPhotos = [
  "Screenshot 2025-12-05 224559.png",
  "Screenshot 2025-12-05 224626.png",
  "Screenshot 2025-12-05 224653.png",
  "Screenshot 2025-12-05 224704.png",
  "Screenshot 2025-12-05 224711.png",
  "Screenshot 2025-12-05 224721.png",
  "Screenshot 2025-12-05 224730.png",
  "Screenshot 2025-12-05 224741.png",
  "Screenshot 2025-12-05 224750.png",
  "Screenshot 2025-12-05 224801.png",
  "Screenshot 2025-12-05 224811.png",
  "Screenshot 2025-12-05 224821.png",
  "Screenshot 2025-12-05 224836.png",
  "Screenshot 2025-12-05 224844.png",
  "Screenshot 2025-12-05 224853.png",
  "Screenshot 2025-12-05 224958.png",
  "Screenshot 2025-12-05 225007.png",
  "Screenshot 2025-12-05 225023.png",
  "Screenshot 2025-12-05 225105.png",
  "Screenshot 2025-12-05 225120.png",
  "Screenshot 2025-12-05 225134.png",
  "Screenshot 2025-12-05 225147.png",
  "Screenshot 2025-12-05 225240.png",
  "Screenshot 2025-12-05 225253.png",
  "Screenshot 2025-12-05 225315.png",
  "Screenshot 2025-12-05 225416.png",
  "Screenshot 2025-12-05 225424.png"
];

export const galleryData: Photo[] = achievementPhotos.map((filename) => ({
  path: `/photos/${filename}`,
  name: filename,
  album: "All Achievements",
  isFavorite: false
}));

export const albums = ["All Achievements", "Favorites"];
