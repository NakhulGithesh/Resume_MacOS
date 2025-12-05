# 🖥️ Nakhul Githesh's macOS Portfolio

A macOS-style portfolio website built with React, TypeScript, and Tailwind CSS, featuring a desktop interface with customizable apps and personal GitHub stats.

## 🌟 Features

- **macOS Desktop Interface**: Authentic macOS look and feel with responsive design
- **Interactive Apps**: Functional apps like Safari, VSCode, Terminal, Bear, Photos, and more
- **Personal Projects**: Showcase your projects in the Bear app
- **Achievement Gallery**: Display your certificates and accomplishments in the Photos app
- **GitHub Integration**: Display stats, contributions, and top languages
- **Customizable**: Easily modify content, links, and appearance
- **Responsive**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, UnoCSS
- **Build Tool**: Vite
- **State Management**: Zustand
- **Icons**: Iconify, React Icons
- **Deployment**: GitHub Pages / Vercel

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NakhulGithesh/playground-macos.git
   cd playground-macos
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── PhotosApp/      # Photos app components
│   └── ...             # Other UI components
├── configs/            # App configurations and data
├── pages/              # Main page components
├── stores/             # State management
├── styles/             # CSS and styling files
├── types/              # TypeScript type definitions
└── utils/              # Helper functions

public/
├── img/                # Images and icons
├── photos/             # Achievement gallery images
├── markdown/           # Content for apps
└── music/              # Background music
```

## 🎨 Customization

### Adding Projects
Edit `src/configs/bear.tsx` to add your projects with descriptions and links.

### Photos App Gallery
Add your achievement images to `public/photos/` and update `src/components/PhotosApp/galleryData.ts` with the filenames. The app automatically categorizes and displays all images in the "All Achievements" album.

### Updating Social Links
Modify `src/configs/websites.ts` and `src/configs/launchpad.ts` for social media and website links.

### Changing Content
Update markdown files in `public/markdown/` for app content.

### Personalizing
- Change avatar in `public/img/ui/avatar.jpg`
- Update user info in `src/configs/user.ts`
- Modify wallpapers in `public/img/ui/`
- Add achievement photos to `public/photos/`

## 📱 Mobile Support

The portfolio is responsive and works on mobile devices, though some desktop-specific features may be simplified.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

**Nakhul Githesh**
- Email: nakhulgitheshwork@gmail.com
- GitHub: [@NakhulGithesh](https://github.com/NakhulGithesh)
- LinkedIn: [Nakhul Githesh](https://www.linkedin.com/in/nakhulgithesh)

---

⭐ If you like this project, give it a star!
