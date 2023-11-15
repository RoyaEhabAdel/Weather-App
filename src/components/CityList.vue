

<template>
    <div v-for="cit in savedCities" :key="city.id">
        <CityCard :city="city"/>

    </div>
</template>

<script setup>

const savedCities = ref([]);
const getCities = async () => {
    if(localStorage.getItem('savedCities')){
        savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
        const requests = []
        savedCities.value.forEach((cit) => {
            requests.push(axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperia`))
        });

        const weatherData = await Promise.all(requests);
        weatherData.forEach((value, index) => {
            savedCities.value[index].weather = value.data;
        });
    }
};

await getCities();
</script>


