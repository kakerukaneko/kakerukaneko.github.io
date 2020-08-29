window.WebFontConfig = {
    google: {families: ['Caveat'] },
    active: function () {
    sessionStorage.fonts = true;
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

setTimeout(function () {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);
