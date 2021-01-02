var dt = Date.parse(document.getElementById('ArrivalDate').value);
//stack overflow
function calculate() {
    var dd = document.getElementById('datedepart');
    var da = document.getElementById('ArrivalDate');
    var total = document.getElementById('total_cost');
    var hotel = document.getElementById('hotel5');


    if (!(dd.value * 1) || !(da.value * 1) || da.value > dd.value) {
        total.value = '0'; //you can set it to 'not allowed' also if you wish (instead of '0')
        return;
    }

    var days = Math.round((
        dd.value -
        da.value
    ) / 86400);
    var cost = days * prices[hotel.value];
    if (isNaN(cost))
        cost = 0;
    total.value = cost;
}