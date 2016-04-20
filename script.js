$(document).ready(function(){
  var score = 0;
  $('input[type=radio]').on('click', function(e) {
    //eventType = e.type;
    var clicked = $(this).val();
    console.log(clicked);
    //var clicked = $(this).submit();
    //var score = 0;
    if (clicked == 'correct') {
      console.log('You got it right!')
      score++;
      console.log(score)
      $('.score').text(score);
    }
    else {
      console.log('You clicked the wrong answer.')
    }
    $(function() {
      var incorrect = $('incorrect');
      $('incorrect').hide;
      $(incorrect).on('click', function () {
        $(incorrect).next()
          .fadeIn(500)
          .siblings('incorrect')
          .addClass('incorrect');
          $(incorrect).find(incorrect).fadeOut();
      });
    });
  });
});
