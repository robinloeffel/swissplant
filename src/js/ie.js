if (
  !window.fetch ||
  !NodeList.prototype.forEach ||
  !('scrollBehavior' in document.body.style)
) {
  import(
      /* webpackChunkName: 'ie11-notice' */
      '../partials/ie11-notice.html'
  ).then(({
    default: ie11NoticeAsText
  }) => {
    const domParser = new DOMParser();
    const ie11NoticeDocument = domParser.parseFromString(ie11NoticeAsText, 'text/html');

    const noticeContainer = ie11NoticeDocument.querySelector('[data-notice-container]');
    const noticeRemoveTrigger = ie11NoticeDocument.querySelector('[data-notice-remove-trigger]');

    noticeRemoveTrigger.addEventListener('click', event => {
      event.preventDefault();
      document.body.removeChild(noticeContainer);
    });

    document.body.appendChild(noticeContainer);
  });
}
