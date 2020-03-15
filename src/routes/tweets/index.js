const express = require('express');
const router = express.Router();
const SaveTweetsRepository = require('../../repository/tweets');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_KEY
});

// all tweets per #
router.get('/:word', async (req, res, next) => {
  // new Pages Repository //
  const { word } = req.params
  client.get('search/tweets', { q: `#${word}`, count: '100' }, async (error, tweets, response) => {
    res.status(200).send(tweets)
  });
});

router.get('/report/day', async (req, res, next) => {
  // new Pages Repository //
  try {
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    const result = await saveTweetsRepository
      .countTweetDay()
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.get('/report/region', async (req, res, next) => {
  // new Pages Repository //
  const saveTweetsRepository = new SaveTweetsRepository('tweets');
  const result = await saveTweetsRepository
    .countHashtagLang()
    .catch((err) => res.status(500).send(err))
  res.status(200).send(result)
});

router.get('/report/user/top', async (req, res, next) => {
  // new Pages Repository //
  const saveTweetsRepository = new SaveTweetsRepository('tweets');
  const result = await saveTweetsRepository
    .topUserFollows()
    .catch((err) => res.status(500).send(err))
  res.status(200).send(result)
});

router.post('/:word', async (req, res, next) => {
  const { word } = req.params;
  // new Comments Repository //
  client.get('search/tweets', { q: `#${word}`, count: 100 }, async (error, tweets, response) => {
    const Tweets = tweets.statuses;
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    Tweets.forEach(async element => {
      const date = new Date(element.created_at);
      const timeStamp = date.getTime();
      const newResult = await saveTweetsRepository
        .saveComment(element.user.screen_name, element.created_at, timeStamp, element.text, word, element.user.followers_count, element.lang, element.user.location)
        .catch((err) => res.status(500).send(err));
      console.log(newResult);
    });
    res.status(200).send({
      data: {
        status: `#${word} Saved successfully`,
        tweets_saved: tweets.statuses
      }
    });
  });
});
module.exports = router;
