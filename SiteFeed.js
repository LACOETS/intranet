<style type="text/css">

.ms-microfeed-cancelButton{
background-color: #fcfcfc !important;
border: 1px solid #d4d4d4 !important;
-moz-border-radius: 10px !important;
-webkit-border-radius: 10px !important;
border-radius: 10px !important;
color: #00a6d9 !important;
height: 22px !important;
padding-top: 3px !important;
width: 78px !important;
font-family: Arial !important;
font-size: 11px!important;
font-weight: normal !important;
}
.ms-microfeed-siteFeedTitleArea
{
background-color: silver;
padding-left: 20px;
text-transform:uppercase;
padding-bottom: 3px;
padding-top: 2px;
margin-bottom: 5px;
}
 
.ms-microfeed-siteFeedMicroBlogPart
{
margin-bottom: 2px;
}
.ms-microfeed-siteFeedTitleLabel
{
color: red !important;
}
 
.ms-microfeed-threadsDiv
{
height: 250px;
overflow-y: auto;
overflow-x: hidden;
}
 
.ms-microfeed-thread
{
max-width: 435px;
margin-bottom: 10px;
}
.ms-microfeed-replyArea
{
max-width: 375px;
min-width: 300px;
}
 
.ms-microfeed-attachmentButton
{
padding-top: 2px;
padding-bottom: 2px;
padding-bottom: 2px;
display: block;
}
.ms-microfeed-postButton
{
margin-top: 2px;
}
 
.ms-microfeed-postButtonSpan
{
position: absolute;
right: 12px;
}
 
.ms-microfeed-postBox
{
/* height: 53px;*/
min-height:53px;
}
 
.ms-microfeed-feedPart
{
margin-left: 10px;
max-width: 620px;
min-width: 290px;
padding-top: 10px;
position: relative;
width: 290px;
}
.ms-microfeed-fullMicrofeedDiv
{
border-radius:15px;
-moz-border-radius:15px;
-webkit-border-radius:15px;
float: left;
margin-bottom: 10px;
width: 310px;
min-width:310px;
background-color:#f3f3f3;
 
top:0;
left:0px;
}
.ms-microfeed-microblogpart
{
margin-bottom: 30px !important;
position: relative;
min-width:300px;
}
.ms-postbutton
{
float: right;
text-align: center;
}
.ms-microfeed-focusBoxNoFocus
{
border:1px solid #c6c6c6;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
border-radius: 15px;
margin-left:10px;
 
background-color:white;
width: 290px;
margin-top:10px;
}
.ms-microfeed-focusBox
{
background-color:white;
border: 1px solid #c6c6c6;
border-radius:15px;
-moz-border-radius:15px;
-webkit-border-radius:15px;
margin-left: 10px;
width: 290px;
margin-top:10px;
}
.input.ms-button-emphasize, button.ms-button-emphasize
{
background-color: #fcfcfc;
border: 1px solid #d4d4d4;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
color: #00a6d9;
height: 22px;
padding-top: 3px;
width: 78px;
font-family: Arial;
font-size: 11px;
font-weight: normal;
}
.input.ms-button-emphasize, button.ms-button-emphasize:hover
{
background-color: #008fbb;
border: 1px solid #008fbb;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px;
color: #ffffff;
height: 22px;
padding-top: 3px;
width: 78px;
font-family: Arial;
font-size: 11px;
font-weight: normal;
}
.generic_heading3_Share {
background-image: url("/Style%20Library/Images/heading_bg2.png");
background-position: center bottom;
background-repeat: repeat-x;
-moz-border-radius: 15px 15px 0 0;
-webkit-border-radius: 15px 15px 0 0;
border-radius: 15px 15px 0 0;
float: left;
padding: 7px 10px;
width: 290px;
}
h2 {
color: #008fbb;
font-family: Arial;
font-size: 15px;
font-weight: normal;
text-decoration: none;
}
 
.ms-subtleLink:link, .ms-subtleLink:visited, .ms-atMention:link, .ms-atMention:visited, .ms-hashTag:link, .ms-hashTag:visited
{
color: #444;
font-weight: bold;
}
.ms-microfeed-rootText
{
max-width: 531px;
min-width: 210px;
}
.ms-microfeed-button
{
background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
border: 0 none;
color: #008fbb;
cursor: pointer;
margin-left: 0;
min-width: 1px;
}
 
.ms-microfeed-button:hover
{
background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
border: 0 none;
color: #008fbb;
cursor: pointer;
margin-left: 0;
min-width: 1px;
}
.ms-spimn-presenceWrapper{
display: none !important;
overflow: hidden;
position: relative;
white-space: nowrap;
}
</style>

<script>
$(document).ready(function() {
$('.ms-microfeed-thread:gt(3)').hide(); //hides all posts after the three latests
$('#ms-MoreThreadsButtonLabel').click(function (){$('.ms-microfeed-thread').show();}); // sets a click
//hideHeaderFooter();
onPageLoadNewsFeed();
 
//$(document).bind('DOMNodeInserted', function(){
//$(".ms-microfeed-mysitemenu-ellipsisImage").hide();
//$("a:contains('Reply')").hide();
 
//});
 
});
 
function onPageLoadNewsFeed()
{
$('.ms-microfeed-mysitemenu-control').hide();
$("a:contains('Reply')").hide();
 
$(".ms-microfeed-messageFooter span:Contains('Follow')").hide();
 
$("#ms-addImageButton").hide();
$("div.ms-microfeed-siteFeedTitleArea").replaceWith("<div class='generic_heading3'><h2>Share your thoughts</h2></div>");
$('#ms-postbutton').html('Send');
 
}
function hideHeaderFooter()
{
$('.ms-designer-ribbon').hide();
$('.s4-ribbonrow').hide();
$('.logo').hide();
$('.header_row1').hide();
$('.footer').hide();
$('.inner_banner1').hide();
$('.breadcrumbs').hide();
$('.inner_leftcolumn').hide();
$('.inner_rightcolumn').hide();
$('#footer').hide();
$('#suiteBar').hide();
$('.InnerPageTitle').hide();
$('#ms-designer-ribbon').hide();
}
</script>