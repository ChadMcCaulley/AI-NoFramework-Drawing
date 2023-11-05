const draw = require("../common/draw.js");
const utils = require("../common/utils.js");
const {
  RAW_DIR,
  JSON_DIR,
  IMG_DIR,
  SAMPLES,
  SAMPLES_JS,
} = require("../common/constants.js");

const { createCanvas } = require("canvas");
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");
const numDrawingsPerFile = 8;
const fs = require("fs");

/**
 * Take the array of paths and write them into png files
 * @param {String} outputFile
 * @param {Array} paths
 */
const generateImageFile = (outputFile, paths) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw.paths(ctx, paths);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputFile, buffer);
};

const fileNames = fs.readdirSync(RAW_DIR);
const samples = [];
let id = 1;
const fileName = fileNames[0];
fileNames.forEach((fileName) => {
  const content = fs.readFileSync(RAW_DIR + "/" + fileName);
  const { session, student, drawings } = JSON.parse(content);
  for (let label in drawings) {
    samples.push({ id, label, student_name: student, student_id: session });
    const paths = drawings[label];
    fs.writeFileSync(`${JSON_DIR}/${id}.json`, JSON.stringify(paths));
    generateImageFile(`${IMG_DIR}/${id}.png`, paths);
    utils.printProgress(id, fileNames.length * numDrawingsPerFile);
    id++;
  }
});

fs.writeFileSync(SAMPLES, JSON.stringify(samples));

fs.writeFileSync(SAMPLES_JS, "const samples=" + JSON.stringify(samples) + ";");
