<script>
 $( document ).ready(function() {
	 alert('Item updated successfully');
	 alert($("select[title='Belongs to Project Required Field']option:selected").text());
	 debugger;
	 if ($("select[title='Belongs to Project Required Field']option:selected").text() == "")
	{
		
	   $("select[title='Belongs to Project Required Field']").prepend('<option value="" selected="selected">Select</option>');
	}
 
   });
</script>