const express = require("express");

const { requireSignIn, isAdmin } = require("../middleware/userAuth");
const {
  createProductController,
  getallProductController,
  getSingleProductController,
  deleteSingleProductController,
  updateSingleProductController,
  getProductByMenCategoryController,
  getProductByWomenCategoryController,
  getProductByKidCategoryController,
  getNewProductsController,
  getProductPopularInWomenController,
  getRelatedProductsController
} = require("../controller/productController");
const router = express.Router();

router.post("/create-product", createProductController);
router.get("/all-products", getallProductController);

router.get("/papular-in-women", getProductPopularInWomenController);
router.get("/new-product", getNewProductsController);

router.post("/related-products", getRelatedProductsController);

router.post("/men", getProductByMenCategoryController);
router.post("/women", getProductByWomenCategoryController);
router.post("/kids", getProductByKidCategoryController);

router.get("/:id", getSingleProductController);
router.delete("/singleproduct/:id", deleteSingleProductController);
router.put("/singleproduct/:id", updateSingleProductController);

module.exports = router;
