export interface Photo {
  path: string;
  name: string;
  album: string;
  isFavorite: boolean;
}

export const galleryData: Photo[] = [
  // Replace these with your actual image paths from public/gallery/
  // Example: { path: '/gallery/your-image.jpg', name: 'your-image.jpg', album: 'All Photos', isFavorite: false },
  {
    path: "/gallery/sample1.jpg",
    name: "sample1.jpg",
    album: "All Photos",
    isFavorite: false
  },
  {
    path: "/gallery/sample2.jpg",
    name: "sample2.jpg",
    album: "All Photos",
    isFavorite: false
  },
  {
    path: "/gallery/sample3.jpg",
    name: "sample3.jpg",
    album: "Favorites",
    isFavorite: true
  }
  // Add more photos as needed
];

export const albums = ["All Photos", "Recents", "Favorites", "Shared"];
