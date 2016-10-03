<script src="//lacoets.github.io/intranet/Chart.min.js"></script>
<script>
//<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
//<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script> 
// Declare the variables.
var sitesGoalsChart = sitesGoalsChart || {};
// Array with colors for the pie chart.
sitesGoalsChart.ColorsILike = ['#00ABA9', '#FF0097', '#A200FF', '#8CBF26', '#A05000', '#E6771B8', '#F09609', '#1BA1E2', '#E51400', '#339933'];
sitesGoalsChart.Items = [];
sitesGoalsChart.Desc = '';
sitesGoalsChart.TotalGoals = 0;

 
// Override the rendering.
sitesGoalsChart.FieldRenderSetup = function () {
 
    	var override = {};
    	override.Templates = {};
		override.Templates.Header = sitesGoalsChart.CustomHeader;
    	//override.Templates.Item = sitesGoalsChart.CustomItem;
		override.Templates.Group = sitesGoalsChart.CustomGroup;
    	override.Templates.Footer = sitesGoalsChart.CustomFooter;
		override.BaseViewID = 99;
		override.ListTemplateType = 100;
		
		SPClientTemplates.TemplateManager.RegisterTemplateOverrides(override);
		
		
};
 
// Header, add the canvas for the chart and the placeholder for the description.
sitesGoalsChart.CustomHeader = function (ctx) {
			return '<p><span style="color:#1c7ec7;font-weight:bold;">Goals Summary Reports</span></p></br><canvas id="pieChart" width="200" height="200" style="float:left;margin-right:20px;"></canvas><div id="pieDesc"></div>';
	
}
 

 
 // Override item. Add all the values to the array to feed the pie chart.
sitesGoalsChart.CustomGroup = function (Ctx, group, groupId, listItem, listSchema, level, expand) {
 //if(ctx.listUrlDir.includes("Tasklist")==true){
	
	var itemColor = sitesGoalsChart.ColorsILike[sitesGoalsChart.Items.length];
	sitesGoalsChart.Items.push({
		value: parseInt(listItem[group + ".COUNT.group"]),
		color: itemColor,
		label:listItem[group]
	});
	var requestUri = _spPageContextInfo.webAbsoluteUrl + '/Pages/Goals.aspx?GoalStatus=' + listItem[group];
	// Add the label (title).
	sitesGoalsChart.Desc += '<p><a target="_blank" href="'+ requestUri + '"><span style="color:' + itemColor + ';font-weight:bold;">' + listItem[group] + ' (' +listItem[group + ".COUNT.group"] + ')</span></a></p>';
	sitesGoalsChart.TotalGoals = parseInt(sitesGoalsChart.TotalGoals) + parseInt(listItem[group + ".COUNT.group"]);
	return '';
 
}
 
// Override the footer, generate the pie chart.
sitesGoalsChart.CustomFooter = function (ctx) {
 //if(ctx.listUrlDir.includes("Tasklist")==true){
	
	var options = {
	};
 
	var piectx = $("#pieChart").get(0).getContext("2d");
	new Chart(piectx).Doughnut(sitesGoalsChart.Items, options);
	//var pie = $("#pieChart").getContext("2d");
	//new Chart(pie).Doughnut(sitesGoalsChart.Items, options);
	var requestUri = _spPageContextInfo.webAbsoluteUrl + '/Pages/Goals.aspx';
	sitesGoalsChart.Desc += '</br></br><p><a target="_blank" href="'+ requestUri + '"><span style="background: #1c7ec7 none repeat scroll 0 0;color: #fff;padding: 3px 5px;font-weight:bold;">Total Goals: (' +sitesGoalsChart.TotalGoals + ')</span></a></p>';
	// Add the description for all the values.	
	$('#pieDesc').html(sitesGoalsChart.Desc);
 
	return '';
 
}
//Now we load in our override to ensure that this Override is only applied to the intended ListView
ExecuteOrDelayUntilScriptLoaded(function(){

	var OldRenderListView = RenderListView;
	RenderListView = function(ctx,webPartID)
	{
		//Check using the F12 developer toolbar, which WPQ number is required for the webpart
		//if (ctx.wpq == 'WPQ3')
		if(ctx.ListTitle=="Goals")
		{
			ctx.BaseViewID = 99;
		}
		
		OldRenderListView(ctx,webPartID)
	
	}

},'ClientTemplates.js');
 
// Fire away! 
$(document).ready(sitesGoalsChart.FieldRenderSetup());
	
	
</script>