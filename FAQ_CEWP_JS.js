<script type="text/javascript">
$(document).ready(function ()
{
$(function($, undefined) 
{
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current(); 
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('FAQDetails')/items?$select=Title,Description"; 
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

  function onQuerySuccess(data) {
    var results = data.d.results;	
    $.each(results, function(index, dataRec) {
		var userEntry = {};
		userEntry.Title = dataRec.Title;
		userEntry.Description=dataRec.Description;
		   $('#FAQAccordion').append("<dl>" + 
                                	      "<dt>" + userEntry.Title  + "</dt>" + 
                                	      "<dd>" + userEntry.Description  + "</dd>" + 
                                       "</dl>");
    });
    $('.faqs-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
  }
  function onQueryError(error) {
    $("#keyContactPrimary").append(error.statusText)
  }
});
});  // document ready
</script>
<div class="faqs-pagination">
  <div class="accordion pagination-rowholder" id="FAQAccordion">
  </div>
  <div class="page_navigation">
  </div>
</div>

 
 
 
