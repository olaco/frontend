$("#special").css("border", "2px solid red");



//passing in object with styles
const styles = {
	backgroundColor : "pink",
	fontWeight : "bold"
};


$("#special").css(styles);


$("h1").css(styles);


// select all li's and make them yellow

$("li").css("color", "yellow");

// select all element with class "big" and give them an orange border


$(".big").css("border", "1px dashed  orange");





// $("h1").click(function(){
//   $(this).text("Clicked").delay(800).fadeOut(400);

// });

// //  jQuery Element Selectors
// // $(" li")
// // $(" a")
// // $(" img")
// // $(" p")

// // //Descendant Selector
// // $(" p a")

// // // Classes and IDs
// // $(".blog-post")
// // $("#about")


// // accesing and modifying attributes

// .attr()

// // pass the attribute to the method as a string
//  // e.g
//   console.log($('a').attr('href'));

//   // using the.attr method to change the href of a link

//   $('button').on('click', function(){
//     $('a').attr('href', 'https://github.com/');
//      console.log($('a').attr('href'));
//   });