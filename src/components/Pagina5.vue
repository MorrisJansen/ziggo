<template>
  <center>
    <div class="overkoepelende-container">
  <div class="container-center-horizontal">
    <div class="pagina-5 screen">
      <div class="overlap-group1">
        <div class="rectangle-30-6"></div>
        <div class="background-6"></div>
        <p class="hoe-kunnen-wij-jou-bereiken">{{ hoeKunnenWijJouBereiken }}</p>
        <img
          class="line-4"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-4.svg"
          alt="Line 4"
        />
        <div class="frame-427320569">
          <div class="frame-427320568">
            <div class="frame-42732056">
              <div class="frame-107-2">
                <img class="layer-2" :src="layer21" alt="Layer 2" />
                <div class="voornaam diodrumcyrillic-regular-normal-nobel-25px">{{ voornaam }}</div>
              </div>
            </div>
            <div class="frame-42732056">
              <div class="frame-107-2">
                <img class="layer-2" :src="layer22" alt="Layer 2" />
                <div class="achternaam diodrumcyrillic-regular-normal-nobel-25px">{{ achternaam }}</div>
              </div>
            </div>
          </div>
          <div class="frame-42732056-1">
            <div class="frame-107-2">
              <img class="layer-2-1" :src="layer23" alt="Layer 2" />
              <div class="e-mailadres diodrumcyrillic-regular-normal-nobel-25px">{{ eMailadres }}</div>
            </div>
          </div>
          <div class="frame-42732056-1">
            <div class="frame-107-3">
              <img class="group-13" :src="group" alt="Group" />
              <div class="telefoonnummer diodrumcyrillic-regular-normal-nobel-25px">{{ telefoonnummer }}</div>
            </div>
          </div>
          <div class="frame-427320570">
            <div class="frame-2-1">
              <div class="bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px">{{ bevestigMijnDeelname }}</div>
              <img
                class="right-arrow-4"
                src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow-4.svg"
                alt="rightArrow"
              />
            </div>
          </div>
          <p class="met-het-bevestigen-v">{{ metHetBevestigenV }}</p>
        </div>
        <frame1 />
        <img
          class="gefeliciteerd-jij-ma"
          :src="gefeliciteerdJijMaaktNuKansOpDeGeko"
          alt="Gefeliciteerd! Jij maakt nu kans op de {gekozen prijs}."
        /><img class="image-2-6" :src="image2" alt="image 2" />
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
</div>
</center>

</template>

<script>
import Frame1 from "./Frame1";
import Frame1000004784 from "./Frame1000004784";
export default {
  name: "Pagina5",
  components: {
    Frame1,
    Frame1000004784,
  },
  props: [
    "hoeKunnenWijJouBereiken",
    "layer21",
    "voornaam",
    "layer22",
    "achternaam",
    "layer23",
    "eMailadres",
    "group",
    "telefoonnummer",
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
};
</script>

<style lang="sass">
@import '../../variables'

.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-y: hidden

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
  top: 450px
  width: 800px

.line-4
  height: 1px
  left: 214px
  object-fit: cover
  position: absolute
  top: 422px
  width: 797px

.frame-427320569
  align-items: flex-end
  display: inline-flex
  flex-direction: column
  gap: 19px
  left: 213px
  position: absolute
  top: 528px

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
</style>
