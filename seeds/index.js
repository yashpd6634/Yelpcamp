const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const pnum =   Math.random() * 30 ;
    const price = pnum.toFixed(2);
    const camp = new Campground({
      author: '6186bca7a345155133ed30e5',
      location: `${cities[random1000].city} , ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      // images: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, vero sunt ratione fuga ut commodi velit, fugit quas saepe in repellat ad est culpa itaque voluptatum et illo maiores possimus.",
      price ,
      geometry: {
          type: "Point",
          coordinates: [
            cities[random1000].longitude,
            cities[random1000].latitude,
        ]
      },
      images: [
        {
          url: 'https://res.cloudinary.com/dfxrae3d5/image/upload/v1636531028/YelpCamp/h8lxd05qqsawk22p6nob.jpg',
          filename: 'YelpCamp/h8lxd05qqsawk22p6nob',    
        },
        {
          url: 'https://res.cloudinary.com/dfxrae3d5/image/upload/v1636531043/YelpCamp/ljzph6dpfozlw1v5uiuo.jpg',
          filename: 'YelpCamp/ljzph6dpfozlw1v5uiuo',    
        }
      ] 
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
