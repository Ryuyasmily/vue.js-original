<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>

<style scoped>
.main {
  width: 100%;
  flex: 1;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding: 16px;
  background: #f9f9f9;
}
</style>
