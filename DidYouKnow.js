<ul class="ulDidYouKnow"></ul>

<script>
var sliderdiyou;
$(function($, undefined) {
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var todayDate = new Date().toISOString().split('T')[0];
	  todayDate = todayDate + 'T00%3a00%3a00';	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Did You Know')/items?$select=Title,Start_x0020_Date,End_x0020_Date,Picture_x0020_URL,Landing_x0020_Site_x0020_Approva&$orderby=End_x0020_Date asc&$filter=Start_x0020_Date le datetime'" + todayDate + "' and End_x0020_Date ge datetime'" + todayDate + "' and Landing_x0020_Site_x0020_Approva eq 'Yes'"; 
      
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
		userEntry.Title = dataRec.Title;		
		userEntry.ImageURL=dataRec.Picture_x0020_URL.Url;
		
		if(userEntry.ImageURL.indexOf('.jpeg') > -1 || userEntry.ImageURL.indexOf('.jpg') > -1 || userEntry.ImageURL.indexOf('.gif') > -1 || userEntry.ImageURL.indexOf('.png') > -1)
		{
			userEntry.ImageURL = dataRec.Picture_x0020_URL.Url;
		}
		else
		{
			userEntry.ImageURL = "https://lacoets.github.io/intranet/DUK.png";
		}
		$('.ulDidYouKnow').append('<li><div class="didyouknwbx"><div class="didyouknwbx-img"><img src="'+userEntry.ImageURL+'" id="SpotlightImage" alt="Image1"/></div><div class="didyouknw-txt"><p>'+userEntry.Title+'</p></div><div class="clear"></div></div></div></li>');
    });
		
	/*Showing slider condition*/
		var sliderdiyou=$('.ulDidYouKnow').bxSlider({
			controls:false,
			pause:7000,
			speed:1000,
			infiniteLoop: false,
			auto: ($(".ulDidYouKnow li").length > 1) ? true: false,
		    	pager: ($(".ulDidYouKnow li").length > 1) ? true: false
		});
	/*Showing slider condition end*/
  }
	
  function onQueryError(error) {
    $(".ulDidYouKnow").append(error.statusText);
  } 

$(document).on('click','.bx-pager-link',function() {
	setTimeout(function() {
		sliderdiyou.startAuto();
	},1000);
})


});

</script>
