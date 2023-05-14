const gameRouter = require("./gameRouter");
const siteRouter = require("./siteRouter");

function route(app){
    app.use("/boardgames",gameRouter);

    app.use('/', siteRouter);
}

module.exports = route;