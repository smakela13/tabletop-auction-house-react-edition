const db = require('../config/connection');
const { Item } = require('../models');
const itemSeeds = require('./itemSeeds.json');

db.once('open', async () => {
  await Item.deleteMany({});
  await Item.create(itemSeeds);

  console.log('all done!');
  process.exit(0);
});