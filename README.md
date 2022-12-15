# Visualisointeja ilmastonmuutoksesta

Projektia olivat tekemässä Onni Hietanen, Erika Korhonen, Johannes Huttunen sekä Aleksi Siirtola. 

## Projektin esittely 

Tämä projekti on Oulun ammattikorkeakoulun 2. vuoden opiskelijoiden opintoihin sisältyvä web-ohjelmoinnin sovellusprojekti. Projektissa teimme web-sovelluksen, jonka avulla voidaan tarkastella erilaisia lämpötila- ja päästötietoja menneiltä vuosilta. Käyttäjä voi luoda sovellukseen oman käyttäjän sekä kirjautua käyttäjänimellä ja salasanalla. Käyttäjän voi myös halutessaan poistaa käyttäjänsä. Viimeiselle sivulle käyttäjä voi luoda omia visualisointeja ja tallentaa ne tietokantaan.  

Emme määritelleet projektissa erikseen tarkkoja rooleja, vaan projektissa kaikki työskentelivät Full Stack -kehittäjinä eli sekä clientin että serverin parissa. 
![Kuva](https://am3pap002files.storage.live.com/y4mDoQK7otzMZhBgjzvbuk-whV-JTfOMRZl_f9BU_n7JQ_4nQEqOYlj9_mmncbmItt0KPQQSyTT9M0TBGKHtZW8byosgBoVtMW3J_3e5mUDs1AqUz2iUzQ0jhqAYqIipoQ1gMXMG3AHKwF0lqvCZvrYuQavVNIbcp-wlfF1z240qSmAhtLWIuvNY6aDxQm5YjAbflhLGLM05-V1lWPxzxgy3qYU0oYq77RVkGp2DR5-HPc?encodeFailures=1&width=1791&height=1231)

## Projektissa käytetyt teknologiat  

Projektissa käytetään paljon JavaScriptiä, Reactia ja MySQL-tietokantaa. 

Nettisivuston ulkoasu ja toiminnallisuus on toteutettu React-kirjaston avulla. React on JavaScript-kirjasto, jonka avulla voidaan luoda interaktiivisia käyttöliittymiä. Reactin avulla luodut käyttöliittymät ovat erittäin suorituskykyisiä ja ne päivittyvät reaaliajassa käyttäjän toimien mukaisesti. 

REST-API on toteutettu JavaScriptillä. REST eli Representational State Transfer on rajapinta, jonka avulla sovelluksen eri osat voivat vuorovaikuttaa toistensa kanssa. JavaScript on yleisesti käytetty ohjelmointikieli, jolla voidaan toteuttaa sekä frontend- että backend-toiminnallisuuksia. JavaScriptin avulla toteutettu REST-API tarjoaa rajapinnan sovelluksen tietokannan, MySQL:n kanssa vuorovaikutukseen. 

Sovelluksen tietokanta on toteutettu MySQL:llä. MySQL on yksi yleisimmin käytetyistä tietokannoista, joka on suunniteltu erityisesti web-sovellusten tarpeisiin. MySQL on helppo asentaa ja konfiguroida, ja sen avulla voidaan tallentaa ja hallinnoida suuria määriä tietoja tehokkaasti. Sovelluksen tietokanta on toteutettu MySQL:llä, jotta sen avulla voidaan tallentaa ja käsitellä sovelluksen tarvitsemia tietoja tehokkaasti ja luotettavasti.  

## Sovelluksen käyttö

Sovelluksella voi tarkastella N1, N2 ja N3-sivua ilman kirjautumista.  

Navigointipalkissa Login/Signup -linkkiä painamalla pääsee kirjautumissivulle, jossa voi luoda käyttäjän ja kirjautua sisälle. Sisäänkirjautumisen jälkeen voi poistaa käyttäjän.  

N3-sivulla voi tehdä omia mukautettuja näkymiä ja lähettää tiedot tietokantaan. Sivu ei ole täysin valmis eli tietokantaan tallennetut tiedot eivät vielä näy nettisivulla. Kun käyttäjä poistetaan, poistuvat myös käyttäjän omat näkymät 

## Sovelluksen käyttöönotto 

[Sovellus](https://phrasal-period-368810.ey.r.appspot.com/) on ajossa Google Cloud Platform -palvelussa.

Develop haarassa on versio koodista, jonka voi ajaa paikallisesti omalla tietokoneella, koska kaikki toiminnallisuudet eivät toimi pilvipalvelussa.  

1. Tallenna projekti paikallisesti ajamalla komento **git clone –b Develop https://github.com/WebOhjelmoinninSovellusprojektiRyhma17/WebSovProjekti.git** 

2. Avaa konsolissa client ja server kansiot ja aja molempiin komento **npm install** 

3. Aja molempiin kansioihin komento **npm start** 

## Ajatuksia projektista 

Projekti oli mukava työn sarka viime jakson teoriakurssien jälkeen. Se antoi haastetta myös backendista opittuihin asioihin ensimmäiseltä vuodelta. 

Olemme tyytyväisiä viikkopalavereihin, sillä ne pidettiin joka viikko samaan aikaan ja siellä käytiin läpi projektin sen hetkistä tilannetta ohjaavan opettajan kanssa. Lisäksi pidimme ryhmämme kesken joka aamu kymmeneltä palaverin, jossa kävimme päivän tehtäviä läpi ja teimme projektia yhdessä eteenpäin.  

Projekti kokonaisuudessaan antoi hyvän pohjan web-ohjelmointiin ja olemme tyytyväisiä projektin nykyiseen tilaan. 

 

 
