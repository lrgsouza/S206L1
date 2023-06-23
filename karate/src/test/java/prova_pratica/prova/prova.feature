Feature: Testando API publicapis - api POKEAPI

Background:
    * def url_base = 'https://pokeapi.co/'

Scenario: Testando retorno URL BASE da nossa API.
    Given url url_base
    When method get
    Then status 200

Scenario: Testando requisição invalida para metodo PUT.
    Given url url_base
    And path 'api/v2/item/:id'
    When method put
    Then status 404

Scenario: Testando geração do ability/battle-armor e verificando se é a terceira.
    Given url url_base
    And path 'api/v2/ability/battle-armor'
    When method get
    Then status 200
    And def link = $.generation.url
    And url link
    When method get
    Then status 200
    And def generation = $.name
    And match generation == 'generation-iii'
    

Scenario: Testando query string para limite de 200 resultados
    Given url url_base
    And path 'api/v2/pokemon/?limit=200'
    When method get
    Then status 200
    And def tamanhoEsperado = '#[200]'
    And match $.results == tamanhoEsperado


Scenario: Testando query string para 1 resultado e analisando URL do resultado obtido.
    Given url url_base
    And path 'api/v2/pokemon/?limit=1'
    When method get
    Then status 200
    And def link = $.results[0].url
    And url link
    When method get
    Then status 200
    And match $.name == "bulbasaur"
