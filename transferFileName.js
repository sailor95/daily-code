/*
 * Example:
 *
 * Input:
 * 883. Projection Area of 3D Shapes
 *
 * Output:
 * 883-projection-area-of-3d-shapes // Folder name
 * projection-area-of-3d-shapes.js // File name
 *
 */

const transferFileName = n => {
  let folderName = n,
    fileName = n;

  folderName = folderName.replace(/\./, '').replace(/\s/g, '-').toLowerCase();
  console.log(folderName);

  fileName = folderName.replace(/\d+/, '').replace(/-/, '').concat('.js');
  console.log(fileName);
};

const name = '';
transferFileName(name);
