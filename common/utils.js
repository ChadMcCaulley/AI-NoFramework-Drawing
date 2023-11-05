const formatPercent = (num) => {
  return (num * 100).toFixed(2) + "%";
};

/**
 *
 * @param {Number} count
 * @param {Number} max
 * @void
 */
const printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = formatPercent(count / max);
  process.stdout.write(`${count}/${max} (${percent})`);
};

/**
 * Group data by a given key
 * @param {Array} objArr
 * @param {String} key
 * @returns {Object}
 */
const groupBy = (objArr, key) => {
  const groups = {};
  for (let obj of objArr) {
    const val = obj[key];
    if (groups[val] == null) groups[val] = [];
    groups[val].push(obj);
  }
  return groups;
};

const styles = {
  car: { color: "gray", text: "🚗" },
  fish: { color: "blue", text: "🐠" },
  house: { color: "yellow", text: "🏠" },
  tree: { color: "green", text: "🌲" },
  bicycle: { color: "cyan", text: "🚲" },
  guitar: { color: "red", text: "🎸" },
  pencil: { color: "magenta", text: "✏️" },
  clock: { color: "lightgray", text: "⏰" },
};

const utils = { formatPercent, groupBy, printProgress, styles };

if (typeof module !== "undefined") {
  module.exports = utils;
}
