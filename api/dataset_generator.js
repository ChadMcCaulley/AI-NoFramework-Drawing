const draw = require("../common/draw.js");
const { RAW_DIR, JSON_DIR, IMG_DIR } = require("../common/constants.js");

const { createCanvas } = require("canvas");
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");

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

const fs = require("fs");

const fileNames = fs.readdirSync(RAW_DIR);
const samples = [];
let id = 1;
fileNames.forEach((fileName) => {
  const content = fs.readFileSync(RAW_DIR + "/" + fileName);
  const { session, student, drawings } = JSON.parse(content);
  for (let label in drawings) {
    samples.push({ id, label, student_name: student, student_id: session });
    const paths = JSON.stringify(drawings[label]);
    fs.writeFileSync(`${JSON_DIR}/${id}.json`, paths);
    generateImageFile(`${IMG_DIR}/${id}.png`, paths);
    id++;
  }
});

fs.writeFileSync(SAMPLES, JSON.stringify(samples));
