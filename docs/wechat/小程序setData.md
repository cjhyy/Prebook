# 小程序setData的方法

#### 简介：小程序中无法直接使用setData更改数组对象中的元素，这里介绍2种方法。

##### 1.使用[]

```javascript
   var temp_str = 'orderedItem[' + e.currentTarget.dataset.index+ '].selected';
     this.setData({
          [temp_str]: true,
     })
```

##### 2.直接字符串设置（官方文档）

```javascript
 changeItemInArray: function() {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }
})
```

