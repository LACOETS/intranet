<html>
<head>
<title>Guest Image</title>
<script type="text/javascript">
$(document).ready(function ()
{
$(function($, undefined) 
{
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current(); 
	  //var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Guest Info')/items?$select=Org_x0020_Guest_x0020_Image/url&$expand=Org_x0020_Guest_x0020_Image"; 
      var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Guest Info')/items?$select=Org_x0020_Guest_x0020_Image";
     // alert(queryUrl);
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

  function onQuerySuccess(data) {
    var results = data.d.results;	
    $.each(results, function(index, dataRec) {
		var userEntry = {};
		userEntry.GuestImage=dataRec.Org_x0020_Guest_x0020_Image.Url;
		//alert('userEntry.GuestImage:=' + userEntry.GuestImage);
		//var splittedImageIcon = userEntry.GuestImage.split(',')[1];
		//var splittedImageURL = userEntry.GuestImage.split(',')[0];

	     //$("#imgGuestImage").attr('src',userEntry.GuestImage);
    });
  }
  function onQueryError(error) {
    $("#Divdescription").append(error.statusText);
  }
});
});  // document ready
</script>

</head>
<body>
<div id="DivImage"><img src="https://lacoets.github.io/intranet/small-banner1.jpg" id="imgGuestImage" alt="Guest Image" style="width:97%;height:100%"/></div>
</body>
</html> 
