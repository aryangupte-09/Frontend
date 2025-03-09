from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from database import users_collection
import bcrypt
import jwt

# Define the secret key directly in the script
SECRET_KEY = "99c70f5bbd92fbc8b00ba5a5925c988cf587d6439e074435078407dd59eff7c6"  # Change this to a secure key

router = APIRouter()

class User(BaseModel):
    username: str
    password: str

# Hash password
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

# Verify password
def verify_password(password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(password.encode("utf-8"), hashed_password.encode("utf-8"))

# Generate JWT token
def create_jwt(username: str):
    return jwt.encode({"username": username}, SECRET_KEY, algorithm="HS256")

# Register Route
@router.post("/register")
async def register(user: User):
    existing_user = await users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = hash_password(user.password)
    await users_collection.insert_one({"username": user.username, "password": hashed_password})
    return {"message": "User registered successfully"}

# Login Route
@router.post("/login")
async def login(user: User):
    db_user = await users_collection.find_one({"username": user.username})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = create_jwt(user.username)
    return {"token": token}
