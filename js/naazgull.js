$(document).foundation();

var dfz = dfz || {};
dfz.naazgull = {  
	init : function() {
		var el = [ 109, 97, 105, 108, 116, 111, 58, 110, 97, 97, 122, 103, 117, 108, 108, 64, 100, 102, 122, 46, 112, 116 ];
		var ec = [ 110, 97, 97, 122, 103, 117, 108, 108, 64, 100, 102, 122, 46, 112, 116 ];
		$('#e-mail').attr('href', dfz.naazgull.tostr(el)).html(dfz.naazgull.tostr(ec));

		var hc = [ 110, 97, 97, 122, 103, 117, 108, 108, 46, 100, 102, 122, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109 ];
		$('#hangouts').attr('target', '_blank').attr('href', 'https://plus.google.com/u/0/105282658745105084068/about/p/pub').html(dfz.naazgull.tostr(hc));

		var sl = [ 115, 107, 121, 112, 101, 58, 110, 97, 97, 122, 103, 117, 108, 108, 63, 99, 97, 108, 108 ];
		var sc = [ 110, 97, 97, 122, 103, 117, 108, 108 ];
		$('#skype').attr('href', dfz.naazgull.tostr(sl)).html(dfz.naazgull.tostr(sc));

		$('#codename').on('click', function() {
			$('html, body').animate({
				scrollTop: $("#can-be-reached").offset().top
			}, 1500);	
		});
		$('.goto-top').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1500);			
		});

		$('body').css('opacity', '1');
	},

	tostr : function(codes) {
		var s = '';
		for (var c in codes) {
			s += String.fromCharCode(codes[c]);
		}
		return s;
	}
}