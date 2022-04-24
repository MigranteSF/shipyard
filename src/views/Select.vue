<template>
  <section>
    <h1 class="mb-7">Select</h1>

    <div class="ml-3">
      <div class="mb-3">
        <h2 class="mb-2">Vanilla</h2>
        <div class="mb-2 border p-3 rounded">
          <div class="flex">
            <div class="form-select mr-2" style="width: 339px">
              <select name="select">
                <option value="value1">Select item</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <span class="select-focus"></span>
            </div>
            <div class="form-select" style="width: 339px">
              <select name="select" disabled>
                <option value="value1">Select item</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
              </select>
              <span class="select-focus"></span>
            </div>
          </div>
        </div>
        <div class="code">
          <code>
            &lt;<em>div</em> <i>class</i>="form-select"&gt;<br>
            &nbsp;&nbsp;&lt;<em>select</em> <i>name</i>="select"&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value1"&gt;Select item&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value2"&gt;Value 2&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value3"&gt;Value 3&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>/select</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="select-focus"&gt;&lt;<em>/span</em>&gt;<br>
            &lt;<em>/div</em>&gt;<br>
            &lt;<em>div</em> <i>class</i>="form-select"&gt;<br>
            &nbsp;&nbsp;&lt;<em>select</em> <i>name</i>="select" <i>disabled</i>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value1"&gt;Select item&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value2"&gt;Value 2&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>option</em> <i>value</i>="value3"&gt;Value 3&lt;<em>/option</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>/select</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="select-focus"&gt;&lt;<em>/span</em>&gt;<br>
            &lt;<em>/div</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Vue Component</h2>
        <h4 class="mb-2">select-form</h4>
        <div class="flex mb-2 border p-3 rounded">
          <div class="mr-3" style="width: 339px">
            <small>type-text="false"</small>
            <select-form
              v-model="selectValueB"
              :options="['Afghanistan', 'Albania', 'Algeria']"
              placeholder="Select Item"
            />
          </div>
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
        </div>
        <div class="code">
          <code>
            &lt;<em>template</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>div</em>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>select-form</em> <i>class</i>="form-select"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>v-model</i>="selectValueB"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<i>options</i>="['Afghanistan', 'Albania', 'Algeria']"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>placeholder</i>="Select Item"/&gt;<br>

            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>select-form</em> <i>class</i>="form-select"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>v-model</i>="selectValue"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<i>options</i>="selectOptions"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>value-field</i>="code"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>text-field</i>="name"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<i>type-text</i>="true"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>placeholder</i>="Select Item"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>/div</em>&gt;<br>
            &lt;<em>/template</em>&gt;<br>
            &lt;<em>script</em>&gt;<br>
            &nbsp;&nbsp;<em class="b">export default</em> {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<em>data</em>() {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em class="b">return</em> {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>selectValue:</i> null,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>selectValueB:</i> "Albania",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>selectOptions:</i> [<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <i>name:</i> "Afghanistan", <i>code:</i> "AF" },<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <i>name:</i> "Åland Islands", <i>code:</i> "AX" },<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <i>name:</i> "Albania", <i>code:</i> "AL" },<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <i>name:</i> "Algeria", <i>code:</i> "DZ" }, ...<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;};<br>
            &lt;<em>/script</em>&gt;<br>
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SelectForm from '../components/SelectForm/SelectForm.vue';

export default {
  components: { SelectForm },
  name: "Select",
  data() {
    return {
      selectValue: null,
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
    }
  }
};
</script>