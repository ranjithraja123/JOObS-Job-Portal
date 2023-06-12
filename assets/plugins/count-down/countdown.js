$(function() {
	"use strict";
	//Set your date
	$('#count-down').countDown({
		targetDate: {
			'day': 29,
			'month': 4,
			'year': 2020,
			'hour': 0,
			'min': 0,
			'sec': 0
		},
		omitWeeks: true
	});

});