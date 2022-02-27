# API(接口)设计

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
    username:'18633334444',
    password:'123abc'
}
```
### response body

```js
{
    errno:0,
    message: 'errno !==0 的话,的错误信息 '
}
```

## 登录

### url

`/api/user/login`

### method

`post`

### request body

## 创建收货地址

### url

`/api/user/address`

### method

`post`

### request body 

```js
{
    city:'北京',
    department:'xxx小区',
    houseNumber:'门牌号',
    name: '张三',
    phone: '18677778888'
}
```

### response body



## 获取收货地址列表

### url

`/api/user/address`

### method

`get`

### request body

无

### response body
```js
{
    errno:0,
    data
}
```
## 获取单个收货地址

### url 

`/api/user/address/:id` (`:id` 是一个动态的参数,服务端可获取具体的参数值)

示例  `/api/user/address/100` `/api/user/address/101`

###  method

`get`

### request body

无

### response body
```js
{
    errno:0,
    data
}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```js
{
  city: '北京',
  department: 'xx小区',
  houseNumber:'门牌号',
  name:'张三',
  phone:'18677778888'
}
```
### response body
```js
{
    errno:0,
    data
}
```

## 获取(热门)商店

### url 

`/api/shop/hot-list`

### method

`get`

### request body

无

###  response body

```js
{
    errno:0,
    data
}
```

## 商店详情

### url 

`/api/shop/:id`

### method

`get`

### request body

无

###  response body

```js
{
    errno:0,
    data
}
```

## 查询(某个)商店的商品列表

### url 

`/api/shop/:id/products`

###  query 

`tab=all`

举例 `/api/shop/10/products?tab=seckill`

### method

`get`

## 创建订单

### url

`/api/order`

### method

`post`