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

console.log(client)

// all tweets per #
router.get('/:word', async (req, res, next) => {
  // new Pages Repository //
  try {
    const { word } = req.params
    client.get('search/tweets', { q: `#${word}`, count: '100' }, async (error, tweets, response) => {
      res.status(200).send(tweets)
    });
  } catch (error) {
    console.log(JSON.stringify({
      type: "error_log",
      app_name: process.env.APP_NAME,
      error: JSON.stringify(error),
      timestamp: Date.now() / 100,
    }))
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.get('/report/day', async (req, res, next) => {
  // new Pages Repository //
  try {
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    const result = await saveTweetsRepository
      .countTweetDay()
    res.status(200).send(result)
  } catch (error) {
    console.log(JSON.stringify({
      type: "error_log",
      app_name: process.env.APP_NAME,
      error: JSON.stringify(error),
      timestamp: Date.now() / 100,
    }))
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.get('/report/error', async (req, res, next) => {
  // new Pages Repository //
  try {
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    const result = await saveTweetsRepository
      .countTweetDayl()
    res.status(200).send(result)
  } catch (error) {
    console.log('source - ', process.env.APP_NAME,' - ERROR - ', error)
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.get('/report/region', async (req, res, next) => {
  // new Pages Repository //
  try {
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    const result = await saveTweetsRepository
      .countHashtagLang()
    res.status(200).send(result)
  } catch (error) {
    console.log(JSON.stringify({
      type: "error_log",
      app_name: process.env.APP_NAME,
      error: JSON.stringify(error),
      timestamp: Date.now() / 100,
    }))
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.get('/report/topusers', async (req, res, next) => {
  // new Pages Repository //
  try {
    const saveTweetsRepository = new SaveTweetsRepository('tweets');
    const result = await saveTweetsRepository
      .topUserFollows()
    res.status(200).send(result)
  } catch (error) {
    console.log(JSON.stringify({
      type: "error_log",
      app_name: process.env.APP_NAME,
      error: JSON.stringify(error),
      timestamp: Date.now() / 100,
    }))
    res.status(500).send({
      error: "General Error"
    })
  }
});

router.post('/', async (req, res, next) => {
  try {
    const words = req.body;
    // new Comments Repository //
    words.forEach(async Words => {
      client.get('search/tweets', { q: `#${Words}`, count: 100 }, async (error, tweets, response) => {
        const Tweets = tweets.statuses;
        const saveTweetsRepository = new SaveTweetsRepository('tweets');
        Tweets.forEach(async element => {
          const date = new Date(element.created_at);
          const timeStamp = date.getTime();
          const newResult = await saveTweetsRepository
            .saveComment(element.user.screen_name, element.created_at, timeStamp, element.text, Words, element.user.followers_count, element.lang, element.user.location)
        })
      });
    });
    res.status(200).send({
      data: {
        status: `#${words} Saved successfully`
      }
    });
  } catch (error) {
    console.log(JSON.stringify({
      type: "error_log",
      app_name: process.env.APP_NAME,
      error: JSON.stringify(error),
      timestamp: Date.now() / 100,
    }))
    res.status(500).send({
      error: "General Error"
    })
  }
});
module.exports = router;
