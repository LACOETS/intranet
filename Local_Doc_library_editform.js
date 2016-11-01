<script>
 $( document ).ready(function() {
	 console.log('hi');
	 console.log($("select[title='Belongs to Project Required Field']option:selected").text());
	 if ($("select[title='Belongs to Project Required Field']option:selected").text() == "")
	{
		
	   $("select[title='Belongs to Project Required Field']").prepend('<option value="" selected="selected">Select</option>');
	}
 
   });
</script>