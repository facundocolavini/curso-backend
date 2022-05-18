module.exports = {
  mongoConfig: {
    HOSTNAME: 'cluster0.nilfq.mongodb.net',
    SCHEMA: 'mongodb+srv',
    USER: 'facundo',
    PASSWORD: '38991520',
    DATABASE: 'eccomerce',
    OPTIONS: 'retryWrites=true&w=majority',
  },
  redisConfig: {
    PASSWORD: process.env.REDIS_PASSWORD,
  },
  mail: {
    GMAIL_PWD: process.env.GMAIL_PWD,
    GMAIL_ADDRESS: process.env.GMAIL_ADDRESS,
  },
  twilio: {
    TWILIO_AUTH: process.env.TWILIO_AUTH,
    TWILIO_SID: process.env.TWILIO_SID,
    TWILIO_PHONE: process.env.TWILIO_PHONE,
  },
};
