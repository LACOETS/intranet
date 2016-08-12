<div class="view-memberlisting">	
	<div class="allViewlistShow">  
		<ul id="TSSiteMembers"></ul> 
	</div> 
</div>

<script src="//secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/adal.min.js"></script>
<script type="text/javascript">
(function () {
	"use strict";
  // Some samples will use the tenant name here like "tenant.onmicrosoft.com"
  // I prefer to user the subscription Id 
  var subscriptionId = "3cd8663b-cc02-4958-bcf0-d6a9af9c9c71";
  // Copy the client ID of your AAD app here once you have registered one, configured the required permissions, and
  // allowed implicit flow https://msdn.microsoft.com/en-us/office/office365/howto/get-started-with-office-365-unified-api
  var clientId = "0b354934-c56d-491d-bb43-5665028fd0a0";
  var querystring="";
  window.config = {
    subscriptionId: subscriptionId,                 
    clientId: clientId,     
    postLogoutRedirectUri: window.location.origin,
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com'
    },
    cacheLocation: 'localStorage' // enable this for IE, as sessionStorage does not work for localhost.
  };
  var authContext = new AuthenticationContext(config);	
  // Check For & Handle Redirect From AAD After Login
  var isCallback = authContext.isCallback(window.location.hash);
  authContext.handleWindowCallback();	
  if (isCallback && !authContext.getLoginError()) {
    window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
  }	
  // If not logged in force login
  var user = authContext.getCachedUser();
  if (user) {
    // Logged in already
  } 
  else {
    // NOTE: you may want to render the page for anonymous users and render
    // a login button which runs the login function upon click.
    authContext.login();
  }	
  // Acquire token for Files resource.
  authContext.acquireToken(config.endpoints.graphApiUri, function (error, token) {
    // Handle ADAL Errors.
    if (error || !token) {
      console.log('ADAL error occurred: ' + error);
      return;
    }
	
	var requestGroupUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/RoleAssignments/groups?select=ID";   // pass group Id here
						//alert('requestGroupUri:=' + requestGroupUri);
						$.ajax({
							  type: "GET",
							  url: requestGroupUri,
							  async: false,
							  headers: {
										"accept":"application/json;odata=verbose",
										"content-type": "application/json;odata=verbose",
										"X-RequestDigest":$("#_REQUESTDIGEST").val()
										},
							}).done(function (data) {
											
								var items = data.d.results;
								
								for (var i = 0; i < items.length; i++) {           
								
								//alert(items[i].Id + " "  + items[i].Title);
								//items[i].Id === 1795 Added so as to remove Group Name - "SharingLinks.9f391407-58d3-4d02-8a2c-271dfb9d92b0.OrganizationView.efed7350-4b4f-42f3-a301-c3407dd517b2"
								if(items[i].Title === "Extranet Approvers" || items[i].Title === "Intranet Approvers" || items[i].Title === "Style Resource Readers" || items[i].Title.indexOf('Visitors')>-1 || items[i].Id === 1795){									
									
								}
								else{
									$("#TSSiteMembers").append("<li class='greenline'><h4>" + items[i].Title + "</h4></li>");
								 
								////
									var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/GetById("+items[i].Id+")/Users";   // pass group Id here	
									//requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/GetById("+items[i].Id+")/Users?$filter=items[i].Title eq 'Extranet Approvers'";
									
									$.ajax({
									  type: "GET",
									  url: requestUri,
									  async: false,
									  headers: {
												"accept":"application/json;odata=verbose",
												"content-type": "application/json;odata=verbose",
												"X-RequestDigest":$("#_REQUESTDIGEST").val()
												},
									}).done(function (data) {
													
										var items = data.d.results;
										//alert(items);
										querystring="";
										for (var i = 0; i < items.length; i++) {           
										//alert(items[i].Title);
										querystring=querystring + "startswith(displayName,'"+ items[i].Title +"') or " ;    
										//alert(querystring);
										}
											   
									  //console.log(response);
									}).fail(function () {
									  console.log("Fetching site members failed.");
									});
								////
								//alert(querystring.substring(0,querystring.lastIndexOf("or")-1));
						querystring=querystring.substring(0,querystring.lastIndexOf("or")-1);
						// Execute GET request to Files API.
						//var currentUserApiBaseUri = graphApiUri + "/beta/" + config.subscriptionId + "/users/" + user.userName;
						//var filesUri = currentUserApiBaseUri + "/files";
						//var filesUri = config.endpoints.graphApiUri + "/beta/me";
						//var filesUri = config.endpoints.graphApiUri + "/v1.0/groups?$select=displayName";
						//var filesUri = config.endpoints.graphApiUri + "/v1.0/groups?$filter=startswith(displayName,'TIS-ECS')";
						//var filesUri = config.endpoints.graphApiUri + "/v1.0/groups?$filter=startswith(displayName,'TIS-ECS') or startswith(displayName,'TIS-OPS')";
						//Original:var filesUri = config.endpoints.graphApiUri + "/v1.0/groups?$filter="+querystring;
						// --
						   //var filesUri = config.endpoints.graphApiUri + "/v1.0/groups/22aed7ba-18b3-4f0d-baff-04d5028b1726/members";
						
						/*********Intelli Code Starts*******/
						
						//alert('querystring:=' + querystring);
						var filesUriUsers = config.endpoints.graphApiUri + "/v1.0/users?$filter="+querystring;
						//alert('filesUriUsers:=' + filesUriUsers);
						$.ajax({
						  type: "GET",
						  url: filesUriUsers,
						  async: false,
						  headers: {
							'Authorization': 'Bearer ' + token,
						  }
						}).done(function (response) {
								//alert("Successfully fetched users !!.");
									for (var i = 0; i < response.valueOf("@odata").value.length; i++) {
										//alert(response.valueOf("@odata").value[i]);
										//alert("chota" + response.valueOf("@odata").value[i].id);
										var userImageURL = "//outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=" + response.valueOf("@odata").value[i].userPrincipalName + "&UA=0&size=HR64x64&sc=1468354588706";
										//alert(userImageURL);
										$("#TSSiteMembers").append("<li  class='normalline'>" +"<div class='member_info'><div class='prof_pic'><img class='lazy' data-original='"+userImageURL+"' src='https://lacoets.github.io/intranet/Generic-user-img.jpg.png'  /></div>" + "<div class='person_details'><p class='title'> <a href='https://lacoe-my.sharepoint.com/_layouts/15/me.aspx?u=" + response.valueOf("@odata").value[i].id + "&v=work' target='_blank'>" + response.valueOf("@odata").value[i].displayName + "</a></p><p class='email'> <a href='mailto:" + response.valueOf("@odata").value[i].userPrincipalName + "'>" + response.valueOf("@odata").value[i].userPrincipalName + "</a></p></div></div>" + "</li>");
										//$("#TSSiteMembers").append("<li  class='normalline'>" + response.valueOf("@odata").value[i].displayName + " (" + response.valueOf("@odata").value[i].userPrincipalName + ")" + "</li>");
									}							
								
								}).fail(function () {
						  alert("Fetching users failed.");
						});
						
						/*********Intelli Code Ends*******/
						
						
						var filesUri = config.endpoints.graphApiUri + "/v1.0/groups?$filter="+querystring;						
						//alert("filesUri :=" + filesUri);
						$.ajax({
						  type: "GET",
						  url: filesUri,
						  async: false,
						  headers: {
							'Authorization': 'Bearer ' + token,
						  }
						}).done(function (response) {
										console.log("Successfully fetched site members.");
							//alert(response);
										//var items = response.d.results; 
									for (var i = 0; i < response.valueOf("@odata").value.length; i++) { 
											//$("#TSSiteMembers").append("<li class='redline'><font color='Red'>" + response.valueOf("@odata").value[i].displayName + "</font></li>");
										 //alert(response.valueOf("@odata").value[i].displayName);
										//start
										var filesUriNew= config.endpoints.graphApiUri + "/v1.0/groups/"+ response.valueOf("@odata").value[i].id +"/members";
										//alert(filesUriNew);
										 $.ajax({
												  type: "GET",
												  url: filesUriNew,
												  async: false,
												  headers: {
													'Authorization': 'Bearer ' + token,
												  }
												}).done(function (response1) {
																
													console.log(response1);
																
															for (var j = 0; j < response1.valueOf("@odata").value.length; j++) { 
																console.log(response1.valueOf("@odata").value[j].displayName);
																$("#TSSiteMembers").append("<li  class='normalline'><div class='member_info'><div class='prof_pic'></div><div class='person_details'><p class='title'>" + response1.valueOf("@odata").value[j].displayName + "</p> <p class='email'><a href='mailto:" + response1.valueOf("@odata").value[j].userPrincipalName + "'>" + response1.valueOf("@odata").value[j].userPrincipalName + "</a></p></div></div>" + "</li>"); 
																//displayName userPrincipalName 
															} 
														   
												  //console.log(response);
												}).fail(function () {
												  console.log("Fetching site members failed.");
												});
										//end
									} 
								   
						  //console.log(response);
						}).fail(function () {
						  console.log("Fetching site members failed.");
						});
								
								
								}
								}//else close
									   
							  //console.log(response);
							}).fail(function () {
							  console.log("Fetching site Group failed.");
							});
	
	//Execute get request to all members from specific group
	//Start
						
	//End
	
						
  });
})();
</script>
