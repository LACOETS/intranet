<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
var goalID;
$(document).ready(function(){
	if(window.location.href.indexOf('NewForm.aspx') > -1){
		goalID = decodeURIComponent(window.location.href.split('?')[1].split('=')[1]);
		goalID = goalID.split('?')[1].split('=')[1].split('&')[0];
		alert('In If goalID:=' + goalID);
		
	}//End of If
	else if(window.location.href.indexOf('EditForm.aspx') > -1)
	{
	  goalID = window.location.href.split('=')[1].split('&')[0];
	  alert('In else:=' + goalID);
	}
	GetGoalName(goalID);
});//End of Doc ready


function GetGoalName(goalID){
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
$('select[title="Goal Name Required Field"]').empty();
var userEntry = [];
var results = data.d.results;	
    $.each(results, function(index, dataRec) {    
    userEntry.push({
				id:dataRec.Id,
				name:dataRec.OrgGoals_x0020_GoalName		
		});//End of push    
 });//End of each
 for(var j=0;j<userEntry.length;j++){
			$('select[title="Goal Name Required Field"]').append($('<option>', { value: userEntry[j].id,text : userEntry[j].name}));	
  	}//End of for
  	//$('select[title="Goal Name Required Field"]').prop("disabled", true);
}//End of onQuerySuccess

function onQueryError(error) {
    alert(error.statusText);
  }//End of onQueryError
</script>
