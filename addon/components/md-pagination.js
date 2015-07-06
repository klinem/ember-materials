import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['md-pagination'],

  classNameBindings: [
    'isMini:pagination-mini'
  ],

  /**
   * @property type
   * @type String
   * @default mini
   */
  type: null,

  /**
   * @property itemCount
   * @type Number
   * @default null
   */
  itemCount: null,

  /**
   * @property perPage
   * @type Number
   * @default 20
   */
  perPage: 20,

  /**
   * @property page
   * @type Number
   * @default 1
   */
  page: 1,

  /**
   * @property pageCount
   * @type Number
   * @default 1
   */
  pageCount: computed('perPage', 'itemCount', function() {
    const itemCount = parseInt(this.get('itemCount'));
    const perPage   = parseInt(this.get('perPage'));

    if (!isNaN(itemCount)) {
      return Math.ceil(itemCount / perPage);
    }

    return null;
  }),

  /**
   * @property isMini
   * @type Boolean
   * @default true
   */
  isMini: computed('type', function() {
    return this.get('type') === 'mini';
  }),

  /**
   * @property maxLinks
   * @type Number
   * @default 5
   */
  maxLinks: 5,

  /**
   * @property paginationInfo
   * @type String
   */
  paginationInfo: computed('page', 'perPage', 'itemCount', function() {
    const per       = this.get('perPage');
    const page      = this.get('page');
    const itemCount = this.get('itemCount');

    let info      = "";
    let firstItem = ((page * per) - per) + 1;
    let lastItem  = firstItem * per;

    if (itemCount) {
      if (lastItem > itemCount) {
        lastItem = itemCount;
      }
    }

    info = `${firstItem}-${lastItem}`;

    if (itemCount) {
      info += ` of ${itemCount}`;
    }

    return info;
  }),

  /**
   * @property previousDisabled
   * @type Boolean
   * @default true
   */
  previousDisabled: computed('page', function() {
    return parseInt(this.get('page')) === 1;
  }),

  /**
   * @property previousPage
   * @type Number
   * @default 0
   */
  previousPage: computed('page', function() {
    return this.get('page') - 1;
  }),

  /**
   * @property nextDisabled
   * @type Boolean
   * @default false
   */
  nextDisabled: computed('page', 'pageCount', function() {
    const pageCount = this.get('pageCount');
    const page      = this.get('page');

    if (pageCount) {
      return page >= pageCount;
    }
    return false;
  }),

  /**
   * @property nextPage
   * @type Number
   * @default 2
   */
  nextPage: computed('page', function() {
    return this.get('page') + 1;
  }),

  /**
   * @property pageLinks
   * @type Array
   * @default []
   */
  pageLinks: computed('page', 'pageCount', function() {
    const currentPage = this.get('page');
    const pageCount   = this.get('pageCount');

    if (!pageCount && pageCount < 2) {
      return null;
    }

    const maxLinks  = this.get('maxLinks');

    let links       = [];
    let firstPage   = 1;
    let lastPage    = pageCount;
    let pageNumbers = lastPage;

    if (maxLinks && pageCount > maxLinks) {
      firstPage = Math.ceil(currentPage - (maxLinks / 2));

      if (firstPage < 1) {
        firstPage = 1;
      }

      pageNumbers = maxLinks;
      lastPage = firstPage + (pageNumbers - 1);

      if (lastPage > pageCount) {
        firstPage = (pageCount - maxLinks) + 1;
      }
    }

    for(var i = firstPage, len = (firstPage + pageNumbers); i < len; i++) {
      links.push({
        text: i,
        page: i,
        isLink: i !== currentPage,
        classNames: Ember.String.htmlSafe('page')
      });
    }

    return links;
  }),

  actions: {
    goToPage(page) {

      if (this.attrs.onPage && !isNaN(page) && page !== null) {
        this.attrs.onPage(page);
      }

      return false;
    }
  }
});
