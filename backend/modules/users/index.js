const { Router } = require("express");
const {  browse, register, login, logout, edit, deleteUserOne } = require("./controller");

const router = Router();

router.get("/", browse);
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.put('/:id', edit);
router.delete('/:id', deleteUserOne);

module.exports = router;