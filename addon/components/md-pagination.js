import Ember from 'ember';

const { computed, typeOf } = Ember;

export default Ember.Component.extend({
  classNames: ['md-pagination'],

  classNameBindings: [
    'isMini:pagination-mini:pagination-full'
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
   * @property maxLinks
   * @type Number
   * @default 5
   */
  maxLinks: 5,

  /**
   * @property showArrows
   * @type Boolean
   * @default true
   */
  showArrows: true,

  /**
   * @property nextArrowText
   * @type String
   * @default next
   */
  nextArrowText: 'Next',

  /**
   * @property prevArrowText
   * @type String
   * @default previous
   */
  prevArrowText: 'Previous',

  /**
   * @property overflow
   * @type Boolean|Number
   * @default false
   */
  overflow: false,

  /**
   * @property isMini
   * @type Boolean
   * @default true
   */
  isMini: computed('type', function() {
    return this.get('type') === 'mini';
  }),

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
   * @property overflowAmount
   * @type Number
   * @default 0
   */
  overflowAmount: computed('overflow', function() {
    let overflow = parseInt(this.get('overflow'));

    if (!isNaN(overflow)) {
      return overflow;
    }
    return 0;
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

    const safeHellip     = Ember.String.htmlSafe('&hellip;');
    const showArrows     = this.get('showArrows');
    const maxLinks       = this.get('maxLinks');
    const overflow       = !!this.get('overflow');
    const overflowAmount = this.get('overflowAmount');

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

    if (overflow && firstPage > 1) {
      if (overflowAmount > 0) {
        if ((firstPage - overflowAmount) <= overflowAmount) {
          pageNumbers += (firstPage - overflowAmount) + 1;
          firstPage = 1;
        } else {
          for(var i = 1; i <= overflowAmount; i++) {
            links.push({
              text: i,
              page: i,
              type: 'page'
            });
          }

          links.push({
            text: safeHellip,
            type: 'overflow',
            disabled: true
          });
        }
      } else {
        links.unshift({
          text: safeHellip,
          disabled: true,
          type: 'overflow'
        });
      }
    }

    for(var i = firstPage, len = (firstPage + pageNumbers); i < len; i++) {
      links.push({
        page: i,
        text: i,
        type: 'page',
      });
    }

    if (overflow) {
      if ((firstPage + pageNumbers - 1) < pageCount) {
        if (overflowAmount > 0) {
          if (((pageCount - lastPage) - overflowAmount) < overflowAmount) {
            for(var i = (lastPage + 1); i <= pageCount; i++) {
              links.push({
                text: i,
                page: i,
                type: 'page',
                disabled: false
              });
            }
          } else {
            links.push({
              text: safeHellip,
              disabled: true,
              type: 'overflow'
            });
            for(var i = (pageCount - (overflowAmount - 1)); i <= pageCount; i++) {
              links.push({
                text: i,
                page: i,
                type: 'page',
              });
            }
          }
        }
        else {
          links.push({
            text: safeHellip,
            disabled: true,
            type: 'overflow'
          });
        }
      }
    }

    if (showArrows) {
      let isNextDisabled = currentPage >= pageCount;
      let isPrevDisabled = currentPage === 1;

      links.unshift({
        text: Ember.String.htmlSafe(this.get('prevArrowText')),
        page: currentPage - 1,
        type: 'prev',
        disabled: isPrevDisabled
      });

      links.push({
        text: Ember.String.htmlSafe(this.get('nextArrowText')),
        page: currentPage + 1,
        type: 'next',
        disabled: isNextDisabled
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
