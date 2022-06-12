<template>
  <PageComponent fullscreen hCenter vCenter>
    <q-form style="display: flex;flex-direction:column;gap: 6px;min-width: 340px">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Email and password"
          icon="settings"
          :done="step > 1"
        >
          <q-input :model-value="form.email.value" label="Email"/>
          <q-input :model-value="form.password.value" type="password" label="Password"/>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="GTU"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          I accept

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue" />
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Ad template"
          icon="assignment"
          disable
        >
          <q-input :model-value="form.firstName.value" label="First name"/>
          <q-input :model-value="form.lastName.value" type="password" label="Last name"/>
          <q-btn color="standard" label="CREATE MY ACCOUNT" text-color="dark" @click="doSignup"/>
        </q-step>
      </q-stepper>
    </q-form>
  </PageComponent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageComponent from 'components/Page.vue';

export default defineComponent({
  name: 'SignupPage',
  components: {
    PageComponent
  },
  setup(){
    const form = {
      email: ref(''),
      confirmEmail:ref(''),
      password:ref(''),
      firstName:ref(''),
      lastName:ref('')
    }

    const step = ref(1);

    const doSignup = ()=>{
      console.log(form);
    }
    return{
      form,
      doSignup,
      step
    }
  }
});
</script>
