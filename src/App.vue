<template>
  <div class="app">
    <Sidebar/>
    <router-view></router-view>
  </div>

</template>


<script setup>
  import Sidebar from "@/components/Sidebar/Sidebar.vue"
  
</script>


<style lang="scss">
:root {
  --primary: #bbe9cc;
  --primary-alt: #b9e3c8;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--ligh);
}

button {
  cursor: pointer;
}

.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 760px) {
      padding-left: 6rem;
    }
  }
}


</style>
