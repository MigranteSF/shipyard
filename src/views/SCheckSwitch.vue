<template>
  <section>
    <h1 class="mb-7">Switch</h1>

    <div class="ml-3">
      <div class="mb-3">
        <h2 class="mb-2">Vanilla</h2>
        <p>You can use any tag, the important thing is the <b>class</b>.</p>
        <div class="mb-2 border p-3 rounded">
          <label class="custom-switch">
            <input id="shipyard_a" type="checkbox" class="custom-control-input">
            <label class="custom-control-label" for="shipyard_a">
              Shipyard <b><i class="fa-solid fa-cat"/></b>
            </label>
          </label>
          <div class="custom-switch mb-2">
            <input id="shipyard_b" type="checkbox" class="custom-control-input">
            <label class="custom-control-label" for="shipyard_b"></label>
          </div>
          <div class="flex">
            <div class="custom-switch">
              <input id="shipyard_c" type="checkbox" class="custom-control-input" disabled>
              <label class="custom-control-label" for="shipyard_c"></label>
            </div>
            <div class="custom-switch">
              <input id="shipyard_d" type="checkbox" class="custom-control-input" checked disabled>
              <label class="custom-control-label" for="shipyard_d"></label>
            </div>
          </div>
        </div>
        <div class="code">
          <code>
            &lt;<em>label</em> <i>class</i>="custom-switch"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>id</i>="shipyard_a" <i>type</i>="checkbox" <i>class</i>="custom-control-input"&gt;<br>
            &nbsp;&nbsp;&lt;<em>label</em> <i>class</i>="custom-control-label" <i>for</i>="shipyard_a"&gt;Shipyard&lt;<em>/label</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>div</em> <i>class</i>="custom-switch"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>id</i>="shipyard_b" <i>type</i>="checkbox" <i>class</i>="custom-control-input"&gt;<br>
            &nbsp;&nbsp;&lt;<em>label</em> <i>class</i>="custom-control-label" <i>for</i>="shipyard_b"&gt;&lt;<em>/label</em>&gt;<br>
            &lt;<em>/div</em>&gt;<br>
            &lt;<em>label</em> <i>class</i>="custom-switch"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>id</i>="shipyard_c" <i>type</i>="checkbox" <i>class</i>="custom-control-input" <i>disabled</i>&gt;<br>
            &nbsp;&nbsp;&lt;<em>label</em> <i>class</i>="custom-control-label" <i>for</i>="shipyard_c"&gt;Shipyard&lt;<em>/label</em>&gt;<br>
            &lt;<em>/label</em>&gt;<br>
            &lt;<em>div</em> <i>class</i>="custom-switch"&gt;<br>
            &nbsp;&nbsp;&lt;<em>input</em> <i>id</i>="shipyard_d" <i>type</i>="checkbox" <i>class</i>="custom-control-input" <i>checked</i> <i>disabled</i>&gt;<br>
            &nbsp;&nbsp;&lt;<em>label</em> <i>class</i>="custom-control-label" <i>for</i>="shipyard_d"&gt;&lt;<em>/label</em>&gt;<br>
            &lt;<em>/div</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Bootstrap Component</h2>
        <p>It also affects <a href="https://bootstrap-vue.org/docs/components/form-checkbox#switch-style-checkboxes" target="_blank">bootstrap components</a>.</p>
        <div class="mb-2 border p-3 rounded">
          <b-form-checkbox name="check-button" switch>
            Switch Checkbox <b>(Bootstrap component)</b>
          </b-form-checkbox>
        </div>
        <div class="code">
          <code>
            &lt;<em>b-form-checkbox</em> <i>name</i>="check-button" <i>switch</i>&gt;<br>
            &nbsp;&nbsp;Switch Checkbox &lt;<em>b</em>(Bootstrap component)&lt;<em>/b</em>&gt;<br>
            &lt;<em>/b-form-checkbox</em>&gt;
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SCheckSwitch"
};
</script>