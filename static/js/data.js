// ----------------------------------------------------------------
// Create a function to build and generate the data table for the Analysis HTML
// ----------------------------------------------------------------
function loadData() {
    d3.json("/api/flood_data").then((dataSet) => {
        console.log(dataSet)
        $(document).ready(function() {
            $('#rawData').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Datetime" },
                    { title: "CA Rainfall (mm)" },
                    { title: "SY Rainfall (mm)" },
                    { title: "WA Rainfall (mm)" },
                    { title: "WO Rainfall (mm)" },
                    { title: "Water Level (m)" },
                    { title: "Risk" }
                ]
            });
        });
})
}

loadData() 