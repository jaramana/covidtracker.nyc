var labels = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DATE_OF_INTEREST;
});

var data1 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.NEW_COVID_CASE_COUNT_CUM;
});;

var data2 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.HOSPITALIZED_CASE_COUNT_CUM;
});;

var data3 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DEATH_COUNT_CUM;
});;




var ctx = case_hosp_death.getContext('2d');
var config = {
   type: 'line',
   options: {
        legend: {
            display: true,
            labels: {
				boxWidth: 1.7,
				padding: 17
            },
			position: 'bottom',
			align: 'center',
			fullWidth: 'false',
        },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,
            }
        }]
    }
   },
   data: {
      labels: labels,
      datasets: [
	  {
         label: 'Total Positive Tests',
         data: data1,
         borderColor: '#800080',
		 backgroundColor: "rgba(220,220,220,0.0)",
      },
	  {
         label: 'Total Hospitalized',
         data: data2,
         borderColor: '#FFA500',
		 backgroundColor: "rgba(220,220,220,0.0)",
      },
	  {
         label: 'Total Death',
         data: data3,
         borderColor: '#ff0000',
		 backgroundColor: "rgba(220,220,220,0.0)",
      },]
   }
};

var chart = new Chart(ctx, config);