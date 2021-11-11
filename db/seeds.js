let ParksModel = require('../API/parkApi.js')
// const mongoose = require('./connection.js');
// const ObjectId = mongoose.Schema.Types.ObjectId;


// const ParkSchema = mongoose.Schema({
//     name: String,
//     bio: String,
//     side: String,
//     location: Object,
//     userId: ObjectId
// });
// let ParksModel = require("parks")

let CityParks = [

    {name: "Central Park",
    bio: "Green",
    side: "North"
},
    {name: "Centennial Olympic Park",
    bio: "Green and tons of fun",
    side: "SouthWest"
},
    {name: "Coan Park",
    bio: "",
    side: "East Atlanta",
},
    {name: "Lang-Carson Park",
    bio: "",
    side: "East Atlanta",
},
    {name: "Piedmont Park",
    bio: "",
    side: "Midtown",
},
    {name: "Grant Park",
    bio: "",
    side: "East Atlanta",
},
    {name: "Grove Park Recreation Center",
    bio: "",
    side: "West Atlanta",
},
    {name: "East Lake Park",
    bio: "",
    side: "East Atlanta",
},
    {name: "Washington Park",
    bio: "",
    side: "West Atlanta",
},
    {name: "McKoy Park",
    bio: "",
    side: "East Atlanta",
},
    {name: "South Bend Park",
    bio: "A Dog Park A River",
    side: "South Atlanta",
},
    {name: "South Atlanta Park",
    bio: "",
    side: "South Atlanta",
}


]

// console.log(ParksModel)

ParksModel.ParkSchema.deleteMany({})
  .then(() => { 
      Parks.create(CityParks).then(()=>{
        console.log('Data Done Seeding')
      })
  })





// Donut.remove({})
//   .then(() => { 
//     Ingredients.remove({}) })
//   .then(
//     Donut.create(newDonuts).then(()=>{
//     console.log('Data Done Seeding')
//   }))
