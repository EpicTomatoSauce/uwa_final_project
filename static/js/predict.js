// pull data from data fields and feed to api
// #from js.d3 import d3
d3.select('.btn btn-primary').on("click", function(){
    console.log("test")
    var sepal_length = d3.select("sepal_length").node().value;
    var sepal_width = d3.select("sepal_width").node().value;
    var petal_length = d3.select("petal_length").node().value;
    var petal_width = d3.select("petal_width").node().value;

    d3.json("/api/predict", {
        method: "POST",
        body: JSON.stringify({
            "sepal_length": sepal_length,
            "sepal_width": sepal_width,
            "petal_length": petal_length,
            "petal_width": petal_width
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => {
        var prediction_output = d3.select("#prediction_output");
        console.log(response.prediction);
        if(response.prediction == "LOW"){
            prediction_output.text("Low chance of a flood event.");
        } else if(response.prediction == "MODERATE"){
            prediction_output.text("Moderate chance of a flood event.");
        } else if(response.prediction == "HIGH"){
            prediction_output.text("High chance of a flood event.");
        } else {prediction_output.text("Severe chance of a flood event.");
        }
    })
})