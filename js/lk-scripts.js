// Input Photo
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function (e) {
      $('#lkPhoto').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function(){
  readURL(this);
});

// Одинаковый размер высоты у двух колонок
$(document).ready(function(){
  if ( $('div.container').outerWidth() > 750 ) {
    $('.lk-nav').height( $('.tab-content').height() - 25 );
  }
});