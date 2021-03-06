var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        PlotGraph(myArr);
    }
};
xmlhttp.open("GET", "http://192.168.0.170/aqi.json", true);
xmlhttp.send();

function PlotGraph(data) {
  let trace1 = {
    x: [],
    y: [],
    mode: "lines"
  };
  let trace2 = {
    x: [],
    y: [],
    mode: "lines"
  };
data.forEach(function(val) {
  trace1.x.push(val["time"]);
  trace1.y.push(val["pm25"]);
  trace2.x.push(val["time"]);
  trace2.y.push(val["pm10"]);
});
Plotly.newPlot('AQIplot', [trace1, trace2]);
};