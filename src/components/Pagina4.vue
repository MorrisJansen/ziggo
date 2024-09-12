<script>
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
import { getAntwoorden } from '../Store';

export default {
  name: "Pagina4",
  components: {
    Group1,
    Frame1000004784,
  },
  props: [
    "samsung1",
    "pagina9",
    "image6",
    "meervoordeelNlChecktNuOfJijKansMaak",
    "bolcomBon1",
    "image2",
    "meervoordeelNlIs",
    "group11Props",
    "group12Props",
    "group13Props",
    "frame1000004784Props",
  ],
  data() {
    return {
      chosenProduct: '',
    };
  },
  mounted() {
    const antwoordenLijst = getAntwoorden();
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/pagina-6");
    }, 3000);
  },
};
</script>




<template>
  <center>
    <div class="overkoepelende-container">


  <div class="container-center-horizontal">
    <div class="pagina-4 screen">
      <div class="overlap-group3-5">
        <div class="rectangle-30-5"></div>
        <img class="samsung-1-5" :src="samsung1" alt="Samsung 1" />
        <div class="background-5"></div>
        <div class="frame-1-6">
          <img class="pagina-9" :src="pagina9" alt="Pagina 9" /><img class="image-6-6" :src="image6" alt="image 6" />
        </div>
        <!-- <img
          class="meervoordeelnl-check"
          :src="meervoordeelNlChecktNuOfJijKansMaak"
          alt="Meervoordeel.nl checkt nu of jij kans maakt op de prijs..."
        /> -->
        <img class="bolcom-bon-1-5" :src="bolcomBon1" alt="bolcom-bon 1" /><img
          class="image-2-5"
          :src="image2"
          alt="image 2"
        />

        <div class="meervoordeel-pagina4" style="display: inline-flex">
          <span class="mvd-nl">Meervoordeel.nl&nbsp;</span><p class="mvd-nl-tekst"> checkt nu of </p><br>
            <p class="mvd-nl-tekst2">jij kans maakt op de prijs...</p>

        </div>

        
        <img class="draaien-animatie loading-sign-1" src="./draaien.svg" alt="">

        <group1 :text1="group11Props.text1" :className="group11Props.className" />
        <group1 :text1="group12Props.text1" :className="group12Props.className" />
        <group1 :text1="group13Props.text1" :className="group13Props.className" />
        <frame1000004784
          :group="frame1000004784Props.group"
          :group116046944Props="frame1000004784Props.group116046944Props"
        />
      </div>
      <img
        class="line-2-5"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      <p class="meervoordeelnl-is-5 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
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





  <div class="achtergrond-pagina-4">


    <div class="witte-achtergrond-pagina-4">

      <div class="checken">
      <span class="meervoordeel nl">
        Meervoordeel.nl
      </span>
        checkt nu of jij kans maakt op de prijs...
      </div>

      <img class="draaien-animatie" src="./draaien.svg" alt="">
    </div>

    <img src="./afbeeldingen-samen.png" alt="">
  </div>
  






  
</div>



</div>

</center>
</template>

<style lang="sass">
@import '../../variables'


.meervoordeel-pagina4
  position: relative
  top: 400px
  right: 100px
  z-index: 99
  display: inline-flex

.mvd-nl
  color: #49B7AC
  text-align: center
  font-family: "DM Sans"
  font-size: 2.1875rem
  font-style: normal
  font-weight: 700
  line-height: 150%

.mvd-nl-tekst
    color: #072249
    font-family: "DM Sans"
    font-size: 2.1875rem
    font-style: normal
    font-weight: 700
    line-height: 150%
    text-align: center

.mvd-nl-tekst2
  position: relative
  top: 50px
  right: 460px
  color: #072249
  font-family: "DM Sans"
  font-size: 2.1875rem
  font-style: normal
  font-weight: 700
  line-height: 150%


.draaien-animatie 
  width: 50px
  height: 50px
  animation: draai 2s linear infinite


@keyframes draai 
  0% 
      transform: rotate(0deg)
  
  100% 
      transform: rotate(360deg)
  


.overkoepelende-container
  min-width: 100vw
  max-width: 100vw
  overflow-x: hidden

.pagina-4
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  width: 1920px

.overlap-group3-5
  height: 1049px
  position: relative
  width: 1920px

.rectangle-30-5
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.samsung-1-5
  height: 493px
  left: 1024px
  position: absolute
  top: 231px
  width: 764px

.background-5
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 395px
  left: 146px
  position: absolute
  top: 329px
  width: 968px

.frame-1-6
  align-items: center
  background-color: $white
  box-shadow: 0px 5px 39px #00000014
  display: flex
  gap: 9997px
  height: 138px
  left: 0
  overflow: hidden
  position: absolute
  top: 0
  width: 1920px

.pagina-9
  align-self: flex-end
  height: 1274px
  margin-bottom: -3141.63px
  margin-left: -10248px
  width: 1920px

.image-6-6
  height: 60px
  margin-bottom: 0.06px
  object-fit: cover
  width: 99px

.meervoordeelnl-check
  height: 85px
  left: 381px
  position: absolute
  top: 427px
  width: 499px

.bolcom-bon-1-5
  height: 308px
  left: 1114px
  position: absolute
  top: 604px
  width: 441px

.image-2-5
  height: 596px
  left: 1188px
  position: absolute
  top: 453px
  width: 568px

.loading-sign-1
  height: 94px
  left: 583px
  position: absolute
  top: 557px
  width: 94px

.line-2-5
  height: 1px
  margin-left: 1.0px
  margin-top: 114px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-5
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px



@media (min-width: 501px)
  .mobiel-container
    display: none




@media (max-width: 501px)
  .container-center-horizontal
    display: none!important


  .achtergrond-pagina-4
    width: 23.4375rem
    height: 61.875rem
    flex-shrink: 0
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
  

  .witte-achtergrond-pagina-4
    width: 21.5625rem
    height: 22rem
    flex-shrink: 0
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)
    position: relative
    top: 2rem

  .meervoordeel.nl
    color: #49B7AC
    text-align: center
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%

  .checken
    color: #072249
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%
    padding: 2rem
  </style>
