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
      errorMessage: '',

    };
  },
  mounted() {
    const antwoordenLijst = this.$store.getters.getAntwoorden();
  },
  methods: {
    selectProvider(event) {
      this.gekozenProvider = event.target.value;
      this.errorMessage = '';
    },

    goToStep3() {
      if (!this.gekozenProvider) {
        this.errorMessage = 'Kies alstublieft een provider voordat u doorgaat.';
        return;
      }
      this.$store.commit('ADD_ANTWOORD', { vraag: 'antwoord2', antwoord: this.gekozenProvider });
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
                <div class="container-vraag-zoveel">
                  <p class="stap-zoveel-pagina2">Stap 2 van 3</p>
                  <p class="vertel-ons">Wat is jouw huidige provider?</p>
                </div>
              </div>
              <img class="bolcom-bon-1-3" :src="bolcomBon1" alt="bolcom-bon 1" />
              <img class="image-2-3" :src="image2" alt="image 2" />



              <a href="/pagina-3" @click.prevent="goToStep3" style="text-decoration: none">
                <div class="frame-427320541-2">
                  <p class="ga-naar-de-laatste-stap diodrumcyrillic-normal-white-23-7px" style="font-weight: 700;">Ga naar de laatste stap</p>
                  <img
                    class="right-arrow-2"
                    src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow.svg"
                    alt="rightArrow"
                  />
                </div>
              </a>



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
              <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>

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
        <a href="/landingspagina">
        <div class="navbar-mobiel">
          <img class="logo-navbar-mobiel logo-navbar-mobiel-mv"
               src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"
               alt="MV logo 1" />
          <img class="logo-navbar-mobiel"
               src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png"
               alt="logo ziggo" />
          <!-- <img class="logo-navbar-mobiel" src="./trustpilot-mobiel.png" alt=""> -->
          <svg class="logo-navbar-mobiel" width="100" height="46" viewBox="0 0 100 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_13_162" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="19">
            <path d="M74.3438 0H0.367188V18.1631H74.3438V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_13_162)">
            <path d="M19.7966 6.44794H27.2806V7.85839H24.3446V15.7166H22.7327V7.8296H19.7966V6.44794ZM26.964 8.98099H28.3457V10.2763H28.3745C28.432 10.1036 28.5184 9.93088 28.6335 9.75818C28.7487 9.58547 28.9214 9.41276 29.0941 9.29762C29.2668 9.1537 29.4683 9.03856 29.6698 8.9522C29.8713 8.86585 30.1015 8.80828 30.3318 8.80828C30.5045 8.80828 30.6197 8.80828 30.6772 8.80828C30.7348 8.80828 30.8212 8.83707 30.8787 8.83707V10.2475C30.7636 10.2187 30.6772 10.2187 30.5621 10.1899C30.447 10.1899 30.3606 10.1612 30.2455 10.1612C29.9864 10.1612 29.7561 10.2187 29.5546 10.3051C29.3244 10.3914 29.1516 10.5641 28.9789 10.7369C28.8062 10.9383 28.6911 11.1686 28.576 11.4565C28.4896 11.7443 28.432 12.0609 28.432 12.4351V15.6302H26.964V8.98099ZM37.6719 15.6878H36.2327V14.7667H36.2039C36.0312 15.1121 35.7433 15.3712 35.3979 15.5727C35.0525 15.7742 34.6783 15.8893 34.3041 15.8893C33.4118 15.8893 32.7785 15.6878 32.4043 15.2273C32.0013 14.7955 31.8286 14.1334 31.8286 13.2411V8.98099H33.2966V13.0972C33.2966 13.6729 33.4118 14.1047 33.6421 14.3349C33.8723 14.5652 34.189 14.7091 34.5919 14.7091C34.9086 14.7091 35.1676 14.6516 35.3691 14.5652C35.5706 14.4789 35.7433 14.3349 35.8585 14.191C36.0024 14.0471 36.0888 13.8456 36.1463 13.6153C36.2039 13.385 36.2327 13.1548 36.2327 12.8957V9.00977H37.7007V15.6878H37.6719ZM40.205 13.529C40.2625 13.9607 40.4065 14.2486 40.6943 14.4501C40.9821 14.6228 41.3276 14.7091 41.7305 14.7091C41.8745 14.7091 42.0184 14.7091 42.1911 14.6804C42.3638 14.6516 42.5365 14.6228 42.6804 14.5652C42.8244 14.5076 42.9683 14.4213 43.0546 14.3062C43.141 14.191 43.1986 14.0471 43.1986 13.8456C43.1986 13.6441 43.1122 13.5002 42.9971 13.385C42.8531 13.2699 42.7092 13.1836 42.5077 13.0972C42.3062 13.0396 42.076 12.9533 41.8169 12.8957C41.5578 12.8381 41.2988 12.7806 41.0397 12.723C40.7519 12.6654 40.4928 12.5791 40.2337 12.4927C39.9747 12.4064 39.7444 12.2912 39.5429 12.1473C39.3414 12.0034 39.1687 11.8019 39.0536 11.5716C38.9384 11.3413 38.8809 11.0535 38.8809 10.7369C38.8809 10.3627 38.9672 10.0748 39.1399 9.81574C39.3126 9.55668 39.5429 9.38397 39.802 9.21127C40.0898 9.06734 40.3777 8.9522 40.7231 8.89463C41.0685 8.83706 41.3851 8.80828 41.673 8.80828C42.0184 8.80828 42.3638 8.83706 42.6517 8.92342C42.9683 8.98099 43.2561 9.12491 43.5152 9.26884C43.7743 9.44154 43.9758 9.64304 44.1485 9.9021C44.3212 10.1612 44.4363 10.4778 44.4651 10.852H42.9107C42.8531 10.5066 42.6804 10.2475 42.4214 10.1324C42.1623 10.0172 41.8745 9.95967 41.5578 9.95967C41.4427 9.95967 41.3276 9.95967 41.1836 9.98845C41.0397 10.0172 40.8958 10.046 40.7807 10.0748C40.6655 10.1324 40.5504 10.1899 40.464 10.2763C40.3777 10.3627 40.3201 10.4778 40.3201 10.6217C40.3201 10.7944 40.3777 10.9383 40.5216 11.0535C40.6367 11.1686 40.8094 11.255 41.0109 11.3413C41.2124 11.3989 41.4427 11.4853 41.7018 11.5428C41.9608 11.6004 42.2199 11.658 42.5077 11.7155C42.7668 11.7731 43.0259 11.8595 43.2849 11.9458C43.544 12.0322 43.7743 12.1473 43.9757 12.2912C44.1772 12.4351 44.3499 12.6366 44.4651 12.8381C44.5802 13.0396 44.6666 13.3275 44.6666 13.6729C44.6666 14.0759 44.5802 14.3925 44.3787 14.6804C44.206 14.9682 43.947 15.1697 43.6879 15.3424C43.4001 15.5151 43.0834 15.6302 42.7092 15.7166C42.3638 15.803 42.0184 15.8317 41.6442 15.8317C41.2124 15.8317 40.8382 15.7742 40.464 15.6878C40.1186 15.6015 39.802 15.4575 39.5429 15.256C39.2839 15.0546 39.0824 14.8243 38.9096 14.5364C38.7657 14.2486 38.6794 13.9032 38.6794 13.5002L40.205 13.529ZM45.0696 8.98099H46.1922V6.96606H47.6602V8.98099H48.9843V10.0748H47.6602V13.6441C47.6602 13.788 47.6602 13.932 47.689 14.0471C47.689 14.1622 47.7465 14.2486 47.7753 14.3349C47.8329 14.4213 47.8905 14.4789 47.9768 14.5076C48.0632 14.5364 48.2071 14.5652 48.3798 14.5652C48.4949 14.5652 48.5813 14.5652 48.6964 14.5652C48.8116 14.5652 48.8979 14.5364 49.0131 14.5076V15.659C48.8404 15.6878 48.6964 15.6878 48.5237 15.7166C48.3798 15.7454 48.2071 15.7454 48.0344 15.7454C47.6314 15.7454 47.3436 15.7166 47.0845 15.6302C46.8542 15.5727 46.6527 15.4575 46.5376 15.3136C46.3937 15.1697 46.3073 14.997 46.2497 14.7667C46.1922 14.5652 46.1634 14.3062 46.1634 14.0183V10.1036H45.0408L45.0696 8.98099ZM50.0493 8.98099H51.4598V9.9021H51.4886C51.69 9.49911 51.9779 9.24005 52.3521 9.06734C52.7263 8.89463 53.1293 8.80828 53.561 8.80828C54.0792 8.80828 54.5397 8.89463 54.9427 9.09613C55.3457 9.26884 55.6623 9.5279 55.9214 9.87331C56.1804 10.1899 56.3819 10.5929 56.4971 10.9959C56.641 11.4277 56.6986 11.8882 56.6986 12.3776C56.6986 12.8381 56.641 13.2699 56.5259 13.6729C56.4107 14.1047 56.238 14.4789 56.0077 14.7955C55.7775 15.1121 55.4608 15.3712 55.1154 15.5727C54.7412 15.7742 54.3382 15.8605 53.8201 15.8605C53.6186 15.8605 53.3883 15.8317 53.1868 15.803C52.9854 15.7742 52.7551 15.6878 52.5536 15.6015C52.3521 15.5151 52.1794 15.4 52.0067 15.256C51.834 15.1121 51.69 14.9682 51.5749 14.7955H51.5461V18.1345H50.0781V8.98099H50.0493ZM55.2018 12.3488C55.2018 12.0609 55.173 11.7443 55.0866 11.4565C55.0003 11.1686 54.8851 10.9096 54.7412 10.7081C54.5973 10.4778 54.3958 10.3051 54.1655 10.1899C53.9352 10.046 53.6762 9.98845 53.3596 9.98845C52.7263 9.98845 52.2657 10.1899 51.9491 10.6217C51.6325 11.0535 51.4886 11.6292 51.4886 12.3488C51.4886 12.6942 51.5173 13.0108 51.6037 13.2987C51.69 13.5865 51.8052 13.8456 51.9779 14.0471C52.1506 14.2486 52.3233 14.4213 52.5536 14.5364C52.7839 14.6516 53.0429 14.7091 53.3596 14.7091C53.705 14.7091 53.9928 14.6516 54.2231 14.5076C54.4534 14.3637 54.6549 14.191 54.7988 13.9607C54.9427 13.7305 55.0578 13.5002 55.1154 13.2123C55.173 12.9245 55.2018 12.6366 55.2018 12.3488ZM57.7924 6.44794H59.2604V7.85839H57.7924V6.44794ZM57.7924 8.98099H59.2604V15.6878H57.7924V8.98099ZM60.5845 6.44794H62.0525V15.6878H60.5845V6.44794ZM66.6005 15.8605C66.0536 15.8605 65.593 15.7742 65.1613 15.6015C64.7295 15.4288 64.3841 15.1697 64.0962 14.8818C63.8084 14.5652 63.5781 14.191 63.4342 13.7592C63.2903 13.3275 63.2039 12.8381 63.2039 12.3488C63.2039 11.8307 63.2903 11.3701 63.4342 10.9383C63.5781 10.5066 63.8084 10.1324 64.0962 9.81574C64.3841 9.49911 64.7295 9.26884 65.1613 9.09613C65.593 8.92342 66.0536 8.83707 66.6005 8.83707C67.1474 8.83707 67.608 8.92342 68.0397 9.09613C68.4715 9.26884 68.8169 9.5279 69.1048 9.81574C69.3926 10.1324 69.6229 10.5066 69.7668 10.9383C69.9107 11.3701 69.9971 11.8307 69.9971 12.3488C69.9971 12.8669 69.9107 13.3275 69.7668 13.7592C69.6229 14.191 69.3926 14.5652 69.1048 14.8818C68.8169 15.1985 68.4715 15.4288 68.0397 15.6015C67.608 15.7742 67.1474 15.8605 66.6005 15.8605ZM66.6005 14.7091C66.9171 14.7091 67.205 14.6516 67.464 14.5076C67.6943 14.3637 67.8958 14.191 68.0685 13.9607C68.2124 13.7305 68.3276 13.4714 68.4139 13.2123C68.4715 12.9245 68.5291 12.6366 68.5291 12.3488C68.5291 12.0609 68.5003 11.7731 68.4139 11.4853C68.3564 11.1974 68.2124 10.9383 68.0685 10.7369C67.9246 10.5066 67.7231 10.3339 67.464 10.1899C67.2338 10.046 66.9459 9.98845 66.6005 9.98845C66.2839 9.98845 65.996 10.046 65.737 10.1899C65.5067 10.3339 65.3052 10.5066 65.1325 10.7369C64.9886 10.9671 64.8734 11.1974 64.7871 11.4853C64.7295 11.7731 64.6719 12.0609 64.6719 12.3488C64.6719 12.6366 64.7007 12.9245 64.7871 13.2123C64.8446 13.5002 64.9886 13.7592 65.1325 13.9607C65.2764 14.191 65.4779 14.3637 65.737 14.5076C65.996 14.6516 66.2839 14.7091 66.6005 14.7091ZM70.4001 8.98099H71.5227V6.96606H72.9907V8.98099H74.3148V10.0748H72.9907V13.6441C72.9907 13.788 72.9907 13.932 73.0195 14.0471C73.0195 14.1622 73.077 14.2486 73.1058 14.3349C73.1634 14.4213 73.221 14.4789 73.3073 14.5076C73.3937 14.5364 73.5376 14.5652 73.7103 14.5652C73.8254 14.5652 73.9118 14.5652 74.0269 14.5652C74.1421 14.5652 74.2284 14.5364 74.3436 14.5076V15.659C74.1709 15.6878 74.0269 15.6878 73.8542 15.7166C73.7103 15.7454 73.5376 15.7454 73.3649 15.7454C72.9619 15.7454 72.6741 15.7166 72.415 15.6302C72.1847 15.5727 71.9832 15.4575 71.8681 15.3136C71.7242 15.1697 71.6378 14.997 71.5802 14.7667C71.5227 14.5652 71.4939 14.3062 71.4939 14.0183V10.1036H70.3713L70.4001 8.98099Z" fill="#191919"/>
            <path d="M18.0698 6.44777H11.3054L9.23287 0L7.13159 6.44777L0.367188 6.41898L5.83628 10.3913L3.73499 16.8102L9.20408 12.838L14.6732 16.8102L12.5719 10.3913L18.0698 6.44777Z" fill="#04DA8D"/>
            <path d="M13.0898 11.8594L12.6293 10.3914L9.23267 12.8381L13.0898 11.8594Z" fill="#005128"/>
            </g>
            <rect x="0.367188" y="26.8933" width="18.6124" height="18.6124" fill="#04DA8D"/>
            <g clip-path="url(#clip0_13_162)">
            <path d="M16.7804 34.6812H11.6063L10.0081 29.7568L8.40488 34.6812L3.23071 34.6762L7.42099 37.7228L5.8178 42.6422L10.0081 39.6007L14.1934 42.6422L12.5952 37.7228L16.7804 34.6812Z" fill="white"/>
            <path d="M12.9545 38.8366L12.5949 37.7229L10.0078 39.6008L12.9545 38.8366Z" fill="#00532C"/>
            </g>
            <rect x="20.4114" y="26.8934" width="18.6124" height="18.6124" fill="#04DA8D"/>
            <g clip-path="url(#clip1_13_162)">
            <path d="M36.8244 34.6814H31.6502L30.052 29.7569L28.4488 34.6814L23.2747 34.6764L27.4649 37.7229L25.8617 42.6424L30.052 39.6008L34.2373 42.6424L32.6391 37.7229L36.8244 34.6814Z" fill="white"/>
            <path d="M32.9982 38.8368L32.6386 37.7231L30.0515 39.6009L32.9982 38.8368Z" fill="#00532C"/>
            </g>
            <rect x="40.4553" y="26.8934" width="18.6124" height="18.6124" fill="#04DA8D"/>
            <g clip-path="url(#clip2_13_162)">
            <path d="M56.8686 34.6814H51.6944L50.0962 29.7569L48.493 34.6814L43.3188 34.6764L47.5091 37.7229L45.9059 42.6424L50.0962 39.6008L54.2815 42.6424L52.6833 37.7229L56.8686 34.6814Z" fill="white"/>
            <path d="M53.0426 38.8368L52.683 37.7231L50.0959 39.6009L53.0426 38.8368Z" fill="#00532C"/>
            </g>
            <rect x="60.4995" y="26.8934" width="18.6124" height="18.6124" fill="#04DA8D"/>
            <g clip-path="url(#clip3_13_162)">
            <path d="M76.9128 34.6814H71.7386L70.1404 29.7569L68.5372 34.6814L63.363 34.6764L67.5533 37.7229L65.9501 42.6424L70.1404 39.6008L74.3257 42.6424L72.7275 37.7229L76.9128 34.6814Z" fill="white"/>
            <path d="M73.0868 38.8368L72.7272 37.7231L70.1401 39.6009L73.0868 38.8368Z" fill="#00532C"/>
            </g>
            <rect x="80.5435" y="26.8934" width="18.6124" height="18.6124" fill="#C5C5C5"/>
            <g clip-path="url(#clip4_13_162)">
            <path d="M96.9565 34.6814H91.7823L90.1841 29.7569L88.5809 34.6814L83.4067 34.6764L87.597 37.7229L85.9938 42.6424L90.1841 39.6008L94.3694 42.6424L92.7712 37.7229L96.9565 34.6814Z" fill="white"/>
            <path d="M93.1308 38.8368L92.7712 37.7231L90.1841 39.6009L93.1308 38.8368Z" fill="#00532C"/>
            </g>
            <defs>
            <clipPath id="clip0_13_162">
            <rect width="13.5497" height="12.8855" fill="white" transform="translate(3.23071 29.7568)"/>
            </clipPath>
            <clipPath id="clip1_13_162">
            <rect width="13.5497" height="12.8855" fill="white" transform="translate(23.2747 29.7569)"/>
            </clipPath>
            <clipPath id="clip2_13_162">
            <rect width="13.5497" height="12.8855" fill="white" transform="translate(43.3188 29.7569)"/>
            </clipPath>
            <clipPath id="clip3_13_162">
            <rect width="13.5497" height="12.8855" fill="white" transform="translate(63.363 29.7569)"/>
            </clipPath>
            <clipPath id="clip4_13_162">
            <rect width="13.5497" height="12.8855" fill="white" transform="translate(83.4067 29.7569)"/>
            </clipPath>
            </defs>
            </svg>
        </div>
      </a>

        <div class="achtergrond-pagina-2">
          <div class="witte-container-pagina-2 hoogte-witte-container" 
          :style="errorMessage ? { height: '45rem' } : {}">
 
            <p class="stap1">Stap 2 van 3</p>
            <p class="vertel-ons">Wat is jouw huidige provider?</p>

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

            <p v-if="errorMessage" class="error-text-mobiel">{{ errorMessage }}</p>


            <!-- Knop voor naar de volgende stap -->
            <a href="/pagina-3" @click.prevent="goToStep3" style="text-decoration: none">
              <button class="doe-nu-mee-knop doe-nu-mee-knop-2">
                <div class="text-in-knop">
                  Laatste stap
                  <span style="margin-left: 27px">&#8594;</span>
                </div>
              </button>
            </a>



          </div>
          <div class="container-afbeelding-prijzen-mobiel-2"
          :style="errorMessage ? { top: '912px' } : {}">
          <img src="/img/afbeeldingen-samen-mobiel.b5031825.png" alt="doe het alsjeblieft">
    
    
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

.error-text-mobiel
  color: red!important
  font-size: 1.3rem!important
  z-index: 99!important
  position: relative
  font-family: "DM Sans"
  font-weight: 700
  width:  90%
  margin-top: 22px
  text-align: left


.error-text
  color: red!important
  font-size: 1.3rem!important
  z-index: 99!important
  position: relative
  font-family: "DM Sans"
  font-weight: 700
  width:  75%
  margin-top: 12px
  text-align: left

.stap-zoveel-pagina2
  position: relative
  right: 190px
  color: #F48C02
  font-family: "DM Sans"
  font-size: 1.25rem
  font-style: normal
  font-weight: 400
  line-height: 150%




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
  right: 5px 
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
  border-radius: 200%
  position: absolute
  top: 49%
  left: 49%
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



@media (min-width: 1920px)
  .container-center-horizontal
    min-width: 100vw !important
    max-width: 100vw !important
    zoom: 110%

  .pagina-2
    zoom: 100% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2080px)
  .pagina-2
    zoom: 105% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2200px)
  .pagina-2
    zoom: 110% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2300px)
  .pagina-2
    zoom: 115% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2400px)
  .pagina-2
    zoom: 120% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2500px)
  .pagina-2
    zoom: 125% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2600px)
  .pagina-2
    zoom: 130% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2700px)
  .pagina-2
    zoom: 135% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2800px)
  .pagina-2
    zoom: 140% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2900px)
  .pagina-2
    zoom: 145% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3000px)
  .pagina-2
    zoom: 150% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3100px)
  .pagina-2
    zoom: 155% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3200px)
  .pagina-2
    zoom: 160% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3300px)
  .pagina-2
    zoom: 165% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3400px)
  .pagina-2
    zoom: 170% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3500px)
  .pagina-2
    zoom: 175% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3600px)
  .pagina-2
    zoom: 180% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3700px)
  .pagina-2
    zoom: 185% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3800px)
  .pagina-2
    zoom: 190% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3900px)
  .pagina-2
    zoom: 195% !important
    position: relative !important
    right: 5% !important

@media (min-width: 4000px)
  .pagina-2
    zoom: 200% !important
    position: relative !important
    right: 5% !important



















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


@media (min-width: 505px)
  .container-mobiel
    display: none!important

// hieronder komen alle mobile styles
@media (max-width: 499px)


  .doe-nu-mee-knop-2
    position: relative
    left: 20%

  .container-afbeelding-prijzen-mobiel-2

    position: relative
    top: 843px
    zoom: 83%!important
    max-width: 80%!important
    margin-right: 18vw!important


  .witte-container-pagina-2
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.2)
    width: 90%
    height: 41rem
    flex-shrink: 0
    position: absolute
    top: 9rem
    left: 5vw
    padding: 0 1rem
    // deze padding toegevoegd, wel testen met safari moebiel


  .achtergrond-pagina-2
    // width: 23.4375rem
    height: 69rem
    flex-shrink: 0
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)

  .container-afbeelding-prijzen-mobiel
  




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

