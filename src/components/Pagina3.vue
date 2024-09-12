<script>
import Frame1 from "./Frame1";
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
import { mapGetters } from 'vuex'; // Voeg deze regel toe

export default {
  name: "Pagina3",
  components: {
    Frame1,
    Group1,
    Frame1000004784,
  },
  props: [
    "samsung1",
    "stap3Van3",
    "vulJePostcodeInEnCheckOfJeKansMaakt",
    "bolcomBon1",
    "image2",
    "x2000Ab",
    "checkMijnPostcode",
    "meervoordeelNlIs",
    "group11Props",
    "group12Props",
    "group13Props",
    "frame1000004784Props",
  ],
  data() {
    return {
      chosenProduct: '',
      postcodeError: '', 
    };
  },
  computed: {
    ...mapGetters(['getAntwoorden']), // Gebruik mapGetters om de antwoorden op te halen
  },
  mounted() {
    this.chosenProduct = this.getAntwoorden.antwoord1 || ''; // Haal het specifieke antwoord op
    console.log('Gekozen product:', this.chosenProduct);

    // Luister naar de "keydown" gebeurtenis voor Enter
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    // Verwijder de "keydown" eventlistener wanneer de component wordt vernietigd
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    validatePostcode(postcode) {
      const postcodeRegex = /^\d{4}\s*[a-zA-Z]{2}$/;
      return postcodeRegex.test(postcode);
    },
    checkPostcode() {
      let inputValue = document.querySelector('.x2000-ab-input').value.trim() || 
                       document.querySelector('.postcode-input-mobiel').value.trim();
      console.log("Ingevoerde waarde:", inputValue);
      if (this.validatePostcode(inputValue)) {
        this.postcodeError = '';
        console.log("Postcode is geldig:", inputValue);
        this.$router.push('/pagina-4');
      } else {
        this.postcodeError = 'Voer een geldige postcode in (bijv. 2222 AB)';
        console.log("Postcode is ongeldig:", inputValue);
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.checkPostcode();  // Voer de postcode-validatie en router-navigatie uit
      }
    },
  },
};
</script>


<template>
  <center>
    <div class="overkoepelende-container">
      <div class="container-center-horizontal">
        <div class="pagina-3 screen">
          <div class="overlap-group3-4">
            <div class="rectangle-30-4"></div>
            <img class="samsung-1-4" :src="samsung1" alt="Samsung 1" />
            <div class="background-4"></div>
            <frame1 />
            <div class="frame-427320545-2">
              <!-- <img class="stap-3-van-3" :src="stap3Van3" alt="Stap 3 van 3" /> -->

              <p class="stap-zoveel-pagina3">Stap 3 van de 3</p>


              <p class="maak-kans-op">Vul je postcode in en check of je kans maakt op <span class="gekozen-product">{{ chosenProduct }}</span></p>

            </div>
            <img class="bolcom-bon-1-4" :src="bolcomBon1" alt="bolcom-bon 1" />
            <img class="image-2-4" :src="image2" alt="image 2" />

            <div class="frame-427320538">
              <input 
                type="text" 
                class="x2000-ab-input" 
                placeholder="Vul hier je postcode in"
                ref="postcodeInput" 
              />
            </div>

            <div class="frame-427320541-3">
              <button @click="checkPostcode" class="invisible-button check-mijn-postcode diodrumcyrillic-normal-white-23-7px" style="font-weight: 700">Check mijn postcode</button>
              <img
                class="right-arrow-3"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg"
                alt="rightArrow"
              />
            </div>

            <p v-if="postcodeError" class="error-message-pagina-3">{{ postcodeError }}</p>

            <group1 :text1="group11Props.text1" :className="group11Props.className" />
            <group1 :text1="group12Props.text1" :className="group12Props.className" />
            <group1 :text1="group13Props.text1" :className="group13Props.className" />
            <frame1000004784
              :group="frame1000004784Props.group"
              :group116046944Props="frame1000004784Props.group116046944Props"
            />
          </div>
          <img
            class="line-2-4"
            src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
            alt="Line 2"
          />
          
          <p class="meervoordeelnl-is-4 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
        </div>
      </div>

      <div class="container-mobiel5">
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

        <div class="achtergrond-pagina-5">
          <div class="witte-container-pagina-3">
            <p class="stap1">
              stap 3 van de 3
            </p>

            <p class="vul-postcode-in">Vul je postcode in en check of je kans maakt op
              <span class="gekozen-product-mobiel">
                {{chosenProduct}}
              </span>
            </p>

            <input 
            class="postcode-input-mobiel 2000-ab-input"
            type="text" 
            placeholder="Vul hier je postcode in"
            ref="postcodeInput" 
          />
          <button class="postcode-knop-mobiel" @click="checkPostcode">Check postcode <img src="./rechterpijl.svg" alt="">
          </button>
          <p v-if="postcodeError" style="color: red;">{{ postcodeError }}</p>
          </div>
          <img style="position: relative; bottom: 1.5rem" src="./afbeeldingen-samen.png" alt="">
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


.stap-zoveel-pagina3
  color: #F48C02
  font-family: "DM Sans"
  font-size: 1.25rem
  font-style: normal
  font-weight: 400
  line-height: 150%


.error-message-pagina-3
  color: red
  font-size: 26px
  margin-top: 10px
  text-align: center
  z-index: 9999
  position: relative
  top: 665px
  right: 470px
  font-weight: 700
  font-family: $font-family-diodrum_cyrillic-regular


.invisible-button
  background: transparent
  border: none
  width: 100%



.overkoepelende-container 
  max-width: 100vw
  max-height: 100vw
  overflow-x: hidden


.maak-kans-op
  font-size: 34px
  max-width: 70%
  text-align: start
  color: #072249
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 2.1875rem
  font-style: normal
  font-weight: 700
  line-height: 150%


.gekozen-product
  color: #F48C02
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 2.1875rem
  font-style: normal
  font-weight: 600
  line-height: 150%


.x2000-ab-input
  background-color: transparent
  border: none
  font-size:28px
  width: 50%
  height: 36px

.pagina-3
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  width: 1920px

.overlap-group3-4
  height: 1049px
  position: relative
  width: 1920px

.rectangle-30-4
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.samsung-1-4
  height: 493px
  left: 1024px
  position: absolute
  top: 231px
  width: 764px

.background-4
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 395px
  left: 146px
  position: absolute
  top: 329px
  width: 968px

.frame-427320545-2
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  left: 214px
  position: absolute
  top: 382px

.stap-3-van-3
  flex: 0 0 auto
  position: relative

.vul-je-postcode-in-e
  flex: 0 0 auto
  position: relative
  width: 585.66px

.bolcom-bon-1-4
  height: 308px
  left: 1114px
  position: absolute
  top: 604px
  width: 441px

.image-2-4
  height: 596px
  left: 1188px
  position: absolute
  top: 453px
  width: 568px

.frame-427320538
  align-items: flex-start
  background-color: $seashell
  border: 1.62px solid
  border-color: #e8eef3
  border-radius: 50px
  display: flex
  gap: 38.79px
  left: 210px
  padding: 25.86px 36.86px
  position: absolute
  top: 560px
  width: 717px

.x2000-ab
  color: #000b29
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: $font-size-xxl
  font-weight: 400
  letter-spacing: 0
  line-height: 30.0px
  margin-top: -1.62px
  position: relative
  width: 171px

.frame-427320541-3
  align-items: center
  background-color: $tangerine
  border-radius: 40px
  display: inline-flex
  gap: 24.54px
  height: 76px
  left: 576px
  overflow: hidden
  padding: 41.8px 41px
  position: absolute
  top: 563px

.check-mijn-postcode
  letter-spacing: 0
  line-height: normal
  margin-bottom: -3.92px
  margin-top: -7.43px
  position: relative
  white-space: nowrap
  width: fit-content

.right-arrow-3
  height: 11.39px
  position: relative
  width: 21.03px

.line-2-4
  height: 1px
  margin-left: 1.0px
  margin-top: 114px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-4
  letter-spacing: 0
  line-height: 24px
  margin-right: 14.0px
  margin-top: 23px
  min-height: 48px
  text-align: center
  width: 874px




@media (min-width: 501px)
  .container-mobiel5
    display: none




@media (max-width: 501px) 




  .witte-container-pagina-3 
    height: 24rem
    background-color: #fff
    width: 92vw
    border-radius: 0.75rem
    top: 2rem
    position: relative


  .witte-container-pagina-3
    height: 26rem
    background-color: #fff

  .vul-postcode-in
    color: #072249
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%
    text-align: start
    margin-left: 2rem
    padding-right: 1rem


  .gekozen-product-mobiel
    color: #F48C02
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%

  .container-center-horizontal
    display: none!important
    


  .postcode-input-mobiel
    display: block
    width: 90%
    height: 4rem
    border-radius: 75px
    font-size: 24px
    padding-left: 1rem
    font-family: $font-family-diodrum_cyrillic-semibold
    margin-bottom: 2rem
    margin-top: 2rem


  .postcode-knop-mobiel
    display: flex
    width: 90%
    height: 4rem
    justify-content: center
    align-items: center
    gap: 1.53363rem
    border-radius: 2.5rem
    background: #F48C02
    color: $white
    border: none
    font-size: 22px
    font-family: $font-family-diodrum_cyrillic-semibold!important 



  .achtergrond-pagina-5 
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)!important
    width: 100%!important
    height: 56rem!important
    padding-bottom: 2rem!important
  

  
</style>
