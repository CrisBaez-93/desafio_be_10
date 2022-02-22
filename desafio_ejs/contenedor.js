const fs = require("fs");

module.exports = class Contenedor {
  constructor() {
    this.data = [];
  }

  async getAll() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        return fileData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getRandom() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        let random = Math.floor(Math.random() * fileData.length);
        return fileData[random];
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
