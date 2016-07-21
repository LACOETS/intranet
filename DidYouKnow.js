<ul class="ulDidYouKnow"></ul>

<script>

$(function($, undefined) {

  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var todayDate = new Date().toISOString().split('T')[0];
	  todayDate = todayDate + 'T00%3a00%3a00';	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Did You Know')/items?$select=Title,StartDate,%5FEndDate,AnnouncementPictureURL&$orderby=%5FEndDate asc&$filter=StartDate le datetime'" + todayDate + "' and %5FEndDate ge datetime'" + todayDate + "'"; 
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
		userEntry.Title = dataRec.Title;		
		userEntry.ImageURL=dataRec.Picture_x0020_URL.Url;
		
		$('.ulDidYouKnow').append('<li><div class="img-box-thumb-holder"><div class="spotlight-img"><img src="'+userEntry.ImageURL+'" id="SpotlightImage" alt="Image1"/></div><p>'+userEntry.Title+'</p></div></div></li>');
    });
  }
  function onQueryError(error) {
    $(".ulDidYouKnow").append(error.statusText)
  }
});
</script>
