var accordionsNum = document.querySelectorAll('section.accordion'), i;
for (i = 0; i < accordionsNum.length; i++) {
  var articlesNum = accordionsNum[i].querySelectorAll('article.accordion-article'), j;
  for (j = 0; j < articlesNum.length; j++) {
    articlesNum[j].getElementsByTagName('h2')[0].addEventListener('click', function(e) {
      if (e.target.parentNode.className.indexOf('selected') > -1) {
        e.target.parentNode.classList.toggle('selected');
      } else {
        if (e.target.parentNode.parentNode.querySelector('.selected')) {
          e.target.parentNode.parentNode.querySelector('.selected').classList.toggle('selected');
        }
        e.target.parentNode.classList.toggle('selected');
      }
    });
  }
}
