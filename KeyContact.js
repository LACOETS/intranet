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
      var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Contact')/items?$select=KeyContacts_x0020_Category,IsPrimaryAlternate,Email,Work_x0020_Phone,Job_x0020_Title,Image_x0020_URL&$filter=KeyContacts_x0020_StartDate ge datetime'2014-01-01T00%3a00%3a00'"; // filter by current date 
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
		userEntry.Name = (dataRec.Email).split('@')[0]; // substring email to get user name
		//alert(dataRec.Email);
		userEntry.Title = dataRec.Job_x0020_Title;
		userEntry.Email = dataRec.Email;
		userEntry.Category=dataRec.KeyContacts_x0020_Category;
		userEntry.PrimaryAlternate=dataRec.IsPrimaryAlternate;
		var WorkPhone= dataRec.Work_x0020_Phone;
	    var profileImg1;
	    var pictureURL1 = dataRec.Image_x0020_URL.Url+'?RenditionID=1'; // Please work on delay image rendering
	    if(pictureURL1=='' || pictureURL1==null || pictureURL1==undefined)
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
        
		if(userEntry.Category=='Primary' && Acount==0)
		{
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