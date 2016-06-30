/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_5581aebcf63f42ddaa3f19a6d2f2de03(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_5581aebcf63f42ddaa3f19a6d2f2de03.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_Picture3Lines_Calendar_1Tab_PerfOpt.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['Content Web Parts'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = {'Picture URL': ['PublishingImage;PictureURL;PictureThumbnailURL;PictureURLOWSURLH'], 'SiteURL': ['LACOESiteURL;SiteUrlOWSURLH'], 'Body': ['Location'], 'Link URL': ['Path'], 'Line 1': ['Title'], 'DeptStartDate': ['RefinableDate03'], 'DeptEventType': ['EventTypeOrg;Title'], 'LinkURLOrg': ['ORGLinkUrlOWSURLH'], 'LACOEOrg': ['LACOEOrg'], 'OrgContact': ['PublishingContactOWSUSER;Title'], 'Location': ['Location;Title'], 'Line 2': ['ORGLinkUrlOWSURLH;Title'],'EventName': [], 'SecondaryFileExtension': null,'ContentTypeId': null};

    var cachePreviousItemValuesFunction = ctx['ItemValues'];
    ctx['ItemValues'] = function (slotOrPropName) {
        return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
    };

    ms_outHtml.push('', ''
    , ''
    );

    var strEventName = $getItemValue(ctx, "EventName");
    strEventName.overrideValueRenderer($contentLineText);
    strEventName = strEventName.managedPropertyName;
    //alert('Item Template' + " " + strEventName);
    
    if (strEventName.toString() == 'Next30Days' || strEventName.toString() == 'NewEvent' || strEventName.toString() == 'Training' || strEventName.toString() == 'Past30Days') {

        var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_picture3Lines_");
        var linkURL = $getItemValue(ctx, "Link URL");
        linkURL.overrideValueRenderer($urlHtmlEncodeValueObject);
        var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);
        
        var Title = $getItemValue(ctx, "Title");
        var Body = $getItemValue(ctx, "Body");
        var HintURL = $getItemValue(ctx, "SiteURL");
        var DeptStartDate = $getItemValue(ctx, "DeptStartDate");
        var DeptEventType = $getItemValue(ctx, "DeptEventType");
        var LinkURLOrg = $getItemValue(ctx, "LinkURLOrg");
        var LACOEOrg = $getItemValue(ctx, "LACOEOrg");
        var Location = $getItemValue(ctx, "Location");
        var OrgContact = $getItemValue(ctx, "OrgContact");


        var d = GetPSTDateParam(DeptStartDate);
        var datelen = d.toLocaleTimeString().length - 2;
        var ampm = d.toLocaleTimeString().substring(datelen);
        var EventStartDate = d.toDateString().replace("Sun", "").replace("Mon", "").replace("Tue", "").replace("Wed", "").replace("Thu", "").replace("Fri", "").replace("Sat", "");
        var EventStartTime = d.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }).replace(/(:\d{2}| [AP]M)$/, "") + " " + ampm;

        Title.overrideValueRenderer($contentLineText);
        Body.overrideValueRenderer($contentLineText);
        HintURL.overrideValueRenderer($contentLineText);

        DeptStartDate.overrideValueRenderer($contentLineText);
        DeptEventType.overrideValueRenderer($contentLineText);
        LinkURLOrg.overrideValueRenderer($contentLineText);
        LACOEOrg.overrideValueRenderer($contentLineText);
        Location.overrideValueRenderer($contentLineText);
        OrgContact.overrideValueRenderer($contentLineText);
        var line1 = $getItemValue(ctx, "Line 1");
        var line2 = $getItemValue(ctx, "Line 2");

        line1.overrideValueRenderer($contentLineText);
        line2.overrideValueRenderer($contentLineText);

        var LacoeItemURLProp = ctx.CurrentItem.Path;

        var pictureURL = $getItemValue(ctx, "Picture URL");
        var pictureId = encodedId + "picture";
        var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 304, 100, ctx.CurrentItem, "cbs-pictureOnTopImg", Title, pictureId);

        var containerId = encodedId + "container";
        var pictureLinkId = encodedId + "pictureLink";
        var dataContainerId = encodedId + "dataContainer";
        var TitleLinkId = encodedId + "TitleLink";
        var TitleId = encodedId + "Title";
        var BodyId = encodedId + "Body";
        var HintURLId = encodedId + "HintURL";

        var line1LinkId = encodedId + "line1Link";
        var line1Id = encodedId + "line1";
        var line2Id = encodedId + "line2";

        var DeptStartDateId = encodedId + "DeptStartDate";
        var DeptEventTypeId = encodedId + "DeptEventType";
        var LinkURLOrgId = encodedId + "LinkURLOrg";
        var LACOEOrgId = encodedId + "LACOEOrg";
        var LocationId = encodedId + "Location";
        var OrgContactId = encodedId + "OrgContact";
        var dataDisplayTemplateTitle = "ItemPicture3Lines";

        ms_outHtml.push(''
,''
,'	                         		 <ul class="dept-content nogrid-content1">'
,'	                          				'
,'	                          	     '
,''
,'							    <li class="cal-li-width1"> <div class="tbl-content">'
,'                                  <div class="tbl-contentcell"><a target="_blank" href="', LacoeItemURLProp ,'">', EventStartDate ,'</a></div></div></li>'
,'							    <li class="cal-li-width2"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', DeptEventType ,'</div></div></li>'
,'							    <li class="cal-li-width3"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', LACOEOrg ,'</div></div></li>'
,'							    <li class="cal-li-width4"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', Location ,'</div></div></li>'
,'	  						    <li class="cal-li-width5"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', EventStartTime ,'</div></div></li>'
,'	  						    <li class="cal-li-width6"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', OrgContact ,'</div></div></li> '
,'                         	    <li class="cal-li-width7"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell"><a target="_blank" href="', line2 ,'"> Click here </a></div></div> </li>'
,'                                '
,'                                </ul><div class="clear"></div>'
,'	                          	  '
,''
,''
,'                     '
);

}// End of If

if (strEventName.toString() == 'ProjectNext30Days' || strEventName.toString() == 'ProjectNewEvent' || strEventName.toString() == 'ProjectTraining' || strEventName.toString() == 'ProjectPast30Days') {
var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_picture3Lines_");
        var linkURL = $getItemValue(ctx, "Link URL");
        linkURL.overrideValueRenderer($urlHtmlEncodeValueObject);
        var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);
        
        var Title = $getItemValue(ctx, "Title");
        var Body = $getItemValue(ctx, "Body");
        var HintURL = $getItemValue(ctx, "SiteURL");
        var DeptStartDate = $getItemValue(ctx, "DeptStartDate");
        var DeptEventType = $getItemValue(ctx, "DeptEventType");
        var LinkURLOrg = $getItemValue(ctx, "LinkURLOrg");
        var LACOEOrg = $getItemValue(ctx, "LACOEOrg");
        var Location = $getItemValue(ctx, "Location");
        var OrgContact = $getItemValue(ctx, "OrgContact");


        var d = GetPSTDateParam(DeptStartDate);
        var datelen = d.toLocaleTimeString().length - 2;
        var ampm = d.toLocaleTimeString().substring(datelen);
        var EventStartDate = d.toDateString().replace("Sun", "").replace("Mon", "").replace("Tue", "").replace("Wed", "").replace("Thu", "").replace("Fri", "").replace("Sat", "");
        var EventStartTime = d.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }).replace(/(:\d{2}| [AP]M)$/, "") + " " + ampm;

        Title.overrideValueRenderer($contentLineText);
        Body.overrideValueRenderer($contentLineText);
        HintURL.overrideValueRenderer($contentLineText);

        DeptStartDate.overrideValueRenderer($contentLineText);
        DeptEventType.overrideValueRenderer($contentLineText);
        LinkURLOrg.overrideValueRenderer($contentLineText);
        LACOEOrg.overrideValueRenderer($contentLineText);
        Location.overrideValueRenderer($contentLineText);
        OrgContact.overrideValueRenderer($contentLineText);
        var line1 = $getItemValue(ctx, "Line 1");
        var line2 = $getItemValue(ctx, "Line 2");

        line1.overrideValueRenderer($contentLineText);
        line2.overrideValueRenderer($contentLineText);

        var LacoeItemURLProp = ctx.CurrentItem.Path;

        var pictureURL = $getItemValue(ctx, "Picture URL");
        var pictureId = encodedId + "picture";
        var pictureMarkup = Srch.ContentBySearch.getPictureMarkup(pictureURL, 304, 100, ctx.CurrentItem, "cbs-pictureOnTopImg", Title, pictureId);

        var containerId = encodedId + "container";
        var pictureLinkId = encodedId + "pictureLink";
        var dataContainerId = encodedId + "dataContainer";
        var TitleLinkId = encodedId + "TitleLink";
        var TitleId = encodedId + "Title";
        var BodyId = encodedId + "Body";
        var HintURLId = encodedId + "HintURL";

        var line1LinkId = encodedId + "line1Link";
        var line1Id = encodedId + "line1";
        var line2Id = encodedId + "line2";

        var DeptStartDateId = encodedId + "DeptStartDate";
        var DeptEventTypeId = encodedId + "DeptEventType";
        var LinkURLOrgId = encodedId + "LinkURLOrg";
        var LACOEOrgId = encodedId + "LACOEOrg";
        var LocationId = encodedId + "Location";
        var OrgContactId = encodedId + "OrgContact";
        var dataDisplayTemplateTitle = "ItemPicture3Lines";
        
        ms_outHtml.push(''
,''
,'	<ul class="dept-content">'
,'							    <li class="grid-2"> <div class="tbl-content">'
,'                                  <div class="tbl-contentcell"><a target="_blank" href="', LacoeItemURLProp ,'">', EventStartDate ,'</a></div></div></li>'
,'							    <li class="grid-2"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', DeptEventType ,'</div></div></li>'
,'							    <li class="grid-2"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', Location ,'</div></div></li>'
,'	  						    <li class="grid-2"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', EventStartTime ,'</div></div></li>'
,'	  						    <li class="grid-2"><div class="tbl-content">'
,'                                  <div class="tbl-contentcell">', OrgContact ,'</div></div></li> '
,'                               <li class="grid-2"><div class="tbl-content">'
,'                                 <div class="tbl-contentcell"><a target="_blank" href="', line2 ,'"> Click here </a></div></div> </li>     '
,'                                  '
,'                                </ul><div class="clear"></div>'
,''
,''
,'                     '
);

}
 

    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
}
function RegisterTemplate_5581aebcf63f42ddaa3f19a6d2f2de03() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Picture3Lines_OrgGoalActivity", DisplayTemplate_5581aebcf63f42ddaa3f19a6d2f2de03);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_Picture3Lines_Calendar_1Tab_PerfOpt.js", DisplayTemplate_5581aebcf63f42ddaa3f19a6d2f2de03);
    }
    //
    $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_Picture3Lines_Calendar_1Tab_PerfOpt.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_5581aebcf63f42ddaa3f19a6d2f2de03();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fItem_Picture3Lines_Calendar_1Tab_PerfOpt.js"), RegisterTemplate_5581aebcf63f42ddaa3f19a6d2f2de03);
}