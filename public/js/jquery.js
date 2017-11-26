$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      autoplay: 10000,
      items: 1,
      autoHeight: true
  })

  function reload() {
    location.reload()
  }

  $(".email").keyup(function(event){
  if(event.keyCode == 13){
    console.log("getting band")
      $(".submit").click();
  }
});

})
