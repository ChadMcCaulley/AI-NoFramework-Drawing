const DATA_DIR = "../data";
const RAW_DIR = DATA_DIR + "/raw";
const DATASET_DIR = DATA_DIR + "/dataset";
const JSON_DIR = DATASET_DIR + "/json";
const IMG_DIR = DATASET_DIR + "/img";
const SAMPLES = DATASET_DIR + "/samples.json";
const FEATURES = DATASET_DIR + "/features.json";
const JS_OBJECTS = "../common/js_objects";
const SAMPLES_JS = JS_OBJECTS + "/samples.js";
const FEATURES_JS = JS_OBJECTS + "/features.js";

if (typeof module !== "undefined") {
  module.exports = {
    DATA_DIR,
    RAW_DIR,
    DATASET_DIR,
    JSON_DIR,
    IMG_DIR,
    SAMPLES,
    FEATURES,
    JS_OBJECTS,
    SAMPLES_JS,
    FEATURES_JS,
  };
}
