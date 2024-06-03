<script setup lang="ts">
/**
 * `PageHeading`
 *
 * This component displays the heading for a page and an optional description below it
 *
 * @component
 * @vue-prop {label} String - The string to be displayed in the heading tag
 * @vue-prop {desciprtion} String - The string to be displayed in teh block below the heading
 *
 * @example
 * <PageHeading label="Home" :description="appConfig.description" />
 */
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
const appConfig = useAppConfig()

useHead({
  title: `${appConfig.displayLabel} | ${props.label}`,
})
</script>

<template>
  <section>
    <h1 class="font-bold">
      {{ label }}
    </h1>
    <article v-if="description" class="mb-4">
      <p>
        {{ description }}
      </p>
    </article>
  </section>
</template>
