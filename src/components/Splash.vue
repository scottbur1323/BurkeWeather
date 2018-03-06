<template lang="html">
  <body id="splash" class="body">
    <div class="everything">
      <h1 id="mainHeader" class="animated flipInX infinite">Burke Weather!</h1>
    </div>
    <div>
      <router-link :to="{ name: 'Home'}">
        <button class="btn btn-success" type="button" name="button">
          CLICK ME
        </button>
      </router-link>
    </div>
    <br>
    <div class="appInfo">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">What does Burke Weather! do?</h3>
        </div>
        <div class="panel-body">
          Burke Weather! is a low-memory weather-by-zip-code app.
        </div>
      </div>
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">Who is this app for?</h3>
        </div>
        <div class="panel-body">
          Anyone who lacks the internet connection speeds who needs the weather asap.
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

#splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.appInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}

</style>
