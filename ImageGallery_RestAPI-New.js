
<html>
<head>
<title> Image Gallery </title>
 <script type="text/javascript">
 var FolderName;
 var FolderLink;
 var fileURL;
 		$(document).ready(function () 
		{ 
			//ImageRotator();
			GetAllItems();
			
			$('#searchbtn').click(function() 
			{			
				GetSelectedItems();
			});
			$('#resetbtn').click(function() 
			{			
				$("#searchText").val('');
				//$('ul.pagination-rowholder').find('li').each(function(){
				//$(this).hide();});
				//$('ul.pagination-rowholder').empty();
                 GetAllItems();               
			});
			PressEnterkey();
		});   //End of Doc Ready
																        
 //Start Image Rotator Code///////////////////////////////////////////////////////
        function ImageRotator()
        { 
          var fName = "LACOE Images/About Us";
			SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
			    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {			      			      	  
				  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('"+fName+"')/Files";
			     //alert('Query:-' + queryUrl);
			      $.ajax({
			        url: queryUrl,
			        method: "GET",
			        headers: {
			            	 "Accept": "application/json; odata=verbose"			        
    					},
			        success: onQuerySuccessRotator,
			        error: onQueryErrorRotator
			      });
			    });
			  });
        }//End of Image Rotator
        
        function onQuerySuccessRotator(data) {
		    var results = data.d.results;
		    $.each(results, function(index, dataRec) {
				var userEntry = {};	
				userEntry.Name = dataRec.Name;
				var imageURL = _spPageContextInfo.webAbsoluteUrl + "/LACOE%20Images/About%20Us/" + userEntry.Name;
				$('.tc-slider').append('<li><img src="'+imageURL+'" id="ImgRotateImage" alt="Rotate Image"/></li>');

		    });//End of each
  		}//End of onQuerySuccess
  		
  		$(window).load(function () 
  		{ 
  		        setTimeout(function(){ 
	  			$('.tc-slider').bxSlider({
		  		 auto:true,
		  		});
		  		$('#es-pagination').pajinate({
					num_page_links_to_display :false,
					items_per_page : 8,
					abort_on_small_lists: true
				});
  			}, 500);
  			
  		});
  		
  function onQueryErrorRotator(error) {
    alert(error.statusText)
  }
  //End Image Rotator Code///////////////////////////////////////////////////////
  
  //Start reset pagination Code///////////////////////////////////////////////////////		
  			function resetpaginations()
  			{	
  			$('#es-pagination').pajinate({
					num_page_links_to_display :false,
					items_per_page : 3,
					abort_on_small_lists: true
				});
  			}
  //End reset pagination Code///////////////////////////////////////////////////////	
 		
 //Start Trigger a button click on the Enter key in a text box//////////////////			
	  			function PressEnterkey()
	  			{	
	  			 $("#searchText").keypress(function(event)
					{
					    if(event.keyCode == 13)
						{
				        $("#searchbtn").click();
				    }
				 }); 
				}
 //End Trigger a button click on the Enter key in a text box//////////////////	 
           function GetAllItems(){ 
                SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
			    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {	
			   	 var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Image Gallery')/Folders?$filter=Name ne 'Forms'"; 
			      //alert('Query:-' + url );
			      $.ajax({
			        url: queryUrl,
			        method: "GET",
			        headers: {
			            	 "Accept": "application/json; odata=verbose"			        
    					},
			        success: function onQuerySuccess(data) {
									    var results = data.d.results;
									    $.each(results, function(index, dataRec) {
											var userEntry = {};			
											userEntry.Name = dataRec.Name;	
											FolderName= userEntry.Name;	
											var folderurl = "Image Gallery/"+FolderName;
											//var imgurl="https://lacoe.sharepoint.com/Image%20Gallery/Event1/01.jpg";
											FolderLink=_spPageContextInfo.webAbsoluteUrl + "/Image%20Gallery/Forms/Thumbnails.aspx?RootFolder=%2FImage%20Gallery%2F"+userEntry.Name;
											
											// function start get First FileUrl ByFolder Name 
											 var url  = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('"+folderurl+"')/Files";
										     //alert(url);
											 $.ajax({
												 url: url,
												 method: "GET",
												 headers: { "Accept": "application/json; odata=verbose" },
												 async: false,
												 success: function (data) {
												 	if(data.d.results.length>0){
												 		fileURL=data.d.results[0].ServerRelativeUrl;
												 	}
												 },
												 error: function (data) {
												 		
												 }
											 });
											// function End get First FileUrl ByFolder Name 												
											var imgurl= _spPageContextInfo.webAbsoluteUrl + fileURL;
											$('.pagination-rowholder').append('<li id="'+FolderName+'"><div class="eventHeading"><a href="'+FolderLink+'" target="_blank"><h3>'+ FolderName +'</h3></a></div><div class="eventsearchimgbx"><a href="'+FolderLink+'" target="_blank"><img src="'+ imgurl+'"></a></div></li>');
										    //$('.pagination-rowholder').append('<li id="'+FolderName+'"><div class="eventHeading"><h3>'+ FolderName +'</h3></div><div class="eventsearchimgbx"><img src="'+ imgurl+'"></div></li>');
									    });//End of each
							  		},
			        error: onQueryError
			      });
			      
			    });
	
   			});
			  
			  
		 }//End of GetAllItems
    function onQueryError(error) {
    alert(error.statusText)
     }
     
 
		function capitalize(name)
		{
		 
		    return name[0].toUpperCase() + name.slice(1);
		}

  function GetSelectedItems()
   {
    //var textVal = $("#searchText").val().toLowerCase();
    $('ul.pagination-rowholder').empty();	
    var textVal = $("#searchText").val();
    if (textVal != '') {
   SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
  			    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {	
			    	var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Image Gallery')/Folders?$filter=startswith(Name,'" + capitalize(textVal) + "')&filter=Name ne 'Forms'";			      			      	  
				 // var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Image Gallery')/Folders?$filter=startswith(Name,'" + textVal + "')";	
				  //	var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Image Gallery')/Folders?$filter=tolower(Name) eq '"+textVal+"'";
				  // alert('Query:-' + queryUrl);

			      $.ajax({
			        url: queryUrl,
			        method: "GET",
			        headers: {
			            	 "Accept": "application/json; odata=verbose"			        
    					},
			        success: function onQuerySuccess1(data) {
							    var results = data.d.results;
							    $.each(results, function(index, dataRec) {
									var userEntry = {};			
									userEntry.Name = dataRec.Name;
									FolderName= userEntry.Name;	
									var folderurl = "Image Gallery/"+FolderName;
									FolderLink=_spPageContextInfo.webAbsoluteUrl + "/Image%20Gallery/Forms/Thumbnails.aspx?RootFolder=%2FImage%20Gallery%2F"+userEntry.Name;
									
									//$('ul.pagination-rowholder').find('li').each(function(){
								    //$(this).hide();});
								   								
									// function start get First FileUrl ByFolder Name 
											 var url  = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('"+folderurl+"')/Files";
											 $.ajax({
												 url: url,
												 method: "GET",
												 headers: { "Accept": "application/json; odata=verbose" },
												 async: false,
												 success: function (data) {
												 	if(data.d.results.length>0){
												 		fileURL=data.d.results[0].ServerRelativeUrl;
												 	}
												 },
												 error: function (data) {
												 		
												 }
											 });
											// function End get First FileUrl ByFolder Name 
											
											var imgurl= _spPageContextInfo.webAbsoluteUrl + fileURL;
					//if (textVal.toUpperCase() == FolderName.toUpperCase()) {
									   $('.pagination-rowholder').append('<li id="'+FolderName+'"><div class="eventHeading"><a href="'+FolderLink+'" target="_blank"><h3>'+ FolderName +'</h3></a></div><div class="eventsearchimgbx"><a href="'+FolderLink+'" target="_blank"><img src="'+ imgurl+'"></a></div></li>');
                                        //}
               		        });//End of each
					  		},
			        error: onQueryError1
			      });
			      
				  });
			    
			  });
			  }
	    else {
            	alert("Please enter the folder Name !!");
            	GetAllItems();
            }
		}//End of GetSelectedItems
	
  function onQueryError1(error) 
  {
    alert(error.statusText)
    			        alert('fail');
  }

</script>

</head>
<style>
/*Image Gallery page start*/
.search-boxcomn { background: #fff none repeat scroll 0 0; border: 1px solid #1c7ec7; display: inline-block; width: 250px; }
.search-boxcomn input[type="text"] { float: left; padding: 6px 0 6px 10px; border: none; width: 85% }
.search-boxcomn input[type="button"] { float: left; padding: 5px 0; margin-left: 0; min-width: 0; width: 15%; background: url("https://lacoets.github.io/intranet/gray-search-small.png") no-repeat scroll center center }
.tc-search-cntr { padding: 25px 0; }
.tc-search-cntr .search-boxcomn + .search-boxcomn { margin-left: 25px; }
.eventSearch-box{position:relative; padding:25px 0;}
.event-search-pagin ul li{float:left; width:23.5%; margin-right:2%; margin-bottom:3%;}
.event-search-pagin ul li img{width:100%;}
.event-search-pagin ul li:nth-child(4n){margin-right:0}
.event-search-pagin ul li .eventHeading h3{font-size:22px; color:#1c7ec7; padding-bottom:10px;}
/*Image Gallery page End*/
</style>
<body>

<section class="training-classescntr">
				<div class="container">
						<div class="fullslider-images">
								<ul class="tc-slider">	
								</ul>
						</div>
						<div class="tc-cols-cntr">
								<div class="tc-search-cntr">
										<div class="search-boxcomn">
												<input type="text" placeholder="Search by Event Name" id="searchText">
												<input type="button" value="" id="searchbtn"/>
												<div class="clear"></div>
									    </div>
									    <input type="button" value="Reset" id="resetbtn" style="display:inline-block; vertical-align:top">
								</div>
								<div class="eventSearch-box">
										<div class="event-search-pagin" id="es-pagination">
												<ul class="pagination-rowholder">
														
												</ul>
												<div class="page_navigation"></div>
												<div class="clear"></div>
										</div>
								</div>
						</div>
				</div>
		</section></body>

</html>
