function showPhoto(e) {
  /**
   * @type {HTMLImageElement}
   */
  const el = e.target;
  if (el.tagName !== "IMG") return;
  const displayImage = document
    .querySelector("#slider")
    .querySelector("#display-image");

  const imageUrl = el.getAttribute("src");
  displayImage.setAttribute("src", imageUrl);
  console.log(displayImage, imageUrl);
}
