const { getAll, create, update, remove, getById, search } = require("../controllers/product.controller");

const router = require("express").Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.post("/search", search);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;