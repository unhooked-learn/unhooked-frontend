<template>
  <UHQuestionElement
    type="matching"
    :question="question"
    @check="isChecked"
    :hasAnswer="answers.selected"
  >
    <template #heading>
      <div class="space-y-4">
        <UHMatchingRow
          v-for="(item, idx) in gaps.rows"
          :key="idx"
          :item-left="getItemForGap(item)"
          :item-right="getItemForGap(item+1)"
          @remove="removeSelctedAnswer"
          :answers="question.questionAnswers"
          :check="quiz.check"
          v-model="selectedRow"
        />
      </div>
    </template>

    <template #prebody>
      <div class="flex justify-between">
        <div class="text-gray-600">{{question.title}}</div>
        <a href="#" class="text-purple-600" v-if="!quiz.check" @click.prevent="resetSelection">reset</a>
      </div>
    </template>

    <template #body>
      <div>
        <UHFtbSelectedItem
          @selected="selectAnswerForNextGap(item)"
          v-for="(item, idx) in answers.all"
          :key="idx"
          :text="item.text"
        />
      </div>
    </template>
  </UHQuestionElement>
</template>

<script>
import UHQuestionElement from '@/components/units/guiz/UHQuestionElement'
import UHFtbSelectedItem from '@/components/units/guiz/elements/UHFtbSelectedItem'
import UHMatchingRow from '@/components/units/guiz/elements/UHMatchingRow'
import { shuffle, clone, isEmpty } from 'lodash'

import quiz from '@/mixins/quiz/quiz'

export default {
  name: 'UHMatching',
  mixins: [quiz],
  components: {
    UHQuestionElement,
    UHFtbSelectedItem,
    UHMatchingRow
  },
  data() {
    return {
      gaps: {
        list: [],
        countAll: 0,
        rows: []
      },
      answers: {
        all: [],
        selected: []
      },
      selectedRow: []
    }
  },
  computed: {
    collectItems() {
      return shuffle(
        this.question.questionAnswers.reduce(
          (a, b) => [
            ...a,
            { text: b.answerText, key: 'answerText' },
            { text: b.matchText, key: 'matchText' }
          ],
          []
        )
      )
    }
  },
  methods: {
    init() {
      this.resetSelection()
    },
    getItemForGap(gap) {
      return this.answers.selected.find(i => i.gap === gap)
    },

    resetSelection() {
      this.selectedRow = []
      this.answers.all = clone(this.collectItems)
      this.gaps.countAll = this.answers.all.length
      this.answers.selected = []
      this.gaps.list = Array.from(
        Array(+this.answers.all.length),
        (_, i) => i + 1
      )

      this.gaps.rows = Array.from(
        Array(+Math.round(this.answers.all.length / 2)),
        (_, i) => i * 2 + 1
      )
    },

    removeSelctedAnswer(item) {
      if (isEmpty(item)) {
        return
      }

      this.answers.selected = this.answers.selected.filter(
        i => i.gap !== item.gap
      )

      this.gaps.list.push(item.gap)
      this.answers.all.push(item)
    },
    selectAnswerForNextGap(item) {
      const gap = this.getNextAvailableGap()

      if (!gap) {
        return
      }

      this.answers.all.forEach((element, index) => {
        if (element.text == item.text) {
          const item = this.answers.all.splice(index, 1)[0]

          item.gap = gap

          this.answers.selected.push(item)
        }
      })
    },

    getNextAvailableGap() {
      return this.gaps.list.sort().shift()
    },

    hasCorrectAnswers(items) {
      let reducePairs = items.reduce((a,b) => a&&b.isPairCorrect, true);

      return reducePairs && items.length == this.gaps.rows.length;
    },

    getValidationTexts(item) {
      return item.map(i => i.item.validationText)
    }
  },
  watch: {
    question: {
      handler: 'init',
      immediate: true
    },
    selectedRow: {
      handler(value) {
        this.quiz.item = {
          isCorrect: this.hasCorrectAnswers(value),
          validationTexts: this.getValidationTexts(value)
        }
      }
    }
  }
}
</script>
