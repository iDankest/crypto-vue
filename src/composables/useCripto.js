import { ref, onMounted, computed } from "vue";

export default function useCripto() {
    const monedas = ref([
      { codigo: 'USD', texto: 'Dolar de Estados Unidos'},
      { codigo: 'MXN', texto: 'Peso Mexicano'},
      { codigo: 'EUR', texto: 'Euro'},
      { codigo: 'GBP', texto: 'Libra Esterlina'},
  ])
  const criptomonedas = ref([])
  const cotizacion = ref({})
  const cargando = ref(false)

  onMounted(() => {
    fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
    .then(respuesta => respuesta.json())
    .then(data => { //<- tambien podemos usar destructuring que seria en este caso {Data}
      criptomonedas.value = data.Data
    })
  })
  const obtenerCotizacion = async (cotizar) => {
    cargando.value = true
    cotizacion.value = {}
    try{
    const { moneda, criptomoneda } = cotizar
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    const respuesta = await fetch(url)
    const data = await respuesta.json() 
    cotizacion.value = data.DISPLAY[criptomoneda][moneda]//<- aqui obtenemos la cotizacion
    }catch(error){
      console.log(error)
    }finally{
      cargando.value = false
    }
  }

  const mostrarResultado = computed(() => {
    if (Object.keys(cotizacion.value).length) {
      return true
    }
    return false
  })

  return {
    monedas,
    criptomonedas,
    cotizacion,
    obtenerCotizacion,
    cargando,
    mostrarResultado
  }
}
