<template>
  <el-row class="">
    <el-col :span="4">
      <p-mtree :name="name" @itemClick="itemClick" :data="b" hasv=""></p-mtree>
    </el-col>
    <el-col :span="20">
      <p-mtable></p-mtable>
    </el-col>
  </el-row>
</template>
<script type="es6">

  import { mapState, mapActions, mapGetters } from 'vuex'



  export default {
    data () {
      return {
        name: {
          en: '资源列表', cn: 'RESOURCES LIST'
        },
        treeData:this.$store.state.resource.tree
      }
    },
    watch: {},
    methods: {
      itemClick: function (data) {

      },
      //...mapActions({
      //  initTree:'SET_TREE' // 映射 this.increment() 为 this.$store.dispatch('increment')
      //}),
    },
    created:function(){
       this.$store.dispatch('INIT_TREE')
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
