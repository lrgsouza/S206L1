Feature: Testando API pokemon

Background:
    * def url_base = 'https://pokeapi.co/api/v2/'


Scenario: Testando retorno.
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method get
    Then status 200

Scenario: Testando requisição invalida.
    Given url 'https://pokeapi.co/api/v2/pokemon/morango'
    When method get
    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path 'pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == 'pikachu'
    And match response.id == 25

Scenario: Testando retorno pikachu rede e acessando uma url contida no json.
    Given url url_base
    And path 'version/1/'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == 'es'
    And match response.id == 7

Scenario: Testando ditto + habilidades.
    Given url url_base
    And path 'pokemon/ditto'
    When method get
    Then status 200
    And def url_habilidade = $.abilities[0].ability.url
    And url url_habilidade
    When method get
    Then status 200
    And match response.generation.name == 'generation-iii'

Scenario: Testando listagem de pokemons e visitando o pokemon numero 1.
    Given url url_base
    And path 'pokemon?limit=100000&offset=0'
    When method get
    Then status 200
    And def url_poke = $.results[0].url
    And url url_poke
    When method get
    Then status 200
    And match response.name == 'bulbasaur'