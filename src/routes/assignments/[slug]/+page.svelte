<script>
    /** @type {import('./$types').PageData} */ 
    export let data;

    const screens = [1,2,3];
    let previewValue = 1;
    
</script>

<div class="container-fluid pt-5 pb-1 coverpage">
    <h1 class="display-1 text-white">{data.title}</h1>
</div>

<div class="lead pb-5">
  <a href="../">Home</a> > <a href="/assignments">Assignments</a> > {data.title}
</div>

<div class="container border border-lg pb-3 pl-5 pr-5">
    <img    class="img-fluid rounded "
            src="/assignments/details/assignment{data?.slug}/screen{previewValue}.png" 
            alt="screenshot of assignment material">
</div>

<div class="album py-5 bg-light">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {#each screens as screen}
                <div class="col" id="m{screen}">
                    <div class="card-body">
                        <button class="btn btn-secondary" 
                                on:click={() => previewValue = screen}>
                            expand
                        </button>
                    </div>
                    <div class="card shadow-sm">
                        <img src="/assignments/details/assignment{data?.slug}/screen{screen}.png" alt="screenshot of assignment material">
                    </div>
                </div> 
            {/each}

        </div>
    </div>
</div>



<style>
    .coverpage {
        background-image: url('/assignments/backgroundimage.png');
    }
</style>