const updateUniqueItems = (itemsList) => {
  if (!(itemsList instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of itemsList.entries()) {
    if (v === 1) {
      itemsList.set(k, 100);
    }
  }
  return itemsList;
};

export default updateUniqueItems;
