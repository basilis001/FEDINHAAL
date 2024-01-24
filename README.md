# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Suneyska Basilio

  #### Je startniveau:
  Lichtblauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>

  ### Je opdracht:
  https://www.symbolaudio.com/

  #### Screenshot(s) van de eerste pagina (small screen iPhone 12): 
  Homepage Symbol Audio 
  <img src="/readme-images/SAHome.png" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen iPhone 12):
  hier de naam van de pagina  
  <img src="readme-images/SAP2.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)


  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  De HTML van de website is allereerst niet goed semantisch gecodeerd. Dit zorgt voor een aantal problemen toegankelijkheidsproblemen. De website is niet bruikbaar met een toetsenbord noch een screenreader. Dit komt vooral doordat de elementen op de website niet het juist label hebben gekregen in de html structuur. Buttons zijn geen buttons, linkjes zijn buttons. Dit maakt de website niet volledig bedienbaar met een toetsenbord, verspringen kloppen niet en blijven vastzitten op element. De hele website is geboudwd op div elementen.

  Ik wil dus vooral de html goed semantisch en toegankelijk maken want dit is nu totaal niet het geval.
  
  
 
</details>


## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/brkds.png" width="375px" alt="breakdown van de hele pagina">

   ### dynamisch deel (bijv menu): 
   <img src="readme-images/brkddyn.png" width="375px" alt="breakdown van de hele pagina">

  

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
<img src="readme-images/lastig.png" width="375px" alt="">
bovenste lastig te bedenken hoe ik deze wilde coderen en hoe ik de html hier dan voor moest schrijven. Het is een carousel dus hier heb ik uiteindelijk voorgekozen. Ik wilde het eerst als lijst met steeds een button in de il als titel welke dan zou zorgen voor een nieuwe weergave.

ik heb voor veel lijsten gekozen. Ik twijfel nu ivm de toegankelijkheid van de website of dit de juiste keuze was. Er kwam tijdens de les naar voren dat wanneer je een bepaalde toegakelijkheid kiest die alleen de tekst voor de website weergeeft dit ervoor zorgt dat ul en subsequente il's niet worden weergeven.

feedback: headers iets aanpassen, en  img altijd als laatst. Order is aan te passen met css

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Ik ben begonnen aan mijn css en wilde en heb toen voornamelijk de bedoeling gehad om flexbox te gebruiken. Dit leek ik wat meer te begrijpen en veel stijling is hiermee al responsive. Ik kwam er alleen al snel achter dat de website niet helemaal consistent loopt qua stijling. Zo kwam ik er tijdens de les achter dat het waarschijnlijk toch verstandiger is om met grid te werken. Ik merk wel dat ik toch best vaak aanpassingen moet maken in mijn code ivm de stijling en hierbij de dom en html ook nog sematisch te houden. Maar ook wil ik qua stijling alles vaak zo effecient mogelijk te bedenken waardoor vaak genoeg ook vastloop. Ik dacht eerder dat we geen classes mochten gebruiken dit bleek alleen voor id te gelden. Mijn sections indelen ging hierdoor nog al moeizaam.

oude code 
  header {
	background-color: var(--Cream-themecolor);
	color: var(--Red-themecolor);
}

.intro,
main section:nth-of-type(2),
main section:nth-of-type(4)
{
	background-color: #fffcda;
	color: #c72a00;

}
main section:nth-of-type(9){
	background-image: url("/images/fforf.png");
	background-size: cover;

}

main section:nth-of-type(3),
main section:nth-of-type(9) :nth-child(2) {
	background-color: var(--Red-themecolor);
	color: var(--Cream-themecolor);
}

main section:nth-of-type(5),
main section:nth-of-type(8)  {
	background-color: var(--Blue-themecolor);
	color: var(--Gray-themecolor);

}
main section:nth-of-type(7){
background-image: url("/images/maxcollect.webp");
color: var(--Cream-themecolor);
background-size: cover;
}

main section:nth-of-type(6) {
	background-color:var(--Gray-themecolor) ;
	color: var(--Blue-themecolor);
}



Vooral de vele lijsten die ik gebruik ben ik vaak aan het aanpassen en ze ook vaak weer terug aanpas.
Zo had ik hier eerst een lijst. Maar lijkt het erop dat ik hier meerdere lijsten van moet maken gaan maken die samenwerken.

  <ol>
				<li>
					<h3>Aero></h3>
					<p>Our handcrafted AERO cabinets offer a unique alternative to the mass produced entertainment
						cabinets and audio racks currently available. Our modular approach makes it easy for you to
						configure a custom cabinet that satisfies your specific storage and component requirements.
						Choose from a range of woods and finishes to further personalize your one-of-a-kind
						turntable furniture.</p>
					<a class="sn" href="#"> Shop all aero &#8594</a>
					<img src="/images/aero.webp" alt="">
				</li>

				<li>
					<h3>Unison</h3>
					<p>An all-in-one solution, Unison combines both audio gear and record storage into a beautifully
						designed single piece of solid wood furniture. Choose from a range of woods and finishes to
						further personalize your cabinet.</p>
					<a class="sn" href="#"> Shop all unique &#8594 </a>
					<img src="/images/unison.webp" alt="">
				</li>

				<li>
					<h3>Luxe</h3>
					<p>Luxe Record Stands elegantly display cover art while providing easy access to as many as 520
						records. All of our cabinets are hand-built in the United States from sustainably harvested
						solid Ash and Walnut, available in a range of finishes.</p>
					<a class="sn" href="#"> Shop all Luxe &#8594 </a>
					<img src="/images/luxe.webp" alt="">
				</li>

				<li>
					<h3>Dovetail</h3>
					<p>Luxe Record Stands elegantly display cover art while providing easy access to as many as 520
						records. All of our cabinets are hand-built in the United States from sustainably harvested
						solid Ash and Walnut, available in a range of finishes.</p>
					<a class="sn" href="#"> Shop all Luxe &#8594</a>
					<img src="/images/dovetail.webp" alt="">
				</li>

				<li>
					<h3>max</h3>
					<p>We developed MAX to offer the same quality and function of our solid-wood record cabinets in
						a
						small, and efficient footprint. Flat-packed, easy to assemble and disassemble, and as
						always,
						built in the U.S. from sustainably-harvested materials.</p>
					<a class="sn" href="#"> Shop all max &#8594</a>
					<img src="/images/max.webp" alt="">
				</li>
				</ol>



 feedback: html goed, beter met grid werken, wat meer stijling in de root zetten voor effecentie 
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken





</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>


<ul>
				<li>
					<h3>Architectural Digest</h3>
					<p>"Dynamic in both sound quality and form..."</p>

				</li>

				<li>
					<h3>Gizmodo</h3>
					<p>"…makes music look as beautiful as it sounds"</p>
				</li>

				<li>
					<h3>Interior Design</h3>
					<p>"Stylish music geeks will covet the Midcentury modern lines and high tech specs…"</p>
				</li>
			</ul>


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
  2. https://www.w3schools.com/cssref/pr_scroll-behavior.php
  3. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  4. https://css-tricks.com/snippets/css/complete-guide-grid/










        ---------
        week eind update 
        <ul>
				<li>

					<button aria-label="Show Press Quote Architectural Digest" aria-owns="" id="Architectural">
						<h3>Architectural Digest</h3>
					</button>

				</li>

				<li>
					<button aria-label="Show Press Quote Gizmodo" id="Gizmodo">
						<h3>Gizmodo</h3>
					</button>

				</li>

				<li><button aria-label="Show Press Quote Interior Design" id="Interior">
						<h3>Interior Design</h3>
					</button>

				</li>
			</ul>

			<ul>

</details>

header {
	background-color: transparent;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 6rem;
  top: 0;
  width: 100%;
  z-index: 3;
  padding: 0 .875rem ;
  align-items: center;
}

.achter{
	background-color: var(--Cream-themecolor);
	transition: ease 1s background-color 1s;
	align-content: center;
}
/*
.transition-header {
    transition-duration: .15s;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}
*/

header hgroup div {
	width: 5em;
	padding-right: 1rem;
	margin-right: 1rem;
}

header .mobile {
	display: none;
}

header nav {}
header nav,
header ul {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

}