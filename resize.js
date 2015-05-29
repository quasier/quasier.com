var size, windowHeight, windowWidth;
			function resizeDiv() {
				
				windowHeight = $(window).height()*0.95;
				windowWidth = $(window).width()*0.95;
				
				if (windowHeight <= windowWidth) {
					$('#mainDiv').height(windowHeight);
					$('#mainDiv').width(windowHeight);
					$('#backgroundDiv').height(windowHeight*0.5);
				} else {
					$('#mainDiv').height(windowWidth);
					$('#mainDiv').width(windowWidth);
					$('#backgroundDiv').height(windowWidth*0.5);
				}	
			}
			
			$(window).resize(function() {
				resizeDiv()
			});
			
			$(window).trigger('resize');