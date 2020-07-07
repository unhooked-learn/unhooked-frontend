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

      <div class="relative max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Service Provider</h2>
          <p class="mt-2 text-gray-500">Accordning to <dfn class="border-b border-dotted"  tilte="Telemedien Gesetz">TMG</dfn>  &sect;5</p>
          <p class="mt-2 text-gray-600">
            Student: Kevin Wrede
            <br />Hochschule für Technik und Wirtschaft Berlin
            <br />Fachbereich 4
            <br />Wilhelminenhofstraße 75A
            <br />12459 Berlin
          </p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon icon="address-card" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Contact</h2>
          <p class="mt-2 text-gray-600">
            E-Mail:
            <a
              class="text-blue-800 underline hover:text-blue-900"
              href="mailto: Kevin.Wrede@student.htw-berlin.de"
            >Kevin Wrede</a>
            <br />Telefon:
            <a
              class="text-blue-800 underline hover:text-blue-900"
              href="tel:+491713157718"
            >+49 171 3157718</a>
          </p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon icon="id-card-alt" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <div class="max-w-md px-8 py-4 my-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800">Sources</h2>
          <p class="mt-2 text-gray-600 text-bold">Image sources and copyright.</p>
          <p
            class="mt-2 text-gray-600"
          >The logo and banner were created by us. The source information for the individual units is listed inside a knowledgebase card.</p>
        </div>
        <div class="flex justify-end mt-1 text-gray-600">
          <font-awesome-icon icon="copyright" class="w-20 h-20 rounded-full fa-4x" />
        </div>
      </div>

      <h3 class="mt-4 text-2xl font-extrabold leading-9 text-center text-gray-900">Team</h3>

      <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg">
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1565538534766-87c0206acfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold ">Philipp</h4>
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase ">Frontend</h6>
        <p
          class="mt-3 text-xs text-center text-gray-500"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.</p>
      </div>

      <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg">
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1565538534766-87c0206acfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold">Kevin</h4>
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Frontend</h6>
        <p
          class="mt-3 text-xs text-center text-gray-500"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.</p>
      </div>

      <div class="flex flex-col items-center justify-center p-4 my-5 bg-white rounded-lg shadow-lg">
        <div
          class="inline-flex w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1585068603251-8d60ccdf6db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
            alt
            class="w-full h-full"
          />
        </div>
        <h4 class="mt-4 text-xl font-bold">Katrina</h4>
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Backend</h6>
        <p
          class="mt-3 text-xs text-center text-gray-500"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.</p>
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
        <h6 class="text-sm font-semibold tracking-wide text-gray-600 uppercase ">Backend</h6>
        <p
          class="mt-3 text-xs text-center text-gray-500"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.</p>
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
  },
}
</script>