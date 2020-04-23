var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.openweathermap.org/data/2.5/weather?zip=95050&appid=fd4698c940c6d1da602a70ac34f0b147&units=imperial",
    "method": "GET"
}

$.ajax(settings).done(function(response) {
    console.log(response);

    var case_count_a = case_hosp_death_cumulative.jsonarray[50].NEW_COVID_CASE_COUNT_CUM;
    $("#case_count_a").append(case_count_a);
    var hospitalized_a = case_hosp_death_cumulative.jsonarray[50].HOSPITALIZED_CASE_COUNT_CUM;
    $("#hospitalized_a").append(hospitalized_a);
    var death_count_a = case_hosp_death_cumulative.jsonarray[50].DEATH_COUNT_CUM;
    $("#death_count_a").append(death_count_a);

});