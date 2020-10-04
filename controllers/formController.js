const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');




let controller = 
{
    index: function(req,res){

        let dataEmail = req.body;
        console.log(dataEmail);
      

        // let transporter = nodemailer.createTransport(options[, defaults]);


        // Generate SMTP service account from ethereal.email
        // nodemailer.createTestAccount((err, account) => {
        //     if (err) {
        //         console.error('Failed to create a testing account');
        //         console.error(err);
        //         return process.exit(1);
        //     }

        //     console.log('Credentials obtained, sending message...');


        let transporter = nodemailer.createTransport(
            {
                host: "smtp.gmail.com",
                port: 587,
                // secure: account.smtp.secure,
                auth: {
                    user: "stefano.canalla@gmail.com",
                    pass: "ghjqwe123zxcasd"
                }/* ,
                logger: true,
                debug: false // include SMTP traffic in the logs */
            },
            {
                // default message fields

                // sender info
                from: 'Gráfica Comini Contact <example@nodemailer.com>',
            }
        );

        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let textMessage = req.body.message;
            
        const message = {
            from: 'stefano.canalla@gmail.com', // Sender address
            to: 'ste.ac@hotmail.com',         // List of recipients
            subject: 'Consulta página', // Subject line
            text: "Nombre:   "+ name + "   Email:   " + email +"   Teléfono:   " + phone +"   Mensaje:  " + textMessage,   // "<p>Get your <b>Tesla</b> today!</p>"  Plain text body
            html: "<span><i>Consulta enviada a través del sitio.</i></span>" + "<p><h3>Nombre:</h3>" + name + "</p>" + "<p><h3>Email:</h3>" + email + "</p>" + "<p><h3>Teléfono:</h3>" + phone + "</p>"+ "<p><h3>Mensaje:</h3>" + textMessage + "</p>"
        };

        transporter.sendMail(message, function(err, data){
            if(err){
                console.log("Ocurrió un error, mensaje no enviado");
            }else{
                console.log(("Mensaje enviado"));
            }
        })













        res.redirect("/");
    }

}

module.exports = controller;