<script>
 $( document ).ready(function() {
	 
	 if ($("select[title='Belongs to Project Required Field'] :selected").text() == $("select[title='Belongs to Project Required Field'] :first").text())
	{
		
	   $("select[title='Belongs to Project Required Field']").prepend('<option value="" selected="selected">Select</option>');
	}
 
   });
   
function PreSaveAction() {
var dropvalue=$("select[title='Belongs to Project'] :selected").text();
debugger;
    if (dropvalue =="(None)"){
        alert("Please select belongs to Project!!");
        return false;
    }   
        return true;
}
</script>