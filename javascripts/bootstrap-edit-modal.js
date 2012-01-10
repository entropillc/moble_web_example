$(function() {
	
	$('a.edit-modal').each(function(evt){
		var $this = $(this);
		var href = $this.attr('href');
		var modal = $(href);
		
		var cancelButton = modal.find('a.btn.danger');
		var saveButton = modal.find('a.btn.primary');
		var textArea = modal.find('textarea');

    cancelButton.bind('click', function(evt) {
      modal.modal('hide');
    });

		saveButton.bind('click', function(evt) {
      modal.modal('hide');
    });

		modal.bind('shown', function () {
			console.log($this.html());
		  textArea.focus();
		  
		})
	});
	
	$('a.edit-modal').bind('click', function(evt){
		var $this = $(this);
    var href = $this.attr('href');
    var modal = $(href);
		var firstField = modal.find('textarea');
    
    
    modal.modal({
      backdrop: true,
      keyboard: true,
      show: true
    });
	});
	
});