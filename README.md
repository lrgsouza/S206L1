# S206L1
Branch dedicada à entrega da prova pratica de qualidade de software

 # Para o projeto CYPRESS

 #### Para via interface gráfica
 ```bash
 cd .\cypress\testes
npm install cypress --save-dev
npm run start:cypress
```

#### Para rodar e gerar os relatórios
```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

 # Para o projeto KARATE
 ```bash
 cd .\karate\
 mvn test -Dtest=ProvaRunner
 ```
