// import axios from 'axios'
//
// let api = {
//     getApi: function () {
//         axios
//             .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//             .then(response => (this.info = response.data))
//             .catch(error => { this.errored = true})
//             .finally(() => this.loading = false)
//             console.log("Works API")
//     }
// };
//
// export default {
//     getApi: api.getApi
// }




// import axios from 'axios'
//
// let api = {
//     url: config.url,
//     access_key: config.access_key,
//
//     getPokemon: function (id, callback) {
//         //     axios({
//         //         method: 'get',
//         //         url: config.url + id + '/',
//         //     }).then(function (response) {
//         //         callback(response.data, true)
//         //     }).catch(function (error) {
//         //         callback(error, false)
//         //     })
//         // }
//         axios
//             .get(config.url + id + '/')
//             .then(function (response) {
//                 callback(response.data, true)
//             }).catch(function (error) {
//             callback(error, false)
//         })
//
//     }
//
// };
//
// export default {
//     getPokemon: api.getPokemon
// }
