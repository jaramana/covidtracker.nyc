var labels = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DATE_OF_INTEREST;
});

var data1 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.NEW_COVID_CASE_COUNT;
});;

var data2 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.NEW_COVID_CASE_COUNT_CUM;
});;

var ctx = case_count.getContext('2d');
var config = {
   type: 'bar',
   options: {
        legend: {
            display: true,
            labels: {
				boxWidth: 2,
				padding: 27,
				fontFamily: 'Arial',
				fontColor: '#555'				
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
      datasets: [{
         label: 'Daily Positive Tests',
         data: data1,
         backgroundColor: '#800080',
         borderColor: '#800080'		 
      },
	  {
         label: 'Total Positive Tests',
         data: data2,
         borderColor: '#800080',
		 backgroundColor: "rgba(220,220,220,0.0)",
		 type: 'line'
      }]
   }
};

var chart = new Chart(ctx, config);