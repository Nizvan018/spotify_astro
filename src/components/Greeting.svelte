<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = "";

    if (currentHour < 12) {
        greeting = "Buenos días";
    } else if (currentHour < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
</script>

<h2 class="mb-4 text-4xl font-bold">{greeting}</h2>
