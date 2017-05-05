window.onload=function() 
{ 
for(var ii=0; ii<document.links.length; ii++) 
document.links[ii].onfocus=function(){this.blur()} 
}

/* 顶部菜单选项 */
$(function(){
	$("#topMenu li a").each(function(index){
		var showMenu =$(this).attr("id")+'2';
		
		$(this).on('mouseover',function(){
			 $(".zyblock").hide();
			 $("#"+showMenu).show();
		})
		$("#"+showMenu+" ul li a").on("mouseover", function() {
			$(this).addClass("curr1");
		});
		$("#"+showMenu+" ul li a").on("mouseleave", function() {
			$(this).removeClass("curr1");
		});
		$("#"+showMenu).on("mouseleave", function() {
			$(this).hide();
			$("#"+showMenu+" ul li a").removeClass("curr1");
		});
		
	})

})

//选项卡动作
function changeMenus(ID,name,classover,classout,num){
	var nameValue = name.split('_');
	for(i=1;i<=num;i++){
		var tag2=$('#'+nameValue[0]+'_'+i);
		var con2=$('#'+nameValue[0]+'con'+i);
		if(i==ID){
			tag2.removeClass(classout);
			tag2.addClass(classover);
			con2.show();
		}else{
			tag2.removeClass(classover);
			tag2.addClass(classout);
			con2.hide();
		}
	}
}

//分享代码
function share(){
	document.write('<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a title="分享到QQ空间" href="#" class="bds_qzone" data-cmd="qzone"></a><a title="分享到新浪微博" href="#" class="bds_tsina" data-cmd="tsina"></a><a title="分享到腾讯微博" href="#" class="bds_tqq" data-cmd="tqq"></a><a title="分享到人人网" href="#" class="bds_renren" data-cmd="renren"></a><a title="分享到微信" href="#" class="bds_weixin" data-cmd="weixin"></a></div>');
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date())];
}

//收藏
function AddFavorite(sURL, sTitle){
    try{
        window.external.addFavorite(sURL, sTitle);
    }catch (e){
        try{
            window.sidebar.addPanel(sTitle, sURL, "");
        }catch (e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

//选中状态
$(function () {
	var thirdBreadCrumb = $.trim($(".navigator a:eq(2)").text());
	$.each($(".nav a"), function (index, item) {
		var text = $.trim($(item).text());
		if (text == thirdBreadCrumb) {
			$(item).addClass("menu_second_curr");
			if($(item).next().hasClass("subnav")){
				$(item).next().show();
			}
		}
	})
})

//单页选中状态
$(function () {
	var thirdBreadCrumb = $.trim($(".navigator a:eq(1)").text());
	$.each($(".navonepage a"), function (index, item) {
		var text = $.trim($(item).text());
		if (text == thirdBreadCrumb) {
			$(item).addClass("menu_second_curr");
		}
	})
})


//返回顶部隐藏
function tasksclose(){
	$(".rb_btn").hide();
}
 
//搜索
function searchkeywords(){
	var keywords = $("#keywords");
	if(keywords.val()=='==在此输入您要搜索的关键字=='||keywords.val()==''){
		alert('请输入您要搜索的关键词！');
		keywords.focus();
		return false;
	}
	location.href = "http://www.zhongyi.com/search/list/1-0-0-0-"+keywords.val();
} 
$(function(){ 
	$("#keywords").keydown(function(e){ 
		var curKey = e.which; 
		if(curKey == 13){ 
			searchkeywords();
		} 
	}); 
}); 


function searchkeywords2(){

	var serachKeyword = $("#serachKeyword");
	var starttime = $("#starttime");
	var endtime = $("#endtime");
	var stype = $("#type");
	
	if(serachKeyword.val()==''){
	
		alert('请输入您要搜索的关键词！');
		serachKeyword.focus();
		return false;
	}
	
	stype = stype.val()==''?1:stype.val();
	starttime = starttime.val()==''?0:starttime.val();
	endtime = endtime.val()==''?0:endtime.val();

	if(starttime!=0){
		starttime=transdate(starttime);
	}
	if(endtime!=0){
		endtime=transdate(endtime);
	}
	location.href="../../../search/list/index.html"/*tpa=http://www.zhongyi.com/search/list/*/+stype+"-"+starttime+"-"+endtime+"-1-"+serachKeyword.val();
	//window.open("/search/list/"+keywords.val()+"/"+stype+"/"+transdate(starttime)+"/"+transdate(endtime));
}

//专家出诊时间效果
$(function(){
	$(".outProfessionalTitle2").hover(
	  function () {
		$(this).siblings().show();
		$(this).siblings().css({'z-index':'9999999'});
		$(this).parent().parent().css({'z-index':'999999'});
		$(this).parent().css({'z-index':'99999'});//当前点击的td里面div也要给z-index值，保证显示的div的值要大于当前td其他div的值
	  },
	  function () {
		$(this).siblings().hide();
		$(this).siblings().css({'z-index':'9999'});
		$(this).parent().parent().css({'z-index':'99999'});
		$(this).parent().css({'z-index':'9999'});
	  }
	);			
});

//选中状态
$(function () {
	var getPosition =$("#getPosition").text();
	var getPositionArray = getPosition.split('>>');
	if(getPositionArray!=''){
		$.each($('#menuList >li> a'), function (index, item) {

			var text = $.trim($(item).text());

			if (text == $.trim(getPositionArray[2])) {

				$(item).removeClass();
				$(item).addClass("mred");
			}else{
				$(item).removeClass();
				$(item).addClass("morg");
			}
		})	
	}
})
