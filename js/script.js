$(document).ready(function(){
	new WOW().init();
	$('.single-item').slick({
		infinite: true,
		slidesToShow: 1,
		initialSlide: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
	});
	$('.single-item2').slick({
		infinite: true,
		slidesToShow: 1,
		initialSlide: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	$("main .question .width2 .left .item").click(function(){
		$("main .question .width2 .left .item").removeClass("active");
		$(this).addClass("active");
	});
	$(".form-trigger").click(function(){
		$(".bg-form-close").addClass("active");
	});
	$(".bg-form-close .close, .bg-form-close .close2").click(function(){
		$(".bg-form-close").removeClass("active");
	});
	function animateText(id, text, i) {
		document.getElementById("dynamic-text").innerHTML = text.substring(0, i);
		i++;
		if (i > text.length) i = 0;
		setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
	}

	temp_date = new Date();
	day = temp_date.getDate();
	month = temp_date.getMonth() + 1;
	year = temp_date.getYear() - 100;
	if (day < 10) {
		day = "0" + day;
	}
	if (month <10) {
		month = "0" + month;
	}
	document.getElementById('data').innerHTML = day + "." + month + ".20" + year ;
	$("#podr .title").click(function(){
		$(".pad").slideUp("fast");
		$("#podr .title").removeClass("active");
		$(this).toggleClass("active").siblings(".pad").stop().slideToggle("fast");
	});
});



