$(document).ready(function(){

  $('main').click(function() {
    var numRand = Math.floor(Math.random() * 700);
    var numRand1 = Math.floor(Math.random() * 700);
    function makeid(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }
        var temp = makeid();
        $('body').append("<li class='" + temp + "'>" + numRand + ', ' + numRand1 + "</li>");
        $('.' + temp).css('top', numRand);
        $('.' + temp).css('left', numRand1);

    });
  });
