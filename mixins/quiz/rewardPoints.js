import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      rewardBadgePoints: 'badge/rewardBadgePoints',
    }),
    rewardPointsToUser() {
        //const pointSum = this.userScore + this.userEarnedPoints;
        this.rewardBadgePoints(pointSum);
    },
  },
  computed: {
    ...mapGetters({
      userScore: 'profile/userScore',
      userEarnedPoints: 'quiz/earnedPoints',
    })
  },
  mounted() {

  }
}
