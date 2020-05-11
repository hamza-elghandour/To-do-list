// Check off specific todos by clicking

//the first way :

// $("li").click(function(){
//     // if li is gray
//          if($(this).css("color") === "rgb(128, 128, 128)"){
//     //turn it black
//         $(this).css({
//             color:"black",
//             textDecoration:"none"
//         });
//     }
//     //else
//          else {
//     //turn it gray
//         $(this).css({
//             color:"gray",
//             textDecoration: "line-through"
//         })
//     }
// })

// the second way

$("ul").on("click", "li", function () {
  $(this).toggleClass("second")
});

//click on icon to delete Todo
$("ul").on("click", "span", function (e) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
});

$("input[type='text'").keypress(function (e) {
  if (e.which === 13) {
    //new todo text from input
    var todotext = $(this).val();
    $(this).val("");
    //create a new li and to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todotext + "</li>")
  }
});

//input-toggle
$("#toggle").click(function () {
  $("input[type='text']").fadeToggle();
});



