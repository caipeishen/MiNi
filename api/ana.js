
const cfg = require("../config/config.js")
const request = require("../utils/request.js")


module.exports = {

  // 查询所有类型
  getAnaList: (params) => {
    return request.request("post", cfg.url + 'ana/getAnaList', params);
  }

}
