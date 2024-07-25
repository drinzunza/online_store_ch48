import pymongo
import certifi

con_str = "mongodb+srv://Alexis:test123@107-ch46.ox6lm0b.mongodb.net/?retryWrites=true&w=majority&appName=107-ch46"
client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("110-teacher")
