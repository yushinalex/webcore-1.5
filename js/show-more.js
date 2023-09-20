const showMore = document.querySelector('.brands__button');
let list = document.querySelector('.brands__list');
let hidden = list.querySelectorAll('.brands__item:nth-child(n + 7)');

showMore.addEventListener('click', function () {
    let notHidden = list.querySelectorAll('.brands__item--visible');
    if (notHidden.length) {
        for (let i = 0; i < notHidden.length; i++) {
            notHidden[i].classList.remove('brands__item--visible');
        }
        showMore.textContent = 'Показать все';
        showMore.classList.remove('brands__button--hide');
    } else {
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].classList.add('brands__item--visible');
        }
        showMore.textContent = 'Скрыть';
        showMore.classList.add('brands__button--hide');
    }
});