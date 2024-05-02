let plusIcon = document.querySelectorAll('.icon-plus');
let minusIcon = document.querySelectorAll('.icon-minus');
let hiddenParagraphs = document.querySelectorAll('.text');

// Add hidden class to plus icon and remove hidden class from minus icon and paragraph
for (let i = 0; i < plusIcon.length; i++) { 
  plusIcon[i].addEventListener('click', () => {
    plusIcon[i].classList.add('hidden');
    minusIcon[i].classList.remove('hidden');
    hiddenParagraphs[i].classList.remove('hidden');
});
};

// Add hidden class to minus icon and remove hidden class from plus icon and paragraph
for (let i = 0; i < minusIcon.length; i++) {
  minusIcon[i].addEventListener('click', () => {
    minusIcon[i].classList.add('hidden');
    plusIcon[i].classList.remove('hidden');
    hiddenParagraphs[i].classList.add('hidden');
});
};
