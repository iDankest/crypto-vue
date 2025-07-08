<script setup>
import { ref, reactive } from 'vue';
import Alerta from './components/Alerta.vue';
import Spinner from './components/Spinner.vue';
import useCripto from './composables/useCripto.js';

const { monedas, criptomonedas, cotizacion, cargando, obtenerCotizacion, mostrarResultado } = useCripto()


  const error = ref('')

  const cotizar = reactive({
    moneda:'',
    criptomoneda:''
  })

  const cotizarCripto = () => {
    //Validar los campos
    if(Object.values(cotizar).includes('')){
      error.value = 'Todos los campos son obligatorios'
      return
    } 
    error.value = ''
    obtenerCotizacion(cotizar)
  }


</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">Cotizador de<span>Cryptomonedas</span></h1>
    <div class="contenido">
      <Alerta v-if="error">
        {{ error }}
      </Alerta>
      <form class="formulario"
      @submit.prevent="cotizarCripto">
        <div class="campo">
          <label for="moneda">Moneda:</label>
          <select id="moneda" v-model="cotizar.moneda">
            <option value="">-- Selecciona una moneda --</option>
            <option 
            v-for="moneda in monedas" :key="moneda.codigo"
            :value="moneda.codigo">{{ moneda.texto }}</option>
          </select>
        </div>
        <div class="campo">
          <label for="cripto">Criptomoneda:</label>
          <select id="cripto" v-model="cotizar.criptomoneda">
            <option value="">-- Selecciona una criptomoneda --</option>
            <option 
            v-for="criptomoneda in criptomonedas" 
            :value="criptomoneda.CoinInfo.Name" 
            :key="criptomoneda.CoinInfo.Name">{{ criptomoneda.CoinInfo.FullName }}</option>
          </select>
        </div>
        <input type="submit" value="Cotizar">
      </form>
      <Spinner 
      v-if="cargando"
      />
      <div class="contenedor-resultado" v-if="mostrarResultado">
        <h2>Cotizacion</h2>
        <div class="resultado">
          <img 
          :src="'https://www.cryptocompare.com' + cotizacion.IMAGEURL" 
          alt="imagen criptomoneda">
          <div>
            <p>El precio es: <span>{{ cotizacion.PRICE }}</span></p>
            <p>Precio mas alto 24h: <span>{{ cotizacion.HIGHDAY }}</span></p>
            <p>Precio mas bajo 24h: <span>{{ cotizacion.LOWDAY }}</span></p>
            <p>Cambio en las ultimas 24h: <span>{{ cotizacion.CHANGEPCT24HOUR }}%</span></p>
            <p>Ultima actualizacion: <span>{{ cotizacion.LASTUPDATE }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
