<script>
import Frame1 from "./Frame1";
import Group1 from "./Group1";
import Group4 from "./Group4";
import Frame1000004784 from "./Frame1000004784";

export default {
  name: "Landingspagina",
  components: {
    Frame1,
    Group1,
    Group4,
    Frame1000004784,
  },
  props: [
    "samsung1",
    "maakKansOp1VanDe3Prijzen",
    "meervoordeelGeeftInSamenwerkingMetZ",
    "bolcomBon1",
    "image2",
    "doeNuMee",
    "tWV",
    "text12",
    "hoeWerktHet",
    "x1",
    "kiesJouwPrijs",
    "beantwoordDeVraag",
    "controleerOfJouwP",
    "meerOverMeervoordeel",
    "image7",
    "spanText1",
    "spanText2",
    "image8",
    "meervoordeelNlIs",
    "group11Props",
    "group12Props",
    "group41Props",
    "group42Props",
    "frame1000004784Props",
  ],
  methods: {
    async navigateToNextPage() {
      // const isValid = await this.validateAddress();
      // if (!isValid) return;

      this.$router.push('/pagina-1');
    },
  },
};
</script>






<template>
  <center>
<div class="overkoepelende-container">
  <div class="container-center-horizontal">
    <div class="landingspagina screen">
      <div class="overlap-group3">
        <div class="rectangle-30"></div>
        <img class="samsung-1" :src="samsung1" alt="Samsung 1" />
        <div class="background"></div>


        <frame1 />


        
        <!-- <h1 class="maak-kans-op-1-van-de-3-prijzen" v-html="maakKansOp1VanDe3Prijzen"></h1> -->
         <h1 class="maak-kans-op-1-van-de-3-prijzen">
          <span style="font-weight: 700">
            Maak kans op <br>
           1 van de 3 prijzen</span></h1>          

        <!-- <img
          class="meer-voordeel-geeft"
          :src="meervoordeelGeeftInSamenwerkingMetZ"
          alt="MeerVoordeel geeft in samenwerking met Ziggo prijzen weg."/> -->
          <img class="bolcom-bon-1" :src="bolcomBon1" alt="bolcom-bon 1" /><img class="image-2" :src="image2" alt="image 2"/>


        <!-- dit is de button -->
         <!-- <router-link to="/pagina-1"> -->

         <button @click="navigateToNextPage">
          <!-- <a href="/pagina-1"> -->
            <div class="frame-427320541">
              <div class="doe-nu-mee diodrumcyrillic-normal-white-23-7px" style="font-weight: 700">Doe nu mee</div>
              <img
                class="right-arrow"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg"
                alt="rightArrow"
              />
            </div>
            <!-- </a> -->
         </button>
        <!-- </router-link> -->






        <group1 :text1="group11Props.text1" />
        <group1 :text1="group12Props.text1" :className="group12Props.className" />
        <div class="group-3">
          <div class="overlap-group2">
            <div class="twv diodrumcyrillic-regular-normal-white-16-7px">{{ tWV }}</div>
            <div class="text-3 valign-text-bottom" style="font-weight: 700">{{ text12 }}</div>
          </div>
        </div>
        <!-- <img class="hoe-werkt-het" :src="hoeWerktHet" alt="Hoe werkt het?" /> -->
         <div class="jaja" style="">Hoe werkt het?</div>
        <div class="frame-427320574">
          <div class="frame-42732057">
            <div class="group-4">
              <div class="overlap-group"><img class="x1" :src="x1" alt="1." /></div>
            </div>
            <div class="kies-jouw-prijs diodrumcyrillic-regular-normal-downriver-25px">{{ kiesJouwPrijs }}</div>
          </div>
          <div class="frame-42732057">
            <group4 :src="group41Props.src" />
            <div class="beantwoord-de-vraag diodrumcyrillic-regular-normal-downriver-25px">{{ beantwoordDeVraag }}</div>
          </div>
          <div class="frame-42732057">
            <group4 :src="group42Props.src" :className="group42Props.className" />
            <p class="controleer-of-jouw-p diodrumcyrillic-regular-normal-downriver-25px">{{ controleerOfJouwP }}</p>
          </div>
        </div>
        <img
          class="vector"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector.svg"
          alt="Vector"
        />
        <frame1000004784
          :group="frame1000004784Props.group"
          :group116046944Props="frame1000004784Props.group116046944Props"
        />
      </div>

      <hr class="scheidingslijn">

      <div class="flex-row">
        <img class="meer-over-meer-voordeel" :src="meerOverMeervoordeel" alt="Meer over MeerVoordeel" /><img
          class="mv-logo-1"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-3.svg"
          alt="MV logo 1"
        />

        <img class="image-7" :src="image7" style="z-index: 99;" alt="image 7" />
      </div>
      <img
        class="line-6"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-6.svg"
        alt="Line 6"
      />
      <div class="flex-row-1">
        <p class="meer-voordeel-biedt-d diodrumcyrillic-regular-normal-downriver-25px">
          <span class="diodrumcyrillic-regular-normal-downriver-25px">MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten.",</span> <br><br>
          <span class="diodrumcyrillic-regular-normal-downriver-25px dik">Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.</span>
        </p>
        <img class="image-8" :src="image8" alt="image 8" />
      </div>
      <img
        class="line-2"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      <!-- <div class="container-meervoordeelnl-is">
      </div> -->
      <p class="meervoordeelnl-is diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>

    </div>
  </div>




  <div class="container-mobiel">

    <div class="navbar-mobiel">


      <img
      class="logo-navbar-mobiel logo-navbar-mobiel-mv"
      src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"
      alt="MV logo 1"
    />
  
  
      <img
      class="logo-navbar-mobiel"
      src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png"
      alt="logo ziggo"
    />
  


  <img class="logo-navbar-mobiel" src="./trustpilot-mobiel.png" alt="">
    </div>



    <div class="achtergrond">


      <div class="maak-kans">
        <span class="span-maak-kans">
          Maak kans op 
        </span>
        <br>1 van de 3 prijzen!
      </div>

      <!-- <p class="meer-prijzen">MeerVoordeel geeft in samenwerking met Ziggo prijzen weg.</p> -->


      <div class="witte-container">
        <p class="hoe-werkt-het">hoe werkt het?</p>

        <!-- <img src="./Elipse 2.svg" alt=""> -->
        <div class="container-lijst">

          <div class="li-1">
            <svg class="blauwe-bal" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="Ellipse 2" cx="17.5" cy="17.5" r="17.5" fill="#49B7AC"/>
            </svg>
            <p class="cijfer-li">1.</p>
            <p class="text-hoe-werkt-het">kies jouw prijs</p>
          </div>

          <div class="li-1">
            <svg class="blauwe-bal" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="Ellipse 2" cx="17.5" cy="17.5" r="17.5" fill="#49B7AC"/>
            </svg>
            <p class="cijfer-li">2.</p>
            <p class="text-hoe-werkt-het"> Beantwoord de vraag</p>


          </div>

          <div class="li-1">
            <svg class="blauwe-bal" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="Ellipse 2" cx="17.5" cy="17.5" r="17.5" fill="#49B7AC"/>
            </svg>
            <p class="cijfer-li">3.</p>
            <p class="text-hoe-werkt-het-3">Controleer   eer of jouw postcode in aanmerking komt</p>


          </div>

        </div>

        <div class="doe-nu-mee">
          <router-link class="router-link" to="/pagina-1">
            <button class="doe-nu-mee-knop" href="/pagina-1">
              <div class="text-in-knop">
                Doe nu mee <img src="./rechterpijl.svg" alt="pijl-naar-rechts">
              </div>
            </button>
          </router-link>

        </div>
      </div>


      
      <img src="./afbeeldingen-samen.png" alt="">
      <!-- <img src="./afbeelding-samen-fotos.png" alt=""> -->

     
    </div>
<!-- einde achtergrond -->

<div class="container-voordeel">
  <p class="meer-over-meer-titel">Meer over Meervoordeel</p>
  <hr class="lijn">
  <p class="meer-over-meer-text">MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten. <br><br>
    Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.</p>
</div>

<div class="afbeelding-footer">
  <img src="./afbeelding-footer-mobiel.png" alt="afbeelding-footer">
</div>


<div class="logos-footer">
  <img style="margin-right: 5%;"
  class="logo-navbar-mobiel logo-navbar-mobiel-mv"
  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"
  alt="MV logo 1"
/>


  <img
  class="logo-navbar-mobiel"
  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png"
  alt="logo ziggo"
/>
</div>

<hr class="lijn">


<p class="kleine-letters">*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.
  Actievoorwaarden van toepassing.</p>

  </div>

</div>
  </center>
</template>



<style lang="sass">
@import '../../variables'

.scheidingslijn
  position: absolute
  top: 900px
  height: 10px
  z-index: 999


.span-maak-kans
  font-weight: 700!important

body 
  font-family: 'DM Sans', sans-serif!important


*
body 
  font-family: 'DM Sans', sans-serif!important

.jaja
  color: #072249
  font-family: "DM Sans"
  font-size: 2.1875rem
  font-style: normal
  font-weight: 700
  line-height: 150%
  position: relative
  top: 560px
  z-index: 99
  right: 610px


.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-x: hidden

.landingspagina
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 2095px
  width: 1920px

.overlap-group3
  height: 1124px
  position: relative
  width: 1920px

.rectangle-30
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.samsung-1
  height: 493px
  left: 1019px
  position: absolute
  top: 309px
  width: 764px

.background
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 585px
  left: 146px
  position: absolute
  top: 495px
  width: 788px

.maak-kans-op-1-van-de-3-prijzen
  color: $white
  // font-family: $font-family-diodrum_cyrillic-semibold
  font-size: $font-size-xxxxxl
  font-weight: 400
  left: 146px
  letter-spacing: 0
  line-height: 94.8px
  position: absolute
  top: 194px
  width: 743px
  text-align: start

.meer-voordeel-geeft
  height: 28px
  left: 149px
  position: absolute
  top: 406px
  width: 819px

.bolcom-bon-1
  height: 308px
  left: 942px
  position: absolute
  top: 724px
  width: 441px

.image-2
  height: 596px
  left: 1188px
  position: absolute
  top: 528px
  width: 568px

.frame-427320541
  align-items: center
  background-color: $tangerine
  border-radius: 40px
  display: inline-flex
  gap: 24.54px
  height: 76px
  left: 589px
  overflow: hidden
  padding: 29.8px 40px
  position: absolute
  top: 912px

.doe-nu-mee
  letter-spacing: 0
  line-height: normal
  margin-bottom: -3.92px
  margin-top: -7.43px
  position: relative
  white-space: nowrap
  width: fit-content

.frame-427320541:hover
  cursor: pointer

.right-arrow
  height: 11.39px
  position: relative
  width: 21.03px


.group-1
  box-shadow: none

.group-3
  align-items: flex-start
  display: flex
  height: 127px
  left: 1467px
  min-width: 131px
  position: absolute
  top: 279px
  transform: rotate(4.44deg)

.overlap-group2
  background-color: $puerto-rico
  border-radius: 63.27px
  height: 127px
  margin-top: 0
  position: relative
  width: 127px

.twv
  left: 46px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 34px
  white-space: nowrap

.text-3
  color: $white
  // font-family: $font-family-diodrum_cyrillic-medium
  font-size: $font-size-xxxxl
  font-weight: 500
  height: 41px
  left: 11px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 49px

.hoe-werkt-het
  height: 26px
  left: 218px
  position: absolute
  top: 597px
  width: 237px

.frame-427320574
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 15px
  left: 215px
  position: absolute
  top: 660px

.frame-42732057
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  gap: 24px
  position: relative

.group-4
  height: 55.81px
  position: relative
  width: 57.81px

.overlap-group
  align-items: flex-end
  background-color: $puerto-rico
  border-radius: 27.9px
  display: flex
  height: 56px
  min-width: 56px
  padding: 18.2px 20.1px

.x1
  height: 18px
  width: 15px

.kies-jouw-prijs,
.beantwoord-de-vraag,
.controleer-of-jouw-p
  letter-spacing: 0
  line-height: normal
  position: relative
  white-space: nowrap
  width: fit-content

.vector
  height: 50px
  left: 863px
  position: absolute
  top: 283px
  width: 138px

.flex-row
  align-items: center
  display: flex
  margin-left: 65.52px
  margin-top: 218px
  min-width: 1550px
  position: relative
  z-index: 99999
  padding-bottom: 5rem
  padding-top: 6rem

.meer-over-meer-voordeel
  align-self: flex-end
  height: 26px
  margin-bottom: 8.49px
  width: 392px

.mv-logo-1
  height: 50px
  margin-left: 893px
  margin-top: 1.18px
  width: 132px

.image-7
  height: 60px
  margin-left: 34px
  object-fit: cover
  width: 99px

.line-6
  height: 1px
  margin-right: 6.0px
  margin-top: 28px
  object-fit: cover
  width: 1622px

.flex-row-1
  align-items: center
  display: flex
  gap: 155px
  margin-left: 63.0px
  // margin-top: 1050px
  min-width: 1553px

.meer-voordeel-biedt-d
  letter-spacing: 0
  line-height: 43px
  margin-top: 18.0px
  min-height: 345px
  width: 727px
  text-align: left

.dik
  font-weight: 900!important

.image-8
  height: 403px
  object-fit: cover
  width: 671px

.line-2
  height: 1px
  margin-left: 1.0px
  margin-top: 115px
  object-fit: cover
  width: 1751px
  position: relative
  bottom: 85px

.container-meervoordeelnl-is
  height: 400px!important
  background-color:  blue!important

.meervoordeelnl-is
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  padding-top: 1rem
  margin-top: -100px
  min-height: 48px
  text-align: center
  width: 874px
  padding-top: 3rem
  padding-bottom:  13rem




@media (max-width: 1800px)
  .container-center-horizontal
    min-width: 100vw!important
    max-width: 100vw!important
    zoom: 94%


@media (max-width: 1700px)
  .container-center-horizontal
    zoom: 88%


@media (max-width: 1600px)
  .container-center-horizontal
    zoom: 88%

@media (max-width: 1500px)
  .container-center-horizontal
    zoom: 82%

@media (max-width: 1440px)
  .container-center-horizontal
    zoom: 80%

@media (max-width: 1340px)
  .container-center-horizontal
    zoom: 75%

@media (max-width: 1260px)
  .container-center-horizontal
    zoom: 70%

@media (max-width: 1190px)
  .container-center-horizontal
    zoom: 65%

@media (max-width: 1100px)
  .container-center-horizontal
    zoom: 60%

@media (max-width: 1030px)
  .container-center-horizontal
    zoom: 55%

@media (max-width: 950px)
  .container-center-horizontal
    zoom: 50%

@media (max-width: 870px)
  .container-center-horizontal
    zoom: 45%

@media (max-width: 778px)
  .container-center-horizontal
    zoom: 40%

@media (max-width: 680px)
  .container-center-horizontal
    zoom: 36%

@media (max-width: 610px)
  .container-center-horizontal
    zoom: 32%

@media (max-width: 550px)
  .container-center-horizontal
    zoom: 29%



//hieronder komen alle mobile styles

@media (min-width: 500px) 
  .container-mobiel
    display: none

@media (max-width: 501px)

  .overkoepelende-container
    height: auto!important
    max-height: none!important
    min-height: none

  .container-center-horizontal *
    display: none


  .container-mobiel
    height: auto


  .navbar-mobiel
    width: 100%!important
    height: 6.6rem
    display: flex
    justify-content: space-around


  .logo-navbar-mobiel
    max-width: 25%
    min-height: 100%
    display: inline-flex
    object-fit: contain


  .achtergrond
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
    height: 1000px!important
    width: 100%


  .maak-kans
    color: #FFF
    text-align: center
    // font-family: 'dm-sans'
    font-size: 2.33294rem
    font-style: normal
    font-weight: 600
    line-height: 2.49894rem
    padding-top: 1rem
    


  .meer-prijzen
    color: #FFF
    text-align: center
    // font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.125rem
    font-style: normal
    font-weight: 400
    line-height: 150%
    margin-top: 1rem


  .witte-container
    width: 90%
    height: 20rem
    margin-top: 1rem
    background-color: #fff
    border-radius: 0.75rem
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)


  .hoe-werkt-het
    color: #072249
    // font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 150%
    position: relative
    top: 1rem
    left: -4rem


  .container-lijst
    margin-top: 2rem

  .blauwe-bal 
    width: 35px!important
    height: 35px!important
    max-width: 35px
    max-height: 35px
    
    


  .li-1
    display: flex
    width: 100%
    color: #072249
    // font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.125rem
    font-style: normal
    font-weight: 400
    line-height: normal
    text-align: start
    flex: 1
    margin-left: 1rem
    margin-top: 1rem

  .cijfer-li
    position: relative
    right: 24px
    top: 7px
    color: white


  .text-hoe-werkt-het-3
    width: 80%

  .text-hoe-werkt-het
    margin-top: 2%

  .text-hoe-werkt-het, .text-hoe-werkt-het-3
    //font-family: $font-family-diodrum_cyrillic-regular
    color: #072249
    font-size: 1.125rem
    font-style: normal
    font-weight: 400
    line-height: normal



  .doe-nu-mee-knop
    display: flex
    width: 17.4375rem
    padding: 0.9375rem 2.5rem
    justify-content: center
    align-items: center
    gap: 1.53363rem
    border-radius: 2.5rem
    background: #F48C02
    border: none
    margin-top: 2rem


  .text-in-knop
    color: #FFF
    // font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.47881rem
    font-style: normal
    font-weight: 600
    line-height: normal


  .router-link
    text-decoration: none


  .container-voordeel
    background-color: #fff
    height: 500px!important


  .meer-over-meer-titel
    color: #072249
    // font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 150%
    margin-top: 30px


  .lijn
    width: 80%
    opacity: 0.3


  .meer-over-meer-text
    color: #072249
    // font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.125rem
    font-style: normal
    font-weight: 400
    line-height: 2.0625rem
    width: 80%
    text-align: left

  .logos-footer
    height: 100px
    width: 80%

  .kleine-letters
    color: #C1C1C1
    text-align: center
    // font-family: $font-family-diodrum_cyrillic-regular
    font-size: 0.75rem
    font-style: normal
    font-weight: 400
    line-height: 1.125rem
    margin: 2rem 0




</style>
