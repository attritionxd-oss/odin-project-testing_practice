const analyzeArray = (items) => {
  if (!items) return;
  if (items.length === 0) return;

  // const itemTypes = items.map((item) => item.constructor.name);
  // const hasNoNonnumeric = itemTypes.find((itemType) => itemType !== "Number");
  // console.log(items, itemTypes, "has", hasNoNonnumeric);
  // if (!hasNoNonnumeric) return;

  const sum = items.reduce((acc, curr) => acc + curr, 0);
  const length = items.length;
  const average = sum / length;

  const sorted = items.sort((a, b) => a - b);

  return {
    average,
    min: sorted[0],
    max: sorted[length - 1],
    length,
  };
};

export default analyzeArray;
