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

// Сообщения
$('.message a').on('click', function(){
  $(this).parent().parent('.message').toggleClass('active');
});

// Input "Прикрепить"
var wrapper = $( ".attach-wrapper" ),
  inp = wrapper.find( "input" ),
  btn = wrapper.find( "button" ),
  lbl = wrapper.find( "div" );

btn.focus(function(){
  inp.focus()
});

btn.add( lbl ).click(function(){
  inp.click();
});

var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

inp.change(function(){
  var file_name;
  if( file_api && inp[ 0 ].files[ 0 ] )
      file_name = inp[ 0 ].files[ 0 ].name;
  else
      file_name = inp.val().replace( "C:\\fakepath\\", '' );

  if( ! file_name.length )
      return;

btn.text(file_name);

}).change();
