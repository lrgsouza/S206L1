package aula_inatel.publicapis;

import com.intuit.karate.junit5.Karate;

class PublicapisRunner {    
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("publicapis").relativeTo(getClass());
    }    

}
