<script>

    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();



    let version = "0.0.1";

    navigator.serviceWorker.ready.then((registration) => {
        // console.log("READY");
        registration.active.postMessage("Hi service worker");
    });
    navigator.serviceWorker.addEventListener("message", (d) => {
        // console.log(d);
        version = d.data.version;
    });




</script>

<main>

</main>


<style>


</style>
