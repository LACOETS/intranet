<script type="text/javascript">
var listName = "";
var itemID ='';
var PostToExtranet, PostToIntranet, PostToDepartment;
var returnValue="";

$(document).ready(function(){
	///###Added by Vishal : for selecting Image from sharepoint library ####////	
	$("input[title='Picture URL']").parent().append('</br><input type="button" onclick="OpenDialog(\'../../PublishingImages/Forms/Thumbnails.aspx\',\'Picture URL\')" value="Select Image"></input><br/>');
	///
	var currURL = window.location.href;
	//alert(currURL);	
	itemID = currURL.split('?ID=')[1].split('&')[0];
	//alert(itemID);
	if(currURL.indexOf('Announcements') > -1){
		listName = "Announcements";
	}
	else if(currURL.indexOf('LACOE%20Events') > -1){
		listName = "Events";
	}
	
	GetItemInfo(listName, itemID);
});//End of Doc ready

function GetItemInfo(listName, itemID){
//alert('In GetItem:-'+ listName);
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('"+listName+"')/items(" + itemID + ")?$select=Suggest_x0020_PostToWWW,Suggest_x0020_Post_x002d_To_x002";      
      //alert(queryUrl);
	  $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: onQuerySuccess1,
        error: onQueryError1
      });
    });
  });
}//End of GetItemInfo

function onQuerySuccess1(data) {
	 
	 PostToExtranet = data.d.Suggest_x0020_PostToWWW;
	    //alert(PostToExtranet);
	 PostToIntranet = data.d.Suggest_x0020_Post_x002d_To_x002;
	    //alert(PostToIntranet);	 
    
	if(PostToExtranet == true){
		//$("input[title='Post To Extranet']").hide();
		$('table.ms-formtable tr').each(function(){
		//alert($(this).text());
	  		var obj = $(this).find('td:eq(0)');  
	  //alert(obj.text());
	  		if($(obj).text().indexOf('Post To Extranet') > -1){
	 			//$(obj).next().find('span').find('input').hide();
	 			$(this).hide();  
	 }});//End of each	
			
				
	}//End of If
	
	
	if(PostToIntranet == true){
		//$("input[title='Post To Intranet']").hide();
		//$("input[checked='checked']").prop('disabled', true);
		//$('table.ms-formtable tr td:first-child span').text('Post To Intranet').prop('disabled', true);
		$('table.ms-formtable tr').each(function(){
		//alert($(this).text());
	  		var obj = $(this).find('td:eq(0)');  
	  //alert(obj.text());
	  		if($(obj).text().indexOf('Post To Intranet') > -1){
	 			//$(obj).next().find('span').find('input').hide();
	 			$(this).hide();  
	 }});//End of each	
			
		
	}			
}//End of onQuerySuccess
  
function onQueryError1(error) {
    alert(error.statusText);
  }//End of onQueryError


///###Added by Vishal : Select Image ####////
function OpenDialog(OpenDialog,Field) {
    var options = SP.UI.$create_DialogOptions();
    options.url = OpenDialog;
 this.GlobalField= Field;
    //options.showMaximized = true;
    options.dialogReturnValueCallback = Function.createDelegate(null, CloseCallback);
    SP.UI.ModalDialog.showModalDialog(options);
}

function CloseCallback(result, target) {
    if (result == SP.UI.DialogResult.OK) {
        $("input[title='"+GlobalField+"']").val(target);
    }
    if (result == SP.UI.DialogResult.cancel) {
        // Run Cancel Code
    }
}

</script>