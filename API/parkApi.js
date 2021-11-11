const mongoose = require('../db/connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

// Defining the shape of the player object
// Constructors have capital letters instead of camel case
const ParkSchema = mongoose.Schema({
    name: String,
    bio: String,
    side: String,
    location: Object,
    userId: ObjectId
});

// API that will take the "Park" collection in mongo
let ParkCollection = mongoose.model("parks", ParkSchema);

// Function to Create New players
function createPark(newPark, parkId) {
    newPark.parkId = parkId;
    return ParkCollection.create(newPark);
}

// Fuction to get all Parks
function getAllParks() {
    //using mongoose to get all teams
    return ParkCollection.find();
}

// Function to Get all parks by Id
function getAllParksByParkId(pId) {
    return ParkCollection.find({ parkId: pId });
}

// Function to get park by Id
function getParkById(parkId) {
    return ParkCollection.findById(parkId);
}

//function to delete park by Id
function deleteParkById(parkId) {
    return ParkCollection.deleteOne({ _id: parkId });
}


function getParksByCityId(pId) {
    return ParkCollection.find({ userId: pId });
}

// Function to update Park
function updateParkById(parkId, park) {
    return ParkCollection.updateOne({ _id: parkId }, park);
    //possible bug: not sure if it works
}

// calls all established functions to be exported
module.exports = {
    ParkSchema,
    createPark,
    getAllParks,
    getAllParksByParkId,
    getParkById,
    deleteParkById,
    getParksByCityId,
    updateParkById
};