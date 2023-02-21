export class API {
  static BASE_URL = 'https://api.themoviedb.org/3';
  static API_KEY = 'd2e6e8a57d367dba11a443cc5535b322';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  async fetchTrends() {
    const searchParams = new URLSearchParams({
      api_key: API.API_KEY,
    });

    const res = await fetch(
      `${API.BASE_URL}/trending/movie/day?${searchParams}`
    );
    if (!res.ok) {
      return Promise.reject(new Error('Not found'));
    }
    return await res.json();
  }

  async fetchQuery() {
    const searchParams = new URLSearchParams({
      api_key: API.API_KEY,
      query: this.query,
    });

    const res = await fetch(`${API.BASE_URL}/search/movie?${searchParams}`);
    if (!res.ok) {
      return Promise.reject(new Error('Not found'));
    }
    return await res.json();
  }

  async fetchByID(id) {
    const searchParams = new URLSearchParams({
      api_key: API.API_KEY,
    });

    const res = await fetch(`${API.BASE_URL}/movie/${id}?${searchParams}`);
    if (!res.ok) {
      return Promise.reject(new Error('Not found'));
    }
    return await res.json();
  }

  async fetchCast(id) {
    const searchParams = new URLSearchParams({
      api_key: API.API_KEY,
    });

    const res = await fetch(
      `${API.BASE_URL}/movie/${id}/credits?${searchParams}`
    );
    if (!res.ok) {
      return Promise.reject(new Error('Not found'));
    }
    const { cast } = await res.json();
    return cast.map(({ name, character, id, profile_path }) => ({
      name,
      character,
      id,
      profile_path,
    }));
  }

  async fetchReviews(id) {
    const searchParams = new URLSearchParams({
      api_key: API.API_KEY,
    });

    const res = await fetch(
      `${API.BASE_URL}/movie/${id}/reviews?${searchParams}`
    );
    if (!res.ok) {
      return Promise.reject(new Error('Not found'));
    }
    const { results } = await res.json();
    return results.map(({ author, content, id }) => ({ author, content, id }));
  }
}

export default API;
