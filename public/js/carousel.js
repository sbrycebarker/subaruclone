// $(document).ready(function(){
//   console.log("HI THERE!")
//   $('.owl-carousel').owlCarousel({
//   })
// })
function Carousel(front) {
	this.container = document.getElementById(front) || document.body;
	this.slides = this.container.querySelectorAll('.front');
	this.total = this.slides.length - 1;
	this.current = 0;

	// start on slide 1
	this.slide(this.current);
}
// // NEXT
// Carousel.prototype.next = function (interval) {
// 	(this.current === this.total) ? this.current = 0 : this.current += 1;
//
// 	this.stop();
// 	this.slide(this.current);
//
// 	if(typeof interval === 'number' && (interval % 1) === 0) {
// 		var context = this;
// 		this.run = setTimeout(function() {
// 			context.next(interval);
// 		}, interval);
// 	}
// };
// // PREVIOUS
// Carousel.prototype.prev = function (interval) {
// 	(this.current === 0) ? this.current = this.total : this.current -= 1;
//
// 	this.stop();
// 	this.slide(this.current);
//
// 	if(typeof interval === 'number' && (interval % 1) === 0) {
// 		var context = this;
// 		this.run = setTimeout(function() {
// 			context.prev(interval);
// 		}, interval);
// 	}
// };
// // STOP PLAYING
// Carousel.prototype.stop = function () {
// 	clearTimeout(this.run);
// };
// // SELECT SLIDE
// Carousel.prototype.slide = function (index) {
// 	if (index >= 0 && index <= this.total) {
// 		this.stop();
// 		for (var s = 0; s <= this.total; s++) {
// 			if (s === index) {
// 				this.slides[s].style.display = "inline-block";
// 			} else {
// 				this.slides[s].style.display = 'none';
// 			}
// 		}
// 	} else {
// 		alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
// 	}
// };
