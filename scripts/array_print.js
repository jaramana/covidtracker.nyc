var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://data.cityofnewyork.us/resource/auuc-fqzi.json",
    "method": "GET"
}

$.ajax(settings).done(function(response) {
    console.log(response);

    var case_count_a = case_hosp_death_cumulative.jsonarray[99].NEW_COVID_CASE_COUNT_CUM;
    $("#case_count_a").append(case_count_a);
    var hospitalized_a = case_hosp_death_cumulative.jsonarray[99].HOSPITALIZED_CASE_COUNT_CUM;
    $("#hospitalized_a").append(hospitalized_a);
    var death_count_a = case_hosp_death_cumulative.jsonarray[99].DEATH_COUNT_CUM;
    $("#death_count_a").append(death_count_a);

});