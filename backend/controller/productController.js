const Product = require("../model/productModel");

//Creating Product
// Backend controller
exports.createProductController = async (req, res) => {
  try {
    const { name, description, price, offerPrice, category, images } = req.body;

    if (!name || !description || !price || !offerPrice || !category || !images || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields and upload at least one image.",
      });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      offerPrice,
      category,
      images,
    });

    // Return the newly created product
    return res.status(200).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    console.error("Error while creating product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while creating product",
    });
  }
};


//Get All Products
exports.getallProductController = async (req, res) => {
  try {
    const getAllProduct = await Product.find({});
    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while retrieving products:", error);
    return res.status(500).json({
      success: false,
      message: "Error while retrieving products",
    });
  }
};
exports.getProductPopularInWomenController = async (req, res) => {
  try {
    const getNewAllProduct = await Product.find({ category: "women" });
const getAllProduct=getNewAllProduct.slice(1).slice(-5)
    if (!getAllProduct) {
      return res.status(404).json({
        success: false,
        message: "No popular products found for women.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Popular products retrieved successfully.",
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while fetching popular products:", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching popular products.",
    });
  }
};


// New Products In 
exports.getNewProductsController= async (req, res) => {
  try {
    const getNewAllProduct = await Product.find({});
const getAllProduct=getNewAllProduct.slice(1).slice(-10)
    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while retrieving products:", error);
    return res.status(500).json({
      success: false,
      message: "Error while retrieving products",
    });
  }
};

//Related Products
//Get Products by Category
exports.getRelatedProductsController= async (req, res) => {
  try {
    const { category } = req.body;
    console.log(category);
    const getAllProduct = await Product.find({ category: category }).limit(5);
    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while Creating Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Creating Product",
    });
  }
};


//Get Products by Category
exports.getProductByMenCategoryController = async (req, res) => {
  try {
    const { loading } = req.body;
    
    
    const productsPerPage = 10; 
    const limit = loading * productsPerPage;


    const getAllProduct = await Product.find({ category: "men" }).limit(limit);
    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while Creating Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Creating Product",
    });
  }
};





exports.getProductByWomenCategoryController = async (req, res) => {
  try {
    const { loading } = req.body;
    
    
    const productsPerPage = 10; 
    const limit = loading * productsPerPage;

    console.log(limit); 

    const getAllProduct = await Product.find({ category: "women" }).limit(limit);

    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while fetching products:", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching products",
    });
  }
};

exports.getProductByKidCategoryController = async (req, res) => {
  try {
    const { loading } = req.body;
    
    
    const productsPerPage = 10; 
    const limit = loading * productsPerPage;

    const getAllProduct = await Product.find({ category: "kid" }).limit(limit);
    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    console.error("Error while Creating Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Creating Product",
    });
  }
};

//Get Single Product
exports.getSingleProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await Product.findById(id);
    if (!singleProduct) {
      return res.status(400).json({
        success: false,
        message: "Product Not exists.",
      });
    }

    return res.status(200).json({
      success: true,
      singleProduct,
    });
  } catch (error) {
    console.error("Error while Geting Single Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Geting Single Product",
    });
  }
};

//Delete Single Product
exports.deleteSingleProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSingleProduct = await Product.findByIdAndDelete({ _id: id });
    if (!deleteSingleProduct) {
      return res.status(400).json({
        success: false,
        message: "Product Not exists.",
      });
    }

    return res.status(200).json({
      success: true,
      deleteSingleProduct,
    });
  } catch (error) {
    console.error("Error while Deleting Single Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Deleting Single Product",
    });
  }
};

// Update Single Product

exports.updateSingleProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, offerPrice, category, image } = req.body;
    const updateSingleProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, offerPrice, category, image },
      { new: true }
    );
    if (!updateSingleProduct) {
      return res.status(400).json({
        success: false,
        message: "Product Not Updated.",
      });
    }

    return res.status(200).json({
      success: true,
      updateSingleProduct,
    });
  } catch (error) {
    console.error("Error while updating Single Product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while updating Single Product",
    });
  }
};
