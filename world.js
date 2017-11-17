 <html>
 <script type="text/javascript" src="jquery-1.3.2.js"> </script>

 <script type="text/javascript">

function () {

    $("#lookup").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "world.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#responsecontainer").html(response); 
            alert(response);
        }

    });
});


</script>



</html>