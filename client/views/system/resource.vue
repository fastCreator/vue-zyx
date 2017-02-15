<template>
  <el-row class="">
    <el-col :span="4">
      <p-mtree :prop="treeProp" :store="treeData" @itemClick="itemClick"></p-mtree>
    </el-col>
    <el-col :span="20">
      <p-mtable :prop="tableProp" :store="tableData">
        <div slot="search">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input placeholder="名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select placeholder="角色">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </p-mtable>
    </el-col>
  </el-row>
</template>
<script type="es6">

  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        treeProp: {
          en: '资源列表', cn: 'RESOURCES LIST'
        },
        tableProp: {
          header: [
            {
              prop: 'data',
              label: '日期',
              width: 150,
            },
            {
              prop: 'name',
              label: '姓名'
            },
            {
              prop: 'city',
              label: '城市'
            },
            {
              prop: 'address',
              label: '地址'
            },
            {
              prop: 'role',
              label: '角色'
            },
          ],
          operate: [
            {
              prop: 'delete',
              label: '删除',
              fuc: function (scope) {
                console.log(scope)
                alert('删除' + scope.$index);
              }
            },
            {
              prop: 'look',
              label: '查看',
              fuc: function (scope) {
                alert('查看' + scope.$index);
              }
            },
            {
              prop: 'edit',
              label: '编辑',
              fuc: function (scope) {
                alert('编辑' + scope.$index);
              }
            }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        treeData: state=> {
          return {
            data: state.resource.tree
          }
        },
        tableData: state=> {
          return {
            data: state.resource.table
          }
        }
      })
    },
    watch: {},
    methods: {
      itemClick: function (data) {
        if (!data.children) {
          this.$store.dispatch('itemClick');
        }
      }
    },
    beforeCreate: function () {
      this.$store.dispatch('initTree');
      this.$store.dispatch('initTable');
    },
    created: function () {

    }
  }
</script>

<style>
  .MainTable{
    height: 100%;
  }
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
