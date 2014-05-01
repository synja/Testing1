
d3.json('https://pybottle.azurewebsites.net/json1.json',function(json1){
	d3.select("body")
	.append("ul")
	.selectAll("li")
	.data(json1)
	.enter()
	.append("li")
	.text(
		function(d){
			var msg = d.count;
			msg += " people specified ";
			msg += d.topics;
			msg += " number of topics.";
			return msg;
		})		
})


d3.json('https://pybottle.azurewebsites.net/json1.json',function(json1){
	d3.select("body")
	.append("svg")
	.selectAll("rect")
	.data(json1)
	.enter()
	.append("rect")
	.attr("y", function(d,i){
		return i*28;
	})
	.attr("width", function(d,i){
		return 11*d.count;
	})
	.attr("height", 20)
	.attr("style","fill:mediumseagreen")
})

//.attr("style","fill:rgb(200,0,200);stroke-width:4;stroke:rgb(240,0,240)")