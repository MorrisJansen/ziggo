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
          <img class="stap-3-van-3" :src="stap3Van3" alt="Stap 3 van 3" /><img
            class="vul-je-postcode-in-e"
            :src="vulJePostcodeInEnCheckOfJeKansMaakt"
            alt="Vul je postcode in en check of je kans maakt op {jouw gekozen prijs}:"
          />
        </div>
        <img class="bolcom-bon-1-4" :src="bolcomBon1" alt="bolcom-bon 1" /><img
          class="image-2-4"
          :src="image2"
          alt="image 2"
        />



        <div class="frame-427320538">
          <input 
            type="text" 
            class="x2000-ab-input" 
            placeholder="Voer hier je waarde in"
          />
        </div>

        <a href="/pagina-4">
        <div class="frame-427320541-3">
          <div class="check-mijn-postcode diodrumcyrillic-normal-white-23-7px">Check mijn postcode</div>
          <img
            class="right-arrow-3"
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
      <img
        class="line-2-4"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-2.svg"
        alt="Line 2"
      />
      
      <p class="meervoordeelnl-is-4 diodrumcyrillic-regular-normal-silver-16px" v-html="meervoordeelNlIs"></p>
    </div>
  </div>
</div>

</center>

</template>

<script>
import Frame1 from "./Frame1";
import Group1 from "./Group1";
import Frame1000004784 from "./Frame1000004784";
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
};
</script>

<style lang="sass">
@import '../../variables'

.overkoepelende-container 
  max-width: 100vw
  max-height: 100vw
  overflow-x: hidden



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
</style>
