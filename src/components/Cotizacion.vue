<script setup>
defineProps({
    cotizacion: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="contenedor-resultado">
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
</template>