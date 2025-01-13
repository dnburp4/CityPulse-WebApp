
<script setup>
import { useUserStore } from "../stores/user";


// const userStore = useUserStore();
// const isSuperAdminHeader = userStore.user?.isSuperAdmin || false; 


defineProps({
  isUserLoggedIn: { 
    type: Boolean, 
    required: true 
  }, 
});

</script>


<template> 

<section class="hero">
        
        <header class="header">
            
            <img src="@/assets/LogoSVG_CityPulse.svg" alt="CityPulseLogo" id="CityPulseLogo">


            <!-- if yhe  -->
        <div v-if ="isUserLoggedIn">
        <RouterLink to="/restricted" id="profile-icon">
        <img src="@/assets/accountIcon.svg" alt="Profile Icon"> 
        </RouterLink>
        </div> 
        <div v-else>
        <RouterLink to="/login" id="profile-icon">
        <img src="@/assets/accountIcon.svg" alt="Profile Icon"> 
        </RouterLink>
        </div> 


    
        </header>

                    
        <RouterLink to="/alleevents" class="btn-custom btn-primary">Aktuelle Events</RouterLink>


        <p>Lust auf coole Events mit der Familie und Freunden?</p>
            <p>CityPulse zeigt dir die angesagtesten Events der Stadt!</p>   
            <p>Check das Feedback, hol dir Tickets und genieß die beste Zeit der Stadt!</p>

            <hr class="custom-line">

            <div class="button-container">
            <RouterLink to="/alleevents" class="circle-button events">Events</RouterLink>
            <RouterLink to="/news" class="circle-button news">News</RouterLink>
            <RouterLink to="/kontakt" class="circle-button contact">Kontakt</RouterLink>
            </div>

        
    </section>

</template>


<style>


body {
    margin: 0;
    font-family: Arial, sans-serif;
}

h1 {
    font-family: cursive, sans-serif; 
}

.header {
    display: grid;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#CityPulseLogo {
    width: 300px;
    height: auto;
}

#profile-icon {
    width: 100%; 
    height: 100%;
    position: absolute;
    top: 45px;
    right: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 999; 
    text-decoration: none; 
}

.hero {
    height: 100vh;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1)), /* Übergangsverlauf */
        url('@/assets/hintergrundNichtKlar.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.hero p {

    color: #ffffff;
    font-size: 1.2rem; 
    font-weight: bold; 
    font-family: "DM Sans", sans-serif;
    display: grid;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

.custom-line {
    border: none; 
    border-top: 3px solid white; 
    width: 90%; 
    margin: 30px auto;

    opacity: 1;
}

.btn-custom {
    background-color: #8A2BE2; 
    color: #ffffff; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 50px; 
    font-size: 1.4rem; 
    margin-top: 100px; 
    text-decoration: none;
    margin-bottom: 100px;
    font-family: "Rubik", sans-serif;
}

.btn-custom:hover {
    background-color: #FFA500; 
    color: #fff; 
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 30px; 
}



.circle-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px; 
    height: 80px;
    border-radius: 50%; 
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none; 
    transition: background-color 0.3s; 
    font-family: "Rubik", sans-serif;
}


.events {
    background-color: #A020F0; 
}

.news {
    background-color: #4B0082; 
}

.contact {
    background-color: #FFD700; 
}


</style>