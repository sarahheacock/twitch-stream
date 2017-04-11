var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getStream(d){
  var title = d.name;
  var link = d.url;
  var pic = d.logo;
  
  var nurl = 'https://wind-bow.gomix.me/twitch-api/streams/' + title;
  $.getJSON(nurl, function(newdata) {
      console.log(newdata);
      //write(data);
      //var stuff = '<div id="info" class"row"><a id="go" href="' + link + '" target="_blank"><img src="' + pic + '"/><h2>' + title + '</h2>';
      var stuff = ''
      if (newdata.stream === null){
         stuff += '<div id="link" class="row off"><a class="text-center" id="go" href="' + link + '" target="_blank"><img src="' + pic + '"/><h2>' + title + '</h2><h3>offline</h3><a/></div>';
      }
      else {
        stuff += '<div id="link" class="row on"><a class="text-center id="go" href="' + link + '" target="_blank"><img src="' + pic + '"/><h2>' + title + '</h2><h3>' + newdata.stream.game + '<br />viewers: ' + newdata.stream.viewers + '</h3></a></div>';
      }
      $('#results').append(stuff);
      // format(newdata.stream);
  });
  
}

// function format(status){
//   if(status!==null){
//     $('#info').css('background', 'black');
//   }  
// }

$(document).ready(function(){
  //https://api.twitch.tv/kraken
  var url = 'https://wind-bow.gomix.me/twitch-api/channels/';
  
  for (var i = 0; i < streams.length; i++){
    $.getJSON(url + streams[i], function(data) {
      //console.log(data);
      getStream(data);
    });
  }
  
  $("#all").addClass('buttonActive');
});




$(function() {$('button').on('click', function(event) {
  //find the previous button
  var fadeItem = '';

  if ($('button.buttonActive').get(0).id === 'offline'){
    fadeItem = 'div.off';
  }
  else if ($('button.buttonActive').get(0).id === 'online')   {
    fadeItem = 'div.on';
  }
  else if ($('button.buttonActive').get(0).id === 'all'){
    fadeItem = 'div#link';
  }
  
  
  $('button').removeClass('buttonActive');
  $(this).addClass('buttonActive');
  $(fadeItem).fadeOut(900, function(){

    if (event.target.id === 'offline'){
      $('div.off').fadeIn(700);
    }
    else if (event.target.id === 'online'){
      $('div.on').fadeIn(700);
    }
    else {
      $('div#link').fadeIn(700);
    }

  });
  
  
  });
   event.preventDefault();           
});


         
// $(function() {$('button').mouseleave(function(event) {
//   $(this).removeClass('buttonActive', 2000);
//   event.preventDefault();
//   });
// });