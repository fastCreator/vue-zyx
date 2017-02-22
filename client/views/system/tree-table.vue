<template>
  <el-tree
    :data="regions"
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    @check-change="handleCheckChange"
    :render-content="renderContent"
  >
  </el-tree>
</template>
<script type="es6">
  export default {
    data() {
      return {
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      renderContent: function (h, node,a) {
        var arr=[];
        for(var i=0;i<5;i++){
          arr.push(h('span', {class:'item item'+i},'index' + i))
        }
        console.log(node);
        return h('span',{},arr);

      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{name: '<div>region1111</div>'}, {name: 'region2'}]);
        }
        if (node.level > 13) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
</script>
<style>
  .item{
    display: inline-block;
    width: 100px;
  }

</style>
