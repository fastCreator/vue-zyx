<template>
  <div class="mtree">
    <div class="mTree-title-en">{{this.name.en}}</div>
    <div class="mTree-title-cn">{{this.name.cn}}</div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
  export default {
    name:'p-mtree',
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    props:{
      name:Object
    },
    methods: {
      handleNodeClick(data) {
        this.$emit('itemClick',data)
      }
    }
  };
</script>
<style scoped>
  .mTree-title-en{
    font-size: 25px;
    text-align: center;
    color: #1F76D7;
    padding: 8px 0;
  }
  .mTree-title-cn{
    font-size: 12px;
    text-align: center;
    color: #333;
    font-weight: 600;
    padding-bottom: 8px;
  }
  .el-tree{
    border: none;
    border-top: 1px solid #e5eaec;

  }
</style>
