<template>
  <PageComponent fullscreen hCenter vCenter>
    <div style="display: flex;flex-direction:column;gap: 6px;">
      <q-btn to="/guest/login" color="standard" class="full-width" label="Log me in" text-color="dark"/>
      <q-btn to="/guest/signup"  color="secondary" class="full-width" label="Create my account" />
    </div>
  </PageComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageComponent from 'components/Page.vue';

export default defineComponent({
  name: 'GuestPage',
  components: {PageComponent}
});
</script>
