$(document).ready(function(){
  $('#addUser').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serialize()
    $.post('/user', data)
  })
})

$(document).ready(function(){
  $('#updateRating').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serialize()
    $.post('/game', data)
  })
})