$(document).ready(function(){
  //
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:0,
  //     autoplay: 10000,
  //     items: 1,
  //     autoHeight: true
  // })

  // function reload() {
  //   location.reload()
  // }

  $(".email").keydown(function(event){
  if(event.keyCode == 13){
    console.log("getting band")
      $(".submit").click();
  }
});

  $('#vehicles').click(function(){
    if ( $('#vehicledropdown').css('visibility') == 'hidden' )
      $('#vehicledropdown').css('visibility','visible');
    else
      $('#vehicledropdown').css('visibility','hidden');
  });

  $(function(){

  				var $win = $(window); // or $box parent container
  				var $box = $(".box");
  				var $log = $(".log");

  				 $win.on("click.Bst", function(event){
  					if (
              $box.has(event.target).length == 0 
              &&
              !$box.is(event.target)
            ){
  						console.log("you clicked outside the box");
  					} else {
  						console.log("you clicked inside the box");
  					}
  				});

  });

})
