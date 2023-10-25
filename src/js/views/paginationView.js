import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    if (!(numPages > 1)) return ''; // Page 1, and there are no other pages

    const prevButton = `
          <button data-goto='${curPage - 1}' class='btn--inline pagination__btn--prev'>
            <svg class='search__icon'>
              <use href='${icons}#icon-arrow-left'></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;

    const nextButton = `
          <button data-goto='${curPage + 1}' class='btn--inline pagination__btn--next'>
            <span>Page ${curPage + 1}</span>
            <svg class='search__icon'>
              <use href='${icons}#icon-arrow-right'></use>
            </svg>
          </button>`;

    if (curPage === 1) {
      return nextButton;
    } else if (curPage === numPages) {
      return prevButton;
    } else {
      return prevButton + nextButton;
    }
  }

}

export default new PaginationView();