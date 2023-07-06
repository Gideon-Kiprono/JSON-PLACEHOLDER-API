fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderImages(data);
  });

function renderImages(imagesdata) {
  let imagesdiv = document.getElementById("images");

  let sortedImages = imagesdata.filter((image) => image.albumId == 1);

  console.log(sortedImages);

  sortedImages.forEach((img) => {
    //if (img.albumId == 1) {
    let image = document.createElement("img");
    image.setAttribute("src", img.url);
    image.setAttribute("alt", img.title);
    imagesdiv.append(image);
    // }
  });
}
