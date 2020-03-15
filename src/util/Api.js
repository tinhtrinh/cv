import axios from 'axios';

export default axios.create({
  baseURL: `http://5e5a298a6a71ea0014e61c55.mockapi.io/api/members`,
  headers: {
    'Content-Type': 'application/json',
  }
});
