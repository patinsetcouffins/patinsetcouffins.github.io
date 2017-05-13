$(document).ready(function(){
  
  $.ajax({
   url:$('#patinsCouffinsContent').attr('href');,
   type:'GET',
   success: function(data){
       var htmlData = $(data).html();
       $('#patinsCouffinsContent').html(htmlData);
   }
});
  
  //$("#patinsCouffinsContent").html( "<h1>The DOM is now loaded and can be manipulated.</h1>" );
});
