var labels = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DATE_OF_INTEREST;
});

var data1 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DEATH_COUNT;
});;

var data2 = case_hosp_death_cumulative.jsonarray.map(function(e) {
   return e.DEATH_COUNT_CUM;
});;

var ctx = death_count.getContext('2d');
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
				labelString: 'Daily Deaths'
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
				labelString: 'Total Deaths'
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
         label: 'Daily Deaths',
         data: data1,
         backgroundColor: "rgba(255,0,0,0.3)",
         borderColor: '#ff0000',
         yAxisID: 'A'
      },
	  {
         label: 'Total Death',
         data: data2,
         borderColor: '#ff0000',
		 backgroundColor: "rgba(220,220,220,0.0)",
		 type: 'line',
         yAxisID: 'B'
      }]
   }
};

var chart = new Chart(ctx, config);