# DeadMoves PM

## Inledning

**Vad har gjorts?**  
Jag har från och med ungefär november 2024 jobbat med DeadMoves, ett oändligt runda baserat rhythm spel där man är en pingvin som dansar så dåligt så att tomtenissar lämnar tomtens korrupta verkstad.

**Hur fungerar spelet?**  
Spelet är displayed i en html canvas, vilket är som en form av block som kan rita ny grafik omedelbart medan själva grafiken skapas genom javascript kod som förklarar hur allting ska se ut, hur det ska röra sig eller bete sig osv.

Vite används för att hosta spelet i github pages, så att man lätt kan komma åt spelet själv och köra det utan att behöva ladda ner alla nödvändiga filer själv, vilket förstås kan underlätta väldigt mycket om personer vill speltesta det.

## Bakgrund
Målet med DeadMoves var att skapa åtminstone ett spel med ett runda system som hade kunnat fortsätta i all oändlighet. Tomtenissarna skulle kunna hoppa på dig, vid vilken punkt du hade behövt spamma tagenter för att skaka av dig dem, och detta är något som reflekteras i vissa av de oanvända sprites som finns i assets för exempelvis pingvinen som man spelar som.

### Arbetets olika delar

**Setup**  
All form av setup gjordes i helklass, så jag själv gjorde inte mycket annat än att bara följa instruktioner. Vi skapade html canvasen som sedan användes för grafiken, vi skapade två fiender och en spelare som kunde röra på sig genom javascript, och vi fick även prova på att använda sprites, som jag sedan bytte ut eftersom att jag fick nya av Lo.

**Movement, speedcaps och osynliga väggar**  
Movement i helhet skapades i huvudsak av Jens, våran lärare, men jag justerade den en del för att bättre passa spelet jag gjorde. Jag lade till speedcaps, det vill säga maxvärden på hastigheten och osynliga väggar som stoppar spelaren från att röra sig utanför det avsedda spelområdet.


**Sprites och bakgrund**  
Alla sprites i spelet laddas in genom spritesheets, det vill säga en väldigt stor bild som har alla individuella sprites på sig. Spritesheets fungerar genom att javascript helt enkelt "scrollar" från sprite till sprite i spritesheeten tills den har nått slutet av ett set av sprites. Då den gjort det, så börjar den antingen om, påbörjar ett nytt sett, eller någonting helt annorlunda beroende på koden. I mitt fall så loopade alla sprites igenom samma set hela tiden, eftersom att jag inte hann få något mer fungera innan projektets slut.

Bakgrunden var något som var lite svårare att göra, då den är uppdelad in i två bilder, en förgrund och en bakgrund. För att få effekten av att nissarna går igenom dörren för att komma in i rummet så behöver allting ritas av javascript i en specifik ordning för att få det fungera, samt så behövde jag skriva separata kod filer för både för- och bakgrunden.

## Positiva erfarenheter
Jag skulle säga att i helhet förstår jag mig bättre på hur javascript, html och css kan användas i samband för att skapa spel på hemsidor, samt lite generell javascript syntax, då jag inte egentligen är särskilt bekant med det språket fortfarande.

Själva grupparbetet gick även bra, vi fick OTROLIGT hög kvalite sprites av Lo. Hon gjorde verkligen ett fantastiskt jobb med dem, och trots att de var lite sena så var dem absolut värt väntan. Josua har även hjälpt till med själva programmerings sidan av det hela lite grann då jag hade svårt att få bakgrunden att fungera, vilket är förstås någonting jag uppskattar väldigt mycket.

## Negativa erfarenheter
Det tog ett tag för mig att påbörja arbetet, och då jag väl gjorde det så gick det ganska långsamt, vilket ledde till en slutprodukt som inte riktigt nådde de mål som vi hade satt vid början av grupparbetet.

Vi var nog lite väl ambitiösa med mängden funktioner och olika attacker som skulle finnas i spelet, medans jag själv var bara i helhet ganska oeffektiv med själva arbetandet. Detta är någonting jag ska försöka jobba på till nästa uppgift, och är i helhet en dålig vana.

Hostingen gick även inte särskilt bra. Jag försökte följa alla steg, men råkade i processen av detta göra en massa misstag som tog mig ett tag att fixa på grund av att jag inte läste igenom instruktionerna tillräckligt noga, och i framtida projekt ska jag försöka ta min tid med att läsa igenom dem och inte stressa så mycket. Det är bättre att jag är helt säker på att jag vet vad jag gör innan jag börjar och börjar lite sent, än vad det är att bara köra på och hoppas på det bästa.

## Sammanfattning
Trots allting skulle jag säga att jag är relativt nöjd med den slutprodukt som jag har. Los sprites får verkligen allting att se väldigt levande och fint ut.

De saker jag har lärt mig om i huvudsak javascript och vite kommer jag ta med mig till nästa uppgift, och de negativa erfarenheter i helhet som jag har haft med detta projekt kommer jag försöka att ta som en läxa till nästa arbete som vi påbörjar.