const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

// router.get('/products', async (req, res) => {
//   try {
//     const result = await Product
//       .sort({created: -1});
//     if(!result) res.status(404).json({ product: 'Not found' });
//     else res.json(result.map(product => {
//       console.log('product', product);
//       return {
//         _id: product.id,
//         title: product.title,
//         content: product.text,
//         quantity: product.price,
//         price: product.price,
//         photo: `http://localhost:8000/${product.photo}`,
//       };
//     }));
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

router.get('/products', async (req, res) => {
  try {
    const result = await Product.find();
    if (!result) res.status(404).json({ Region: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    console.log(req);
    console.log(res);
    const result = await Product
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
