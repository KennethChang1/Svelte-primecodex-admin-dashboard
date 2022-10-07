<script>
    import SideBar from "../component/SideBar.svelte";
    import '../style.css';
    import { page, navigating } from '$app/stores';
    import Heading from "../component/Heading.svelte";
</script>


{#if $page.url.pathname !== "/"}
    <body>
        <main class="main">
            <SideBar></SideBar>
            <div class="main-content">
                <Heading pageName="Dashboard"></Heading>
                {#if $navigating}
                    <p class="loader">Loading...</p>
                {:else}
                    <slot></slot>
                {/if}
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

    .loader{
        flex-grow: 1;
        text-align: center;
    }
</style>