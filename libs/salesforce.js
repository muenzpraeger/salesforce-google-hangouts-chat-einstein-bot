const nforce = require("nforce"),
  SALESFORCE_CONSUMER_KEY = process.env.SALESFORCE_CONSUMER_KEY,
  SALESFORCE_CONSUMER_SECRET = process.env.SALESFORCE_CONSUMER_SECRET,
  SALESFORCE_USERNAME = process.env.SALESFORCE_USERNAME,
  SALESFORCE_PASSWORD = process.env.SALESFORCE_PASSWORD;

const org = nforce.createConnection({
  clientId: SALESFORCE_CONSUMER_KEY,
  clientSecret: SALESFORCE_CONSUMER_SECRET,
  redirectUri: "http://localhost:3000/oauth/_callback",
  mode: "single",
  autoRefresh: true
});

login = () => {
  org.authenticate(
    { username: SALESFORCE_USERNAME, password: SALESFORCE_PASSWORD },
    err => {
      if (err) {
        console.error("Authentication error");
        console.error(err);
      } else {
        console.log("Authentication successful");
      }
    }
  );
};

exports.queryForBot = query => {
  return new Promise((resolve, reject) => {
    org.query({ query: query }, (err, resp) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(resp.records);
      }
    });
  });
};

login();
