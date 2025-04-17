# Human Centered Design <br> David Bijl

<br>
<br>
<br>

> ## Week 1
> **<sub><sup>31 mar t/m 4 apr</sup></sub>**

**Opdracht omschrijving:** <br>Darice wil graag de inhoud van podcasts kunnen volgen, inclusief alle hoorbare details zoals sfeergeluiden, geluidseffecten, en nuances zoals intonatie en andere eigenschappen van de stemmen. Is de persoon bijvoorbeeld boos? Verdrietig? Vrolijk?

<br>
<br>

Voordat ik begon te coderen, wilde ik eerst wat onderzoek doen naar wat de beste manieren zijn om audio te vertalen naar beeld. De natuurlijke, intuïtieve oplossing is om audio om te zetten in tekst.. en happetee, klaar. Maar tekst is vaak ontdaan van emotie en heeft niet helemaal de nuance die geluiden wel hebben. Daarom was het een goed startpunt voor mij om op zoek te gaan naar bronnen die precies dit probleem onderzoeken en me helpen uit te zoeken wat de beste alternatieve of aanvullende oplossingen voor dit probleem zijn.

**Ondertiteling met Paralinguistic Information**<br>
Voorbeeld -> <samp><mark>[door creaks]</mark></samp> of <samp><mark>[angrily]</mark></samp> / <samp><mark>[joyfully]</samp></mark><br>
<sub><sup>Source: https://waywithwords.net/resource/accessible-captions-for-hearing-impaired/</sup></sub>

**Visuele feedback**<br>
Voorbeeld -> schreeuwende audio kan worden weergeven door grotere, ruigere tekst. De ambiance van een enge grimmige scene kan worden weergeven door kleinere koude blauwe tekst. Fluitende vogels kunnen letterlijk gevisualiseerd worden etc etc.<br>
<sub><sup>Source: https://dl.acm.org/doi/10.1145/3544548.3581130</sup></sub>

**3D Sound direction indicator**<br>
Voorbeeld -> Als iemand links praat dat dan de tekst ook links komt te staan. Als tekst vanuit de verte komt dat dan de tekst ook van verweg komt.<br>
<sub><sup>Source: https://www.youtube.com/watch?v=hTImdpMJ4dE</sup></sub>

**Haptische feedback**<br>
Voorbeeld -> Chaotische / wilde momenten kunnen worden versterk door trillingen. Het ritme van een beat / muziekje kan worden aangetoond door trillingen (mogelijk op telefoon).<br>
<sub><sup>Source: https://arxiv.org/pdf/2012.13265</sup></sub>

<br>
<br>

**Probleem:**
Hoe kan ik een feature bouwen die beeld verwerkt en vertaald naar de bovengenoemde oplossingen? AI?

<br>
<br>

**Dingen die NIET nodig zijn**<br>
- Niet optimised voor screenreader?
- Keyboard navigation is geen prioriteit?
- Geen audio feedback voor alerts of iets dergelijks?

---

<br>
<br>
<br>

> ## Week 2
> **<sub><sup>7 t/m 11 apr</sup></sub>**

Omdat ik week 1 het test moment had gemist had ik best wel generieke informatie gevonden. Na het feedback gesprek had ik van mede studenten geleerd over de specifieke behoefte die Darice had. Ook vertelde Vasilis dat het het interessantst is als je een fragment kiest waarbij audio een belangrijke rol speelt, iets wat je als doofe gebruiker dus niet echt mee krijgt. Met deze kennis ben ik opzoek gegaan naar een film of podcast die deze rol echt goed vult. 

Uiteindelijk ben ik op Jaws uitgekomen. Specifiek, de eerste scene waar jaws boven water komt en aanvalt op het strand. Vervolgens heb ik een aantal toevoegingen bedacht die ik op de film kon uitoefenen, bijvoorbeeld een pulseerende border wanneer de classic jaws theme begint. Of het schudden van het scherm wanneer er chaos op beeld is. Zo had ik nog een aantal dingen bedacht.

Al deze effecten had ik vervolgens in mijn eerste prototype op een aantal checkboxes gezet. Ik kon dan handmatig de effecten aan en uitzetten tijdens dat de video afspeelde. Als feedback op de effecten vertelde Darice het volgende,
1. Pulse -> was goed
2. Choas shake -> iets te hevig en duurde te lang
3. Zoom -> was goed
4. Emoji mode -> was onnodig, ze kan zelf emoties herkennen en hoeft geen emojis in beeld te zien om de emotie te snappen

Mijn plan voor na deze test was om nog extra features te bedenken, maar vooral om het script van Vasilis te implementeren zodat de effectjes ook echt gebuiren op de juiste tijdstippen en niet handmatig moeten worden aangezet.

---

<br>
<br>
<br>

> ## Week 3
> **<sub><sup>14 t/m 17 apr</sup></sub>**

Deze week ben ik bezig geweest met het werkend maken van het script van Vasilis. Het was even puzzelen om het te begrijpen en door te hebben wat ik wel en niet nodig had. Ook was er wat oude styling die ik niet nodig had. Uiteindelijk ben ik eruit gekomen en kon ik gaan beginnen aan captions toevoegen, dit was een langdraadig proces en best wel pielen. Naast de captions heb ik ook een mapping toegevoegd voor tijdsmomenten waar een effect op de achtergrond of videoframe 

---

<br>
<br>
<br>

> ## Week 4
> **<sub><sup>22 t/m 25 apr</sup></sub>**

---

<br>
<br>
<br>

> ## Bronnen

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

---