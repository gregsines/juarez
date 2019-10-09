
var MEL = {

			init: function() {

				MEL.costs.init()

			},

			costs: {

				init: function() {

					$('#cost, #company-rate, #rate-1, #rate-2').keyup(function() {
						MEL.costs.sum();
					});

				},

				sum: function() {	

					var company = $('#company-rate').val() / 100;
					var rate1 = $('#rate-1').val() / 100;
					var rate2 = $('#rate-2').val() / 100;

					var cost = $('#cost').val();

					var costRate1 = (cost / rate1) / company;
					var costRate2 = (cost / rate2) / company;
					var costRateC = (cost / company) /company;

					$('#company-cost').text(costRateC.toFixed(2));
					$('#rate-1-cost').text(costRate1.toFixed(2));
					$('#rate-2-cost').text(costRate2.toFixed(2));



				}

			}

}

MEL.init();