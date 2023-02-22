const nodemailer = require ('nodemailer')


const mail ={
  user: 'vendotelefonos123@gmail.com',
  pass: 'hdymtyxoycpmjuvg'
}

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  tls: {
      rejectUnauthorized: false
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass, // generated ethereal password
  },
});


const sendEmail = async (email, subject,html)=>{
  try{
      await   transporter.sendMail({
          from:`${mail.user}`,
          to:email,
          subject,
          text:"Bienvenido a Vendo telefonos",
          html,
      })
  }catch(error){
      console.log("algo no va bien con el email",error)
  }

}

const getTemplate = (email,token)=>{
  return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://www.flickr.com/photos/197399024@N05/52623616952/in/dateposted-public/" alt="">
          <h2>Hola ${ email }</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:3000/user/confirm/${token}"
              // href="https://frontpf-production-eafa.up.railway.app/user/confirm/${token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `};



    module.exports= {
      sendEmail,
      getTemplate,
    }