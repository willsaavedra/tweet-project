const chai = require('chai');
var expect = chai.expect;
const CommentsRepository = require('../src/repository/comments');
const PagesRepository = require('../src/repository/pages');
const db = require('../src//data/db');

const pagesRepository = new PagesRepository();
const commentsRepository = new CommentsRepository();

describe('Valid Promise comments', function () {
  it('Test: Promise GET Comments by PageId', async () => { // no done
    // note the return
    const result = await commentsRepository
      .findByPageId(1)
    expect(result).to.not.be.undefined;
  });
  // testing post Comment API 
  it('Test: Promise Post Comments by PageId', async () => { // no done
    // note the return
    const result = await commentsRepository
      .addComment('test@example.com', 100, 'Testing comment TDD')
    expect(result).to.be.not.empty;
    expect(result).to.not.be.undefined;
  });
  // testing post Comment API 
  it('Test: Promise Get Pages', async () => { // no done
    // note the return
    const result = pagesRepository
      .findAll()
    expect(result).to.not.be.undefined;
    db.Mongoose.connection.close();
  });
  //db.Mongoose.connection.close();
});