$(document).ready(function() {
  $('#users').DataTable({
    ajax: 'api/users',    
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'email' }
    ],
    paging: true,
    searching: true,
    ordering: true,
    dom: 'Bfrtip',         
    buttons: ['excel', 'pdf', 'print'],
    responsive: true
  });
});
