<script>
import Frame1 from "./Frame1";
import Frame1000004784 from "./Frame1000004784";
import { mapGetters } from 'vuex';

export default {
  name: "Pagina5",
  components: {
    Frame1,
    Frame1000004784,
  },
  props: [
    "hoeKunnenWijJouBereiken",
    "layer21",
    "layer22",
    "layer23",
    "group",
    "bevestigMijnDeelname",
    "metHetBevestigenV",
    "gefeliciteerdJijMaaktNuKansOpDeGeko",
    "image2",
    "tWV",
    "text19",
    "jouwGekozenPrijs",
    "playstation5SlimDisk",
    "meervoordeelNlIs",
    "frame1000004784Props",
  ],
  data() {
    return {
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      chosenProduct: '',  // Zorg dat chosenProduct meteen wordt ingesteld
      gekozenProductId: null,
      gekozenMerkId: null,
    };
  },
  computed: {
    ...mapGetters(['getAntwoorden']), // Vuex getter om antwoorden op te halen
  },
  mounted() {
    // Haal antwoorden op uit Vuex
    const antwoordenLijst = this.getAntwoorden;

    // Haal antwoord1 en antwoord2 op uit de antwoordenlijst (voor product en merk)
    const gekozenProduct = antwoordenLijst.antwoord1; // Antwoord 1 is het gekozen product
    const gekozenMerk = antwoordenLijst.antwoord2; // Antwoord 2 is het gekozen merk

    // Haal de juiste ID's op
    this.gekozenProductId = this.getProductId(gekozenProduct);
    this.gekozenMerkId = this.getMerkId(gekozenMerk);

    // Stel chosenProduct direct in, zodra de pagina laadt
    this.chosenProduct = gekozenProduct || 'geen product gekozen';  // Gebruik de waarde van antwoord1


  },
  methods: {
    // Deze functie vergelijkt de antwoorden en verzendt de gegevens naar de API
    async submitForm() {
      const antwoordenLijst = this.getAntwoorden; // Haal antwoorden op via Vuex
      if (!antwoordenLijst || !antwoordenLijst.antwoord1 || !antwoordenLijst.antwoord2) {
        console.error('Onvoldoende antwoorden om te verwerken.');
        return; // Stop de verdere verwerking
      }

      // Haal de product- en merk-ID's op
      const gekozenProductId = this.getProductId(antwoordenLijst.antwoord1);
      const gekozenMerkId = this.getMerkId(antwoordenLijst.antwoord2);

      // Controleer of de ID's correct zijn toegewezen
      if (!gekozenProductId || !gekozenMerkId) {
        console.error('Kon geen geldige ID\'s vinden voor het product of merk.');
        return;
      }

      const url = 'https://leadgen.republish.nl/api/sponsors/2410/leads';
      const username = '199';
      const password = 'b41c7c41c8d595fbd66dea6a4f70836fbc5e3afe';
      const authHeader = 'Basic ' + btoa(`${username}:${password}`);

      const data = {
        language: 'nl_NL',
        publisher_id: 'morris de publisher :)',
        site_custom_url: 'https://ziggoprijswinnnen.nl',
        site_custom_name: 'ziggo prijs winnen',
        ip: '123.45.67.89',
        optin_timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        firstname: this.voornaam,
        lastname: this.achternaam,
        email: this.email,
        phone_number: this.telefoonnummer,
        answers: [5269, gekozenProductId, gekozenMerkId], // Gebruik de dynamisch verkregen ID's
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Lead succesvol verstuurd.');
        } else {
          const errorMessage = await response.text();
          console.error('Fout bij versturen van lead:', errorMessage);
        }
      } catch (error) {
        console.error('Netwerk- of serverfout:', error);
      }
    },

    // Functie om de product-ID op te halen
    getProductId(product) {
      const productMap = {
        'SAMSUNG 60" TV': 5284,
        'Playstation 5 Slim Disk': 5287,
        'Bol.com cadeaubon': 5290,
      };
      return productMap[product] || null;
    },

    // Functie om de merk-ID op te halen
    getMerkId(merk) {
      const merkMap = {
        'Odido': 5272,
        'KPN': 5275,
        'Ziggo': 5278,
        'Anders': 5281,
      };
      return merkMap[merk] || null;
    }
  }
};
</script>









<template>
  <center>
    <div class="overkoepelende-container">
  <div class="container-center-horizontal">
    <div class="pagina-5 screen">
      <div class="overlap-group1">
        <div class="rectangle-30-6"></div>
        <div class="background-6"></div>
        <img
        class="line-4"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-4.svg"
        alt="Line 4"
      />
        <p class="hoe-kunnen-wij-jou-bereiken">Hoe kunnen wij jou bereiken?</p>



        <div class="frame-427320569">

          <form class="form-pagina5" @submit.prevent="submitForm">
            <div class="name-group">
              <div class="form-group">
                <label for="voornaam"></label>
                <img class="form-icoon" src="./naam-icoon.svg" alt="Naam Icon">
                <input
                  type="text"
                  id="voornaam"
                  v-model="voornaam"
                  required
                  placeholder="Vul je voornaam in"
                />
              </div>
          
              <div class="form-group">
                <label for="achternaam"></label>
                <img class="form-icoon" src="./naam-icoon.svg" alt="Achternaam Icon">
                <input style="color: purple!important;"
                  type="text"
                  id="achternaam"
                  v-model="achternaam"
                  required
                  placeholder="Vul je achternaam in"
                />
              </div>
            </div>
          
            <div class="form-group full-width">
              <label for="email"></label>
              <img class="form-icoon-2" src="./email-icoon.svg" alt="Email Icon">
              <input
                type="email"
                id="email"
                v-model="email"
                required
                placeholder="Vul je e-mailadres in"
              />
            </div>
          
            <div class="form-group full-width">
              <label for="telefoonnummer"></label>
              <img class="form-icoon-2" src="./tel-nummer-icoon.svg" alt="Telefoonnummer Icon">
              <input
                type="tel"
                id="telefoonnummer"
                v-model="telefoonnummer"
                required
                placeholder="Vul je telefoonnummer in"
              />
            </div>
          </form>
          
          




          <!-- dit is de knop -->
          <div class="frame-427320570">
            <div class="frame-2-1">

              <button class="frame-2-1 invisible-button" @click="submitForm">
                <div class="bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px" style="font-weight: 700;">Bevestig mijn deelname</div>
                <img
                  class="right-arrow-4"
                  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow-4.svg"
                  alt="rightArrow"
                />
              </button>
              

            </div>
          </div>



          <!-- tekst onder knop -->
          <p class="met-het-bevestigen-v">{{ metHetBevestigenV }}</p>
        </div>
        <frame1 />



        <p class="gewonnen"><span class="gefeliciteerd">Gefeliciteerd!<br></span> Jij maakt nu kans op de <span class="gekozen-prijs">{{ chosenProduct }}</span></p>
        
        <!-- <img
          class="gefeliciteerd-jij-ma"
          :src="gefeliciteerdJijMaaktNuKansOpDeGeko"
          alt="Gefeliciteerd! Jij maakt nu kans op de {gekozen prijs}."
        /> -->
        
        
        <img class="image-2-6" :src="image2" alt="image 2" />
        
        
        
        <div class="group-2-6">
          <div class="overlap-group-2">
            <div class="twv-18">{{ tWV }}</div>
            <h1 class="text-19 valign-text-bottom">{{ text19 }}</h1>
          </div>
        </div>
        <img
          class="vector-1"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector-1.svg"
          alt="Vector"
        />
        <img class="jouw-gekozen-prijs" :src="jouwGekozenPrijs" alt="Jouw gekozen prijs:" />
        <div class="playstation-5-slim-disk">{{ playstation5SlimDisk }}</div>
        <frame1000004784
          :group="frame1000004784Props.group"
          :group116046944Props="frame1000004784Props.group116046944Props"
        />
      </div>
      <img
        class="line-2-6"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      <p class="meervoordeelnl-is-6 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
    </div>
  </div>



  <div class="container-mobiel container-mobiel-pagina-5">
    <div class="navbar-mobiel">
      <!-- Navbar content -->
      <img  class="logo-navbar-mobiel logo-navbar-mobiel-mv"  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"  alt="MV logo 1" />  
      <img  class="logo-navbar-mobiel" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png" alt="logo ziggo"/>
      <img class="logo-navbar-mobiel" src="./trustpilot-mobiel.png" alt="">
    </div>
  
    <div class="achtergrond-pagina-5">
      <div class="witte-container-pagina-5">
        <!-- Verplaats de elementen hierheen voor mobiele weergave -->
        <p class="gewonnen-mobiel"><span class="gefeliciteerd-mobiel">Gefeliciteerd!<br></span> <span class="blauw-mobiel">Jij maakt nu kans op de </span><span class="gefeliciteerd-mobiel">{{ chosenProduct }}</span></p>
        <hr class="lijn-2">
        <p class="hoe-kunnen-wij-jou-bereiken-mobiel">Hoe kunnen wij jou bereiken?</p>
        <form class="form-pagina5" @submit.prevent="submitForm">
          <div class="form-group-mobiel full-width">
            <label for="voornaam"></label>
            <img class="form-icoon-mobiel" src="./naam-icoon.svg" alt="Naam Icon">
            <input type="text" id="voornaam" v-model="voornaam" required placeholder="Vul je voornaam in" />
          </div>
          <div class="form-group-mobiel full-width">
            <label for="achternaam"></label>
            <img class="form-icoon-mobiel" src="./naam-icoon.svg" alt="Achternaam Icon">
            <input type="text" id="achternaam" v-model="achternaam" required placeholder="Vul je achternaam in" />
          </div>
          <div class="form-group-mobiel full-width">
            <label for="email"></label>
            <img class="form-icoon-2-mobiel" src="./email-icoon.svg" alt="Email Icon">
            <input type="email" id="email" v-model="email" required placeholder="Vul je e-mailadres in" />
          </div>
          <div class="form-group-mobiel full-width">
            <label for="telefoonnummer"></label>
            <img class="form-icoon-2-mobiel" src="./tel-nummer-icoon.svg" alt="Telefoonnummer Icon">
            <input type="tel" id="telefoonnummer" v-model="telefoonnummer" required placeholder="Vul je telefoonnummer in" />
          </div>
        </form>
        <button class="frame-2-1-mobiel invisible-button" @click="submitForm">
          <div class="bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px" style="font-weight: 700;">Bevestig deelname</div>
          <span style="color: white; font-size: 22px;">&#8594;</span>
        </button>
        <p class="met-het-bevestigen-v-mobiel">Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.</p>
        <!-- <img class="image-2-6" :src="image2" alt="image 2" />
        <div class="group-2-6">
          <div class="overlap-group-2">
            <div class="twv-18">{{ tWV }}</div>
            <h1 class="text-19 valign-text-bottom">{{ text19 }}</h1>
          </div>
        </div>
        <img class="jouw-gekozen-prijs" :src="jouwGekozenPrijs" alt="Jouw gekozen prijs:" />
        <div class="playstation-5-slim-disk">{{ playstation5SlimDisk }}</div> -->

        <img src="./afbeeldingen-samen.png" alt="">
        <hr class="lijn-3" style="margin-top: 5rem;">

        <div class="footer-pagina1">
          <p class="text-footer-pagina5">*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.
            Actievoorwaarden van toepassing.</p>
        </div>

      </div>
    </div>
  </div>


</div>
</center>

</template>

<style lang="sass">
@import '../../variables'



input::placeholder 
  opacity: 1
  color: #B5B5B5







.form-pagina5
  width: 100%

.form-group
  display: flex
  flex-direction: column

.name-group
  display: flex
  gap: 2%

  .form-group
    flex: 1
    width: 46%!important

.full-width
  width: 100%
  border-radius: 2.5rem




.form-group input
  width: 100%
  padding: 0.625rem 0.625rem 0.625rem 4rem
  border-radius: 2.5rem
  border: 1px solid #ccc
  height: 70px
  color: black
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 1.5625rem
  font-style: normal
  font-weight: 400
  line-height: normal
  background-color: #f1f1f1



// Specifieke stijlen voor de full-width velden
.form-group.full-width
  display: flex
  align-items: flex-start
  // gap: 0.625rem


.form-icoon
  width: 20px
  height: 20px
  position: relative
  top: 50%
  left: 8%


.form-icoon-2
  width: 20px
  height: 20px
  position: relative
  top: 47px
  left: 3%






.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-y: hidden

.gefeliciteerd
  color: #f48c02  
  font-size: 2.875rem
  font-style: normal
  font-weight: 700
  line-height: 150%
  font-family: $font-family-diodrum_cyrillic-regular

.gewonnen
  font-size: 44px
  z-index: 999
  position: relative
  top: 300px
  left: 220px
  text-align: start
  font-weight: 700
  color: #072249
  font-family: $font-family-diodrum_cyrillic-regular
  line-height: 150%
  font-size: 2.1875rem

.gekozen-prijs
  color: #F48C02
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 2.1875rem
  font-style: normal
  font-weight: 600
  line-height: 150%

.pagina-5
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  width: 1920px

.overlap-group1
  height: 1048px
  position: relative
  width: 1920px

.rectangle-30-6
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.background-6
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 822px
  left: 146px
  position: absolute
  top: 226px
  width: 968px

.hoe-kunnen-wij-jou-bereiken
  color: $downriver
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: $font-size-xxxl
  font-weight: 400
  left: 213px
  letter-spacing: 0
  line-height: 40.3px
  position: absolute
  top: 475px
  width: 800px
  text-align: left

.line-4
  height: 1px
  left: 214px
  object-fit: cover
  position: absolute
  top: 436px
  width: 797px

.frame-427320569
  align-items: flex-end
  display: inline-flex
  flex-direction: column
  gap: 19px
  left: 213px
  position: absolute
  top: 550px

.frame-427320568
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  position: relative

.frame-42732056
  background-color: $seashell
  border-radius: 40px
  flex: 0 0 auto
  overflow: hidden
  position: relative

.frame-107-2
  align-items: center
  display: inline-flex
  gap: 21px
  left: 28px
  position: relative
  top: 24px

.layer-2
  height: 21.33px
  margin-left: -0.67px
  position: relative
  width: 21.33px

.voornaam,
.achternaam,
.e-mailadres,
.telefoonnummer
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.frame-42732056-1
  background-color: $seashell
  border-radius: 40px
  flex: 0 0 auto
  overflow: hidden
  position: relative
  width: 800px

.layer-2-1
  height: 15px
  margin-left: -0.50px
  position: relative
  width: 21px

.frame-107-3
  align-items: center
  display: inline-flex
  gap: 17px
  left: 28px
  position: relative
  top: 24px

.group-13
  height: 22.05px
  position: relative
  width: 22px

.frame-427320570
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 19px
  justify-content: flex-end
  position: relative
  width: 100%

.frame-2-1
  align-items: center
  background-color: $tangerine
  border-radius: 40px
  display: inline-flex
  flex: 0 0 auto
  gap: 24.54px
  height: 76.24px
  overflow: hidden
  padding: 29.8px 40px
  position: relative

.bevestig-mijn-deelname
  letter-spacing: 0
  line-height: normal
  margin-bottom: -3.92px
  margin-top: -7.43px
  position: relative
  white-space: nowrap
  width: fit-content

.right-arrow-4
  height: 11.39px
  position: relative
  width: 21.03px

.met-het-bevestigen-v
  color: $downriver
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: $font-size-m
  font-weight: 400
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: right
  width: 800px

.gefeliciteerd-jij-ma
  height: 94px
  left: 217px
  position: absolute
  top: 295px
  width: 611px

.image-2-6
  height: 596px
  left: 1189px
  position: absolute
  top: 270px
  width: 568px

.group-2-6
  align-items: flex-start
  display: flex
  height: 213px
  left: 1323px
  min-width: 217px
  padding: 0 0.0px
  position: absolute
  top: 487px
  transform: rotate(4.48deg)

.overlap-group-2
  background-color: $puerto-rico
  border-radius: 106.35px
  height: 213px
  position: relative
  width: 213px

.twv-18
  color: $white
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 28px
  font-weight: 400
  left: 77px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 57px

.text-19
  color: $white
  font-family: $font-family-diodrum_cyrillic-semibold
  font-size: 57px
  font-weight: 400
  height: 68px
  left: 18px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 83px
  white-space: nowrap
  font-weight: 550

.vector-1
  height: 28px
  left: 1172px
  position: absolute
  top: 510px
  width: 117px

.jouw-gekozen-prijs
  height: 30px
  left: 1196px
  position: absolute
  top: 368px
  width: 280px

.playstation-5-slim-disk
  color: $white
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: $font-size-xxl
  font-weight: 400
  left: 1196px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 402px
  white-space: nowrap

.line-2-6
  height: 1px
  margin-left: 1.0px
  margin-top: 115px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-6
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px



@media (max-width: 500px)
  .achtergrond-pagina-5
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
    width: 100%
    height: 82rem
    padding-bottom: 2rem

  .witte-container-pagina-5
    width: 90%
    height: 54.9rem
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)
    position: relative
    top: 2rem
    display: flex
    flex-direction: column
    padding: 1rem
  
  .form-pagina5 
    width: 100%
    display: flex
    flex-direction: column
  
  .form-group 
    width: 100%
  
  .bevestig-mijn-deelname 
    text-align: center
    font-size: 1.2rem
  
  .gewonnen-mobiel
    text-align: center
    font-size: 1.5rem
    text-align: left

  .group-2-6, .playstation-5-slim-disk 
    text-align: center
  
  .image-2-6 
    width: 100%
    height: auto
    margin: 0 auto

  .gefeliciteerd-mobiel
    color: #F48C02
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%

  .blauw-mobiel
    color: #072249
    font-family: $font-family-diodrum_cyrillic-medium
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%


  .form-group-mobiel input
    width: 100%
    padding: 0.625rem 0.625rem 0.625rem 4rem
    border-radius: 2.5rem
    border: 1px solid #ccc
    height: 70px
    color: black
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1rem
    font-style: normal
    font-weight: 400
    line-height: normal
    background-color: #f1f1f1



  .form-icoon-mobiel
    width: 20px
    height: 20px
    position: relative
    top: 50%
    left: -37%
  
  .form-icoon-2-mobiel
    width: 20px
    height: 20px
    position: relative
    top: 50%
    left: -37%  


  .frame-2-1-mobiel
    display: flex
    height: 3.6875rem
    padding: 1.86225rem 2.25rem
    align-items: center
    gap: 0.84625rem
    border-radius: 2.5rem
    background: #F48C02
    margin-top: 2rem
    color: #FFF
    font-family: 'Diodrum Cyrillic-Semibold','Helvetica'
    font-size: 1.47881rem
    font-style: normal
    font-weight: 700
    line-height: normal

  .lijn-2
    width: 100%


  .hoe-kunnen-wij-jou-bereiken-mobiel
    font-family: $font-family-diodrum_cyrillic-regular
    color: #072249
    font-size: 1.3125rem
    font-style: normal
    font-weight: 400
    line-height: 126%
    text-align: left



  .met-het-bevestigen-v-mobiel
    color: #072249
    font-family: $font-family-diodrum_cyrillic-medium
    font-size: 1.2rem
    font-style: normal
    font-weight: 400
    line-height: 150%
    margin-top: 2rem
    text-align: left


  .text-footer-pagina5
    color: #C1C1C1
    text-align: center
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 0.75rem
    font-style: normal
    font-weight: 400
    line-height: 1.125rem
    margin-top: 1rem
    padding-bottom: 5rem

  .container-mobiel-pagina-5
    padding-bottom: 12rem!important

  .lijn-3
    width: 100%
</style>