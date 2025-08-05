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
imageDiv.style.backgroundImage = ""; // Or the original CSS background
  imageDiv.textContent = "Hover over an image below to display here.";
	}
