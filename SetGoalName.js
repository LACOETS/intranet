<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
var goalID;
var windowURL = window.location.href;
$(document).ready(function(){	
	if(windowURL.indexOf('NewForm.aspx') > -1){
		//goalID = document.referrer;
		//goalID = goalID.split('SelectedID=')[1];
		if(windowURL.indexOf('SelectedID') > -1){
			alert('In If');
			goalID = decodeURIComponent(windowURL.split('SelectedID')[1]);
			goalID = goalID.split('&')[0];
			goalID = goalID.split('=')[1];		
		}
		else {
			alert('In else');
			goalID = GetFirstItemID();
		}
		
		//goalID = decodeURIComponent(windowURL.split('?')[1].split('=')[1]);
		//goalID = goalID.split('?')[1].split('=')[1].split('&')[0];		
		alert(goalID);
	}//End of If
	else if(windowURL.indexOf('EditForm.aspx') > -1)
	{
		goalID = decodeURIComponent(window.location.href.split('?')[1]);
		goalID = goalID.split('?')[1].split('=')[1];
		//alert('In Else goalID:=' + goalID);
	}
	GetGoalName(goalID);
});//End of Doc ready

function GetFirstItemID(){
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Goals')/items?$select=Id&$top 1"; 
      //alert(queryUrl);
	  $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
		        var results = data.d.results;	
			$.each(results, function(index, dataRec) {    
				var userEntry = {};
				userEntry.Id = dataRec.Id;
				goalID = userEntry.Id;
			});
	},
        error: onQueryError23
      });
    });
  });
return goalID;
}//End of GetFirstItemID
		   
function onQueryError23(error) {
    //alert(error.statusText);
  }//End of onQueryError23

function GetGoalName(goalID){
//alert('In GetGoalName:=' + goalID);
	SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Goals')/items?$select=Id,OrgGoals_x0020_GoalName,Title&$filter=Id eq '" + goalID + "'"; 
      //alert(queryUrl);
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
}//End of GetGoalName

function onQuerySuccess(data) {
//alert('In onQuerySuccess');
$('select[title="Goal Name Required Field"]').empty();
var userEntry = [];
var results = data.d.results;	
    $.each(results, function(index, dataRec) {    
    userEntry.push({
				id:dataRec.Id,
				name:dataRec.OrgGoals_x0020_GoalName		
		});//End of push    
 });//End of each
 //alert(userEntry.length);
	for(var j=0;j<userEntry.length;j++){
	//alert('In For');
	 //alert(userEntry[j].id + " " + userEntry[j].name);
	 $('select[title="Goal Name Required Field"]').append($('<option>', { value: userEntry[j].id,text : userEntry[j].name}));	
  	}//End of for
  	//$('select[title="Goal Name Required Field"]').prop("disabled", true);
}//End of onQuerySuccess

function onQueryError(error) {
    //alert(error.statusText);
  }//End of onQueryError
</script>
