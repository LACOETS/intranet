<div id='keyContactPrimary' class="tabBx" style="display:block">
	<div class="content"></div>
</div>
<div id='keyContactSecondary' class="tabBx">
	<div class="content"></div>
</div>

<script>

$(function($, undefined) {

  SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
    SP.SOD.executeFunc("sp.runtime.js", "SP.ClientContext", function() {
      var context = SP.ClientContext.get_current();
      //alert(new Date().toISOString().split('T')[0]);
	  var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Contact')/items?$select=KeyContacts_x0020_Category,KeyContact_x0020_End_x0020_Date,IsPrimaryAlternate,Email,Work_x0020_Phone,Job_x0020_Title,Image_x0020_URL&$filter=KeyContact_x0020_End_x0020_Date ge datetime'" + new Date().toISOString().split('T')[0]) + "'"; // filter by current date // VJ Change - End Date >= Today
      $.ajax({
        url: queryUrl,
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: onQuerySuccess,
        error: onQueryError
      });
    });
  });

  function onQuerySuccess(data) {
    var results = data.d.results;
	var pcount=0;
	var scount=0;
	var Acount=0;
    $.each(results, function(index, dataRec) {
		if(pcount==0 || scount==0 || Acount==0)
		{
		var userEntry = {};
		userEntry.Name = (dataRec.Email).split('@')[0]; // substring email to get user name // VJ Change - Splitted Email by @ to get Name		
		alert(dataRec.KeyContact_x0020_End_x0020_Date);
		userEntry.Title = dataRec.Job_x0020_Title;
		userEntry.Email = dataRec.Email;
		userEntry.Category=dataRec.KeyContacts_x0020_Category;
		userEntry.PrimaryAlternate=dataRec.IsPrimaryAlternate;
		var WorkPhone= dataRec.Work_x0020_Phone;
	    var profileImg1;
	    var pictureURL1 = dataRec.Image_x0020_URL.Url+'?RenditionID=1'; // Please work on delay image rendering
	    pictureURL1 = "https://lacoe-my.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname=" + dataRec.Email; // Changed the Picture URL
		if(pictureURL1=='' || pictureURL1==null || pictureURL1==undefined)
	    {
	   		profileImg1 = "<div class='keyprofilepic'><img src='https://lacoets.github.io/intranet/no-user-img-dummy.jpg' alt='No image found for this profile' ></div>";
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
        
		alert(userEntry.Category);
		if(userEntry.Category=='Primary' && Acount==0)
		{
			alert('In primary IF');
		pcount=pcount+1;
		var html=""+profileImg1+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
        $('#keyContactPrimary .content').append(html);
		}
		else if(userEntry.Category=='Secondary')
		{
		scount=scount+1;
		var htmlSec=""+profileImg1+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span style='float:right'>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
		$('#keyContactSecondary .content').append(htmlSec);
		}
		else if(userEntry.Category=='AIC')
		{
		alert('In AIC Else If');
		Acount=Acount+1;
		$('#keyContactPrimary .content').empty();
		var html=""+profileImg1+"<div class='owner-info'><ul><li><abbr>Name:</abbr> <span>"+username+"</span><div class='clear'></div></li><li><abbr>Title:</abbr> <span>"+usertitle+"</span><div class='clear'></div></li><li><abbr>Email ID:</abbr> <span><a href='mailto:"+useremail+"'> "+useremail+"</a></span><div class='clear'></div></li><li><abbr>Phone No:</abbr> <span>"+userphone+"</span><div class='clear'></div></li></ul></div>";
        $('#keyContactPrimary .content').append(html);
		
		}
	}
		
    });

  }
  function onQueryError(error) {
    $("#keyContactPrimary").append(error.statusText)
  }
});
</script>