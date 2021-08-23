import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import numpy as np
import sklearn 
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
from sklearn.feature_selection import RFECV
from sklearn.ensemble import RandomForestClassifier
# from sklearn.externals import joblib
import joblib
from flask import Flask, jsonify, render_template, request

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///floodmain.sqlite")
conn = engine.connect()
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


@app.route("/")
def welcome():
    print("Server received request for 'Home' page...")
    return (f"Directories you can access <br/>"
        f"/home<br/>"
        f"/api/flood_data<br/>"
        f"/about<br/>"
        f"/analysis<br/>"
        f"/data<br/>"
        f"/index<br/>"
        f"/map<br/>"
        
    )

#################################################
# Website
#################################################

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/analysis")
def analysis():
    return render_template("analysis.html")

@app.route("/data")
def data():
    return render_template("data.html")

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/layout")
def layout():
    return render_template("layout.html")

@app.route("/tableau")
def tableau():
    return render_template("tableau.html")
   



#################################################
# API/ Predict
#################################################
#Query from db
flood_data = pd.read_sql("SELECT * FROM rainfall_flood", conn)



@app.route("/api/flood_data")
def flood_api():
    return jsonify((flood_data.to_dict()))

#POST is a method. There are send/request methods -> send data to our model api to perform prediction
@app.route('/predict/', methods=['GET', 'POST']) 
def predict():
  
    if request.method == "POST":
        #get form data
        sepal_length = request.form.get('sepal_length')
        sepal_width = request.form.get('sepal_width')
        petal_length = request.form.get('petal_length')
        petal_width = request.form.get('petal_width')
        
        #call preprocessDataAndPredict and pass inputs
        try:
            prediction = preprocessDataAndPredict(sepal_length, sepal_width, petal_length, petal_width)
            #pass prediction to template
            return render_template('predict.html', prediction = prediction)
   
        except ValueError:
            return "Please Enter valid values"
  
        pass
    pass
def preprocessDataAndPredict(sepal_length, sepal_width, petal_length, petal_width):
    
    #keep all inputs in array
    test_data = [sepal_length, sepal_width, petal_length, petal_width]
    print(test_data)
    
    #convert value data into numpy array
    test_data = np.array(test_data)
    
    #reshape array
    test_data = test_data.reshape(1,-1)
    print(test_data)
    
    #open file
    #file = open("randomforest_model.pkl","rb")
    
    #load trained model
    trained_model_log = joblib.load('ML_Models/logistic_reg.sav')
    trained_model_rfc = joblib.load('ML_Models/rfc_reg.sav')

    #predict
    prediction_log = trained_model_log.predict(test_data)
    prediction_rfc = trained_model_rfc.predict(test_data)
     
    return [prediction_log, prediction_rfc]

    pass

####################################################
# open server
####################################################
if __name__ == '__main__':
    app.run(debug=True)