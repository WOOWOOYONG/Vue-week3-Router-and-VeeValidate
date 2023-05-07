<template>
  <main>
    <div class="validate_form">
      <VForm
        class="row g-3 needs-validation"
        novalidate
        v-slot="{ errors, meta }"
        @submit="onSubmit"
      >
        <div class="col-md-12">
          <label for="name" class="form-label">姓名</label>
          <VField
            name="name"
            type="text"
            v-model="userName"
            class="form-control"
            :class="{ 'is-invalid': errors['name'], 'is-valid': !errors['name'] && userName }"
            id="name"
            label="姓名"
            rules="required"
            as="input"
          />
          <ErrorMessage name="name" :class="{ 'invalid-feedback ': errors['name'] }" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-12">
          <label for="email" class="form-label">信箱</label>
          <VField
            name="email"
            type="email"
            v-model="userEmail"
            class="form-control"
            :class="{ 'is-invalid': errors['email'], 'is-valid': !errors['email'] && userEmail }"
            id="email"
            label="信箱"
            rules="required|email"
            as="input"
          />
          <ErrorMessage name="email" :class="{ 'invalid-feedback ': errors['email'] }" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-12">
          <label for="phone" class="form-label">電話</label>
          <VField
            name="phone"
            type="tel"
            maxlength="10"
            v-model="userPhone"
            class="form-control"
            :class="{ 'is-invalid': errors['phone'], 'is-valid': !errors['phone'] && userPhone }"
            id="phone"
            label="電話"
            aria-describedby="inputGroupPrepend"
            as="input"
            :rules="isPhone"
          />
          <ErrorMessage name="phone" :class="{ 'invalid-feedback ': errors['phone'] }" />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-12">
          <label for="delivery" class="form-label">選擇寄送方式</label>
          <VField
            name="delivery"
            v-model="userDelivery"
            class="form-select"
            :class="{
              'is-invalid': errors['delivery'],
              'is-valid': !errors['delivery'] && userDelivery
            }"
            id="delivery"
            label="寄送方式"
            rules="required"
            as="select"
          >
            <option value="" selected disabled>請選擇...</option>
            <option value="貓頭鷹快遞">貓頭鷹快遞</option>
            <option value="無人機投放">無人機投放</option>
            <option value="到店自取">到店自取</option>
          </VField>
          <ErrorMessage name="delivery" :class="{ 'invalid-feedback ': errors['delivery'] }" />
        </div>
        <div class="col-md-12">
          <label for="note" class="form-label">備註</label>
          <VField
            name="note"
            id="note"
            cols="30"
            rows="10"
            class="form-control"
            placeholder="有什麼想說的嗎？"
            as="textarea"
            v-model="userNote"
          ></VField>
        </div>
        <div class="col-12 text-center mt-5">
          <button class="btn btn-success" type="submit" :disabled="!meta.valid">送出</button>
        </div>
      </VForm>
    </div>
  </main>
</template>

<script>
import { ErrorMessage } from 'vee-validate'

export default {
  data() {
    return {
      userName: '',
      userEmail: '',
      userPhone: '',
      userDelivery: '',
      userNote: ''
    }
  },
  methods: {
    isPhone(value) {
      if (!value) {
        return '手機為必填'
      }
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '要輸入09開頭的手機號碼喔'
    },
    onSubmit(values, { resetForm }) {
      console.log('送出表單')
      console.log(values)
      resetForm()
    },
    isValid() {
      if (this.userEmail) {
        return true
      }
    }
  },
  components: { ErrorMessage }
}
</script>

<style>
.validate_form {
  max-width: 768px;
  font-size: 1.2rem;
}
</style>
