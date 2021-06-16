var  materialInputs = '.field--material input';

$(materialInputs).each(function(){
  if ($(this).get(0).value && $(this).get(0).value.length)
    $(this).parent().addClass('active');
});

$(document).on('focus', materialInputs, function(e) {
  $(this).parent().addClass('active')
});

$(document).on('blur', materialInputs, function(e) {
  if (!this.value.length)
    $(this).parent().removeClass('active');
});