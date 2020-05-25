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
			onClick: null,
        },
    scales: {
        yAxes: [{
			id: 'A',
            display: true,
            position: 'right',
            gridLines:{
                display: false
			},
			scaleLabel: {
				display: true,
				labelString: 'Daily Cases'
			},
            ticks: {
				suggestedMin: 0,
            }
        }, {
			id: 'B',
            display: true,
            position: 'left',	
			scaleLabel: {
				display: true,
				labelString: 'Total Cases'
			},
            ticks: {
				suggestedMin: 0		
            }
        }]
		

		
		
    }
   },
   data: {
      labels: labels,
      datasets: [{
         label: 'Daily Positive Cases',
         data: data1,
         backgroundColor: "rgba(128,0 ,128,0.3)",
         borderColor: '#800080',
         yAxisID: 'A'
      },
	  {
         label: 'Total Positive Cases',
         data: data2,
         borderColor: '#800080',
		 backgroundColor: "rgba(220,220,220,0.0)",
		 type: 'line',
         yAxisID: 'B'
      }]
   }
};

var chart = new Chart(ctx, config);