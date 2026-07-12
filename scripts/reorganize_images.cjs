const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const publicDir = path.join(__dirname, '../public');

// Ensure destination directories exist
const destDirs = [
  'assets/hero',
  'assets/banners',
  'assets/products',
  'assets/categories',
  'assets/icons',
  'assets/unused',
];

destDirs.forEach(dir => {
  const fullPath = path.join(publicDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// A map to store old path (e.g. "/image copy 10.png") to new path (e.g. "/assets/products/img1.png")
const renameMap = {};
const counters = {
  hero: 1,
  banners: 1,
  products: 1,
  categories: 1,
  icons: 1,
};

function getFolderForContext(filePath) {
  const lowerPath = filePath.toLowerCase();
  if (lowerPath.includes('hero') || lowerPath.includes('landing')) return 'hero';
  if (lowerPath.includes('banner') || lowerPath.includes('everydaygame')) return 'banners';
  if (lowerPath.includes('product') || lowerPath.includes('trending') || lowerPath.includes('data')) return 'products';
  if (lowerPath.includes('categor')) return 'categories';
  return 'icons';
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // Find all absolute image references e.g. "/image copy 10.png" or "/hero_ronaldo.png"
  const regex = /"(\/[^"]+\.(png|jpg|jpeg|svg))"/g;
  
  content = content.replace(regex, (match, imagePath) => {
    // Decode URI component in case of spaces
    const decodedImagePath = decodeURIComponent(imagePath);
    
    // Ignore if it's already organized
    if (decodedImagePath.startsWith('/assets/')) return match;
    
    // Check if we already mapped it
    if (renameMap[decodedImagePath]) {
      hasChanges = true;
      return `"${renameMap[decodedImagePath]}"`;
    }

    // Determine new name
    const ext = path.extname(decodedImagePath);
    let originalName = path.basename(decodedImagePath, ext);
    const contextFolder = getFolderForContext(filePath);
    
    let newFileName;
    // If it's a generic "image copy" name, generate a context-based name
    if (originalName.startsWith('image copy') || originalName === 'image') {
      newFileName = `${contextFolder}_img_${counters[contextFolder]++}${ext}`;
    } else {
      // Clean up original name but keep it
      newFileName = `${originalName.replace(/\s+/g, '_')}${ext}`;
    }

    const newPath = `/assets/${contextFolder}/${newFileName}`;
    renameMap[decodedImagePath] = newPath;
    
    // Move the actual file
    const oldFsPath = path.join(publicDir, decodedImagePath);
    const newFsPath = path.join(publicDir, newPath);
    
    if (fs.existsSync(oldFsPath)) {
      try {
        fs.renameSync(oldFsPath, newFsPath);
        console.log(`Moved: ${decodedImagePath} -> ${newPath}`);
      } catch (err) {
        console.error(`Error moving ${oldFsPath}:`, err);
      }
    } else {
      console.warn(`File not found: ${oldFsPath}`);
    }

    hasChanges = true;
    return `"${newPath}"`;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated references in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx|css)$/.test(file)) {
      processFile(fullPath);
    }
  }
}

console.log('Starting reorganization...');
walkDir(srcDir);

// Now, move all unreferenced 'image copy' or loose images in public/ to unused/
const publicFiles = fs.readdirSync(publicDir);
publicFiles.forEach(file => {
  const ext = path.extname(file);
  const fullPath = path.join(publicDir, file);
  
  if (fs.statSync(fullPath).isFile() && (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.svg')) {
    // If it wasn't moved, it means it's unreferenced or ignored
    if (file !== 'favicon.svg') { // don't move favicon
      const unusedPath = path.join(publicDir, 'assets/unused', file);
      try {
        fs.renameSync(fullPath, unusedPath);
        console.log(`Moved unused file: ${file} -> /assets/unused/`);
      } catch (err) {
        console.error(`Error moving unused file ${file}:`, err);
      }
    }
  }
});

console.log('Done organizing images!');
