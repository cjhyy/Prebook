# 小程序checkbox详细用法

#### 简介：开发过程中需要使用checkbox进行购物车的开发。实现全选，全不选，选中自动算价格等功能。

##### 1.确定单个checkbox状态

```xhtml
<checkbox-group  bindchange="select">
   //单个checkbox也必须外层加一个check-group才能使用bindchange
<view class='check-box'>
<checkbox  value="是否选中"  />是否选中
</view>
</checkbox-group>
```

```javascript
select:function(e){
if (e.detail.value =='') {
check = 0
}
else {
check = 1
}
console.log(e.detail.value);//如果选中的话 value为“是否选中” 否则为‘’
console.log(check);
},
```

##### 2.全选，全不选

```xhtml
<checkbox-group bindchange='changeAll'>
   <checkbox value='全选' checked='{{checkAll}}' /> {% raw %}{{% endraw %}{ checkAll?"全不选":"全选" }}
</checkbox-group>
```

```javascript
 changeAll:function(e){
    if (e.detail.value == '全选'){
      this.setData({
        checkAll:true
      })
     for (var i in this.data.orderedItem){
       var temp_str = 'orderedItem[' + i + '].selected';
       if (!this.data.orderedItem[i].selected){
         this.setData({
          [temp_str]:true,
         })
       }
     }
    } else{
      this.setData({
        checkAll: false
      })
      for (var i in this.data.orderedItem) {
        var temp_str = 'orderedItem[' + i + '].selected';
        if (this.data.orderedItem[i].selected) {
          this.setData({
            [temp_str]: false,
          })
        }
      }
    }
  },
```

##### 3.总体状态判断

如果用户单独勾选了所有商品。下面的状态应该同时改变。

```javascript
 checkchange:function(e){
    console.log(e.detail.value)
    var temp_str = 'orderedItem[' + e.currentTarget.dataset.index+ '].selected';
    if (e.detail.value == "ss"){ //“ss”是自己设定的VALUE值，在页面自己设定
       this.setData({
         totalPrice: this.data.totalPrice + this.data.orderedItem[e.currentTarget.dataset.index].price,
         [temp_str]: true,
         totalCheck: this.data.totalCheck + 1,
       })
    } else {
      this.setData({
        totalPrice: this.data.totalPrice - this.data.orderedItem[e.currentTarget.dataset.index].price,
        [temp_str]: false,
        totalCheck: this.data.totalCheck - 1,
      })
    }
     //用户单个操作
     
if (this.data.totalCheck == this.data.orderedItem.length){ 
   this.setData({
     checkAll:true
   })
} else{
  this.setData({
    checkAll: false
  })
}//每次用户勾选单个的时候进行整体状态判断
},
```

