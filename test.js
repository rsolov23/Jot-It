const accountSid = "AC4dfc40ad240f84c2d018bc921fe57667";
const authToken = "78b8a0724e4345d6694cdda38641cff9";
const client = require("twilio")(accountSid, authToken);

// client.messages
//   .create({ body: "Not Spam, I swear", from: "+19734255288", to: "+18303856947" })
//   .then((message) => console.log(message));

client.validationRequests
    .create({friendlyName: "Nathanael", phoneNumber: '+12544054908'})
    .then(validation_request => console.log(validation_request))