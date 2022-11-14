let dogImg = ['img/maja1.jpg', 'img/maja2.jpg', 'img/maja3.jpg', 'img/maja4.jpg', 'img/maja5.jpg', 'img/maja6.jpg', 'img/maja7.jpg', 'img/maja9.jpg', 'img/shiva&maja.jpg','img/shiva&maja2.jpg','img/shiva&maja3.jpg','img/shiva&maja7.jpg', 'img/shiva1.jpg', 'img/shiva2.jpg', 'img/shiva3.jpg', 'img/shiva4.jpg', 'img/shiva5.jpg', 'img/shiva6.jpg', 'img/shiva7.jpg','img/maja8.jpg', 'img/shiva8.jpg', 'img/shiva9.jpg', 'img/shiva10.jpg']


function load() {
    let img = document.getElementById('imgContainer');

    for (let i = 0; i < dogImg.length; i++) {

        img.innerHTML += `
        <div onclick="openImg(${i})" id="imageBox" class="imgBox">
            <img id="img" alt="images" src="${dogImg[i]}">
        </div>
        `;
    }
}

function openImg(i) {
    document.getElementById('showBig').innerHTML =`
    <div class="arrows">
        <img onclick="left()" class="icon" src="icon/arrow-left.ico">
        <img onclick="closeImg()" class="icon" src="icon/x-mark-64.ico">
        <img onclick="right()" class="icon" src="icon/arrow-right.ico">
    </div>
    <div class="bigImage">
        <img class="fullImage" src="${dogImg[i]}">
    </div>
    `;

    document.getElementById('showBig').classList.remove('d-none');

}

function closeImg() {
    document.getElementById('showBig').classList.add('d-none');
}

