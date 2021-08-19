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
    return (
        f"/api/flood_data<br/>"
        f""
    )

@app.route("/api/flood_data")
def api_1():
    return jsonify((flood_data.to_dict()))

####################################################
# open server
####################################################
if __name__ == '__main__':
    app.run(debug=True)