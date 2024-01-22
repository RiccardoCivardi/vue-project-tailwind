<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center bg-primary-50 py-12">
    <div
      class="inline-flex flex-col items-center justify-center gap-8 rounded-3xl bg-white p-12 shadow"
    >
      <div class="inline-flex items-center justify-center gap-2.5">
        <div
          class="w-[400px] font-['Poppins'] text-[32px] font-medium text-neutral-900"
        >
          Bentornato! <br />Accedi a Net4market
        </div>
      </div>
      <div
        class="inline-flex w-[400px] items-center justify-center gap-3 rounded-lg bg-success-100 px-6 py-4"
      >
        <div class="flex h-6 w-6 items-center justify-center">
          <div
            class="relative flex h-6 w-6 flex-col items-start justify-start"
          ></div>
        </div>
        <div
          class="flex h-12 shrink grow basis-0 items-center justify-center gap-2.5"
        >
          <div
            class="shrink grow basis-0 font-['Roboto'] text-base font-normal leading-normal text-neutral-700"
          >
            A breve riceverai un’email con le indicazioni per proseguire
          </div>
        </div>
      </div>
      <div class="flex h-[170px] flex-col items-center justify-center gap-3">
        <div
          class="inline-flex h-[79px] w-[400px] items-center justify-center py-[0.50px]"
        >
          <div class="inline-flex flex-col items-start justify-start gap-1.5">
            <div class="inline-flex items-start justify-start">
              <div
                class="font-['Roboto'] text-base font-normal leading-normal text-slate-700"
              >
                Email
              </div>
            </div>
            <div
              class="inline-flex h-12 w-[400px] items-center justify-start rounded border border-neutral-300 bg-white px-4 py-[13px]"
            >
              <div class="flex items-center justify-start gap-2.5">
                <div
                  class="font-['Roboto'] text-base font-normal leading-normal text-neutral-900"
                >
                  mario.rossi@gmail.com
                </div>
              </div>
              <div class="h-[22px] shrink grow basis-0 rounded-[1px]"></div>
            </div>
          </div>
        </div>
        <div
          class="inline-flex h-[79px] w-[400px] items-center justify-center py-[0.50px]"
        >
          <div class="inline-flex flex-col items-start justify-start gap-1.5">
            <div class="inline-flex items-start justify-start">
              <div
                class="font-['Roboto'] text-base font-normal leading-normal text-neutral-700"
              >
                Password
              </div>
            </div>
            <div
              class="inline-flex h-12 w-[400px] items-center justify-start rounded border border-neutral-300 bg-white px-4 py-[13px]"
            >
              <div class="flex items-center justify-start gap-2.5">
                <div
                  class="font-['Roboto'] text-base font-normal leading-normal text-neutral-400 text-opacity-10"
                >
                  Inserisci la tua password
                </div>
              </div>
              <div class="h-[22px] shrink grow basis-0 rounded-[1px]"></div>
              <div class="flex items-center justify-end gap-2.5">
                <div class="relative h-[18px] w-[18px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary-400 px-4 py-3"
      >
        <div
          class="text-center font-['Poppins'] text-base font-medium text-white"
        >
          Accedi
        </div>
      </div>
      <div
        class="inline-flex items-center justify-center border-b border-neutral-900"
      >
        <div
          class="text-center font-['Roboto'] text-base font-normal leading-normal text-neutral-900"
        >
          Hai dimenticato la password?
        </div>
      </div>
      <div class="inline-flex w-[400px] items-center justify-center gap-1">
        <div
          class="font-['Roboto'] text-base font-normal leading-normal text-neutral-900"
        >
          Non sei ancora registrato?
        </div>
        <div
          class="flex items-center justify-center border-b border-neutral-900"
        >
          <div
            class="text-center font-['Roboto'] text-base font-normal leading-normal text-neutral-900"
          >
            Crea utente
          </div>
        </div>
      </div>
    </div>
    <img
      class="absolute left-[72px] top-[32px] h-[33px] w-[138px]"
      src="https://via.placeholder.com/138x33"
    />
  </div>
</template>
