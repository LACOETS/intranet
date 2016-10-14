<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
var goalID;
var windowURL = window.location.href;
$(document).ready(function(){	
	//alert(selectedgoalName);
	if(windowURL.indexOf('NewForm.aspx') > -1){
		//goalID = document.referrer;
		//goalID = goalID.split('SelectedID=')[1];
		//&& windowURL.indexOf('InplviewHash') < -1
		/*
		if(windowURL == "https://lacoe.sharepoint.com/TS/Pages/Goals.aspx") {
			//alert('In If');
			GetFirstItemID();
		}*/
		
		if(windowURL.indexOf('SelectedID') > -1 && windowURL.indexOf('InplviewHash') > -1){
			//alert('In first Else if');
			goalID = decodeURIComponent(windowURL.split('SelectedID')[1]);
			//alert(goalID);
			goalID = goalID.split('=')[1];
		        //alert(goalID);
			goalID = goalID.split('#')[0];
		        //alert(goalID);
			GetGoalName(goalID);
		}
		
		else if(windowURL.indexOf('SelectedID') > -1){			
				//alert('In second else If');			
				goalID = decodeURIComponent(windowURL.split('SelectedID')[1]);
				goalID = goalID.split('&')[0];
				goalID = goalID.split('=')[1];
				GetGoalName(goalID);
		     
		}
				
		/*
		else if(windowURL == "https://lacoe.sharepoint.com/TS/Pages/Goals.aspx" && windowURL.indexOf('InplviewHash') > -1){
			//alert('In third else If');
			GetFirstItemID();
		}*/
		else{
			//alert('In else');
			GetFirstItemID();
		}	
	  //alert(goalID);
	}//End of If for New form
	else if(windowURL.indexOf('EditForm.aspx') > -1)
	{
		goalID = decodeURIComponent(window.location.href.split('?')[1]);
		goalID = goalID.split('?')[1].split('=')[1];
		//alert('In Else goalID:=' + goalID);
	}//End of Else If for Edit form
	//GetGoalName(goalID);
});//End of Doc ready

function getParameterByName(name) {
 name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
 var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
 results = regex.exec(location.search);
 return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function GetFirstItemID(){
	//alert('In GetFirstItemID');
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Goals')/items?$select=Id&$top=1&$orderby=Modified desc"; 
      //alert(queryUrl);
	  $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
		        var results = data.d.results;	
			var i=0;			
			$.each(results, function(index, dataRec) {    
				var userEntry = {};
				userEntry.Id = dataRec.Id;
				goalID = userEntry.Id;				
				//alert(goalID);
				GetGoalName(goalID);
			   });//End of each
			
	},
        error: onQueryError23
      });
    });
  });
//return goalID;
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
