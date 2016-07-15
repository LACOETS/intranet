
<html>
<head>
<title> Employee anniversary</title>
<script type="text/javascript">
$(document).ready(function () {
    $().SPServices({
		webURL: _spPageContextInfo.webAbsoluteUrl,
        operation: "GetListItems",
        async: false,
        listName: "Anniversary",
      
      CAMLViewFields: "<ViewFields><FieldRef Name='Title' /><FieldRef Name='Department' /><FieldRef Name='Modified' /></ViewFields>", 
      CAMLQuery: "<Query><Where><And><Geq><FieldRef Name='End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='Start_x0020_date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And></Where></Query>",
                  
               completefunc: function (xData, Status) {
				$(xData.responseXML).SPFilterNode("z:row").each(function() {					
					var pictureURL = $(this).attr("ows_Picture_x0020_URL");
					var EmpName = $(this).attr("ows_Employee_x0020_Name");
					var JobTitle = $(this).attr("ows_Title");
					var Department= $(this).attr("ows_Department");
					var EmployeeName = EmpName.split('#')[1];
					var splittedpictureURL = pictureURL.split(',')[0];
					var annversaryDate = $(this).attr("ows_Start_x0020_date");
					  
					$('.aniversarysul').append('<li><div class="box-rowcntr"><div class="box-img-thumbnail"><div class="img-box-thumb-holder"><img src="'+splittedpictureURL+'" id="AnniversaryImage" alt="Image1"/></div></div><div class="news-info-cntr"><div class="news-title-like"><h4>'+EmployeeName+'</h4></div><div class="news-activity-dtl"><p class="news-showdate">Title:'+JobTitle+'</p><p class="news-showdate">Department:'+Department+'</p></div></div><div class="clear"></div></li>');
					 
	});
    }//End of complete func
  });//End of SPServices
}); //End of Doc Ready
</script>

</head>
<body>
        <ul class="aniversarysul">           
        </ul>
</body>

</html>