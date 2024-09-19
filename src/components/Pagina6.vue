<script>
import Frame1 from "./Frame1";
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
import { getAntwoorden } from '../Store';

export default {
  name: "Pagina6",
  components: {
    Frame1,
    Group1,
    Frame1000004784,
  },
  props: [
    "samsung1",
    "jouwPostcodeIsGoedgekeurd",
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
    // Toewijzen van het laatste antwoord aan chosenProduct
    this.chosenProduct = antwoordenLijst[antwoordenLijst.length - 2] || 'geen basta gekozen';
    console.log('Gekozen product:', this.chosenProduct);
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push("/pagina-5");
    // }, 1500);
  },
};
</script>









<template>

  <center>
    <div class="overkoepelende-container">
  <div class="container-center-horizontal">
    <div class="pagina-6 screen">
      <div class="overlap-group3-2">
        <div class="rectangle-30-2"></div>
        <img class="samsung-1-2" :src="samsung1" alt="Samsung 1" />
        <div class="background-2"></div>
        <frame1 />
        <!-- <img
          class="jouw-postcode-is-goedgekeurd"
          :src="jouwPostcodeIsGoedgekeurd"
          alt="Jouw postcode is goedgekeurd!"
        /> -->
        <p class="jouw-postcode-pagina6">Jouw postcode is goedgekeurd!</p>
        
        <img class="bolcom-bon-1-2" :src="bolcomBon1" alt="bolcom-bon 1" /><img
          class="image-2-2"
          :src="image2"
          alt="image 2"
        />
        <!-- <group1 :text1="group11Props.text1" :className="group11Props.className" />
        <group1 :text1="group12Props.text1" :className="group12Props.className" />
        <group1 :text1="group13Props.text1" :className="group13Props.className" /> -->


        <div :class="['group-1', group11Props.className]">
          <div class="overlap-group-6">
            <div class="twv-1 diodrumcyrillic-regular-normal-white-16-7px">t.w.v.</div>
            <div class="text valign-text-bottom diodrumcyrillic-normal-white-33-9px">€400,-</div>
          </div>
        </div>

        <div :class="['group-1', group12Props.className]">
          <div class="overlap-group-6">
            <div class="twv-1 diodrumcyrillic-regular-normal-white-16-7px">t.w.v.</div>
            <div class="text valign-text-bottom diodrumcyrillic-normal-white-33-9px">€599,-</div>
          </div>
        </div>

        <div :class="['group-1', group13Props.className]">
          <div class="overlap-group-6">
            <div class="twv-1 diodrumcyrillic-regular-normal-white-16-7px">t.w.v.</div>
            <div class="text valign-text-bottom diodrumcyrillic-normal-white-33-9px">€699,-</div>
          </div>
        </div>


        <!-- <img
          class="defaultoutlinetick-circle"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/default-outline-tick-circle.svg"
          alt="default/outline/tick-circle"
        /> -->

        <svg class="defaultoutlinetick-circle" xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none">
          <g id="vuesax/outline/tick-circle">
          <g id="tick-circle">
          <path id="Vector" d="M59.5001 112.802C30.0972 112.802 6.198 88.9029 6.198 59.5C6.198 30.0971 30.0972 6.19792 59.5001 6.19792C88.903 6.19792 112.802 30.0971 112.802 59.5C112.802 88.9029 88.903 112.802 59.5001 112.802ZM59.5001 13.6354C34.2126 13.6354 13.6355 34.2125 13.6355 59.5C13.6355 84.7875 34.2126 105.365 59.5001 105.365C84.7876 105.365 105.365 84.7875 105.365 59.5C105.365 34.2125 84.7876 13.6354 59.5001 13.6354Z" fill="#28d648"/>
          <path id="Vector_2" d="M52.4613 77.2507C51.4697 77.2507 50.5276 76.854 49.8334 76.1599L35.8013 62.1278C34.3634 60.6899 34.3634 58.3099 35.8013 56.872C37.2393 55.434 39.6193 55.434 41.0572 56.872L52.4613 68.2761L77.9472 42.7903C79.3851 41.3524 81.7651 41.3524 83.203 42.7903C84.6409 44.2282 84.6409 46.6082 83.203 48.0461L55.0893 76.1599C54.3951 76.854 53.453 77.2507 52.4613 77.2507Z" fill="#28d648"/>
          </g>
          </g>
          </svg>



        <frame1000004784
          :group="frame1000004784Props.group"
          :className="frame1000004784Props.className"
          :group116046944Props="frame1000004784Props.group116046944Props"
        />
      </div>
      <img
        class="line-2-2"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      <p class="meervoordeelnl-is-2 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
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


  <div class="achtergrond-pagina-6">

    <div class="witte-container-pagina-6">
      <div class="postcode-goedgekeurd">
        Jouw postcode is goedgekeurd!
      </div>
      <div class="icoon-pagina-6">
        <!-- <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="vuesax/outline/tick-circle">
          <g id="tick-circle">
          <path id="Vector" d="M59.5001 112.802C30.0972 112.802 6.198 88.9029 6.198 59.5C6.198 30.0971 30.0972 6.19792 59.5001 6.19792C88.903 6.19792 112.802 30.0971 112.802 59.5C112.802 88.9029 88.903 112.802 59.5001 112.802ZM59.5001 13.6354C34.2126 13.6354 13.6355 34.2125 13.6355 59.5C13.6355 84.7875 34.2126 105.365 59.5001 105.365C84.7876 105.365 105.365 84.7875 105.365 59.5C105.365 34.2125 84.7876 13.6354 59.5001 13.6354Z" fill="#F48C02"/>
          <path id="Vector_2" d="M52.4613 77.2507C51.4697 77.2507 50.5276 76.854 49.8334 76.1599L35.8013 62.1278C34.3634 60.6899 34.3634 58.3099 35.8013 56.872C37.2393 55.434 39.6193 55.434 41.0572 56.872L52.4613 68.2761L77.9472 42.7903C79.3851 41.3524 81.7651 41.3524 83.203 42.7903C84.6409 44.2282 84.6409 46.6082 83.203 48.0461L55.0893 76.1599C54.3951 76.854 53.453 77.2507 52.4613 77.2507Z" fill="#F48C02"/>
          </g>
          </g>
          </svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="119" height="119" viewBox="0 0 119 119" fill="none">
            <g id="vuesax/outline/tick-circle">
            <g id="tick-circle">
            <path id="Vector" d="M59.5001 112.802C30.0972 112.802 6.198 88.9029 6.198 59.5C6.198 30.0971 30.0972 6.19792 59.5001 6.19792C88.903 6.19792 112.802 30.0971 112.802 59.5C112.802 88.9029 88.903 112.802 59.5001 112.802ZM59.5001 13.6354C34.2126 13.6354 13.6355 34.2125 13.6355 59.5C13.6355 84.7875 34.2126 105.365 59.5001 105.365C84.7876 105.365 105.365 84.7875 105.365 59.5C105.365 34.2125 84.7876 13.6354 59.5001 13.6354Z" fill="#28d648"/>
            <path id="Vector_2" d="M52.4613 77.2507C51.4697 77.2507 50.5276 76.854 49.8334 76.1599L35.8013 62.1278C34.3634 60.6899 34.3634 58.3099 35.8013 56.872C37.2393 55.434 39.6193 55.434 41.0572 56.872L52.4613 68.2761L77.9472 42.7903C79.3851 41.3524 81.7651 41.3524 83.203 42.7903C84.6409 44.2282 84.6409 46.6082 83.203 48.0461L55.0893 76.1599C54.3951 76.854 53.453 77.2507 52.4613 77.2507Z" fill="#28d648"/>
            </g>
            </g>
            </svg>
          

      </div>
    </div>

    <div class="container-afbeelding-prijzen-mobiel-6">
      <img src="/img/afbeeldingen-samen-mobiel.b5031825.png" alt="afbeelding prijzen samen">


        <svg class="blauwe-bal-mobiel-1" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
          <circle cx="63.973" cy="63.973" r="63.2691" transform="rotate(4.4359 63.973 63.973)" fill="#49B7AC"/>
          <text x="50%" y="36%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="1.04275rem" font-style="normal" font-weight="400" line-height="normal" transform="rotate(4.436 64 64)">t.w.v</text>
          <text x="50%" y="55%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="1.88506rem" font-style="normal" font-weight="700" line-height="normal" transform="rotate(4.436 64 64)">€699,-</text>
        </svg>
      
      
        <svg class="blauwe-bal-mobiel-2" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none">
          <circle cx="52.7158" cy="52.7158" r="52.0939" transform="rotate(-6.575 52.7158 52.7158)" fill="#49B7AC"/>
          <text x="50%" y="36%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="0.85856rem" font-style="normal" font-weight="400" line-height="normal" transform="rotate(-6.575 52.7158 52.7158)">t.w.v</text>
          <text x="50%" y="57%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="1.5rem" font-style="normal" font-weight="700" line-height="normal" transform="rotate(-6.575 52.7158 52.7158)">          €400,-
          </text>
        </svg>


        
        

        <svg class="blauwe-bal-mobiel-3" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
          <circle cx="64.0511" cy="64.0511" r="63.2691" transform="rotate(-12.012 64.0511 64.0511)" fill="#49B7AC"/>
          <text x="50%" y="36%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="1.04275rem" font-style="normal" font-weight="400" line-height="normal" transform="rotate(-12.012 64.0511 64.0511)">t.w.v</text>
          <text x="50%" y="55%" text-anchor="middle" dy="0.3em" fill="#FFF" font-family="DM Sans" font-size="1.88506rem" font-style="normal" font-weight="700" line-height="normal" transform="rotate(-12.012 64.0511 64.0511)">          €599,-
          </text>
        </svg>
    </div>
  </div>


  <hr class="lijn" style="margin-top: 3rem;">
  <div class="footer-pagina1">
    <p class="text-footer-pagina1">*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.</p>
  </div>






  </div>




</div>




</center>

</template>



<style lang="sass">
@import '../../variables'


.jouw-postcode-pagina6
  color: #072249
  text-align: center
  font-family: "DM Sans"
  font-size: 2.1875rem
  font-style: normal
  font-weight: 700
  line-height: 150%
  z-index: 99
  position: relative
  top: 420px
  right: 320px



.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-y: hidden


.pagina-6
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  overflow: hidden
  width: 1920px

.overlap-group3-2
  height: 1049px
  margin-right: 5.0px
  position: relative
  width: 1925px

.rectangle-30-2
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 5px
  position: absolute
  top: 138px
  width: 1920px

.samsung-1-2
  height: 493px
  left: 1029px
  position: absolute
  top: 231px
  width: 764px

.background-2
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 395px
  left: 151px
  position: absolute
  top: 329px
  width: 968px

.jouw-postcode-is-goedgekeurd
  height: 32px
  left: 389px
  position: absolute
  top: 427px
  width: 490px

.bolcom-bon-1-2
  height: 308px
  left: 1119px
  position: absolute
  top: 604px
  width: 441px

.image-2-2
  height: 596px
  left: 1193px
  position: absolute
  top: 453px
  width: 568px

.defaultoutlinetick-circle
  height: 119px
  left: 575px
  position: absolute
  top: 510px
  width: 119px

.line-2-2
  height: 1px
  margin-left: 1.0px
  margin-top: 114px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-2
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px





@media (min-width: 1920px)
  .container-center-horizontal
    min-width: 100vw !important
    max-width: 100vw !important
    zoom: 110%

  .pagina-6
    zoom: 100% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2080px)
  .pagina-6
    zoom: 105% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2200px)
  .pagina-6
    zoom: 110% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2300px)
  .pagina-6
    zoom: 115% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2400px)
  .pagina-6
    zoom: 120% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2500px)
  .pagina-6
    zoom: 125% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2600px)
  .pagina-6
    zoom: 130% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2700px)
  .pagina-6
    zoom: 135% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2800px)
  .pagina-6
    zoom: 140% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2900px)
  .pagina-6
    zoom: 145% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3000px)
  .pagina-6
    zoom: 150% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3100px)
  .pagina-6
    zoom: 155% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3200px)
  .pagina-6
    zoom: 160% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3300px)
  .pagina-6
    zoom: 165% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3400px)
  .pagina-6
    zoom: 170% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3500px)
  .pagina-6
    zoom: 175% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3600px)
  .pagina-6
    zoom: 180% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3700px)
  .pagina-6
    zoom: 185% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3800px)
  .pagina-6
    zoom: 190% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3900px)
  .pagina-6
    zoom: 195% !important
    position: relative !important
    right: 5% !important

@media (min-width: 4000px)
  .pagina-6
    zoom: 200% !important
    position: relative !important
    right: 5% !important














@media (max-width: 501px)

  .container-afbeelding-prijzen-mobiel-6
    position: relative
    top: 40px
    margin-top: 1rem!important
    zoom: 83%!important
    max-width: 80%!important
    margin-right: 18vw!important
    


  .achtergrond-pagina-6
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
    width: 100%
    height: 55rem

  .witte-container-pagina-6
    width: 90%
    height: 22rem
    flex-shrink: 0
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)
    position: relative
    top: 2rem

  .postcode-goedgekeurd
    color: #072249
    text-align: center
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%
    width: 16.1875rem
    padding-top: 2rem


  .icoon-pagina-6
    margin-top: 3rem


  .footer-container
    background-color: $white
    width: 100%
    height: 800px
    padding-top: 3rem

  .container-mobiel
    padding-bottom: 3rem
</style>
