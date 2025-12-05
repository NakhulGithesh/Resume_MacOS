# Photos App Module

This is a standalone React module for a macOS-style Photos app, extracted and converted from the Svelte-based macOS-Themed-Portfolio project.

## Files

- `PhotosApp.tsx` - Main component with macOS window styling
- `PhotoModal.tsx` - Lightbox modal for viewing photos
- `GalleryGrid.tsx` - Grid layout component for photos
- `galleryData.ts` - Photo metadata and album definitions
- `photosIcon.avif` - Dock icon for the app

## Features

- macOS-style window with draggable header, close/minimize/maximize buttons
- Grid and list view toggle
- Sidebar with albums (All Photos, Recents, Favorites, Shared)
- Favorite photos functionality (persisted in localStorage)
- Modal lightbox viewer
- Responsive design with Tailwind CSS

## Integration Instructions

### 1. Copy Files to Your Project

Copy the entire `copy_photoD` folder to your React project's `src/components/` directory and rename it to `PhotosApp`.

### 2. Add Images

Place your images in `public/gallery/` and update `galleryData.ts`:

```typescript
export const galleryData: Photo[] = [
  { path: '/gallery/your-image1.jpg', name: 'your-image1.jpg', album: 'All Photos', isFavorite: false },
  { path: '/gallery/your-image2.jpg', name: 'your-image2.jpg', album: 'All Photos', isFavorite: false },
  // Add more...
];
```

### 3. Window Management Setup

You'll need to implement window management similar to the original project. Here's an example structure:

#### Window Type Definition
```typescript
interface WindowInstance {
  id: string;
  type: string;
  minimized: boolean;
  maximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}
```

#### Window Store/State Management
Implement functions for:
- `addWindow(type: string)`
- `closeWindow(id: string)`
- `toggleMinimize(id: string)`
- `toggleMaximize(id: string)`
- `focusWindow(id: string)`
- `startDrag(event, id, action)` - for dragging and resizing

### 4. Desktop Component Integration

In your main desktop component, render the PhotosApp when the window type is 'photos':

```tsx
import PhotosApp from './components/PhotosApp/PhotosApp';

function Desktop() {
  // Your window management logic here
  const windows = [/* your windows array */];

  const handleClose = (id: string) => {
    // Close window logic
  };

  const handleMinimize = (id: string) => {
    // Minimize window logic
  };

  const handleMaximize = (id: string) => {
    // Maximize window logic
  };

  const startDrag = (e: React.MouseEvent, id: string, action: 'move' | 'resize') => {
    // Drag handling logic
  };

  return (
    <div>
      {windows.map(window => (
        <div
          key={window.id}
          className="absolute"
          style={{
            left: window.position.x,
            top: window.position.y,
            width: window.size.width,
            height: window.size.height,
            zIndex: window.zIndex,
            display: window.minimized ? 'none' : 'block'
          }}
          onMouseDown={() => focusWindow(window.id)}
        >
          {window.type === 'photos' && (
            <PhotosApp
              windowInstance={window}
              startDrag={startDrag}
              onClose={() => handleClose(window.id)}
              onMinimize={() => handleMinimize(window.id)}
              onMaximize={() => handleMaximize(window.id)}
            />
          )}
          {/* Other app components */}
        </div>
      ))}
    </div>
  );
}
```

### 5. Dock Integration

Add the Photos app to your dock component:

```tsx
import photosIcon from './components/PhotosApp/photosIcon.avif';

function Dock() {
  const handleAppClick = (appType: string) => {
    if (appType === 'photos') {
      addWindow('photos');
    }
  };

  return (
    <div className="dock">
      <div className="dock-item" onClick={() => handleAppClick('photos')}>
        <img src={photosIcon} alt="Photos" className="h-12 w-12" />
      </div>
      {/* Other dock items */}
    </div>
  );
}
```

### 6. Dependencies

Ensure you have these dependencies installed:

```bash
npm install react react-dom tailwindcss
```

### 7. Styling

The component uses Tailwind CSS classes. Make sure your project is configured with Tailwind.

### 8. Usage

Click the Photos icon in your dock to open the Photos app window. You can drag the window by its header, resize it, and use the close/minimize/maximize buttons.

## Customization

- Modify `galleryData.ts` to add more albums or change photo sources
- Update the styling in the components to match your theme
- Extend the modal with navigation (next/previous) if needed
- Add more views beyond Library, For You, and Memories
