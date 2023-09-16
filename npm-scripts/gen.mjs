import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const srcDir = process.cwd() + "/src/images";
const pubDir = process.cwd() + "/src/public/img";

const getData = (dirPath) => {
  const result = fs.readdirSync(dirPath);
  return result.map((itemName) => {
    return path.join(dirPath, itemName);
  });
};
const getAllData = (dirPath) => {
  let result = [];
  const getData = (dirPath) => {
    let items = fs.readdirSync(dirPath);
    items = items.map((itemName) => {
      return path.join(dirPath, itemName);
    });
    items.forEach((itemPath) => {
      result.push(itemPath);
      if (fs.statSync(itemPath).isDirectory()) {
        getData(itemPath);
      }
    });
  };
  getData(dirPath);
  return result;
};
const files = getAllData(srcDir).filter((file) => /\.(png|jpe?g)$/i.test(file));
(async () => {
  await Promise.all(
    files.map(async (item) => {
      let paths = path.parse(item);
      let filename = path.parse(item).name;
      let dir = paths.dir.replace(srcDir,pubDir);
      await sharp(item).webp({ quality: 70 }).toFile(`${dir}/${filename}.webp`);
      await sharp(item).avif().toFile(`${dir}/${filename}.avif`);
    }),
  );
})();
