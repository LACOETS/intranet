<ul class="ulDidYouKnow"></ul>

<script>

$(function($, undefined) {

  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var todayDate = new Date().toISOString().split('T')[0];
	  todayDate = todayDate + 'T00%3a00%3a00';	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Did You Know')/items?$select=Title,Start_x0020_Date,End_x0020_Date,Picture_x0020_URL&$orderby=End_x0020_Date asc&$filter=Start_x0020_Date le datetime'" + todayDate + "' and End_x0020_Date ge datetime'" + todayDate + "'"; 
      alert(queryUrl);
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
		alert(userEntry.ImageURL);
		$('.ulDidYouKnow').append('<li><div class="img-box-thumb-holder"><div class="spotlight-img"><img src="'+userEntry.ImageURL+'" id="SpotlightImage" alt="Image1"/></div><p>'+userEntry.Title+'</p></div></div></li>');
    });
  }
  function onQueryError(error) {
    $(".ulDidYouKnow").append(error.statusText)
  }
});
</script>
