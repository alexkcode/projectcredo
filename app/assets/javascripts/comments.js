$(document).ready(function() {
  $('.toggle-reply').on('click', function(e) {
    e.preventDefault();
    $(e.target).next('.comment-reply').toggleClass('hidden');
  });

  if($('#text_area').val() ==  "")
     $('#submitButtonId').attr('disabled', true);

  $('#text_field').keyup(function(){
        if($('#text_field').val() !=  "")
             $('#submitButtonId').attr('disabled', false);
    else
       $('#submitButtonId').attr('disabled', true);
  });
});