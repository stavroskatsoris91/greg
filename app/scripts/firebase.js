// var firebase = require("firebase");

// var mainApp = firebase.initializeApp({
//     //firebase authentication
// });

// var directTransport = require('nodemailer-direct-transport');
// var nodemailer = require('nodemailer');
// var options = {};
// var transporter = nodemailer.createTransport(directTransport(options))

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'example.gmail.com'
//         pass: 'password'
//     }
// });

// var nodeToWatch = mainApp.database().ref('node_to_watch'); //firebase node to watch

// nodeToWatch.on('child_added', function(childSnapshot) { //fires once for every node in this location
//     if(!childSnapshot.val().email_sent){ //check if email has already been sent

//             nodeToWatch.child(childSnapshot.key).child('email_sent').set(firebase.database.ServerValue.TIMESTAMP).then(function(response){ //set email value to sent

//                 var data = JSON.stringify(childSnapshot.val(), null, 9); //stringify the response so we can attach it in the email

//                 // create template based sender function
//                 var sendInfo = transporter.templateSender({
//                     subject: 'Node in firebase updated',
//                     html: 'Hello, data for new node is: {{data}}
//                 }, {
//                 from: 'example.gmail.com'
//                 });

//                 // use template based sender to send a message
//                 sendInfo({
//                     to: 'exampleRecipient.email.com'
//                 }, {
//                     data: data //data variable to insert into email
//                 }, function(err, info){
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log('Email sent');
//                     }
//                 });
//             });

//     }

// });