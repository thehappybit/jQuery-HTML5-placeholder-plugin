/*
 * jQuery HTML5 Placeholder plugin - https://github.com/thehappybit/jQuery-HTML5-placeholder-plugin
 *
 * Adds cross-browser support for the HTML5 placeholder attribute functionality.
 *
 * TERMS OF USE - Query HTML5 Placeholder plugin
 * 
 * Open source under the BSD License. 
 * 
 * Copyright – 2012 The Happy Bit (http://thehappybit.com)
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

(function($) {
	$.placeholder = function(options) {
		var parameters = {
			'className': 'placeholder',
			'attrName': 'placeholder'
		};
		parameters = $.extend(parameters, options);

		// Test for native browser's placeholder support
		var test = document.createElement('input');
		if( parameters.attrName == 'placeholder' && 'placeholder' in test )
			return;

		$("[" + parameters.attrName + "]").each(function(index, element) {
			var input = $(element);
			var form = input.parents("form");
			var placeholderText = input.attr(parameters.attrName);

			input
				.focus(function() {
					if( input.val() == placeholderText ) {
						if( !input.blurred ) {
							input.removeClass(parameters.className);
				 			input.val("");
				 		}
				 	}
				})
				.blur(function() {
					if( input.val() == "" ) {
						input.blurred = false;
						input.val(placeholderText);
						input.addClass(parameters.className);
					}
					else
						input.blurred = true;
				})
				.keyup(function(e){
					if(e.keyCode === 13){
						if( input.val() == "" ) {
							input.blurred = false;
							input.val(placeholderText);
							input.addClass(parameters.className);
						}
						else
							input.blurred = true;
					}
				})
				.trigger('blur');

			// Ensuring not to submit placeholder data
			form
				.submit(function() {
					if( !input.blurred )
						input.val("");
				});
		});
	};
})(jQuery);