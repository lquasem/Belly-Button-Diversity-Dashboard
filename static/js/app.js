

function buildMetadata(sample) {
  // Use `d3.json` to fetch the metadata for a sample
  var metasamples = d3.select("#sample-metadata");
  var url = "/metadata/" + sample;
  // document.getElementById("#sample-metadata").innerHTML = "";
  d3.json(url).then(function(response) {
    console.log(response);
    $("#sample-metadata").empty();
    Object.entries(response).forEach(([key, value]) => metasamples.append("p").text(`${key}: ${value}`));
  });
}


  


function buildCharts(sample) {
  var url = "/samples/" + sample;

  // Use `d3.json` to fetch the sample data for the plots
  d3.json(url).then(function(response) {

    console.log(response)
    var sampleValues = response.sample_values;
    var sampleLabels = response.otu_ids;
    var hoverLabels = response.otu_labels;

    var data = [{
      values: sampleValues.slice(0,9),
      labels: sampleLabels.slice(0,9),

        type: 'pie'
      }];
      
      var layout = {
        
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('pie', data, layout);  
  
  
      // Use otu_ids for the x values.


      // Use sample_values for the y values.
      
      
      // Use sample_values for the marker size.
      
      
      // Use otu_ids for the marker colors.
      
      
      // Use otu_labels for the text values.


    // @TODO: Build a Bubble Chart using the sample data

    var trace1 = {
      x: sampleLabels,
      y: sampleValues,
      text: hoverLabels,
      mode: 'markers',
      marker: {
        color: sampleLabels,
        size: sampleValues,
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Belly Button Bubble Chart',
      showlegend: true,
      height: 600,
      width: 700
    };
    
    Plotly.newPlot('bubble', data, layout);

  })
}

  


   
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  console.table(newSample)
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
