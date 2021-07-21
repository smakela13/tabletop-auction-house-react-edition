const db = require('../config/connection');
const { Product, Category, User } = require('../models');


db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Melee Weapon' },
    { name: 'Ranged Weapon' },
    { name: 'Food & Lodging' },
    { name: 'Armor' },
    { name: 'Clothing' },
    { name: 'Adventure Gear/Tools' },
    { name: 'Mounts/Riding Gear' },
    { name: 'For Your Animals' },
    { name: 'Barding' },
    { name: 'Special Items' },
    { name: 'Miscellaneous' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany({});

  await Product.insertMany([
    {
      "productName": "Vibroblade (Classic Variant)",
      "description": "A classic weapon lined in cortosis ore from a time where getting into a fight with a lightsaber was an all to real possibility",
      "price": "600",
      "stock": "1",
      "category": categories[0].name
    },
    {
      "productName": "E11 Blaster Rifle",
      "description": "Standard issue blaster for the forces of the Galactic Empire",
      "price": "150",
      "stock": "15",
      "category": categories[1].name 
    }
    {
      "productName": "Boots of Blinding Speed",
      "description": "Increases movement by 40 feet per turn, but player is blinded",
      "price": "150",
      "stock": "2",
      "category": categories[9].name 
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

