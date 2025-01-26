# Noroff Development Platforms
![Raspberry Pi Desktop Kit](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/oversiktsbilde.jpg)
### **Introduksjon**
Raspberry Pi 5 er den nyeste modellen i Raspberry Pi-serien, kjent for sin kompakte størrelse, lave pris og brede bruksområder. Som en kraftig mikrodatabase tilbyr den muligheter for læring, utvikling og innovasjon. Raspberry Pi 5 har oppgradert maskinvare som en raskere prosessor, støtte for USB 3.0, og forbedret termisk ytelse, noe som gjør den til et ideelt valg for prosjekter som spenner fra grunnleggende programmering til avansert utvikling.

Denne case-studien fokuserer på Raspberry Pi 5s historie, bruksområder, styrker/svakheter, og hvordan den sammenligner med andre utviklingsplattformer som Arduino og Jetson Nano. Videre inkluderes et praktisk eksempel som demonstrerer bruken av Raspberry Pi 5 for å innhente værinformasjon ved hjelp av Python.

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

### **Styrker og svakheter**
**Styrker:**  
- Rimelig pris sammenlignet med konkurrerende plattformer.Hvis man ønsker kan man bygge sin egen pc med alt av tilbehør som trenges. Men her blir det ofte
uforholdsmessig dyrt, pcen eller serveren vil ta mye større fysisk plass og mobiliteten forsvinner. Samt at den enkle muligheten for å koble til allerde gode 
Hat´er vil forsvinne. Og det finens mange gode Hat´er der ute allerede som dekker de aller fleste ønsker.    
- Aktivt fellesskap og rikelig med ressurser for læring.  
- Fleksibilitet med støtte for flere operativsystemer.  

**Svakheter:**  
- Begrenset prosessorkraft for svært intensive oppgaver.  
- Avhengighet av eksterne komponenter som strømforsyning og kjøling for optimal ytelse.  

---

### **Sammenligning med andre plattformer**
Sammenlignet med Arduino, som er mer fokusert på lavnivå maskinvarekontroll, tilbyr Raspberry Pi 5 en komplett Linux-basert plattform. Jetson Nano, fra NVIDIA, gir bedre GPU-ytelse for AI-oppgaver, men til en høyere pris. Raspberry Pi 5 kombinerer rimelighet og ytelse, noe som gjør den til et attraktivt valg for både nybegynnere og erfarne utviklere.

---

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

3. **Forbered maskinvaren**:  
   Monter kjølesystemet og koble til tastatur og skjerm som vist på bildet:  
   ![Raspberry Pi Maskinvare](https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/montering.jpg)

---

#### **Trinn 2: Sett opp Python-scriptet**
Bruk følgende Python-kode for å hente værdata fra OpenWeatherMap:

```python
import requests

# Din API-nøkkel fra OpenWeatherMap
API_KEY = "din_api_nøkkel"
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




### **Oppsummering**
https://github.com/ChristianWestby/Raspberry-Pi-5-product-case-study.md/blob/main/public/images/Hvordan%20bygge%20et%20prosjekt%20med%20API%20og%20DATAbaser%20Det%20finnes%20ingen%20absolutt%20fasit%20p%C3%A5%20hvordan%20man%20bygger%20opp%20et%20slikt%20system.jpg
Raspberry Pi 5 er en kraftig og fleksibel utviklingsplattform som passer til en rekke prosjekter, fra enkle hobbyprosjekter til avanserte utviklingsoppgaver. Med sin kraftige maskinvare og aktive fellesskap er den et utmerket valg for utviklere som ønsker å utforske teknologiens potensiale. Dette eksempelet med Python og værdata viser hvordan plattformen kan brukes for å bygge praktiske applikasjoner.


### ** Erfaringen så langt med Raspberry Pi 5 **
![Raspberry Pi Desktop Kit]

Erfaringen så langt er at dette er drit kult!  Man må bruke ChatGPT i starten, men det løsner mer og mer. Man, jeg ihvertfall , bruker terminalen for ålegge  kode inn i python og Nano for å skrive koden til python. Her er det imdelrtid noen utfordringer med at Python ikke klarer å lese alle kode tegne som f.eks æ,ø,å eller f.eks symbolet for celcius som nano godtar. 

Neste for meg blir å etablere en nettside hvor jeg kan vise frem de data jeg henter, som i mitt tilfelle. Være og temp fra Oslo by. 
Etter dette tenker jeg at jeg må etabelere en nettside for hytta som viser temp, kanskje et ute kamera og booking system for bruk av hytta. 



