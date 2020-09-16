var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://data.cityofnewyork.us/resource/auuc-fqzi.json",
    "method": "GET"
}

$.ajax(settings).done(function(response) {
    console.log(response);

<<<<<<< HEAD
    var case_count_a = case_hosp_death_cumulative.jsonarray[199].NEW_COVID_CASE_COUNT_CUM;
    $("#case_count_a").append(case_count_a);
    var hospitalized_a = case_hosp_death_cumulative.jsonarray[199].HOSPITALIZED_CASE_COUNT_CUM;
    $("#hospitalized_a").append(hospitalized_a);
    var death_count_a = case_hosp_death_cumulative.jsonarray[199].DEATH_COUNT_CUM;
=======
    var case_count_a = case_hosp_death_cumulative.jsonarray[145].NEW_COVID_CASE_COUNT_CUM;
    $("#case_count_a").append(case_count_a);
    var hospitalized_a = case_hosp_death_cumulative.jsonarray[145].HOSPITALIZED_CASE_COUNT_CUM;
    $("#hospitalized_a").append(hospitalized_a);
    var death_count_a = case_hosp_death_cumulative.jsonarray[145].DEATH_COUNT_CUM;
>>>>>>> parent of fd62986... Data Update
    $("#death_count_a").append(death_count_a);

});