
$(document).ready(function() {
  $(".list").hide();

  $("form").submit(function(event) {
    event.preventDefault();
    $("form").hide();
    $(".title").hide();
    $(".list").show();

    var things = [];
    var userOne = $("input#thing1").val();
    things.push(userOne);
    var userTwo = $("input#thing2").val();
    things.push(userTwo);
    var userThree = $("input#thing3").val();
    things.push(userThree);

    var thingsList = things.map(function(thing){
      return thing.charAt(0).toUpperCase() + thing.slice(1);
    });

    thingsList.forEach(function(thing){
      $('.thethings').append("<li>" + thing + "</li>");
    });
  });
});
