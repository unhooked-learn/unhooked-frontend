<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div class="absolute top-0 left-0">
        <UHAccessibilityButton to="profile">
          <font-awesome-icon icon="chevron-left" class="w-5 p-1 md:p-0 fa-2x" />
        </UHAccessibilityButton>
      </div>
      <div>
        <div class="flex flex-col items-center text-center">
          <font-awesome-icon icon="info" class="w-8 fa-5x" />
        </div>
        <h2
          class="mt-4 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >
          {{ $t('pages.imprint.label') }}
        </h2>
      </div>

      <div
        class="relative max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md"
      >
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">
            {{ $t('pages.imprint.provider.heading') }}
          </h2>
          <p class="mt-2 text-gray-500">
            {{ $t('pages.imprint.provider.according') }}
            <dfn class="border-b border-dotted" title="Telemedien Gesetz"
              >TMG</dfn
            >
            &sect;5
          </p>
          <p class="mt-2 text-gray-600">
            Student: Kevin Wrede
            <br />{{ $t('pages.imprint.provider.title') }} <br />{{
              $t('pages.imprint.provider.subtitle')
            }}
            <br />Wilhelminenhofstraße 75A <br />12459 Berlin
          </p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon icon="address-card" class="w-20 h-20 fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">
            {{ $t('pages.imprint.contact.heading') }}
          </h2>
          <p class="mt-2 text-gray-600">
            <font-awesome-icon
              icon="envelope"
              class="inline-block h-5 mr-2 fa-1x"
            />
            <a
              class="text-blue-800 underline hover:text-blue-900"
              href="mailto: Kevin.Wrede@student.htw-berlin.de"
              >Kevin Wrede</a
            >
            <br />
            <font-awesome-icon icon="phone" class="inline-block h-5 mr-2 fa-1x" />
            <a
              class="text-blue-800 underline hover:text-blue-900"
              href="tel:+491713157718"
              >+49 171 3157718</a
            >
          </p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon icon="id-card-alt" class="w-20 h-20 fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">
            {{ $t('pages.imprint.sources.heading') }}
          </h2>
          <p class="mt-2 text-gray-600 text-bold">
            {{ $t('pages.imprint.sources.title') }}
          </p>
          <p class="mt-2 text-gray-600">
            {{ $t('pages.imprint.sources.text') }}
          </p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon
            icon="copyright"
            class="w-20 h-20 rounded-full fa-4x"
          />
        </div>
      </div>

      <h3
        class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900"
      >
        {{ $t('pages.imprint.team.heading') }}
      </h3>

      <div
        class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg"
      >
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://hosting142537.a2e76.netcup.net/media/philipp.jpg"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold ">Philipp</h4>
        <h6
          class="text-sm font-semibold tracking-wide text-gray-600 uppercase "
        >
          Frontend
        </h6>
        <p class="mt-3 text-xs text-center text-gray-500">
          “Creativity is allowing yourself to make mistakes. Design is knowing
          which ones to keep”. — Scott Adams
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg"
      >
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://hosting142537.a2e76.netcup.net/media/kevin.jpg"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold">Kevin</h4>
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">
          Frontend
        </h6>
        <p class="mt-3 text-xs italic text-center text-gray-500">
          “A user interface is like a joke. If you have to explain it, it’s not
          that good”. — Martin Leblanc
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg"
      >
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://hosting142537.a2e76.netcup.net/media/katrina.jpg"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold">Katrina</h4>
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">
          Backend
        </h6>
        <p class="mt-3 text-xs text-center text-gray-500">
          “Sometimes it pays to stay in bed on Monday, rather than spending the
          rest of the week debugging Monday’s code”. — Dan Salomon
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center p-4 my-5 mb-12 bg-white rounded-lg shadow-lg"
      >
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1585068603251-8d60ccdf6db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold">Vivian</h4>
        <h6
          class="text-sm font-semibold tracking-wide text-gray-600 uppercase "
        >
          Backend
        </h6>
        <p class="mt-3 text-xs text-center text-gray-500">
          “It is not enough for code to work”. — Robert C. Martin
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UHAccessibilityButton from '@/components/generics/UHAccessibilityButton'
export default {
  name: 'Imprint',
  components: {
    UHAccessibilityButton
  }
}
</script>
