var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     


$(document).ready(function(){

		var titleString = "yreuQj rotaluclaC thgieW ortsA";
		var reverseString = titleString.split('').reverse().join('');
		$("#myh1").text(reverseString);

		planets.reverse();

		planets.forEach(function(item){
			$('#planet').append($("<option></option>").text(item[0]));
		});

		$("#submit").click(function(event){
			this.blur();
			var $myWeight = $("#weight").val();
			var $myIndex = $("#planet").prop('selectedIndex');
			var $myGravity = planets[$myIndex][1];
			var $myPlanet = planets[$myIndex][0];
			var $myWeightOnPlanet = $myGravity*$myWeight;
			$("#myp").text("If you were on " + $myPlanet + ", you would weigh " + Math.round($myWeightOnPlanet) + "lbs!");
		});

		var sortedPlanets = planets.slice();

		sortedPlanets.sort(sortfunc);

		function sortfunc(a,b){
 		 	return b[1] - a[1];
		}


		sortedPlanets.forEach(function(item){
			var myrow = "<tr><td>" + item[0] + "</td><td>" + item[1] + "</td></tr>";
			$('#myTable').append($(myrow));

		});

});








