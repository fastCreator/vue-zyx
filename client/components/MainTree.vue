<template>
  <div class="mtree">
    <div class="mTree-title-en">{{this.name.en}}</div>
    <div class="mTree-title-cn">{{this.name.cn}}</div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script type="es6">
  export default {
    name: 'p-mtree',
    data() {
      return {
        //data:this.$store.state.resource.tree,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    props: {
      name: Object,
      data:Array
    },
    watch:{
      data:function(New,old){
            console.log(New)
      }
    },
    methods: {
      handleNodeClick(data) {
        this.$emit('itemClick', data)
      }
    }
  };

</script>
<style scoped>
  .mTree-title-en {
    font-size: 25px;
    text-align: center;
    color: #1F76D7;
    padding: 8px 0;
  }

  .mTree-title-cn {
    font-size: 12px;
    text-align: center;
    color: #333;
    font-weight: 600;
    padding-bottom: 8px;
  }

  .el-tree {
    border: none;
    border-top: 1px solid #e5eaec;

  }
</style>
