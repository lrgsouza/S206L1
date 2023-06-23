# S206L1
Branch dedicada à entrega da prova pratica de qualidade de software

 ## Para o projeto CYPRESS
 ```
 cd .\cypress\testes
npm install cypress --save-dev
npm run start:cypress
```

## Para rodar e gerar os relatórios
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

 ## Para o projeto KARATE
 ```
 cd .\karate\
 mvn test -Dtest=ProvaRunner
 ```
