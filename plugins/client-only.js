import Vue from 'vue'

import Flickity from 'vue-flickity'
import vmodal from 'vue-js-modal'
import { dom } from '@fortawesome/fontawesome-svg-core';
import VueObserveVisibility from 'vue-observe-visibility'
import VueFaker from 'vue-faker'

Vue.use(VueFaker);
Vue.use(VueObserveVisibility)
Vue.component('flickity', Flickity)
Vue.use(vmodal)
dom.watch()