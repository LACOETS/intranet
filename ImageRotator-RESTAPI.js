
<html>
<head>
<title> Org Guest Info</title>
 <script type="text/javascript">
 
        $(document).ready(function () {
            var folderName = "LACOE Images/About Us";
           // var folderName = "About Us";

			
			SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
			    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {			      			      	  
				  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('"+folderName+"')/Files";
			      //alert('Query:-' + queryUrl);
			      $.ajax({
			        url: queryUrl,
			        method: "GET",
			        headers: {
			            	 "Accept": "application/json; odata=verbose"			        
    					},
			        success: onQuerySuccess,
			        error: onQueryError
			      });
			    });
			  });
			  
            
            /*$().SPServices({
                webURL: _spPageContextInfo.webAbsoluteUrl,				
                operation: "GetListItems",
                async: false,
                listName: "LACOE Images",
                CAMLViewFields: "<ViewFields><FieldRef Name='NameOrTitle'/></ViewFields>",
                CAMLQuery: "<Query><Where><Contains><FieldRef Name='FileRef' /><Value Type='Text'>" + folderName + "</Value></Contains></Where></Query>",
				CAMLQueryOptions: '<QueryOptions><ViewAttributes Scope="Recursive"/></QueryOptions>',
                completefunc: function (xData, Status) {
                    $(xData.responseXML).SPFilterNode("z:row").each(function () {
                        var AboutImage = $(this).attr("ows_NameOrTitle");
						var imageURL = _spPageContextInfo.webAbsoluteUrl + "/LACOE%20Images/About%20Us/" + AboutImage;
						//alert(imageURL);
						$('.fullstaticslider').append('<li class="bx-clone" style="float: left; list-style: none; position: relative; width: 1170px;"><img src="'+imageURL+'" id="ImgRotateImage" alt="Rotate Image"/></li>');
                    });
                } //End of complete func
            }); //End of SPServices*/
        });   //End of Doc Ready
        
        function onQuerySuccess(data) {
		    var results = data.d.results;
		    $.each(results, function(index, dataRec) {
				var userEntry = {};	
		
				userEntry.Name = dataRec.Name;
				var imageURL = _spPageContextInfo.webAbsoluteUrl + "/LACOE%20Images/About%20Us/" + userEntry.Name;
				//alert(imageURL);
				$('.fullstaticslider').append('<li><img src="'+imageURL+'" id="ImgRotateImage" alt="Rotate Image"/></li>');
				//$('.fullstaticslider').append('<li>ABCDS</li>');
				
		    });//End of each
  		}//End of onQuerySuccess
  function onQueryError(error) {
    alert(error.statusText)
  }

    </script>

</head>
<body>

<section class="fullimage-banner">
   <div class="container">
      <div class="fullslider-images">
	       <ul class="fullstaticslider">
	       </ul>
                        
            </div>
         </div> 
  </section>
</body>

</html>
