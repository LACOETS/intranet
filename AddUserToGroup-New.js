<script type="text/javascript">
var editorNames = "", groupID, groupIDTest, userEmail, userNameOnForm;
var returnValue="";
function PreSaveAction() {	
	//alert('In PreSaveAction');
	var isducplicate=checkDuplicateEntry("Employee Name")
	
	//getEditorPeoplePickerValues("Employee Name");
	//AddUserToGroup(editorNames);
	if(isducplicate){
	//if(returnValue){
		alert('Duplicate record');
		return false;
		
	}
	else{
		//***code to add user into specific group***///		
		CallMasterList();
		return true;
	}	
}//End of PreSaveAction

function checkDuplicateEntry()
{ 	var _PeoplePicker = $("div[title='Employee Name']");
    var _PeoplePickerTopId = _PeoplePicker.attr('id') + '_HiddenInput';
	var _peoplepickerXmlvalue=$("input[id='"+ _PeoplePickerTopId +"']");
	var _PeoplePickerEmailID = _peoplepickerXmlvalue.attr('value');
	_PeoplePickerEmailID=_PeoplePickerEmailID.substring(_PeoplePickerEmailID.indexOf("Email")+8,_PeoplePickerEmailID.indexOf("MobilePhone")-3)+"'";
 //alert(_PeoplePickerEmailID);       
 editorNames = _PeoplePickerEmailID;
 editorNames = "i:0#.f|membership|" + editorNames.split("'")[0];
        //alert(editorNames);
	//alert(_PeoplePickerTopId);
	var result = true;
	var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Key%20Contact')/items?$select=KeyContacts_x0020_EmployeeName/EMail,KeyContacts_x0020_EmployeeName/Name,KeyContacts_x0020_EmployeeName/FirstName&$expand=KeyContacts_x0020_EmployeeName/EMail&$filter=KeyContacts_x0020_EmployeeName/EMail eq '" + _PeoplePickerEmailID;
 $.ajax
 ({
  url: requestUri,
  type: "GET",
  cache: true,
  async: false,
  headers:{
  "ACCEPT": "application/json;odata=verbose"
         },
  success: function (data) {
  if($(data.d.results).length == 0) 
  {
	  result = false;
	  return result;
	}
   
  },
  error: function () {
  }
 });
 return result;
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
			//CallMasterList();
            GetUserLoginName(editorNames);
        }
}//End of getEditorPeoplePickerValues    

function GetUserLoginName(editorNames){
//alert('In GetUserLoginName');
//var userEmail = editorNames.split('@')[1];
//alert(userEmail);
$().SPServices({
    operation: "GetUserLoginFromEmail",
    emailXml: "<Users><User Email='"+editorNames+"'/></Users>",
        completefunc: function (xData, Status) {
        $(xData.responseXML).find("User").each(function() {                    
                    //alert($(this).attr("Login"));
					var delimiter='|';
					var start=2;
					var tokensNew = $(this).attr("Login").split(delimiter).slice(start);
					userEmail = tokensNew.join(delimiter);
					//alert(userEmail);
					userNameOnForm = userEmail.split('@')[0];
					//alert(userNameOnForm);
					CallKeyContactsList(userNameOnForm);
                })
        }
	});//End of SPServices
}//End of GetUserLoginName

function CallKeyContactsList(userNameOnForm){
//alert('In CallKeyContactsList:=' + userEmail);
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  //var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Contact')/items?$select=KeyContacts_x0020_EmployeeName/EMail,KeyContacts_x0020_EmployeeName/Name&$expand=KeyContacts_x0020_EmployeeName/Id&$filter=KeyContacts_x0020_EmployeeName eq '"+userNameOnForm+"'";
	  //var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Contact')/items?$select=KeyContacts_x0020_EmployeeName/EMail&$expand=KeyContacts_x0020_EmployeeName/Id&$filter=KeyContacts_x0020_EmployeeName/EMail eq '"+userEmail+"'";
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Contact')/items?$select=KeyContacts_x0020_EmployeeName/EMail,KeyContacts_x0020_EmployeeName/Name,KeyContacts_x0020_EmployeeName/FirstName&$expand=KeyContacts_x0020_EmployeeName/Id";

	  //alert(queryUrl);      
      $.ajax({
        url: queryUrl,
        method: "GET",          
	    headers: {  
	    	"Accept": "application/json; odata=verbose",	    	  
		}, 
        success: onQuerySuccess1234,
        error: onQueryError1234
      });
    });
  });


}//End of CallKeyContactsList

function onQuerySuccess1234(data) {
//alert('Email from People picker field :=' + userEmail);
var results = data.d.results;
//alert(results.length);
$.each(results, function(index, dataRec) {
	var userEntry = {};
	userEntry.Name = dataRec.KeyContacts_x0020_EmployeeName.Name;
	alert('Employee email from List:=' + userEntry.Name);
	/*if($.trim(userEntry.EmpEmail.toLowerCase()) == $.trim(userEmail.toLowerCase())){
		alert('User Already in the list, please edit the existing entry !!');
		//returnValue = true;
	}
	else
	{
		alert('User not in list');
	}*/
			
});//End of each
}//End of onQuerySuccess1234
function onQueryError1234(error) {
   		alert("error: in onQueryError1234" + JSON.stringify(error));
  }//End of onQueryError1234



    
//Call to Approvers List - Master List to get group name
function CallMasterList(){
//alert('In CallMasterList');
	//GetGroupNamefromList();
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
}//End of CallMasterList


/*function GetGroupNamefromList(){
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
}//End of GetGroupNamefromList*/

/************************************* MAIN CALL *****************************/
function onQuerySuccess1(data) {
var results = data.d.results;
	$.each(results, function(index, dataRec) {
		var userEntry = {};
		userEntry.Group = dataRec.Approvers_x0020_Group.Title;
		//alert('Group Name:=' + userEntry.Group);
		//AddUserUsingREST(userEntry.Group);
		//AddUserUsingSPServices(userEntry.Group);
		GetGroupID(userEntry.Group);
	});//End of each
}//End of onQuerySuccess1
function onQueryError1(error) {
   		//alert("error: " + JSON.stringify(error));
  }//End of onQueryError1

function AddUserUsingSPServices(groupName){
//alert('In AddUserUsingSPServices:=' + editorNames + " " + groupName);
//var userName = editorNames.split('@')[0];
//alert(editorNames);
$().SPServices({
       operation: "AddUserToGroup",
       groupName: groupName,
       userLoginName: editorNames,
       async: false,
       completefunc: function(data,status){
          //alert(status);
          if(status=="success"){
          	alert("User added to group");
          	returnValue = true;
          }
          else{
          	alert("User NOT added to group!!");
          	returnValue = false;
          }
       }// End of completefunc
   }); //End  of SPServices
}//End of AddUserUsingSPServices 

function AddUserUsingREST(groupName, groupId){
//alert('In AddUserUsingREST:=' + groupName + " " + groupId);
//var groupId = "1763";
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups("+ groupId +")/users";
	  	//alert(queryUrl);      
      $.ajax({
        url: queryUrl,
        method: "POST",
        data:JSON.stringify({ '__metadata': {'type': 'SP.User'},'LoginName': editorNames}),  
	    headers: {  
	    	"Accept": "application/json; odata=verbose",  
	    	"content-type": "application/json; odata=verbose",
	    	"X-RequestDigest":$("#__REQUESTDIGEST").val()  
		}, 
        success: onQuerySuccess,
        error: onQueryError
      });
    });
  });
}//End of AddUserUsingREST

function onQuerySuccess(data) {
		//alert(data);
		alert("New User added successfully in SharePoint Group");     
     }//End of onQuerySuccess
function onQueryError(error) {
   		//alert("error in AddUserUsingREST: " + JSON.stringify(error));
  }//End of onQueryError
  
function GetGroupID(groupName){
//alert('In GetGroupID:=' + " " + groupName);
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getbyname('"+groupName+"')?$select=Id";   //?$select=id";
	  //alert(queryUrl);      
      $.ajax({
        url: queryUrl,
        method: "GET",
        //data:JSON.stringify({ '__metadata': {'type': 'SP.User'},'LoginName': editorNames}),  
	    headers: {  
	    	"Accept": "application/json; odata=verbose",	    	  
		}, 
        success: function(data){
	        var groupId = data.d.Id;
			//alert('In onQuerySuccess2:=' + groupId);
			AddUserUsingREST(groupName,groupId);						
        },
        error: onQueryError2
      });
    });
  });
  
} //End of GetGroupID

function onQuerySuccess2(data) {		
		groupID = data.d.Id;
		//alert('In onQuerySuccess2:=' + groupID);
		/*$.each(results, function(index, dataRec) {
		var userEntry = {}; 
			userEntry.id = dataRec.Id;
			groupIDTest = userEntry.id;
			alert("groupIDTest :="+ groupIDTest); 
		});    */
     }//End of onQuerySuccess2
function onQueryError2(error) {
   		//alert("error in GetGroupID: " + JSON.stringify(error));
  }//End of onQueryError2  
  
</script>
