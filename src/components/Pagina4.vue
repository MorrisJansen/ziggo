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
    }, 1500);
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

        
        <!-- <img class="draaien-animatie loading-sign-1" src="./draaien.svg" alt=""> -->

        <svg class="draaien-animatie loading-sign-1" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="loading-sign 1">
          <path id="Vector" d="M46.9997 9.79194C46.6104 9.78643 46.224 9.85834 45.8627 10.0035C45.5015 10.1486 45.1727 10.3641 44.8955 10.6375C44.6183 10.9108 44.3982 11.2365 44.248 11.5956C44.0977 11.9547 44.0203 12.3401 44.0203 12.7294C44.0203 13.1187 44.0977 13.5041 44.248 13.8633C44.3982 14.2224 44.6183 14.5481 44.8955 14.8214C45.1727 15.0947 45.5015 15.3102 45.8627 15.4554C46.224 15.6005 46.6104 15.6724 46.9997 15.6669C65.4203 15.6669 80.2913 30.5379 80.2913 48.9586C80.2913 67.3793 65.4203 82.2503 46.9997 82.2503C36.0072 82.2503 26.2957 76.9426 20.2294 68.7523C19.7658 68.1259 19.0724 67.7093 18.3016 67.5942C17.5309 67.4791 16.746 67.6748 16.1196 68.1384C15.4932 68.602 15.0766 69.2954 14.9615 70.0662C14.8463 70.8369 15.0421 71.6218 15.5057 72.2482C22.6386 81.8787 34.1122 88.1253 46.9997 88.1253C68.5956 88.1253 86.1663 70.5545 86.1663 48.9586C86.1663 27.3627 68.5956 9.79194 46.9997 9.79194ZM35.7622 11.5628C34.9831 11.5628 34.236 11.8723 33.6851 12.4232C33.1342 12.9741 32.8247 13.7213 32.8247 14.5003C32.8247 15.2794 33.1342 16.0266 33.6851 16.5775C34.236 17.1284 34.9831 17.4378 35.7622 17.4378C36.5413 17.4378 37.2884 17.1284 37.8393 16.5775C38.3902 16.0266 38.6997 15.2794 38.6997 14.5003C38.6997 13.7213 38.3902 12.9741 37.8393 12.4232C37.2884 11.8723 36.5413 11.5628 35.7622 11.5628ZM25.6722 16.7302C24.8931 16.7302 24.146 17.0397 23.5951 17.5906C23.0442 18.1415 22.7347 18.8887 22.7347 19.6677C22.7347 20.4468 23.0442 21.194 23.5951 21.7449C24.146 22.2958 24.8931 22.6052 25.6722 22.6052C26.4513 22.6052 27.1984 22.2958 27.7493 21.7449C28.3002 21.194 28.6097 20.4468 28.6097 19.6677C28.6097 18.8887 28.3002 18.1415 27.7493 17.5906C27.1984 17.0397 26.4513 16.7302 25.6722 16.7302ZM17.6744 24.751C16.8953 24.751 16.1482 25.0605 15.5973 25.6114C15.0464 26.1623 14.7369 26.9094 14.7369 27.6885C14.7369 28.4676 15.0464 29.2147 15.5973 29.7656C16.1482 30.3165 16.8953 30.626 17.6744 30.626C18.4535 30.626 19.2006 30.3165 19.7515 29.7656C20.3024 29.2147 20.6119 28.4676 20.6119 27.6885C20.6119 26.9094 20.3024 26.1623 19.7515 25.6114C19.2006 25.0605 18.4535 24.751 17.6744 24.751ZM12.5299 34.8487C11.7509 34.8487 11.0037 35.1581 10.4528 35.709C9.90193 36.2599 9.59245 37.0071 9.59245 37.7862C9.59245 38.5652 9.90193 39.3124 10.4528 39.8633C11.0037 40.4142 11.7509 40.7237 12.5299 40.7237C13.309 40.7237 14.0562 40.4142 14.6071 39.8633C15.158 39.3124 15.4674 38.5652 15.4674 37.7862C15.4674 37.0071 15.158 36.2599 14.6071 35.709C14.0562 35.1581 13.309 34.8487 12.5299 34.8487ZM10.7705 46.0211C9.99143 46.0211 9.24427 46.3306 8.69338 46.8815C8.14249 47.4324 7.83301 48.1795 7.83301 48.9586C7.83301 49.7377 8.14249 50.4848 8.69338 51.0357C9.24427 51.5866 9.99143 51.8961 10.7705 51.8961C11.5496 51.8961 12.2967 51.5866 12.8476 51.0357C13.3985 50.4848 13.708 49.7377 13.708 48.9586C13.708 48.1795 13.3985 47.4324 12.8476 46.8815C12.2967 46.3306 11.5496 46.0211 10.7705 46.0211ZM12.5376 57.2318C11.7585 57.2318 11.0114 57.5413 10.4605 58.0922C9.90958 58.6431 9.6001 59.3902 9.6001 60.1693C9.6001 60.9484 9.90958 61.6955 10.4605 62.2464C11.0114 62.7973 11.7585 63.1068 12.5376 63.1068C13.3167 63.1068 14.0638 62.7973 14.6147 62.2464C15.1656 61.6955 15.4751 60.9484 15.4751 60.1693C15.4751 59.3902 15.1656 58.6431 14.6147 58.0922C14.0638 57.5413 13.3167 57.2318 12.5376 57.2318Z" fill="#F48C02"/>
          </g>
          </svg>
          

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

      <!-- <img class="draaien-animatie" src="./draaien.svg" alt=""> -->


      <svg class="draaien-animatie" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="loading-sign 1">
        <path id="Vector" d="M46.9997 9.79194C46.6104 9.78643 46.224 9.85834 45.8627 10.0035C45.5015 10.1486 45.1727 10.3641 44.8955 10.6375C44.6183 10.9108 44.3982 11.2365 44.248 11.5956C44.0977 11.9547 44.0203 12.3401 44.0203 12.7294C44.0203 13.1187 44.0977 13.5041 44.248 13.8633C44.3982 14.2224 44.6183 14.5481 44.8955 14.8214C45.1727 15.0947 45.5015 15.3102 45.8627 15.4554C46.224 15.6005 46.6104 15.6724 46.9997 15.6669C65.4203 15.6669 80.2913 30.5379 80.2913 48.9586C80.2913 67.3793 65.4203 82.2503 46.9997 82.2503C36.0072 82.2503 26.2957 76.9426 20.2294 68.7523C19.7658 68.1259 19.0724 67.7093 18.3016 67.5942C17.5309 67.4791 16.746 67.6748 16.1196 68.1384C15.4932 68.602 15.0766 69.2954 14.9615 70.0662C14.8463 70.8369 15.0421 71.6218 15.5057 72.2482C22.6386 81.8787 34.1122 88.1253 46.9997 88.1253C68.5956 88.1253 86.1663 70.5545 86.1663 48.9586C86.1663 27.3627 68.5956 9.79194 46.9997 9.79194ZM35.7622 11.5628C34.9831 11.5628 34.236 11.8723 33.6851 12.4232C33.1342 12.9741 32.8247 13.7213 32.8247 14.5003C32.8247 15.2794 33.1342 16.0266 33.6851 16.5775C34.236 17.1284 34.9831 17.4378 35.7622 17.4378C36.5413 17.4378 37.2884 17.1284 37.8393 16.5775C38.3902 16.0266 38.6997 15.2794 38.6997 14.5003C38.6997 13.7213 38.3902 12.9741 37.8393 12.4232C37.2884 11.8723 36.5413 11.5628 35.7622 11.5628ZM25.6722 16.7302C24.8931 16.7302 24.146 17.0397 23.5951 17.5906C23.0442 18.1415 22.7347 18.8887 22.7347 19.6677C22.7347 20.4468 23.0442 21.194 23.5951 21.7449C24.146 22.2958 24.8931 22.6052 25.6722 22.6052C26.4513 22.6052 27.1984 22.2958 27.7493 21.7449C28.3002 21.194 28.6097 20.4468 28.6097 19.6677C28.6097 18.8887 28.3002 18.1415 27.7493 17.5906C27.1984 17.0397 26.4513 16.7302 25.6722 16.7302ZM17.6744 24.751C16.8953 24.751 16.1482 25.0605 15.5973 25.6114C15.0464 26.1623 14.7369 26.9094 14.7369 27.6885C14.7369 28.4676 15.0464 29.2147 15.5973 29.7656C16.1482 30.3165 16.8953 30.626 17.6744 30.626C18.4535 30.626 19.2006 30.3165 19.7515 29.7656C20.3024 29.2147 20.6119 28.4676 20.6119 27.6885C20.6119 26.9094 20.3024 26.1623 19.7515 25.6114C19.2006 25.0605 18.4535 24.751 17.6744 24.751ZM12.5299 34.8487C11.7509 34.8487 11.0037 35.1581 10.4528 35.709C9.90193 36.2599 9.59245 37.0071 9.59245 37.7862C9.59245 38.5652 9.90193 39.3124 10.4528 39.8633C11.0037 40.4142 11.7509 40.7237 12.5299 40.7237C13.309 40.7237 14.0562 40.4142 14.6071 39.8633C15.158 39.3124 15.4674 38.5652 15.4674 37.7862C15.4674 37.0071 15.158 36.2599 14.6071 35.709C14.0562 35.1581 13.309 34.8487 12.5299 34.8487ZM10.7705 46.0211C9.99143 46.0211 9.24427 46.3306 8.69338 46.8815C8.14249 47.4324 7.83301 48.1795 7.83301 48.9586C7.83301 49.7377 8.14249 50.4848 8.69338 51.0357C9.24427 51.5866 9.99143 51.8961 10.7705 51.8961C11.5496 51.8961 12.2967 51.5866 12.8476 51.0357C13.3985 50.4848 13.708 49.7377 13.708 48.9586C13.708 48.1795 13.3985 47.4324 12.8476 46.8815C12.2967 46.3306 11.5496 46.0211 10.7705 46.0211ZM12.5376 57.2318C11.7585 57.2318 11.0114 57.5413 10.4605 58.0922C9.90958 58.6431 9.6001 59.3902 9.6001 60.1693C9.6001 60.9484 9.90958 61.6955 10.4605 62.2464C11.0114 62.7973 11.7585 63.1068 12.5376 63.1068C13.3167 63.1068 14.0638 62.7973 14.6147 62.2464C15.1656 61.6955 15.4751 60.9484 15.4751 60.1693C15.4751 59.3902 15.1656 58.6431 14.6147 58.0922C14.0638 57.5413 13.3167 57.2318 12.5376 57.2318Z" fill="#F48C02"/>
        </g>
        </svg>
        
    </div>

    <!-- <img src="./afbeeldingen-samen.png" alt=""> -->
    <div class="container-afbeelding-prijzen-mobiel-4">
      <img src="./afbeeldingen-samen-mobiel.png" alt="">


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







  @media (min-width: 1920px)
    .container-center-horizontal
      min-width: 100vw !important
      max-width: 100vw !important
      zoom: 110%
  
    .pagina-4
      zoom: 100% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2080px)
    .pagina-4
      zoom: 105% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2200px)
    .pagina-4
      zoom: 110% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2300px)
    .pagina-4
      zoom: 115% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2400px)
    .pagina-4
      zoom: 120% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2500px)
    .pagina-4
      zoom: 125% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2600px)
    .pagina-4
      zoom: 130% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2700px)
    .pagina-4
      zoom: 135% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2800px)
    .pagina-4
      zoom: 140% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 2900px)
    .pagina-4
      zoom: 145% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3000px)
    .pagina-4
      zoom: 150% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3100px)
    .pagina-4
      zoom: 155% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3200px)
    .pagina-4
      zoom: 160% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3300px)
    .pagina-4
      zoom: 165% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3400px)
    .pagina-4
      zoom: 170% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3500px)
    .pagina-4
      zoom: 175% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3600px)
    .pagina-4
      zoom: 180% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3700px)
    .pagina-4
      zoom: 185% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3800px)
    .pagina-4
      zoom: 190% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 3900px)
    .pagina-4
      zoom: 195% !important
      position: relative !important
      right: 5% !important
  
  @media (min-width: 4000px)
    .pagina-4
      zoom: 200% !important
      position: relative !important
      right: 5% !important
  




@media (max-width: 501px)




  .container-afbeelding-prijzen-mobiel-4
    top: 40px
    position: relative
    margin-top: 1rem!important
    zoom: 83%!important
    max-width: 80%!important
    margin-right: 18vw!important
    

  .container-center-horizontal
    display: none!important


  .achtergrond-pagina-4
    // width: 23.4375rem
    height: 50rem
    flex-shrink: 0
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
  

  .witte-achtergrond-pagina-4
    // width: 21.5625rem
    width: 90%
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

  .draaien-animatie
    zoom: 220%!important
  </style>
