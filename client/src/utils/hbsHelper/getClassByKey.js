function getClassByKey(index, rowData) {
  console.log({ rowData });
  const state = rowData.data.root;
  return index === state[rowData.hash.key] ? rowData.hash.class : "";
}

export default getClassByKey;
