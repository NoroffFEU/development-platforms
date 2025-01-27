# Noroff Development Platforms

![Raspberry Pi Desktop Kit](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/api_project_setup.jpg)

![Raspberry Pi Desktop Kit](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/oversiktsbilde.jpg)


### **Introduksjon**
Raspberry Pi 5 er den nyeste modellen i Raspberry Pi-serien, kjent for sin kompakte størrelse, lave pris og brede bruksområder. Som en kraftig mikrodatabase tilbyr den muligheter for læring, utvikling og innovasjon. Raspberry Pi 5 har oppgradert maskinvare som en raskere prosessor enn forgjengeren Pi 4, støtte for USB 3.0, og forbedret termisk ytelse, noe som gjør den til et ideelt valg for prosjekter som spenner fra grunnleggende programmering til avansert utvikling.

Denne begrensede case-studien fokuserer på Raspberry Pi 5s historie, bruksområder, styrker/svakheter, og hvordan den sammenligner med andre utviklingsplattformer som Arduino og Jetson Nano. Videre inkluderes et praktisk eksempel som demonstrerer bruken av Raspberry Pi 5 for å innhente værinformasjon ved hjelp av Python.
Samt en egenvurdering av montering, oppsett og av egen bruk. 

---

### **Produktets historie**
Raspberry Pi Foundation lanserte sin første modell i 2012, med mål om å gjøre programmering og teknologi tilgjengelig for flere. Raspberry Pi 5, lansert i 2024, representerer det siste teknologiske steget i serien. Den har en ARM Cortex-A76-prosessor som opererer på 2,4 GHz, 8 GB RAM, og forbedret grafikkytelse, noe som gjør den til et kraftig verktøy for utviklere og hobbyister.

---

### **Bruksområder**
Raspberry Pi 5 kan brukes til en rekke prosjekter:
- **Hjemmeautomasjon**: Styring av smartenheter i hjemmet.  
- **Læring og undervisning**: Brukes i skoler og universiteter som et rimelig, innuativt, motiverende og gøy læringsverktøy.  
- **Webutvikling og serverdrift**: Drift av enkle webservere eller API-tjenester. Enten man studerer skole og ønsker å supplere til utdanningen, ønsker å lære mer om API-er og databaser selv eller om man ønsker å automatisere eller programere ulike prosjekter hjemme. Som f.eks Legoprosjekter  eller ulike sensorer som temperatur, luftkvalitet, kamera,video/ bilde opptak fra hytta osv osv.

- **Sensorintegrasjon**: Innhenting og analyse av data fra sensorer som værstasjoner.  

### ** Mange muligheter for læring ***
Det finnes flere muligheter for læring med dette produktet og det er flere sammarbeidspartnere og prosjekter og løsninger finnes. 
Et eksempel er Lego.
(https://www.youtube.com/watch?v=UqUG2VUFsrg)

Her er Raspbery´s egen side om forslag til prosjekter og utviklingsmuligheter!
(https://www.raspberrypi.com/products/build-hat/)

---


<img src="https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/legomotor.jpg" alt="Raspberry Pi Desktop Kit" width="500" />

### **Styrker og svakheter**
**Styrker:**  
- Rimelig pris sammenlignet med konkurrerende plattformer.Hvis man ønsker kan man bygge sin egen pc med alt av tilbehør som trenges. Men her blir det ofte
uforholdsmessig dyrt, pcen eller serveren vil ta mye større fysisk plass og mobiliteten forsvinner. Samt at den enkle muligheten for å koble til allerde gode 
Hat´er vil forsvinne. Og det finens mange gode Hat´er der ute allerede som dekker de aller fleste ønsker.    
- Aktivt fellesskap og rikelig med ressurser for læring.  
- Fleksibilitet med støtte for flere operativsystemer.  
- Det er mulighter for å anskaffe seg større caser for å skape mer rom for bedre bedre kjøling,utvidelse av Hat´er som blant annet WiFi kort eller dac- lydkort.
- Det følger med 64 GB sd kort i pakken. Her er det mulighter for å tilkoble større eksterne lagringmedier for mer morro.  

**Svakheter:**  
- Begrenset prosessorkraft for svært intensive oppgaver.  
- Avhengighet av eksterne komponenter som strømforsyning og kjøling for optimal ytelse.  
- Det følger med litt lite lagringsplass. 

---

### **Sammenligning med andre plattformer**
Sammenlignet med Arduino, som er mer fokusert på lavnivå maskinvarekontroll, tilbyr Raspberry Pi 5 en komplett Linux-basert plattform. Jetson Nano, fra NVIDIA, gir bedre GPU-ytelse for AI-oppgaver, men til en høyere pris. Raspberry Pi 5 kombinerer rimelighet og ytelse, noe som gjør den til et attraktivt valg for både nybegynnere og erfarne utviklere.

---

 ### **Forbered maskinvaren**:  
   Monter kjølesystemet og koble til tastatur og skjerm som vist på bildet:  
   ![Raspberry Pi Maskinvare](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/montering.jpg)

### **Praktisk eksempel: Innhenting av værdata med Python**
Dette eksempelet demonstrerer hvordan Raspberry Pi 5 kan brukes til å utvikle en enkel applikasjon for innhenting av værdata fra OpenWeatherMap API. Prosjektet er perfekt for nybegynnere og lar deg utforske bruk av Python og API-integrasjon.

#### **Trinn 1: Klargjør Raspberry Pi**
1. **Installer Raspberry Pi OS**:  
   Sørg for at din Raspberry Pi er konfigurert med Raspberry Pi OS. Følg oppsettet i "The Official Raspberry Pi Beginner's Guide" som vist i bildet nedenfor.  


2. **Installer nødvendige biblioteker**:  
   Åpne terminalen og installer `requests`-modulen for Python:  
   ```bash
   pip install requests
   ```

3.

---

#### **Trinn 2: Sett opp Python-scriptet**
Bruk følgende Python-kode for å hente værdata fra OpenWeatherMap:

```python
import requests

# Din API-nøkkel fra OpenWeatherMap
API_KEY = "47a959104bef0e1b3d170475f531bb98l" # Denne API- nøkkelen får man tilsendt og man legger den bare inn i koden. 
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

def hent_vaerdata(by):
    url = f"{BASE_URL}?q={by}&appid={API_KEY}&units=metric&lang=no"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        print(f"Været i {by}:")
        print(f"- Temperatur: {data['main']['temp']}\u00b0C")
        print(f"- Beskrivelse: {data['weather'][0]['description']}")
        print(f"- Vindhastighet: {data['wind']['speed']} m/s")
    else:
        print(f"Kunne ikke hente værdata for {by}. Feilkode: {response.status_code}")

# Brukerinput
by = "Oslo"
hent_vaerdata(by)
```

---

#### **Trinn 3: Kjøre scriptet**
1. Lagre scriptet som `vaerdata.py` på din Raspberry Pi.  
2. Kjrø scriptet i terminalen:  
   ```bash
   python vaerdata.py
   ```
3. Programmet vil vise værinformasjon for byen du oppgir, f.eks. Oslo. Resultatet vises med hvit tekst på svart bakgrunn i terminalen.

### **Python kode skrevet i Nano og respons fra API***

Til venstre i bildet viser man Python-koden og api spørringen skrevt i Nano. Jeg utvidet eksempelet over med bare en by, til å endre scriptet til å hente fra flere byer samtidig. 


Her er et bilde av prosjektet:

<img src="https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/nanokodeogpythonsvar.png" alt="Raspberry Pi Desktop Kit" width="1000" />


### ***Montering***

Selve Raspberry "boksen" - Inside the juice....

For noen som har bygget litt pc-er eller jobbet litt med elektronikk er dette en smal sak, godteri på en lørdagskveld. Bare kos!
Det skal holdes en tunge rett i munnen ved enkelte tilpassninger slik at kortet i seg selv ikke blir ødelagt eller at man kløne å bøyer ide pinnene. Man kan bytte ut kjøleribber, kjølevifte og legge til Hat´er. Det jeg tenker er at man tar seg god tid til å identifisere hva man vill og skal gjøre. Sørge for at man har nok og riktige deler. Og ikke minst være litt tålmodig....

Man kan velge å kjøpe bare Raspberry Pi 5 enheten og koble denne opp mot eget tastatur, mus og skjerm. Det som er greit å passe på da
er et tilkoblingene er av micro-usb til usb eller micro-usb til HDMI. SÅ flere adaptere er nødvendig. Dette skal etter hva jeg forstår fungere uten feil eller mangler.
Jeg valgte å til innkjøpe av komplett pakke og skjerm. Dette er plugg and play og selv den mest halvblinde apekatten ville klart å sette dette sammen uten problemer. 

Innstalasjonen gikk også greit. Ved å bruke ChatGPT fikk man gode tips og løsninger. Dog måtte man inn å tweeke litt for å få instalert alt og i riktig rekkefølge uten at Mr.ChatGPT kommenterte dette... 


### **Oppsummering**




<img src="https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/legoeducationAngularMotor.jpg" alt="Lego motor" width="500" />



### ** Erfaringen så langt med Raspberry Pi 5 **


Erfaringen så langt er at dette er drit kult!!  Man må bruke ChatGPT i starten for å flyt i læringen,for boka gidder man jo ikke å bla i. Men det løsner mer og mer. Man, jeg ihvertfall , bruker terminalen for å legge kode inn i python og Nano for å skrive koden til python. Her er det imdelrtid noen utfordringer med at Python ikke klarer å lese alle kode tegne som f.eks æ,ø,å eller f.eks symbolet for celcius som nano godtar.
Nano virker for meg som et litt tungvindt tekst/kode editor. Den har ikke f.eks VS codes fete funksjoner som bl.annet lintere.
Og Python er super følsom eller nøye om du vill på innrykk. Alt SKAL være på linje (det skal jo det da) men det pleier jo å funke selv om det ser helt forferdelig ut. 
Så dette er bare å se på som god læring inn mot et nytt programeringspråk tenker jeg og øvelse i best practisce.

En annen fordel tenker jeg er at jeg lærer meg og blir mye mer komfertabel med bruk av terminalen, dens kommandoer og oversikt.

En tredje og høythengende fordel er læren, bruken og utviklingen av Linux kunnskapen min. Raspberry Pi 5 er
et Linux-basert. Operativsystemet er bruker Linux-kjernen. Man får da tilgang til de fleste programmer og verktøy som fungerer på Debian-systemer. 

Neste for meg tenker jeg, blir å etablere en nettside hvor jeg kan vise frem de data jeg henter, som i mitt tilfelle. Være og temp fra flere byer, hente ut data fra sensor i stua om luftfuktighet, temp osv. 
Etter dette tenker jeg at jeg må etabelere en nettside for hytta som viser temp, kanskje et ute kamera og booking system for bruk av hytta. 

For meg så langt har denne teknologiske morrosaken vært til god læring, glede, frustrasjon, motivasjon til å bedre forstå API og dens bruksområder og samt at jeg har fått satt igang læring av et nytt programeringsspråk Python. Noe som er drit kult!

Så basert på det kan jeg ikke noe annet enn å anbefale en Raspberry Pi 5 til alle som syns overnevte er kult. 


 ### NERD OUT 




![Raspberry Pi Maskinvare](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/nerdatwork.jpg)