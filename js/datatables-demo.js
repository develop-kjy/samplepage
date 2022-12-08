// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable2').DataTable({
    "lengthMenu": [ 5, 10, 20, 50, 100 ]
  });
});


$(document).ready(function() {
  $('#dataTable').DataTable({
    "lengthMenu": [ 20, 50, 75, 100 ]
  });
});