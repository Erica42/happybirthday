$(document).ready(function(){
  $("#color-button").on("click", function(){
    var section = $(this).parent();
    $.ajax({
      url: '/',
      method: 'post'
    })
    .done(function(response){
      section.append(response);
    });
  });
});
