from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import os

# Initialize FastAPI app
app = FastAPI()

# ----------------------- CORS Configuration -----------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (update in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------- Load Pickle File -----------------------
PICKLE_FILE = r"D:\Echelon'25\Frontend\pkl file.pkl"  # Use raw string (r"...") for Windows paths

if os.path.exists(PICKLE_FILE):
    with open(PICKLE_FILE, "rb") as file:
        extracted_skills = pickle.load(file)  # Load extracted skills from pickle file
else:
    extracted_skills = []  # Default to an empty list if the file doesn't exist

# ----------------------- API Routes -----------------------

@app.get("/")
def home():
    """Root endpoint to check if the API is running."""
    return {"message": "FastAPI is running!"}

@app.get("/get_skills")
def get_skills():
    """API endpoint to fetch extracted skills."""
    return {"extracted_skills": extracted_skills}
