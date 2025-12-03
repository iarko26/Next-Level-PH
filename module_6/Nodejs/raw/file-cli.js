const fs = require("fs");
const path = require("path");

const messyDir = path.join(__dirname, "output", "messy-files");
const OrDir = path.join(__dirname, "output", "organised-files");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp", ".ico"],
  documents: [
    ".pdf",
    ".doc",
    ".docx",
    ".txt",
    ".xlsx",
    ".xls",
    ".ppt",
    ".pptx",
    ".csv",
  ],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv", ".flv", ".webm", ".m4v"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg", ".wma", ".m4a"],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz", ".bz2"],
  code: [
    ".js",
    ".py",
    ".java",
    ".cpp",
    ".c",
    ".html",
    ".css",
    ".php",
    ".json",
    ".xml",
  ],
  executables: [".exe", ".msi", ".bat", ".sh", ".app", ".dmg"],
};

const testfiles = [
  // Images
  "vacation-photo.jpg",
  "profile-pic.png",
  "logo.svg",
  "screenshot.jpeg",

  // Documents
  "resume.pdf",
  "report.docx",
  "budget.xlsx",
  "notes.txt",
  "presentation.pptx",

  // Videos
  "tutorial.mp4",
  "movie.mkv",
  "clip.avi",

  // Audio
  "song.mp3",
  "podcast.wav",
  "audiobook.m4a",

  // Archives
  "backup.zip",
  "project.rar",
  "files.7z",

  // Code
  "app.js",
  "script.py",
  "index.html",
  "styles.css",
  "config.json",

  // Executables
  "installer.exe",
  "setup.msi",
  "script.bat",
];

function initializeDir() {
  if (!fs.existsSync(messyDir)) {
    fs.mkdirSync(messyDir, {
      recursive: true,
    });
    testfiles.forEach((file) => {
      const filePath = path.join(messyDir, file);
      fs.writeFileSync(filePath, `This is test file ${file}`);
      console.log(`Created ${file}`);
    });
  }
  console.log("Messy Files Are Created\n");

  if (!fs.existsSync(OrDir)) {
    fs.mkdirSync(OrDir, {
      recursive: true,
    });
  }

  Object.keys(categories).forEach((category) => {
    const catagorypath = path.join(OrDir, category);
    if (!fs.existsSync(catagorypath)) {
      fs.mkdirSync(catagorypath, {
        recursive: true,
      });
      console.log(`  ✓ Created: ${category}`);
      
    }
  });
  console.log("Category Folder Are Created\n");
}

function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase();
  for (const [catergory, extention] of Object.entries(categories)) {
    if (extention.includes(ext)) {
      return catergory;
    }
  }
  return "others";
}

function Organizer() {
  console.log("File Organiser\n");
  console.log("Messy Directory", messyDir);
  console.log("Organize Directory", OrDir);
  console.log("\n" + "-".repeat(50) + "\n");

  const files = fs.readdirSync(messyDir);
  if (files.length === 0) {
    console.log("No Files Found");
  }
  console.log(`Files ${files.length} to organise`);

  const stats = {
    total: 0,
    bycategory: {},
  };

  files.forEach((file) => {
    const sourcepath = path.join(messyDir, file);
    const stat = fs.statSync(sourcepath);
    if (stat.isDirectory()) {
      return;
    }
    const catergory = getCategory(file);
    const destDir = path.join(OrDir, catergory);
    const destpath = path.join(destDir, file);
    fs.renameSync(sourcepath, destpath);
    stats.total++;
    stats.bycategory[catergory]=(stats.bycategory[catergory] || 0 ) + 1;
    console.log(file);
    console.log(catergory);
    console.log(stat.size)
  });
}

function Helper(){
  console.log(`
    File Organiser-Usage
    
    commands:
    node filename init-File Created
    node filename Organise-File Organiser

    `)

}
const command=process.argv[2];
    switch(command){
        case "init":
            initializeDir();
            break;
        case "Organise":
            Organizer();
            break;
        default:
            Helper();
            break;
    }


