
var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($){
	
  var Game = function(){
    this.init = function(){
      $(".but_start_game").bind("click",startGame)
    };
    function startGame(){
      //alert("here!");
    }
  };
  return Game;

})(jQuery)


BubbleShoot.Gamex = function(){
	
	this.init = function(){
      $(".but_start_game").bind("click",startGame)
       console.log("started the init!");
    };

    function startGame(){
       alert("here!");
    }
	
}