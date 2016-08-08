<script type="text/javascript">
var editorNames = "", spGroupName;
var returnValue="";
function PreSaveAction() {
	getEditorPeoplePickerValues("Employee Name");
	//AddUserToGroup(editorNames);
	if(returnValue){
		return false;
	}
	else{
		return true;
	}	
}

// Get People Picker Values
function getEditorPeoplePickerValues(fieldName) { // Field Title  
		//alert('In getEditorPeoplePickerValues');      
        var _PeoplePicker = $("div[title='" + fieldName + "']");
        var _PeoplePickerTopId = _PeoplePicker.attr('id');
        var ppobject = SPClientPeoplePicker.SPClientPeoplePickerDict[_PeoplePickerTopId];
        editorsInfo = ppobject.GetAllUserInfo();
		//alert(editorsInfo);
		if(editorsInfo=="" || editorsInfo==null || editorsInfo=="undefined"){
				alert('Please enter Employee Name !!');
		}//End of If
        var i;
        for (i = 0; i < editorsInfo.length; ++i) {
            editorNames += editorsInfo[i].Key;  //Key EntityData.Email DisplayText 
            //alert(editorNames);            
            CallMasterList();
        }
}//End of getEditorPeoplePickerValues    
    
//Call Approvers List
function CallMasterList(){
//alert('In CallMasterList');
	GetGroupNamefromList();
}//End of CallMasterList


function GetGroupNamefromList(){
//alert('In GetGroupNamefromList');
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Approvers')/items?$expand=Approvers_x0020_Group/ID,Approvers_x0020_Group/Title&$select=Approvers_x0020_Group/Title,Title&$filter=Title eq 'Key Contacts'";
	  //alert(queryUrl);      
      $.ajax({
        url: queryUrl,
        method: "GET",          
	    headers: {  
	    	"Accept": "application/json; odata=verbose",	    	  
		}, 
        success: onQuerySuccess1,
        error: onQueryError1
      });
    });
  });
}//End of GetGroupNamefromList

function onQuerySuccess1(data) {
var results = data.d.results;
	$.each(results, function(index, dataRec) {
		var userEntry = {};
		userEntry.Group = dataRec.Approvers_x0020_Group.Title;
		//alert('Group Name:=' + userEntry.Group);
		//AddUserUsingREST(userEntry.Group);
		AddUserUsingSPServices(userEntry.Group);
	});//End of each
}//End of onQuerySuccess1
function onQueryError1(error) {
   		alert("error: " + JSON.stringify(error));
  }//End of onQueryError1

function AddUserUsingSPServices(groupName){
//alert('In AddUserUsingSPServices:=' + editorNames + " " + groupName);
$().SPServices({
       operation: "AddUserToGroup",
       groupName: groupName,
       userLoginName: editorNames,
       async: false,
       completefunc: function(data,status){
          //alert(status);
          if(status=="success"){
          	//alert("User added to group");
          	returnValue = true;
          }
          else{
          	//alert("User NOT added to group!!");
          	returnValue = false;
          }
       }// End of completefunc
   }); //End  of SPServices
}//End of AddUserUsingSPServices 

function AddUserUsingREST(groupName){
//alert('In AddUser:=' + groupName);
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups('"+groupName+"')/users";
	  //alert(queryUrl);      
      $.ajax({
        url: queryUrl,
        method: "POST",
        body:"{ '__metadata': { 'type': 'SP.User' }, 'LoginName': '"+editorNames+"' }",  
	    headers: {  
	    	"Accept": "application/json; odata=verbose",  
	    	"content-type": "application/json; odata=verbose"  
		}, 
        success: onQuerySuccess,
        error: onQueryError
      });
    });
  });
}//End of AddUser

function onQuerySuccess(data) {
		alert("New User added successfully in SharePoint Group");     
     }//End of onQuerySuccess
function onQueryError(error) {
   		alert("error: " + JSON.stringify(error));
  }//End of onQueryError
</script>