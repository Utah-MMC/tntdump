declare module 'nodemailer' {
  interface Transporter {
    sendMail(mailOptions: any): Promise<any>
  }
  
  interface TransportOptions {
    host: string
    port: number
    secure: boolean
    auth: {
      user: string
      pass: string
    }
    tls?: {
      rejectUnauthorized: boolean
    }
  }
  
  function createTransporter(options: TransportOptions): Transporter
  export = { createTransporter }
}
