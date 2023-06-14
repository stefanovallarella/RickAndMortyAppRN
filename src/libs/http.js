import axiosInstance from './axiosConfig';

class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.log('http get method', error);
      throw Error(error);
    }
  };

  getCharacterDetail = async (id) => {
    try {
      const response = await axiosInstance.get(`/character/${id}`);
      return response.data;
    } catch (error) {
      console.log('http get method', error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      const response = await axiosInstance.post(url, body);
      return response.data;
    } catch (error) {
      console.log('http post method', error);
      throw Error(error);
    }
  };
}

export default Http;