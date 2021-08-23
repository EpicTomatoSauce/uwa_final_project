// pull data from data fields and feed to api
// #from js.d3 import d3
d3.select('.btn btn-primary').on("click", function(){
    console.log("test")
    var petal_width = d3.select("petal_width").node().value;

    d3.json("/api/predict", {
        method: "POST",
        body: JSON.stringify({
            "width": petal_width
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
})