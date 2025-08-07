/*Name this external file gallery.js*/

function upDate(previewPic){
  const imageDiv = document.querySelector("#image");
  if (!imageDiv) return;
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.textContent = previewPic.alt;
 
}

function unDo(){
  const imageDiv = document.querySelector("#image");
  if (!imageDiv) return;
  imageDiv.style.backgroundImage = "";
  imageDiv.textContent = "Hover over an image below to display here.";
  
}

function blur(){
    console.log("blur event triggered");
  unDo();
}

function focus(){
    console.log("focus event triggered");
  // Optionally, you can call upDate here if you want keyboard focus to show the image
  // upDate(this); // Only works if bound properly
}

// Add event listeners for focus and blur, and set tabindex on load
window.onload = function addTabFocus() {
  console.log("addTabFocus function triggered");
  const images = document.querySelectorAll('.preview');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
    // Add JS event listeners for keyboard accessibility
    images[i].addEventListener('focus', function() {
      focus.call(this);
      upDate(this);
    });
    images[i].addEventListener('blur', function() {
      blur.call(this);
      unDo();
    });
    // Also add mouse events for completeness (optional, since you already have inline)
    images[i].addEventListener('mouseover', function() {
      upDate(this);
    });
    images[i].addEventListener('mouseleave', function() {
      unDo();
    });
  }
}
