<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="w-5 p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>
      <div>
        <div class="flex flex-col items-center text-center">
          <font-awesome-icon icon="info" class="w-20 fa-5x" />
        </div>
        <h2
          class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >{{ $t('pages.imprint.label') }}</h2>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-lg">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Service Provider</h2>
          <p class="mt-2 text-gray-600">Studend: Kevin Wrede</p>
          <p class="mt-2 text-gray-600">Hochschule für Technik und Wirtschaft Berlin</p>
          <p class="mt-2 text-gray-600">Fachbereich 4</p>
          <p class="mt-2 text-gray-600">Wilhelminenhofstraße 75A</p>
          <p class="mt-2 text-gray-600">12459 Berlin</p>
        </div>
        <div class="flex justify-end mt-1">
          <font-awesome-icon icon="address-card" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-lg">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Contact</h2>
          <p class="mt-2 text-gray-600">E-Mail: Kevin.Wrede@student.htw-berlin.de</p>
          <p class="mt-2 text-gray-600">Telefon: +49 171 3157718</p>
        </div>
        <div class="flex justify-end mt-1">
          <font-awesome-icon icon="id-card-alt" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-lg">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Sources</h2>
          <p class="mt-2 text-gray-600 text-bold">Image sources and Copyright</p>
          <p class="mt-2 text-gray-600">The logo and banner were created by us. The source information for the individual units is listed inside a knowledgebase card.</p>
        </div>
        <div class="flex justify-end mt-1">
          <font-awesome-icon icon="copyright" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <h3
          class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
      >Team</h3>

        <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg">
          <div class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1565538534766-87c0206acfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              alt=""
              class="w-full h-full">
          </div>
          <h4 class="mt-4 text-xl font-bold">Philipp</h4>
          <h6 class="mt-2 text-sm font-medium">Frontend</h6>
          <p class="mt-3 text-xs text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>
        </div>

        <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg ">
          <div class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1565538534766-87c0206acfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              alt=""
              class="w-full h-full">
          </div>
          <h4 class="mt-4 text-xl font-bold">Kevin</h4>
          <h6 class="mt-2 text-sm font-medium">Frontend</h6>
          <p class="mt-3 text-xs text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>
        </div>

        <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg ">
          <div class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1585068603251-8d60ccdf6db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              alt=""
              class="w-full h-full">
          </div>
          <h4 class="mt-4 text-xl font-bold">Katrina</h4>
          <h6 class="mt-2 text-sm font-medium">Backend</h6>
          <p class="mt-3 text-xs text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>
        </div>

        <div class="flex flex-col items-center justify-center p-4 my-5 mb-12 bg-white rounded-lg shadow-lg ">
          <div class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg">
            <img src="https://images.unsplash.com/photo-1585068603251-8d60ccdf6db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              alt=""
              class="w-full h-full">
          </div>
          <h4 class="mt-4 text-xl font-bold">Vivian</h4>
          <h6 class="mt-2 text-sm font-medium">Backend</h6>
          <p class="mt-3 text-xs text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>
        </div>

		</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UHInput from '@/components/generics/UHInput'
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'

export default {
  name: 'settings',
  fetchOnServer: false,
  fetchDelay: 1000,
  components: {
    UHInput,
    UHAccessibilityButton
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'profile/user'
    })
  },
  async fetch() {
    await this.$store.dispatch('profile/fetch')
  },
  methods: {
    showModal() {
      this.$modal.show('modal')
    },
    hideModal() {
      this.$modal.hide('modal')
    }
  },
  watch: {
    user: {
      handler(user) {
        this.form.email = user.email
        this.form.name = user.username
      },
      deep: true
    }
  }
}
</script>