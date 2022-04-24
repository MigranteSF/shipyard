<template>
  <section>
    <h1 class="mb-7">Chip</h1>

    <div class="ml-3">
      <div class="mb-3">
        <h2 class="mb-2">Checkbox Type</h2>
        <div class="mb-2 border p-3 rounded">
          <label class="chip mr-2">
            <input type="checkbox"/>
            <span class="control-input">Shipyard</span>
          </label>
          <label class="chip">
            <input type="checkbox" checked/>
            <span class="control-input">Migrante</span>
          </label>
        </div>
        <div class="code">
          <code>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Shipyard&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox" <i>checked</i>/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Migrante&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Radio Type</h2>
        <div class="mb-2 border p-3 rounded">
          <label class="chip mr-2">
            <input type="radio" name="radio_type" checked/>
            <span class="control-input">Shipyard</span>
          </label>
          <label class="chip">
            <input type="radio" name="radio_type"/>
            <span class="control-input">Migrante</span>
          </label>
        </div>
        <div class="code">
          <code>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="radio" <i>name</i>="radio_type" <i>checked</i>/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Shipyard&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="radio" <i>name</i>="radio_type"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Migrante&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Variants</h2>
        <h4 class="ml-2 mb-2">Check Done</h4>
        <div class="mb-2 border p-3 rounded">
          <label class="chip mr-2">
            <input type="checkbox"/>
            <span class="control-input check">Shipyard</span>
          </label>
          <label class="chip">
            <input type="checkbox" checked/>
            <span class="control-input check">Migrante</span>
          </label>
        </div>
        <div class="code">
          <code>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input check"&gt;Shipyard&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="chip"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox" <i>checked</i>/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input check"&gt;Migrante&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h4 class="ml-2 mb-2">Colors</h4>
        <div class="mb-2 border p-3 rounded">
          <label class="chip primary mr-2">
            <input type="checkbox" checked/>
            <span class="control-input">Primary</span>
          </label>
          <label class="chip primary mr-2">
            <input type="checkbox" checked/>
            <span class="control-input check">Primary</span>
          </label>
          <label class="chip primary mr-2">
            <input type="radio" name="radio_type"/>
            <span class="control-input">Primary</span>
          </label>
        </div>
        <div class="code">
          <code>
            &lt;<em>label</em> <i>class</i>="chip primary"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Primary&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="chip primary"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="checkbox" <i>checked</i>/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Primary&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="chip primary"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>type</i>="radio" <i>name</i>="radio_type"/&gt;<br>
            &nbsp;&nbsp;&lt;<em>span</em> <i>class</i>="control-input"&gt;Primary&lt;<em>/span</em>&gt;<br>
            &lt;<em>/label</em>&gt;
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Chip",
};
</script>