# salesforce-google-hangouts-chat-apex-webhook

This repo showcases how to send a webhook to a Google Hangouts Chat room using Apex and Process Builder.

Read more about it in this [blog post](https://developer.salesforce.com/blogs/2018/03/integrating-hangouts-chat-and-salesforce.html).

And don't forget to check out the other repos:
- [Chat Webhook with Apex and Process Builder](https://github.com/muenzpraeger/salesforce-google-hangouts-chat-apex-webhook)
- [Einstein Intent powered Salesforce Chat bot](https://github.com/muenzpraeger/salesforce-google-hangouts-chat-einstein-bot)

## Pre-Requisites

You need to have an active G Suite organization (sign-up [here](https://www.salesforce.com/campaign/google/) as a Salesforce customer if you don't have one).

The [Chat documentation explains](https://developers.google.com/hangouts/chat/how-tos/webhooks) in detail how to setup Hangouts Chat bots.

## Deploy to Heroku

Deploy the app to Heroku using the deploy button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

After the deployment you have to enter the configuration values for the app as following:

* *SALESFORCE_CONSUMER_KEY* - enter the Connected App consumer key
* *SALESFORCE_CONSUMER_SECRET* - enter the Connected App consumer secret
* *SALESFORCE_USERNAME* - enter the name of the Salesforce integration user
* *SALESFORCE_PASSWORD* - enter the password of the Salesforce integration user
* *GOOGLE_CHAT_TOKEN* - enter the Google Hangouts Chat token
* *EINSTEIN_INTENT_MODEL* - enter the model ID of the to be used Einstein Intent model

This app also requires that you install the [Heroku Einstein add-on](https://elements.heroku.com/addons/einstein-vision).

## License

For licensing see the included [license file](https://github.com/muenzpraeger/salesforce-google-hangouts-chat-einstein-bot/blob/master/LICENSE.md).