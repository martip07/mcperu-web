<template>
    <div class="container">
        <h1>Ultimas Noticias</h1>
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
            </div>
            </div>

            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        </div>
        <ul>
            <li>
                <h5>Blog Post 1</h5>
                <span>Miercoles 16, 2019</span>
                <p>Vista previa de la publicacion. Tiene mas contenido del que imaginas</p>
            </li>
            <li>
                <h5>Blog Post 2</h5>
                <span>Miercoles 10, 2019</span>
                <p>Vista previa de la publicacion. Tiene mas contenido del que imaginas</p>
            </li>
            <li>
                <h5>Blog Post 3</h5>
                <span>Domingo 16, 2019</span>
                <p>Vista previa de la publicacion. Tiene mas contenido del que imaginas</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeBlog"
}
</script>

<style scoped>
body {
  margin: 0px;
}

ul {
    list-style: none;
}
</style>