<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    Prueba Vue
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav ms-auto">
                        <div class="nav-item">
                            <router-link exact-active-class="active" :to="{name: 'Home' }" class="nav-link">Inicio</router-link>
                        </div>
                        <div class="nav-item">
                            <router-link exact-active-class="active" :to="{name: 'Lista' }" class="nav-link">Lista Clientes</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid py-4">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {}
</script>
