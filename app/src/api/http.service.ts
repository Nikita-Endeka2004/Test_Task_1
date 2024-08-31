class HttpSerivce {

  // There was supposed to be an .env file here, but it didn't work for me...
  private baseUrl = 'https://66d2debe184dce1713ce9ff3.mockapi.io'
  private apiVersion  = 'api'

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }
  async get(config: any): Promise<any> {
    const headers = {
      'content-type': 'application/json',
      ...config.headers,
    };

    try {
      const response = await fetch(this.getFullApiUrl(config.url), {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async post(config: any): Promise<any> {
    const headers = {
      'content-type': 'application/json',
      ...config.headers,
    };

    try {
      const response = await fetch(this.getFullApiUrl(config.url), {
        method: 'POST',
        headers,
        body: JSON.stringify(config.data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async put(config: any): Promise<any> {
    const headers = {
      'content-type': 'application/json',
      ...config.headers,
    };

    try {
      const response = await fetch(this.getFullApiUrl(config.url), {
        method: 'PUT',
        headers,
        body: JSON.stringify(config.data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async delete(config: any): Promise<any> {
    const headers = {
      'content-type': 'application/json',
      ...config.headers,
    };

    try {
      const response = await fetch(this.getFullApiUrl(config.url), {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export default HttpSerivce