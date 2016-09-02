<script type="text/javascript">
var listName = "";
var itemID ='';
var PostToExtranet, PostToIntranet, PostToDepartment;
var returnValue="";

$(document).ready(function(){	
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
	var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('"+listName+"')/items(" + itemID + ")?$select=Anniversary_x0020_PostToMain,Suggest_x0020_PostToWWW,Suggest_x0020_Post_x002d_To_x002";      
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
	 PostToDepartment = data.d.Anniversary_x0020_PostToMain;
	    //alert(PostToDepartment);
    
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
	if(PostToDepartment == true){
		//$("input[title='Post To Department']").hide();
		//$("input[checked='checked']").prop('disabled', true);
		//$('table.ms-formtable tr td:first-child span').text('Post To Department').prop('disabled', true);
		$('table.ms-formtable tr').each(function(){
		//alert($(this).text());
	  		var obj = $(this).find('td:eq(0)');  
	  //alert(obj.text());
	  		if($(obj).text().indexOf('Post To Department') > -1){
	 			//$(obj).next().find('span').find('input').hide();
	 			$(this).hide();  
	 }});//End of each	
			
		
	} 		
}//End of onQuerySuccess
  
function onQueryError1(error) {
    alert(error.statusText);
  }//End of onQueryError

function PreSaveAction() {	
	//alert('In PreSaveAction');
	$('table.ms-formtable tr').each(function(){		
	  		var obj = $(this).find('td:eq(0)');	 
	  		if($(obj).text().indexOf('Post To Intranet') > -1){
	 			if(($(obj).next().find('span').find('input').prop("checked")) == true){
	 				if(PostToDepartment == false){
						alert('Please check Post to Department before saving.');
						PostToDepartment = true;
						returnValue = true;
	 				}
	 				else
	 				{
	 					returnValue = false;
	 				}	 			
	 			}	 			  
	        }
	 });//End of each
	if(returnValue){
		return false;
	}
	else{
		return true;
	}
}//End of PreSaveAction



</script>