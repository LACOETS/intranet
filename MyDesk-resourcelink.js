<ul class="link-content" id="ulResourceLink"></ul>

<script type="text/javascript">
$(document).ready(function ()
{ 
 /*=========================== start of Resource link list======================*/
  
    var siteCollectionPath= _spPageContextInfo.webServerRelativeUrl;
    
  //  alert(siteCollectionPath);
/*	$('.empty-addresource').find('.ms-rtestate-field').children('#ulResourceLink').remove();
	var pagination='<div class="box-paginations"><div class="pagination-cntrbx"><a id="resourcelink-first" href="javascript:void(0);"><img src="../PublishingImages/last-prev.png" alt=""/></a><a id="resourcelink-prev" href="javascript:void(0);"><img src="../PublishingImages/pagination-prev.png" alt=""/></a><a id="resourcelink-next" href="javascript:void(0);"><img src="../PublishingImages/pagination-next.png" alt=""/></a><a href="javascript:void(0);" id="resourcelink-last"><img src="../PublishingImages/last-next.png" alt=""/></a></div><div class="clear"></div></div>';
	var sliderstuc='<ul id="ulResourceLink" class="link-content resourcelink-slider"></ul>'
	$('.empty-addresource').find('.ms-rtestate-field').html(sliderstuc + pagination);*/
   //$('#ulResourceLink').empty();
   

   var p = GetMySiteURL().split("/personal")[0] + "/person.aspx";
   var od = GetMySiteURL().replace("Blog/default.aspx","_layouts/15/onedrive.aspx");
   //var on = GetMySiteURL().replace("Blog/default.aspx","Documents/Notebooks");
   var on = "https://www.onenote.com/notebooks?auth=2";
   var mt = GetMySiteURL().split("/personal")[0] + "/person.aspx";
   var md = GetMySiteURL().split("/personal")[0] + "/person.aspx";

   var LinkArray = [p+";My Profile",on+";My OneNote", mt + ";My Tasks",od+";My OneDrive", md + ";My Documents"];
   $.each( LinkArray, function( key, value ) {
       // alert( key + ": " + value );
        $('#ulResourceLink').append("<li><a target='_blank' href="+ value.split(';')[0] +">" + value.split(';')[1] + "</a></li>");
    }); 
  
 

   
})// End of doc ready
/*===========================Resource link list- End ======================*/


</script>

