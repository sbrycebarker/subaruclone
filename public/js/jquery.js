$('HTML').ready(function(){

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


})
