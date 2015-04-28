var accordionsNum = document.querySelectorAll('section.accordion'), i;
for (i = 0; i < accordionsNum.length; i++) {
  var articlesNum = accordionsNum[i].querySelectorAll('article.accordion-article'), j;
  for (j = 0; j < articlesNum.length; j++) {
    articlesNum[j].addEventListener('click', function(e) {
      if (e.target.parentNode.parentNode.querySelector('.selected')) {
        e.target.parentNode.parentNode.querySelector('.selected').className = 'accordion-article';
      }
      e.target.parentNode.classList.toggle('selected');
    });
  }
}