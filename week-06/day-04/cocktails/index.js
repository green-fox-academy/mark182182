const express = require('express');
const app = express();
const PORT = 3000;
const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('cocktails', {
    alcohol: req.query.alcohol,
    listItem1: cocktails[0].name,
    listItem2: cocktails[1].name,
    listItem3: cocktails[2].name,
    listItem4: cocktails[3].name,
    listItem5: cocktails[4].name,
    listItem6: cocktails[5].name,
    listItem7: cocktails[6].name,
    listItem8: cocktails[7].name,
    priceItem1: cocktails[0].price,
    priceItem2: cocktails[1].price,
    priceItem3: cocktails[2].price,
    priceItem4: cocktails[3].price,
    priceItem5: cocktails[4].price,
    priceItem6: cocktails[5].price,
    priceItem7: cocktails[6].price,
    priceItem8: cocktails[7].price,
  });
});

app.listen(PORT);