// My design processes:
// 1 - Make an object array with country code
// 2 - Start checking orthogonal areas
// 2.1 - If there's no orthogonal areas with same color, tag current with new country code
// 2.2 - If there's orthogonal areas with same color
// 2.2.1 - If there's more than one, and some of them has country code, tag current with the smallest country code, and unify others with the smallest country code
// 2.2.2 - If there's more than one, and none of them has country code, tag current with new country code
// 2.2.3 - If there's only one, and it has country code, tag current with the same country code
// 2.2.4 - If there's only one, and it does not have country code, tag current with new country code

const solution = arr => {
  const totalRows = arr.length;
  const totalColumns = arr[0].length;

  let totalCountries = 0;
  const arrWithCountryCode = [];

  // Step 1
  for (let row = 0; row < totalRows; row++) {
    let tempRow = [];
    for (let col = 0; col < totalColumns; col++) {
      tempRow.push({
        color: arr[row][col],
        countryCode: undefined,
      });
    }
    arrWithCountryCode.push(tempRow);
  }

  // Step 2
  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalColumns; col++) {
      const areasWithSameColor = getOrthogonalAreasWithSameColor(
        row,
        col,
        arrWithCountryCode
      );

      if (!areasWithSameColor.length) {
        // Step 2.1
        totalCountries++;
        arrWithCountryCode[row][col].countryCode = totalCountries;
      } else {
        const countryCodesOfOrthogonalAreas = getCountryCodesOfAreas(
          areasWithSameColor,
          arrWithCountryCode
        );

        // Step 2.2
        if (areasWithSameColor.length > 1) {
          if (countryCodesOfOrthogonalAreas.length) {
            // Step 2.2.1
            // TBD: unifyCountryCode to smallest one
            arrWithCountryCode[row][col].countryCode = Math.min(
              countryCodesOfOrthogonalAreas
            );
          } else {
            // Step 2.2.2
            totalCountries++;
            arrWithCountryCode[row][col].countryCode = totalCountries;
          }
        } else {
          if (countryCodesOfOrthogonalAreas.length) {
            // Step 2.2.3
            arrWithCountryCode[row][col].countryCode =
              countryCodesOfOrthogonalAreas[0];
          } else {
            // Step 2.2.4
            totalCountries++;
            arrWithCountryCode[row][col].countryCode = totalCountries;
          }
        }
      }
    }
  }
};

const getOrthogonalAreasWithSameColor = (row, col, arr) => {
  const totalRows = arr.length;
  const totalColumns = arr[0].length;
  const totalAreasWithSameColor = [];

  // Check north
  if (row - 1 > 0) {
    if (arr[row][col].color === arr[row - 1][col].color) {
      totalAreasWithSameColor.push([row - 1, col]);
    }
  }

  // Check west
  if (col - 1 > 0) {
    if (arr[row][col].color === arr[row][col - 1].color) {
      totalAreasWithSameColor.push([row, col - 1]);
    }
  }

  // Check south
  if (row + 1 < totalRows) {
    if (arr[row][col].color === arr[row + 1][col].color) {
      totalAreasWithSameColor.push([row + 1, col]);
    }
  }

  // Check east
  if (col + 1 < totalColumns) {
    if (arr[row][col].color === arr[row][col + 1].color) {
      totalAreasWithSameColor.push([row, col + 1]);
    }
  }

  return totalAreasWithSameColor;
};

const getCountryCodesOfAreas = (areas, arr) => {
  const result = [];

  areas.forEach(([row, col]) => {
    if (arr[row][col].countryCode) {
      result.push(arr[row][col].countryCode);
    }
  });

  return result;
};
