const createRow = (container, name, samples) => {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowLabel = document.createElement("div");
  rowLabel.innerHTML = name;
  rowLabel.classList.add("row-label");
  row.appendChild(rowLabel);

  for (let sample of samples) {
    const { id, label } = sample;

    const sampleContainer = document.createElement("div");
    sampleContainer.id = `sample_${id}`;
    sampleContainer.onclick = () => {
      handleChartClick(sample, false);
    };
    sampleContainer.classList.add("sample__container");

    const sampleLabel = document.createElement("div");
    sampleLabel.innerHTML = label;
    sampleContainer.appendChild(sampleLabel);

    const img = document.createElement("img");
    img.src = IMG_DIR + "/" + id + ".png";
    img.classList.add("thumbnail");
    sampleContainer.appendChild(img);
    row.appendChild(sampleContainer);
  }
};

function handleChartClick(sample, forceScroll = true) {
  const emphasize = "emphasize";
  if (sample === null) {
    removeAllInstancesOfClass(emphasize);
    return;
  }

  const el = document.getElementById(`sample_${sample.id}`);
  if (el.classList.contains(emphasize)) {
    el.classList.remove(emphasize);
    chart.selectSample(null);
    return;
  }

  removeAllInstancesOfClass(emphasize);

  el.classList.add(emphasize);
  if (forceScroll) el.scrollIntoView({ behavior: "auto", block: "center" });

  chart.selectSample(sample);
}

function removeAllInstancesOfClass(className) {
  [...document.querySelectorAll(`.${className}`)].forEach((el) =>
    el.classList.remove(className)
  );
}
