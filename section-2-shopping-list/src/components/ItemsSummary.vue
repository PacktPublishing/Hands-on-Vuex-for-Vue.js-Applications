<template>
  <div>
    <h3>Summary</h3>

    <p>Total Quantity: {{ $store.getters.totalQuantity }}</p>
    <p>Total Price: ${{ $store.getters.totalPrice }}</p>
  </div>
</template>
