# Teste de API (ApplicationProgramming Interface) com Karate.

## Descrição

Esta entrega se refere a lista de exercicios para validar conhecimentos com karate.

## Como executar

```shell
cd ./aula_karate
mvn test -Dtest=PublicapisRunner
```

## Tecnologias utilizadas

- Karate
- Maven


## Testes

Foram desenvolvidos 6 casos de testes, em uma única suíte para validas o funcionamento da api. 
 - Foi escolida a API https://api.publicapis.org/ para se realizar os testes, pois ela prove uma listagem de apis publicas secundárias, expandindo as possibilidades de testes.

## Respondendo as perguntas

1. Quantas suítes de testes você desenvolveu?
    - Apenas 1 suíte, englobando todos os 6 casos de testes, sendo 2 deles negativos.
2. Os testes desenvolvidos são manuais ou automatizados?
    - Automatizados
3. Onde os testes se localizam na pirâmide apresentada?
    - Em integration
    ![Logo do meu projeto](https://miro.medium.com/v2/resize:fit:640/format:webp/0*f_wmvvrIr7eeevBt.png)
4. Os testes desenvolvidos são funcionais ou não-funcionais?
    - São testes funcionais, pois validam o correto funcionamento das integrações do sistema.
5. Alguns dos testes desenvolvidos são testes Fim-a-Fim(End-To-End)?
    -  Sim, pois os testes que validam retornos de api, e consecutivamente acessar links contidos nesse retorno, podem ser considerados E2E.
6. O que se deve fazer para que os testes desenvolvidos funcionem em modo regres-são?
    - Como o modo de regressão visa validar o funcionamento após melhorias no software, do modo que foram desenvolvidos os testes já validariam alterações, pois ambos validam o correto funcionamento da api.
