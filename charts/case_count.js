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
   data: {
      labels: labels,
      datasets: [{
         label: 'Daily Positive Tests',
         data: data1,
         backgroundColor: '#800080'
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