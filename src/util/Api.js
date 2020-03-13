import axios from 'axios';

// export default axios.create({
//   baseURL: `http://5e5a298a6a71ea0014e61c55.mockapi.io/api/members`,
//   //`http://your_domin_name/jwtauth/api/`,//YOUR_API_URL HERE
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${'http://5e5a298a6a71ea0014e61c55.mockapi.io/api'}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
};
