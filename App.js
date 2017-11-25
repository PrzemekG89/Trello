//Komunikacja z serwerem
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '2508',
    'X-Auth-Token': '06598f55de83b199feb8352b51226cba'
};

$.ajaxSetup({
    headers: myHeaders
});


$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

//tworzenie kolumn
function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

//tworzenie kart
function setupCards(col, cards) {
    cards.forEach(function(card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
    })
}