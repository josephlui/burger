
 $(document).ready(function(){

    $(".btn-primary").click(function(event){
        event.preventDefault();
        var burgerName = $('#hamburger_menu').val();

        if (burgerName){
            $.ajax("/add/" + burgerName, {
                type: "POST"
              }).then(
                function() {
                  // Reload the page to get the updated list
                  location.reload('/index');
                }
              );
        }
    });
    $(".devour").click(function(event){
         event.preventDefault();
         var id =  $(this).attr ('data-val');

    // Send the PUT request to update the devour status of a burger.
    $.ajax("/update/" + id, {
      type: "PUT"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload('/index');
      }
    );

    });  
});


