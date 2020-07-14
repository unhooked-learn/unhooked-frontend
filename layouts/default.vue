<template>
  <Master>
    <client-only>
      <UHRewardBadgeModal />
    </client-only>

    <UHNavigation />
  </Master>
</template>

<script>
import UHNavigation from '@/components/layout/UHNavigation'
import UHRewardBadgeModal from '@/components/generics/UHRewardBadgeModal'

import Master from './master'

export default {
  name: 'LayoutDefault',
  components: {
    UHNavigation,
    Master,
    UHRewardBadgeModal
  }
}
</script>
