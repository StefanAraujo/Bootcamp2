/* Add all the required libraries*/
const util = require('util');
util.inspect.defaultOptions.maxArrayLength = null;

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    mongoose.set('useFindAndModify', false)

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri,{useNewUrlParser: true, useUnifiedTopology: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console.
  
    
   */
  Listing.find({name: 'Library West'},function(err,data){
    if (err)
      throw err

      console.log(data)

  })
};
var removeCable = function() {
  Listing.find({code: 'CABL'},function(err,data){
    if(err)
      throw err
    console.log(data)

  })
Listing.findOneAndRemove({code: 'CABL'},function(err,data)
{
if (err)
  throw err 
console.log("CABL HAS BEEN REMOVED")
})
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
Listing.findOneAndUpdate({name : 'Phelps Laboratory'}, {address : '1953 Museum Rd, Gainesville, FL 32603'},function(err,data)
{
      if (err)
        throw err

        console.log(data)

})


};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
Listing.find({},function(err,data)
{

  if(err)
    throw err
    console.log(data)

})

};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

