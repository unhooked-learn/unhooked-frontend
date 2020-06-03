<script>
export default {
  name: 'UHBadgeLoadingState',
  render(h) {
    return h(
      'div',
      {
        class: 'flex justify-center'
      },
      [
        h('div', {
          class:
            'flex w-16 h-16 text-center rounded-full shadow-md loading-state'
        })
      ]
    )
  }
}
</script>
