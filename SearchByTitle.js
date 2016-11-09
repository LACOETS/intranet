<div style="padding-left: 5px">
<div onkeydown="javascript:if (event.keyCode == 13) FilterList()"><input type="text" id="txtFilterBox" name="txtFilterBox"/><input type="button" value="Search" onclick="javascript:FilterList()"/>&nbsp;<input type="button" value="Clear" onclick="javascript:ClearList()"/></div></div>

<script type="text/javascript">

function FilterList()
{
    var loc= location.href;
    if (loc.indexOf("?") === -1)
       loc += "?";
    else
       //loc += "&";
    loc= loc.substring(0,loc.indexOf("?")) + "?";
    //location.href = loc + "ts=true";
    var txtFilterBox = document.getElementById('txtFilterBox');
    var txtFilterValue = txtFilterBox.value;
    window.location = loc + "FilterName=Title&FilterMultiValue=*" + txtFilterValue + "*";
}
function ClearList()
{
    var loc= location.href;
    if (loc.indexOf("?") === -1)
       loc = loc;
    else
    loc= loc.substring(0,loc.indexOf("?"));
    window.location = loc;
}
</script>

<script type="text/javascript">

function getQuerystring(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}

var FilterText = getQuerystring('FilterMultiValue');
FilterText = FilterText.replace("*","");
FilterText = FilterText.replace("*","");
var txtFilterBox = document.getElementById('txtFilterBox');
if(FilterText.length > 0)
{
    txtFilterBox.value = FilterText;
}
</script>