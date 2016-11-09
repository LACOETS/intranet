<html>
<head>
<title>Guest Info</title>
<script type="text/javascript">
$(document).ready(function ()
{
$(function($, undefined) 
{
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current(); 
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Guest Info')/items?$select=Description"; 
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
		userEntry.Description=dataRec.Description;
	     $("#Divdescription").append(userEntry.Description);
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
<div id="Divdescription"></div>
</body>

</html> 
