<script type="text/javascript"> 
        $(document).ready(function () {           
		   alert('top');
		   var userName = $().SPServices.SPGetCurrentUser(
            	 {
					fieldName: "EMail"
				 });
			var loggedinUserEmail=userName.toLowerCase().trim();  
			alert("loggedinUserEmail :=" + loggedinUserEmail);
    	   
            $().SPServices({
                webURL: "https://lacoe.sharepoint.com/GreenTeam/",				
                operation: "GetListItems",
                async: false,
                listName: "Community Members",
                //CAMLViewFields: "<ViewFields Properties='True'/>",                
		//CAMLQueryOptions: "<QueryOptions><ExpandUserField>True</ExpandUserField></QueryOptions>",
                completefunc: function (xData, Status) {
                    $(xData.responseXML).SPFilterNode("z:row").each(function () {
                       alert(xData.responseText);
					   try{
							   //after adding CAMLQueryOptions this field returns all the fields propeties of user i.e. Displayname,ID,email id, domain login, sip ID etc all separate by #
							   var MemberName = $(this).attr("ows_Member");
							   alert(MemberName);
							   // Splitting the resultant string with # give you string array of all the properties. In my case email ID is at index 3.
								var userEmail = MemberName.split('#')[3];
								alert(userEmail);
							    // Below line is added to remove the trailing "," from email id
								userEmail = userEmail.substring(0,userEmail.indexOf(','));
							    var delimiter = '|',start = 2;
								var tokens = userEmail.split(delimiter).slice(start);
								var splittedEmail = tokens.join(delimiter);
								alert("splittedEmail:=" + splittedEmail.toLowerCase().trim());							  
							   if(loggedinUserEmail == splittedEmail.toLowerCase().trim()){
									 alert();
										$("#joincomunityText").hide();
										$("#JoinText").hide();
										$("#Zone1").hide();
										$(this).parents('#Zone1').remove();
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

