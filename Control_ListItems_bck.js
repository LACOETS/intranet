function ULS9sP(){var o=new Object;o.ULSTeamName="Search Server";o.ULSFileName="Control_ListItems_bck.js";return o;}
function DisplayTemplate_3fbeb40cbae94e998c12fabd0092a478(ctx) {ULS9sP:;
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3fbeb40cbae94e998c12fabd0092a478.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='https://LACOETS.github.io/intranet/Control_ListItems_bck.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
); 
if (!$isNull(ctx.ClientControl) &&
    !$isNull(ctx.ClientControl.shouldRenderControl) &&
    !ctx.ClientControl.shouldRenderControl())
{
    return "";
}
ctx.ListDataJSONGroupsKey = "ResultTables";
var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

var noResultsClassName = "ms-srch-result-noResults";

var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{ULS9sP:;
    var iStr = [];
    iStr.push('<li>');
    iStr.push(itemRenderResult);
    iStr.push('</li>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
ms_outHtml.push(''
, '    <ul class="cbs-List"><div class="grid-4"><div class="block upcoming-event"><h2>Upcoming Events</h2> <div class="block-info"><ul>'
,''
,'            ', ctx.RenderGroups(ctx) ,''
, '       </ul></div></div></div> </ul>'
);
if (ctx.ClientControl.get_shouldShowNoResultMessage())
{
ms_outHtml.push(''
,'        <div class="', noResultsClassName ,'">', $noResults ,'</div>'
);
}
ms_outHtml.push(''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3fbeb40cbae94e998c12fabd0092a478() {ULS9sP:;

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_ListItems_bck", DisplayTemplate_3fbeb40cbae94e998c12fabd0092a478);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("https://LACOETS.github.io/intranet/Control_ListItems_bck.js", DisplayTemplate_3fbeb40cbae94e998c12fabd0092a478);
}

        $includeLanguageScript("https://LACOETS.github.io/intranet/Control_ListItems_bck.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");

}
RegisterTemplate_3fbeb40cbae94e998c12fabd0092a478();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("https://LACOETS.github.io/intranet/Control_ListItems_bck.js"), RegisterTemplate_3fbeb40cbae94e998c12fabd0092a478);
}
