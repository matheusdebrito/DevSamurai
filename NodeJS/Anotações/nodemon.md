Nodemon faz com que não seja necessário ficar reiniciando a api para implementar mudanças

yarn add nodemon -D - instalar o nodemon

npx nodemon index.js - inicia o servidor


Podemos adicionar um script no arquivo package.json

Adicionamos scripts no package.json

"scripts":{
    "dev": "nodemon index.js"
  }

após isso podemos executar yarn dev para rodar o servidor