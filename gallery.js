/*Name this external file gallery.js*/

function upDate(previewPic){
 const imgdiv = document.querySelector(#image);
imageDiv.style.backgroundImage = `url(${previewImage.src})`;
	imageDiv.textContent = previewImage.alt;
	}

	function unDo(){
    const imageDiv = document.querySelector("#image");
	imageDiv.style.backgroundImage = "url('original-image.jpg')";
		imageDiv.textContent = "Original Text";
	}
