let dataset = [
    [1, 4],
    [2, 6],
    [3, 11],
    [4, 18],
    [5, 22],
    [6, 27],
    [7, 29],
    [8, 29],
    [9, 25],
    [10, 18],
    [11, 13],
    [12, 7],
]

let width = 400;
let height = 300;
let margin = {'top': 40, 'bottom': 80, 'right': 40, 'left': 80};

// SVGの設定
let svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

let xScale = d3.scaleLinear()
.domain([0, d3.max(dataset, function(d) { return d[0]; })])
.range([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
.domain([0, d3.max(dataset, function(d) { return d[1]; })])
.range([height - margin.bottom, margin.top]);

// 軸の表示
var axisx = d3.axisBottom(xScale).ticks(5);
var axisy = d3.axisLeft(yScale).ticks(5);

svg.append("g")
  .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
  .call(axisx)
  .append("text")
  .attr("fill", "black")
  .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
  .attr("y", 35)
  .attr("text-anchor", "middle")
  .attr("font-size", "10pt")
  .attr("font-weight", "middle")
  .text("月");

svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + 0 + ")")
  .call(axisy)
  .append("text")
  .attr("fill", "black")
  .attr("text-anchor", "middle")
  .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
  .attr("y", -35)
  .attr("transform", "rotate(-90)")
  .attr("font-weight", "middle")
  .attr("font-size", "10pt")
  .text("最高気温");

// ラインの表示
svg.append("path")
  .datum(dataset)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return xScale(d[0]); })
    .y(function(d) { return yScale(d[1]); }));