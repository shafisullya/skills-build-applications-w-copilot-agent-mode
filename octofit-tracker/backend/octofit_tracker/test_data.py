from bson import ObjectId
from datetime import timedelta

def get_test_data():
    return {
        "users": [
            {"_id": ObjectId(), "username": "thundergod", "email": "thundergod@mhigh.edu", "password": "password1"},
            {"_id": ObjectId(), "username": "metalgeek", "email": "metalgeek@mhigh.edu", "password": "password2"},
            {"_id": ObjectId(), "username": "zerocool", "email": "zerocool@mhigh.edu", "password": "password3"},
        ],
        "teams": [
            {"_id": ObjectId(), "name": "Blue Team", "members": []},
        ],
        "activities": [
            {"_id": ObjectId(), "user": None, "activity_type": "Cycling", "duration": timedelta(hours=1)},
            {"_id": ObjectId(), "user": None, "activity_type": "Running", "duration": timedelta(hours=2)},
        ],
        "leaderboard": [
            {"_id": ObjectId(), "user": None, "score": 100},
            {"_id": ObjectId(), "user": None, "score": 90},
        ],
        "workouts": [
            {"_id": ObjectId(), "name": "Cycling Training", "description": "Training for a cycling event"},
            {"_id": ObjectId(), "name": "Running Training", "description": "Training for a marathon"},
        ],
    }
