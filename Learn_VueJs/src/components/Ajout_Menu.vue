<script setup>
  import {ref} from 'vue';
  import axios from 'axios';
  import Header from './header.vue';
  import Footer from './footer.vue';

  const titre = ref('');
  const description = ref('');
  const prix = ref('');
  const image = ref(null);

  const imageEdit = (event) => {
    image.value = event.target.files[0];
  };

  const addplat = async () => {
    // Correction de "formData" à "FormData"
    const formData = new FormData();
    formData.append('prix', prix.value);
    formData.append('titre', titre.value);
    formData.append('description', description.value);
    formData.append('image', image.value);

    try {
      const response = await axios.post('http://127.0.0.1:5000/menu/plat/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Réinitialisation des champs
      prix.value = '';
      titre.value = '';
      description.value = '';
      image.value = null;

      alert(response.data.message);
    } catch (error) {
      if (!error.response) {
        alert('Erreur de connexion');
      } else {
        alert(error.response.data.message);
      }
    }
  };
</script>

<template>
<div class="hero_area">
  <div class="bg-box">
    <img src="../assets/../assets/images/hero-bg.jpg" alt="">
  </div>
  <!-- header section strats -->
  <Header>

  </Header>
  <!-- end header section -->
</div>

<!-- book section -->
<section class="book_section layout_padding">
  <div class="container">
    <div class="heading_container">
      <h2>
        Ajout du Menu
      </h2>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form_container">
          <form @submit.prevent="addplat">
            <div>
              <input v-model="titre" type="text" class="form-control" placeholder="titre" />
            </div>
            <div>
              <textarea  v-model="description"  class="form-control" placeholder="description"></textarea>
            </div>
            <div>
              <input v-model="prix" type="text" class="form-control" placeholder="prix" />
            </div>
            <div>
             
            </div>
            <div>
              <input @change="imageEdit"  type="file" class="form-control" accept="image/*">
            </div>
            <div class="btn_box">
              <button type="submit">
                Save 
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="map_container ">
          <div id="googleMap"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- end book section -->

<!-- footer section -->
<Footer>
    
</Footer>
<!-- footer section -->


<!-- End Google Map -->

</template>