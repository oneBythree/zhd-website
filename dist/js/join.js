$(document).ready(function(){function e(){$("body").width()>=960?$(".zhd-banner img").attr("src","../images/join/banner.jpg"):$(".zhd-banner img").attr("src","../images/join/banner2.jpg")}$.fn.hoverDelay=function(e){var o,a,t={hoverDuring:200,outDuring:200,hoverEvent:function(){$.noop()},outEvent:function(){$.noop()}},n=$.extend(t,e||{});return $(this).each(function(){$(this).hover(function(){clearTimeout(a),o=setTimeout(n.hoverEvent,n.hoverDuring)},function(){clearTimeout(o),a=setTimeout(n.outEvent,n.outDuring)})})},$(".bar-item.product").hoverDelay({outDuring:500,hoverEvent:function(){$(".product-hover").fadeIn(500)},outEvent:function(){$(".product-hover").fadeOut(500)}}),$(".icont-wechat").hoverDelay({outDuring:500,hoverEvent:function(){$(".wechat.child-li img").fadeIn(500)},outEvent:function(){$(".wechat.child-li img").fadeOut(500)}}),$(window).scroll(function(e){var o=$("body").width(),a=$(window).scrollTop();o>=960&&a>100?$(".navbar-zhd").addClass("navbar-scroll"):$(".navbar-zhd").removeClass("navbar-scroll"),a>200?$("#returnTop").fadeIn():$("#returnTop").fadeOut()}),$("#defaultForm").bootstrapValidator({message:"This value is not valid",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{corporate_name:{validators:{notEmpty:{message:"公司名称不能为空"}}},corporate_type:{validators:{notEmpty:{message:"企业类型不能为空"}}},contacts:{validators:{notEmpty:{message:"联系人不能为空"}}},tel:{validators:{notEmpty:{message:"联系电话不能为空"},regexp:{regexp:/^1[3|5|8]{1}[0-9]{9}$/,message:"请输入正确的手机号码"}}},demand_explain:{validators:{notEmpty:{message:"请填写完整信息"}}}},submitHandler:function(e,o,a){console.log(o.serialize())}}).on("success.form.bv",function(e){e.preventDefault();var o=$(e.target);o.data("bootstrapValidator");$.get(o.attr("action"),o.serialize(),function(e){alert(e[0].message),$('[name="corporate_name"]').val(""),$('[name="corporate_type"]').val(""),$('[name="contacts"]').val(""),$('[name="tel"]').val(""),$('[name="demand_explain"]').val(""),$("#myModal").modal("hide"),$("#defaultForm").data("bootstrapValidator").destroy(),$("#saveadmin_form").data("bootstrapValidator",null)})}),$("#returnTop").click(function(){return $("body,html").animate({scrollTop:0},200),!1}),$(".join-page .tab").find("a").on("click",function(){$(".join-page .tab a").removeClass("on"),$(this).addClass("on")}),e(),$(window).resize(function(){e()})});