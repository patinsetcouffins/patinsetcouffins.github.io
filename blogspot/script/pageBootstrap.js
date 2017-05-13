/**
* This is the bootstrap method.
* When the document is loaded, it gets the attribute 'href' from a #patinsCouffinsContent DOM element
* then get its content as String via an Ajax call
*/
$(document).ready(function(){
  var elementId = '#patinsCouffinsContent';
  var href = $(elementId).attr('href');
  
  if(href == undefined) {
    console.warn("Your main div should have id '%s' and an href attribute", elementId);
  }
  
  $.ajax({
   url:href,
   type:'GET',
   success: function(data){
      var htmlData;
      var arrayLength = $(data).length;
      for (var i = 0; i < arrayLength; i++) {
        var elt = $(data)[i];
        if(elt.nodeName == "DIV") {
            htmlData = elt;
            break;
        }
      }
     
       //var htmlData = $(data).find('div').first().html();
       $(elementId).html(htmlData);
   }
});
  
  //$("#patinsCouffinsContent").html( "<h1>The DOM is now loaded and can be manipulated.</h1>" );
});
