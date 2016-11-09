<script type="text/javascript">
$(document).ready(function (){
var od = GetMySiteURL().replace("Blog/default.aspx","_layouts/15/onedrive.aspx");
var obj = $("table[summary='My-Links'] tbody").find("tr > td").find("span a[title='My OneDrive']");
$(obj).attr('href',od);
});

</script>