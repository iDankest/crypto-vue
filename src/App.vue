<script setup>
import { ref, reactive, onMounted } from 'vue';
import Alerta from './components/Alerta.vue';

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

  const obtenerCotizacion = async () => {
    const { moneda, criptomoneda } = cotizar
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
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
    </div>
  </div>
</template>
