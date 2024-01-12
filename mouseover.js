let images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWSWU0mzfasQhwApc0S1hQL5tXF2sS0IjCuP0sR0VjO45RsUcgzeI9C4kYauuKefor78&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5DR3G8yuRSsPIb7iI9BnaEKVFaG03M4Z-Ep09v1BP3kKM5fhloO2_RjT2onfasLWAYQ&usqp=CAU',
    'https://media.istockphoto.com/id/471994841/photo/enjoy-the-nature.jpg?s=170667a&w=0&k=20&c=iq0lmAXPk2aMGI5xMiPaB0R98rh6532o_UwWtYL3nno=',
    'https://static.toiimg.com/photo/msid-31346158,width-96,height-65.cms',
    'https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=sph'
];

let div = document.querySelector('#change');
let div2 = document.querySelector('#imgContainer');

let displayImg = (imgSrc) => {
    let imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.style.width = '500px';
    imgElement.style.height = '500px'
    // Adjust this as per your layout
    div2.innerHTML = '';
    div2.appendChild(imgElement);
}

let showNextImage = (index) => {
    if (index < images.length) {
        displayImg(images[index]);
    }
};

let currentIndex = 0;

let onMouseOver = () => {
    showNextImage(currentIndex);
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the start if all images shown
};

div.addEventListener('mouseover', onMouseOver);
