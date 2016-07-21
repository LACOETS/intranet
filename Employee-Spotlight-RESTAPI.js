

<script>

$(function($, undefined) {

  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current();
      var todayDate = new Date().toISOString().split('T')[0];
	  todayDate = todayDate + 'T00%3a00%3a00';	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Employee Spotlight')/items?$expand=Employee_x0020_Name/ID&$select=Employee_x0020_Name/FirstName,Employee_x0020_Name/LastName,Employee_x0020_Name/EMail,Title,Department,Description,Start_x0020_Date,End_x0020_Date,Picture_x0020_URL&$orderby=End_x0020_Date asc&$filter=Start_x0020_Date le datetime'" + todayDate + "' and End_x0020_Date ge datetime'" + todayDate + "'"; 
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
		if(dataRec.Employee_x0020_Name.FirstName == null || dataRec.Employee_x0020_Name.LastName == null)
			{
				userEntry.Name = dataRec.Employee_x0020_Name.EMail.split('@')[0];
			}
		else
			{			    
			    if(dataRec.Employee_x0020_Name.LastName == null)
					{dataRec.Employee_x0020_Name.LastName = '';}
				userEntry.Name = dataRec.Employee_x0020_Name.FirstName + " " + dataRec.Employee_x0020_Name.LastName;
			}

		userEntry.Title = dataRec.Title;
		//alert(userEntry.Title);
		userEntry.Department = dataRec.Department;
		userEntry.Description=dataRec.Description;
		userEntry.ImageURL=dataRec.Picture_x0020_URL.Url;
		
		$('.spotlight-slider').append('<li><div class="img-box-thumb-holder"><div class="spotlight-img"><img src="https://lacoets.github.io/intranet/gray-img.png" data-original="'+userEntry.ImageURL+'" id="SpotlightImage" class="lazy" alt="Image1"/></div><div class="spotlight-infotxt"><h4>'+userEntry.Name+'</h4><div class="spotlight"><p class="departspot">'+userEntry.Title+ '<span class="sep-spotlight">|</span>' + userEntry.Department +'</p></div><p>'+userEntry.Description+'</p></div></div></li>');
    });
  }
  function onQueryError(error) {
    $(".spotlight-slider").append(error.statusText)
  }
});
$(function(){
	setTimeout(function(){ 
		$(".spotlight-slider").bxSlider({
			auto: true,
		        pager: true,
		        controls: false
		});
 	}, 3000);
 	
})
</script>
<ul class="spotlight-slider"></ul>
