import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, url_for

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
#Query from db
flood_data = pd.read_sql("SELECT * FROM rainfall_flood", conn)


@app.route("/")
def welcome():
    print("Server received request for 'Home' page...")
    return (f"Directories you can access <br/>"
        f"/api/flood_data<br/>"
        f"/about.html<br/>"
        f"/analysis.html<br/>"
        f"/data.html<br/>"
        f"/index.html<br/>"
        f"/map.html<br/>"
        
    )

#################################################
# Website
#################################################

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/analysis.html")
def analysis():
    return render_template("analysis.html")

@app.route("/data.html")
def data():
    return render_template("data.html")

@app.route("/map.html")
def map():
    return render_template("map.html")


#################################################
# API
#################################################



@app.route("/api/flood_data")
def api_1():
    return jsonify((flood_data.to_dict()))

####################################################
# open server
####################################################
if __name__ == '__main__':
    app.run(debug=True)