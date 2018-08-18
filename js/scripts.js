$(document).ready(function() {

  var flavors = ["Rainbow sherbert","Vanilla","mint","cookies & cream"];

  flavors.forEach(function(flavor) {
    $(".output").append("<li>" + flavor + "</li>");
  });
});
