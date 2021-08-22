# UWA Final Project - Group 3
Environmental Data as a Predictor for Flooding Events in the NW of WA.


![first_slide.jpg](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/first_slide.jpg)

An analysis of environmental data using machine learning models as a predictor for flooding events in the Serengeti to answer the following questions;

* What are the most effective methods of choosing a location for a rainfall station? 
* How many rainfall stations do we need to have an accurate prediction?
* What is the accuracy across different Machine Learning models?


## Assignment structure
```
UWA Final Project
| 
|__ Data/
|   |__ Ca_Rainfall_20201103_090000_20210531_235959.csv
|   |__ Sy_Rainfall_20201103_090000_20210531_235959.csv
|   |__ Wa_Rainfall_20201103_090000_20210531_235959.csv
|   |__ Wo_Rainfall_20201103_090000_20210531_235959.csv
|   |__ Wa_Creek_Water_Level_20201103_090000_20210531_235959.csv
|   |__ station_locations.csv 
|
|__ ML_Models
|   |__ RandomForest.sav
|   |__ RandomForest_Evaluations.csv
|   |__ RegressionModel.sav
|   |__ RegressionModel_Evaluations.csv
|
|__ Website
|   |__ Static
|       |__ css
|	   |__ style.css
|       |__ Images
|	   |__ river.png
|	   |__ serengeti_river.jpg
|	   |__ serengeti_river_1.jpg
|	   |__ serengeti_river_2.jpg
|	   |__ serengeti_river_3.jpg
|	   |__ serengeti_river_4.jpg
|	   |__ serengeti_river_5.jpg
|	   |__ serengeti_river_X.jpg
|       |__ js
|	   |__ data.js
|	   |__ logic.js
|
|   |__ templates
|      |__ about.html
|      |__ analysis.html
|      |__ data.html
|      |__ index.html
|      |__ map.html
|      |__ tableau.html
|
|__ README.md
|__ Rainfall and Water Level Around Mantaka Village.twbx
|__ clean.ipynb
|__ model_evaluations.ipynb
|__ combined_rainfall_water_level_data_20201103-20210531.hyper
|__ station_locations.hyper
|__ tableau_viz.twb

```

## Usage

```
# Dependencies and Setup

## JUPYTER NOTEBOOK
* import pandas as pd
* from functools import reduce
* import numpy as np
* from sklearn.model_selection import train_test_split, GridSearchCV
* from sklearn.preprocessing import MinMaxScaler
* from sklearn.linear_model import LogisticRegression
* from sklearn.feature_selection import RFECV
* import joblib
* from sqlalchemy import create_engine
* from sklearn.ensemble import RandomForestClassifier

## JAVASCRIPT
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin="" />

## HTML
* <!DOCTYPE html>
* <html lang="en">
* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"</script>

## HEROKU
* pip install gunicorn
* pip install flask
* pip install flask-sqlalchemy

```

## Data Sources:

Placeholder

## Datasets 

Placeholder

## Extract:

Placeholder

## Transform:

In jupyter notebook applying the pandas library we read in the files, clean the data by renaming the columns and setting date type to dateime64. Concatenate the dataframes then adjusted the date format to what is required in preparation for the running the Machine Learning models.

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/clean1.png)

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/clean2.PNG)

## Machine Learning Models

Logistic Regression

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/ML1.PNG)

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/ML1-1.PNG)

Random Forest

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/randomforest.PNG)

## Load - SQLite Database:

Using the dataframes created in the jupyter notebook we applied the df.to_SQL to push the tables to the SQLite Database to store the raw data.

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/placeholder)


## Visualisations:

All visualisations were created using a combination of Tableau, leaflet, and *** 

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/tableau.PNG)

Below is an overview of each html page;

### Index

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/index.PNG)

### About

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/placeholder)

### Analysis

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/placeholder)

### Map

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/placeholder)

### Data

![chart](https://github.com/EpicTomatoSauce/uwa_final_project/tree/main/Website/static/Images/placeholder)

### Tableau Dashboard

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/dashboard.PNG)


## Analysis:

Placeholder

* Placeholder
* Placeholder
* Placeholder


## Deployment to Heroku:

Our webpage has been successfully deployed in Heroku via the following [Flood Warning System](https://rainfall-in-serengeti.herokuapp.com/) link. 


## Final Note:

The website can be used by planners and meteorological services to predict and prepare for possible flood events.

## Contributors
- [@Matt](https://github.com/EpicTomatoSauce/)
- [@Adam](https://github.com/adamlever/)
- [@Jack](https://github.com/JackXinPan/)
- [@Heriawan](https://github.com/xsbaggages/)
