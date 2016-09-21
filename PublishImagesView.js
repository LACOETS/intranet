<script type="text/javascript">
$(document).ready(function() {
$('.s4-itm-imgCbx-inner').click(function() {
var id= $(this).parent().parent().parent().parent().children().attr('id').substring(0, $(this).parent().parent().parent().parent().children().attr('id').length - 1)+'7';

var filext = $('#'+id).attr('src').substr($('#'+id).attr('src').lastIndexOf('.'));

var remterm=$('#'+id).attr('src').replace('_w/','').replace(filext,'');

var link = remterm.substr(remterm.lastIndexOf('_')+1);
remterm = remterm.replace('_'+link,'.'+link);
SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, remterm);

});
});
</script>