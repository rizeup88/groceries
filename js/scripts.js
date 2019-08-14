$(document).ready(function() {
 	var groceries = [];
 	$("#items").submit(function(event) {
		event.preventDefault();
		$(".organized").empty();
		groceries.push($("#item").val())

		var sortedList = groceries.map(function(item) {
			return item.toUpperCase();
		});
		sortedList.sort();
		sortedList.forEach(function(item) {
			$(".organized").append("<li>" + item + "</li>")
		})
		$("#item").val("");
  	})
})