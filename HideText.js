﻿<script type="text/javascript">

        $(document).ready(function() {
        	var butnexist=$('#JoinButton').length;
    		if(butnexist==1)
		   {
		   			   $('#Zone1 #joincomunity').append('<span id="JoinText">Wish to join ! Please click this to join and collaborate with our members</span>');

		   }
		   var userName = $().SPServices.SPGetCurrentUser(
            	 {
					fieldName: "EMail"
				 });
			var loggedinUserEmail=userName.toLowerCase().trim();  
			//alert("loggedinUserEmail :=" + loggedinUserEmail);
    	    //alert(_spPageContextInfo.webAbsoluteUrl);
            $().SPServices({
                webURL: _spPageContextInfo.webAbsoluteUrl,				
                operation: "GetListItems",
                async: false,
                listName: "Community Members",
                CAMLViewFields: "<ViewFields Properties='True'/>",                
				CAMLQueryOptions: "<QueryOptions><ExpandUserField>True</ExpandUserField></QueryOptions>",
                completefunc: function (xData, Status) {
                    //alert(Status);
                    $(xData.responseXML).SPFilterNode("z:row").each(function () {
                       //alert(xData.responseText);
					   try{
							   //after adding CAMLQueryOptions this field returns all the fields propeties of user i.e. Displayname,ID,email id, domain login, sip ID etc all separate by #
							   var MemberName = $(this).attr("ows_Member");
							   //alert(MemberName);
							   // Splitting the resultant string with # give you string array of all the properties. In my case email ID is at index 3.
								var userEmail = MemberName.split('#')[4];
								//alert(userEmail);
							    // Below line is added to remove the trailing "," from email id
								userEmail = userEmail.substring(0,userEmail.indexOf(','));
							    //var delimiter = '|',start = 2;
								//var tokens = userEmail.split(delimiter).slice(start);
								//var splittedEmail = tokens.join(delimiter);
								//alert("splittedEmail:=" + userEmail.toLowerCase().trim());							  
							   if(loggedinUserEmail === userEmail.toLowerCase().trim()){
									 //alert();
										//$("#joincomunityText").hide();						
										//$("#JoinText").hide();
										$("#Zone1").hide();
										//$(this).parents('#Zone1').remove();
								   }
							else{
								//alert('Mismatch');
								//$("#JoinText").show();
								
							}
					   }
					   catch (e) {
							//alert('Exception: ' + e.message);
						}
                    });//End of each
                    
                } //End of complete func
                
                
                
            }); //End of SPServices
            
						
        });   //End of Doc Ready
    </script>