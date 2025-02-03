const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log("REQ in post API===>", req.body);
    const result = await Product.create(req.body);
    res.status(200).json(result);
    // console.log("RES in post API==>",res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body);
    console.log("Intial Update Status ==>", result);
    if (!result) {
      return res.status(404).json({ message: "Product Not Found !" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Product Not Found !" });
    }
    res.status(200).json({ message: "Product Deleted Successfully !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
