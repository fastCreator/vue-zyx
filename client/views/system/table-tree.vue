<template>
  <tree-table v-bind="tableProps"  :isShowHeader="true"></tree-table>
</template>

<script>
  export default {
    data() {
      return {
        tableProps:{
          header:[
            {
              label:'姓名',
              prop:'name'
            },
            {
              label:'日期',
              prop:'date'
            }
          ],
          tableData: [{
            date: '2016-05-03',
            name: '王小虎1',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333,
            child:[
              {
                date: '2016-05-03',
                name: '王asd小虎2',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                detailAddress: '金沙江路 1518 弄',
                zip: 200333,
                child:[
                  {
                    date: '2016-05-03',
                    name: 'asd',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                  },
                  {
                    date: '2016-05-03',
                    name: 'sdf',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                  }
                ]
              },
              {
                date: '2016-05-03',
                name: 'dfg',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                detailAddress: '金沙江路 1518 弄',
                zip: 200333
              }
            ]
          }, {
            date: '2016-05-02',
            name: 'rtyrt',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: 'fgh',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: 'cbc',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: 'cvb',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: 'dfg',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-07',
            name: 'jghj',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            detailAddress: '金沙江路 1518 弄',
            zip: 200333
          }]
         },
       }
    },
    methods:{

    }
  }
</script>
