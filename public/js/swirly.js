(function( $ ) {	
	
    // The swirly plugin
	$.fn.swirly = function(options) {
		
		var mainNode = this;
		
		// The module pattern
		var swirly = {
			init: function( settings) {
				swirly.config = $.extend($.fn.swirly.defaults, settings);
				swirly.setup();
			},
			setup:function(){
				
				var spansHTML = "";
				var color;
				var colorCount = swirly.config.colors.length;
				
				for(var i=0;i<2;i++)
				{
					color = swirly.config.colors[i%colorCount];
					spansHTML = spansHTML+"<span style='position:relative;left:0;top:0;font-size: 30px;color:"+color+"' class='swirly-circle swirly-"+mainNode.attr("id")+"-"+i+"'>"+$.fn.swirly.defaults.text+"</span>";
				}
				
				mainNode.html(spansHTML);
			}
		}
		
		// Initilization
		// Initialize swirly literal
		swirly.init(options);		
		
		var signalX;
		var angleX;
		var singalY;
		var angleY;
		
		var tempX;
		var tempY;
		var timerSpeed = $.fn.swirly.defaults.speed;
		var width = (parseInt(mainNode.width())/2)-13;
		var height = (parseInt(mainNode.parent().height())/2)-15;
		
		var time=0;
		var convertShiftPhase;
			
		var motionInterval = requestAnimationFrame(doMotion);
		
		function doMotion()
		{
			mainNode.find("span.swirly-circle").css("font-size",$.fn.swirly.defaults.swirlySize);	
			
			// Convert from degree to radians
			convertShiftPhase = $.fn.swirly.defaults.phaseShift*Math.PI/180;

			// Building X1 signals
			angleX=((2*Math.PI*time/$.fn.swirly.defaults.frequencyX)+convertShiftPhase);
			angleX = angleX%360;
			
			signalX=($.fn.swirly.defaults.scale * Math.sin(angleX));
			signalX += $.fn.swirly.defaults.offset;
			
			// Building Y signal
			angleY =(2*Math.PI*time/$.fn.swirly.defaults.frequencyY);
			angleY = angleY%360;
			
			signalY =($.fn.swirly.defaults.scale * Math.sin(angleY));
			signalY = $.fn.swirly.defaults.scale * Math.sin(angleY);
			signalY += $.fn.swirly.defaults.offset;
			
			// Increase the position of two swirly by the width and hieght of their parent node, disregarding the reverse negative value
			if($.fn.swirly.defaults.reverseX == -1) width = Math.abs(width)*-1;
			else width = Math.abs(width);
			if($.fn.swirly.defaults.reverseY == -1) height = Math.abs(height)*-1;
			else height = Math.abs(height);
			
			if($.fn.swirly.defaults.reverseX == -1){
				tempX = (signalX+width)*$.fn.swirly.defaults.reverseX;
			}else{
				tempX = (signalX+width);
				signalX = signalX + (width*2) + $.fn.swirly.defaults.offset;
			}
			if($.fn.swirly.defaults.reverseY == -1){
				tempY = (signalY+height)*$.fn.swirly.defaults.reverseY;
			}else{
				tempY = (signalY+height);
				signalY = signalY + (height*2) + $.fn.swirly.defaults.offset;
			}
			
			signalX -= width;
			signalY -= height;
			
			// Animate swirlies
			mainNode.find("span.swirly-"+mainNode.attr("id")+"-0").animate({left:signalX,top:signalY},timerSpeed/2);
			mainNode.find("span.swirly-"+mainNode.attr("id")+"-1").animate({left:tempX,top:tempY},timerSpeed/2);
			
			time = (time+30)%999999;
			
			if(mainNode.children().length == 0)
			{
				cancelAnimationFrame(motionInterval);
			}
			motionInterval = requestAnimationFrame(doMotion);
		}
		
		return motionInterval;
	}
	
	$.fn.swirly.remove = function(interval, elm)
	{
		$.fn.swirly.defaults.stop = true;
		cancelAnimationFrame(interval);
		$(elm).empty();
	}
	
	$.fn.swirly.defaults = {
		phaseShift:90,
		swirlySize:28,
		frequencyX:2100,
		frequencyY:2240,
		offset:0,
		scale: 40,
		speed:20,
		reverseY:-1,
		reverseX:-1,
		text: '&#9679;',
		img: '',
		stop: false,
		colors:['white','white']
	};
})( jQuery );