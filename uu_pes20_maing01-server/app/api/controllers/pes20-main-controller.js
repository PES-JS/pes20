"use strict";
const Pes20MainAbl = require("../../abl/pes20-main-abl.js");

class Pes20MainController {
  init(ucEnv) {
    return Pes20MainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new Pes20MainController();
