<script type="text/javascript">
var loggedinUserEmail='';
$(document).ready(function(){
var butnexist=$('#JoinButton').length;
if(butnexist==1)
{
$('#Zone1 #joincomunity').append('<span id="JoinText">Wish to join! Please click this to join and collaborate with our members.</span>');

}
	SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
        SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {                 
	        var userid = _spPageContextInfo.userId;
		    var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
		    var requestHeaders = { "accept": "application/json;odata=verbose" };
		    $.ajax({
		        url: requestUri,
		        contentType: "application/json;odata=verbose",
		        headers: requestHeaders,
		        success: function(data){
			        var Logg = data.d;
			        //get login name
			        var loginName = Logg.LoginName.split('|')[1];
			        //get display Email 
			        var EmailId=Logg.Email;
			        loggedinUserEmail=EmailId.toLowerCase().trim(); 
			       HideText(loggedinUserEmail);
		        },
		        error: onError
		    });	//End of ajax
	 });
 });

	    function onError(error) 
	    {
	        alert("error");
	    }
});// document ready
function HideText(loggedinUserEmail){
//alert(loggedinUserEmail);
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current(); 
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Community Members')/items?$select=Member/EMail&$expand=Member/Id";        
      $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        
success: function(data)
{
    var results = data.d.results;	
    $.each(results, function(index, dataRec) {
		var userEntry = {};
		userEntry.MemberName=dataRec.Member.EMail;
		var userEmail = userEntry.MemberName.toLowerCase().trim();
							
				if(loggedinUserEmail === userEmail)
				  {
				    //alert('User Match');
					//$("#joincomunityText").hide();						
					//$("#JoinText").hide();
					$("#Zone1").hide();
					//$(this).parents('#Zone1').remove();
				   }
				else
				  {
					//alert('User Mismatch');
					//$("#JoinText").show();
                  }
    });
  },//end of onQuerySuccess,
        error: function(error) 
	    {
	        alert("error");
	    }     
	    });
    });
  });
  
}//End of HideText
</script>