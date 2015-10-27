var client = require('twilio')('AC0ea4a2d8868b3567000462d17a699609', "{{48ab36809c698d002c0eb0b5299703bc}}");
//var clockwork = require('clockwork')({key:'25e6715346df82ee42b3d852f284db14e38ea633'});
var express = require('express');
var forms = require('forms');
var extend = require('xtend');

var messagePublishForm = forms.create({
  message: forms.fields.string({required: true})
});

module.exports = function messagePublish(){
	var router = express.Router();
	router.post('/', function(req, res) {
	messagePublishForm.handle(req,{
		success: function(form){
			client.sendMessage({
				to: '+919916054275', // Any number Twilio can deliver to
				from: '+15005550006', // A number you bought from Twilio and can use for outbound communication
				body: 'word to your mother.' // body of the SMS message
			}, function(err, responseData) { //this function is executed when a response is received from Twilio
				if (!err) { // "err" is an error received during the request, if any
					// "responseData" is a JavaScript object containing data received from Twilio.
					// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
					// http://www.twilio.com/docs/api/rest/sending-sms#example-1
					console.log(responseData.from); // outputs "+14506667788"
					console.log(responseData.body); // outputs "word to your mother."
				}
				else{
					console.log("An error occured..");
					console.log(err);
				}
			});
			/*clockwork.sendSms({ To: '919739742036', Content: 'Test!'}, 
			  function(error, resp) {
				if (error) {
					console.log('Something went wrong', error);
				} else {
					console.log(resp);
				}
			});*/
		}
		});
	});
	return router;
};