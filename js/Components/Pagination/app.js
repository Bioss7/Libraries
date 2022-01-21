const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const container = document.querySelector('.pages-nav-count');
const contentSlider = document.querySelector('.pages-nav-pages');
const containerWitdh = getComputedStyle(container).maxWidth;


btnPrev.onclick = function(){
    let currentMarginRight = contentSlider.style.marginRight || '0px';
    let currentMarginLeft = contentSlider.style.marginLeft || '0px';

    contentSlider.style.marginRight = (pixelToNumber(currentMarginRight) - pixelToNumber(containerWitdh)) + "px";
    contentSlider.style.marginLeft = (pixelToNumber(currentMarginLeft) + pixelToNumber(containerWitdh)) + "px";
}

btnNext.onclick = function(){
    let currentMarginRight = contentSlider.style.marginRight || '0px';
    let currentMarginLeft = contentSlider.style.marginLeft || '0px';

    contentSlider.style.marginRight = (pixelToNumber(currentMarginRight) + pixelToNumber(containerWitdh)) + "px";
    contentSlider.style.marginLeft = (pixelToNumber(currentMarginLeft) - pixelToNumber(containerWitdh)) + "px";
}

function pixelToNumber(pixels){
    return +pixels.substring(0, pixels.length-2);
}