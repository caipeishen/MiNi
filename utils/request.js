
module.exports = { 
  request(method, url, params) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        method: method,
        data: params,
        success: function success(request) {
          resolve(request.data);
        },
        fail: function fail(error) {
          reject(error);
        },
        complete: function complete(aaa) {
          // 加载完成
        }
      });
    });
  }
}


// 成功
// const get = (url,params,onSuccess,onFail,onComplete = null) => {
//   wx.request({
//     url: url,
//     data: params,
//     method: 'GET',
//     success: res =>{
//       onSuccess(res);
//     },
//     fail: res =>{
//       onFail(res);
//     },
//     complete: res =>{
//       if (onComplete != null) {
//         onComplete(res);
//       }
//     }
//   })
// } 

// const post = ( url, params, onSuccess, onFail, onComplete = null) => {
//   wx.request({
//     url: url,
//     data: params,
//     method: 'POST',
//     success: res => {
//       onSuccess(res);
//     },
//     fail: res => {
//       onFail(res);
//     },
//     complete: res => {
//       if (onComplete != null) {
//         onComplete(res);
//       }
//     }
//   })
// } 

// module.exports = {
//   get: get,
//   post: post
// }

// 没成功
// export default function request(method, url, params, onSuccess, onFail, onComplete = null) {

//   wx.request({
//     url: url,
//     data: params,
//     method: method,
//     success: res => {
//       onSuccess(res);
//     },
//     fail: res => {
//       onFail(res);
//     },
//     complete: res => {
//       if (onComplete != null) {
//         onComplete(res);
//       }
//     }
//   })

// }