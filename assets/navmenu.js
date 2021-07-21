$('document').ready(function(){

$('.navbar-light .dmenu').hover(function () {
  $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
}, function () {
  $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
});
function resetForm(formid) {
  $(':input','#'+formid) .not(':button, :submit, :reset, :hidden') .val('')
    .removeAttr('checked') .removeAttr('selected');
   }
   
jQuery("form").submit(function (event){
  // console.log( $( this ).serializeArray() );
  event.preventDefault();
  var myObject = [];
  myObject = jQuery('#contactus').serializeArray();
  // console.log(myObject);
  
  $.ajax({
    type:'POST',
    url:'assets/data.php',
    data:myObject,
    // dataType:'json',
    success:function(tst){
      console.log(tst);
      alert('test');
    },
    complete: function (){
      resetForm('contactus');
    }
  });
});

});