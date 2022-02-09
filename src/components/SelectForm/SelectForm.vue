<template>
  <div>
    <!-- Problema al usar Dropdown de Bootstrap
      El boton principal no se puede editar a gusto
    -->
    <!-- <b-dropdown class="v-form-select" ref="dropdown" variant="none">
      <template #button-content>
        <input
          class="v-form-select__input"
          :type="typeText ? 'text' : 'button'"
          :value="setValue"
          :placeholder="placeholder"
          spellcheck="false"
          @click="dropList()"
          @input="changeText($event.target.value)"
        />
        <span class="select-focus"></span>
      </template>
      <b-dropdown-form @submit.stop.prevent style="width: 100% !important;">
        <ul ref="list" x-placement="bottom-start" v-click-outside="outList">
          <li
            v-for="option in selectOptions"
            :key="option.id"
            :value="option.id"
            @click="selectOption($event)"
          >
            {{ option.data }}
          </li>
        </ul>
      </b-dropdown-form>
    </b-dropdown> -->
    <div class="v-form-select">
      <input
        class="v-form-select__input"
        :type="typeText ? 'text' : 'button'"
        :value="setValue"
        :placeholder="placeholder"
        spellcheck="false"
        @click="dropList()"
        @input="changeText($event.target.value)"
      />
      <span class="select-focus"></span>
      <ul
        ref="list"
        x-placement="bottom"
        v-click-outside="outList"
        v-out-view="() => {}"
      >
        <li
          v-for="option in selectOptions"
          :key="option.id"
          :value="option.id"
          @click="selectOption($event)"
        >
          {{ option.data }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { placement } from "../../utils/placement";

export default {
  name: "select-form",
  props: {
    value: null,
    options: { type: Array, default: () => [] },
    typeText: { type: Boolean, default: false },
    valueField: { type: String, default: "" },
    textField: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
  data() {
    return {
      displayTimes: 1,
      selectOptionsAll: [],
      selectOptions: [],
      selectPlaceholder: this.typeText ? "" : this.placeholder,
      selectValue: this.value,
    };
  },
  methods: {
    dropList() {
      this.displayTimes = 0;
      this.$refs.list.style.display = "block";
      this.$refs.list.classList.add("show");
      placement(this.$refs.list);
    },
    outList: function () {
      if (this.$refs.list?.style.display == "none") return;
      this.displayTimes++;
      if (this.displayTimes == 2) {
        this.$refs.list.style.display = "none";
        this.$refs.list.classList.remove("show");
      }
    },
    setOptions() {
      this.selectOptions = [];
      this.options?.forEach((option) => {
        this.selectOptions.push({
          id: option[this.valueField] ?? option,
          data: option[this.textField] ?? option,
        });
      });
      this.selectOptionsAll = this.selectOptions;
    },
    selectOption(event) {
      this.setSelected(event.target.getAttribute("value"));
      this.$emit("input", this.selectValue.id);
      this.$refs.list.style.display = "none";
    },
    setSelected(id) {
      this.selectValue = this.selectOptionsAll.find(
        (option) => id == option.id
      );
    },
    changeText(value) {
      this.selectValue = value;
      this.selectOptions = this.selectOptionsAll?.filter((option) => {
        if (
          option.id.toLowerCase().includes(value.toLowerCase()) ||
          option.data.toLowerCase().includes(value.toLowerCase())
        )
          return option;
      });
      this.dropList();
    },
  },
  mounted() {
    this.setOptions();
    if (this.value) this.setSelected(this.value);
  },
  computed: {
    setValue() {
      if (this.typeText) return this.selectValue?.data ?? this.selectValue;

      return this.selectValue?.data ?? this.selectPlaceholder;
    },
  },
  watch: {
    value() {
      if (!this.typeText) this.setSelected(this.value);
    },
  },
};
</script>