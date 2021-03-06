SP.SOD.executeFunc("callout.js", "Callout", function () {    
    var _link = document.getElementById("ContactusLink1");
    var listCallout = CalloutManager.createNew({ 
        launchPoint: _link,
        beakOrientation: "leftRight", 
        ID: "CallOutID1", 
        title: "Feedback", 
        content: "<div class=\"ms-soften\" style=\"margin-top:2px; \"><hr/></div>"
+ "<div id='confirmationBLOCK1' style=\"margin-top:13px;display:none;\">Thank you for Contacting Us!</div>"
+ "<div class=\"callout-section\" style=\"margin-top:2px;width:95%;Height:190px; \"><label for='lblNoItem2' style='display:none;color:red;font-size:13px;'></label><label for='lblmsg2'>Add your Comments here..</br><i>(Accepts only 255 characters)</i></label><textarea maxlength='255' id='CommentsArea1' style=\"width:100%;height: 60%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\"></textarea><label for='lblmsg2'><i>For Long message, please feel free to send us an email at<a href="mailto: OurLacoe@lacoe.edu" style="color:blue">OurLacoe@lacoe.edu</a></label> </i></label></div>", 
    });

    //Creating a Submit Custom Action
    var customAction = new CalloutActionOptions();
    customAction.text = 'Submit';
    customAction.tooltip = 'Save Item in Issue List';
    customAction.onClickCallback = function(event, action)
    {
        var _contactUsTextarea = document.getElementById('CommentsArea1');
        //Adding the new Contact Us Item in the List.
        AddIteminList1(_contactUsTextarea.value);
		if(!$.trim($("#CommentsArea1").val())){
          	_contactUsTextarea.style.visibility='visible';
        }
        else{        
        	_contactUsTextarea.style.visibility='hidden';
        }
    };
    var _newCustomAction = new CalloutAction(customAction);
    listCallout.addAction(_newCustomAction);    
    //listCallout.set({ openOptions: { event: "hover" } });    
});

function AddIteminList1(_contactUsText)
{
   // alert('In AddIteminList1:=' + _contactUsText);
    //var context = new SP.ClientContext.get_current();
    if(!$.trim($("#CommentsArea1").val())){
    	//alert('Please enter a suggestion, textbox cannot be blank !!');
    	$("label[for='lblNoItem2']").css("display","block");
    	$("label[for='lblNoItem2']").html("Please enter a suggestion");
    	_contactUsTextarea2.style.visibility='visible';
    }
    else{	
	var context = new SP.ClientContext("https://lacoe.sharepoint.com");
    var web = context.get_web();
    var list = web.get_lists().getByTitle('Feedback');
    var listItemCreationInfo = new SP.ListItemCreationInformation();
    var newItem = list.addItem(listItemCreationInfo);
    newItem.set_item('Title', _contactUsText);
    newItem.update();
    context.executeQueryAsync(Function.createDelegate(this, this.success1), Function.createDelegate(this, this.failed));
	}
}

function success1() { 

    var _confirmationBLOCK1 = document.getElementById('confirmationBLOCK1');
    //alert('In success1:-' + _confirmationBLOCK1);
	$("label[for='lblmsg2']").hide();
    $("label[for='lblNoItem2']").css("display","none");
    $('#confirmationBLOCK1').css('display','block');
    overriteCustomAction1();
    
}

function failed(sender, args) { alert('failed to add a List Item:' + args.get_message()); }

function overriteCustomAction1()
{    
    //alert('In overriteCustomAction1');
    //Get Existing Callout    
    var launchPoint = document.getElementById('ContactusLink1');    
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    //alert('In overriteCustomAction1 callout:=' + callout);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var calloutAction = new CalloutAction({
            text: "Close window",
            tooltip: "Close Dialog Box",            
            onClickCallback: function() {                
                callout.close();
                ResetCustomAction1();
            }
        });

        //Handling [X] event
        callout.addEventCallback("closing", function () { CallOutonCloseEvent1(); });

        //overwrite the callout action to the callout control.
        //Here only one calloutAction i.e. Submit. So I am using [0] here        
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }    
}
function ResetCustomAction1() {
    //Get Existing Callout
    var launchPoint = document.getElementById('ContactusLink1');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null) {
        var custAct = callout.getActionMenu();

        //New Call Out Action
        var calloutAction = new CalloutAction({
            text: "Submit",
            tooltip: "Save Item in Feedback List",            
            onClickCallback: function () {
                var _contactUsTextarea = document.getElementById('CommentsArea1');

                //Adding the new Contact Us Item in the List.
                AddIteminList1(_contactUsTextarea.value);
                _contactUsTextarea.style.visibility = 'hidden';
            }
        });
        //Reset to Default.                
        custAct.getActions()[0] = calloutAction;
        callout.refreshActions();
    }
}
function CallOutonCloseEvent1()
{
    var launchPoint = document.getElementById('ContactusLink1');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null)
    {        
        var custAct = callout.getActionMenu();
        var actText = custAct.getActions()[0].getText();
        if (actText == "Close window")
        {
            ResetCustomAction1();
        }       
    }
}