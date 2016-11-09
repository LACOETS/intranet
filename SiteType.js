<script type="text/javascript">
$(document).ready(function(){
	var pageURL = window.location.href;
	var splittURL = pageURL.split('Lists')[0];
	var regex = new RegExp(/\//g);
	var count = splittURL.match(regex).length;
	if(count==4)
	$("select[title='Site Type']").val('Department');
	else if(count==5)
	$("select[title='Site Type']").val('Division');
	else if(count==6)
	$("select[title='Site Type']").val('Unit');
	else if(count==7)
	$("select[title='Site Type']").val('Section');
});//End of doc ready
</script>