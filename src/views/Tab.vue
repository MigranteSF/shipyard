<template>
  <section>
    <h1 class="mb-7">Tab</h1>

    <div class="ml-3">
      <div class="mb-3">
        <div class="mb-2 border p-3 rounded">
          <ul role="tablist" class="nav nav-tabs mb-4">
            <li role="presentation" class="nav-item" title="active and disabled">
              <a role="tab" class="nav-link active disabled">First</a>
            </li>
            <li role="presentation" class="nav-item">
              <a role="tab" class="nav-link">Second</a>
            </li>
            <li role="presentation" class="nav-item">
              <a role="tab" class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="code">
          <code>
            &lt;<em>ul</em> <i>role</i>="tablist" <i>class</i>="nav nav-tabs"&gt;<br>
            &nbsp;&nbsp;&lt;<em>li</em> <i>role</i>="presentation" <i>class</i>="nav-item"&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>a</em> <i>role</i>="tab" <i>class</i>="nav-link active disabled"&gt;First&lt;<em>/a</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>/li</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>li</em> <i>role</i>="presentation" <i>class</i>="nav-item"&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>a</em> <i>role</i>="tab" <i>class</i>="nav-link"&gt;Second&lt;<em>/a</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>/li</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>li</em> <i>role</i>="presentation" <i>class</i>="nav-item"&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>a</em> <i>role</i>="tab" <i>class</i>="nav-link disabled"&gt;Disabled&lt;<em>/a</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>/li</em>&gt;<br>
            &lt;<em>/ul</em>&gt;
          </code>
        </div>
      </div>

      <div class="mb-3">
        <h2 class="mb-2">Bootstrap Component</h2>
        <p>It also affects <a href="https://bootstrap-vue.org/docs/components/tabs#tabs" target="_blank">bootstrap components</a>.</p>
        <div class="mb-2 border p-3 rounded">
          <b-tabs content-class="mt-3">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p class="cursor-default" title="Miau~">I'm a <i class="fa-solid fa-cat"></i></p></b-tab>
            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
          </b-tabs>
        </div>
        <div class="code">
          <code>
            &lt;<em>b-tabs</em> <i>content-class</i>="mt-3"&gt;<br>
            &nbsp;&nbsp;&lt;<em>b-tab</em> <i>title</i>="First" <i>active</i>&gt;&lt;<em>p</em>>&gt;I'm the first tab&lt;<em>/p</em>&gt;&lt;<em>/b-tab</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>b-tab</em> <i>title</i>="Second"&gt;&lt;<em>p</em>&gt;I'm the second tab&lt;<em>/p</em>&gt;&lt;<em>/b-tab</em>&gt;<br>
            &nbsp;&nbsp;&lt;<em>b-tab</em> <i>title</i>="Disabled" <i>disabled</i>&gt;&lt;<em>p</em>>&gt;I'm a disabled tab!&lt;<em>/p</em>&gt;&lt;<em>/b-tab</em>&gt;<br>
            &lt;<em>/b-tabs</em>&gt;
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Tab",
};
</script>