var currentSiteurl = _spPageContextInfo.webServerRelativeUrl;
//alert(currentSiteurl);
var returnVar=false;
$(document).ready(function () {
     //alert('In Doc ready');
    getTodaysSurvey();
    //alert(getTodaysSurvey());   
  
});//End of doc ready


function getTodaysSurvey() {
    //alert('In getTodaysSurvey');    
    //checkUserResponse();
    var date = new Date();
    var todaysDate = date.getFullYear() + '-' + (date.getMonth() < 10 ? '0' : '') + getmonth(date) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
    //alert('todaysDate:-' + todaysDate);
    SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current();
      var restURL = "/_api/web/lists/getbytitle('Survey')/items?$select=ID,Question,Answer,ApprovalStatus,Start_x0020_Date,End_x0020_Date&$filter=Start_x0020_Date le '" + todaysDate + "' and End_x0020_Date ge '" + todaysDate + "' and ApprovalStatus eq 'Yes'";	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + restURL; 
     // alert('queryUrl:=' + queryUrl);
      $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
        		//alert('In onQuerySuccess1');    
		    var rowCount = 0;
		    var results = data.d.results;	
		    //alert(results);
		    $.each(results, function(index, dataRec) {
				//alert(dataRec.Answer);
				var userEntry = {};		
				userEntry.Answer = dataRec.Answer;
				userEntry.Question = dataRec.Question;
				userEntry.ID = dataRec.ID;
				//alert('userEntry.Question :=' + userEntry.Question);
				//alert('userEntry.ID:=' + userEntry.ID);
				GenerateAnswer(userEntry.Answer);
		
				$('.poll-block').find('h2').text(userEntry.Question);
		        $('#surveyId').val(userEntry.ID);
		        rowCount++;
		        return;
		    });//End of each
		    
		    if (rowCount == 0) { //Question is not present in Survey
		        //alert('In if rowcount 0');
		        $('.poll-vote-list').css('display', 'none');
		        $('.poll-results-list').css('display', 'none');
		        //return returnVar;
		        //return false;
		    }//End of If
		    else // Question is present
		        {        	
		        	//alert('In else row count !=0');
		        	//returnVar=true;
		        	//return true; 
		        	checkUserResponse();
		        }		 
		      },
        error: onQueryError1
      });//End of ajax
    });
  });
}//End of getTodaysSurvey

/*function onQuerySuccess1(data) {
    alert('In onQuerySuccess1');    
    var rowCount = 0;
    var results = data.d.results;	
    //alert(results);
    $.each(results, function(index, dataRec) {
		//alert(dataRec.Answer);
		var userEntry = {};		
		userEntry.Answer = dataRec.Answer;
		userEntry.Question = dataRec.Question;
		userEntry.ID = dataRec.ID;
		//alert('userEntry.Question :=' + userEntry.Question);
		//alert('userEntry.ID:=' + userEntry.ID);
		GenerateAnswer(userEntry.Answer);

		$('.poll-block').find('h2').text(userEntry.Question);
        $('#surveyId').val(userEntry.ID);
        rowCount++;
        return;
    });//End of each
    
    if (rowCount == 0) { //Question is not present in Survey
        //alert('In if rowcount 0');
        $('.poll-vote-list').css('display', 'none');
        $('.poll-results-list').css('display', 'none');
        return returnVar;
        //return false;
    }//End of If
    else // Question is present
        {        	
        	alert('In else row count !=0');
        	returnVar=true;
        	return returnVar; 
        	//checkUserResponse();
        } 
        
  }//End of onQuerySuccess1
 */
 function onQueryError1(error) {
 			alert('error :=' + error.statusText);
    } //End of onQueryError1

function GenerateAnswer(val) {
    //alert('In GenerateAnswer :=' + val);
    var tags = '';
    var answers = val.split('#;');
    //alert('answers:=' + answers);
    for (i = 0; i < answers.length; i++) {
        if (answers[i] != '') {
            tags += '<li class="input-type-radio">' +
                        '<input id="poll-choice' + i + '" type="radio" name="radio"  >' +
                        '<label for="poll-choice' + i + '">' + answers[i] + '</label>' +
                        '</li>';
        }
    }
    $('.poll-vote-list').empty();
    $('.poll-vote-list').append(tags);
    $('.poll-vote-list').append('<li class=""> <a class="submit-button box-btn" href="#" onclick="CreateNewItem();">Submit</a> </li>');
}//End of GenerateAnswer

function CreateNewItem() {
    //alert('In CreateNewItem');
    var answer = $('input:radio:checked').next('label:first').html()
    //alert('answer:=' + answer);
    if (answer != undefined) {
        var currentUser = _spPageContextInfo.userLoginName;
        //alert(currentUser);
        var surveyId = $('#surveyId').val();
        //alert(surveyId);
        
        var itemType = GetItemTypeForListName('SurveyResponse');
        //alert('itemType :=' + itemType);
        var item = {
	        "__metadata": { "type": itemType },
	        "Title": "Title","SurveyID" : surveyId,"UserID" : currentUser,"Answer" : answer
    	};//End of item
    	//alert("JSON.stringify(item):=" + " " + JSON.stringify(item));
        SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    	  SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
		      var context = SP.ClientContext.get_current();
		      var restURL = "/_api/web/lists/getbytitle('SurveyResponse')/items";	  
			  var queryUrl = _spPageContextInfo.webAbsoluteUrl + restURL; 
			      $.ajax({
			        url: queryUrl,
			        type: "POST",
			        contentType: "application/json;odata=verbose",
			        data: JSON.stringify(item),
			        headers: {
			            "Accept": "application/json;odata=verbose",
		            	"X-RequestDigest": $("#__REQUESTDIGEST").val()		            	            	
		            },
			        success: function (data) {
			        	GetTotalResponse();
						//ShowInput(true);
					},
			        error: onQueryError2
			      });//End of ajax
	         });
	   });
}//End of If
    else {
        alert('Please select your response before submitting');
        $('.poll-vote-list').css('display', 'block');
        $('.poll-results-list').css('display', 'none');
    }//End of else
}//End of CreateNewItem

// Get List Item Type metadata
function GetItemTypeForListName(name) {
    //alert('In GetItemTypeForListName');
    return "SP.Data." + name.charAt(0).toUpperCase() + name.split(" ").join("").slice(1) + "ListItem";
}//End of GetItemTypeForListName

function onQuerySuccess2(data) {
//alert('In onQuerySuccess2');
GetTotalResponse();
ShowInput(true);
}//End of onQuerySuccess2

function onQueryError2(error) {
	alert('In onQueryError2' + error.statusText);
	ShowInput(false);
//alert('error :=' + error.statusText);
} //End of onQueryError2


function checkUserResponse() {
var surveyId = $('#surveyId').val();
//alert('In checkUserResponse :=' + surveyId);
var currentUser = _spPageContextInfo.userLoginName;
//alert('currentUser :=' + currentUser);

SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      //var context = SP.ClientContext.get_current();      
	  var restURL = "/_api/web/lists/getbytitle('SurveyResponse')/items?$select=UserID&$filter=UserID eq '" + currentUser + "' and SurveyID eq '" + surveyId + "'";	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + restURL; 
      $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: onQuerySuccess3,
        error: onQueryError3
      });//End of ajax
    });
  });
      
   
}//End of checkUserResponse
//checkuserresponse
function onQuerySuccess3(data) {
//alert('In onQuerySuccess3');
var result = false;

 var results = data.d.results;	
    $.each(results, function(index, dataRec) {
		result = true;
        GetTotalResponse();
    });//End of each
    //alert('result:-' + result);
    ShowInput(result);
}//End of onQuerySuccess3

function onQueryError3(error) {
	//alert('In onQueryError3');
	alert('error In onQueryError3:=' + error.statusText);
} //End of onQueryError3


function GetTotalResponse() {    
    var surveyId = $('#surveyId').val();
    //alert('In GetTotalResponse: surveyId ' + surveyId);
    SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current();      
	  var restURL = "/_api/web/lists/getbytitle('SurveyResponse')/items?$select=SurveyID,Answer&$filter=SurveyID eq '" + surveyId + "'";	  
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + restURL; 
      //alert(queryUrl);
      $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: onQuerySuccess4,
        error: onQueryError4
      });//End of ajax
    });
  });
}//End of GetTotalResponse

function onQuerySuccess4(data) {
//alert('In onQuerySuccess4');
var answer = [];

 var results = data.d.results;	
    //alert(results);
    $.each(results, function(index, dataRec) {
		var userEntry = {};		
		userEntry.Answer = dataRec.Answer;
		//alert(userEntry.Answer);
		answer.push(userEntry.Answer);
    });//End of each
    
    var counts = {};
    jQuery.each(answer, function (key, value) {

        if (!counts.hasOwnProperty(value)) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
    });
	
    var anscount = 0;
    var resultstr = '';
    $('.poll-vote-list input:radio').next('label').each(function () {
        if (counts[$(this).text()] != undefined) {
            anscount = parseInt(counts[$(this).text()]);
        }
        else {
            anscount = 0;
        }
        //alert("anscount :=" + anscount);
        resultstr += '<li>' +
		'<div class="">' +
		'<span>' + $(this).text() + '<span class="polling-status"> (' + anscount + ' Polls)</span></span> <span class="percentage">' + Math.round(anscount * 100 / answer.length) + '%</span>' +
		'</div>' +
		'<div class="out-bar">' +
		'<div class="inner-bar"></div>' +
		'</div>' +
		'</li>';
    });

    resultstr += ' <li>' +
    '<div class="total-box"> Total Poll: <span>' + answer.length + '</span> </div>' +
    '</li>';
    $('.poll-results-list').empty();
    $('.poll-results-list').append(resultstr);
    //alert('End of onQuerySuccess4');
    ShowInput(true);
}//End of onQuerySuccess4

function onQueryError4(error) {
		alert('error In onQueryError3:=' + error.statusText);
} //End of onQueryError4

function ShowInput(isshow) {
//alert('In ShowInput:=' + isshow);
    if (isshow) {
        $('.poll-vote-list').css('display', 'none');
        $('.poll-results-list').css('display', 'block');
        progressBar();
    }
    else {
        //alert('In Else ShowInput');
        $('.poll-vote-list').css('display', 'block');
        $('.poll-results-list').css('display', 'none');
    }
}//End of ShowInput

// getDate() is not giving proper moth hence created this method
function getmonth(stringdate) {
    var month = stringdate.toString().substring(4, 7);
    if (month == 'Jan')
        return 01
    else if (month == 'Feb')
        return 02
    else if (month == 'Mar')
        return 03
    else if (month == 'Apr')
        return 04
    else if (month == 'May')
        return 05
    else if (month == 'Jun')
        return 06
    else if (month == 'Jul')
        return 07
    else if (month == 'Aug')
        return 08
    else if (month == 'Sep')
        return 09
    else if (month == 'Oct')
        return 10
    else if (month == 'Nov')
        return 11
    else if (month == 'Dec')
        return 12
}//End of getmonth

function progressBar() {
//alert('In progressBar');
    $('.poll-results-list li .percentage').each(function () {
        var value = $(this).text();
        $(this).closest('li').find('.nul').removeClass('inner-bar null').addClass('voted');
        $(this).closest('li').find('.inner-bar').animate({ width: value }, 1000);
        $(this).closest('li').find('.voted').delay('1000').animate({ width: value }, 1000);
        $('.percentage').delay('2000').fadeIn('fast');
    });
}//End of progressBar
