import React from "react";
import { Photo } from "./galleryData";

interface GalleryGridProps {
  photos: Photo[];
  isGridView: boolean;
  onPhotoClick: (photo: Photo) => void;
  onToggleFavorite: (photo: Photo) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  photos,
  isGridView,
  onPhotoClick,
  onToggleFavorite
}) => {
  return (
    <div
      className={
        isGridView
          ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          : "space-y-4"
      }
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
          onClick={() => onPhotoClick(photo)}
        >
          <img
            src={photo.path}
            alt={photo.name}
            className={
              isGridView ? "w-full h-40 object-cover" : "w-full h-20 object-cover"
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
          <button
            className="absolute bottom-2 right-2 text-white hover:text-red-500 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(photo);
            }}
          >
            <svg
              className="w-6 h-6"
              fill={photo.isFavorite ? "red" : "none"}
              stroke={photo.isFavorite ? "red" : "white"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
          {!isGridView && (
            <div className="absolute inset-0 flex items-center p-2 bg-black/50 text-white">
              <span className="text-sm">{photo.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
