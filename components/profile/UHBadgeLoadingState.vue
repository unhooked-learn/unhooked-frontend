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

<style>
.loading-state {
  background: linear-gradient(
    -45deg,
    theme('colors.gray.100'),
    theme('colors.gray.300'),
    theme('colors.gray.100')
  );

  background-size: 400% 400%;
  animation: gradient 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
