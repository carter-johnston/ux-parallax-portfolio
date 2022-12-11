<script>
    const assignments =  [
        {
            title: 'Landing Page Project',
            desc: 'Design a landing page taking into consideration lessons learned during UX/UI Design class. Document the process',
            improvement: '',
            src: 'assignments/assignment6.png',
            alt: 'display of a skyline landing page.',
            notion: '#',
            slug: '5',
        },
        {
            title: 'User Interface Redesign',
            desc: 'Pick an existing template and demonstrate design principles by altering it.',
            improvement: '',
            src: 'assignments/assignment1.png',
            alt: 'display of MacOS-ish Notes app.',
            slug: '1',
        },
        {
            title: 'Asset Library',
            desc: 'Designing a basic web UI and organizing items in an asset Library.',
            improvement: '',
            src: 'assignments/assignment2.png',
            alt: 'display of green web dashboard.', 
            slug: '2',

        },
        {
            title: 'Basic User Interface',
            desc: 'Designing a basic UI for a shopping application.',
            improvement: '',
            src: 'assignments/assignment3.png',
            alt: 'stock image of people moving a couch.',
            slug: '3', 
        },
        {
            title: 'Wireframe to Prototype',
            desc: 'Using a storyboard as a guideline, design a UI going from wireframe to prototype.',
            improvement: '',
            src: 'assignments/assignment5.png',
            alt: 'display of protptype artboards and some connections.',
            slug: '4', 
        },

    ];
</script>
<div class="container-fluid pt-5 pb-1 coverpage">
    <h1 class="display-1 text-white">UX Assignments</h1>
</div>

<div class="lead pb-5">
    <a href="../">Home</a> > Assignments
</div>

{#each assignments as assignment,index}
    <h2 class="text-center pt-5">{assignment?.title}</h2>
    <div class="container border border-lg pb-3 pl-5 pr-5">
        <div class="lead pb-2 pl-5 pr-5 pt-2 text-center">{assignment?.desc}</div>

        <img    class="img-fluid rounded mx-auto"
                src={assignment?.src} 
                alt={assignment?.alt}>

        <a href="assignments/{assignment?.slug}">
            <button class="btn btn-primary ml-2 mt-2">
                See more
            </button>
        </a>

        {#if assignment?.notion}
            <a href={assignment?.notion}>
                <button class="btn btn-secondary ml-2 mt-2">
                    Checkout the documented process
                </button>
            </a>
        {/if}

    </div>
{/each}

<style>
    .coverpage {
        background-image: url('/assignments/backgroundimage.png');
    }
    img {
        width: 100%;
    }
</style>