import axios from 'axios';

const API_KEY = 'f-yecA52YiPdG1Q2daHg1tFlFzMCRNMGX7QvlG_l5wk';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ API_KEY }`;

export async function getData(query, page = 1, perPage = 12) {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });

  return data;
}

