const filledStar = '&#9733;';
const outlineStar = '&#9734;';

function rate(rating) {
    const stars = document.getElementById('starRating').getElementsByTagName('span');
    const length = stars.length;
    for (let i = 0; i < length; i++) {
        if (i < rating - 1) {
            stars[i].innerHTML = outlineStar;
        } else {
            stars[i].innerHTML = filledStar;
        }
    }
}

