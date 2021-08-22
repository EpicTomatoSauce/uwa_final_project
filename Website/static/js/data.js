
// ----------------------------------------------------------------
// Create a function to build and generate the data table for the data html
// ----------------------------------------------------------------
function loadData() {
    d3.json("/raw_data_list").then((dataSet) => {
        // console.log(dataSet)

        $(document).ready(function() {
            $('#rawData').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Time" },
                    { title: "Measurement" },
              ]
            });
        });
})

}

loadData()