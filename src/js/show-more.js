const showAllButtonDataList = [
  {
    container: document.querySelector('.article__text'),
    shortContainerClass: 'article__text--short',
    btn: document.querySelector('.article__show-all-btn'),
  },
  {
    container: document.querySelector('.device-brands__list'),
    shortContainerClass: 'device-brands__list--short',
    btn: document.querySelector('.device-brands__show-all-btn'),
  },
  {
    container: document.querySelector('.device-types__list'),
    shortContainerClass: 'device-types__list--short',
    btn: document.querySelector('.device-types__show-all-btn'),
  }
];

showAllButtonDataList.forEach(function (showAllButton) {
  let textBtn = showAllButton.btn.textContent;

  showAllButton.btn.addEventListener('click', function () {
    if (showAllButton.container.classList.contains(showAllButton.shortContainerClass)) {
      showAllButton.container.classList.remove(showAllButton.shortContainerClass);

      showAllButton.btn.textContent = 'Скрыть';
      showAllButton.btn.classList.toggle('show-all-btn--flip');

      return;
    }

    showAllButton.container.classList.add(showAllButton.shortContainerClass);
    showAllButton.btn.textContent = textBtn;
    showAllButton.btn.classList.toggle('show-all-btn--flip');
  })
})
