import fs from "fs";
import path from "path";

export type ProjectImage = {
  src: string;
  filename: string;
};

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function readProjectImageFiles(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "projecten");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);

  return files
    .filter((file) =>
      ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    // Logo-bestanden uitsluiten zodat ze niet in galerij/preview verschijnen
    .filter((file) => !file.toLowerCase().includes("logo"))
    .sort();
}

export function getProjectImages(limit?: number): ProjectImage[] {
  const files = readProjectImageFiles();
  const limited = typeof limit === "number" ? files.slice(0, limit) : files;

  return limited.map((file) => ({
    src: `/images/projecten/${file}`,
    filename: file
  }));
}

export function getHeroImageSrc(): string | null {
  const heroRelative = "/images/hero/hero-elektricien-project.jpg";
  const heroAbsolute = path.join(
    process.cwd(),
    "public",
    "images",
    "hero",
    "hero-elektricien-project.jpg"
  );

  if (fs.existsSync(heroAbsolute)) {
    return heroRelative;
  }

  const [firstProjectImage] = getProjectImages(1);
  return firstProjectImage?.src ?? null;
}

export function findProjectImage(filename: string): ProjectImage | undefined {
  const files = readProjectImageFiles();
  const match = files.find(
    (file) => file.toLowerCase() === filename.toLowerCase()
  );
  if (!match) return undefined;
  return {
    src: `/images/projecten/${match}`,
    filename: match
  };
}


