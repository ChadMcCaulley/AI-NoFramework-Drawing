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
    const img = document.createElement("img");
    img.src = IMG_DIR + "/" + id + ".png";
    img.classList.add("thumbnail");
    row.appendChild(img);
  }
};
