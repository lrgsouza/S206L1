Feature: Testando API publicapis - api que lista apis publicas

Background:
    * def url_base = 'https://api.publicapis.org/'


Scenario: Testando retorno.
    Given url url_base
    When method get
    Then status 200

Scenario: Testando requisição invalida.
    Given url url_base
    And path 'baralho/coringa'
    When method get
    Then status 404

Scenario: Testando retorno url_base/entries e verificando o JSON com contagem da quantidade de apis.
    Given url url_base
    And path 'entries'
    When method get
    Then status 200
    And match response.count == 1425

Scenario: Testando retorno url_base/entries e acessando a primeira api.
    Given url url_base
    And path 'entries'
    When method get
    Then status 200
    And def link = $.entries[0].Link
    And url link
    When method get
    Then status 200


Scenario: Testando api cataas contida na listagem das apis publicas, verificando path cat/.
    Given url url_base
    And path 'entries'
    When method get
    Then status 200
    And def link = $.entries[3].Link
    And url link
    And path 'cat'
    When method get
    Then status 200

Scenario: Testando path inexistente na api cataas contida na listagem das apis publicas.
    Given url url_base
    And path 'entries'
    When method get
    Then status 200
    And def link = $.entries[3].Link
    And url link
    And path 'dog'
    When method get
    Then status 404