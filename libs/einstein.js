const request = require("request");
const einsteinAuth = require("./einstein_auth.js");

exports.processIntent = chatText => {
  const intentUrl = "https://api.einstein.ai/v2/language/intent";

  const intentFormData = {
    modelId: process.env.EINSTEIN_INTENT_MODEL,
    document: chatText
  };

  const accessToken = global.accessToken;

  const options = {
    url: intentUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    formData: intentFormData
  };

  return new Promise((resolve, reject) => {
    request.post(options, (error, response, body) => {
      if (error) {
        console.error("processIntent", error);
        resolve(reject);
      } else {
        const intentBody = JSON.parse(body);
        if (intentBody.message) {
          console.error("Error with processIntent", response);
          resolve();
        } else {
          let result = "";
          const probabilities = intentBody.probabilities;

          if (probabilities.length > 0) {
            if (probabilities[0].probability > 0.8) {
              result = probabilities[0].label;
            }
          }
          resolve(result);
        }
      }
    });
  });
};
