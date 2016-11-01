<script>
 $( document ).ready(function() {
	 if ($("select[title='Belongs to Project Required Field']option:selected").text() == "")
	{
	   $("select[title='Belongs to Project Required Field']").prepend('<option value="" selected="selected">Select</option>');
	}
 
   });
</script>