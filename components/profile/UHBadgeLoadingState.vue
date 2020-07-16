<script>
export default {
  name: 'UHBadgeLoadingState',
  // renderfuntion to display the badge loading state
  render(h) {
    return h(
      'div',
      {
        class: 'flex justify-center'
      },
      [
        h('div', {
          class:
            'flex w-16 h-16 md:w-24 md:h-24 text-center rounded-full shadow-md loading-state'
        })
      ]
    )
  }
}
</script>
