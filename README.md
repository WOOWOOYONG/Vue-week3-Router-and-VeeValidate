# Vue-Router & VeeValidate 作業

### 1. 練習使用 Vue Router 製作分頁

```
網頁頁面：

FrontLayout.vue       -> 前台 Navbar
 - HomeView.vue       -> 首頁 /
 - ProductsView.vue   -> 產品頁 /products
 - ProductView.vue    -> 產品內頁 /product/:id

AdminLayout.vue         -> 後台 Navbar
 - ProductsTable.vue  -> 後台產品頁 /admin
 - UsersTable.vue     -> 後台使用者頁 /admin/users

NotFound.vue      -> 輸入錯誤網址時呈現的頁面 /not-found
```

### 2. 練習 Vee Validate v4

- 套用 Bootstrap 樣式
- 表單內容包含姓名、信箱、電話、備註(textarea)、選擇寄送方式(select)、送出按鈕
- 驗證錯誤的樣式、驗證訊息呈現中文
- input 與 label 對應
- 按鈕在完成驗證前是 disabled 的狀態
