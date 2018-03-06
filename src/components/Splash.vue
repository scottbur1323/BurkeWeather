<template lang="html">
  <body id="splash" class="body">
    <div class="everything">
      <h1 class="animated rollIn">Burke Weather!</h1>
    </div>
    <div>
      <router-link :to="{ name: 'Home'}">
        <button class="btn btn-success" type="button" name="button">
          CLICK ME
        </button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {
}
</script>

<style lang="css">

#splash {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}

</style>
