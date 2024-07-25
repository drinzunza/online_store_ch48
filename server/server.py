from flask import Flask, request
import json
from config import db

app = Flask(__name__)


@app.get("/")
def home():
    return "Hello from flask"


# create another API that redirets you to a test
@app.get("/test")
def test():
    return "Hello from the test"


@app.get("/api/about")
def about():
    myname = {"name": "Sergio Inzunza"}
    return json.dumps(myname)


products = []


def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj


@app.post("/api/products")
def save_product():
    newItem = request.get_json()
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))


@app.get("/api/products")
def get_products():
    # read all products from db
    cursor = db.products.find({})
    results = []
    for prod in cursor:
        if "category" in prod:
            results.append(fix_id(prod))

    return json.dumps(results)


@app.get("/api/categories")
def get_categories():
    cursor = db.products.find({})
    cats = []
    for prod in cursor:
        if "category" in prod:
            cat = prod["category"]
            if cat not in cats:
                cats.append(prod["category"])

    return json.dumps(cats)


app.run(debug=True)
