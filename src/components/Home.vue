<template>
  <div class="main">
    <ul class="list-video">
      <li class="card" v-for="(gif, idx) in gifImageList.data" :key="idx">
        <img class="imager" :src="gif.images.original.url" />
        <div class="layout">
          <div class="text">
            <p class="title">{{gif.title}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    gifImageList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}

.main {
  width: 100%;
  flex: 1;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding: 16px;
  background: #f9f9f9;
}

.layout {
  display: flex;
}

.list-video {
  display: flex;
  flex-wrap: wrap;
}

.list-video > li {
  width: 23%;
  margin: 20px 20px 50px 0px;
  transition: 0.5s;
}

.card:hover {
  transform: scale(1.05);
}

.list-video .imager {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.icon1 {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin: 10px 10px 0 0px;
}

.title {
  margin-top: 10px;
  font-size: 14px;
  color: #030303;
}

.user {
  margin-top: 10px;
  font-size: 14px;
  color: #606060;
}

.main-title {
  font-size: 20px;
  color: #030303;
  padding-bottom: 30px;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
}
</style>
