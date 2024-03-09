fetch("./data.json")
  .then((response) => response.json())
  .then((myImages) => loadImages(myImages));

function loadImages(myImages) {
  var container = document.getElementById("productRow");

  for (var i = 0; i < myImages.images.length; i++) {
    let imageId = myImages.images[i].imageId;
    let title = myImages.images[i].title;
    let imageSource = myImages.images[i].imageSrc;
    let price = myImages.images[i].price;

    let columnDiv = document.createElement("div");
    columnDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-4");

    let boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", "box");

    boxDiv.innerHTML = `
                    <div class="option_container">
                        <div class="options">
                            <a href="" class="option1">
                                Add To Cart 
                            </a>
                            <a href="" class="option2">
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src=${imageSource}>
                    </div>
                    <div class="detail-box">
                        <h5>
                            ${title}
                        </h5>
                        <h6>
                            ${price}
                        </h6>
                    </div>
    `;
    columnDiv.appendChild(boxDiv);
    container.append(columnDiv);
  }
}
function toggleMenu() {
  const menu = document.getElementById("navbar-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
