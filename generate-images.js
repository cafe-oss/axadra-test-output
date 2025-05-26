const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputPath = "assets/images/southwest-cooling-heating-logo.png";
const outputDir = "assets/images";
const sizes = [480, 768, 1024, 1400];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach((width) => {
  const outputPath = path.join(
    outputDir,
    `southwest-cooling-heating-logo-${width}.webp`
  );
  sharp(inputPath)
    .resize(width)
    .toFormat("webp", { quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Created: ${outputPath}`))
    .catch((err) => console.error(`❌ Error processing ${width}px:`, err));
});
