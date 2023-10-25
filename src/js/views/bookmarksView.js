import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class BookmarksView extends View {
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  _parentElement = document.querySelector('.bookmarks__list');

  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');

  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

}

export default new BookmarksView();