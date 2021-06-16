import {sidebar} from './stickySidebar';
export default function(){
  // navigation podmenu
$('.navigation ul li').each(function () {
  let speed = 200;
  if ($(this).find('ul').length) {

    $(this).addClass('has-podmenu')

    $(this).children('a').click(function (e) {

      if (!$(this).parent().hasClass('is-active')) {
        e.preventDefault();
        // удалить у всех is-active
        $('.navigation ul li ul').slideUp(speed);
        setTimeout(()=>{
          $('.navigation ul li').removeClass('is-active');
          // добавить is-active
          $(this).parent().find('ul').slideDown(speed);
          $(this).parent().toggleClass('is-active');
          sidebar.updateSticky();
        },speed)
      

      } else {
        e.preventDefault();
        $(this).parent().find('ul').slideUp(speed);
        $(this).parent().toggleClass('is-active');
        sidebar.updateSticky();
      }

    });

  }

});
}