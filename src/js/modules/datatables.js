import "datatables";
export default function(){

  // Datatables
  $(".js-datatables").each(function() {
    let pageLength = +$(this).data("page-length");
    let ordering = $(this).attr("ordering") ? true : false;
    let orderCol = $(this).attr("order-col-index");
    let orderType = $(this).attr("order-col-type");


    $(this).DataTable({
      searching: false,
      ordering: ordering,
      order: orderCol ? [[ orderCol, orderType ]] : [[ 0, 'asc' ]],
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
    

      let pagesLength = $('.dataTables_paginate > span').find('.paginate_button').length
    
      if(pagesLength < 2){
        $(".dataTables_paginate").hide()
      }


    // Обновление sticky
    // $(this).on( 'draw.dt', function () {
    //     if (document.querySelector(".js-sticky-sidebar")) {
    //       window.sidebar.updateSticky();
    //     }
    //   })

  });

}