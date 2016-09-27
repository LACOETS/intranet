<html>
<head>
<script type="text/javascript">
SP.SOD.executeFunc("callout.js", "Callout", function () {    
    var _link = document.getElementById("btnSuggest");
    var listCallout = CalloutManager.createNew({ 
        launchPoint: _link,
        beakOrientation: "leftRight", 
        ID: "CallOutID2", 
        title: "Suggest an Item", 
        content: "<div class=\"ms-soften\" style=\"margin-top:2px; \"><hr/></div>"
+ "<div id='confirmationBLOCK3' style=\"margin-top:13px;display:none;\">Thank you for your suggestion!</div>"
+ "<div class=\"callout-section\" style=\"margin-top:2px;width:95%;Height:200px; \"><label for='lblNoItem' style='display:none;color:red;font-size:13px;'></label><label for='lblmsg'>Add your Comments here...</label><textarea maxlength='255' id='CommentsArea3' style=\"width:100%;height: 90%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\"></textarea></div>", 
    });
    
      /*$("#CommentsArea3").mousedown(function(){      
      	alert('123');
      	//$(this).val('');
  	  });*/
    
    //Creating a Submit Custom Action
    var customAction = new CalloutActionOptions();
    customAction.text = 'Submit';
    customAction.tooltip = 'Save Item in Glossary Suggestion List';
    customAction.onClickCallback = function(event, action)
    {
        //alert('123');
		var _contactUsTextarea2 = document.getElementById('CommentsArea3');
        //Adding the new Contact Us Item in the List.
        AddIteminList12(_contactUsTextarea2.value);
        if(!$.trim($("#CommentsArea3").val())){
          	_contactUsTextarea2.style.visibility='visible';
        }
        else{        
        	_contactUsTextarea2.style.visibility='hidden';
        }
    };
    var _newCustomAction = new CalloutAction(customAction);
    listCallout.addAction(_newCustomAction);    
    //listCallout.set({ openOptions: { event: "hover" } });    
});
function AddIteminList12(_contactUsText12)
{
    //alert('In AddIteminList12:=' + _contactUsText12);
    //var ctx = new SP.ClientContext.get_current();
    if(!$.trim($("#CommentsArea3").val())){
    	//alert('Please enter a suggestion, textbox cannot be blank !!');
    	$("label[for='lblNoItem']").css("display","block");
    	$("label[for='lblNoItem']").html("Please enter a suggestion");
    	_contactUsTextarea2.style.visibility='visible';
    }
    else{    
	    var ctx = new SP.ClientContext("https://lacoe.sharepoint.com");
	    var web = ctx.get_web();
	    var list = web.get_lists().getByTitle('Glossary Suggestions');
	    var listItemCreationInfo = new SP.ListItemCreationInformation();
	    var newItem = list.addItem(listItemCreationInfo);
	    newItem.set_item('Title', _contactUsText12);
	    newItem.update();
	    ctx.executeQueryAsync(Function.createDelegate(this, this.success123), Function.createDelegate(this, this.failed123));
    }//End of else
}
function success123() { 
    var _confirmationBLOCK123 = document.getElementById('confirmationBLOCK3');
    //alert('In success123:-' + _confirmationBLOCK123);
    $("label[for='lblmsg']").hide();
    $("label[for='lblNoItem']").css("display","none");
    $('#confirmationBLOCK3').css('display','block');
    overriteCustomAction123();
    
}
function failed123(sender, args) { alert('failed123 to add a List Item:' + args.get_message()); }
function overriteCustomAction123()
{    
   // alert('In overriteCustomAction123');
    //Get Existing Callout    
    var launchPoint = document.getElementById('btnSuggest');    
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    //alert('In overriteCustomAction123 callout:=' + callout);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var calloutAction = new CalloutAction({
            text: "Close window",
            tooltip: "Close Dialog Box",            
            onClickCallback: function() {                
                callout.close();
                ResetCustomAction123();
            }
        });
        //Handling [X] event
        callout.addEventCallback("closing", function () { CallOutonCloseEvent123(); });
        //overwrite the callout action to the callout control.
        //Here only one calloutAction i.e. Submit. So I am using [0] here        
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }    
}
function ResetCustomAction123() {
    //Get Existing Callout
    var launchPoint = document.getElementById('btnSuggest');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null) {
        var custAct = callout.getActionMenu();
        //New Call Out Action
        var calloutAction = new CalloutAction({
            text: "Submit",
            tooltip: "Save Item in Glossary Suggestion List",            
            onClickCallback: function () {
                var _contactUsTextarea2 = document.getElementById('CommentsArea3');
                //Adding the new Contact Us Item in the List.
                AddIteminList12(_contactUsTextarea2.value);
                _contactUsTextarea2.style.visibility = 'hidden';
            }
        });
        //Reset to Default.                
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }
}
function CallOutonCloseEvent123()
{
    var launchPoint = document.getElementById('btnSuggest');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var actText = custAct.getActions()[0].getText();
        if (actText == "Close window")
        {
            ResetCustomAction123();
        }       
    }
}
</script>
</head>


</html>
