<script type="text/javascript">

$(document).ready(function() {
///###Added by Vishal : for selecting Image from sharepoint library ####////	
$("input[title='Picture URL']").parent().append('</br><input type="button" onclick="OpenDialog(\'../../PublishingImages/Forms/Thumbnails.aspx\',\'Picture URL\')" value="Select Image"></input><br/>');
});

///###Added by Vishal : Select Image ####////
function OpenDialog(OpenDialog,Field) {
    var options = SP.UI.$create_DialogOptions();
    options.url = OpenDialog;
 this.GlobalField= Field;
    //options.showMaximized = true;
    options.dialogReturnValueCallback = Function.createDelegate(null, CloseCallback);
    SP.UI.ModalDialog.showModalDialog(options);
}

function CloseCallback(result, target) {
    if (result == SP.UI.DialogResult.OK) {
        $("input[title='"+GlobalField+"']").val(target);
    }
    if (result == SP.UI.DialogResult.cancel) {
        // Run Cancel Code
    }
}

</script>