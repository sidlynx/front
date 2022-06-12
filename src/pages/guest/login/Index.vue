<template>
  <PageComponent fullscreen hCenter vCenter>
    <q-form style="display: flex;flex-direction:column;gap: 6px;min-width: 340px">
      <q-input :model-value="form.email.value" label="Email"/>
      <q-input :model-value="form.password.value" type="password" label="Password"/>
      <q-btn color="standard" label="LOG ME IN" text-color="dark" @click="doLogin"/>
    </q-form>
  </PageComponent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageComponent from 'components/Page.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    PageComponent
  },
  setup(){
    const form = {
      email: ref(''),
      password:ref(''),
    }

    const doLogin = ()=>{
      console.log(form);
    }
    return{
      form,
      doLogin
    }
  }
});
</script>
