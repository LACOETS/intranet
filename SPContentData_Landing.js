// Created By : Sanjay V
// Date : 04/03/2016
// To get Content query result using client object model

// getDate() is not giving proper moth hence created this method

$(document).ready(function() {

		search();		
	});
function getmonth(stringdate)
{
	var month= stringdate.toString().substring(4, 7);
	if(month=='Jan')
	return 1
	else if(month=='Feb')
	return 2
	else if(month=='Mar')
	return 3
	else if(month=='Apr')
	return 4
	else if(month=='May')
	return 5
	else if(month=='Jun')
	return 6
	else if(month=='Jul')
	return 7
	else if(month=='Aug')
	return 8
	else if(month=='Sep')
	return 9
	else if(month=='Oct')
	return 10
	else if(month=='Nov')
	return 11
	else if(month=='Dec')
	return 12
}
// To get query string for call type eg [ previous30, upcoming30, events, latest]
function getQueryStrings(keyType) {

 var assoc  = {};
          var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
          var queryString = location.search.substring(1); 
          var keyValues = queryString.split('&'); 
          for(var i in keyValues) { 
            var key = keyValues[i].split('=');
            if (key.length > 1) {
                assoc[decode(key[0])] = decode(key[1]);
            }
          } 
          return assoc[keyType];
} 

function getFormatedDate(date)
{
	return date.getFullYear()+'-'+ (date.getMonth()<10?'0':'') + getmonth(date) +'-'+ (date.getDate()<10?'0':'')+ date.getDate();	
}

// To get content query based on the call type from query string
function getQuery()
{
		 var currenturl= window.location.href.split('pages')[0];
		
     //debugger
	 var calltype = getQueryStrings("ReqType");
	 var category= getQueryStrings("Cat");
	  var date=new Date();
	  var todaysDate= getFormatedDate(date);
	  var queryDate=null;
	    date.setDate(date.getDate()+30);
	   	  queryDate = getFormatedDate(date);
	   	//debugger
	   	var eventTypeQuery= "Path:"+currenturl+" AND ContentTypeId:0x010200DA7B50D6E98CB44C92089F7F4A0AFAB6* AND RefinableDate05>="+todaysDate+ " AND IntranetApprovalOrg:Yes";
		if(calltype!='All')
		eventTypeQuery=eventTypeQuery+' AND EventTypeOrg="'+calltype+'"';
		if(category!='All' )
		eventTypeQuery=eventTypeQuery+' AND EventCategory="'+category+'"';
		//alert(eventTypeQuery);
		return eventTypeQuery;
		
	 
}
// Search event data base on the content type and others parameters 
function search()   
{  
    try   
    {  
	    SP.SOD.registerSod('sp.search.js', "/_layouts/15/sp.search.js");    
        SP.SOD.executeFunc('sp.search.js', 'Microsoft.SharePoint.Client.Search.Query.KeywordQuery', function() {  
            var context = SP.ClientContext.get_current();  
            var keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context);  
           
            var properties = keywordQuery.get_selectProperties(); 
		    properties.add('PostToMain'); 
		    properties.add('RefinableDate03'); // Start Date 
		    properties.add('EndDateOWSDATE');  // 
  		    properties.add('DeptEventType'); 
  		    properties.add('RefinableDate04'); // last modified date
  		    properties.add('RefinableDate05'); // end date
  		    properties.add('DepartmentApprovalOrg'); // end date
  		    properties.add('EventCategory'); // end date
  		    
            keywordQuery.set_queryText(getQuery());
            keywordQuery.set_rowLimit(500); //500 is max
            //keywordQuery.EnableSorting = true;  
           // keywordQuery.SortList = "Title";  
			keywordQuery.set_trimDuplicates(false);
            var searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context);  
            results = searchExecutor.executeQuery(keywordQuery);  

            context.executeQueryAsync(onQuerySuccess, onQueryFail);  
        });  
    }   
    catch (err)   
    {  
    
		alert(err);
    }  }

function onQuerySuccess() {

var jsonArr = []; 
$.each(results.m_value.ResultTables[0].ResultRows, function (){    
	    var startDate = new Date(this.RefinableDate03);
	    	    var enddate = new Date(this.EndDateOWSDATE);
	    	    enddate.setDate(enddate .getDate() + 1);
		 jsonArr.push({
		 	 
		       title: this.Title,
			   url:this.Path,	      
			   start:startDate .getFullYear()+'-'+ (startDate.getMonth()<10?'0':'') + getmonth(startDate) +'-'+ (startDate.getDate()<10?'0':'')+ startDate.getDate(),
		       end:enddate.getFullYear()+'-'+ (enddate.getMonth()<10?'0':'') + getmonth(enddate) +'-'+(enddate.getDate()<10?'0':'') + enddate.getDate()

        });     
    });
//    debugger

//jsonArr = jQuery.grep(jsonArr, function (element, index) {
  //              return element.RefinableDate03=='3/16/2016 12:00:00 PM' // retain appropriate elements
	//		  });

    CreateEventCalendar(jsonArr);
    }

function onQueryFail(sender, args) {
    alert('Query failed. Error:' + args.get_message());
}

function CreateEventCalendar(data)
{
//debugger
var date = new Date();
var formatedtodaysdate = date.getFullYear()+'-'+(date.getMonth()<10?'0':'') + date.getMonth()+'-'+date.getDate();
$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month'				 
			},
			
			//defaultDate: formatedtodaysdate,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: data,
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
		});
		
//$('#calendar').fullCalendar('gotoDate', currentDate);

}

