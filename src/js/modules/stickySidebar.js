import '../libs/resizeSensor';
import 'sticky-sidebar';

export let sidebar = new StickySidebar('.js-sticky-sidebar', {
  topSpacing: 0,
  responsiveWidth: true,
  resizeSensor: true,

});

var stickyInterval;
stickyInterval = setInterval(function () {
  if (sidebar) {
    sidebar.updateSticky();
  }
}, 500);
