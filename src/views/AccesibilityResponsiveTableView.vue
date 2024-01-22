<template>
  <div class="mt-10 flex flex-col bg-fill">
    <div class="mx-4 my-2 sm:mx-6 lg:mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5"
        >
          <the-table>
            <template #header>
              <tr>
                <th scope="col" class="h-col">Nome</th>
                <th scope="col" class="h-col">Ragione Sociale</th>
                <th scope="col" class="h-col h-col--lg">Codice Fiscale</th>
                <th scope="col" class="h-col h-col--xl">Numero dipendenti</th>
                <th scope="col" class="h-col h-col--xl">
                  Ultimo aggiornamento
                </th>
                <th scope="col" class="h-col h-col--lg">Pec</th>
                <th scope="col" class="h-col h-col--xl">
                  Procedimenti concorsuali
                </th>
                <th scope="col" class="h-col">Azioni</th>
              </tr>
            </template>
            <template #body>
              <tr v-for="(company, index) in data" :key="index">
                <td class="b-main-col">
                  {{ company.name }}
                  <dl class="description">
                    <dt class="description__title">Codice Fiscale</dt>
                    <dd class="description__desc description__desc-main">
                      {{ company.fiscalCode }}
                    </dd>
                    <dt class="description__title">Pec</dt>
                    <dd class="description__desc description__desc-sub">
                      {{ company.pec }}
                    </dd>
                  </dl>
                </td>
                <td class="b-sub-col">
                  {{ company.legalForm }}
                </td>
                <td class="b-sub-col b-sub-col--lg" :class="classes">
                  {{ company.fiscalCode }}
                </td>
                <td class="b-sub-col b-sub-col--xl">
                  {{ company.employeesNumber }}
                </td>
                <td class="b-sub-col b-sub-col--xl">
                  {{ company.lastUpdate }}
                </td>
                <td class="b-sub-col b-sub-col--lg" :class="classes">
                  {{ company.pec }}
                </td>
                <td class="b-sub-col b-sub-col--xl">
                  {{ company.proceedings }}
                </td>
                <td class="b-sub-col-action">
                  {{ company.action }}
                </td>
              </tr>
            </template>
          </the-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTable from "@/components/table/TheTable.vue";

const data = [
  {
    name: "NET4MARKET - CSAMED S.R.L. ABBREVIABILE IN NET4MARKET S.R.L. O IN CSAMED S.R.L.",
    legalForm: "S.r.l.",
    fiscalCode: "02362600344",
    employeesNumber: "87",
    lastUpdate: "15/01/2024",
    pec: "csamed@pec.csamed.it",
    proceedings: "Nessuno",
    action: "modifica",
  },
  {
    name: "NET4MARKET",
    legalForm: "S.r.l.",
    fiscalCode: "02362600344",
    employeesNumber: "87",
    lastUpdate: "15/01/2024",
    pec: "csamed@pec.csamed.it",
    proceedings: "Nessuno",
    action: "modifica",
  },
  {
    name: "NET4MARKET - CSAMED S.R.L.",
    legalForm: "S.r.l.",
    fiscalCode: "02362600344",
    employeesNumber: "87",
    lastUpdate: "15/01/2024",
    pec: "csamed@pec.csamed.it",
    proceedings: "Nessuno",
    action: "modifica",
  },
  {
    name: "NET4MARKET - CSAMED S.R.L. ABBREVIABILE IN NET4MARKET S.R.L.",
    legalForm: "S.r.l.",
    fiscalCode: "02362600344",
    employeesNumber: "87",
    lastUpdate: "15/01/2024",
    pec: "csamed@pec.csamed.it",
    proceedings: "Nessuno",
    action: "modifica",
  },
];

let classes = "";

// Ottieni la dimensione del testo dell'elemento body
var bodyFontSize = window
  .getComputedStyle(document.body, null)
  .getPropertyValue("font-size");

// Confronta la dimensione del testo con quella predefinita
if (bodyFontSize !== "16px") {
  console.log("L'utente ha aumentato la dimensione del testo nel browser.");
  classes = "truncate max-w-20";
} else {
  console.log("La dimensione del testo è la predefinita.");
}
</script>

<style lang="scss" scoped>
@import "./viewsStyles/accessibilityResponsiveTableView.css";
</style>
