<template>
  <div
    class="shadow-light-100"
    style="
      margin: 10px;
      background: #fff;
      padding: 10px;
      border-radius: 5px;
      height: 2500px;
    "
  >
    <!-- <migrante-logo /> -->
    <section>
      <h1>Colors</h1>
      <h3>Primary Brand</h3>
      <div class="flex">
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-primary" style="min-height: 63px; padding: 5px">
            <h5>primary</h5>
          </div>
          <div class="flex">
            <span
              class="bg-primary-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-20"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="primary-dark" style="width: 180px; border-radius: 4px">
          <div class="bg-secondary" style="min-height: 63px; padding: 5px">
            <h5>secondary</h5>
          </div>
          <div class="flex">
            <span
              class="bg-secondary-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-secondary-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-primary-dark" style="min-height: 63px; padding: 5px">
            <h5>primary-dark</h5>
          </div>
          <div class="flex">
            <span
              class="bg-primary-dark-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-dark-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-dark-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
      </div>

      <h3 class="mt-3">States</h3>
      <div class="flex">
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-success" style="min-height: 63px; padding: 5px">
            <h5>success</h5>
          </div>
          <div class="flex">
            <span
              class="bg-success-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-success-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-info" style="min-height: 63px; padding: 5px">
            <h5>info</h5>
          </div>
          <div class="flex">
            <span
              class="bg-info-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-info-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-info-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-100" style="width: 180px; border-radius: 4px">
          <div class="bg-warning" style="min-height: 63px; padding: 5px">
            <h5>warning</h5>
          </div>
          <div class="flex">
            <span
              class="bg-warning-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-warning-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-warning-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-error" style="min-height: 63px; padding: 5px">
            <h5>error</h5>
          </div>
          <div class="flex">
            <span
              class="bg-error-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-error-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-error-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <section class="flex mt-3">
      <div style="margin-right: 15px">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
      </div>
      <div style="width: 400px">
        <span class="subtitle">subtitle</span>
        <p>
          Lorem ipsum dolor sit amet,
          <span class="highlight-paragraph">consectetur adipiscing elit.</span>
          <a href="#">Etiam eget</a> <small>elementum quam</small>, fermentum
          rutrum eros tincidunt in. Etiam maximus, odio ac gravida scelerisque,
          lacus velit lobortis massa, vitae gravida sem neque vel enim. Integer
          ipsum lacus, porta vel dolor quis, gravida commodo libero. In ut justo
          nisi. Quisque sodales tempus semper. Duis finibus tristique maximus.
          Etiam molestie diam nec ligula dignissim lobortis. Aliquam erat
          volutpat. Donec efficitur urna at lacus sagittis, ac accumsan erat
          commodo.
        </p>
      </div>
    </section>

    <section class="mt-3">
      <h1>Badges</h1>
      <h3>Standar <small>Bootstrap component</small></h3>
      <div class="mb-2">
        <b-badge variant="primary">Primary</b-badge>
        <b-badge variant="secondary">Secondary</b-badge>
        <b-badge variant="success">Success</b-badge>
        <b-badge variant="danger">Danger</b-badge>
        <b-badge variant="warning">Warning</b-badge>
        <b-badge variant="info">Info</b-badge>
        <b-badge variant="light">Light</b-badge>
        <b-badge variant="dark">Dark</b-badge>
      </div>
      <h3>Pill <small>Bootstrap component</small></h3>
      <div>
        <b-badge pill variant="primary">Primary</b-badge>
        <b-badge pill variant="secondary">Secondary</b-badge>
        <b-badge pill variant="success">Success</b-badge>
        <b-badge pill variant="danger">Danger</b-badge>
        <b-badge pill variant="warning">Warning</b-badge>
        <b-badge pill variant="info">Info</b-badge>
        <b-badge pill variant="light">Light</b-badge>
        <b-badge pill variant="dark">Dark</b-badge>
      </div>
      <h3>Small <small>vanilla</small></h3>
      <div>
        <span class="badge badge-primary badge-pill badge-sm">Primary</span>
        <span class="badge badge-secondary badge-pill badge-sm">Secondary</span>
        <span class="badge badge-success badge-pill badge-sm">Success</span>
        <span class="badge badge-danger badge-pill badge-sm">Danger</span>
        <span class="badge badge-warning badge-pill badge-sm">Warning</span>
        <span class="badge badge-info badge-pill badge-sm">Info</span>
        <span class="badge badge-light badge-pill badge-sm">Light</span>
        <span class="badge badge-dark badge-pill badge-sm">Dark</span>
      </div>
    </section>

    <section class="mt-3">
      <h1>Chips</h1>
      <label class="chip">
        <input type="checkbox"/>
        <span class="control-input">Migrante</span>
      </label>
    </section>

    <section class="section-btn mt-3">
      <h1>Buttons</h1>
      <div class="grid">
        <button class="button button-primary">Active</button>
        <button class="button button-primary" disabled>Active</button>
        <button class="button button-primary button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-primary button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-secondary">Active</button>
        <button class="button button-secondary" disabled>Active</button>
        <button class="button button-secondary button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-secondary button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-negative">Active</button>
        <button class="button button-negative" disabled>Active</button>
        <button class="button button-negative button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-negative button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-dashed">
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-dashed" disabled>
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-dashed button-sm">
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-dashed button-sm" disabled>
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
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
        <label class="form-checkbox mr-3">
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