<script type='text/javascript'>
$(document).ready(function ()
{ 
 
 /*=========================== start of Categories list======================*/
  var WebPath= _spPageContextInfo.webServerRelativeUrl;
  
  $('.empty-pictorial').find('.ms-rtestate-field').children('#ulPictorialDisc').remove();
	var pagination='<div class="box-paginations"><div class="pagination-cntrbx"><a class="custom-prev-is" id="custom-arrow11" href="javascript:void(0)"><img alt="img" src="/_catalogs/masterpage/LACOE/Images/last-prev.png" class="ms-rteStyle-Emphasis"/></a><a class="custom-prev-is" id="custom-arrow13" href="javascript:void(0)"><img alt="img" src="/_catalogs/masterpage/LACOE/Images/pagination-prev.png" class="ms-rteStyle-Emphasis"/></a><a class="custom-prev-is" id="custom-arrow14" href="javascript:void(0)"><img alt="img" src="/_catalogs/masterpage/LACOE/Images/pagination-next.png" class="ms-rteStyle-Emphasis"/></a><a id="custom-arrow12" class="custom-next-is" href="javascript:void(0)"><img src="/_catalogs/masterpage/LACOE/Images/last-next.png" alt=""/></a></div></div>';
	var sliderstuc='<ul id="ulPictorialDisc" class="cal-sliderdate5"></ul>';
	$('.empty-pictorial').find('.ms-rtestate-field').html(sliderstuc + pagination);
	
   $().SPServices({  
   webURL:WebPath,
   operation: "GetListItems",  
   async: false,  
   listName: "Categories", 
   completefunc: function (xData, Status) {  
           $(xData.responseXML).SPFilterNode("z:row").each(function()
           {
              var CategoryTitle = "";
              if( !(typeof $(this).attr("ows_Title") === 'undefined') )
              {
                CategoryTitle =   $(this).attr("ows_Title"); 
              }
              var CategoryID =   $(this).attr("ows_ID"); 
              var CategoryImageURL = "";
              if( !(typeof $(this).attr("ows_CategoryImage") === 'undefined') )
              { 
                CategoryImageURL =   $(this).attr("ows_CategoryImage").split(",")[0];             
              }
              var CatURL =  WebPath + "/SitePages/Category.aspx?CategoryID=" + CategoryID + "&SiteMapTitle=" + CategoryTitle;
              $('#ulPictorialDisc').append("<li><a target='_blank' href='"+ CatURL +"'> <img src=" + CategoryImageURL +" alt='img' /></a></li>");
            
            
           });  
    }  //End of comp function
    
   }); 
   //End of SPServices
   
/*===========================Categories  list- End ======================*/

});  

 //End of doc ready
 </script>
 