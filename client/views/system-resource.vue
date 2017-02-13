<template>
  <el-row class="">
    <el-col :span="4">
      <p-mtree :name="name" @itemClick="itemClick"></p-mtree>
    </el-col>
    <el-col :span="20">
      <p-mtable></p-mtable>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        name: {
          en: '资源列表', cn: 'RESOURCES LIST'
        }
      }
    },
    watch: {},

    methods: {
      itemClick: function (data) {
            console.log(data);
      }
    }
  }
</script>

<style>
  .el-row, .el-col {
    height: 100%;
  }

  .el-row {
    min-width: 1000px;
  }

  .mtree, .mtable {
    height: 100%;
    background: #FFFFFF;
  }

  .mtree {
    margin-right: 10px;
  }
</style>
