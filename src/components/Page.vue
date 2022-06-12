<template>
  <div class="bg-blue-grey-3" :class="{'fullscreen' : fullscreen, 'flex' : vCenter || hCenter, 'justify-center' : vCenter, 'items-center' : vCenter}">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageComponent',
  props:{
    fullscreen:{
      type:Boolean,
      default:true
    },
    hCenter:{
      type:Boolean,
      default:false
    },
    vCenter:{
      type:Boolean,
      default:false
    }
  }
});
</script>
