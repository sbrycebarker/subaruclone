
  const sgMail = require('@sendgrid/mail');

  let process = require ('./sendgrid.js')

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "sbrycesti@gmail.com",
      from: 'sbrycesti@gmail.com',
      subject: 'Your subaru has been ordered',
      text: 'A representative from Subaru will contact you when your car arrives',
      html: '<strong><h1>Thank you for visiting Sergios <b>SUBARU CLONE</b></h1></strong>',
    };
  sgMail.send(msg);
