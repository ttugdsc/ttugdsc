<script>
export default {
    setup() {
        useMeta({ // eslint-disable-line
            title: "TTU GDSC",
            meta: {
                hid: 'description',
                name: 'description',
                content: "Home of the Texas Tech Google Developer Student Club, one stop shop for all things club related"
            }
        })
    }
};
</script>

<template>
    <div>
        <NuxtWelcome />
    </div>
</template>
