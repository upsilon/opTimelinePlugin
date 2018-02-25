import URLSearchParams from 'url-search-params';

export default class {
  constructor(apiBase, apiKey) {
    this.apiBase = apiBase;
    this.apiKey = apiKey;
  }

  async searchAll(params = {}) {
    return this.get('activity/search.json', params);
  }

  async get(url, params = {}) {
    const query = new URLSearchParams({
      ...params,
      apiKey: this.apiKey,
    });

    const response = await fetch(`${this.apiBase}${url}?${query}`);

    return response.json();
  }
}
