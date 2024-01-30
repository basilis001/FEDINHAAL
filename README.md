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

  De HTML van de website is allereerst niet goed semantisch gecodeerd. Dit zorgt voor een aantal problemen toegankelijkheidsproblemen. De website is niet bruikbaar met een toetsenbord noch een screenreader. Het is niet duidelijk waar je je op de pagina bevindt met een toetsenbord. Dit komt vooral doordat de elementen op de website niet het juist label hebben gekregen in de html structuur. Buttons zijn geen buttons, linkjes zijn buttons. Dit maakt de website niet volledig bedienbaar met een toetsenbord, verspringen kloppen niet en blijven vastzitten op element. De hele website is geboudwd op div elementen.

  Ik wil dus vooral de html goed semantisch en toegankelijk maken want dit is nu totaal niet het geval.
  
   <img src="readme-images/checklist SA 1.pdf" width="375px" alt="checklist test 1">
  
 
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
Het bovenste vond ik lastig te bedenken hoe ik deze wilde coderen en stijlen en hoe ik de html hier dan voor moest schrijven. Het is een carousel. Ik heb toen op advies van Studentass uiteindelijk gekozen voor een lijst met een h3, p img en een a. 

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


Ik wilde het eerst als een (button)lijst met steeds een button in de il als titel welke dan zou zorgen voor een nieuwe weergave onClick.


Ik heb overal voor veel lijsten gekozen. Ik twijfel nu ivm de toegankelijkheid van de website of dit de juiste keuze was. Er kwam tijdens de les naar voren dat wanneer je een bepaalde toegakelijkheid kiest die alleen de tekst voor de website weergeeft dit ervoor zorgt dat ul en subsequente il's niet worden weergeven. 

Ik heb goede feedback ontvangen over mijn code en de lijsten waren goed. Ik heb er wel voor gekozen om een bepaalde sectie niet met lijsten te doen maar articles.

feedback: headers wat aanpassen, nav moet in de header en img altijd als laatst in een sequence. Order is later aan te passen met css. Denk dus aan wat belangrijk is met het opbouwen.

Ook was ik begonen aan mijn css. Ik begon met het toewijzen van de juiste kleuren aan de juiste secties. Ik vond het nogal lastig de juiste secties te targeten met de css, waarbij deze herbruikbaar is. Ook liep ik steeds vast als ik dan toch een aanpassingen maakte in mijn code. 
</details>



## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Mijn bedoeling was in de eerste instantie om veel gebruik te mken van flexbox. Dit leek ik wat meer te begrijpen en veel stijling is hiermee al responsive. Ik kwam er alleen al snel achter dat de website niet helemaal consistent loopt qua stijling. Zo kwam ik er tijdens de les achter dat het waarschijnlijk toch verstandiger is om met grid te werken. Ik merk wel dat ik toch best vaak aanpassingen moet maken in mijn code ivm de stijling en hierbij de dom en html ook nog sematisch te houden. Maar ook wil ik qua stijling alles vaak zo effecient mogelijk te bedenken waardoor vaak genoeg ook vastloop en heel veel aanpas. Ik dacht eerder dat we geen classes mochten gebruiken dit bleek alleen voor id te gelden. Mijn sections indelen ging hierdoor nog al moeizaam. Ik kwam er toen achter dat ik wel classes mocht gebruiken. Ik dacht namelijk dat dit niet het geval was.


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


 feedback: html goed, beter met grid werken, wat meer stijling in de root zetten voor effecentie 
 
 
 
 Hierna heb elke sectie een naam gegeven een deze de juiste kleuren gegeven. Ik liep ook vaak vast omdat ik nog niet doorhad dat de parent elements grid niet doorlopen in die van de child elements. Dit zorgde vaak voor problemen. Ik moet dus de sectie de ul en de li elk afzonderlijk een grid toewijzen.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep
  
  De headings klopte en ook veel buttons en links</summary>

  ### Bevindingen
  de structuur is logisch en ik kan door het meeste heen tabben
  buttons en links geven aan waar ze voor dienen

  1. Gebruik de optie om alle headings
voor te laten lezen.
Is de structuur logisch?
Geeft elk kopje goed aan wat er onder
het kopje valt?
2. Gebruik de optie om alle linkjes voor
te laten lezen.
Geeft elke link goed aan waar naartoe
gelinkt wordt?


  //  Ik heb een duidelijkere hover en focus state toegevoegd. 
  //  Het tabben door de website laat nu beter zien waar je je bevindt.
  //  De links geven een duidelijkere functie met de sr
  //  Betere nesting, vooral van de product links
  //  img  hebben img tag
  //  consequentere stijling van links --> call to action (shop buttons) 
  // kleuren wat dieper gemaakt of andere combo van themakleuren voor ratio 
 
  <a href="./readme-images/check2-mysa.pdf"> link naar test document; </a> 

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Heel mijn HTML stond en css ook. Echter bij het invoegen van mijn JS stuitte ik weer op een aantal "fouten" om de interactieve elementen werkend te maken. Ook mocht de stijling niet aangepast worden dmv js. Dit had ik wel op wat delen. Ook dit bracht dus weer wat problemen met zich mee. Ik heb weer vele delen van mijn html moeten aanpassen ivm de stijling en hierbij de dom en html ook nog semantisch te houden. Zo heb ik de nav lijst in mijn header moeten aanpassen. Er zatten namelijk button elementen in die een tweede niveau van de nav zichtbaar moeten maken. Ik kreeg de header en haar elementen toen niet meer juist gepositioneerd met flexbox. Ik heb toen besloten om ook de header in een grid te stoppen. Dit was over het algehele vaak het probleem; het buttons in lijsten probleem. Ook in het press gedeelte.

  Ook heb hier de hover per kleur aangepast. Omdat ik dit herbruikbaar wilde maken heb ik besloten dit met classes te doen.

oude code:
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

   
  Zo had ik eerst een lijst voor de sblines sectie. Maar lijkt het erop dat ik hier meerdere lijsten van moet maken maken die samenwerken.

de h3 moet een buttonlijst worden de p een lijst en de img een lijst die ik aanelkaar moet linken met een juiste aria label. Ik liep hier heel lang op vast. En heb het tig keer aangepast. Zo heb ik hierna de lijst toch aangepast naar twee lijsten de h3 wat buttons worden en de rest wel steeds in een lijst. Deze buttons moet doorgeven welke li van de lijst weergegeven moet worden. De h3 zou dan in mijn optiek niet zichtbaar moeten zijn maar wel gelezen kunnen worden met een screenreader. Omdat een button geen heading kan zijn. En toen weer veranderd naar origineel enzovoorts...


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
 Het scrollen met de button en de juiste item weergeven bij de subsequente button, maar ook er voor zorgen dat de actieve button steeds op de juiste plek staat. 

 Ook had ik graag meer tab navigatie op de pagina gewild maar liep zo erg vast bij het bovenstaande gedeelt dat ik hier niet helemaal aan toe kwam.
 <nav id="pagenav" class=" skip-to">
			<H2>Table Of Contents</H2>
			<ul>
				
				<li>
					<a href="">
						Start: Introduction Symbol Website
					</a>
				</li>

				<li><a href="">
						New Arrival: Brionvega
				</a></li>

				<li>
<a href="#collections">
						Shop collections
					</a>
				</li>

				<li>
					<a href="#sblines">
						Shop By Line
					</a>

				</li>
				<li>
					<a href="#bestsellers">
						Bestsellers
					</a>
				</li>
				<li>
						<a href="#max">
						The Max Collection
					</a>
				</li>
				<li>
					<a href="press">
						Press
					</a>
				</li>
				<li>
					<a href="">
						Sustainability
					</a>
				</li>
				<li>
					<a href="">
						Footer
					</a>
				</li>
			</ul>
		</nav>

 footer van kleur veranderende per hover over img. deze veranderd nu alleen een keer van kleur bij hover over de img.

  <img src="./readme-images/fout.png" width="375px" alt="bummer">
</details>





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