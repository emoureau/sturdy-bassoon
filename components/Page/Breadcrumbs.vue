<script setup lang="ts">
const home = ref({
  icon: 'pi pi-home',
  route: '/',
})
const route = useRoute()

// Transforms the route for use with Primevue's breadcrumbs component
const items = computed(() => {
  return route.path.split('/').filter(item => item).map((item, index, array) => {
    return { label: toTitleCase(item), route: `/${array.slice(0, index + 1).join('/')}` }
  })
})
</script>

<template>
  <nav class="flex justify-content-center">
    <PBreadcrumb v-if="items.length > 0" :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span class="text-color" :class="[item.icon]" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span class="text-color">{{ item.label }}</span>
        </a>
      </template>
    </PBreadcrumb>
  </nav>
</template>
