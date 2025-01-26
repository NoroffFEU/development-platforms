# Noroff Development Platforms
![Raspberry Pi Desktop Kit](attachment:/mnt/data/20250118_002434.jpeg)
/Users/christianwestby/Documents/Images/Raspberry PI 5/20250118_002434.jpg
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
- **Læring og undervisning**: Brukes i skoler og universiteter som et rimelig læringsverktøy.  
- **Webutvikling og serverdrift**: Drift av enkle webservere eller API-tjenester.  
- **Sensorintegrasjon**: Innhenting og analyse av data fra sensorer som værstasjoner.  

---

### **Styrker og svakheter**
**Styrker:**  
- Rimelig pris sammenlignet med konkurrerende plattformer.  
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

![Raspberry Pi Maskinvare](attachment:/mnt/data/20250118_003841.jpeg)
2. **Installer nødvendige biblioteker**:  
   Åpne terminalen og installer `requests`-modulen for Python:  
   ```bash
   pip install requests
   ```

3. **Forbered maskinvaren**:  
   Monter kjølesystemet og koble til tastatur og skjerm som vist på bildet:  
   ![Raspberry Pi Maskinvare](attachment:/mnt/data/20250118_003841.jpeg)

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

---

#### **Visuelle forbedringer**
For å presentere informasjon på skjermen med svart bakgrunn og hvit tekst, kan du bruke følgende justeringer i scriptet for å få en visuelt mer tiltalende utskrift:

```python
import os

# Endre terminalbakgrunn til svart
os.system('echo -e "\033]11;#000000\007"')  # Bakgrunn
os.system('echo -e "\033]10;#FFFFFF\007"')  # Tekstfarge
```

---

### **Oppsummering**
Raspberry Pi 5 er en kraftig og fleksibel utviklingsplattform som passer til en rekke prosjekter, fra enkle hobbyprosjekter til avanserte utviklingsoppgaver. Med sin kraftige maskinvare og aktive fellesskap er den et utmerket valg for utviklere som ønsker å utforske teknologiens potensiale. Dette eksempelet med Python og værdata viser hvordan plattformen kan brukes for å bygge praktiske applikasjoner.

*A student written library of development platform case studies.*

**Please do not delete this file!**

## Purpose

Development Platforms is a collaborative research course operated by Noroff FEU. The course is designed to give students exposure to and practice with technical research and documentation.

## Contributing

1. Create a `fork` of this repository.
2. Create a `branch` for your contribution.
3. Add new lessons or edit existing lessons.
4. Commit your changes with helpful descriptions.
5. Push your changes and open a Pull Request.
   1. Pull Request title for new content: `Adds case study: <name>.md`
   2. Pull Request title for edits: `Edits case study: <name>.md`
   3. Describe your changes and why you have made these.
   4. Request review from the repository owner.

## License

All work in this repository is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
