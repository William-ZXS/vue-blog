<template>
  <div class="TajMahal">
    <div class="pics"></div>
    <div class="title">
         <el-button type="success">进入博客</el-button>
    </div>
    <div class="air1">
      <div class="block">
        <el-carousel trigger="hover" style="height:100%">
          <el-carousel-item class="in-item" v-for="item in 3" :key="item">
            <div v-if="item == 1">
              <span>万物之中，希望至美</span>
            </div>
            <div v-else-if="item == 2"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bottom">
        <a  class="icp_link" href="http://www.beian.miit.gov.cn/">
            京ICP备19050230号
          </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  watch: {},
  methods: {}
};
</script>
<style lang="scss">
@mixin flex_x_y_center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pics {
  @include flex_x_y_center;
  width: 100%;
  height: 5%;
  background: linear-gradient(
    to right,
    lightcoral 0%,
    gold 50%,
    lightgreen 100%
  );
  font-size: 3rem;
}
.TajMahal {
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   align-items: center;
  width: 100%;
  height: 100%;
  // margin: 20px 10px;
  // margin-top: 50px;
  // background-color: white;
  // opacity:0.3
}
.air1 {
  height: 60%;
  width: 100%;
}
.title{
    @include flex_x_y_center;
    height: 33%;
    width: 100%;
}
.content {
  height: 20%;
  width: 100%;
}
.t1 {
  // background: linear-gradient(to right, 	LightSalmon,white);
  //   -webkit-background-clip: text;
  //   color: transparent;
  color: Lavender;
  opacity: 0.8;
}
.block {
  height: 100%;
}
.in-item {
  @include flex_x_y_center;
}
.bottom{
    @include flex_x_y_center;
    position: fixed;
    bottom: 0;
    height: 2%;
    width: 100%;
    background-color: beige;
}
.icp_link{
    text-decoration:none;
    color:black;
}
</style>
