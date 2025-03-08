from fastapi import FastAPI
import pickle                                                                                         
import os

app = FastAPI()

PICKLE_FILE = "D:\Echelon'25\Frontend\pkl file.pkl"

# Load the pickle file
if os.path.exists(PICKLE_FILE):
    with open(PICKLE_FILE, "rb") as file:
        extracted_skills = pickle.load(file)
else:
    extracted_skills = []

@app.get("/")
def home():
    return {"message": "FastAPI is running!"}

@app.get("/get_skills")
def get_skills():
    """API endpoint to fetch extracted skills."""
    return {"extracted_skills": extracted_skills}
