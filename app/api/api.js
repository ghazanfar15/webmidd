const axios = require("axios");

const instance = axios.create({
    baseURL: "http://app:8001",
});

module.exports = instance;
