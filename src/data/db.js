const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/itau', { useNewUrlParser: true });
const saveTweet = new mongoose.Schema({
    User: String,
    Date: String,
    Timestamp: Number,
    Tweet_text: String,
    HashTag: String,
    Followers: Number,
    Language: String,
    Location: String
});

const countTweetDay = new mongoose.Schema({
  _id: String,
  tweets: String
});


const countHashtagLang = new mongoose.Schema({
	"_id" : Object,
	tweets : Number
},);

module.exports = { Mongoose: mongoose, SaveTweet: saveTweet, CountTweetDay: countTweetDay, CountHashtagLang: countHashtagLang}