const express = require("express");
const router = express()

const routerAuthorization = require("./authentication.js");
const routerUser = require("./user.js");
const routerContent = require("./content.js");
const routerCategories = require('./category.js');

router.use("/auth", routerAuthorization);
router.use("/admin", routerUser);
router.use("/content", routerContent);
router.use('/categories', routerCategories);

module.exports = router