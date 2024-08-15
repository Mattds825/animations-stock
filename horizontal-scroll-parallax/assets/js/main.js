// create a scroll even listener
const imagesContainer = document.querySelector("#images-container");
const skullImages = document.querySelectorAll(".skull-image");

addEventListener("scroll", (e) => {
  //   console.log('window scrollY', window.scrollY);
  if (elementIsInView(imagesContainer)) {
    let scrollPercentage = getScrollPercentage(imagesContainer);
    var shiftRight = true;
    skullImages.forEach((element, index) => {
      // Do something with each selected element
      
        if (shiftRight) {
          shiftImage(element, scrollPercentage, "right", index);
          shiftRight = false;
        } else {
          shiftImage(element, scrollPercentage, "left", index);
          shiftRight = true;
        }
    });
    // console.log("scroll percentage", scrollPercentage);
  }

  // console.log(elementIsInView(document.querySelector("#images-container")));
});

function elementIsInView(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// function that return value between 0 and 1 based on the element position in the viewport
function getScrollPercentage(element) {
  const rect = element.getBoundingClientRect();
  lastKnownScrollPosition = window.scrollY;
  rectHeight = rect.height;
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return Math.abs(
    viewHeight -
      Math.abs((rect.top - viewHeight) / (viewHeight + rectHeight) - viewHeight)
  );
}

//create function that shift the image horizontally based on a given value between 0 and 1
function shiftImage(image, shiftValue, direction, index) {
  let currentStyle = window.getComputedStyle(
    document.querySelector(`.skull-image:nth-child(${index + 1})`)
  );
  var matrix = new WebKitCSSMatrix(currentStyle.transform);
  let currentTransformX = matrix.m41;
  if (direction === "right") {
    image.style.transform = `translateX(${(shiftValue * 100) - 50}%)`;
  }
  if (direction === "left") {
    image.style.transform = `translateX(-${+(shiftValue * 100) - 50}%)`;
  }
}
