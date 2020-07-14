<template>
  <div>
    <p class="font-bold">Points: {{points}}</p>
    <client-only>
      <UHRewardBadgeModal />
    </client-only>

    <button
      class="px-3 py-2 font-semibold text-white uppercase bg-gray-900 hover:bg-gray-700"
      @click="points += 100"
    >Gain 100 points</button>

    <button
      class="px-3 py-2 font-semibold text-white uppercase bg-gray-900 hover:bg-gray-700"
      @click="nextRewardedBadges"
    >Show next bagde</button>

    <div
      v-if="hasBadgesToReward"
      class="py-2 my-6 text-center text-green-700 bg-green-100"
    >has more then one badge to show...</div>

    <p class="font-bold uppercase">triggerd badge</p>
    <pre class="py-2 bg-gray-200">{{rewardedBadge}}</pre>

    <p class="mt-10 font-bold uppercase">queued badge</p>
    <pre class="py-2 bg-gray-200">{{badgesToReward}}</pre>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import UHRewardBadgeModal from '@/components/generics/UHRewardBadgeModal'

export default {
  name: 'badges',
  components: {
    UHRewardBadgeModal
  },
  data() {
    return {
      points: 0
    }
  },
  methods: {
    ...mapActions({
      rewardBadgePoints: 'badge/rewardBadgePoints',
      nextRewardedBadges: 'badge/nextRewardedBadges'
    })
  },
  computed: {
    ...mapGetters({
      hasBadgesToReward: 'badge/hasBadgesToReward',
      badgesToReward: 'badge/badgesToReward',
      rewardedBadge: 'badge/rewardedBadge'
    })
  },
  watch: {
    points: {
      handler(value) {
        this.rewardBadgePoints(value)
      }
    }
  },
  mounted() {
    // only for testing
    console.log('fetching badges...')
    this.$store.dispatch('badge/fetchBadges')
  }
}
</script>