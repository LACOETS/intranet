<script type="text/javascript">
$(document).ready(function ()
{ 

var Searchbox =   $("[title='Search...']");

var arDocs = new Array();

var WebPath= _spPageContextInfo.webServerRelativeUrl;
var index= 0;

 /*$().SPServices({  
   webURL:WebPath,
   operation: "GetListItems",  
   async: false,  
   listName: "Documents", 
   completefunc: function (xData, Status)
   {  
           $(xData.responseXML).SPFilterNode("z:row").each(function()
           {  
              //var DocName =   $(this).attr("ows_LinkFilename").split('.')[0]; 
              var DocName =   $(this).attr("ows_LinkFilename");
              arDocs[index] = DocName;
              index++;
           });  
           
    }  
    //End of comp function
    
   }); 
   //End of SPServices*/


  $(function () {
    var dataSrc = arDocs;
	    Searchbox.autocomplete({
	        source:dataSrc
	    });
       $( ".ui-helper-hidden-accessible").css( "display", "none" );
  
	});
        
 $("#btnReset").click(function () {
        
            var AnchorTagSearch = $("[title='Search']");

            $("[title='Search...']").val('*');
          
            AnchorTagSearch.click();
                 
            $("[title='Search...']").val('');
            
        });
        
    
});// doc ready end

  function ChangeUrl(page, url)
   {
     
        if (typeof (history.pushState) != "undefined") 
        {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else 
        
        {
            alert("Browser does not support HTML5.");
        }
    }

    $(document).on('click', '.document-searchbx .ms-srch-sb-searchLink', function() {
		setTimeout(function(){ 
			$('#benifits-pagination').pajinate({
				num_page_links_to_display :false,
				items_per_page : 3	
			}); 
		}, 1000);
   	})
   	
    $(document).on('keyup', '.document-searchbx', function(e)  {
   	 
 	var key = e.which;
 	if(key == 13)  // the enter key code
 	 	{
 	 	
   		setTimeout(function(){ 
			$('#benifits-pagination').pajinate({
				num_page_links_to_display :false,
				items_per_page : 3	
			}); 
			}, 1000);
  		}
	});



    
</script>