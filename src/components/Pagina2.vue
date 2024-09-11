<script>
import Frame1 from "./Frame1";
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
import { addAntwoord, getAntwoorden } from '../Store';

export default {
  name: "Pagina2",
  components: {
    Frame1,
    Group1,
    Frame1000004784,
  },
  data() {
    return {
      gekozenProvider: '', 
    };
  },
  mounted() {
    const antwoordenLijst = this.$store.getters.getAntwoorden();
    console.log('Alle antwoorden uit store:', antwoordenLijst); 
  },
  methods: {
    selectProvider(event) {
      this.gekozenProvider = event.target.value;
      console.log("Gekozen provider:", this.gekozenProvider); 
    },

    goToStep3() {
      if (!this.gekozenProvider) {
        alert('Kies alstublieft een provider voordat u doorgaat.');
        return;
      }
      this.$store.commit('ADD_ANTWOORD', { vraag: 'antwoord2', antwoord: this.gekozenProvider });
      console.log('Provide r opgeslagen:', this.gekozenProvider); 
      this.$router.push({ path: '/pagina-3' });
    },
  },

  props: [
    "samsung1",
    "stap2Van3",
    "watIsJouwHuidigeProvider",
    "bolcomBon1",
    "image2",
    "gaNaarDeLaatsteStap",
    "ziggo",
    "anders",
    "odido",
    "group",
    "kpn",
    "meervoordeelNlIs",
    "group11Props",
    "group12Props",
    "group13Props",
    "frame1000004784Props",
  ],
};
</script>


<template>
  <center>
    <div class="overkoepelende-container">

      <!-- Desktop versie -->
      <div class="container-center-horizontal">
        <div class="pagina-2 screen">
          <div class="overlap-group3-3">
            <div class="overlap-group4">
              <div class="rectangle-30-3"></div>
              <img class="samsung-1-3" :src="samsung1" alt="Samsung 1" />
              <div class="background-3"></div>
              <frame1 />
              <div class="frame-427320545-1">
                <img class="frame-427320545-item-1" :src="stap2Van3" alt="Stap 2 van 3" />
                <img
                  class="frame-427320545-item-1"
                  :src="watIsJouwHuidigeProvider"
                  alt="Wat is jouw huidige provider?"
                />
              </div>
              <img class="bolcom-bon-1-3" :src="bolcomBon1" alt="bolcom-bon 1" />
              <img class="image-2-3" :src="image2" alt="image 2" />

              <a href="/pagina-3" @click.prevent="goToStep3">
                <div class="frame-427320541-2">
                  <p class="ga-naar-de-laatste-stap diodrumcyrillic-normal-white-23-7px">Ga naar de laatste stap</p>
                  <img
                    class="right-arrow-2"
                    src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg"
                    alt="rightArrow"
                  />
                </div>
              </a>

              <group1 :text1="group11Props.text1" :className="group11Props.className" />
              <group1 :text1="group12Props.text1" :className="group12Props.className" />
              <group1 :text1="group13Props.text1" :className="group13Props.className" />
              <frame1000004784
                :group="frame1000004784Props.group"
                :group116046944Props="frame1000004784Props.group116046944Props"
              />
            </div>

            <div class="frame-427320542-1">
              <div class="frame-2">
                <div class="rectangle-40377"></div>
                <div class="frame-107-1">
                  <input type="radio" id="ziggo" name="provider" value="Ziggo" @change="selectProvider">
                  <label for="ziggo" class="label2">
                    <p class="ziggo diodrumcyrillic-regular-normal-downriver-25px">
                      <span class="pointer">Ziggo</span>  
                    </p>
                  </label>
                </div>
              </div>
              <div class="frame-2">
                <div class="rectangle-40377"></div>
                <div class="frame-107-1">
                  <input type="radio" id="anders" name="provider" value="Anders" @change="selectProvider">
                  <label for="anders" class="label2">
                    <p class="anders diodrumcyrillic-regular-normal-downriver-25px">
                      <span class="pointer">Anders</span>  
                    </p>
                  </label>
                </div>
              </div>
            </div>

            <div class="frame-427320542-2">
              <div class="frame-2">
                <div class="rectangle-40377"></div>
                <div class="frame-107-1">
                  <input type="radio" id="odido" name="provider" value="Odido" @change="selectProvider">
                  <label for="odido" class="label2">
                    <p class="odido diodrumcyrillic-regular-normal-downriver-25px">
                      <span class="pointer">Odido</span>  
                    </p>
                  </label>
                </div>
              </div>
              <div class="frame-2">
                <div class="rectangle-40377"></div>
                <div class="frame-107-1">
                  <input type="radio" id="kpn" name="provider" value="KPN" @change="selectProvider">
                  <label for="kpn" class="label2">
                    <p class="kpn diodrumcyrillic-regular-normal-downriver-25px">
                      <span class="pointer">KPN</span>                   
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <img
            class="line-2-3"
            src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
            alt="Line 2"
          />
          <p class="meervoordeelnl-is-3 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
        </div>
      </div>

      <!-- Mobiele versie -->
      <div class="container-mobiel">
        <div class="navbar-mobiel">
          <img class="logo-navbar-mobiel logo-navbar-mobiel-mv"
               src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"
               alt="MV logo 1" />
          <img class="logo-navbar-mobiel"
               src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png"
               alt="logo ziggo" />
          <img class="logo-navbar-mobiel" src="./trustpilot-mobiel.png" alt="">
        </div>

        <div class="achtergrond-pagina-1">
          <div class="witte-container-pagina-1 hoogte-witte-container">
            <p class="stap1">Stap 2 van de 3</p>
            <p class="vertel-ons">Vertel ons welke provider je hebt:</p>

            <!-- Mobiele providerkeuze -->
            <form class="radio-form">
              <div class="radio-option radio-option-1 radio-option-1-pagina2">
                <label for="option1">
                  <input type="radio" id="option1" name="provider" value="Odido" @change="selectProvider">
                  <span class="text-radio-vraag1">Odido</span>
                </label>
              </div>
              <div class="radio-option radio-option-2 radio-option-2-pagina2">
                <label for="option2">
                  <input type="radio" id="option2" name="provider" value="KPN" @change="selectProvider">
                  <span class="text-radio-vraag1">KPN</span>
                </label>
              </div>
              <div class="radio-option radio-option-3 radio-option-3-pagina2">
                <label for="option3">
                  <input type="radio" id="option3" name="provider" value="Ziggo" @change="selectProvider">
                  <span class="text-radio-vraag1">Ziggo</span>
                </label>
              </div>
              <div class="radio-option radio-option-4 radio-option-4-pagina2">
                <label for="option4">
                  <input type="radio" id="option4" name="provider" value="Anders" @change="selectProvider">
                  <span class="text-radio-vraag1">Anders</span>
                </label>
              </div>
            </form>

            <!-- Knop voor naar de volgende stap -->
            <a href="/pagina-3" @click.prevent="goToStep3">
              <button class="doe-nu-mee-knop">
                <div class="text-in-knop">
                  Laatste stap
                  <img class="marge-links-mobiel" src="./rechterpijl.svg" alt="pijl-naar-rechts">
                </div>
              </button>
            </a>



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






.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-x: hidden


.pagina-2
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 1274px
  width: 1920px

.overlap-group3-3
  height: 1049px
  position: relative
  width: 1920px

.overlap-group4
  height: 1049px
  left: 0
  position: absolute
  top: 0
  width: 1920px

.rectangle-30-3
  background: linear-gradient(180deg, rgb(7, 33, 72) 0%, rgb(64, 165, 159) 100%)
  height: 830px
  left: 0
  position: absolute
  top: 138px
  width: 1920px

.samsung-1-3
  height: 493px
  left: 1024px
  position: absolute
  top: 231px
  width: 764px

.background-3
  background-color: $white
  border-radius: 12px
  box-shadow: 0px 31px 81px #00104c33
  height: 603px
  left: 146px
  position: absolute
  top: 302px
  width: 968px

.frame-427320545-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  left: 214px
  position: absolute
  top: 355px

.frame-427320545-item-1
  flex: 0 0 auto
  position: relative

.bolcom-bon-1-3
  height: 308px
  left: 1114px
  position: absolute
  top: 604px
  width: 441px

.image-2-3
  height: 596px
  left: 1188px
  position: absolute
  top: 453px
  width: 568px

.frame-427320541-2
  align-items: center
  background-color: $tangerine
  border-radius: 40px
  display: flex
  gap: 16px
  height: 76px
  left: 628px
  overflow: hidden
  padding: 29.8px 40px
  position: absolute
  top: 654px
  width: 360px

.ga-naar-de-laatste-stap
  letter-spacing: 0
  line-height: normal
  margin-bottom: -3.92px
  margin-top: -7.43px
  position: relative
  white-space: nowrap
  width: fit-content

.right-arrow-2
  height: 11.39px
  margin-right: -7.57px
  position: relative
  width: 21.03px

.frame-427320542-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 11px
  left: 630px
  position: absolute
  top: 470px


  

.frame-2
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 10px
  position: relative
  max-width: 100%

input[type="radio"]
  width: 12px
  height: 12px
  border: 1px solid grey
  border-radius: 200%
  position: relative
  cursor: pointer
  transform: scale(1.8)

input[type="radio"]::after
  content: ""
  width: 12px
  height: 12px
  background-color: transparent
  border-radius: 50%
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  transition: background-color 0.3s

input[type="radio"]:checked::after
  background-color: #F48C02

.pointer
  cursor: pointer
  

.label2
  display: flex
  min-width: 300%
  cursor: pointer

  
.rectangle-40377
  background-color: $seashell
  border-radius: 50px
  height: 76px
  position: relative
  width: 360px

.frame-107-1
  align-items: center
  display: inline-flex
  gap: 21px
  left: 28px
  position: absolute
  top: 24px

.radio-button_-selected-3
  border: 1.5px solid
  border-color: $downriver
  border-radius: 18px
  height: 24px
  position: relative
  width: 24px

.ziggo,
.anders,
.odido,
.kpn
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.frame-427320542-2
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 11px
  left: 214px
  position: absolute
  top: 471px

.group-12
  height: 76px
  position: relative
  width: 360px

.line-2-3
  height: 1px
  margin-left: 1.0px
  margin-top: 114px
  object-fit: cover
  width: 1751px

.meervoordeelnl-is-3
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



@media (min-width: 501px)
  .container-mobiel
    display: none!important

// hieronder komen alle mobile styles
@media (max-width: 500px)
  .container-center-horizontal
    display: none!important
  

  .hoogte-witte-container
    height: 37rem 
  

  .radio-option-1, .radio-option-2, .radio-option-3 
    margin-bottom: 0.7rem
    margin-top: 0.7rem

  .radio-option-1-pagina2, 
  .radio-option-2-pagina2, 
  .radio-option-3-pagina2,
  .radio-option-4-pagina2 
    height: 4.3rem!important

  .radio-option-4
    margin-top: 0.7rem
    

  .marge-links-mobiel
    margin-left: 1rem

</style>

