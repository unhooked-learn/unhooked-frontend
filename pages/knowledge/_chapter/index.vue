<template>
    <div>
        {{title}}
    </div>    
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const data = await $axios.$get(`https://jsonplaceholder.typicode.com/todos/${params.chapter}`)
    return { title: data.title }
  }
}
</script>
