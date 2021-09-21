const { v4 } = require('uuid');

module.exports = {
  user: {
    uuid: v4(),
    first_name: 'Diego',
    last_name: 'Furtado',
    email: 'admin@email.com',
  },
  cars: [
    {
      uuid: v4(),
      model: 'Nivus',
      pic: 'https://assets.volkswagen.com/is/image/volkswagenag/02_Nivus_TUNEL-1_16_9_1920x1080px?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
    },
    {
      uuid: v4(),
      model: 'Polo',
      pic: 'https://assets.volkswagen.com/is/image/volkswagenag/019_Polo_ambiente_3_4_traseira_estatica-FINAL?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy',
    },
    {
      uuid: v4(),
      model: 'Virtus',
      pic: 'https://assets.volkswagen.com/is/image/volkswagenag/019_Virtus_3_4_Frente-FIN_Highlight_16_9_1920x1080px?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTQ0MCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiYyNzEz',
    },
  ],
};
