import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesGallary = document.querySelector(".gallery");
const imagesMarkup = createGallary(galleryItems);
imagesGallary.insertAdjacentHTML("beforeend", imagesMarkup);

function createGallary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href = "${original}">
        <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    })
    .join("");
}
console.log(galleryItems);

imagesGallary.addEventListener("click", onImgClick);

let modalImg;

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  modalImg = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
 `,
    {
      onShow: (modalImg) => {
        window.addEventListener("keydown", onCloseKeyEsc);
      },
      onClose: (modalImg) => {
        window.removeEventListener("keydown", onCloseKeyEsc);
      },
    }
  );

  modalImg.show();
}

function onCloseKeyEsc(e) {
  if (e.code === "Escape") {
    modalImg.close();
  }
}
