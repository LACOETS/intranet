<script type="text/javascript">

$(document).ready(function(){	
	$("select[title='Content Type']").prop("disabled", true);
	$("input[title='Name Required Field']").prop("disabled", true);
	$("input[title='Title']").prop("disabled", true);
	$("select[title='Document Type']").prop("disabled", true);
	$("div[id='DataClassificationRSP_$containereditableRegion']").prop('contenteditable',false);
	$("[title='Browse for a valid choice']").hide();
	$("textarea[title='Lib Description']").attr('disabled','disabled');
});//End of Doc ready

</script>