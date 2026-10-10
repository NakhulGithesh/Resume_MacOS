import React from "react";
import { useStore } from "~/stores";
import { Photo } from "./galleryData";

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  const dark = useStore((state) => state.dark);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        dark ? "bg-black/85" : "bg-black/75"
      }`}
      onClick={onClose}
    >
      <img
        src={photo.path}
        alt={photo.name}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
      >
        ×
      </button>
    </div>
  );
};

export default PhotoModal;
