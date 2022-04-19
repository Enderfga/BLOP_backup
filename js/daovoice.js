<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>!(function() {
  var appId = '9987ea8c';

  (function (i, s, o, g, r, a, m) {  
    i['DaoVoiceObject'] = r;
    i[r] = i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.charset = 'utf-8';
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', ('https:' === document.location.protocol ? 'https:' : 'http:') + '//widget.daovoice.io/widget/' + appId + '.js', 'daovoice');
  daovoice('init', {
    app_id: appId,
  });
  daovoice('update');
})();