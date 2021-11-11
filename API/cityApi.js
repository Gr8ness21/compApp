const mongoose = require('../db/connection.js');

//when defining constructors capital first letters will be used.
//defining the entities

const CitySchema = mongoose.Schema({
    name: String,
    description: String
});

//creating an API that will take the "city" collection in mongodb
let CityCollection = mongoose.model("cities", CitySchema);

// Fuction to get all Neighborhoods
function getAllCities() {
    //using mongoose to get all cities
    return CityCollection.find();
}

// Function to create new Cities/Neighborhood
function createNewCities(newCityData){
    return CityCollection.create(newCityData);
}

// Function to get City by Id
function getCityById(cityId) {
    return CityCollection.findById(cityId);
}

// Function to delete City by Id
function deleteCityById(cityId) {
    return CityCollection.deleteOne({ _id: cityId });
}

// Function to update City
function updateCityById(cityId, city) {
    return CityCollection.updateOne({ _id: cityId }, city);
}

// calls all established functions to be exported
module.exports = {
    getAllCities,
    createNewCities,
    getCityById,
    deleteCityById,
    updateCityById
};