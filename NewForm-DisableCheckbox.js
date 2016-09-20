<script type="text/javascript">

$(document).ready(function() {
///###Added by Vishal : for selecting Image from sharepoint library ####////	
$("input[title='Picture URL']").parent().append('</br><input type="button" onclick="OpenDialog(\'../../PublishingImages/Forms/Thumbnails.aspx\',\'Picture URL\')" value="Select Image"></input><br/>');
});
function PreSaveAction() {	
	var returnValue=false;

	//alert('In PreSaveAction');
	$('table.ms-formtable tr').each(function(){		
	  		var obj = $(this).find('td:eq(0)');	 
	  		if($(obj).text().indexOf('Post To Intranet') > -1){
	 			if(($(obj).next().find('span').find('input').prop("checked")) == true){
	 				//alert('In If:- Post to Intranet is checked');	 				
	 				var obj2 = $(this).next('tr');
	 				var obj3 = $(obj2).find('td:eq(0)');
	 				if($(obj3).text().indexOf('Post To Department') > -1){
	 					//alert('qqww');
	 					if(($(obj3).next().find('span').find('input').prop("checked")) == false){	 				
								alert('Please check Post to Department before saving.');
								//PostToDepartment = true;
								returnValue = true;
							}
	 				}
	 				else
	 				{
	 					returnValue = false;
	 				}	 			
	 			}	 			  
	        }
	 });//End of each
	//alert(returnValue);
	if(returnValue){
		return false;
	}
	else{
		return true;
	}
}//End of PreSaveAction

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