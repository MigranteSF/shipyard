<template>
  <section>
    <h1 class="mb-7">Breadcrumb <small>vanilla</small></h1>

    <div class="ml-3">
      <div class="mb-2 border p-3 rounded">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Shipyard1</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Shipyard2</a>
          </li>
          <li class="breadcrumb-item active">Shipyard3</li>
        </ol>
      </div>
      <div class="code">
        <code>
          &lt;<em>ol</em> <i>class</i>="breadcrumb"&gt;<br>
          &nbsp;&nbsp;&lt;<em>li</em> <i>class</i>="breadcrumb-item"&gt;<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>a</em> <i>href</i>="#"&gt;Shipyard1&lt;<em>/a</em>&gt;<br>
          &nbsp;&nbsp;&lt;<em>/li</em>&gt;<br>
          &nbsp;&nbsp;&lt;<em>li</em> <i>class</i>="breadcrumb-item"&gt;<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<em>a</em> <i>href</i>="#"&gt;Shipyard2&lt;<em>/a</em>&gt;<br>
          &nbsp;&nbsp;&lt;<em>/li</em>&gt;<br>
          &nbsp;&nbsp;&lt;<em>li</em> <i>class</i>="breadcrumb-item active"&gt;Shipyard3&lt;<em>/li</em>&gt;<br>
          &lt;<em>/ol</em>&gt;
        </code>
      </div>
      <small class="egg">
        What did you expect? a
        <b class="cursor-default" @mouseover="upCat = true" @mouseleave="upCat = false">cat</b>?
        <span :style="{visibility: upCat ? 'visible' : 'hidden'}">
          <i class="fa-solid fa-cat"></i>
        </span>
      </small>
    </div>
  </section>
</template>
<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      upCat: false
    }
  }
};
</script>
<style scoped>
.egg {
  position: absolute;
  right: 15px;
}
</style>