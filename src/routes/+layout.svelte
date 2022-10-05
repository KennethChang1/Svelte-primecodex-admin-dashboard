<script>
    import SideBar from "../component/SideBar.svelte";
    import '../style.css';
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== "/"}
    <body>
        <main class="main" data-sveltekit-prefetch>
            <SideBar></SideBar>
            <div class="main-content">
                <slot></slot>
            </div>
        </main>
    </body>
{:else}
    <slot></slot>
{/if}

<style>
    .main-content{
        width: 90%;
    }
</style>