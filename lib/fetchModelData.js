var Promise = require("Promise");

/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/


function FetchModel(url) {
    return new Promise((resolve, reject) => {
      console.log(url);
      setTimeout(() => reject({status: 501, statusText: "Not Implemented"}),0);
      const xhr = new XMLHttpRequest();
  
      xhr.open('GET', url, true);
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText);
              resolve({ data });
            } catch (error) {
              reject({
                status: xhr.status,
                statusText: 'Error parsing JSON response',
              });
            }
          } else {
            reject({
              status: xhr.status,
              statusText: xhr.statusText,
            });
          }
        }
      };
  
      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: 'Network error',
        });
      };
  
      xhr.send();
    });
  }
  
  export default FetchModel;
  
