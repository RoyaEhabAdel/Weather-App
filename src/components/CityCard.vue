<template>
    <div class="flex p-6 ppx-3 bg-weather-secondary rounded-md shadow-md cursor-pointer">
        <div class="flex flex-col flex-1">
            <h2 class="text-3xl">{{  city.city }}</h2>
            <h3>{{ city.state }}</h3>
        </div>

        <div class="flex flex-col gap-2">
            <p class="text-3xl self-end">
                {{ Math.floor(Math.round(city.weather.main.temp)) }}&deg;
            </p>
        </div>
        
    </div>
</template>

<script setup>
    defineProps({
        city: {
            type: Object,
            default: () => {},
        }
    })
</script>