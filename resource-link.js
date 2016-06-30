<script type="text/javascript">
$(document).ready(function ()
{ 
 /*=========================== start of Resource link list======================*/
  
  var siteCollectionPath= _spPageContextInfo.webServerRelativeUrl;
   $('#ulResourceLink').empty();
   $().SPServices({  
   webURL:siteCollectionPath,
   operation: "GetListItems",  
   async: false,  
   listName: "Resource Links",  
   CAMLQuery:"<Query><OrderBy><FieldRef Name='Modified' Ascending='False' /></OrderBy></Query>",
   completefunc: function (xData, Status) {  
           $(xData.responseXML).SPFilterNode("z:row").each(function() {  
               //tags = tags + "<li>" + $(this).attr("ows_Title") + "</li>";
               var ResURL =   $(this).attr("ows_ResourceLinks_x0020_URL").toString().split(",")[0]; 
							 var i=1;
               $('#ulResourceLink').prepend("<li><a target='_blank' href="+ ResURL +">" + $(this).attr("ows_ResourceLinks_x0020_URL").toString().split(",")[1] + "</a></li>");
           });  
    }  //End of comp function    
   }); 
   //End of SPServices   
/*===========================Resource link list- End ======================*/
/*=========================== start of PO tracker list======================*/
  
    ExecuteDepartmentList("POTracker","divPOTracker","PO Tracker");
    ExecuteDepartmentList("INOUTBoard","divINOUTBoard","IN/OUT Board");
    ExecuteDepartmentList("PublicSite","divPublicSite","Public Site"); 
    ExecuteDepartmentList("DepartmentProjects","divDeptProjects","Department Projects");
/*===========================PO tracker list- End ======================*/
});  

 //End of doc ready
function ExecuteDepartmentList(FilterValue,DivValue,AnchorValue)
{
 
/*=========================== start of PO tracker list======================*/
  var siteCollectionPath= _spPageContextInfo.webServerRelativeUrl;
   $('#' + DivValue).empty()
   $().SPServices({  
   webURL:siteCollectionPath,
   operation: "GetListItems",  
   async: false,  
   listName: "Links",
   CAMLQuery: "<Query><Where><Eq><FieldRef Name='Title'/><Value Type='Text'>" + FilterValue + "</Value></Eq></Where><OrderBy><FieldRef Name='Modified' Ascending='False' /></OrderBy></Query>",  
   completefunc: function (xData, Status) {  
           $(xData.responseXML).SPFilterNode("z:row").each(function(i) {  

            var hrefURL= "";
             if(FilterValue == "INOUTBoard" )
               {
                hrefURL=   $(this).attr("ows_SectionURL").toString() + "?web=1" ; 
               }
               else
               {
                 hrefURL=   $(this).attr("ows_SectionURL").toString() ; 
               }
							  $('#ulResourceLink').append("<li class='additionof-icon'><a target='_blank' href='"+ hrefURL + "'>" + AnchorValue + "</a></li>");
           }); 
					  
    }  //End of comp function
    
   }); 
   //End of SPServices
   
/*===========================PO tracker list- End ======================*/
}
$(window).load(function(){
	$('#ulResourceLink li.additionof-icon').each(function(i) {
		$(this).append("<a href='"+commonPOTrackerArray[i]+"' class='icon-common' target='_blank'></a>");
	});
})
</script>
<ul class="link-content resourcelink-slider" id="ulResourceLink"></ul>
<div class="box-paginations"><div class="pagination-cntrbx"><a id="resourcelink-first" href="javascript:void(0);" class="last-prev-img"></a><a id="resourcelink-prev" href="javascript:void(0);" class="pagi-prev-img"></a><a id="resourcelink-next" href="javascript:void(0);" class="pagi-next-img"></a><a href="javascript:void(0);" id="resourcelink-last" class="last-next-img"></a></div><div class="clear"></div></div>