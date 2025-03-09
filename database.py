from motor.motor_asyncio import AsyncIOMotorClient

# Define the MongoDB URI directly in the code
MONGO_URI = "mongodb+srv://1226adityasingh:iASdY1aMtXwCf3Ja@cluster0.kawz2.mongodb.net/"
DB_NAME = "user_database"

# Connect to MongoDB
client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]
users_collection = db["users"]
