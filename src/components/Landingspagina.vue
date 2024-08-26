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
        <h1 class="maak-kans-op-1-van-de-3-prijzen" v-html="maakKansOp1VanDe3Prijzen"></h1>
        <img
          class="meer-voordeel-geeft"
          :src="meervoordeelGeeftInSamenwerkingMetZ"
          alt="MeerVoordeel geeft in samenwerking met Ziggo prijzen weg."
        /><img class="bolcom-bon-1" :src="bolcomBon1" alt="bolcom-bon 1" /><img
          class="image-2"
          :src="image2"
          alt="image 2"
        />


        <!-- dit is de button -->
         <a href="/pagina-1">
        <div class="frame-427320541">
          <div class="doe-nu-mee diodrumcyrillic-normal-white-23-7px">Doe nu mee</div>
          <img
            class="right-arrow"
            src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg"
            alt="rightArrow"
          />
        </div>
        </a>




        <group1 :text1="group11Props.text1" />
        <group1 :text1="group12Props.text1" :className="group12Props.className" />
        <div class="group-3">
          <div class="overlap-group2">
            <div class="twv diodrumcyrillic-regular-normal-white-16-7px">{{ tWV }}</div>
            <div class="text-3 valign-text-bottom">{{ text12 }}</div>
          </div>
        </div>
        <img class="hoe-werkt-het" :src="hoeWerktHet" alt="Hoe werkt het?" />
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
      <div class="flex-row">
        <img class="meer-over-meer-voordeel" :src="meerOverMeervoordeel" alt="Meer over MeerVoordeel" /><img
          class="mv-logo-1"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-3.svg"
          alt="MV logo 1"
        />
        <img class="image-7" :src="image7" alt="image 7" />
      </div>
      <img
        class="line-6"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-6.svg"
        alt="Line 6"
      />
      <div class="flex-row-1">
        <p class="meer-voordeel-biedt-d diodrumcyrillic-regular-normal-downriver-25px">
          <span class="diodrumcyrillic-regular-normal-downriver-25px">MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten.",</span>
          <span class="diodrumcyrillic-regular-normal-downriver-25px">Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.</span>
        </p>
        <img class="image-8" :src="image8" alt="image 8" />
      </div>
      <img
        class="line-2"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      <p class="meervoordeelnl-is diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
    </div>
  </div>
</div>
  </center>
</template>



<style lang="sass">
@import '../../variables'


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
  font-family: $font-family-diodrum_cyrillic-semibold
  font-size: $font-size-xxxxxl
  font-weight: 400
  left: 146px
  letter-spacing: 0
  line-height: 94.8px
  position: absolute
  top: 194px
  width: 743px

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
  font-family: $font-family-diodrum_cyrillic-medium
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
  margin-top: 39px
  min-width: 1553px

.meer-voordeel-biedt-d
  letter-spacing: 0
  line-height: 43px
  margin-top: 18.0px
  min-height: 345px
  width: 727px

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

.meervoordeelnl-is
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px
  padding-bottom:  24rem
  position: relative
  bottom: -20px



@media (max-width: 1800px)
  .container-center-horizontal
    min-width: 100vw!important
    max-width: 100vw!important


@media (max-width: 1700px)
  .container-center-horizontal
    zoom: 95%


@media (max-width: 1600px)
  .container-center-horizontal
    zoom: 90%

@media (max-width: 1500px)
  .container-center-horizontal
    zoom: 85%

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
@media (max-width: 500px)

  
    

</style>
