SP.SOD.executeFunc("callout.js", "Callout", function () {    
    var _link = document.getElementById("ContactusLink");
    var listCallout = CalloutManager.createNew({ 
        launchPoint: _link,
        beakOrientation: "leftRight", 
        ID: "CallOutID", 
        title: "Report an Issue", 
        content: "<div class=\"ms-soften\" style=\"margin-top:2px; \"><hr/></div>"
+ "<div id='confirmationBLOCK' style=\"margin-top:13px;visibility:hidden;\">Thank you for Contacting Us!</div>"
+ "<div class=\"callout-section\" style=\"margin-top:2px;width:95%;Height:200px; \"><label for='lblNoItem1' style='display:none;color:red;font-size:13px;'></label><label for='lblmsg1'>Add your Comments here...</label><textarea maxlength='255' id='CommentsArea' style=\"width:100%;height: 95%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\"></textarea></div>", 
    });

    //Creating a Submit Custom Action
    var customAction = new CalloutActionOptions();
    customAction.text = 'Submit';
    customAction.tooltip = 'Save Item in Issue List';
    customAction.onClickCallback = function(event, action)
    {
        var _contactUsTextarea = document.getElementById('CommentsArea');
        //Adding the new Contact Us Item in the List.
        AddIteminList(_contactUsTextarea.value);
		if(!$.trim($("#CommentsArea").val())){
          	_contactUsTextarea.style.visibility='visible';
        }
        else{        
			_contactUsTextarea.style.visibility='hidden';        }
        
    };
    var _newCustomAction = new CalloutAction(customAction);
    listCallout.addAction(_newCustomAction);    
    //listCallout.set({ openOptions: { event: "hover" } });    
});

function AddIteminList(_contactUsText)
{
    alert();
	if(!$.trim($("#CommentsArea").val())){
    	$("label[for='lblNoItem1']").css("display","block");
    	$("label[for='lblNoItem1']").html("Please report an Issue");
    	_contactUsTextarea.style.visibility='visible';
    }
	else{	
		//var context = new SP.ClientContext.get_current();
		var context = new SP.ClientContext("https://lacoe.sharepoint.com");
		var web = context.get_web();
		var list = web.get_lists().getByTitle('IntranetReportedIssue');
		var listItemCreationInfo = new SP.ListItemCreationInformation();
		var newItem = list.addItem(listItemCreationInfo);
		newItem.set_item('Title', _contactUsText);
		newItem.update();
		context.executeQueryAsync(Function.createDelegate(this, this.success), Function.createDelegate(this, this.failed));
	}
}

function success() { 

    var _confirmationblock = document.getElementById('confirmationBLOCK');
	$("label[for='lblmsg1']").hide();
    $("label[for='lblNoItem1']").css("display","none");
        $('#confirmationBLOCK').css('display','block');
    overriteCustomAction();
    
}

function failed(sender, args) { alert('failed to add a List Item:' + args.get_message()); }
function overriteCustomAction()
{    
    //Get Existing Callout    
    var launchPoint = document.getElementById('ContactusLink');    
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var calloutAction = new CalloutAction({
            text: "Close window",
            tooltip: "Close Dialog Box",            
            onClickCallback: function() {                
                callout.close();
                ResetCustomAction();
            }
        });

        //Handling [X] event
        callout.addEventCallback("closing", function () { CallOutonCloseEvent(); });

        //overwrite the callout action to the callout control.
        //Here only one calloutAction i.e. Submit. So I am using [0] here        
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }    
}
function ResetCustomAction() {
    //Get Existing Callout
    var launchPoint = document.getElementById('ContactusLink');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null) {
        var custAct = callout.getActionMenu();

        //New Call Out Action
        var calloutAction = new CalloutAction({
            text: "Submit",
            tooltip: "Save Item in Report an Issue List",            
            onClickCallback: function () {
                var _contactUsTextarea = document.getElementById('CommentsArea');

                //Adding the new Contact Us Item in the List.
                AddIteminList(_contactUsTextarea.value);
                _contactUsTextarea.style.visibility = 'hidden';
            }
        });
        //Reset to Default.                
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }
}
function CallOutonCloseEvent()
{
    var launchPoint = document.getElementById('ContactusLink');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var actText = custAct.getActions()[0].getText();
        if (actText == "Close window")
        {
            ResetCustomAction();
        }       
    }
}
