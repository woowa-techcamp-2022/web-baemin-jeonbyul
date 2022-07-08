
//import config from '../../../config/index.js'
//const API_END_POINT = config.API_END_POINT
const API_END_POINT =  "/api"
const statusErrorFromResponse = (res) => {
  if (res.status < 300) return '';

  if (res.status < 400) {
    return `Redirects Error with status code ${res.status}`;
  }
  if (res.status < 500) {
    return `Client Error with status code ${res.status}`;
  }
  if (res.status < 600) {
    return `Server Error with status code ${res.status}`;
  }
  
  return 'Error'
};


const request = async(url, option ={ }) => {
  try{
    const fullUrl = `${API_END_POINT}${url}`
    const response = await fetch(fullUrl, option)
   
    if(response.ok){
      const json = await response.json();
      return json
    }

    const statusErrorMessage = statusErrorFromResponse(res);
    if (statusErrorMessage) throw new Error(statusErrorMessage);

  }catch(e){
    alert(`에러가 발생했습니다: ${e.message}`)
  }
}

export default request