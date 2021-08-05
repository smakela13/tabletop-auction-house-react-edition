const db = require('../config/connection');
const { Product, Category, User } = require('../models');
const categorySeed = require('./categorySeed.json')


db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.create(categorySeed);

  console.log('categories seeded');

  await Product.deleteMany({});

  await Product.create([
    {
      "productName": "Vibroblade (Classic Variant)",
      "description": "A classic weapon lined in cortosis ore from a time where getting into a fight with a lightsaber was an all to real possibility",
      "price": "600",
      "stock": "1",
      "category": categories[0]._id
    },
    {
      "productName": "E11 Blaster Rifle",
      "description": "Standard issue blaster for the forces of the Galactic Empire",
      "price": "150",
      "stock": "15",
      "category": categories[0]._id
    },
    {
      "productName": "Boots of Blinding Speed",
      "description": "Increases movement by 40 feet per turn, but player is blinded",
      "price": "150",
      "stock": "2",
      "category": categories[4]._id
    }
  ]);


  await User.deleteMany({});

  await User.create({
    "username": "willie",
    "password": "password1234",
    "email": "willie@nelson.com"
  });

  console.log('all done!');
  process.exit(0);
});

