# Belly-Button-Diversity-Dashboard
Data Visualization with Javascript


Interactive dashboard filtering the microbes inhabiting our navels.


## Step 1 - Plotly.js
Use Plotly.js to build interactive charts for the dashboard.


* Create a PIE chart that uses data from the samples route (`/samples/<sample>`) to display the top 10 samples.
•	Use `sample_values` as the values for the PIE chart.

•	Use `otu_ids` as the labels for the pie chart.

•	Use `otu_labels` as the hovertext for the chart.

* Create a Bubble Chart that uses data from the samples route (`/samples/<sample>`) to display each sample.

•	Use `otu_ids` for the x values.

•	Use `sample_values` for the y values.

•	Use `sample_values` for the marker size.

•	Use `otu_ids` for the marker colors.

•	Use `otu_labels` for the text values.

* Display the sample metadata from the route `/metadata/<sample>`
* Display each key/value pair from the metadata JSON object 
* Update all of the plots any time that a new sample is selected.

## Step 2 - Heroku

Deploy Flask app to Heroku
