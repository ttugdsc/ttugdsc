<template>
  <div
    :class="float + ' OfficerAvatar'"
  >
    <g-image
      class="OfficerImage"
      :src="imgsrc"
    />
    <p>{{ officername }}<br>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: [
    'title',
    'imgsrc',
    'officername',
    'float'
  ]
}
</script>
