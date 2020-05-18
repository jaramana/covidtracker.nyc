var labels = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DATE_OF_INTEREST;
});

var data1 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.HOSPITALIZED_CASE_COUNT;
});;

var data2 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.HOSPITALIZED_CASE_COUNT_CUM;
});;

var ctx = hospitalized.getContext('2d');
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
				labelString: 'Daily Hospitalized'
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
				labelString: 'Total Hospitalized'
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
         label: 'Daily Hospitalized Count',
         data: data1,
         backgroundColor: "rgba(255,165,0,0.3)",
		 borderColor: '#FFA500',
         yAxisID: 'A'		 
      },
	  {
         label: 'Total Hospitalized',
         data: data2,
         borderColor: '#FFA500',
		 backgroundColor: "rgba(220,220,220,0.0)",
		 type: 'line',
         yAxisID: 'B'
      }]
   }
};

var chart = new Chart(ctx, config);