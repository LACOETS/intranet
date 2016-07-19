<div class="aniversary-pagination" id="aniversary-pagination">
	<ul class="aniversarysul pagination-rowholder">           
	</ul>
	<div class="page_navigation"></div>
	<div class="clear"></div>
</div>

<script>

$(function($, undefined) {

  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current();
      var todayDate = new Date().toISOString().split('T')[0];
	  todayDate = todayDate + 'T00%3a00%3a00';	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Anniversary')/items?$expand=Employee_x0020_Name/ID&$select=Employee_x0020_Name/FirstName,Employee_x0020_Name/LastName,Employee_x0020_Name/EMail,Title,Department,Description,Start_x0020_date,End_x0020_Date,Picture_x0020_URL&$orderby=End_x0020_Date asc&$filter=Start_x0020_date le datetime'" + todayDate + "' and End_x0020_Date ge datetime'" + todayDate + "'"; 
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
		userEntry.Department = dataRec.Department;
		userEntry.Description=dataRec.Description;
		userEntry.ImageURL=dataRec.Picture_x0020_URL.Url;
		        
		$('.aniversarysul').append('<li><div class="img-box-thumb-holder"><div class="box-rowcntr"><div class="box-img-thumbnail"><div class="img-box-thumb-holder"><img src="'+userEntry.ImageURL+'" id="AnniversaryImage" alt="Image1"/></div></div><div class="news-info-cntr"><div class="news-title-like"><h4>'+userEntry.Name+'</h4></div><div class="news-activity-dtl"><p class="news-showdate">'+userEntry.Title+'<br>'+ userEntry.Department+'</p></div></div><div class="clear"></div></div></li>');
    });
  }
  function onQueryError(error) {
    $("#keyContactPrimary").append(error.statusText)
  }
});
</script>
