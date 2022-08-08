module.exports = function init() {
    const User = require("./Models/User.js");
    const Content = require("./Models/Content.js");
    const Category = require("./Models/Category.js");

    User.belongsToMany(Content, { through: "user_content" });
    Content.belongsToMany(User, { through: "user_content" });

    Category.belongsToMany(Content, { through: "category_content" })
    Content.belongsToMany(Category, { through: "category_content" })
};