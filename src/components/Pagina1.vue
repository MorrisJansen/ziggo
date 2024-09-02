

<script>
import Frame1 from "./Frame1";
import RadioButtonSelected from "./RadioButtonSelected";
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
import { addAntwoord } from '../antwoorden';


export default {
  name: "Pagina1",
  components: {
    Frame1,
    RadioButtonSelected,
    Group1,
    Frame1000004784,
  },
  data() {
    return {
      chosenProduct: '',
      products: [
        { id: 1, name: "SAMSUNG 60\" TV t.w.v. €699,-", value: "SAMSUNG TV 60" },
        { id: 2, name: "Playstation 5 Slim Disk t.w.v. €549,-", value: "Playstation 5 Slim Disk" },
        { id: 3, name: "Bol.com cadeaubon t.w.v. €400,-", value: "Bol.com cadeaubon" },
      ],
    };
  },
  props: [
    "samsung1",
    "stap1Van3",
    "vertelOnsWelkePrijsJeWiltWinnen",
    "bolcomBon1",
    "image2",
    "group1",
    "samsung60TvTWV699",
    "group2",
    "playstation5SlimDiskTWV549",
    "group3",
    "spanText",
    "meervoordeelNlIs",
    "group11Props",
    "group12Props",
    "group13Props",
    "frame1000004784Props",
  ],
  methods: {
  goToStep2() {
    console.log(this.chosenProduct)
    if (this.chosenProduct) {
      addAntwoord(this.chosenProduct); 
      this.$router.push({ path: '/pagina-2' });
    } else {
      alert('Kies alstublieft een product voordat je verder gaat.');
    }
  },
 },
 created() {
    console.log("Pagina1 component is aangemaakt.");
  },
  mounted() {
    console.log("Pagina1 component is gemonteerd.");
  },
};
</script>



<template>
  <center>
    <div class="overkoepelende-container">
      <div class="container-center-horizontal">
        <div class="pagina-1 screen">
          <div class="overlap-group3-1">
            <div class="rectangle-30-1"></div>
            <img class="samsung-1-1" :src="samsung1" alt="Samsung 1" />
            <div class="background-1"></div>
            <frame1 />
            <div class="frame-427320545">
              <img class="frame-427320545-item" :src="stap1Van3" alt="Stap 1 van 3" />
              <img class="frame-427320545-item" :src="vertelOnsWelkePrijsJeWiltWinnen" alt="Vertel ons welke prijs je wilt winnen:" />
            </div>
            <img class="bolcom-bon-1-1" :src="bolcomBon1" alt="bolcom-bon 1" />
            <img class="image-2-1" :src="image2" alt="image 2" />

            <form class="frame-427320542">
              <div v-for="product in products" :key="product.id" class="frame">
                <input type="radio" :id="'product-' + product.id" name="product" :value="product.value" v-model="chosenProduct" />
                <label class="label-1" :for="'product-' + product.id">
                  <p class="x-twv diodrumcyrillic-regular-normal-downriver-25px">
                    <span class="pointer-1">{{ product.name }}</span>
                  </p>
                </label>
              </div>
            </form>

            <div @click="goToStep2" class="frame-427320541-1">
              <div class="ga-naar-stap-2 diodrumcyrillic-normal-white-23-7px">Ga naar stap 2</div>
              <img class="right-arrow-1" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg" alt="rightArrow"/>
            </div>

            <group1 :text1="group11Props.text1" :className="group11Props.className" />
            <group1 :text1="group12Props.text1" :className="group12Props.className" />
            <group1 :text1="group13Props.text1" :className="group13Props.className" />
            <frame1000004784 :group="frame1000004784Props.group" :group116046944Props="frame1000004784Props.group116046944Props" />
          </div>
          <img class="line-2-1" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg" alt="Line 2" />
          <p class="meervoordeelnl-is-1 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
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




        <div class="achtergrond-pagina-1">


          <div class="witte-container-pagina-1">

            <p class="stap1">
              stap 1 van de 3
            </p>

            <p class="vertel-ons">
              Vertel ons welke prijs je wilt winnen:
            </p>


            <form class="radio-form">
              <div class="radio-option radio-option-1">
                <label for="option1">
                  <input type="radio" id="option1" name="prijsoptie" value="option1">
                  <span class="text-radio-vraag1">SAMSUNG 60" TV t.w.v. €699,-</span>
                </label>
              </div>
            
              <div class="radio-option radio-option-2">
                <label for="option2">
                  <input type="radio" id="option2" name="prijsoptie" value="option2">
                  <span class="text-radio-vraag1">Playstation 5 Slim Disk t.w.v. €549,-</span>
                </label>
              </div>
            
              <div class="radio-option radio-option-3">
                <label for="option3">
                  <input type="radio" id="option3" name="prijsoptie" value="option3">
                  <span class="text-radio-vraag1">Bol.com cadeaubon t.w.v. €400,-</span>
                </label>
              </div>
            </form>
            

              <router-link class="router-link" to="/pagina-2">
                <button class="doe-nu-mee-knop" href="/pagina-2">
                  <div class="text-in-knop">
                    Ga naar stap 2<img src="./rechterpijl.svg" alt="pijl-naar-rechts">
                  </div>
                </button>
              </router-link>


            <img style="margin-top:40px" src="./Samsung 2.png" alt="">
            <img src="./Samsung 2.png" alt="">
            



          </div>

        </div>

        <hr class="lijn" style="margin-top: 3rem;">

        <div class="footer-pagina1">
          <p class="text-footer-pagina1">*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.
            Actievoorwaarden van toepassing.</p>

        </div>


      </div>









    </div>
  </center>
</template>




<style lang="sass">
@import '../../variables'

.overkoepelende-container
  max-width: 100vw
  max-height: 100vw
  overflow-x: hidden



.pagina-1
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  width: 1920px

.overlap-group3-1
  height: 1049px
  position: relative
  width: 1920px

.rectangle-30-1
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.samsung-1-1
  height: 493px
  left: 1024px
  position: absolute
  top: 231px
  width: 764px

.background-1
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 610px
  left: 146px
  position: absolute
  top: 299px
  width: 968px

.frame-427320545
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  left: 214px
  position: absolute
  top: 352px

.frame-427320545-item
  flex: 0 0 auto
  position: relative

.bolcom-bon-1-1
  height: 308px
  left: 1114px
  position: absolute
  top: 604px
  width: 441px

.image-2-1
  height: 596px
  left: 1188px
  position: absolute
  top: 453px
  width: 568px

.frame-427320542
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 11px
  left: 214px
  position: absolute
  top: 468px
  height: 5%

  
.frame
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: row
  gap: 10%
  position: relative
  background-color: #f1f1f1
  border-radius: 35px
  width: 190%
  height: 150%!important
  align-items: center
  cursor: pointer

input[type="radio"]
  transform: scale(2)
  margin-left: 4%

.pointer-1
  cursor: pointer
  position: relative!important
  top:  24px!important






.frame
  align-items: flex-start
  display: flex
  flex-direction: row
  gap: 10%
  position: relative
  background-color: #f1f1f1
  border-radius: 35px
  align-items: center
  cursor: pointer
  max-width: 100%

.label-1
  width: 100%
  cursor: pointer
  position: relative
  top: 0%
  text-align: start




  .group-11
  height: 76px
  position: relative
  width: 807px

.frame-107
  align-items: center
  display: inline-flex
  gap: 21px
  left: 28px
  position: absolute
  top: 24px

.x-twv
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.radio-button_-selected
  border: 1.5px solid
  border-color: $downriver
  border-radius: 18px
  height: 24px
  position: relative
  width: 24px

.frame-427320541-1
  align-items: center
  background-color: $tangerine
  border-radius: 40px
  display: inline-flex
  gap: 24.54px
  height: 76px
  left: 745px
  overflow: hidden
  padding: 29.8px 40px
  position: absolute
  top: 742px

.ga-naar-stap-2
  letter-spacing: 0
  line-height: normal
  margin-bottom: -3.92px
  margin-top: -7.43px
  position: relative
  white-space: nowrap
  width: fit-content

.right-arrow-1
  height: 11.39px
  position: relative
  width: 21.03px

.line-2-1
  height: 1px
  margin-left: 1.0px
  margin-top: 114px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-1
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px



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



// hieronder komen alle mobile styles


@media (min-width: 500px)
  .container-mobiel
    display: none!important



@media (max-width: 500px)

  .container-center-horizontal *
    display: none


  .achtergrond-pagina-1
    width: 23.4375rem
    height: 72.5625rem
    flex-shrink: 0
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)



  .witte-container-pagina-1
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)
    width: 21.5625rem
    height: 41rem
    flex-shrink: 0
    position: relative
    top: 1rem

  .footer-pagina1
    background-color: #fff
    height: 6rem

  .text-footer-pagina1
    color: #C1C1C1
    text-align: center
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 0.75rem
    font-style: normal
    font-weight: 400
    line-height: 1.125rem
    margin-top: 1rem


  .stap1
    text-align: start
    margin-left: 2rem
    padding-top: 2rem
    color: #F48C02
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1.125rem
    font-style: normal
    font-weight: 400
    line-height: 150%

  .vertel-ons
    color: #072249
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%
    text-align: start
    margin-left: 2rem


            // .radio-option-1, 
            // .radio-option-2, 
            // .radio-option-3,
            // .radio-option-4
            //   margin-bottom: 2rem
            //   margin-top: 2rem
            //   border-radius: 3.125rem
            //   background-color: #F1F1F1
            //   height: 6rem
            //   width: 90%
            //   color: #072249
            //   font-family: $font-family-diodrum_cyrillic-regular
            //   font-size: 1.125rem
            //   font-style: normal
            //   font-weight: 400
            //   line-height: normal
            //   display: flex
            //   align-items: center
            //   justify-content: flex-start
            //   padding-left: 2rem
            // 
            // 
            // .text-radio-vraag1 
            //   text-align: start
            //   margin-left: 1rem
            // 
            // 
            // .radio-option-1 input[type="radio"],
            // .radio-option-2 input[type="radio"],
            // .radio-option-3 input[type="radio"] 
            //   transform: scale(2.5)
            //   margin-right: 1rem



.radio-option-1, 
.radio-option-2, 
.radio-option-3,
.radio-option-4 
  margin-bottom: 2rem
  margin-top: 2rem
  border-radius: 3.125rem
  background-color: #F1F1F1
  height: 6rem
  width: 90%
  color: #072249
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 1.125rem
  font-style: normal
  font-weight: 400
  line-height: normal
  display: flex
  align-items: center
  justify-content: flex-start
  padding-left: 2rem
  label 
    display: flex
    align-items: center
    width: 100%
    height: 100%
    cursor: pointer
  

  input[type="radio"] 
    transform: scale(2.5)
    margin-right: 1rem
    pointer-events: none
  

  .text-radio-vraag1 
    text-align: start
    margin-left: 1rem 



    



    
    
  
  

</style>

