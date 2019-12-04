$(document).ready(function() {
     var tt=window.innerWidth;
     var th=window.innerHeight*0.30;
    var margin = {top: 20, right: 20, bottom: 20, left: 90},
    width = tt - margin.left - margin.right,
    height = th - margin.top - margin.bottom;
  var ht= height,wt=width+10;

  var svg = d3.selectAll(".main_gp")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  //var myGroups = ["", "9 AM", "9:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM","1:30 PM","2 PM","2:30 PM"]
 // var myVars = ["", "Harry Doe", "Mike Doe", "Heny Doe", "Lace Doe", "Smith Doe", "John Doe", "Ron Doe"]
  
  var myGroups = ["", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L","M"]
  var myVars = ["", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10","v11"]


  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myGroups)
    .padding(0.01);
  svg.append("g")
    .attr("transform", "translate(-135," + ht + ")")
    .attr("class","x-axis")
    .call(d3.axisBottom(x))
  
  var y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(myVars)
    .padding(0.01);
  svg.append("g")
    .attr("transform", "translate(-30," + 0 + ")")
    .attr("class","y-axis")
    .call(d3.axisLeft(y));
  
  var myColor = d3.scaleLinear()
    .range(["white", "#10ccb6"])
    .domain([1,100]);
   
    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {
       console.log(data.variable);
     svg.selectAll(".main_gp ")
          .data(data, function(d){console.log(d);return d.group+':'+d.variable;})
          .enter()
          .append("rect")
          .attr("x", function(d) { return x(d.group) })
          .attr("y", function(d) { return y(d.variable) })
          .attr("width", x.bandwidth())
          .attr("height", y.bandwidth())
          .style("fill", function(d) { return myColor(d.value)} );
          console.log("end");
    });
   
});