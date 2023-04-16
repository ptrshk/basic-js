function renameFiles(names) {
  const renamed = new Set();
  const result = [];

  for (const name of names) {
    let newName = name;
    let count = 1;

    while (renamed.has(newName)) {
      newName = `${name}(${count})`;
      count++;
    }

    result.push(newName);
    renamed.add(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};
