<template>
  <div class="mt-10 flex flex-col bg-fill">
    <div class="mx-4 my-2 overflow-x-auto sm:mx-6 lg:mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5"
        >
          <the-table>
            <template #header>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Nome
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Ragione Sociale
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Codice Fiscale
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Numero dipendenti
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Ultimo aggiornamento
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Pec
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Procedimenti concorsuali
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Azioni
                </th>
              </tr>
            </template>
            <template #body>
              <tr v-for="(company, index) in data" :key="index">
                <td
                  class="w-full whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
                >
                  {{ company.name }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.legalForm }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.fiscalCode }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.employeesNumber }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.lastUpdate }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.pec }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 pl-4 text-sm font-medium text-gray-500"
                >
                  {{ company.proceedings }}
                </td>
                <td
                  class="realtive sm-pr-6 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium"
                >
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
</script>

<style lang="scss" scoped></style>
