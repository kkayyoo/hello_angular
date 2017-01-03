// select only one checkbox in a group
$('input[type="checkbox"]').on('click', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});
