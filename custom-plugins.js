/*////////////********Lazy load plugin **********/////////////////////////*/
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a, b, c, d){var e = a(b); a.fn.lazyload = function(f){function g(){var b = 0; i.each(function(){var c = a(this); if (!j.skip_invisible || c.is(":visible"))if (a.abovethetop(this, j) || a.leftofbegin(this, j)); else if (a.belowthefold(this, j) || a.rightoffold(this, j)){if (++b > j.failure_limit)return!1} else c.trigger("appear"), b = 0})}var h, i = this, j = {threshold:0, failure_limit:0, event:"scroll", effect:"show", container:b, data_attribute:"original", skip_invisible:!1, appear:null, load:null, placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"}; return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b?e:a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function(){return g()}), this.each(function(){var b = this, c = a(b); b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function(){if (!this.loaded){if (j.appear){var d = i.length; j.appear.call(b, d, j)}a("<img />").bind("load", function(){var d = c.attr("data-" + j.data_attribute); c.hide(), c.is("img")?c.attr("src", d):c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0; var e = a.grep(i, function(a){return!a.loaded}); if (i = a(e), j.load){var f = i.length; j.load.call(b, f, j)}}).attr("src", c.attr("data-" + j.data_attribute))}}), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function(){b.loaded || c.trigger("appear")})}), e.bind("resize", function(){g()}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b){b.originalEvent && b.originalEvent.persisted && i.each(function(){a(this).trigger("appear")})}), a(c).ready(function(){g()}), this}, a.belowthefold = function(c, f){var g; return g = f.container === d || f.container === b?(b.innerHeight?b.innerHeight:e.height()) + e.scrollTop():a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold}, a.rightoffold = function(c, f){var g; return g = f.container === d || f.container === b?e.width() + e.scrollLeft():a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold}, a.abovethetop = function(c, f){var g; return g = f.container === d || f.container === b?e.scrollTop():a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()}, a.leftofbegin = function(c, f){var g; return g = f.container === d || f.container === b?e.scrollLeft():a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()}, a.inviewport = function(b, c){return!(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))}, a.extend(a.expr[":"], {"below-the-fold":function(b){return a.belowthefold(b, {threshold:0})}, "above-the-top":function(b){return!a.belowthefold(b, {threshold:0})}, "right-of-screen":function(b){return a.rightoffold(b, {threshold:0})}, "left-of-screen":function(b){return!a.rightoffold(b, {threshold:0})}, "in-viewport":function(b){return a.inviewport(b, {threshold:0})}, "above-the-fold":function(b){return!a.belowthefold(b, {threshold:0})}, "right-of-fold":function(b){return a.rightoffold(b, {threshold:0})}, "left-of-fold":function(b){return!a.rightoffold(b, {threshold:0})}})}(jQuery, window, document);

/*////////////******** Lazy load plugin **********/////////////////////////*/

/*Custom Pagination*/
	function paginationFunction(a){$("#"+a).pajinate({num_page_links_to_display:!1,items_per_page:3})}!function(a){a.fn.pajinate=function(e){function i(i){new_page=parseInt(p.data(f))-1,1==a(i).siblings(".active_page").prev(".page_link").length?(l(i,new_page),s(new_page)):e.wrap_around&&s(h-1)}function n(i){new_page=parseInt(p.data(f))+1,1==a(i).siblings(".active_page").next(".page_link").length?(t(i,new_page),s(new_page)):e.wrap_around&&s(0)}function s(a){var i=parseInt(p.data(u));start_from=a*i,end_on=start_from+i;var n=o.hide().slice(start_from,end_on);n.show(),c.find(e.nav_panel_id).children(".page_link[longdesc="+a+"]").addClass("active_page "+k).siblings(".active_page").removeClass("active_page "+k),p.data(f,a),c.find(e.nav_info_id).html(e.nav_label_info.replace("{0}",start_from+1).replace("{1}",start_from+n.length).replace("{2}",o.length)),_(),r()}function t(i,n){var s=n,t=a(i).siblings(".active_page");"none"==t.siblings(".page_link[longdesc="+s+"]").css("display")&&g.each(function(){a(this).children(".page_link").hide().slice(parseInt(s-e.num_page_links_to_display+1),s+1).show()})}function l(i,n){var s=n,t=a(i).siblings(".active_page");"none"==t.siblings(".page_link[longdesc="+s+"]").css("display")&&g.each(function(){a(this).children(".page_link").hide().slice(s,s+parseInt(e.num_page_links_to_display)).show()})}function _(){g.children(".page_link:visible").hasClass("last")?g.children(".more").hide():g.children(".more").show(),g.children(".page_link:visible").hasClass("first")?g.children(".less").hide():g.children(".less").show()}function r(){g.children(".last").hasClass("active_page")?g.children(".next_link").add(".last_link").addClass("no_more "+b):g.children(".next_link").add(".last_link").removeClass("no_more "+b),g.children(".first").hasClass("active_page")?g.children(".previous_link").add(".first_link").addClass("no_more "+b):g.children(".previous_link").add(".first_link").removeClass("no_more "+b)}var p,d,c,o,g,h,f="current_page",u="items_per_page",v={item_container_id:".pagination-rowholder",items_per_page:10,nav_panel_id:".page_navigation",nav_info_id:".info_text",num_page_links_to_display:21,start_page:0,wrap_around:!1,nav_label_first:'',nav_label_prev:'',nav_label_next:'',nav_label_last:'',nav_order:["first","prev","num","next","last"],nav_label_info:"Showing {0}-{1} of {2} results",show_first_last:!0,abort_on_small_lists:!1,jquery_ui:!1,jquery_ui_active:"ui-state-highlight",jquery_ui_default:"ui-state-default",jquery_ui_disabled:"ui-state-disabled"},e=a.extend(v,e),m=e.jquery_ui?e.jquery_ui_default:"",k=e.jquery_ui?e.jquery_ui_active:"",b=e.jquery_ui?e.jquery_ui_disabled:"";return this.each(function(){if(c=a(this),d=a(this).find(e.item_container_id),o=c.find(e.item_container_id).children(),e.abort_on_small_lists&&e.items_per_page>=o.size())return c;p=c,p.data(f,0),p.data(u,e.items_per_page);for(var v=d.children().size(),b=Math.ceil(v/e.items_per_page),w='<span class="ellipse more">...</span>',y='<span class="ellipse less">...</span>',C=e.show_first_last?'<a class="first_link '+m+'" href="">'+e.nav_label_first+"</a>":"",x=e.show_first_last?'<a class="last_link '+m+'" href="">'+e.nav_label_last+"</a>":"",j="",q=0;q<e.nav_order.length;q++)switch(e.nav_order[q]){case"first":j+=C;break;case"last":j+=x;break;case"next":j+='<a class="next_link '+m+'" href="">'+e.nav_label_next+"</a>";break;case"prev":j+='<a class="previous_link '+m+'" href="">'+e.nav_label_prev+"</a>";break;case"num":j+=y;for(var I=0;b>I;)j+='<a class="page_link '+m+'" href="" longdesc="'+I+'">'+(I+1)+"</a>",I++;j+=w}g=c.find(e.nav_panel_id),g.html(j).each(function(){a(this).find(".page_link:first").addClass("first"),a(this).find(".page_link:last").addClass("last")}),g.children(".ellipse").hide(),g.find(".previous_link").next().next().addClass("active_page "+k),o.hide(),o.slice(0,p.data(u)).show(),h=c.children(e.nav_panel_id+":first").children(".page_link").size(),e.num_page_links_to_display=Math.min(e.num_page_links_to_display,h),g.children(".page_link").hide(),g.each(function(){a(this).children(".page_link").slice(0,e.num_page_links_to_display).show()}),c.find(".first_link").click(function(e){e.preventDefault(),l(a(this),0),s(0)}),c.find(".last_link").click(function(e){e.preventDefault();var i=h-1;t(a(this),i),s(i)}),c.find(".previous_link").click(function(e){e.preventDefault(),i(a(this))}),c.find(".next_link").click(function(e){e.preventDefault(),n(a(this))}),c.find(".page_link").click(function(e){e.preventDefault(),s(a(this).attr("longdesc"))}),s(parseInt(e.start_page)),_(),e.wrap_around||r()})}}(jQuery),$(window).load(function(){var a;$(".pagination-page").each(function(){a=$(this).attr("id"),paginationFunction(a)})});

/*Custom pagination end*/

/*Bxslider*/

	!function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,touchEnabled:!0,swipeThreshold:50,video:!1,useCSS:!0,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(s){if(0!=this.length){if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},n,s),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(h()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&T(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),n=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==v()-1,o.settings.video&&r.fitVids(),o.settings.ticker||(o.settings.pager&&S(),o.settings.controls&&b(),o.settings.auto&&o.settings.autoControls&&w(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),r.children().imagesLoaded(function(){o.loader.remove(),f(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(g()),o.settings.onSliderLoad(o.active.index),o.initialized=!0,t(window).bind("resize",O),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&D(),o.settings.pager&&y(o.settings.startSlide),o.settings.controls&&q(),o.settings.touchEnabled&&!o.settings.ticker&&H()})},g=function(){var e=0,n=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*p();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),e},h=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth?t=e:e>o.maxThreshold?t=(e-o.settings.slideMargin*(o.settings.maxSlides-1))/o.settings.maxSlides:o.minThreshold>e&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides),t},u=function(){var t=1;if("horizontal"==o.settings.mode)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},v=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/p();else for(var e=0,i=0;o.children.length>e;)++t,e=i+u(),i+=o.settings.moveSlides<=u()?o.settings.moveSlides:u();else t=Math.ceil(o.children.length/u());return t},p=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=u()?o.settings.moveSlides:u()},f=function(){if(o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();x(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();x(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*p()).position();o.active.index==v()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?x(-e.left,"reset",0):"vertical"==o.settings.mode&&x(-e.top,"reset",0))}},x=function(t,e,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),z()})):"reset"==e?r.css(o.animProp,s):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),x(n.resetValue,"reset",0),I()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){z()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){x(n.resetValue,"reset",0),I()})}},m=function(){var e="";pagerQty=v();for(var i=0;pagerQty>i;i++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(i),o.pagerEl.addClass("bx-custom-pager")):(n=i+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},S=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),m()),o.pagerEl.delegate("a","click",k)},b=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",C),o.controls.prev.bind("click",E),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},w=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",A),o.controls.autoEl.delegate(".bx-stop","click",P),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),M(o.settings.autoStart?"stop":"start")},T=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},C=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},E=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},A=function(t){r.startAuto(),t.preventDefault()},P=function(t){r.stopAuto(),t.preventDefault()},k=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),e.preventDefault()},y=function(e){return"short"==o.settings.pagerType?void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+o.children.length):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}))},z=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==v()-1&&o.carousel?t=o.children.eq((v()-1)*p()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?x(-t.left,"reset",0):"vertical"==o.settings.mode&&x(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},M=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},q=function(){!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==v()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},D=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}x(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,n="horizontal"==o.settings.mode?"left":"top",s=i*(e-Math.abs(parseInt(r.css(n))));I(s)}),I()},I=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-e.left:-e.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};x(n,"ticker",speed,a)},H=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",W)},W=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",N),o.viewport.bind("touchend",B)}},N=function(t){if(t.preventDefault(),"fade"!=o.settings.mode){var e=t.originalEvent,i=0;if("horizontal"==o.settings.mode){var n=e.changedTouches[0].pageX-o.touch.start.x;i=o.touch.originalPos.left+n}else{var n=e.changedTouches[0].pageY-o.touch.start.y;i=o.touch.originalPos.top+n}x(i,"reset",0)}},B=function(t){o.viewport.unbind("touchmove",N);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?x(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):x(i,"reset",200)}o.viewport.unbind("touchend",B)},O=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,o.children.add(r.find(".bx-clone")).width(h()),o.viewport.css("height",g()),o.active.last&&(o.active.index=v()-1),o.active.index>=v()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(m(),y(o.active.index)),o.settings.ticker||f())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?v()-1:e>=v()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=v()-1,o.settings.pager&&y(o.active.index),o.settings.controls&&q(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),z()});else{o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-p():(v()-1)*p()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find(".bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*p();s=o.children.eq(c).position()}var h="horizontal"==o.settings.mode?-(s.left-n):-s.top;x(h,"slide",o.settings.speed)}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=o.active.index+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=o.active.index-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&M("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&M("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),t(window).unbind("resize",O))},r.reloadSlider=function(t){void 0!=t&&(s=t),r.destroySlider(),d()},d(),this}}}(jQuery),function(t,e){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(n){function s(){var e=t(g),i=t(h);a&&(h.length?a.reject(d,e,i):a.resolve(d)),t.isFunction(n)&&n.call(r,d,e,i)}function o(e,n){e.src===i||-1!==t.inArray(e,c)||(c.push(e),n?h.push(e):g.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),l&&a.notifyWith(t(e),[n,d,t(g),t(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return t.isPlainObject(n)&&t.each(n,function(t,e){"callback"===t?n=e:a&&a[t](e)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(t){o(t.target,"error"===t.type)}).each(function(n,s){var r=s.src,a=t.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==e?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);

/*Bxslider end*/

/*Nialthumb*/
!function(t){function i(i,a){var r=n(i,a),l=o(i,a);if(a.serverSideParams&&t.fn.nailthumb.setServerSideParams(r,l,a),T("image",r),T("container",l),a.onStart&&a.onStart(l,a),a.loadingClass&&l.addClass(a.loadingClass),a.preload||r.data("nailthumb.replaceto")){W("wait on load"),r.one("load",function(){T("before check",r),r.data("nailthumb.working")||r.data("nailthumb.replacing")||(r.data("nailthumb.working",!0),T("inside check",r),e(r,l,a))});var s=r.attr("src");r.attr("src",null).attr("src",s)}else W("nail thumb directly"),r.data("nailthumb.working",!0),e(r,l,a)}function e(t,i,e){l(t,e),s(i,e);var n=A(t,e);T("image",t),T("imageDims",n),(0==n.width||0==n.height)&&(n=k(t),T("imageCloneDims",n));var a=C(i,e);T("container",i),T("containerDims",a);var r=b(a,n,e);W("proportions",r),h(t,n,i,a,r,e)}function n(t,i){var e=t.find("img").first(),n=i.imageCustomFinder;if(!n&&i.imageUrl?n=a:!n&&i.imageFromWrappingLink&&(n=r),n){var l=n(t,i);T("finder",l),l||(l=[]),l.length>0&&(e=l,e.css("display","none"),e.data("nailthumb.replaceto")||e.data("nailthumb.replaceto",t),e.data("nailthumb.originalImageDims",null))}return 0==e.length&&t.is("img")&&(e=t),e}function a(i,e){var n=t("<img />").attr("src",e.imageUrl).css("display","none").data("nailthumb.replaceto",i);return i.append(n),n}function r(i,e){var n,a=i.find("a").first();return 0==a.length&&i.is("a")&&(a=i),a.attr("href")&&(n=t("<img />").attr("src",a.attr("href")).css("display","none").data("nailthumb.replaceto",a),a.attr("title")&&n.attr("title",a.attr("title")),a.append(n)),n}function l(t,i){i.nostyle||t.css({position:"relative"}),t.data("nailthumb.originalImageDims")||t.css({width:"auto",height:"auto",top:0,left:0}).removeAttr("width").removeAttr("height")}function o(i,e){var n=i;if(i.is("img")){if(e.ifImageAddContainer){var a=t("<div></div>");i.wrap(a)}n=i.parent()}return n}function s(t,i){i.containerClass&&t.addClass(i.containerClass),i.nostyle||t.css({overflow:"hidden",padding:"0px"}),"animate"==i.replaceAnimation?(i.width||i.height)&&t.animate({width:i.width,height:i.height},i.animationTime,i.animation):(i.width&&t.width(i.width),i.height&&t.height(i.height)),t.find("span."+i.titleClass).remove()}function h(t,i,e,n,a,r){var l,o=i.width*a,s=i.height*a,h=0,m=0,u=w(r.fitDirection);if(s<n.innerHeight)switch(u.v){case"center":h=-(s-n.innerHeight)/2;break;case"bottom":h=-(s-n.innerHeight),l="bottom";break;case"top":h=0,l="top"}else if(s>n.innerHeight)switch(u.v){case"center":h=-(s-n.innerHeight)/2;break;case"bottom":h=-(s-n.innerHeight)}if(o<n.innerWidth)switch(u.h){case"center":m=-(o-n.innerWidth)/2;break;case"right":m=-(o-n.innerWidth)}else if(o>n.innerWidth)switch(u.h){case"center":m=-(o-n.innerWidth)/2;break;case"right":m=-(o-n.innerWidth)}t.addClass(r.imageClass),t.data("nailthumb.replaceto")?c(t,i,e,n,s,o,m,h,l,r):d(t,i,e,n,s,o,m,h,l,r)}function c(t,i,e,n,a,r,l,o,s,h){var c=t.data("nailthumb.replaceto"),m=u(c,h);t.data("nailthumb.replacing",!0),t.load(function(){t.data("nailthumb.replacing",null)}),m?m.replaceWith(t):c.append(t),h.afterReplace&&h.afterReplace(e,t,h),d(t,i,e,n,a,r,l,o,s,h)}function d(t,i,e,n,a,r,l,o,s,h){"animate"==h.replaceAnimation?(t.css("display","inline"),e.animate({width:n.innerWidth,height:n.innerHeight},h.animationTime,h.animation),t.animate({width:r,height:a,top:o,left:l},h.animationTime,h.animation,function(){m(t,i,e,n,a,r,l,o,s,h)})):(e.css({width:n.innerWidth,height:n.innerHeight}),h.replaceAnimation&&t.css("display","none"),t.css({width:r,height:a,top:o,left:l}),"fade"==h.replaceAnimation?t.fadeIn(h.animationTime,h.animation,function(){m(t,i,e,n,a,r,l,o,s,h)}):"slide"==h.replaceAnimation?t.slideDown(h.animationTime,h.animation,function(){m(t,i,e,n,a,r,l,o,s,h)}):h.replaceAnimation&&h.replaceAnimation instanceof Function?(h.replaceAnimation(t,function(){m(t,i,e,n,a,r,l,o,s,h)},h),h.selfStartAfterAppear||m(t,i,e,n,a,r,l,o,s,h)):(t.css("display","inline"),m(t,i,e,n,a,r,l,o,s,h)))}function m(t,i,e,n,a,r,l,o,s,h){h.afterAppear&&h.afterAppear(e,t,h),t.data("nailthumb.replaceto",null),f(t,i,e,n,a,r,l,o,s,h)}function u(i,e){var n=null;return i.find("img").each(function(){n||t(this).data("nailthumb.replaceto")||(n=t(this))}),n}function f(i,e,n,a,r,l,o,s,h,c){if(c.title||c.titleAttr&&i.attr(c.titleAttr)){var d=c.title?c.title:i.attr(c.titleAttr);if(d){var m=t('<span class="'+c.titleClass+'">'+d+"</span>");a.innerHeight>r?m.css("top",a.innerHeight-r):m.css("top","0px"),n.append(m);var u=y(m),f=y(i);T("decorate containerDims",a),T("decorate imageDims",e),T("decorate imageDims",f),T("decorate tit",u);var v=a.offsetTop+a.innerHeight-u.offsetTop;a.height>a.innerHeight&&(v+=(a.height-a.innerHeight)/2),m.css("top","+="+v),l<u.width&&m.css("width",l),o>0&&m.css("left",o);var b=u.height;a.innerHeight>r&&"bottom"!=h&&(b+=(a.innerHeight-r)/("top"==h?1:2));var w=m.clone();w.css("width","auto").css("display","none").css("position","absolute"),n.append(w);var S=y(w);w.remove(),T("decorate cloneDims",S),"hover"==c.titleWhen?n.unbind("mouseenter mouseleave").hover(function(){m.find("span."+c.titleScrollerClass).css("left",0),a=y(n),u=y(m),v=a.offsetTop+a.innerHeight-u.offsetTop,a.height>a.innerHeight&&(v+=(a.height-a.innerHeight)/2),T("decorate hover tit",u),W("decorate hover outbound",u);var t=0;0>v?(m.css("top","+="+v),t=b):t=b-v,c.animateTitle?(g(m,c),m.stop(!0).animate({top:"-="+t},c.titleAnimationTime,c.titleAnimation,function(){p(m,S.width,a.innerWidth,c)})):(m.css({top:"-="+t}),p(m,S.width,a.innerWidth,c))},function(){c.animateTitle?(g(m,c),m.animate({top:"+="+b},c.titleAnimationTime,c.titleAnimation,function(){g(m,c)})):(g(m,c),m.css({top:"+="+b}))}):c.animateTitle?m.animate({top:"-="+b},c.titleAnimationTime,c.titleAnimation,function(){p(m,S.width,a.innerWidth,c)}):(m.css({top:"-="+b}),p(m,S.width,a.innerWidth,c))}}c.onFinish&&c.onFinish(n,c),c.loadingClass&&n.removeClass(c.loadingClass),i.data("nailthumb.working",null)}function g(t,i){t.find("span."+i.titleScrollerClass).stop()}function p(t,i,e,n){i>e&&n.titleScrolling&&(0==t.find("span."+n.titleScrollerClass).length&&(t.wrapInner('<span class="'+n.titleScrollerClass+'" />'),t.find("span."+n.titleScrollerClass).width(i).css("position","relative").css("white-space","nowrap")),t.find("span."+n.titleScrollerClass).css("left",0),setTimeout(v(t,i,e,n),1e3))}function v(t,i,e,n){return function(){var a=Number(t.find("span."+n.titleScrollerClass).css("left").replace(/[^-\d]/g,""));W("indent",a),W("width",i),W("visibleWidth",e),W("width <= -indent",-a>=i);var r=i+a;0>=r&&(t.find("span."+n.titleScrollerClass).css("left",e),r=i+e),r+=10,t.find("span."+n.titleScrollerClass).animate({left:"-="+r},1e3*i/30,"linear",v(t,i,e,n))}}function b(t,i,e){if(null!=e.proportions&&e.proportions>0)return e.proportions;var n=t.innerWidth/i.width;return e.method&&"resize"==e.method?t.innerHeight/i.height<n&&(n=t.innerHeight/i.height):t.innerHeight/i.height>n&&(n=t.innerHeight/i.height),e.maxEnlargement&&e.maxEnlargement<n&&(n=e.maxEnlargement),e.maxShrink&&e.maxShrink>n&&(n=e.maxShrink),n}function w(t){var i={h:"center",v:"center"};if(t){var e=t.split(" ");e.length>0&&(i=S(e[0],i)),e.length>1&&(i=S(e[1],i))}return i}function S(t,i){switch(t){case"top":i.v="top";break;case"bottom":i.v="bottom";break;case"left":i.h="left";break;case"right":i.h="right"}return i}function A(t,i){var e;return t.data("nailthumb.originalImageDims")?e=t.data("nailthumb.originalImageDims"):(e=y(t),t.data("nailthumb.originalImageDims",e),i.keepImageDimensions||t.one("load",function(){t.data("nailthumb.originalImageDims",null)})),e}function C(t,i){var e=y(t);return i.width&&(e.innerWidth=i.width),i.height&&(e.innerHeight=i.height),e}function H(i){var e=t(i).offset();return{offsetTop:e.top,offsetLeft:e.left,width:t(i).outerWidth(),height:t(i).outerHeight(),innerWidth:t(i).innerWidth(),innerHeight:t(i).innerHeight()}}function y(i){for(var e,n=null,a=0;e=i[a++];){var r=t(e).parents().andSelf().filter(":hidden");if(r.length){var l=[];r.each(function(){var i=t(this).attr("style");i="undefined"==typeof i?"":i,l.push(i),t(this).attr("style",i+" display: block !important;")}),r.eq(0).css("left",-1e4),n=H(e),r.each(function(){t(this).attr("style",l.shift())})}else n=H(e)}return n}function k(i){for(var e,n=null,a=0;e=i[a++];){var r=t(e).parents().andSelf().filter(":hidden");if(r.length){var l=[];r.each(function(){var i=t(this).attr("style");i="undefined"==typeof i?"":i,l.push(i),t(this).attr("style",i+" display: block !important;")}),r.eq(0).css("left",-1e4);var o=r.eq(0).clone();t("body").append(o),n=H(o),r.each(function(){t(this).attr("style",l.shift())}),o.remove()}else n=H(e)}return n}function W(t,i,e){try{(D&&window.console&&window.console.log||e)&&window.console.log(t+": "+i)}catch(n){}}function T(t,i,e){try{i||(i=t),W(t,i),(D&&window.console&&window.console.log||e)&&window.console.debug(i)}catch(n){}}var D=!1;t.fn.nailthumb=function(e){var n=t.extend({},t.fn.nailthumb.defaults,e);return this.each(function(){var e=t(this),a=t.metadata?t.extend({},n,e.metadata()):n;i(e,a)})},t.fn.nailthumb.evalServerSideParams=function(i,e,n){if(n.serverSideParams){var a={};if(!n.serverSideParams.noServerResize){var r=null,l=null;if(n.serverSideParams.width?r=n.serverSideParams.width:n.width&&(r=n.width),n.serverSideParams.height?l=n.serverSideParams.height:n.height&&(l=n.height),!r||!l){s(e,n);var o=C(e,n);r=o.innerWidth,l=o.innerHeight}r&&l&&(a.w=r,a.h=l,"resize"!=n.serverSideParams.mode&&("crop"==n.method&&(a.mode="crop"),n.serverSideParams.mode&&(a.mode=n.serverSideParams.mode)))}t.each(n.serverSideParams,function(t,i){"width"!=t&&"height"!=t&&"mode"!=t&&"noServerResize"!=t&&i&&(a[t]=i)});var h="";return t.each(a,function(t,i){h+=";"+t+"="+i}),W(h,a),h}return""},t.fn.nailthumb.setServerSideParams=function(i,e,n){if(n.serverSideParams){var a=i.attr("src");i.data("nailthumb.originalImageUrl")&&(a=i.data("nailthumb.originalImageUrl")),i.data("nailthumb.originalImageUrl",a);var r=t.fn.nailthumb.evalServerSideParams(i,e,n);a+=r,i.attr("src",a)}},t.fn.nailthumb.toggleDebug=function(){D=!D},t.fn.nailthumb.doThumb=function(t,i,n){e(t,i,n)},t.fn.nailthumb.defaults={onStart:null,onFinish:null,loadingClass:"nailthumb-loading",imageUrl:null,imageFromWrappingLink:!1,imageCustomFinder:null,imageClass:"nailthumb-image",afterReplace:null,afterAppear:null,replaceAnimation:"fade",selfStartAfterAppear:!1,animationTime:1e3,animation:"swing",keepImageDimensions:!1,method:"crop",fitDirection:null,proportions:null,ifImageAddContainer:!0,containerClass:"nailthumb-container",maxEnlargement:null,maxShrink:null,preload:!0,nostyle:!1,width:null,height:null,title:null,titleClass:"nailthumb-title",titleAttr:"title",titleWhen:"hover",titleScrolling:!0,titleScrollerClass:"nailthumb-title-scroller",animateTitle:!0,titleAnimationTime:500,titleAnimation:"swing",serverSideParams:null}}(jQuery);
/*Nailthumb*/

/*Common js*/



function fixedfooter(){}function fixButtonHeights(){var e=new Array;$(".common-height > .grid-4 > .box-style  > .box-contentinfos").each(function(){$(this).css("min-height","0"),$(this).css("max-height","none"),$(this).css("height","auto"),e.push($(this).outerHeight())});var i=Math.max.apply(Math,e);$(".common-height > .grid-4 > .box-style  > .box-contentinfos").each(function(){$(this).css("min-height",i+"px")})}function reportcardTabination(e,i){$("#"+i).children(".ms-webpart-zone").find(".s4-wpcell-plain").css("z-index","1").fadeOut(),$("#"+e).css("z-index","2").fadeIn()}function CallEventCalendar(){var e=$(".dept-calender.cal-view-icon").find(".tabNav").find(".active").attr("rel"),i=_spPageContextInfo.webAbsoluteUrl;"next30days-box"==e?window.open(i+"/pages/eventcalendar.aspx?ReqType=upcoming30","_blank"):"newevent-box"==e?window.open(i+"/pages/eventcalendar.aspx?ReqType=latest","_blank"):"etraining-box"==e?window.open(i+"/pages/eventcalendar.aspx?ReqType=events","_blank"):"past30days-box"==e&&window.open(i+"/pages/eventcalendar.aspx?ReqType=previous30","_blank")}$(function(){fixedfooter()}),$(window).resize(function(){fixedfooter()}),$(window).load(function(){$(".announcement-sliders").css("height","auto"),fixedfooter()});var abcd,xyz;$(window).resize(function(){}),$(window).load(function(){$(".loader").fadeOut(),$(".tabCnt").each(function(e){$(this).children(".tabNav").find("li").each(function(e){var i=$(this).html(),n=$(this).find("a").attr("rel"),o=$(this).parents(".tabNav").next(".tabResult");o.find("div#"+n).prepend('<div class="mobile-menu">'+i+"</div>")})}),$(".announcement-slider").bxSlider({mode:"fade",controls:!1}),xyz=$(".imageslider").bxSlider({mode:"fade",pager:!1,controls:!0,infiniteLoop:!1,captions:!0,auto:!0,pause:1e4,speed:1e3,autoStart:!0,hideControlOnEnd:!0,onSliderLoad:function(e){},onSlideBefore:function(e,i,n){},onSlideAfter:function(e,i,n){$(".info-sliderimage > li").removeClass("active-slide"),$(".info-sliderimage > li").eq(n).addClass("active-slide"),abcd.goToSlide(n),abcd.getCurrentSlide(),abcd.getSlideCount()}}),abcd=$(".info-sliderimage").bxSlider({mode:"vertical",slideMargin:0,infiniteLoop:!1,controls:!0,pager:!1,onSliderLoad:function(){$(".info-sliderimage > li").eq(0).addClass("active-slide")},onSlideAfter:function(e,i,n){$(".info-sliderimage > li").removeClass("active-slide"),$(".info-sliderimage > li").eq(n).addClass("active-slide"),xyz.goToSlide(n);var o=abcd.getCurrentSlide(),t=abcd.getSlideCount();o+1==t&&xyz.startAuto();var l=xyz.getSlideCount();n==l-1&&setTimeout(function(){xyz.goToSlide(0)},1e4)}}),$(".image-sliders .bx-controls-direction a").click(function(){setTimeout(function(){xyz.startAuto()},1e3)}),$("#custom-arrow1").on("click",function(){return abcd.goToSlide(0),!1}),$("#custom-arrow2").on("click",function(){var e=abcd.getSlideCount();return abcd.goToSlide(e-6),!1}),$(".aniversaryslider").bxSlider({auto:!0,pager:!0,controls:!1})}),$(function(){$("body").append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>'),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollTop").fadeIn():$(".scrollTop").fadeOut()}),$(document).on("click",".scrollTop a",function(){$("body,html").animate({scrollTop:0},800)}),$(".toggle-btn").click(function(){$(".wrapper").hasClass("opened")?$(".wrapper").removeClass("opened"):$(".wrapper").addClass("opened")}),$(".has-sub-menu").click(function(){var e=($(this).find(".sub-menu"),$(this));e.hasClass("opened")?e.removeClass("opened"):e.addClass("opened")}),$(document).on("click",".mobile-menu",function(){if("none"==$(this).next(".content").css("display")){$(".tabResult .tabBx .content").slideUp(),$(this).next(".content").slideDown();var e=$(window).width();768>e?$(this).next(".content").find(".pagination-page").children("dl").wrapAll('<div class="mobile-wrap">'):$(".mobile-wrap").children().unwrap()}else $(".tabResult .tabBx .content").slideUp(),$(".mobile-wrap").children().unwrap()}),$(document).on("click",".mobile-menu",function(){"none"==$(this).next(".content").css("display")&&($(".tabResult .tabBx .content").slideUp(),$(this).next(".content").slideDown(),calslider1.reloadSlider(),calslider2.reloadSlider(),calslider3.reloadSlider(),calslider4.reloadSlider(),$("img.lazy").lazyload())}),$(".tabNav li a").click(function(){var e=$(this).attr("rel"),i=$(this).parents(".tabNav"),n=$(this).parents(".tabNav").next(".tabResult");i.children().find("a").removeClass("active"),$(this).addClass("active"),"none"==n.find(".tabBx#"+e).css("display")&&(n.find(".tabBx").hide(),n.find(".tabBx#"+e).fadeIn(600),calslider1.reloadSlider(),calslider2.reloadSlider(),calslider3.reloadSlider(),calslider4.reloadSlider(),$("img.lazy").lazyload())})});var calslider1,calslider2,calslider3,calslider4,calslider5,contributorslider;$(function(){calslider5=$(".cal-sliderdate5").bxSlider({minSlides:1,maxSlides:5,moveSlides:1,slideWidth:115,slideMargin:0,infiniteLoop:!1,pager:!1,controls:!1,touchEnabled:!0}),$("#custom-arrow13").click(function(){return calslider5.goToPrevSlide(),!1}),$("#custom-arrow14").click(function(){return calslider5.goToNextSlide(),!1}),$("#custom-arrow11").on("click",function(){return calslider5.goToSlide(0),!1}),$("#custom-arrow12").on("click",function(){var e=calslider5.getSlideCount();return calslider5.goToSlide(e-1),!1}),contributorslider=$("#Topcontributor .ms-comm-membersList.ms-table").bxSlider({mode:"vertical",minSlides:1,maxSlides:5,moveSlides:1,slideMargin:0,infiniteLoop:!1,pager:!1,controls:!1}),$("#contibutor-next").click(function(){return contributorslider.goToNextSlide(),!1}),$("#contibutor-prev").click(function(){return contributorslider.goToPrevSlide(),!1}),$("#contibutor-first").on("click",function(){return contributorslider.goToSlide(0),!1}),$("#contibutor-last").on("click",function(){var e=resource_link1.getSlideCount();return contributorslider.goToSlide(e-4),!1})}),$(window).load(function(){setTimeout(function(){fixButtonHeights()},500)}),$(window).resize(function(){setTimeout(function(){fixButtonHeights()},500)}),$(window).load(function(){blogs_link1=$(".blogslider-links").bxSlider({mode:"vertical",slideMargin:0,auto:!1,controls:!1,infiniteLoop:!1,pager:!1}),$("#blogs-next").click(function(){return blogs_link1.goToNextSlide(),!1}),$("#blogs-prev").click(function(){return blogs_link1.goToPrevSlide(),!1}),$("#blogs-first").on("click",function(){return blogs_link1.goToSlide(0),!1}),$("#blogs-last").on("click",function(){var e=blogs_link1.getSlideCount();return blogs_link1.goToSlide(e-1),!1}),$("body").on("click",".results-trigger",function(){return $(".poll-vote-list").hide(),$(".poll-results-list").fadeIn(500),$(this).hide(),$(".poll-results-list li .percentage").each(function(){var e=$(this).text();$(this).closest("li").find(".nul").removeClass("inner-bar null").addClass("voted"),$(this).closest("li").find(".inner-bar").animate({width:e},1e3),$(this).closest("li").find(".voted").delay("1000").animate({width:e},1e3),$(".percentage").delay("2000").fadeIn("fast")}),!1}),$(".announcement-box").find(".ms-srch-result-noResults").hasClass("custom-noresult")&&$("#WPZAnouncement .announcement-sliders").hide(),$(".blog-section").find(".ms-srch-result-noResults").hasClass("custom-noresult")&&$(".blog-section .bx-wrapper").hide()}),$(function(){$(document).on("click",".accordion dl dt",function(){var e=$(this),i=e.next("dd");"none"==i.css("display")?($(".accordion dl").removeClass("active"),$(".accordion dl dd").slideUp(),i.slideDown(),e.parents("dl").addClass("active")):($(".accordion dl").removeClass("active"),$(".accordion dl dd").slideUp())}),$(document).on("click",".nav li  a span i",function(){}),$(".menu-icon").click(function(e){e.preventDefault();var i=$(this).parent(".mobile-nav-icon").next(".container");$(this).hasClass("active")?($(this).removeClass("active"),i.removeClass("open")):($(this).addClass("active"),i.addClass("open"))})}),$(window).on("load, resize",function(){$(".nav li.dynamic-children").find("i").remove();var e=$(window).width();981>e?$(".nav li.dynamic-children").append("<i class='mobiledrop-down'></i>"):$(".nav li.dynamic-children").find("i").remove()}),$(function(){$(".lcoe-report-card").find("iframe").contents().find(".ewa-fo-chart-div").css({display:"block","text-align":"center"}),$(document).on("click",".mobiledrop-down",function(){var e=$(this).prev("ul");e.hasClass("dynamic")?(e.removeClass("dynamic"),e.addClass("mbldynamic"),$(this).addClass("mble-active")):(e.addClass("dynamic"),e.removeClass("mbldynamic"),$(this).removeClass("mble-active"))})});

$(function(){
	//setTimeout(function(){ $("img.lazy").lazyload();}, 1000);
});


var annoucslider;
$(window).load(function() {
	setTimeout(function(){ $("img.lazy").lazyload();}, 250);
	
 	//$('.home-landingslider .image-sliders .image-slidersimgcntr img').nailthumb({width:664,height:336,method:'resize',fitDirection:'center center'});
 	//$('.smallSlider .image-sliders .image-slidersimgcntr img').nailthumb({width:450,height:336,method:'resize',fitDirection:'center center'});
	
 	/*$('#more20pagination1').pajinate({
			num_page_links_to_display :false,
			items_per_page : 20	
		});
	$('#more20pagination2').pajinate({
			num_page_links_to_display :false,
			items_per_page : 20	
		});*/
	/*$(document).on('click', '.docLeftside a', function(){
	setTimeout(function(){
			$('#more20pagination1').pajinate({
				num_page_links_to_display :false,
				items_per_page : 20	
			});
		$('#more20pagination2').pajinate({
				num_page_links_to_display :false,
				items_per_page : 20	
			});
		$('#more20pagination3').pajinate({
			num_page_links_to_display :false,
			items_per_page : 20	
		});
		$('#more20pagination4').pajinate({
			num_page_links_to_display :false,
			items_per_page : 20	
		});
		$('#more20pagination5').pajinate({
			num_page_links_to_display :false,
			items_per_page : 20	
		});
			
			}, 1500);
	});*/
	
	/* code for announcement slider */
	$("#example5 ul.sp-slides").find("li").addClass("sp-slide");
	$("#example5 ul.sp-thumbnails").find("li").addClass("sp-thumbnail");
	
	$('.home-landingslider ul.sp-slides .sp-slide img').nailthumb({width:664,height:336,method:'resize',fitDirection:'center center'});
	$('.smallSlider ul.sp-slides .sp-slide img').nailthumb({width:450,height:336,method:'resize',fitDirection:'center center'});
 	
	annoucslider=$('#example5').sliderPro({
			loop: true,
			width:664,
			thumbnailWidth: 516,
			thumbnailHeight: 48,
			autoHeight: true,
			arrows: true,
			buttons: false,
			thumbnailsPosition: 'right',
			thumbnailArrows:false,
			thumbnailPointer: true,
			autoplay: true,
			waitForLayers: true,
			gotoSlide: function( event ) {
        
	    },
		breakpoints: {
			800: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 270,
				thumbnailHeight: 100
			},
			500: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 120,
				thumbnailHeight: 50
			}
		}
	});
	
 });



/*Common js end*/
	
	
/*Lacoecommon js*/

//function GetDDLValue(e){$("#txtSearchPlaceHolder").val(e.innerHTML)}function OpenUpcommingEventCalendar(){var e=$(".upcoming-event-box").find(".active"),t=e.attr("rel").trim().toUpperCase(),a="";"SHOWALL-BOX"==t?(a=getselectedCategory("lst_category_ShowAll"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=All&Cat="+a,"_blank")):"SOCIALEVENT-BOX"==t?(a=getselectedCategory("lst_category_Social"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Social&Cat="+a,"_blank")):"TRAINING-BOX"==t?(a=getselectedCategory("lst_category_Training"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Training&Cat="+a,"_blank")):"BOARD-BOX"==t&&(a=getselectedCategory("lst_category_Governance"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Governance&Cat="+a,"_blank"))}function getselectedCategory(e){var t=$("#"+e+" :selected").text();return"Select Category"==t?"All":t}function setSearchNavigationList(e){$("#searchnavigation").append($("<option></option>").attr("value","").attr("target","").text("")),$(e).SPFilterNode("z:row").each(function(){$("#searchnavigation").append($("<option></option>").attr("value",$(this).attr("ows_URL").split(",")[0]).attr("target",$(this).attr("ows_OpenNewWindow")).text($(this).attr("ows_Title")))})}function setSearchboxtext(){$("#SmallSearchInputBox1").val(""),1==chksearchevent?($("#SmallSearchInputBox1").val(searchconsttxt+$("#searchnavigation option:eq(1)").text().trim()),lacoesearchlink=$("#searchnavigation option:eq(1)").val(),searchtarget=$("#searchnavigation option:eq(1)").attr("target"),$("#txtSearchPlaceHolder").val($("#searchnavigation option:eq(1)").text().trim())):(lacoesearchlink=$("#searchnavigation option:selected").val(),searchtarget=$("#searchnavigation option:selected").attr("target"),$("#SmallSearchInputBox1").val("Search "+$("#searchnavigation option:selected").text().trim()),$("#txtSearchPlaceHolder").val($("#searchnavigation option:selected").text().trim()))}function GetPSTDate(){NewD=new Date;var e=NewD.getTime(),t=6e4*NewD.getTimezoneOffset(),a=e+t,n=-1.5,r=a+36e5*n,o=new Date(r);return o}function GetPSTDateParam(e){NewD=new Date(e);var t=NewD.getTime(),a=6e4*NewD.getTimezoneOffset(),n=t+a,r=-1.5,o=n+36e5*r,i=new Date(o);return i}function GetMySiteURL(){var e="",t="",a="",n=_spPageContextInfo.userLoginName;if("undefined"==typeof n)return e;t=n.split("@")[1],a=n.split("@")[0],t="_"+t.toString().replace(/\./g,"_");var r=_spPageContextInfo.siteAbsoluteUrl,o=r.toString().split("/")[2].split("."),i="";return $.each(o,function(e,t){i=0==e?t+"-my":i+"."+t}),e="https://"+i+"/personal/"+a+t+"/Blog/default.aspx"}function removejscssfile(e,t){for(var a="js"==t?"script":"css"==t?"link":"none",n="js"==t?"src":"css"==t?"href":"none",r=document.getElementsByTagName(a),o=r.length;o>=0;o--)r[o]&&null!=r[o].getAttribute(n)&&-1!=r[o].getAttribute(n).indexOf(e)&&r[o].parentNode.removeChild(r[o])}function setViewMemberLink(){var e=_spPageContextInfo.siteAbsoluteUrl+"/SitePages/ViewMembers.aspx?url="+_spPageContextInfo.webAbsoluteUrl+"/";$("#view-members-link").attr("href",e)}$(document).ready(function(){function e(e){var t=e.d.results;$.each(t,function(e,t){var a={};a.Title=t.Title,$("#TickerTapeLACOE").append("<li>"+a.Title+"</li>")})}function t(e){/*alert("error In onQueryError3:="+e.statusText)*/}SP.SOD.executeFunc("sp.js","SP.ClientContext",function(){SP.SOD.executeFunc("sp.runtime.js","SP.ClientContext",function(){var a=(SP.ClientContext.get_current(),"/_api/web/lists/getbytitle('Ticker Master')/items?$select=Title"),n=_spPageContextInfo.siteAbsoluteUrl+a;$.ajax({url:n,method:"GET",headers:{Accept:"application/json; odata=verbose"},success:e,error:t})})})});var $input=$("#SmallSearchInputBox1"),$select=$("#searchnavigation"),lacoesearchlink="",selectedtxt="",searchtarget="_blank",searchconsttxt="Search ",chksearchevent=0;window.location.href.indexOf("WrkTaskIP.aspx")>-1&&removejscssfile("corev15.css","css");
//function GetDDLValue(e){$("#txtSearchPlaceHolder").val(e.innerHTML)}function OpenUpcommingEventCalendar(){var e=$(".upcoming-event-box").find(".active"),t=e.attr("rel").trim().toUpperCase(),a="";"SHOWALL-BOX"==t?(a=getselectedCategory("lst_category_ShowAll"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=All&Cat="+a,"_blank")):"SOCIALEVENT-BOX"==t?(a=getselectedCategory("lst_category_Social"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Social&Cat="+a,"_blank")):"TRAINING-BOX"==t?(a=getselectedCategory("lst_category_Training"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Training&Cat="+a,"_blank")):"BOARD-BOX"==t&&(a=getselectedCategory("lst_category_Governance"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Governance&Cat="+a,"_blank"))}function getselectedCategory(e){var t=$("#"+e+" :selected").text();return"Select Category"==t?"All":t}function setSearchNavigationList(e){$("#searchnavigation").append($("<option></option>").attr("value","").attr("target","").text("")),$(e).SPFilterNode("z:row").each(function(){$("#searchnavigation").append($("<option></option>").attr("value",$(this).attr("ows_URL").split(",")[0]).attr("target",$(this).attr("ows_OpenNewWindow")).text($(this).attr("ows_Title")))})}function setSearchboxtext(){$("#SmallSearchInputBox1").val(""),1==chksearchevent?($("#SmallSearchInputBox1").val(searchconsttxt+$("#searchnavigation option:eq(1)").text().trim()),lacoesearchlink=$("#searchnavigation option:eq(1)").val(),searchtarget=$("#searchnavigation option:eq(1)").attr("target"),$("#txtSearchPlaceHolder").val($("#searchnavigation option:eq(1)").text().trim())):(lacoesearchlink=$("#searchnavigation option:selected").val(),searchtarget=$("#searchnavigation option:selected").attr("target"),$("#SmallSearchInputBox1").val("Search "+$("#searchnavigation option:selected").text().trim()),$("#txtSearchPlaceHolder").val($("#searchnavigation option:selected").text().trim()))}function GetPSTDate(){NewD=new Date;var e=NewD.getTime(),t=6e4*NewD.getTimezoneOffset(),a=e+t,n=-1.5,o=a+36e5*n,r=new Date(o);return r}function GetPSTDateParam(e){NewD=new Date(e);var t=NewD.getTime(),a=6e4*NewD.getTimezoneOffset(),n=t+a,o=-1.5,r=n+36e5*o,i=new Date(r);return i}function GetMySiteURL(){var e="",t="",a="",n=_spPageContextInfo.userLoginName;if("undefined"==typeof n)return e;t=n.split("@")[1],a=n.split("@")[0],t="_"+t.toString().replace(/\./g,"_");var o=_spPageContextInfo.siteAbsoluteUrl,r=o.toString().split("/")[2].split("."),i="";return $.each(r,function(e,t){i=0==e?t+"-my":i+"."+t}),e="https://"+i+"/personal/"+a+t+"/Blog/default.aspx"}function removejscssfile(e,t){for(var a="js"==t?"script":"css"==t?"link":"none",n="js"==t?"src":"css"==t?"href":"none",o=document.getElementsByTagName(a),r=o.length;r>=0;r--)o[r]&&null!=o[r].getAttribute(n)&&-1!=o[r].getAttribute(n).indexOf(e)&&o[r].parentNode.removeChild(o[r])}function setViewMemberLink(){var e=_spPageContextInfo.siteAbsoluteUrl+"/SitePages/ViewMembers.aspx?url="+_spPageContextInfo.webAbsoluteUrl+"/";$("#view-members-link").attr("href",e)}$(document).ready(function(){function e(e){var t=e.d.results;alert(t),$.each(t,function(e,t){var a={};a.Title=t.Title,$("#TickerTapeLACOE").append("<li>"+a.Title+"</li>")})}function t(e){}SP.SOD.executeFunc("sp.js","SP.ClientContext",function(){SP.SOD.executeFunc("sp.runtime.js","SP.ClientContext",function(){var a=(SP.ClientContext.get_current(),"/_api/web/lists/getbytitle('Ticker Master')/items?$select=Title"),n=_spPageContextInfo.siteAbsoluteUrl+a;$.ajax({url:n,method:"GET",headers:{Accept:"application/json; odata=verbose"},success:e,error:t})})})});var $input=$("#SmallSearchInputBox1"),$select=$("#searchnavigation"),lacoesearchlink="",selectedtxt="",searchtarget="_blank",searchconsttxt="Search ",chksearchevent=0;window.location.href.indexOf("WrkTaskIP.aspx")>-1&&removejscssfile("corev15.css","css");
function GetDDLValue(e){$("#txtSearchPlaceHolder").val(e.innerHTML)}function OpenUpcommingEventCalendar(){var e=$(".upcoming-event-box").find(".active"),t=e.attr("rel").trim().toUpperCase(),a="";"SHOWALL-BOX"==t?(a=getselectedCategory("lst_category_ShowAll"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=All&Cat="+a,"_blank")):"SOCIALEVENT-BOX"==t?(a=getselectedCategory("lst_category_Social"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Social&Cat="+a,"_blank")):"TRAINING-BOX"==t?(a=getselectedCategory("lst_category_Training"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Training&Cat="+a,"_blank")):"BOARD-BOX"==t&&(a=getselectedCategory("lst_category_Governance"),window.open("../pages/upcomingeventcalendar.aspx?ReqType=Governance&Cat="+a,"_blank"))}function getselectedCategory(e){var t=$("#"+e+" :selected").text();return"Select Category"==t?"All":t}function setSearchNavigationList(e){$("#searchnavigation").append($("<option></option>").attr("value","").attr("target","").text("")),$(e).SPFilterNode("z:row").each(function(){$("#searchnavigation").append($("<option></option>").attr("value",$(this).attr("ows_URL").split(",")[0]).attr("target",$(this).attr("ows_OpenNewWindow")).text($(this).attr("ows_Title")))})}function setSearchboxtext(){$("#SmallSearchInputBox1").val(""),1==chksearchevent?($("#SmallSearchInputBox1").val(searchconsttxt+$("#searchnavigation option:eq(1)").text().trim()),lacoesearchlink=$("#searchnavigation option:eq(1)").val(),searchtarget=$("#searchnavigation option:eq(1)").attr("target"),$("#txtSearchPlaceHolder").val($("#searchnavigation option:eq(1)").text().trim())):(lacoesearchlink=$("#searchnavigation option:selected").val(),searchtarget=$("#searchnavigation option:selected").attr("target"),$("#SmallSearchInputBox1").val("Search "+$("#searchnavigation option:selected").text().trim()),$("#txtSearchPlaceHolder").val($("#searchnavigation option:selected").text().trim()))}function GetPSTDate(){NewD=new Date;var e=NewD.getTime(),t=6e4*NewD.getTimezoneOffset(),a=e+t,n=-1.5,o=a+36e5*n,r=new Date(o);return r}function GetPSTDateParam(e){NewD=new Date(e);var t=NewD.getTime(),a=6e4*NewD.getTimezoneOffset(),n=t+a,o=-1.5,r=n+36e5*o,i=new Date(r);return i}function GetMySiteURL(){var e="",t="",a="",n=_spPageContextInfo.userLoginName;if("undefined"==typeof n)return e;t=n.split("@")[1],a=n.split("@")[0],t="_"+t.toString().replace(/\./g,"_");var o=_spPageContextInfo.siteAbsoluteUrl,r=o.toString().split("/")[2].split("."),i="";return $.each(r,function(e,t){i=0==e?t+"-my":i+"."+t}),e="https://"+i+"/personal/"+a+t+"/Blog/default.aspx"}function removejscssfile(e,t){for(var a="js"==t?"script":"css"==t?"link":"none",n="js"==t?"src":"css"==t?"href":"none",o=document.getElementsByTagName(a),r=o.length;r>=0;r--)o[r]&&null!=o[r].getAttribute(n)&&-1!=o[r].getAttribute(n).indexOf(e)&&o[r].parentNode.removeChild(o[r])}function setViewMemberLink(){var e=_spPageContextInfo.siteAbsoluteUrl+"/SitePages/ViewMembers.aspx?url="+_spPageContextInfo.webAbsoluteUrl+"/";$("#view-members-link").attr("href",e)}$(document).ready(function(){function e(e){var t=e.d.results;(null==t||""==t||" "==t||"undefined"==t)&&$(".placeholder").hide(),$.each(t,function(e,t){var a={};a.Title=t.Title,$("#TickerTapeLACOE").append("<li>"+a.Title+"</li>")})}function t(e){}SP.SOD.executeFunc("sp.js","SP.ClientContext",function(){SP.SOD.executeFunc("sp.runtime.js","SP.ClientContext",function(){var a=(SP.ClientContext.get_current(),"/_api/web/lists/getbytitle('Ticker Master')/items?$select=Title"),n=_spPageContextInfo.siteAbsoluteUrl+a;$.ajax({url:n,method:"GET",headers:{Accept:"application/json; odata=verbose"},success:e,error:t})})})});var $input=$("#SmallSearchInputBox1"),$select=$("#searchnavigation"),lacoesearchlink="",selectedtxt="",searchtarget="_blank",searchconsttxt="Search ",chksearchevent=0;window.location.href.indexOf("WrkTaskIP.aspx")>-1&&removejscssfile("corev15.css","css");
/*Lacoecommon js end*/

$(function(){
	var newresource;
	newresource=$('.resource-link-section table table tbody').bxSlider({
		mode:'vertical',
		pager:false,
		controls:false,
		infiniteLoop: false
	});
	$('#resourcelink-next').click(function(){
	newresource.goToNextSlide();
	return false;
	});
	$('#resourcelink-prev').click(function(){
	newresource.goToPrevSlide();
	return false;
	});
	$("#resourcelink-first").on("click" ,function() {
		newresource.goToSlide(0);
		return false;
	});
	$("#resourcelink-last").on("click" ,function() {
		var count = newresource.getSlideCount();
		newresource.goToSlide(count-1);
		return false;
	});
	
	/*Hiding title landing*/
	var urlLanding = window.location.href;
	if(urlLanding=="https://lacoe.sharepoint.com/Pages/Home.aspx" || urlLanding=="https://lacoe.sharepoint.com/" || urlLanding=="https://lacoe.sharepoint.com/Pages/Home.aspx#" || urlLanding=="https://lacoe.sharepoint.com")
	  {
	  	$('#pageTitle').hide();
	  }
      else
      {
      	$('#pageTitle').show();
      }
	/*hiding title landing*/
	
	/* announcement controls */
	$(document).on('click','#anslider-first',function(){
		$('#example5').sliderPro( 'gotoSlide', 0 );
	});
	$(document).on('click','#anslider-prev',function(){
		$('#example5').sliderPro( 'previousSlide' );
	})
	$(document).on('click','#anslider-next',function(){
		$('#example5').sliderPro( 'nextSlide');
	})
	$(document).on('click','#anslider-last',function(){
		var totalcount=$('#two .sp-thumbnail').length
		$('#example5').sliderPro( 'gotoSlide', totalcount-1 );
	});
	
});
$(window).load(function(){

	$('#news-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
	$('#application-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
	$('#form-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
	$('#policies-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
	$('#aniversary-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 4	
	});
	$('#standardforms-pagination').pajinate({
		num_page_links_to_display :false,
		items_per_page : 10	
	});
	$('#lt-pagination').pajinate({
			num_page_links_to_display :false,
			items_per_page : 5	
	});
	$('#at-all').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
	$('#at-rt-paging').pajinate({
		num_page_links_to_display :false,
		items_per_page : 5	
	});
});

/*$(window).load(function(){
	setTimeout(function(){ $('.pagination-page').css('width','100%') }, 1000);
})*/

$(window).load(function(){
	calslider1 = $(".cal-sliderdate1").bxSlider({
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 204,
        slideMargin: 20,
        pager:false,
		controls:false,
		infiniteLoop: false,
		startSlide: 0,
    });
		calslider2 = $(".cal-sliderdate2").bxSlider({
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 204,
        slideMargin: 20,
        pager:false,
		controls:false,
		infiniteLoop: false,
    }); 
		calslider3 = $(".cal-sliderdate3").bxSlider({
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 204,
        slideMargin: 20,
        pager:false,
		controls:false,
		infiniteLoop: false,
    });
		calslider4 = $(".cal-sliderdate4").bxSlider({
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 204,
        slideMargin: 20,
        pager:false,
		controls:false,
		infiniteLoop: false,
		
    });
    
    $(document).on('click', '#sa-next', function(){
		calslider1.goToNextSlide();
	return false;
	});
	
	$(document).on('click', '#sa-prev', function(){
		calslider1.goToPrevSlide();
	return false;
	});
	
	$(document).on('click', '#sa-first', function(){
		calslider1.goToSlide(0);
		return false;
	});
	
	$(document).on('click', '#sa-last', function(){
		var count = calslider1.getSlideCount();
		calslider1.goToSlide(count-1);
		return false;
	});
	
	//
	
	$('#b-next').on(function(){
		calslider2.goToNextSlide();
	return false;
	});
	$('#b-prev').on(function(){
		calslider2.goToPrevSlide();
	return false;
	});
	$("#b-first").on("click" ,function() {
		calslider2.goToSlide(0);
		return false;
	});
	$("#b-last").on("click" ,function() {
		var count = calslider2.getSlideCount();
		calslider2.goToSlide(count-1);
		return false;
	});
	
	//
	
	$('#t-next').on(function(){
		calslider3.goToNextSlide();
	return false;
	});
	$('#t-prev').on(function(){
		calslider3.goToPrevSlide();
	return false;
	});
	$("#t-first").on("click" ,function() {
		calslider3.goToSlide(0);
		return false;
	});
	$("#t-last").on("click" ,function() {
		var count = calslider3.getSlideCount();
		calslider3.goToSlide(count-1);
		return false;
	});
	
	//
	
	$('#se-next').on(function(){
		calslider4.goToNextSlide();
	return false;
	});
	$('#se-prev').on(function(){
		calslider4.goToPrevSlide();
	return false;
	});
	$("#se-first").on("click" ,function() {
		calslider4.goToSlide(0);
		return false;
	});
	$("#se-last").on("click" ,function() {
		var count = calslider4.getSlideCount();
		calslider4.goToSlide(count-1);
		return false;
	});

    $('.upcoming-event-box.cal-view-icon .tabResult').css('height','auto');
    $('.upcoming-event-box.cal-view-icon .tabResult').children('.calenader-loading').fadeOut();
    $('.calenader-loading').fadeOut();
    
    $('.tabNav').each(function(){
		$(this).children('ul').children('li').css({
			'width' : (100 / ( $(this).children('ul').children('li').length ) ) +  '%'
		})		
	})
})

/*Tabination active class after refresh start*/
/*$(document).ready(function () {
	$(".tabNav li a").click(function () {
			var id = $(this);
		//alert(id)
			id.parents('.tabNav').find('a').removeClass("active");
			$(id).addClass("active");
			localStorage.setItem("selectedolditem", $(id).text());
			//alert(localStorage.getItem("selectedolditem"));
		});
	
		var selectedolditem = localStorage.getItem('selectedolditem');
	
		if (selectedolditem !== null) {
	
			
			setTimeout(function(){ $("a:contains('" + selectedolditem + "')").addClass("active").trigger('click'); }, 1000);
			
		}
			
});*/
/*Tabination active class after refresh end*/
