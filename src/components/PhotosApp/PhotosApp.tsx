import React, { useState, useEffect } from "react";
import { useStore } from "~/stores";
import { Photo, galleryData, albums } from "./galleryData";
import PhotoModal from "./PhotoModal";
import GalleryGrid from "./GalleryGrid";

interface PhotosAppProps {
  width?: number;
}

const PhotosApp: React.FC<PhotosAppProps> = ({ width }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isGridView, setIsGridView] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("Library");
  const [currentAlbum, setCurrentAlbum] = useState("All Achievements");

  useEffect(() => {
    // Load photos from galleryData
    // In a real app, you might load from an API or file system
    setPhotos(galleryData);

    // Load favorites from localStorage
    const favoritePhotos = JSON.parse(localStorage.getItem("favoritePhotos") || "[]");
    setPhotos((prev) =>
      prev.map((p) => ({
        ...p,
        isFavorite: favoritePhotos.includes(p.name)
      }))
    );
  }, []);

  const toggleFavorite = (photo: Photo) => {
    const updatedPhotos = photos.map((p) =>
      p.name === photo.name ? { ...p, isFavorite: !p.isFavorite } : p
    );
    setPhotos(updatedPhotos);

    const favoriteNames = updatedPhotos.filter((p) => p.isFavorite).map((p) => p.name);
    localStorage.setItem("favoritePhotos", JSON.stringify(favoriteNames));
  };

  const selectPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePreview = () => {
    setSelectedPhoto(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeView = (view: string) => {
    setCurrentView(view);
  };

  const toggleGridList = () => {
    setIsGridView(!isGridView);
  };

  const changeAlbum = (album: string) => {
    setCurrentAlbum(album);
  };

  const getFilteredPhotos = () => {
    if (currentView === "For You") {
      return photos.filter((photo) => photo.isFavorite);
    }
    return currentAlbum === "All Achievements"
      ? photos
      : currentAlbum === "Favorites"
        ? photos.filter((photo) => photo.isFavorite)
        : photos.filter((photo) => photo.album === currentAlbum);
  };

  const filteredPhotos = getFilteredPhotos();

  return (
    <div className="bg-white dark:bg-gray-900 h-full flex flex-col overflow-hidden font-sans">
      {/* Photos Header */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex-grow flex justify-center space-x-4">
          <button
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ${
              currentView === "Library" ? "font-semibold" : ""
            }`}
            onClick={() => changeView("Library")}
          >
            <svg
              className="w-5 h-5 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Library
          </button>
          <button
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ${
              currentView === "For You" ? "font-semibold" : ""
            }`}
            onClick={() => changeView("For You")}
          >
            <svg
              className="w-5 h-5 inline-block mr-1"
              fill="none"
              stroke="currentColor"
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
            For You
          </button>
          <button
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ${
              currentView === "Memories" ? "font-semibold" : ""
            }`}
            onClick={() => changeView("Memories")}
          >
            <svg
              className="w-5 h-5 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Memories
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
        </button>
        <button
          onClick={toggleGridList}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ml-2"
        >
          {isGridView ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Photos Body */}
      <div className="flex-grow flex overflow-hidden">
        {sidebarOpen && (
          <div className="w-48 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Albums
            </h3>
            <ul className="space-y-2">
              {albums.map((album) => (
                <li
                  key={album}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer p-2 rounded transition-colors duration-200 ${
                    currentAlbum === album
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                  onClick={() => changeAlbum(album)}
                >
                  {album}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex-grow overflow-auto p-6">
          {currentView === "Library" && (
            <>
              {selectedPhoto && (
                <PhotoModal photo={selectedPhoto} onClose={closePreview} />
              )}
              <GalleryGrid
                photos={filteredPhotos}
                isGridView={isGridView}
                onPhotoClick={selectPhoto}
                onToggleFavorite={toggleFavorite}
              />
            </>
          )}
          {currentView === "For You" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300 px-6 pt-6">
                For You
              </h2>
              {filteredPhotos.length > 0 ? (
                <GalleryGrid
                  photos={filteredPhotos}
                  isGridView={isGridView}
                  onPhotoClick={selectPhoto}
                  onToggleFavorite={toggleFavorite}
                />
              ) : (
                <div className="text-center text-gray-600 dark:text-gray-300 py-12">
                  <p>Mark photos as favorites to see them here!</p>
                </div>
              )}
            </div>
          )}
          {currentView === "Memories" && (
            <div className="text-center text-gray-600 dark:text-gray-300">
              <h2 className="text-2xl font-semibold mb-4">Memories</h2>
              <p>Your photo memories will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosApp;
