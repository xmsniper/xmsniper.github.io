(function () {
	$.extend({
		//防扒
		stopSeeMyCode:function () {
			document.onkeydown = function() {
				var e = window.event || arguments[0];
				if(e.keyCode == 123) {
					return false;
				} else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
					return false;
				}
			};
			document.oncontextmenu = function() {
				return false;
			}
		}
	});
	$.fn.extend({
		
	});
})();
