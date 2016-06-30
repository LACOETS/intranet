<div id='keyContactPrimary' class="tabBx" style="display:block">
	<div class="content"></div>
</div>
<div id='keyContactSecondary' class="tabBx">
	<div class="content"></div>
</div>
<script>
//Primary key contact
var itemCount;
$(document).ready(function() {
	 
    var ownerName;
    var curSiteUrl= $().SPServices.SPGetCurrentSite();
    
	$().SPServices({  
	   //webURL:"https://lacoe365.sharepoint.com/sites/DevEnv/Organization",
	   webURL: curSiteUrl,
	   operation: "GetListItems",  
	   async: false,  
	   listName: "Key Contact",  
	   //CAMLQuery:"",
	   CAMLQuery: "<Query><Where><And><Eq><FieldRef Name='KeyContacts_x0020_Category' /><Value Type='Choice'>Primary</Value></Eq>" +
       	          "<Or><And><IsNull><FieldRef Name='KeyContact_x0020_End_x0020_Date' /></IsNull>" +
       	          "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
       	          "<And><Eq><FieldRef Name='IsPrimaryAlternate' /><Value Type='Boolean'>0</Value></Eq>" +
       	          "<And><Geq><FieldRef Name='KeyContact_x0020_End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
       	          "</And></Or></And></Where></Query>",
	   CAMLQueryOptions: "<QueryOptions><ExpandUserField>True</ExpandUserField></QueryOptions>",
	   completefunc: function (xData, Status) {  
	      
	       $(xData.responseXML).SPFilterNode("z:row").each(function() {  
	       //alert(xData.responseText);
	            itemCount = $(xData.responseXML).find("rs\\:data, data").attr("ItemCount");
	            //alert(itemCount);
	              ownerName = $(this).attr("ows_KeyContacts_x0020_EmployeeName");
	              //alert(ownerName);
	           });  
	      }
	});

	if (itemCount == '1')
	{
		// 0 - user type value (id+user), 1- account name, 2- personal email, 3- work email, 4 - name, 5 - profile picture path, 6 - , 7- Title
		var userEntry = {};
		var userArray = ownerName.split(",#");
		var userId = userArray[0].split(";#")[0];
		userEntry.Name = userArray[4];
		userEntry.Title = userArray[7];
		userEntry.Email = userArray[3];
		var WorkPhone;
		$().SPServices({
		    operation: 'GetUserProfileByName',
		    AccountName:userArray[1],
		    async: false,
		    completefunc: function (xData, Status) {
		        $(xData.responseXML).find("PropertyData > Name:contains('WorkPhone')").each(function() {
		        WorkPhone= $(this).parent().find("Values").text();
		        });
		      }     
		    });
	    var profileImg1;
	    var pictureURL1 = "/_layouts/15/userphoto.aspx?size=L&accountname=" + $htmlEncode(userEntry.Email);
	    if(userArray[5]==undefined)
	    {
	   		profileImg1 = "<div class='keyprofilepic'><img src='/sites/DevEnv/_catalogs/masterpage/images/no-user-img-dummy.jpg' alt='No image found for this profile' ></div>";
	    }
	    else
	    {
	    	profileImg1 = "<div class='keyprofilepic'><img src='" + pictureURL1  + "' alt='No image found for this profile' ></div>";
	    }
		
		if (userEntry.Name)
        {
            var username=userEntry.Name
        }
        else if(userEntry.Name=='' || userEntry.Name==null || userEntry.Name==undefined)
        {
            var username='--';
        }
        if (userEntry.Title)
        {
            var usertitle=userEntry.Title
        }
        else if(userEntry.Title=='' || userEntry.Title==null || userEntry.Title==undefined)
        {
            var usertitle='--';
        }
        if (userEntry.Email)
        {
            var useremail=userEntry.Email
        }
        else if(userEntry.Email=='' || userEntry.Email==null || userEntry.Email==undefined)
        {
            var useremail='--';
        }
        if (WorkPhone)
        {
            var userphone=WorkPhone
        }
        else if(WorkPhone=='' || WorkPhone==null || WorkPhone==undefined)
        {
            var userphone='--';
        }
			
        //var html=""+profileImg+"<div class='owner-info'><ul><li>Name: <span>"+username+"</span></li><li>Title: <span>"+usertitle+"</span></li><li>Email ID: <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span></li><li>Phone No: <span>"+userphone+"</span></li></ul></div>";
        var html=""+profileImg1+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
        //		$('div[data-name="KeyContact"]').append(html);
        //	$('div[id="MSOZoneCell_WebPartWPQ2"]').append(html);
        //$('div[id="keyContactPrimary"]').append(html);
        $('#keyContactPrimary .content').append(html);		
	}//end of IF
	else
	{
	
	//camlquery change date to today
      var primaryCount;
	  var secPrimeName;
	  $().SPServices({  
	   webURL: curSiteUrl,
	   operation: "GetListItems",  
	   async: false,
	   listName: "Key Contact",
	   CAMLQuery: "<Query><Where><And><Eq><FieldRef Name='KeyContacts_x0020_Category' /><Value Type='Choice'>Primary</Value></Eq>" +
                  "<And><Eq><FieldRef Name='IsPrimaryAlternate' />" +
                  "<Value Type='Boolean'>1</Value></Eq>" +
                  "<And><Geq><FieldRef Name='KeyContact_x0020_End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
                  "</And></And></Where></Query>",
	   CAMLQueryOptions: "<QueryOptions><ExpandUserField>True</ExpandUserField></QueryOptions>",  
	   completefunc: function (xData, Status) {
	   
	   $(xData.responseXML).SPFilterNode("z:row").each(function() {
	   //alert(xData.responseText);
	   primaryCount= $(xData.responseXML).find("rs\\:data, data").attr("ItemCount");
	   if (primaryCount) secPrimeName= $(this).attr("ows_KeyContacts_x0020_EmployeeName");
	              //alert(secPrimeName);
	         });
	   }
	   });
	   if (primaryCount == '1')
	   {
		   var secPrimeEntry = {};
		   var secPrimeArray= secPrimeName.split(",#");
		   secPrimeEntry.Name = secPrimeArray[4];
		   secPrimeEntry.Title = secPrimeArray[7];
		   secPrimeEntry.Email = secPrimeArray[3];
		   var SecPrimeWorkPhone;
			
			$().SPServices({
			    operation: 'GetUserProfileByName',
			    AccountName:secPrimeArray[1],
			    async: false,
			    completefunc: function (xData, Status) {
			        $(xData.responseXML).find("PropertyData > Name:contains('WorkPhone')").each(function() {
			        //alert(SecPrimeWorkPhone);
			        SecPrimeWorkPhone= $(this).parent().find("Values").text();
			        });
			      }     
			    });
		    var profileImg2;
		    var pictureURL2 = "/_layouts/15/userphoto.aspx?size=L&accountname=" + $htmlEncode(secPrimeEntry.Email);
		    if(secPrimeArray[5]==undefined)
		    {
		   		profileImg2 = "<div class='keyprofilepic'><img src='/sites/DevEnv/_catalogs/masterpage/images/no-user-img-dummy.jpg' alt='No image found for this profile' ></div>";
		    }
		    else
		    {
		   		profileImg2 = "<div class='keyprofilepic'><img src='" + pictureURL2  + "' alt='No image found for this profile' ></div>";
		    }			
	        if (secPrimeEntry.Name)
			{
				var username=secPrimeEntry.Name
			}
			else if(secPrimeEntry.Name=='' || secPrimeEntry.Name==null || secPrimeEntry.Name==undefined)
			{
				var username='--';
			}
			if (secPrimeEntry.Title)
			{
				var usertitle=secPrimeEntry.Title
			}
			else if(secPrimeEntry.Title=='' || secPrimeEntry.Title==null || secPrimeEntry.Title==undefined)
			{
				var usertitle='--';
			}
			if (secPrimeEntry.Email)
			{
				var useremail=secPrimeEntry.Email
			}
			else if(secPrimeEntry.Email=='' || secPrimeEntry.Email==null || secPrimeEntry.Email==undefined)
			{
				var useremail='--';
			}
			if (SecPrimeWorkPhone)
			{
				var userphone=SecPrimeWorkPhone
			}
			else if(SecPrimeWorkPhone=='' || SecPrimeWorkPhone==null || SecPrimeWorkPhone==undefined)
			{
				var userphone='--';
			}
			
			var htmlPrimeSec=""+profileImg2+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
	
	//	    $('div[data-name="KeyContact"]').append(htmlPrimeSec);
	//		$('div[id="MSOZoneCell_WebPartWPQ2"]').append(htmlPrimeSec);
			$('#keyContactPrimary .content').append(htmlPrimeSec);		
			
		}

	}

//Secondary key contact
    var secondaryName;
    $().SPServices({  
        webURL: curSiteUrl,
        operation: "GetListItems",  
        async: false,  
        listName: "Key Contact",  
        //CAMLQuery:"",
        /*"<Query><Where><And><Eq><FieldRef Name='KeyContacts_x0020_Category' /><Value Type='Choice'>Secondary</Value></Eq>" +  //KeyContacts_x0020_Category = primary and KeyContact_x0020_End_x0020_Date is null
                   "<And><Geq><FieldRef Name='KeyContact_x0020_End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
                  "</And></Where></Query>",*/
        CAMLQuery:"<Query><Where><And><Eq><FieldRef Name='KeyContacts_x0020_Category' /><Value Type='Choice'>Secondary</Value></Eq>" +
       	          "<Or><And><IsNull><FieldRef Name='KeyContact_x0020_End_x0020_Date' /></IsNull>" +
       	          "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
       	          "<And><Geq><FieldRef Name='KeyContact_x0020_End_x0020_Date' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Geq>" +
                  "<Leq><FieldRef Name='KeyContacts_x0020_StartDate' /><Value IncludeTimeValue='FALSE' Type='DateTime'><Today /></Value></Leq></And>" +
       	          "</Or></And></Where></Query>",
        CAMLQueryOptions: "<QueryOptions><ExpandUserField>True</ExpandUserField></QueryOptions>",
        completefunc: function (xData, Status) {  
	      
            $(xData.responseXML).SPFilterNode("z:row").each(function() {  
                //alert(xData.responseText);
                secondaryName= $(this).attr("ows_KeyContacts_x0020_EmployeeName");
            });  
        }
    });

    if (secondaryName)
    {
	
        // 0 - user type value (id+user), 1- account name, 2- personal email, 3- work email, 4 - name, 5 - profile picture path, 6 - , 7- Title
        var userEntrySec = {};
        var userArraySec = secondaryName.split(",#");
        var userId = userArraySec[0].split(";#")[0];
        userEntrySec.Name = userArraySec[4];
        userEntrySec.Title = userArraySec[7];
        userEntrySec.Email = userArraySec[3];
        var WorkPhoneSec;
		
        $().SPServices({
            operation: 'GetUserProfileByName',
            AccountName:userArraySec[1],
            async: false,
            completefunc: function (xData, Status) {
                $(xData.responseXML).find("PropertyData > Name:contains('WorkPhone')").each(function() {
                    WorkPhoneSec= $(this).parent().find("Values").text();
                });
            }     
        });
        var profileImg3;
        var pictureURL3 = "/_layouts/15/userphoto.aspx?size=L&accountname=" + $htmlEncode(userEntrySec.Email);
        if(userArraySec[5]==undefined)
        {
       		profileImg3 = "<div class='keyprofilepic'><img src='/sites/DevEnv/_catalogs/masterpage/images/no-user-img-dummy.jpg' alt='No image found for this profile'></div>";
       	}
		else
		{
			profileImg3 = "<div class='keyprofilepic'><img src='" + pictureURL3  + "' alt='No image found for this profile' ></div>";
		}    
        
        if (userEntrySec.Name)
        {
            var username=userEntrySec.Name
        }
        else if(userEntrySec.Name=='' || userEntrySec.Name==null || userEntrySec.Name==undefined)
        {
            var username='--';
        }
        if (userEntrySec.Title)
        {
            var usertitle=userEntrySec.Title;
        }
        else if(userEntrySec.Title=='' || userEntrySec.Title==null || userEntrySec.Title==undefined)
        {
            var usertitle='--';
        }
        if (userEntrySec.Email)
        {
            var useremail=userEntrySec.Email;
        }
        else if(userEntrySec.Email=='' || userEntrySec.Email==null || userEntrySec.Email==undefined)
        {
            var useremail='--';
        }
        if (WorkPhoneSec)
        {
            var userphone=WorkPhoneSec;
        }
        else if(WorkPhoneSec=='' || WorkPhoneSec==null || WorkPhoneSec==undefined)
        {
            var userphone='--';
        }
      
        var htmlSec=""+profileImg3+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span style='float:right'>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
		
        //$('div[id="MSOZoneCell_WebPartWPQ3"]').append(htmlSec);
        // $('div[id="keyContactSecondary"]').append(htmlSec);
        $('#keyContactSecondary .content').append(htmlSec);	
        }
   //$('.keyprofilepic').children('img').attr('src','/sites/DevEnv/_catalogs/masterpage/images/no-user-img-dummy.jpg');
});
 </script>
 