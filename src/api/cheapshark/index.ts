import axios from 'axios';

const cheapshark_endpoint_url = 'https://www.cheapshark.com/api/1.0';

interface GameParams {
  title?: string;
  steamAppID?: string;
  limit?: number;
  exact?: 0 | 1;
  [key: string]: any;
}

interface DealParams {
  storeID?: string;
  upperPrice?: number;
  lowerPrice?: number;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  desc?: 0 | 1;
  [key: string]: any;
}

interface AlertParams {
  action: 'set' | 'delete' | 'manage';
  email: string;
  gameID?: string;
  price?: number;
}

class CheapSharkAPI {
  private static instance: CheapSharkAPI;
  private constructor() {}

  public static getInstance(): CheapSharkAPI {
    if (!CheapSharkAPI.instance) {
      CheapSharkAPI.instance = new CheapSharkAPI();
    }
    return CheapSharkAPI.instance;
  }

  async getGames(params: GameParams) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/games`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  }

  async gameLookup(id: string) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/games`, { params: { id } });
      return response.data;
    } catch (error) {
      console.error('Error looking up game:', error);
      throw error;
    }
  }

  async multiGameLookup(ids: string) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/games`, { params: { id: ids } });
      return response.data;
    } catch (error) {
      console.error('Error looking up multiple games:', error);
      throw error;
    }
  }

  async gameDeals(params: DealParams) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/deals`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching game deals:', error);
      throw error;
    }
  }

  async gameDealLookup(id: string) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/deals`, { params: { id } });
      return response.data;
    } catch (error) {
      console.error('Error looking up deal:', error);
      throw error;
    }
  }

  async storeInfo(params = {}) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/stores`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching store info:', error);
      throw error;
    }
  }

  async editAlertDeal({ action, email, gameID, price }: AlertParams) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/alert`, {
        params: { action, email, gameID, price }
      });
      return response.data;
    } catch (error) {
      console.error('Error editing alert:', error);
      throw error;
    }
  }

  async manageAlertDeal({ action, email }: Omit<AlertParams, 'gameID' | 'price'>) {
    try {
      const response = await axios.get(`${cheapshark_endpoint_url}/alert`, {
        params: { action, email }
      });
      return response.data;
    } catch (error) {
      console.error('Error managing alert:', error);
      throw error;
    }
  }
}

export default CheapSharkAPI.getInstance();