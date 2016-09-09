	$( document ).ready(function() {
	
		var contactContainer = $(".contactContainer");
		var addContact       = $("#addContact");
		var checkMark        = $("#checkmarkWrapper");
			
		// Listener to add contacts. This will eventually have either a drawer, or modal to select options from a populated list.
		// Included will be an id reference to add to data
		addContact.click(function(){
		
			var newContact = $("<div/>", {class:"contact", html:"contact@cntct.com"});
			contactContainer.append(newContact);
		
		});
			
		// Add listener to remove contacts 
		contactContainer.on('click', '.contact', function() { 
			$(this).remove();
		});
			
		// Simple toggle for checkmark. This will either set a variable, or just reference it's state.				
		checkMark.click(function(){
			$(this).find("img").toggle();
		});
		
	});