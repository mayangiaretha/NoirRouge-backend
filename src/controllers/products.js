import dayjs from 'dayjs';
import Product from '../model/products';
import { v4 as uuidv4 } from 'uuid';

class ProductsController {
  static async postAProduct(req, res) {
    const { name, category, description, brand } = req.body;
    const { _id } = req.user;

    const newProduct = new Product({
      productId: uuidv4(),
      user: _id,
      numReviews: 0,
      price: 100,
      countInStock: 10,
      createdAt: dayjs().format('DD-MM-YYYY h:mm:ss A'),
    });
    await Product.create(newProduct);
    return res.status(201).json({
      newProduct,
      message: 'Product Added',
    });
  }

  static async getAllProducts(req, res) {
    const allProducts = await Product.find({});

    if (allProducts.length === 0) {
      return res.status(200).json({ message: 'there are no products' });
    }
    return res.json(allProducts);
  }

  static async getAProductById(req, res) {
    const { id } = req.params;
    const oneProduct = await Product.findById(id);
    if (!oneProduct) {
      return res.status(400).json({ message: 'the product does not exist' });
    }
    return res.status(200).json({ product: oneProduct });
  }
}

export default ProductsController;
