// script.js
$(document).ready(function() {
    $('#add-row').click(function() {
        var columnCount = $('#table thead tr th').length;
        var newRow = '<tr>';
        for (var i = 0; i < columnCount; i++) {
            newRow += '<td>Fila ' + ($('#table tbody tr').length + 1) + ', Columna ' + (i + 1) + '</td>';
        }
        newRow += '</tr>';
        $('#table tbody').append(newRow);
    });

    $('#remove-row').click(function() {
        $('#table tbody tr:last').remove();
    });

    $('#add-column').click(function() {
        $('#table thead tr').append('<th>Columna ' + ($('#table thead tr th').length + 1) + '</th>');
        $('#table tbody tr').each(function() {
            $(this).append('<td>Fila ' + ($(this).index() + 1) + ', Columna ' + ($('#table thead tr th').length) + '</td>');
        });
    });

    $('#remove-column').click(function() {
        var columnCount = $('#table thead tr th').length;
        if (columnCount > 1) {
            $('#table thead tr th:last').remove();
            $('#table tbody tr').each(function() {
                $(this).find('td:last').remove();
            });
        }
    });

    
});