<template>
  <section>
    <h1 class="mb-7">Typography</h1>

    <div class="ml-3">
      <div class="mb-5">
        <h2>Body</h2>
        <div class="m-2">
          <small class="d-block">Family: Poppins</small>
          <small class="d-block">Color: #484848</small>
          <small class="d-block">Font size: 14px</small>
        </div>
        Donec porttitor vehicula vulputate. In dictum neque urna, non aliquet ex luctus non. Quisque blandit tellus eu purus ultrices, quis scelerisque lectus pharetra.
      </div>

      <div class="mb-5">
        <h2 class="mb-2">Titles</h2>
        <table class="w-100 mb-2">
          <thead>
            <tr>
              <th class="w-40">Tag / Class</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
              <td><h1>h1. Shipyard</h1></td>
            </tr>
            <tr>
              <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
              <td><h2>h2. Shipyard</h2></td>
            </tr>
            <tr>
              <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
              <td><h3>h3. Shipyard</h3></td>
            </tr>
            <tr>
              <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
              <td><h4>h4. Shipyard</h4></td>
            </tr>
            <tr>
              <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
              <td><h5>h5. Shipyard</h5></td>
            </tr>
            <tr>
              <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
              <td><h6>h6. Shipyard</h6></td>
            </tr>
            <tr>
              <td><code>.subtitle</code></td>
              <td><span class="subtitle">subtitle. Shipyard</span></td>
            </tr>
          </tbody>
        </table>
        <div class="rounded bg-neutral-10 p-4">
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h1</span>&gt;h1. Shipyard&lt;<span class="info-80">/h1</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h2</span>&gt;h2. Shipyard&lt;<span class="info-80">/h2</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h3</span>&gt;h3. Shipyard&lt;<span class="info-80">/h3</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h4</span>&gt;h4. Shipyard&lt;<span class="info-80">/h4</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h5</span>&gt;h5. Shipyard&lt;<span class="info-80">/h5</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">h6</span>&gt;h6. Shipyard&lt;<span class="info-80">/h6</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="subtitle"&gt;subtitle. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="mb-2">Texts</h2>
        <p>
          Lorem ipsum dolor sit amet,
          <span class="italic">consectetur adipiscing elit</span>.
          Etiam eget <small>elementum quam</small>, fermentum <i class="fa-solid fa-cat"></i>
          miau eros <a href="#">tincidunt in</a>. Etiam maximus, <span class="bold">odio ac gravida scelerisque</span>,
          lacus velit lobortis massa, vitae gravida sem neque vel enim. Integer
          ipsum lacus, <span class="underline">porta vel dolor quis</span>, gravida commodo libero. In ut justo
          nisi. Quisque sodales tempus semper. Duis finibus tristique maximus.
          Etiam molestie diam nec ligula dignissim lobortis. Aliquam erat
          volutpat. Donec efficitur urna at lacus sagittis, ac accumsan erat
          commodo.
        </p>
        <table class="w-100 mb-2">
          <thead>
            <tr>
              <th class="w-40">Tag / Class</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;a&gt;&lt;/a&gt;</code></td>
              <td><a href="#">a. Shipyard</a></td>
            </tr>
            <tr>
              <td><code>&lt;small&gt;&lt;/small&gt; | .small</code></td>
              <td><small>small. Shipyard</small></td>
            </tr>
            <tr>
              <td><code>.regular</code></td>
              <td><span class="regular">regular. Shipyard</span></td>
            </tr>
            <tr>
              <td><code>&lt;em&gt;&lt;/em&gt; | .italic</code></td>
              <td><span class="italic">italic. Shipyard</span></td>
            </tr>
            <tr>
              <td><code>.p-medium</code></td>
              <td><span class="p-medium">p-medium. Shipyard</span></td>
            </tr>
            <tr>
              <td><code>&lt;b&gt;&lt;/b&gt; | .bold</code></td>
              <td><span class="bold">bold. Shipyard</span></td>
            </tr>
            <tr>
              <td><code>.bold-italic</code></td>
              <td><span class="bold-italic">bold-italic. Shipyard</span></td>
            </tr>
            <tr>
              <td><code>&lt;u&gt;&lt;/u&gt; | .underline</code></td>
              <td><span class="underline">underline. Shipyard</span></td>
            </tr>
          </tbody>
        </table>
        <div class="rounded bg-neutral-10 p-4">
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">a</span>&gt;a. Shipyard&lt;<span class="info-80">/a</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">small</span>&gt;small. Shipyard&lt;<span class="info-80">/small</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="regular"&gt;regular. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="italic"&gt;italic. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="p-medium"&gt;p-medium. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="bold"&gt;bold. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="bold-italic"&gt;bold-italic. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
          <code class="d-block primary-dark-100">
            &lt;<span class="info-80">span</span> <span class="error-100">class</span>="underline"&gt;underline. Shipyard&lt;<span class="info-80">/span</span>&gt;
          </code>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Typography"
}
</script>