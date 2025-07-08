<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import Alerta from './components/Alerta.vue';
import Spinner from './components/Spinner.vue';

  const monedas = ref([
      { codigo: 'USD', texto: 'Dolar de Estados Unidos'},
      { codigo: 'MXN', texto: 'Peso Mexicano'},
      { codigo: 'EUR', texto: 'Euro'},
      { codigo: 'GBP', texto: 'Libra Esterlina'},
  ])
  const criptomonedas = ref([])
  const error = ref('')

  const cotizar = reactive({
    moneda:'',
    criptomoneda:''
  })
  onMounted(() => {
    fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
    .then(respuesta => respuesta.json())
    .then(data => { //<- tambien podemos usar destructuring que seria en este caso {Data}
      criptomonedas.value = data.Data
    })
  })

  const cotizarCripto = () => {
    //Validar los campos
    if(Object.values(cotizar).includes('')){
      error.value = 'Todos los campos son obligatorios'
      return
    } 
    error.value = ''
    obtenerCotizacion()
  }

  const cotizacion = ref({})

  const obtenerCotizacion = async () => {
    const { moneda, criptomoneda } = cotizar
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    
    const respuesta = await fetch(url)
    const data = await respuesta.json() 
    cotizacion.value = data.DISPLAY[criptomoneda][moneda]//<- aqui obtenemos la cotizacion
  }

  const mostrarResultado = computed(() => {
    if (Object.keys(cotizacion.value).length) {
      return true
    }
    return false
  })
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
      <Spinner />
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
