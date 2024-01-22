<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { Ref } from "vue";

import { RouterLink, RouterView } from "vue-router";

import TheButton from "@/components/button/TheButton.vue";

import { useChangeTheme } from "@/themes/composable/changeTheme";

import { useRequest } from "alova";
import { getTheme, getCustomerTheme } from "@/services/themeApi";

import { applyThemeIntoRoot } from "./themes/utils";
import { DEFAULT_THEME } from "./themes";
import type { ICompanyThemes } from "@/themes/types/themesTypes";
import { ThemeHandler } from "@/themes/types/themesTypes";

import TheSpinner from "@/components/spinner/TheSpinner.vue";

const currentTheme = DEFAULT_THEME;

watchEffect(() => {
  console.log("apply/change theme");
  applyThemeIntoRoot(currentTheme);
});

// alternare la chiamata api getTheme o getCustomerTheme, nel foglio index.ts cambiare  DEFAULT_THEME = ref(Theme.DESIGN_SYSTEM_CUSTOMER);
// è una verisone mockata, un domani mi immagino di fare una post dicendo chi sono e mi devono scendere due oggetti, uno per il tema light e uno per quello dark
const {
  data: companyThemes,
  loading,
  onSuccess,
} = useRequest(getCustomerTheme, {
  initialData: [],
});
onSuccess(applyThemeFromUserPreference);

const { applyLightTheme, applyDarkTheme } = useChangeTheme(
  companyThemes as Ref<ICompanyThemes>,
  currentTheme,
);

const iconArray = ref<string[]>([]);
const iconColor = ref("");

//la parte di valorizzazione di iconArray e iconColor non è ne tipizzata ne messa sotto funzione poichè non è detto che venga gestita in questo modo

function applyThemeFromUserPreference() {
  if (
    localStorage.theme === ThemeHandler.DARK ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    applyDarkTheme();
    iconArray.value = ["fas", "sun"];
    iconColor.value = "white";
    console.log("attivo dark da storage");
  } else {
    applyLightTheme();
    iconArray.value = ["fas", "moon"];
    iconColor.value = "black";
    console.log("attivo light da storage");
  }
}

function changeTheme() {
  const thisTheme = document.documentElement.classList[0];
  if (thisTheme === ThemeHandler.DARK) {
    applyLightTheme();
    iconArray.value = ["fas", "moon"];
    iconColor.value = "black";
    console.log("attivo light da scelta utente");
  } else {
    applyDarkTheme();
    iconArray.value = ["fas", "sun"];
    iconColor.value = "white";
    console.log("attivo dark da scelta utente");
  }
}
</script>

<template>
  <div class="c-container">
    <div v-if="loading" class="c-container__spinner">
      <TheSpinner />
    </div>
    <div v-else class="c-container__main">
      <header class="header">
        <nav class="header__menu">
          <RouterLink to="/"><TheButton content="Keycloack" /></RouterLink>
          <RouterLink to="/table"
            ><TheButton content="Acc/Res Table" />
          </RouterLink>
          <RouterLink to="/scrollTable"
            ><TheButton content="Scroll Table" />
          </RouterLink>
        </nav>
        <div class="header__theme">
          <font-awesome-icon
            @click="changeTheme"
            :icon="iconArray"
            :color="iconColor"
            class="icon"
          ></font-awesome-icon>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-container {
  @apply min-h-screen w-screen bg-fill;
  &__spinner {
    @apply flex h-screen items-center justify-center;
  }
  &__main {
    @apply h-full p-12;
    .header {
      @apply flex justify-between;
      &__menu {
        @apply flex gap-4;
      }
      &__theme {
        .icon {
          @apply h-7 w-7 cursor-pointer;
        }
      }
    }
  }
}
</style>
