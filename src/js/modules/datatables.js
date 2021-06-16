import "datatables";
export default function(){

  // Datatables
  $(".js-datatables").each(function() {
    let pageLength = +$(this).data("page-length");
    let ordering = $(this).attr("ordering") ? true : false;

    $(this).dataTable({
      searching: false,
      ordering: ordering,
      pageLength: pageLength,
      responsive: true,
    });

    //Обернуть в span, чтобы кнопки сортировки были расположены красиво
    $(this)
      .find("th")
      .each(function() {
        $(this).wrapInner("<span></span>");
      });

    //Обернуть чтобы был скролл в мобильном
    $(this).wrap('<div class="table-wrapper"></div>');
    

    // Обновление sticky
    $(this).on( 'draw.dt', function () {
        if (document.querySelector(".js-sticky-sidebar")) {
          window.sidebar.updateSticky();
        }
      })

  });

}