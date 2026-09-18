/*
  Anscombe's Quartet D3 tutorial, completed for Data Visualization, Fall 2026.
  Assignment instructions and dataset provided by Jia Zhang.
  Coding assistance: OpenAI Codex. See AI_USAGE.md for documentation.
*/

// Load the CSV file. D3 returns a Promise, so the code inside then() runs
// after the file has finished loading.
d3.csv("anscombe.csv").then(function(data) {

  // CSV values arrive as text. The + converts x and y into numbers.
  data.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
  });

  // Print the converted data so it can be inspected in the browser console.
  console.log(data);

  // Separate the full CSV into its four named datasets.
  const dataset1 = data.filter(function(d) {
    return d.dataset === "I";
  });

  const dataset2 = data.filter(function(d) {
    return d.dataset === "II";
  });

  const dataset3 = data.filter(function(d) {
    return d.dataset === "III";
  });

  const dataset4 = data.filter(function(d) {
    return d.dataset === "IV";
  });

  // Remove the placeholder text before adding the four charts.
  d3.select("#chart").text("");

  // Draw all four datasets with the same reusable function.
  // Passing a color is the assignment's extra-credit extension.
  drawScatterplot(dataset1, "#2563eb");
  drawScatterplot(dataset2, "#7c3aed");
  drawScatterplot(dataset3, "#db2777");
  drawScatterplot(dataset4, "#0891b2");

}).catch(function(error) {
  // If the CSV cannot load, report the problem in the browser console.
  console.error("Could not load anscombe.csv:", error);
});

// This reusable function creates one complete scatter plot.
function drawScatterplot(dataset, color) {

  const width = 500;
  const height = 500;

  // Each function call appends a new SVG, so the datasets do not overlap.
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 500 500")
    .attr("role", "img")
    .attr("aria-label", "Scatter plot for Dataset " + dataset[0].dataset);

  // Convert data values into horizontal pixel positions.
  const xScale = d3.scaleLinear()
    .domain([0, 20])
    .range([50, 450]);

  // SVG y-coordinates increase downward, so this range is reversed.
  const yScale = d3.scaleLinear()
    .domain([0, 12])
    .range([450, 50]);

  // Add a label so viewers can distinguish the four datasets.
  svg.append("text")
    .attr("class", "chart-title")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .text("Dataset " + dataset[0].dataset);

  // Create one circle for every row in this dataset.
  svg.selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("cx", function(d) {
      return xScale(d.x);
    })
    .attr("cy", function(d) {
      return yScale(d.y);
    })
    .attr("r", 5)
    .attr("fill", color);

  // Create and draw the x-axis at the bottom of the chart.
  const xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", "translate(0, 450)")
    .call(xAxis);

  // Create and draw the y-axis at the left side of the chart.
  const yAxis = d3.axisLeft(yScale);

  svg.append("g")
    .attr("transform", "translate(50, 0)")
    .call(yAxis);

  // Add short axis labels for clarity.
  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", 250)
    .attr("y", 492)
    .attr("text-anchor", "middle")
    .text("x");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -250)
    .attr("y", 14)
    .attr("text-anchor", "middle")
    .text("y");
}
