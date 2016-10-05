<style type="text/css">

.classic #htmlout a {background-repeat:no-repeat;background-position:0% 50%;height:16px;vertical-align:center;background-size:16px 16px;
                     display:block;text-indent:20px;line-height:16px;padding:2px 2px 2px 2px}
.classic #htmlout .link0 {background-repeat:no-repeat;background-position:0% 50%;height:32px;vertical-align:center;background-size:32px 32px;
                     display:block;text-indent:40px;line-height:32px}
.classic #htmlout h1 {margin-top:12px;clear:both}


</style>

<script src="/_layouts/15/sp.requestexecutor.js"></script>


<script type="text/javascript">
var headline = new Array("People","Documents","Sites","HashTags");
var ActorImg = new Array("/_layouts/15/images/person.gif","/_layouts/15/images/lg_ICGEN.gif","/_layouts/15/images/siteicon_16x16.png");

function doJSON(RESTuri, success, fail) 
{
var restUrl = _spPageContextInfo.webAbsoluteUrl + RESTuri;
var executor = new SP.RequestExecutor(_spPageContextInfo.webAbsoluteUrl);
executor.executeAsync(
{
url: restUrl,
method: "GET",
headers: { "Accept": "application/json; odata=verbose" },
success: success,
error: fail
}
);
}


function renderSuccess(data) 
{
  var jsonObject = JSON.parse(data.body);
  var n = document.getElementById('jsonout');
  n.innerHTML=data.body;
  var results = jsonObject.d.Followed.results;
  var str = '';
  var swapstr = '';
  var old = -1;
  var img = null;
  var SectionCount=0;
  var totalcount=0;

  for (j=0;j<4;j++)
  {
	SectionCount=0;
	swapstr='';
    //str += "<div class=\"accordion following-accordion following-block"+j+"\"><dl>";
    for (i=0;i<results.length;i++)
    {
      if (j!=results[i].ActorType) continue;
      //if ( old != results[i].ActorType ) str += "<dt>"+ headline[results[i].ActorType]+"</dt><dd><ul>";
      SectionCount=SectionCount+1;
	  totalcount=totalcount+1;
      img = results[i].ImageUri;
			if (img==null) img=ActorImg[results[i].ActorType];

			switch(results[i].ActorType)
			{
					case 0:
					  // Use case: depending on ActorType if you want to use indiviual markup for every item-type
					  swapstr += "<li><a title=\""+results[i].Name+"\" class=\"link"+results[i].ActorType+"\" style=\"background-image:url("+img+")\" href=\""+results[i].Uri+"\">"+results[i].Name+"</a></li>";
					  break;
					default:			
					  swapstr += "<li><a title=\""+results[i].Name+"\" class=\"link"+results[i].ActorType+"\" style=\"background-image:url("+img+")\" href=\""+results[i].Uri+"\">"+results[i].Name+"</a></li>";
					  break;					
			}

      old = results[i].ActorType;
    }
	if(SectionCount>0)
	{
		str+="<div class=\"accordion following-accordion following-block"+j+"\"><dl><dt>"+ headline[j]+" ("+SectionCount+")</dt><dd><ul>" + swapstr;
		str +="</ul></dd></dl></div>";
	}
    
  }
  
  n = document.getElementById('htmlout');
  if(totalcount>0)
  {
	n.innerHTML=str+"";  
  }
  else
  {
	  n.innerHTML="You are not following any People/Document/Site/#Tag";
  }
  
}
 
function renderFail(data, errorCode, errorMessage) 
{
  n = document.getElementById('htmlout');
  n.innerHTML=errorMessage;
}

</script>

<div class="classic">
<pre id="jsonout" style="display:none;"></pre>
<div id="htmlout" class="sitesfollow-box"></div>
</div>

<script type="text/javascript">
doJSON("/_api/social.following/my/followed%28types=15%29",renderSuccess,renderFail);
</script>
