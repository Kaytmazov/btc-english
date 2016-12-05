// Полезная информация
$('.helpful-title a').on('click', function(){
  var parentBox = $(this).parent().parent().parent('.helpful-item');
  if(parentBox.hasClass('active')){
    parentBox.children('.helpful-footer').children('a').html('Развернуть <i class="icon icon-open"></i>');
  } else {
    parentBox.children('.helpful-footer').children('a').html('Свернуть <i class="icon icon-close"></i>');
  }
  parentBox.toggleClass('active');
});

$('.helpful-footer a').on('click', function(){
  var parentBox = $(this).parent().parent('.helpful-item');
  if(parentBox.hasClass('active')){
    parentBox.children('.helpful-footer').children('a').html('Развернуть <i class="icon icon-open"></i>');
  } else {
    parentBox.children('.helpful-footer').children('a').html('Свернуть <i class="icon icon-close"></i>');
  }
  parentBox.toggleClass('active');
});