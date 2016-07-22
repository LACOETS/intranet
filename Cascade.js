<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script>

<script type="text/javascript">
var ddEventType;
$(document).ready(function(){
ddEventType = $('select[title="Events Type Required Field"]').children("option").filter(":selected").text();
$('select[title="Events Type Required Field"]').on('change', function(e) {
        ddEventType = $('select[title="Events Type Required Field"]').children("option").filter(":selected").text();
        GetddlValues(ddEventType);  
      });
GetddlValues(ddEventType);

});//End of Doc ready

function GetddlValues(ddlValue){
SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {      	  
	  var queryUrl = "https://lacoe.sharepoint.com/" + "/_api/web/lists/getbytitle('Event Category')/items?$expand=Events_x0020_Type&$select=Id,Events_x0020_Type/Title,Events_x0020_Type/Id,Title&$orderby=Title asc&$filter=Events_x0020_Type/Title eq '" + ddlValue + "'"; 
      //alert(queryUrl);
	  $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: onQuerySuccess,
        error: onQueryError
      });
    });
  });
}
function onQuerySuccess(data) {
$('select[title="Events Category Required Field"]').empty();
    var userEntry = [];
    var results = data.d.results;	
    //alert(JSON.stringify(results));
    $.each(results, function(index,dataRec) {		
		userEntry.push({
				id:dataRec.Id,
				name:dataRec.Title		
		});//End of push
		//alert("In each userEntry"+ JSON.stringify(userEntry));
	});//End of each
		for(var j=0;j<userEntry.length;j++){
			$('select[title="Events Category Required Field"]').append($('<option>', { value: userEntry[j].id,text : userEntry[j].name}));	
  	}//End of for
  }//End of onQuerySuccess
  function onQueryError(error) {
    alert(error.statusText);
  }//End of onQueryError
</script>