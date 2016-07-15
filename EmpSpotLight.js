
<html>
<head>
<title> Employee Spotlight</title>
<script type="text/javascript">
$(document).ready(function () {    
	$().SPServices({
		webURL: _spPageContextInfo.webAbsoluteUrl,
        operation: "GetListItems",
        async: false,
        listName: "Employee Spotlight",
		CAMLViewFields: "<ViewFields><FieldRef Name='Title' /><FieldRef Name='Department' /><FieldRef Name='Modified' /></ViewFields>",
		CAMLQuery: "<Query><Where><And><Geq><FieldRef Name='End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='Start_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And></Where></Query>",
        completefunc: function (xData, Status) {
				$(xData.responseXML).SPFilterNode("z:row").each(function() {					
					//alert(xData.responseText);
					var pictureURL = $(this).attr("ows_Picture_x0020_URL");					
					var EmpName = $(this).attr("ows_Employee_x0020_Name");
					var JobTitle = $(this).attr("ows_Title");
					var Description = $(this).attr("ows_Description");
					var Department= $(this).attr("ows_Department");
					var EmployeeName = EmpName.split('#')[1];
					var splittedpictureURL = pictureURL.split(',')[0];
	$('.spotlight-slider').append('<li><div class="img-box-thumb-holder"><div class="spotlight-img"><img src="'+splittedpictureURL+'" id="SpotlightImage" alt="Image1"/></div><div class="spotlight-infotxt"><h4>'+EmployeeName+'</h4><div class="spotlight"><p class="departspot">'+Department + &nbps;'|'&nbps; + JobTitle +'</p></div><p>Description:'+Description+'</p></div></div></li>');				
	});
    }//End of complete func
  });//End of SPServices
}); //End of Doc Ready
</script>

</head>
<body>
        <ul class="spotlight-slider">           
        </ul>
</body>

</html>