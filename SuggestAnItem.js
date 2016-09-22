<script type="text/javascript">
SP.SOD.executeFunc("callout.js", "Callout", function () {    
    var _link = document.getElementById("btnSuggest"); 
    var listCallout = CalloutManager.createNew({ 
        launchPoint: _link,
        beakOrientation: "leftRight", 
        ID: "CallOutID2", 
        title: "Glossary Suggestion", 
        content: "<div class=\"ms-soften\" style=\"margin-top:2px; \"><hr/></div>"
+ "<div id='confirmationBLOCK2' style=\"margin-top:13px;visibility:hidden;\">Thank you for your suggestion !</div>"
+ "<div class=\"callout-section\" style=\"margin-top:2px;width:95%;Height:200px; \"><textarea maxlength='255' id='CommentsArea2' style=\"width:100%;height: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\">Add your Suggestions here...</textarea></div>", 
    });

    //Creating a Submit Custom Action
    var customAction = new CalloutActionOptions();
    customAction.text = 'Suggest Glossary Name';
    customAction.tooltip = 'Save Item in Glossary Suggestions List';
    customAction.onClickCallback = function(event, action)
    {
        var _contactUsTextarea = document.getElementById('CommentsArea2');
        //Adding the new Contact Us Item in the List.
        AddIteminList1(_contactUsTextarea.value);
        _contactUsTextarea.style.visibility='hidden';
    };
    var _newCustomAction = new CalloutAction(customAction);
    listCallout.addAction(_newCustomAction);    
    //listCallout.set({ openOptions: { event: "hover" } });    
});

function AddIteminList1(_contactUsText)
{
   // alert('In AddIteminList1:=' + _contactUsText);
    //var context = new SP.ClientContext.get_current();
    var context = new SP.ClientContext("https://lacoe.sharepoint.com");
    var web = context.get_web();
    var list = web.get_lists().getByTitle('Glossary Suggestions');
    var listItemCreationInfo = new SP.ListItemCreationInformation();
    var newItem = list.addItem(listItemCreationInfo);
    newItem.set_item('Title', _contactUsText);
    newItem.update();
    context.executeQueryAsync(Function.createDelegate(this, this.success2), Function.createDelegate(this, this.failed));
}

function success2() { 

    var _confirmationBLOCK2 = document.getElementById('confirmationBLOCK2');
    //alert('In success2:-' + _confirmationBLOCK2);
    _confirmationBLOCK2.style.visibility = 'visible';
    overriteCustomAction2();
    
}

function failed(sender, args) { alert('failed to add a List Item:' + args.get_message()); }

function overriteCustomAction2()
{    
    //alert('In overriteCustomAction2');
    //Get Existing Callout    
    var launchPoint = document.getElementById('btnSuggest');    
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    //alert('In overriteCustomAction2 callout:=' + callout);
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
    var launchPoint = document.getElementById('btnSuggest');
    var callout = CalloutManager.getFromLaunchPoint(launchPoint);
    if (callout != null) {
        var custAct = callout.getActionMenu();

        //New Call Out Action
        var calloutAction = new CalloutAction({
            text: "Submit",
            tooltip: "Save Item in Glossary Suggestions List",            
            onClickCallback: function () {
                var _contactUsTextarea = document.getElementById('CommentsArea2');

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
    var launchPoint = document.getElementById('btnSuggest');
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
</script>
