<template>
    <div class="officerAvatar">
        <g-image class="officerImage" :src="imgsrc" />
        <p>{{officername}}<br/>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: [
        'title',
        'imgsrc',
        'officername'
    ]
}
</script>
