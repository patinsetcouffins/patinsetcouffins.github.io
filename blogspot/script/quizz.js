$(document).ready(function(){
    // Hide all elements solution at loading
    $("solution").hide();

    $("button.buttonQuizz").click(function(){
        // Find the element solution of the first from the current element (the button)
        var solution = $(this).parent().find("solution");
        if($(solution).is(':hidden')) {
          // If it's hidden; then show it
          $(this).parent().find("solution").show();
        } else {
          // If it's visible, then hide it
          $(this).parent().find("solution").hide();
        }
    });
});
