<template>
  <div class="TajMahal">
    <!-- <div class="pics"></div> -->

    <div class="air1">
      <el-card shadow="always" class="card-con">
        <el-row class="row-con">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="a">
              <a href="https://movie.douban.com/subject/1296339/">
              <img src="../assets/1.png" height="300" width="200" alt />
              </a>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="b">
            <div class="fcard-text">
              <h3>豆瓣热评</h3>
              <span>
                <a href="https://www.douban.com/people/bighead/" style="text-decoration:none; color:#7ca575;">大头绿豆</a> <span class="time">2006-09-23</span> 
              </span>
              <span>两个人在试听间里听爱情歌曲的那一段，局促的空间里，想看对方，又有些矜持，目光刚一接触就赶紧离开，那么一段长长的时间，很好。餐厅里互打电话。对话总是很聪明。“很多人结婚的理由比这还少。”</span>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="bottom">
      <a class="icp_link" href="http://www.beian.miit.gov.cn/">京ICP备19050230号</a>
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
  width: 100%;
  height: 100%;
}
.air1 {
  @include flex_x_y_center;
  height: 98%;
  width: 100%;
}
.title {
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
  height: 100%;
}
.bottom {
  @include flex_x_y_center;
  position: fixed;
  bottom: 0;
  height: 2%;
  width: 100%;
  background-color: #edf4ed;
}
.icp_link {
  text-decoration: none;
  color: black;
}

.fcard-text {
  width: 200px;
  word-break: break-all;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.a {
  @include flex_x_y_center;
  padding: 5px 10px 2.5px 10px;
}
.b {
  @include flex_x_y_center;
  padding: 5px 10px 2.5px 10px;
}

.card-con {
    // width: 300px;
    background-color: #edf4ed
  }
@media screen and (max-width: 700px) {
  .card-con {
    width: 300px;
    background-color: #edf4ed
  }
}
.time{
    color: #A9A9A9;
    font-size: 1rem;
}
</style>
