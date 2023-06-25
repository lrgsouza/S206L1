## Repositório para desenvolvimento de testes no site The-Internet usando CYPRESS
#
### CASOS DE TESTES

- Carregar home page com sucesso
- Fazer login e logout com sucesso
- Fazer login com usuário inexistente (caso negativo)

#
## Para rodar o projeto

```bash
npm install cypress --save-dev
npm run start:cypress
```

## Para rodar e gerar os relatórios
```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
#
