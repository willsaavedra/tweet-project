const db = require('../data/db');

class SaveTweetsRepository {
  constructor(Collection) {
    this.collection = Collection;
  }

  saveComment(user, date, timestamp, text, tag, followers, lang, location) {
    delete db.Mongoose.connection.models['tweets'];
    return new Promise((resolve, reject) => {
      const Comment = db.Mongoose.model(this.collection, db.SaveTweet);
      const newcomment = new Comment({
        User: user,
        Date: date,
        Timestamp: timestamp,
        Tweet_text: text,
        HashTag: tag,
        Followers: followers,
        Language: lang,
        Location: location
      });
       newcomment.save()
        .then(res => {
          resolve(res)
        })
        .catch(erro => {
          reject(erro)
        });
    })
  }

  countTweetDay() {
    try {
    delete db.Mongoose.connection.models['tweets'];
    const comment = db.Mongoose.model(this.collection, db.CountTweetDay);
    return comment.aggregate().addFields({ convertedDate: { $toDate: "$Timestamp" } }).group({ _id: { $dateToString: { format: "%Y-%m-%d-H:%H:00:00", date: { $toDate: "$convertedDate" } } }, tweets: { $sum: 1 } }).sort({ "convertedDate": 1 }).exec();
    } catch (error) {
      return Promise.reject(error)
    }
  }

  topUserFollows() {
    delete db.Mongoose.connection.models['tweets'];
    const comment = db.Mongoose.model(this.collection, db.SaveTweet);
    return comment.find().sort({ Followers: -1 }).limit(5).exec();
  }

  countHashtagLang() {
    delete db.Mongoose.connection.models['tweets'];
    const comment = db.Mongoose.model(this.collection, db.CountTweetDay);
    return comment.aggregate().group({ _id: { hasjtag: "$HashTag", language: "$Language", location: "$Location" }, tweets: { $sum: 1 } }).sort({ "tweets": -1 }).exec();
  }
}

module.exports = SaveTweetsRepository;