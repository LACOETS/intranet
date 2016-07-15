var currentSiteurl =  _spPageContextInfo.webServerRelativeUrl;
//alert(currentSiteurl);


$(document).ready(function(){
if(getTodaysSurvey())
{
	checkUserResponse();
}

} );


function getTodaysSurvey()
{

 
	var rowCount=0;
	var date= new Date();
	var todaysDate = date.getFullYear()+'-'+ (date.getMonth()<10?'0':'') + getmonth(date) +'-'+ (date.getDate()<10?'0':'')+ date.getDate();	
	
   $().SPServices({  
   webURL:currentSiteurl,
   operation: "GetListItems",  
   async: false,  
   listName: "Survey",
 CAMLQuery: "<Query><Where><And><Leq><FieldRef Name='Start_x0020_Date' /><Value IncludeTimeValue='TRUE' Type='DateTime'>"+todaysDate +"</Value></Leq><And><Geq><FieldRef Name='End_x0020_Date' /><Value IncludeTimeValue='TRUE' Type='DateTime'>"+todaysDate +"</Value></Geq><Eq><FieldRef Name='ApprovalStatus' /><Value Type='Text'>Yes</Value></Eq></And></And></Where></Query>",
   completefunc: function (xData, Status) {  

           $(xData.responseXML).SPFilterNode("z:row").each(function() {  
          // debugger
	          GenerateAnswer($(this).attr('ows_Answer'));
	          $('.poll-block').find('h2').text($(this).attr('ows_Question').toString());
			  $('#surveyId').val($(this).attr('ows_ID').toString())
	          rowCount++;
	          return;
           });  
    }  //End of comp function
    
   }); 

   if(rowCount==0)
	{

		$('.poll-vote-list').css('display','none');
        $('.poll-results-list').css('display','none');
        return false;

	}
	else
	return true;
	
}

function GenerateAnswer(val)
{
 var tags='';
	var answers = 	val.split('#;');
    for (i = 0; i < answers.length; i++) { 
	if(answers[i]!='')
	 	{
		tags+='<li class="input-type-radio">'+
					'<input id="poll-choice'+i+'" type="radio" name="radio"  >'+
					'<label for="poll-choice'+i+'">'+answers[i]+'</label>'+
					'</li>';
		}
	}
	$('.poll-vote-list').empty();
	$('.poll-vote-list').append(tags);
	$('.poll-vote-list').append('<li class=""> <a class="submit-button box-btn" href="#" onclick="CreateNewItem();">Submit</a> </li>');


}

function CreateNewItem() 
{ 
    var answer=$('input:radio:checked').next('label:first').html()	 
if(answer!=undefined)
{
	var currentUser =  _spPageContextInfo.userLoginName;
	var surveyId=$('#surveyId').val();
	$().SPServices({ 
	 webURL:currentSiteurl,
	 operation: "UpdateListItems", 
	 async: false, 
	 batchCmd: "New", 
	 listName: "SurveyResponse", 
	 valuepairs: [["Title", 'Title'], ["SurveyID", surveyId], ["UserID", currentUser], ["Answer", answer]], 
	 completefunc: function(xData, Status)
	  { 
	  if (Status== "success")
	  {
		  GetTotalResponse();
		  ShowInput(true);


		  //getTodaysSurvey();
		  //checkUserResponse();
		}

	 else
	  ShowInput(false);
	 
	 } 
	 });
	 }
	 else
	 {

	  alert('Please select your response before submitting');
	  $('.poll-vote-list').css('display','block');
      $('.poll-results-list').css('display','none');

	 }
}
 
function checkUserResponse()
{
//debugger


var result=false;
var currentUser =  _spPageContextInfo.userLoginName;

   $().SPServices({  
   webURL:currentSiteurl,
   operation: "GetListItems",  
   async: false,  
   listName: "SurveyResponse",
   CAMLQuery: "<Query><Where><Eq><FieldRef Name='UserID'/><Value Type='Text'>" + currentUser + "</Value></Eq></Where></Query>",  
   completefunc: function (xData, Status) {  
           $(xData.responseXML).SPFilterNode("z:row").each(function() {  
	         result=true;
	         GetTotalResponse();
	         
           });  
    }  //End of comp function
    
   }); 
   //End of SPServices
  ShowInput(result);    
}


function GetTotalResponse()
{
//debugger
  /* var totalResponse=0;
   var yesResponse=0;
   var noResponse=0;*/
   var answer = [];
	var surveyId=$('#surveyId').val();
   $().SPServices({  
   webURL:currentSiteurl,
   operation: "GetListItems",  
   async: false,  
   listName: "SurveyResponse",
   CAMLQuery: "<Query><Where><Eq><FieldRef Name='SurveyID'/><Value Type='Number'>" + surveyId+ "</Value></Eq></Where></Query>",  

    completefunc: function (xData, Status) {  
           $(xData.responseXML).SPFilterNode("z:row").each(function() {  
           answer.push($(this).attr('ows_Answer').toString());
	         /*if($(this).attr('ows_Answer').toString()=='Yes')
				yesResponse++;
			else
				noResponse++;
			totalResponse++;*/
           });  
    }  //End of comp function
   }); 
   
 
  var  counts = {};

jQuery.each(answer, function(key,value) {

  if (!counts.hasOwnProperty(value)) {
    counts[value] = 1;
  } else {
    counts[value]++;
  }
});
  
  //var answerslist=[];

  //var answer=$('.poll-vote-list input[radio]').next('label:first').html()	
    var anscount=0;
    var resultstr= '';
  $('.poll-vote-list input:radio').next('label').each(function()
  {

		 if(counts[$(this).text()]!=undefined)
		 {
		  anscount=parseInt(counts[$(this).text()]);
		 }
		 else
		 {
			anscount=0;
		 }
  		//answerslist.push($(this).text());
  		
  		resultstr+='<li>'+
		'<div class="">'+
		'<span>'+$(this).text()+'<span class="polling-status"> ('+anscount+' Polls)</span></span> <span class="percentage">'+Math.round(anscount*100/answer.length)+'%</span>'+
		'</div>'+
		'<div class="out-bar">'+
		'<div class="inner-bar"></div>'+
		'</div>'+
		'</li>';
  });
 
		resultstr+=' <li>'+
		'<div class="total-box"> Total Poll: <span>'+answer.length+'</span> </div>'+
		'</li>';

   /*var noPercent=Math.round(noResponse*100/totalResponse);
   var yePercent=Math.round(yesResponse*100/totalResponse);
   
   $('.poll-results-list').find('span').each(function( index ) {
//  debugger
		if($(this).text()=='#Yes')
			$(this ).text('('+yesResponse+' Poll)');
		if($(this ).text()=='#No')
			$(this ).text('('+noResponse+' Poll)');
		if($(this).text()=='#Yes%')
			$(this ).text(yePercent+'%');
		if($(this ).text()=='#No%')
			$(this ).text(noPercent+'%');
			

});*/
// New Code==================

 $('.poll-results-list').empty();
 $('.poll-results-list').append(resultstr);
 
 


//End


   
	/*$('.total-box').find('span').text(totalResponse);*/
 


}

function ShowInput(isshow)
{

	if(isshow)
   {
     $('.poll-vote-list').css('display','none');
     $('.poll-results-list').css('display','block');
     progressBar();
   }
   else
   {
   	 $('.poll-vote-list').css('display','block');
     $('.poll-results-list').css('display','none');
   }

}


// getDate() is not giving proper moth hence created this method
function getmonth(stringdate)
{
	var month= stringdate.toString().substring(4, 7);

	if(month=='Jan')
	return 01
	else if(month=='Feb')
	return 02
	else if(month=='Mar')
	return 03
	else if(month=='Apr')
	return 04
	else if(month=='May')
	return 05
	else if(month=='Jun')
	return 06
	else if(month=='Jul')
	return 07
	else if(month=='Aug')
	return 08
	else if(month=='Sep')
	return 09
	else if(month=='Oct')
	return 10
	else if(month=='Nov')
	return 11
	else if(month=='Dec')
	return 12
}

function progressBar(){

	$('.poll-results-list li .percentage').each(function() {
      var value = $(this).text();  
      $(this).closest('li').find('.nul').removeClass('inner-bar null').addClass('voted');
      $(this).closest('li').find('.inner-bar').animate({width: value}, 1000);
      $(this).closest('li').find('.voted').delay('1000').animate({width: value}, 1000);
      $('.percentage').delay('2000').fadeIn('fast');
    });


}








   
 



 