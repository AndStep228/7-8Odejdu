const SizeCheckItem = document.querySelectorAll('.size-check__item')
const SizeCheck = document.querySelector('.product__size-check')

SizeCheck.addEventListener('click', function ({ target }) {
    let index = [...SizeCheckItem].indexOf(target);
    for (i = 0; i < SizeCheckItem.length; i++) {
        SizeCheckItem[i].classList.remove('active')
    }
    SizeCheckItem[index].classList.toggle('active')
})

const FileIn = document.querySelectorAll('.img-scroll__item-img')
const FileInParent = document.querySelector('.about-product__img-scroll')
const FileOut = document.querySelector('.about-product-img')

    // FileIn.addEventListener('click', () => {
    //     document.getElementById('fileout').src = document.getElementById('filein').src
    // })

FileInParent.addEventListener('click', function ({ target }) {
    let indexTwo = [...FileIn].indexOf(target);
    console.log(FileIn[indexTwo].src)
    FileOut.src = FileIn[indexTwo].src
    //SizeCheckItem[index].classList.toggle('active')
})
console.log(FileIn[1].src)
//document.getElementById('fileout').src

