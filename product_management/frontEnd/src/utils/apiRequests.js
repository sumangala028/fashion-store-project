import axios from 'axios';

const baseUrl = "http://localhost:5000/info"
const timeout = 5000;

const makeRequest = async (method, requestUrl, contentData) => {
  try {
    const response = await axios({
      method,
      timeout,
      url: requestUrl,
      data: contentData
    });

    return { success: true, data: response.data}
  } catch(error) {
    return { error: true, data: error}
  }
}

export const doGet = async (relativeUrl, contentData) => {
  return makeRequest("GET", baseUrl + relativeUrl, contentData)
}

export const doPost = async (relativeUrl, contentData) => {
  return makeRequest("POST", baseUrl + relativeUrl, contentData)
}

export const doDelete = async (relativeUrl, contentData) => {
  return makeRequest("DELETE", baseUrl + relativeUrl, contentData)
}

export const doPut = async (relativeUrl, contentData) => {
  return makeRequest("PUT", baseUrl + relativeUrl, contentData)
}
