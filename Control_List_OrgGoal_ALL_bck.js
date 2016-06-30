/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_b695c965e33944ba82a73086c364f074(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_b695c965e33944ba82a73086c364f074.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_List_OrgGoal_ALL.js';
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

var str = ctx.ClientControl.get_propertyMappings();
var EventName = str.substring(str.indexOf("{EventName}:") + 12, str.indexOf("SecondaryFileExtension") - 1);
var ListRenderRenderWrapper;


if(EventName == 'Blogs'){
ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    iStr.push('<li>');
    iStr.push(itemRenderResult);
    iStr.push('</li>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
}//End of If
else{
ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    iStr.push('<dd>');
    iStr.push(itemRenderResult);
    iStr.push('</dd>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
}//End of Else

/*var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
{
    var iStr = [];
    iStr.push('<dd>');
    iStr.push(itemRenderResult);
    iStr.push('</dd>');
    return iStr.join('');
}
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;*/

//var str = ctx.ClientControl.get_propertyMappings();
//var EventName = str.substring(str.indexOf("{EventName}:") + 12, str.indexOf("SecondaryFileExtension") - 1);
//alert(EventName);

if (EventName == 'Blogs')
{
//alert('In If Blogs');
ms_outHtml.push(''
,'    <ul class="blogslider-links link-content">'
,''
,'            ', ctx.RenderGroups(ctx) ,''
,'     </ul>'
,'     <div class="clear"></div>'
);
}
else if (EventName == 'OrgGoal')
{
    ms_outHtml.push(''
 , '     <div class="tabBx overview" id="department-box" style="display:block">'
 , '                    <div class="content">'
 , '                    <div class="pagination-page" id="page_5">'
 , '                        <dl>'
 , '                          <dt>'
 , '                          <ul class="dept-caldr-header">'
 , '                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">STARS</div></div></li>'
 , '                            <li class="grid-4"><div class="tbl-content"><div class="tbl-contentcell">GOAL NAME</div></div></li>'
 , '                            <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PER(%)</div></div></li>'
 , '                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">TARGET DATE</div></div></li>'
 , '                            <div class="clear"></div>'
 , '                          </ul>'
 , '						 </dt>'
 , '                          </dl>'
 , '                          <dl class="pagination-rowholder">'
 , '                          ', ctx.RenderGroups(ctx), ''
 , '                          </dl>'
 );
}
else if (EventName == 'OrgGoalActivity')
{
    ms_outHtml.push(''
   , '     <div class="tabBx overview" id="activity-box">'
   , '                    <div class="content">'
   , '                    	<div class="pagination-page" id="page_6">'
   , '                        <dl>'
   , '                          <dt>'
   , ''
   , '                          <ul class="dept-caldr-header">'
   , '                            <li class="grid-2"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">START DATE</div></div></li>'
   , '                            <li class="grid-3"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">GOAL NAME</div></div></li>'
   , '                             <li class="grid-2"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">LEAD</div></div></li>'
   , '                            <li class="grid-2"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">PRIORITY</div></div></li>'
   , '                            <li class="grid-1"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">PER(%)</div></div></li>'
   , '                            <li class="grid-2"><div class="tbl-content">'
   , '                                  <div class="tbl-contentcell">TARGET DATE</div></div></li>'
   , '                          </ul>'
   , '                          	<div class="clear"></div>'
   , '                           </dt>'
   , '                           </dl>'
   , '                           <dl class="pagination-rowholder">'
   , '                                                '
   , '                          ', ctx.RenderGroups(ctx), ''
   , '                           </dl>'
   );
}
else if (EventName == 'OrgGoalDiscussion')
{
    ms_outHtml.push(''
, '      <div class="tabBx overview" id="targetdate-box">'
, '                    <div class="content">'
, '                    <div class="pagination-page" id="page_8">'
, '                        <dl>'
, '                          <dt>'
, '                          <ul class="dept-caldr-header">'
, '                            <li class="grid-2"><div class="tbl-content">'
, '                                  <div class="tbl-contentcell">DATE</div></div></li>'
, '                            <li class="grid-3"><div class="tbl-content">'
, '                                  <div class="tbl-contentcell">DISCUSSION TOPIC</div></div></li>'
, '                            <li class="grid-3"><div class="tbl-content">'
, '                                  <div class="tbl-contentcell">ANSWER YES OR NO</div></div></li>'
, '                            <li class="grid-4"><div class="tbl-content">'
, '                                  <div class="tbl-contentcell">GOAL NAME</div></div></li>'
, '                            <div class="clear"></div>'
, '                          </ul>'
, '                          </dt>'
, '                          </dl>'
, '                          <dl class="pagination-rowholder">               '
, '                          ', ctx.RenderGroups(ctx), ''
, '                           '
, '                           </dl>'
);
}
else if (EventName == 'OrgGoalRisk') {
    ms_outHtml.push(''
, ''
, '  <div class="tabBx overview" id="risk-box">'
, '                    <div class="content">'
, '                    <div class="pagination-page" id="page_7">'
, '                        <dl>'
, '                          <dt>'
, '                          <ul class="dept-caldr-header">'
, '                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">START DATE</div></div></li>'
, '                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">GOAL NAME</div></div></li>'
, '                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">LEAD</div></div></li>'
, '                            <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PRIORITY</div></div></li>'
, '                            <li class="grid-1"><div class="tbl-content"><div class="tbl-contentcell">PER(%)</div></div></li>'
, '                            <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TARGET DATE</div></div></li>'
, '                            <div class="clear"></div>'
, '                          </ul>'
, '                          </dt>'
, '                          </dl>'
, '                          <dl class="pagination-rowholder">'
, '                           ', ctx.RenderGroups(ctx), ''
, '                           </dl>'
);
}

else if (EventName == 'Next30Days') {
ms_outHtml.push(''
,'  <div class="tabBx overview" id="next30days-box" style="display:block">'
,'    <div class="content">'
,'      <div class="pagination-page" id="page_1">'
,'        <dl>'
,'          <dt>'
,'            <ul class="dept-caldr-header nogrid-header1">'
,'              <li class="cal-li-width1"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'              <li class="cal-li-width2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'              <li class="cal-li-width3"><div class="tbl-content"><div class="tbl-contentcell">ORG.</div></div></li>'
,'              <li class="cal-li-width4"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'              <li class="cal-li-width5"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'              <li class="cal-li-width6"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'              <li class="cal-li-width7"><div class="tbl-content"><div class="tbl-contentcell">WEBSITE LINK</div></div></li>'
,'            </ul>'
,'            <div class="clear"></div>'
,'          </dt>'
,'        </dl>'
,'        <dl class="pagination-rowholder">'
,'          ', ctx.RenderGroups(ctx) ,''
,'        </dl>'
);

}

else if (EventName == 'NewEvent') {
ms_outHtml.push(''
,'<div class="tabBx overview" id="newevent-box">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_2">'
,'                        <dl>'
,'                          <dt>'
,'  	                       		   <ul class="dept-caldr-header nogrid-header1">'
,'	                       		      <li class="cal-li-width1"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'		                              <li class="cal-li-width2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'		                              <li class="cal-li-width3"><div class="tbl-content"><div class="tbl-contentcell">ORG.</div></div></li>'
,'		                              <li class="cal-li-width4"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'		                              <li class="cal-li-width5"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'		                              <li class="cal-li-width6"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'		                              <li class="cal-li-width7"><div class="tbl-content"><div class="tbl-contentcell">WEBSITE LINK</div></div></li>'
,'		                          </ul>'
,'		                          <div class="clear"></div>'
,'		                          </dt>'
,'		                          </dl>'
,'		                          <dl class="pagination-rowholder">'
,'	                          		', ctx.RenderGroups(ctx) ,''
,'	                          	                         '
,'                      </dl>'
);

}

else if (EventName == 'Training') {
ms_outHtml.push(''
,'<div class="tabBx overview" id="etraining-box">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_3">'
,'                        <dl>'
,'                          <dt>'
,'	                       		   <ul class="dept-caldr-header nogrid-header1">'
,'	                       		      <li class="cal-li-width1"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'		                              <li class="cal-li-width2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'		                              <li class="cal-li-width3"><div class="tbl-content"><div class="tbl-contentcell">ORG.</div></div></li>'
,'		                              <li class="cal-li-width4"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'		                              <li class="cal-li-width5"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'		                              <li class="cal-li-width6"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'		                              <li class="cal-li-width7"><div class="tbl-content"><div class="tbl-contentcell">WEBSITE LINK</div></div></li>'
,'		                          </ul> <div class="clear"></div>'
,'		                          </dt>'
,'		                          </dl>'
,'		                          <dl class="pagination-rowholder">'
,'	                          		', ctx.RenderGroups(ctx) ,''
,'	                          	  	                          	  </dl>'
);
}

else if (EventName == 'Past30Days') {
ms_outHtml.push(''
,'<div class="tabBx overview" id="past30days-box">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_4">'
,'                        <dl>'
,'                          <dt>'
,'	                       		   <ul class="dept-caldr-header nogrid-header1">'
,'	                       		      <li class="cal-li-width1"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'		                              <li class="cal-li-width2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'		                              <li class="cal-li-width3"><div class="tbl-content"><div class="tbl-contentcell">ORG.</div></div></li>'
,'		                              <li class="cal-li-width4"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'		                              <li class="cal-li-width5"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'		                              <li class="cal-li-width6"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'		                              <li class="cal-li-width7"><div class="tbl-content"><div class="tbl-contentcell">WEBSITE LINK</div></div></li>'
,'		                          </ul>'
,'		                           <div class="clear"></div>'
,'		                           </dt>'
,'		                           </dl>'
,'		                           <dl class="pagination-rowholder">'
,'		                           ', ctx.RenderGroups(ctx) ,''
,'		                           '
,'	                          	  </dl>'
);
}

else if (EventName == 'ProjectNext30Days') {
ms_outHtml.push(''
,' '
,''
,'  <div class="tabBx overview" id="next30days-box" style="display:block">'
,'    <div class="content">'
,'      <div class="pagination-page" id="page_1">'
,'        <dl>'
,'          <dt>'
,'            <ul class="dept-caldr-header">'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">Website link</div></div></li>'
,'            </ul>'
,'            <div class="clear"></div>'
,'          </dt>'
,'        </dl>'
,'       <dl class="pagination-rowholder">'
,'          ', ctx.RenderGroups(ctx) ,''
,'        </dl>         '
,'        '
);
}

else if (EventName == 'ProjectNewEvent') {
ms_outHtml.push(''
,' '
,''
,'  <div class="tabBx overview" id="newevent-box">'
,'    <div class="content">'
,'      <div class="pagination-page" id="page_2">'
,'        <dl>'
,'          <dt>'
,'            <ul class="dept-caldr-header">'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">Website link</div></div></li>'
,'            </ul>'
,'            <div class="clear"></div>'
,'          </dt>'
,'        </dl>'
,'       <dl class="pagination-rowholder">'
,'          ', ctx.RenderGroups(ctx) ,''
,'        </dl>         '
,'        '
);
}

else if (EventName == 'ProjectTraining') {
ms_outHtml.push(''
,' '
,''
,'  <div class="tabBx overview" id="etraining-box">'
,'    <div class="content">'
,'      <div class="pagination-page" id="page_3">'
,'        <dl>'
,'          <dt>'
,'            <ul class="dept-caldr-header">'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">Website link</div></div></li>'
,'            </ul>'
,'            <div class="clear"></div>'
,'          </dt>'
,'        </dl>'
,'       <dl class="pagination-rowholder">'
,'          ', ctx.RenderGroups(ctx) ,''
,'        </dl>         '
,'        '
);
}

else if (EventName == 'ProjectPast30Days') {
ms_outHtml.push(''
,' '
,''
,'  <div class="tabBx overview" id="past30days-box">'
,'    <div class="content">'
,'      <div class="pagination-page" id="page_4">'
,'        <dl>'
,'          <dt>'
,'            <ul class="dept-caldr-header">'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">EVENT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">PLACE</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TIME</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">CONTACT</div></div></li>'
,'              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">Website link</div></div></li>'
,'            </ul>'
,'            <div class="clear"></div>'
,'          </dt>'
,'        </dl>'
,'       <dl class="pagination-rowholder">'
,'          ', ctx.RenderGroups(ctx) ,''
,'        </dl>         '
,'        '
);
}




else if (EventName == 'Restricted') {
   ms_outHtml.push(''
,'<div class="tabBx overview" id="restricted-box" style="display:block">'
,'                    <div class="content">'
,'                      <div class="pagination-page" id="page_9">'
,'                        <dl>'
,'                          <dt>'
,'	                       		  <ul class="dept-caldr-header">'
,'	                       		     <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED DATE</div></div></li>'
,'		                             <li class="grid-4"><div class="tbl-content"><div class="tbl-contentcell">TITLE</div></div></li>'
,'		                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED BY</div></div></li>'
,'          			             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TYPES</div></div></li>'
,'          			              <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TAGS</div></div></li>'
,'          			              </ul>'
,'		                           <div class="clear"></div>'
,'		                           </dt>'
,'		                           </dl>'
,'		                           <dl class="pagination-rowholder">'
,'	                               '
,'	                          		', ctx.RenderGroups(ctx) ,''
,'	                          		'
,'	                          	  </dl>'
);
}

else if (EventName == 'Shared') {
   ms_outHtml.push(''
,'<div class="tabBx overview" id="shared-box">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_10">'
,'                        <dl>'
,'                          <dt>'
,''
,'	                       		  <ul class="dept-caldr-header">'
,'	                       		     <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED DATE</div></div></li>'
,'		                             <li class="grid-4"><div class="tbl-content"><div class="tbl-contentcell">TITLE</div></div></li>'
,'		                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED BY</div></div></li>'
,'          			             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TYPES</div></div></li>'
,'          			             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TAGS</div></div></li>'
,'          			              </ul>'
,'		                           <div class="clear"></div>'
,'		                           </dt>'
,'		                           </dl>'
,'		                           <dl class="pagination-rowholder">'
,'	                        	     ', ctx.RenderGroups(ctx) ,''
,'	                        	  </dl>'
);

}

else if (EventName == 'Published') {
   ms_outHtml.push(''
,'<div class="tabBx overview" id="published-box">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_11">'
,'                        <dl>'
,'                          <dt>'
,''
,'	                       		  <ul class="dept-caldr-header">'
,'	                       		     <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED DATE</div></div></li>'
,'		                             <li class="grid-4"><div class="tbl-content"><div class="tbl-contentcell">TITLE</div></div></li>'
,'		                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED BY</div></div></li>'
,'          			             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TYPES</div></div></li>'
,'          			             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TAGS</div></div></li>'
,'          			              </ul>'
,'		                           <div class="clear"></div>'
,'		                           </dt>'
,'		                           </dl>'
,'		                           <dl class="pagination-rowholder">'
,'	                        	  	', ctx.RenderGroups(ctx) ,''
,'	                        	  	</dl>'
);

}

else if (EventName == 'GuestPublished') {
ms_outHtml.push(''
,'<div class="tabBx overview" id="published-box" style="display:block">'
,'                    <div class="content">'
,'                    <div class="pagination-page" id="page_8">'
,'                        <dl>'
,'                          <dt>'
,''
,'	                       		  <ul class="dept-caldr-header">'
,'	                       		     <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED DATE</div></div></li>'
,'		                             <li class="grid-4"><div class="tbl-content"><div class="tbl-contentcell">TITLE</div></div></li>'
,'		                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">UPDATED BY</div></div></li>'
,'          			                 <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TYPES</div></div></li>'
,'          			                 <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">TAGS</div></div> </li>              		                      '
,'          			              </ul>'
,'		                           <div class="clear"></div>'
,'		                           </dt>'
,'		                           </dl>'
,'		                           <dl class="pagination-rowholder">'
,'		                           '
,'	                        	  	', ctx.RenderGroups(ctx) ,''
,'	                        	  	</dl>'
);
}

else if (EventName == 'RecentDiscussion') {
ms_outHtml.push(''
,'     <div class="tabBx overview" id="RecentQA-box" style="display:block">'
,'                    <div class="content">'
,'<div class="pagination-page" id="page_12">'
,'                        <dl>'
,'                          <dt>'
,'                          <ul class="dept-caldr-header">'
,'                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'                            <li class="grid-6"><div class="tbl-content"><div class="tbl-contentcell">TOPIC</div></div></li>'
,'                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">ANSWER Yes or No</div></div></li>                      '
,'                          </ul><div class="clear"></div>'
,'                          </dt>'
,'                          </dl>'
,'                          <dl class="pagination-rowholder">'
,'                           ', ctx.RenderGroups(ctx) ,'  '
,'                           </dl>'
);

}

else if (EventName == 'AllDiscussion') {
ms_outHtml.push(''
,'     <div class="tabBx overview" id="all-box">'
,'                    <div class="content">'
,'<div class="pagination-page" id="page_13">'
,'                        <dl>'
,'                          <dt>'
,'                          <ul class="dept-caldr-header">'
,'                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'                            <li class="grid-6"><div class="tbl-content"><div class="tbl-contentcell">TOPIC</div></div></li>'
,'                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">ANSWER Yes or No</div></div></li>                      '
,'                          </ul><div class="clear"></div>'
,'                          </dt>'
,'                          </dl>'
,'                          <dl class="pagination-rowholder">'
,'                           ', ctx.RenderGroups(ctx) ,'  '
,'                           </dl>'
);
}

else if (EventName == 'MyDiscussion') {
ms_outHtml.push(''
,'      <div class="tabBx overview" id="mydiscussion-box">'
,'             <div class="content">'
,'<div class="pagination-page" id="page_14">'
,'                        <dl>'
,'                          <dt>'
,'                          <ul class="dept-caldr-header">'
,'                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'                            <li class="grid-6"><div class="tbl-content"><div class="tbl-contentcell">TOPIC</div></div></li>'
,'                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">ANSWER Yes or No</div></div></li>                      '
,'                          </ul><div class="clear"></div>'
,'                          </dt>'
,'                          </dl>'
,'                          <dl class="pagination-rowholder">'
,'                          '
,'                           ', ctx.RenderGroups(ctx) ,'  '
,'                           </dl>'
);
}

else if (EventName == 'UnAnswerDiscussion') {
ms_outHtml.push(''
,'      <div class="tabBx overview" id="Un-answered-ques-box">'
,'                    <div class="content">'
,'<div class="pagination-page" id="page_15">'
,'                        <dl>'
,'                          <dt>'
,'                          <ul class="dept-caldr-header">'
,'                             <li class="grid-2"><div class="tbl-content"><div class="tbl-contentcell">DATE</div></div></li>'
,'                            <li class="grid-6"><div class="tbl-content"><div class="tbl-contentcell">TOPIC</div></div></li>'
,'                            <li class="grid-3"><div class="tbl-content"><div class="tbl-contentcell">ANSWER Yes or No</div></div></li>                      '
,'                          </ul><div class="clear"></div>'
,'                          </dt>'
,'                          </dl>'
,'                          <dl class="pagination-rowholder">'
,'                           ', ctx.RenderGroups(ctx) ,'  '
,'                           </dl>'
);

}

if (ctx.ClientControl.get_shouldShowNoResultMessage())
{
ms_outHtml.push(''
,'        <div class="', noResultsClassName ,' custom-noresult">', $noResults ,'</div>'
);
}
ms_outHtml.push(''
,'                            <div class="page_navigation"></div>'
,'                           </div>'
,'                      '
,'                    </div>'
,'           '
,''
,'                  </div>'
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_b695c965e33944ba82a73086c364f074() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
    Srch.U.registerRenderTemplateByName("Control_List_OrgGoal_ALL", DisplayTemplate_b695c965e33944ba82a73086c364f074);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_List_OrgGoal_ALL.js", DisplayTemplate_b695c965e33944ba82a73086c364f074);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_List_OrgGoal_ALL.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_b695c965e33944ba82a73086c364f074();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fControl_List_OrgGoal_ALL.js"), RegisterTemplate_b695c965e33944ba82a73086c364f074);
}