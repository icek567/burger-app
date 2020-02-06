$(function() {
    $(".update").on("click", function(event) {
      var id = $(this).data("id");
  
      var isDevoured = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });