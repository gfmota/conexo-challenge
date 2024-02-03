export const includesAll = (strArrA: string[], strArrB: string[]) =>
  !strArrA.find(str => !strArrB.includes(str));

export const shuffleIndexes = (length: number) => {
  const indexes = [];
  for (let i = 0; i < length; i++) {
    indexes.push(i);
  }

  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes;
};
