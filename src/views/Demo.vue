<template>
  <div class="shadow-light-100 p-3 m-3 bg-white">
    <main>

      <!-- <migrante-logo /> -->

      <section class="mt-3">
        <h1>Chips</h1>
        <h3>Checkbox Type</h3>
        <label class="chip">
          <input type="checkbox"/>
          <span class="control-input">Migrante</span>
        </label>
        <label class="chip">
          <input type="checkbox" checked/>
          <span class="control-input">Migrante</span>
        </label>
        <label class="chip">
          <input type="checkbox" checked/>
          <span class="control-input check">Migrante</span>
        </label>
        <label class="chip primary">
          <input type="checkbox" checked/>
          <span class="control-input check">Migrante</span>
        </label>
        <h3>Radio Type</h3>
        <div class="flex">
          <label class="chip">
            <input type="radio" name="radio_type"/>
            <span class="control-input">Migrante</span>
          </label>
          <label class="chip">
            <input type="radio" name="radio_type"/>
            <span class="control-input">Migrante</span>
          </label>
        </div>
      </section>

      <section class="mt-3">
        <h1>Inputs</h1>
        <h3>Select <small>vanilla</small></h3>
        <div class="form-select" style="width: 339px">
          <select name="select">
            <option value="value1">Select item</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
          <span class="select-focus"></span>
        </div>

        <h3 class="mt-3">Checkbox - Radiobuttons <small>vanilla</small></h3>
        <div class="flex">
          <label class="form-checkbox mr-3 mb-1">
            Hi
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="form-checkbox">
            <input type="checkbox" checked disabled />
            <span>Hi</span>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="flex">
          <label class="form-radio mr-3">
            Hi
            <input type="radio" name="radiesito" />
            <span class="checkmark"></span>
          </label>
          <label class="form-radio">
            <input type="radio" name="radiesito" checked disabled />
            <span>Hi</span>
            <span class="checkmark"></span>
          </label>
        </div>

        <h3 class="mt-3">Switch  <small>vanilla (Bootstrap-based)</small></h3>
        <div class="custom-switch">
          <input type="checkbox" class="custom-control-input" id="switch_a">
          <label class="custom-control-label" for="switch_a">
            Switch Checkbox <b>(Vanilla)</b>
          </label>
        </div>
        <div class="custom-switch">
          <input type="checkbox" class="custom-control-input" id="switch_b">
          <label class="custom-control-label" for="switch_b"></label>
        </div>
        <div class="flex">
          <div class="custom-switch">
            <input type="checkbox" class="custom-control-input" id="switch_c" disabled>
            <label class="custom-control-label" for="switch_c"></label>
          </div>
          <div class="custom-switch">
            <input type="checkbox" class="custom-control-input" id="switch_d" checked disabled>
            <label class="custom-control-label" for="switch_d"></label>
          </div>
        </div>
        <b-form-checkbox name="check-button" switch>
          Switch Checkbox <b>(Bootstrap component)</b>
        </b-form-checkbox>
      </section>

      <section class="mt-3">
        <h1>Card</h1>
        <div class="card shadow-light-20">
          <div class="card-header justify-space-between">
            <span class="subtitle neutral-70">Table</span>
            <button class="button button-negative button-sm">Create</button>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <b-table
                id="inventory_table"
                responsive
                hover
                :items="itemsTable"
                :per-page="per_page"
                :current-page="current_page"
              >
              </b-table>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-3">
        <h1>Breadcrumbs <small>vanilla</small></h1>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Hola</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Hola2</a>
          </li>
          <li class="breadcrumb-item active">Hola3</li>
        </ol>
      </section>

      <section class="mt-3">
        <h1>Tabs</h1>
        <ul role="tablist" class="nav nav-tabs mb-4">
          <li role="presentation" class="nav-item">
            <a role="tab" class="nav-link active disabled">First</a>
          </li>
          <li role="presentation" class="nav-item">
            <a role="tab" class="nav-link">Second</a>
          </li>
          <li role="presentation" class="nav-item">
            <a role="tab" class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <small>(Bootstrap component)</small>
        <b-tabs content-class="mt-3">
          <b-tab title="First" active><p>I'm the first tab</p></b-tab>
          <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
      </section>

      <section class="mt-3">
        <h1>Vue Components</h1>
        <h3>Select <small>select-form</small></h3>
        <div class="flex">
          <div class="mr-3" style="width: 339px">
            <small>type-text="true"</small>
            <select-form
              v-model="selectValue"
              :options="selectOptions"
              value-field="code"
              text-field="name"
              :type-text="true"
              placeholder="Select Item"
            />
          </div>
          <div style="width: 339px">
            <small>type-text="false"</small>
            <select-form
              v-model="selectValueB"
              :options="['Afghanistan', 'Albania', 'Algeria']"
              placeholder="Select Item"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      selectValue: "",
      selectValueB: "Albania",
      selectOptions: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
      ],
      itemsTable: [
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
        {
          Cta: 0,
          Estado: "A pagar",
          "Saldo Insoluto": "$1.500.000",
          Capital: "$0",
          Intereses: "$0",
          MORA: "$0",
          "Monto Cuota": "$195.491",
          "Pagado por cliente": "--",
          "Capital pagado": "--",
          "Intereses pagados	": "--",
          "MORA Pagada": "$0",
          Vto: "24/12/21",
          "Fecha de pago": "24/12/21",
        },
      ],
      current_page: 1,
      per_page: 10,
    };
  },
};
</script>
<style>
.section-btn .button {
  min-width: 166px;
}
.section-btn .button-sm {
  min-width: 123px;
}
.section-btn .button-outline {
  width: auto;
}
.section-btn .grid {
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  align-items: center;
}
</style>