<script>
import Frame1 from "./Frame1";
import Frame1000004784 from "./Frame1000004784";
import { mapGetters } from 'vuex';

export default {
  name: "Pagina5",
  components: {
    Frame1,
    Frame1000004784,
  },
  props: [
    "hoeKunnenWijJouBereiken",
    "layer21",
    "layer22",
    "layer23",
    "group",
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
  data() {
    return {
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      chosenProduct: '',  
      gekozenProductId: null,
      gekozenMerkId: null,
      errors: {}, 
      successMessage: '',
      errorMessage: '',
      formData: {
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: ''
      },
      twoHoursLater: new Date(Date.now() + 7200000) // Voeg dit toe
    };
  },
  computed: {
    ...mapGetters(['getAntwoorden']),
    heeftNaamFout() {
      return this.errors.voornaam || this.errors.achternaam;
    }
  },
  mounted() {
    const antwoordenLijst = this.getAntwoorden;

    const gekozenProduct = antwoordenLijst.antwoord1;
    const gekozenMerk = antwoordenLijst.antwoord2;

    this.gekozenProductId = this.getProductId(gekozenProduct);
    this.gekozenMerkId = this.getMerkId(gekozenMerk);
    this.chosenProduct = gekozenProduct || 'geen product gekozen';

    this.twoHoursLater = new Date(Date.now() + 7200000);
  },
  methods: {
    async submitForm() {
      this.errors = {}; // Reset errors
      this.successMessage = ''; 
      this.errorMessage = '';

      // Validaties voor alle velden
      const isVoornaamValid = this.validateVoornaam();
      const isAchternaamValid = this.validateAchternaam();
      const isEmailValid = this.validateEmail();
      const isTelefoonnummerValid = this.validateTelefoonnummer();

      // Als één van de validaties fout is, tonen we alle foutmeldingen
      if (!isVoornaamValid || !isAchternaamValid || !isEmailValid || !isTelefoonnummerValid) {
        return; // Als er fouten zijn, stoppen we met het verzenden van het formulier
      }

      const antwoordenLijst = this.getAntwoorden;
      if (!antwoordenLijst || !antwoordenLijst.antwoord1 || !antwoordenLijst.antwoord2) {
        console.error('Onvoldoende antwoorden om te verwerken.');
        return;
      }

      const gekozenProductId = this.getProductId(antwoordenLijst.antwoord1);
      const gekozenMerkId = this.getMerkId(antwoordenLijst.antwoord2);

      if (!gekozenProductId || !gekozenMerkId) {
        console.error('Kon geen geldige ID\'s vinden voor het product of merk.');
        return;
      }

      const url = 'https://leadgen.republish.nl/api/sponsors/2410/leads';
      const username = '199';
      const password = 'b41c7c41c8d595fbd66dea6a4f70836fbc5e3afe';
      const authHeader = 'Basic ' + btoa(`${username}:${password}`);

      const data = {
        language: 'nl_NL',
        publisher_id: 'morris de publisher :)',
        site_custom_url: 'https://ziggoprijswinnnen.nl',
        site_custom_name: 'ziggo prijs winnen',
        ip: '123.45.67.89',
        optin_timestamp: this.twoHoursLater.toISOString().slice(0, 19).replace('T', ' '),

        firstname: this.formData.voornaam,
        lastname: this.formData.achternaam,
        email: this.formData.email,
        phone_number: this.formData.telefoonnummer,
        answers: [5269, gekozenProductId, gekozenMerkId],
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(data),
        });

        if (response.status === 201) {
          this.$router.push('/bedankt2');
        } else {
          this.$router.push('/bedankt');
        }
      } catch (error) {
        console.error('Er is een fout opgetreden bij het versturen van het formulier', error);
        if (error.response && error.response.status === 409) {
          console.log('Duplicaat e-mailadres gedetecteerd.');
          this.$router.push('/bedankt');
        } else {
          this.errorMessage = 'Netwerk- of serverfout: ' + error.message;
        }
      }
    },

    validateVoornaam() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam.';
        return false;
      }
      this.errors.voornaam = '';
      return true;
    },

    validateAchternaam() {
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.achternaam.match(regex)) {
        this.errors.achternaam = 'Ongeldige achternaam.';
        return false;
      }
      this.errors.achternaam = '';
      return true;
    },

    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|nl|info|biz|co|io|me|tv)$/i;
      const containsApostrophe = /'/;
      if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        return false;
      }
      this.errors.email = '';
      return true;
    },

    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
      const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
      if (!phoneNumber.match(dutchRegex)) {
        return null;
      }
      return phoneNumber;
    },

    validateTelefoonnummer() {
      const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);
      if (!phoneNumber) {
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        return false;
      }
      this.errors.telefoonnummer = '';
      return true;
    },

    getProductId(product) {
      const productMap = {
        'SAMSUNG 60" TV': 5284,
        'Playstation 5 Slim Disk': 5287,
        'Bol.com cadeaubon': 5290,
      };
      return productMap[product] || null;
    },

    getMerkId(merk) {
      const merkMap = {
        'Odido': 5272,
        'KPN': 5275,
        'Ziggo': 5278,
        'Anders': 5281,
      };
      return merkMap[merk] || null;
    }
  }
};
</script>











<template>
  <center>
    <div class="overkoepelende-container">
  <div class="container-center-horizontal">
    <div class="pagina-5 screen">
      <div class="overlap-group1">
        <div class="rectangle-30-6"></div>
        <div class="background-6" :style="errorMessage ? {height: '885px!important' } : {height: '885px'}"></div>
        <img
        class="line-4"
        src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/line-4.svg"
        alt="Line 4"
      />
        <p class="hoe-kunnen-wij-jou-bereiken">Hoe kunnen wij jou bereiken?</p>



        <div class="frame-427320569">

          <form class="form-pagina5" @submit.prevent="submitForm">
            <div class="name-group">
              <div class="form-group">
                <label for="voornaam"></label>

                <!-- <img 
                class="form-icoon" 
                src="./naam-icoon.svg" 
                alt="Naam Icon" 
                :class="{'input-error-icoon': heeftNaamFout}" 
              /> -->
              <svg class="form-icoon" :class="{'input-error-icoon': heeftNaamFout}"  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer 2">
                <g id="02 User">
                <path id="Vector" d="M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
                </svg>
                
              <input
              type="text"
              id="voornaam"
              v-model="formData.voornaam"
              @blur="validateVoornaam"
              :class="{'input-error': errors.voornaam}"
              required
              placeholder="Vul je voornaam in"
            />
                <span v-if="errors.voornaam" class="error-message">{{ errors.voornaam }}</span>
              </div>
        
              <div class="form-group">
                <label for="achternaam"></label>
                <svg class="form-icoon" :class="{'input-error-icoon': heeftNaamFout}"  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Layer 2">
                  <g id="02 User">
                  <path id="Vector" d="M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_2" d="M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  </g>
                  </svg>
                  

                <input
                type="text"
                id="achternaam"
                v-model="formData.achternaam"
                @blur="validateAchternaam"
                :class="{'input-error': errors.achternaam}"
                required
                placeholder="Vul je achternaam in"
              />
              
                <span v-if="errors.achternaam" class="error-message">{{ errors.achternaam }}</span>
              </div>
            </div>
        
            <div class="form-group full-width">
              <label for="email"></label>
              <!-- <img class="form-icoon-2" src="./email-icoon.svg" alt="Email Icon" /> -->

              <svg class="form-icoon-2" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer 2">
                <g id="14 Mail">
                <path id="Vector" d="M19.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H19.5C20.0523 14.5 20.5 14.0523 20.5 13.5V1.5C20.5 0.947715 20.0523 0.5 19.5 0.5Z" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M0.847656 0.743286L9.92671 7.09829C10.0948 7.21594 10.295 7.27905 10.5002 7.27905C10.7053 7.27905 10.9055 7.21594 11.0736 7.09829L20.1527 0.743286" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M20.2073 14.2071L12.4922 6.49194" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_4" d="M8.50812 6.49194L0.792969 14.2071" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
                </svg>
                
              <input
              type="email"
              id="email"
              v-model="formData.email"
              @blur="validateEmail"
              :class="{'input-error': errors.email}"
              required
              placeholder="Vul je e-mailadres in"
            />

              <span v-if="errors.email" class="error-message error-message-email">{{ errors.email }}</span>
            </div>
        
            <div class="form-group full-width">
              <label for="telefoonnummer"></label>

              <!-- <img class="form-icoon-2" src="./tel-nummer-icoon.svg" alt="Telefoonnummer Icon" /> -->

              <svg class="form-icoon-2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                <path id="Vector" d="M17.9615 14.0704C17.7115 13.8208 17.3726 13.6806 17.0192 13.6806C16.6659 13.6806 16.327 13.8208 16.0769 14.0704L14.6339 15.5134C13.403 16.7458 10.8512 14.8893 9.61435 13.6522C7.80256 11.8406 6.51948 9.37584 7.5082 8.3871L8.95139 6.94407C9.20096 6.69401 9.34112 6.35513 9.34112 6.00183C9.34112 5.64853 9.20096 5.30966 8.95139 5.05959L5.47391 1.58202C5.22381 1.33243 4.88492 1.19226 4.53159 1.19226C4.17827 1.19226 3.83937 1.33243 3.58928 1.58202L2.14628 3.02505C-1.50473 6.67616 1.45865 12.9659 5.75722 17.2644C9.66627 21.1736 16.1602 24.7116 19.9962 20.8755L21.4394 19.4324C21.6889 19.1823 21.829 18.8435 21.829 18.4902C21.829 18.1369 21.6889 17.7981 21.4394 17.5479L17.9615 14.0704ZM4.07791 2.07047C4.19845 1.95024 4.36174 1.88273 4.53199 1.88273C4.70223 1.88273 4.86553 1.95024 4.98607 2.07047L8.46276 5.54823C8.58287 5.66863 8.65032 5.83176 8.65032 6.00183C8.65032 6.1719 8.58287 6.33503 8.46276 6.45543L7.26398 7.65424L2.87913 3.26928L4.07791 2.07047ZM6.24585 16.776C2.84458 13.3746 -0.743254 7.36855 2.39879 3.76621L6.79746 8.16559C5.78032 9.64968 7.23417 12.2495 9.12552 14.1409C10.5715 15.5867 13.1866 17.4151 14.8586 16.2263L19.2551 20.6235C15.6564 23.7627 9.65442 20.1846 6.24585 16.776ZM20.9508 18.9438L19.752 20.1428L15.3672 15.7576L16.5659 14.5588C16.6865 14.4386 16.8498 14.3711 17.02 14.3711C17.1903 14.3711 17.3536 14.4386 17.4741 14.5588L20.9508 18.0372C21.0707 18.1576 21.1381 18.3206 21.1381 18.4905C21.1381 18.6604 21.0707 18.8234 20.9508 18.9438Z" fill="#49B7AC"/>
                <path id="Vector_2" d="M11.414 7.91122C13.206 8.4966 14.3618 9.65257 14.9479 11.4452C14.989 11.5761 15.0556 11.6975 15.1439 11.8025C15.2322 11.9074 15.3405 11.9937 15.4624 12.0565C15.5843 12.1193 15.7175 12.1573 15.8542 12.1682C15.9909 12.1792 16.1285 12.1629 16.2588 12.1203C16.3892 12.0777 16.5098 12.0096 16.6137 11.9201C16.7176 11.8305 16.8026 11.7212 16.864 11.5986C16.9253 11.4759 16.9617 11.3423 16.971 11.2054C16.9803 11.0686 16.9624 10.9313 16.9182 10.8014C16.1246 8.37025 14.4899 6.73433 12.0584 5.94124C11.929 5.89898 11.7926 5.88262 11.6569 5.89308C11.5212 5.90355 11.3889 5.94064 11.2675 6.00224C11.1462 6.06384 11.0381 6.14874 10.9496 6.2521C10.861 6.35545 10.7937 6.47524 10.7514 6.60461C10.7092 6.73399 10.6928 6.87042 10.7033 7.00613C10.7137 7.14183 10.7508 7.27414 10.8124 7.3955C10.874 7.51687 10.9589 7.62491 11.0623 7.71347C11.1656 7.80202 11.2854 7.86935 11.4148 7.91161L11.414 7.91122ZM11.4069 6.81883C11.4355 6.73177 11.4974 6.65959 11.5791 6.6181C11.6608 6.57662 11.7556 6.56921 11.8428 6.59751C14.0524 7.31932 15.5392 8.80578 16.2606 11.0154C16.289 11.1026 16.2817 11.1974 16.2402 11.2792C16.1988 11.3609 16.1266 11.4228 16.0395 11.4514C15.9524 11.4785 15.8581 11.4706 15.7767 11.4293C15.6954 11.388 15.6333 11.3166 15.6038 11.2302C14.9454 9.21348 13.6451 7.91339 11.6286 7.25456C11.5415 7.22605 11.4693 7.16417 11.4277 7.0825C11.3862 7.00083 11.3787 6.90601 11.4069 6.81883Z" fill="#49B7AC"/>
                <path id="Vector_3" d="M12.528 5.2831C15.0892 6.11863 16.7409 7.77074 17.5772 10.3314C17.6626 10.5927 17.8483 10.8094 18.0934 10.9338C18.3385 11.0582 18.6231 11.0802 18.8844 10.9948C19.1457 10.9094 19.3624 10.7237 19.4868 10.4786C19.6112 10.2334 19.6331 9.94892 19.5477 9.6876C18.5061 6.49829 16.3611 4.35319 13.1718 3.31174C13.042 3.2676 12.9047 3.24967 12.7678 3.25899C12.631 3.26831 12.4974 3.30469 12.3747 3.36602C12.252 3.42736 12.1428 3.51243 12.0532 3.61631C11.9637 3.72019 11.8956 3.84081 11.853 3.97117C11.8104 4.10154 11.7941 4.23907 11.8051 4.37578C11.816 4.5125 11.854 4.64568 11.9167 4.76761C11.9795 4.88955 12.0659 4.99781 12.1708 5.08613C12.2757 5.17444 12.3972 5.24106 12.528 5.28211V5.2831ZM12.5213 4.19071C12.5354 4.14752 12.5578 4.10753 12.5873 4.07302C12.6168 4.03852 12.6529 4.01017 12.6934 3.98962C12.7338 3.96906 12.778 3.95669 12.8233 3.95322C12.8686 3.94975 12.9141 3.95524 12.9572 3.96938C15.9251 4.93779 17.9215 6.93422 18.8901 9.903C18.9185 9.99013 18.9111 10.085 18.8696 10.1667C18.8282 10.2484 18.756 10.3103 18.669 10.3389C18.5819 10.3661 18.4876 10.3581 18.4062 10.3168C18.3249 10.2755 18.2628 10.2041 18.2333 10.1178C17.3239 7.33224 15.5285 5.53601 12.742 4.62644C12.6549 4.59773 12.5827 4.53562 12.5413 4.45374C12.4999 4.37186 12.4927 4.2769 12.5213 4.18972V4.19071Z" fill="#49B7AC"/>
                <path id="Vector_4" d="M22.4485 8.89822C21.0811 4.7105 18.2637 1.89216 14.075 0.524943C13.9456 0.482695 13.8092 0.466348 13.6735 0.476836C13.5378 0.487324 13.4054 0.524441 13.2841 0.586068C13.1627 0.647695 13.0547 0.732626 12.9661 0.83601C12.8776 0.939394 12.8102 1.05921 12.768 1.18861C12.7257 1.31801 12.7094 1.45447 12.7199 1.59019C12.7304 1.72591 12.7675 1.85823 12.8291 1.97961C12.8907 2.10098 12.9757 2.20903 13.079 2.29758C13.1824 2.38614 13.3022 2.45346 13.4316 2.49571C17.006 3.66273 19.3106 5.96755 20.4778 9.54185C20.5631 9.80319 20.7487 10.0199 20.9938 10.1444C21.1152 10.2061 21.2475 10.2432 21.3832 10.2537C21.5189 10.2642 21.6554 10.2479 21.7848 10.2056C21.9142 10.1634 22.034 10.0961 22.1374 10.0075C22.2407 9.91899 22.3257 9.81095 22.3873 9.68959C22.449 9.56822 22.4861 9.4359 22.4966 9.30019C22.5071 9.16447 22.4907 9.02802 22.4485 8.89862V8.89822ZM21.57 9.54837C21.483 9.57522 21.389 9.56713 21.3079 9.52581C21.2268 9.48449 21.165 9.41319 21.1356 9.32705C19.8942 5.52826 17.4447 3.07872 13.646 1.83826C13.6024 1.82458 13.562 1.80239 13.527 1.77296C13.492 1.74353 13.4632 1.70745 13.4423 1.66682C13.4213 1.62618 13.4087 1.58179 13.405 1.53623C13.4014 1.49066 13.4068 1.44482 13.421 1.40137C13.4351 1.35791 13.4578 1.3177 13.4876 1.28307C13.5175 1.24844 13.5539 1.22007 13.5948 1.19961C13.6356 1.17915 13.6802 1.16701 13.7258 1.16388C13.7714 1.16076 13.8172 1.16671 13.8604 1.1814C17.8279 2.47675 20.4962 5.14485 21.7919 9.11323C21.8199 9.20025 21.8123 9.29486 21.7707 9.37628C21.7291 9.45771 21.6569 9.51931 21.57 9.54758V9.54837Z" fill="#49B7AC"/>
                </g>
                </svg>
                
              <input
              type="tel"
              id="telefoonnummer"
              v-model="formData.telefoonnummer"
              @blur="validateTelefoonnummer"
              :class="{'input-error': errors.telefoonnummer}"
              required
              placeholder="Vul je telefoonnummer in"
            />
            
            
            <span v-if="errors.telefoonnummer" class="error-message error-message-tel">{{ errors.telefoonnummer }}</span>
          </div>
          </form>
          
          
          




          <!-- dit is de knop -->
          <div class="frame-427320570">
            <div class="frame-2-1">

              <button class="frame-2-1 invisible-button" @click="submitForm">
                <div class="bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px" style="font-weight: 700;">Bevestig mijn deelname</div>
                <img
                  class="right-arrow-4"
                  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/rightarrow-4.svg"
                  alt="rightArrow"
                />
              </button>
              

            </div>
          </div>



          <!-- tekst onder knop -->
          <p class="met-het-bevestigen-v">{{ metHetBevestigenV }}</p>
        </div>
        <frame1 />



        <p class="gewonnen"><span class="gefeliciteerd">Gefeliciteerd!<br></span> Jij maakt nu kans op de <span class="gekozen-prijs">{{ chosenProduct }}</span></p>
        

        




        <!-- dit is de afbeelding voor de gekozen prijs -->
        <img class="image-2-6" :src="image2" alt="image 2" />
        
        
        <!-- dit is het bolletje met de prijs -->
        
        <div class="group-2-6">
          <div class="overlap-group-2">
            <div class="twv-18">{{ tWV }}</div>
            <h1 class="text-19 valign-text-bottom" style="font-weight: 700;">€599,-</h1>
          </div>
        </div>


        <img
          class="vector-1"
          src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/vector-1.svg"
          alt="Vector"
        />

        <!-- dit moet nog dynamisch worden gerenderd -->
         <p class="jouw-gekozen-prijs">Jouw gekozen prijs:</p>
        <!-- <img class="jouw-gekozen-prijs" :src="jouwGekozenPrijs" alt="Jouw gekozen prijs:" /> -->
        <div class="playstation-5-slim-disk">Playstation 5 Slim Disk</div>


        <!-- dit heeft te maken met de afbeelding in de navbar -->
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



  <div class="container-mobiel container-mobiel-pagina-5">
    <div class="navbar-mobiel">
      <!-- Navbar content -->
      <img  class="logo-navbar-mobiel logo-navbar-mobiel-mv"  src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"  alt="MV logo 1" />  
      <img  class="logo-navbar-mobiel" src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/image-6.png" alt="logo ziggo"/>
      <img class="logo-navbar-mobiel" src="./trustpilot-mobiel.png" alt="">
    </div>


  
    <div class="achtergrond-pagina-5"
    :style="errorMessage ? {height: '77rem' } : {}">
      <div class="witte-container-pagina-5">


        <p class="gewonnen-mobiel"><span class="gefeliciteerd-mobiel">Gefeliciteerd!<br></span> <span class="blauw-mobiel">Jij maakt nu kans op de </span><span class="gefeliciteerd-mobiel">{{ chosenProduct }}</span></p>
        <hr class="lijn-2">
        <p class="hoe-kunnen-wij-jou-bereiken-mobiel">Hoe kunnen wij jou bereiken?</p>


  <form class="form-pagina5" @submit.prevent="submitForm">
    <div class="form-group-mobiel full-width">
      <label for="voornaam"></label>



      <!-- <img 
      class="form-icoon-mobiel" 
      src="./naam-icoon.svg" 
      alt="Naam Icon" 
      :class="{'input-error-icoon-mobiel': errors.voornaam || errors.achternaam}" 
    />       -->
    

    <svg class="form-icoon-mobiel" :class="{'input-error-icoon-mobiel': errors.voornaam || errors.achternaam}"  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer 2">
      <g id="02 User">
      <path id="Vector" d="M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_2" d="M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </g>
      </svg>


        <input
      type="text"
      id="voornaam"
      v-model="formData.voornaam"
      @blur="validateVoornaam"
      :class="{'input-error-mobiel': errors.voornaam}"
      required
      placeholder="Vul je voornaam in"
    />
      <span v-if="errors.voornaam" class="error-message">{{ errors.voornaam }}</span>
    </div>
    <div class="form-group-mobiel full-width">
      <label for="achternaam"></label>


      <svg class="form-icoon-mobiel" :class="{'input-error-icoon-mobiel': errors.voornaam || errors.achternaam}"  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer 2">
        <g id="02 User">
        <path id="Vector" d="M1.5 21.5C1.5 18.8478 2.55357 16.3043 4.42893 14.4289C6.3043 12.5536 8.84784 11.5 11.5 11.5C14.1522 11.5 16.6957 12.5536 18.5711 14.4289C20.4464 16.3043 21.5 18.8478 21.5 21.5H1.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M11.5 11.5C14.2614 11.5 16.5 9.26142 16.5 6.5C16.5 3.73858 14.2614 1.5 11.5 1.5C8.73858 1.5 6.5 3.73858 6.5 6.5C6.5 9.26142 8.73858 11.5 11.5 11.5Z" stroke="#49B7AC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
        </svg>
      <!-- <img 
      class="form-icoon-mobiel" 
      src="./naam-icoon.svg" 
      alt="Achternaam Icon" 
      :class="{'input-error-icoon-mobiel': errors.voornaam || errors.achternaam}" 
    />       -->
    <input
    type="text"
    id="achternaam"
    v-model="formData.achternaam"
    @blur="validateAchternaam"
    :class="{'input-error-mobiel': errors.achternaam}"
    required
    placeholder="Vul je achternaam in"
  />
      <span v-if="errors.achternaam" class="error-message">{{ errors.achternaam }}</span>
    </div>
    <div class="form-group-mobiel full-width">
      <label for="email"></label>


      <!-- <img 
      class="form-icoon-2-mobiel" 
      src="./email-icoon.svg" 
      alt="Email Icon" 
      :class="{'input-error-icoon-mobiel': errors.email}" 
    /> -->


    <svg :class="{'input-error-icoon-mobiel': errors.email}" class="form-icoon-2-mobiel" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer 2">
      <g id="14 Mail">
      <path id="Vector" d="M19.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H19.5C20.0523 14.5 20.5 14.0523 20.5 13.5V1.5C20.5 0.947715 20.0523 0.5 19.5 0.5Z" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_2" d="M0.847656 0.743286L9.92671 7.09829C10.0948 7.21594 10.295 7.27905 10.5002 7.27905C10.7053 7.27905 10.9055 7.21594 11.0736 7.09829L20.1527 0.743286" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_3" d="M20.2073 14.2071L12.4922 6.49194" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_4" d="M8.50812 6.49194L0.792969 14.2071" stroke="#49B7AC" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </g>
      </svg>


    <input
    type="email"
    id="email"
    v-model="formData.email"
    @blur="validateEmail"
    :class="{'input-error-mobiel': errors.email}"
    required
    placeholder="Vul je e-mailadres in"
  />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>
    <div class="form-group-mobiel full-width">
      <label for="telefoonnummer"></label>

      <svg class="form-icoon-2-mobiel"  :class="{'input-error-icoon-mobiel': errors.telefoonnummer}" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
        <path id="Vector" d="M17.9615 14.0704C17.7115 13.8208 17.3726 13.6806 17.0192 13.6806C16.6659 13.6806 16.327 13.8208 16.0769 14.0704L14.6339 15.5134C13.403 16.7458 10.8512 14.8893 9.61435 13.6522C7.80256 11.8406 6.51948 9.37584 7.5082 8.3871L8.95139 6.94407C9.20096 6.69401 9.34112 6.35513 9.34112 6.00183C9.34112 5.64853 9.20096 5.30966 8.95139 5.05959L5.47391 1.58202C5.22381 1.33243 4.88492 1.19226 4.53159 1.19226C4.17827 1.19226 3.83937 1.33243 3.58928 1.58202L2.14628 3.02505C-1.50473 6.67616 1.45865 12.9659 5.75722 17.2644C9.66627 21.1736 16.1602 24.7116 19.9962 20.8755L21.4394 19.4324C21.6889 19.1823 21.829 18.8435 21.829 18.4902C21.829 18.1369 21.6889 17.7981 21.4394 17.5479L17.9615 14.0704ZM4.07791 2.07047C4.19845 1.95024 4.36174 1.88273 4.53199 1.88273C4.70223 1.88273 4.86553 1.95024 4.98607 2.07047L8.46276 5.54823C8.58287 5.66863 8.65032 5.83176 8.65032 6.00183C8.65032 6.1719 8.58287 6.33503 8.46276 6.45543L7.26398 7.65424L2.87913 3.26928L4.07791 2.07047ZM6.24585 16.776C2.84458 13.3746 -0.743254 7.36855 2.39879 3.76621L6.79746 8.16559C5.78032 9.64968 7.23417 12.2495 9.12552 14.1409C10.5715 15.5867 13.1866 17.4151 14.8586 16.2263L19.2551 20.6235C15.6564 23.7627 9.65442 20.1846 6.24585 16.776ZM20.9508 18.9438L19.752 20.1428L15.3672 15.7576L16.5659 14.5588C16.6865 14.4386 16.8498 14.3711 17.02 14.3711C17.1903 14.3711 17.3536 14.4386 17.4741 14.5588L20.9508 18.0372C21.0707 18.1576 21.1381 18.3206 21.1381 18.4905C21.1381 18.6604 21.0707 18.8234 20.9508 18.9438Z" fill="#49B7AC"/>
        <path id="Vector_2" d="M11.414 7.91122C13.206 8.4966 14.3618 9.65257 14.9479 11.4452C14.989 11.5761 15.0556 11.6975 15.1439 11.8025C15.2322 11.9074 15.3405 11.9937 15.4624 12.0565C15.5843 12.1193 15.7175 12.1573 15.8542 12.1682C15.9909 12.1792 16.1285 12.1629 16.2588 12.1203C16.3892 12.0777 16.5098 12.0096 16.6137 11.9201C16.7176 11.8305 16.8026 11.7212 16.864 11.5986C16.9253 11.4759 16.9617 11.3423 16.971 11.2054C16.9803 11.0686 16.9624 10.9313 16.9182 10.8014C16.1246 8.37025 14.4899 6.73433 12.0584 5.94124C11.929 5.89898 11.7926 5.88262 11.6569 5.89308C11.5212 5.90355 11.3889 5.94064 11.2675 6.00224C11.1462 6.06384 11.0381 6.14874 10.9496 6.2521C10.861 6.35545 10.7937 6.47524 10.7514 6.60461C10.7092 6.73399 10.6928 6.87042 10.7033 7.00613C10.7137 7.14183 10.7508 7.27414 10.8124 7.3955C10.874 7.51687 10.9589 7.62491 11.0623 7.71347C11.1656 7.80202 11.2854 7.86935 11.4148 7.91161L11.414 7.91122ZM11.4069 6.81883C11.4355 6.73177 11.4974 6.65959 11.5791 6.6181C11.6608 6.57662 11.7556 6.56921 11.8428 6.59751C14.0524 7.31932 15.5392 8.80578 16.2606 11.0154C16.289 11.1026 16.2817 11.1974 16.2402 11.2792C16.1988 11.3609 16.1266 11.4228 16.0395 11.4514C15.9524 11.4785 15.8581 11.4706 15.7767 11.4293C15.6954 11.388 15.6333 11.3166 15.6038 11.2302C14.9454 9.21348 13.6451 7.91339 11.6286 7.25456C11.5415 7.22605 11.4693 7.16417 11.4277 7.0825C11.3862 7.00083 11.3787 6.90601 11.4069 6.81883Z" fill="#49B7AC"/>
        <path id="Vector_3" d="M12.528 5.2831C15.0892 6.11863 16.7409 7.77074 17.5772 10.3314C17.6626 10.5927 17.8483 10.8094 18.0934 10.9338C18.3385 11.0582 18.6231 11.0802 18.8844 10.9948C19.1457 10.9094 19.3624 10.7237 19.4868 10.4786C19.6112 10.2334 19.6331 9.94892 19.5477 9.6876C18.5061 6.49829 16.3611 4.35319 13.1718 3.31174C13.042 3.2676 12.9047 3.24967 12.7678 3.25899C12.631 3.26831 12.4974 3.30469 12.3747 3.36602C12.252 3.42736 12.1428 3.51243 12.0532 3.61631C11.9637 3.72019 11.8956 3.84081 11.853 3.97117C11.8104 4.10154 11.7941 4.23907 11.8051 4.37578C11.816 4.5125 11.854 4.64568 11.9167 4.76761C11.9795 4.88955 12.0659 4.99781 12.1708 5.08613C12.2757 5.17444 12.3972 5.24106 12.528 5.28211V5.2831ZM12.5213 4.19071C12.5354 4.14752 12.5578 4.10753 12.5873 4.07302C12.6168 4.03852 12.6529 4.01017 12.6934 3.98962C12.7338 3.96906 12.778 3.95669 12.8233 3.95322C12.8686 3.94975 12.9141 3.95524 12.9572 3.96938C15.9251 4.93779 17.9215 6.93422 18.8901 9.903C18.9185 9.99013 18.9111 10.085 18.8696 10.1667C18.8282 10.2484 18.756 10.3103 18.669 10.3389C18.5819 10.3661 18.4876 10.3581 18.4062 10.3168C18.3249 10.2755 18.2628 10.2041 18.2333 10.1178C17.3239 7.33224 15.5285 5.53601 12.742 4.62644C12.6549 4.59773 12.5827 4.53562 12.5413 4.45374C12.4999 4.37186 12.4927 4.2769 12.5213 4.18972V4.19071Z" fill="#49B7AC"/>
        <path id="Vector_4" d="M22.4485 8.89822C21.0811 4.7105 18.2637 1.89216 14.075 0.524943C13.9456 0.482695 13.8092 0.466348 13.6735 0.476836C13.5378 0.487324 13.4054 0.524441 13.2841 0.586068C13.1627 0.647695 13.0547 0.732626 12.9661 0.83601C12.8776 0.939394 12.8102 1.05921 12.768 1.18861C12.7257 1.31801 12.7094 1.45447 12.7199 1.59019C12.7304 1.72591 12.7675 1.85823 12.8291 1.97961C12.8907 2.10098 12.9757 2.20903 13.079 2.29758C13.1824 2.38614 13.3022 2.45346 13.4316 2.49571C17.006 3.66273 19.3106 5.96755 20.4778 9.54185C20.5631 9.80319 20.7487 10.0199 20.9938 10.1444C21.1152 10.2061 21.2475 10.2432 21.3832 10.2537C21.5189 10.2642 21.6554 10.2479 21.7848 10.2056C21.9142 10.1634 22.034 10.0961 22.1374 10.0075C22.2407 9.91899 22.3257 9.81095 22.3873 9.68959C22.449 9.56822 22.4861 9.4359 22.4966 9.30019C22.5071 9.16447 22.4907 9.02802 22.4485 8.89862V8.89822ZM21.57 9.54837C21.483 9.57522 21.389 9.56713 21.3079 9.52581C21.2268 9.48449 21.165 9.41319 21.1356 9.32705C19.8942 5.52826 17.4447 3.07872 13.646 1.83826C13.6024 1.82458 13.562 1.80239 13.527 1.77296C13.492 1.74353 13.4632 1.70745 13.4423 1.66682C13.4213 1.62618 13.4087 1.58179 13.405 1.53623C13.4014 1.49066 13.4068 1.44482 13.421 1.40137C13.4351 1.35791 13.4578 1.3177 13.4876 1.28307C13.5175 1.24844 13.5539 1.22007 13.5948 1.19961C13.6356 1.17915 13.6802 1.16701 13.7258 1.16388C13.7714 1.16076 13.8172 1.16671 13.8604 1.1814C17.8279 2.47675 20.4962 5.14485 21.7919 9.11323C21.8199 9.20025 21.8123 9.29486 21.7707 9.37628C21.7291 9.45771 21.6569 9.51931 21.57 9.54758V9.54837Z" fill="#49B7AC"/>
        </g>
        </svg>
      <!-- <img 
      class="form-icoon-2-mobiel" 
      src="./tel-nummer-icoon.svg" 
      alt="Telefoonnummer Icon" 
      :class="{'input-error-icoon-mobiel': errors.telefoonnummer}" 
    />       -->
    <input
    type="tel"
    id="telefoonnummer"
    v-model="formData.telefoonnummer"
    @blur="validateTelefoonnummer"
    :class="{'input-error-mobiel': errors.telefoonnummer}"
    required
    placeholder="Vul je telefoonnummer in"
  />
      <span v-if="errors.telefoonnummer" class="error-message">{{ errors.telefoonnummer }}</span>
    </div>
  </form>

        <button class="frame-2-1-mobiel" @click="submitForm" style="border: none">
          <div class="bevestig-mijn-deelname diodrumcyrillic-normal-white-23-7px" style="font-weight: 700; font-size: 22px">Bevestig deelname</div>
          <span style="color: white; font-size: 22px;  position: relative; right: 6px">&#8594;</span>
        </button>
        <p class="met-het-bevestigen-v-mobiel">Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.</p>
        <!-- <img class="image-2-6" :src="image2" alt="image 2" />
        <div class="group-2-6">
          <div class="overlap-group-2">
            <div class="twv-18">{{ tWV }}</div>
            <h1 class="text-19 valign-text-bottom">{{ text19 }}</h1>
          </div>
        </div>
        <img class="jouw-gekozen-prijs" :src="jouwGekozenPrijs" alt="Jouw gekozen prijs:" />
        <div class="playstation-5-slim-disk">{{ playstation5SlimDisk }}</div> -->


        <div class="container-afbeelding-prijzen-mobiel-5">
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


    
      <div class="container-footer-5">
        <hr class="lijn" style="margin-top: 3rem;">
        <div class="footer-pagina1">
          <p class="text-footer-pagina1">*Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024. Actievoorwaarden van toepassing.</p>
        </div>
      </div>






      </div>
    </div>
  </div>


</center>

</template>

<style lang="sass">
@import '../../variables'

.background-6-error
  height: 885px !important


.form-group input.input-error 
  border: 2px solid red


.input-error-icoon-mobiel 
  position: relative!important
  top: 48px!important

@media (max-width: 501px)
  .error-message
    position: relative
    top: 10px
    font-size: 16px!important

  .form-group-mobiel input.input-error-mobiel
    border: 2px solid red




.input-error-icoon 
  top: 39%!important

.input-error 
  border: 2px solid red


.error-border 
  border: 2px solid red

.error-message 
  color: red



.error-input 
  border: 2px solid red




.jouw-gekozen-prijs
  color: #FFF
  font-family: "DM Sans"
  font-size: 2.02rem
  font-style: normal
  font-weight: 600
  line-height: 150%
  width: 305px!important



.error-message-email 
  margin-left: 65px!important



.error-message-tel 
  margin-left: 65px!important
  


.error-message
  font-family: $font-weight-diodrum_cyrillic-regular
  color: red
  font-weight: 700
  font-size: 24px
  // margin-left: 57px
  margin-top: 10px




input::placeholder 
  opacity: 1
  color: #B5B5B5







.form-pagina5
  width: 100%

.form-group
  display: flex
  flex-direction: column

.name-group
  display: flex
  gap: 2%

  .form-group
    flex: 1
    width: 46%!important

.full-width
  width: 100%
  border-radius: 2.5rem




.form-group input
  width: 100%
  padding: 0.625rem 0.625rem 0.625rem 4rem
  border-radius: 2.5rem
  border: 1px solid #ccc
  height: 70px
  color: black
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 1.5625rem
  font-style: normal
  font-weight: 400
  line-height: normal
  background-color: #f1f1f1



// Specifieke stijlen voor de full-width velden
.form-group.full-width
  display: flex
  align-items: flex-start
  // gap: 0.625rem


.form-icoon
  width: 20px
  height: 20px
  position: relative
  top: 50%
  left: 8%
  margin-right: 95%


.form-icoon-2
  width: 20px
  height: 20px
  position: relative
  top: 47px
  left: 3%
  margin-right: 96%






.overkoepelende-container
  max-width: 100vw
  min-width: 100vw
  overflow-y: hidden

.gefeliciteerd
  color: #f48c02  
  font-size: 2.875rem
  font-style: normal
  font-weight: 700
  line-height: 150%
  font-family: $font-family-diodrum_cyrillic-regular

.gewonnen
  font-size: 44px
  z-index: 999
  position: relative
  top: 300px
  left: 220px
  text-align: start
  font-weight: 700
  color: #072249
  font-family: $font-family-diodrum_cyrillic-regular
  line-height: 150%
  font-size: 2.1875rem

.gekozen-prijs
  color: #F48C02
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 2.1875rem
  font-style: normal
  font-weight: 600
  line-height: 150%

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
  top: 475px
  width: 800px
  text-align: left

.line-4
  height: 1px
  left: 214px
  object-fit: cover
  position: absolute
  top: 436px
  width: 797px

.frame-427320569
  align-items: flex-end
  display: inline-flex
  flex-direction: column
  gap: 19px
  left: 213px
  position: absolute
  top: 550px

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

.frame-2-1:hover
  cursor: pointer

.right-arrow-4
  height: 11.39px
  position: relative
  width: 21.03px

.met-het-bevestigen-v
  color: $downriver
  font-family: $font-family-diodrum_cyrillic-regular
  font-size: 14px
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
  font-size: 53px
  font-weight: 400
  height: 68px
  left: 18px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 83px
  white-space: nowrap
  font-weight: 700

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
  margin-top: 1rem

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





@media (min-width: 1920px)
  .container-center-horizontal
    min-width: 100vw !important
    max-width: 100vw !important
    zoom: 110%

  .pagina-5
    zoom: 100% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2080px)
  .pagina-5
    zoom: 105% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2200px)
  .pagina-5
    zoom: 110% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2300px)
  .pagina-5
    zoom: 115% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2400px)
  .pagina-5
    zoom: 120% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2500px)
  .pagina-5
    zoom: 125% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2600px)
  .pagina-5
    zoom: 130% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2700px)
  .pagina-5
    zoom: 135% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2800px)
  .pagina-5
    zoom: 140% !important
    position: relative !important
    right: 5% !important

@media (min-width: 2900px)
  .pagina-5
    zoom: 145% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3000px)
  .pagina-5
    zoom: 150% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3100px)
  .pagina-5
    zoom: 155% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3200px)
  .pagina-5
    zoom: 160% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3300px)
  .pagina-5
    zoom: 165% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3400px)
  .pagina-5
    zoom: 170% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3500px)
  .pagina-5
    zoom: 175% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3600px)
  .pagina-5
    zoom: 180% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3700px)
  .pagina-5
    zoom: 185% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3800px)
  .pagina-5
    zoom: 190% !important
    position: relative !important
    right: 5% !important

@media (min-width: 3900px)
  .pagina-5
    zoom: 195% !important
    position: relative !important
    right: 5% !important

@media (min-width: 4000px)
  .pagina-5
    zoom: 200% !important
    position: relative !important
    right: 5% !important













@media (max-width: 500px)


  .container-footer-5
    position: relative
    top: 32rem


  .container-afbeelding-prijzen-mobiel-5
    position: relative
    bottom: -75px
    right: 30px
    zoom: 83%

  .footer-pagina5
    background-color: $white
    min-width: 100%
    position: absolute
    bottom: -575px
    right: 3px


  .achtergrond-pagina-5
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%)
    width: 100%
    height: 76rem!important
    padding-bottom: 2rem

  .witte-container-pagina-5
    width: 90%
    height: 48.9rem
    border-radius: 0.75rem
    background: #FFF
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20)
    position: relative
    top: 2rem
    display: flex
    flex-direction: column
    padding: 1rem
  
  .form-pagina5 
    width: 100%
    display: flex
    flex-direction: column
  
  .form-group 
    width: 100%
  
  .bevestig-mijn-deelname 
    text-align: center
    font-size: 1.2rem
  
  .gewonnen-mobiel
    text-align: center
    font-size: 1.5rem
    text-align: left

  .group-2-6, .playstation-5-slim-disk 
    text-align: center
  
  .image-2-6 
    width: 100%
    height: auto
    margin: 0 auto

  .gefeliciteerd-mobiel
    color: #F48C02
    font-family: $font-family-diodrum_cyrillic-semibold
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%

  .blauw-mobiel
    color: #072249
    font-family: $font-family-diodrum_cyrillic-medium
    font-size: 1.5625rem
    font-style: normal
    font-weight: 600
    line-height: 135%


  .form-group-mobiel input
    width: 100%
    padding: 0.625rem 0.625rem 0.625rem 4rem
    border-radius: 2.5rem
    border: 1px solid #ccc
    height: 70px
    color: black
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 1rem
    font-style: normal
    font-weight: 400
    line-height: normal
    background-color: #f1f1f1



  .form-icoon-mobiel
    width: 20px
    height: 20px
    position: relative
    top: 50%
    left: -37%
  
  .form-icoon-2-mobiel
    width: 20px
    height: 20px
    position: relative
    top: 50%
    left: -37%  


  .frame-2-1-mobiel
    display: flex
    height: 3.6875rem
    padding: 1.86225rem 2.25rem
    align-items: center
    gap: 0.84625rem
    border-radius: 2.5rem
    background: #F48C02
    margin-top: 2rem
    color: #FFF
    font-family: 'Diodrum Cyrillic-Semibold','Helvetica'
    font-size: 1.47881rem
    font-style: normal
    font-weight: 700
    line-height: normal

  .lijn-2
    width: 100%


  .hoe-kunnen-wij-jou-bereiken-mobiel
    font-family: $font-family-diodrum_cyrillic-regular
    color: #072249
    font-size: 1.3125rem
    font-style: normal
    font-weight: 400
    line-height: 126%
    text-align: left



  .met-het-bevestigen-v-mobiel
    color: #072249
    font-family: $font-family-diodrum_cyrillic-medium
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: 150%
    margin-top: 2rem
    text-align: left


  .text-footer-pagina5
    color: #C1C1C1
    text-align: center
    font-family: $font-family-diodrum_cyrillic-regular
    font-size: 0.75rem
    font-style: normal
    font-weight: 400
    line-height: 1.125rem
    margin-top: 1rem
    padding-bottom: 2rem

  .container-mobiel-pagina-5
    padding: 0!important
    padding-bottom: 12rem!important

  .lijn-3
    width: 100%
</style>