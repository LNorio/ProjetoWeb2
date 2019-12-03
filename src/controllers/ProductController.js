const Product = require("../models/ProductModel");

class ProductController {

  async index(req, res) {
    const prod = await Product.find();
    return res.status(200).json(prod);
  }
  
  async store(req, res) {
    //if (req.session.login) {
      var key = null;
      console.log(req.file)
      if (req.file) {
        key = req.file.filename;
      } else {
        key = "";
      }
      try{
        const product = await Product.create({
          name: req.body.name,
          price: req.body.price,
          key: key,
          url: "",
        });
        return res.status(200).json(product);
      }
      catch(e){
        return res.status(500);
      }
      //return res.redirect('/prod');
    //}
    //return res.redirect('/')
  }

  async show(req, res) {
    //if (req.session.login) {
      const prod = await Product.find();
      var search = (prod.filter((item) => {
        if (item.name.includes(req.query.name)) {
          return item
        }
      }));
      return res.status(200).json(search);
    //}
    //return res.redirect('./');
  }

  async update(req, res) {
    const prod = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(prod);
  }

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.status(200).send({ deleted: true });
  }
}

module.exports = new ProductController();