<template>

    <div class="event-card">
                    <img src="@/assets/images/tomorrowland.jpg" alt="">
    
                <div class="event-card-text">
    
                    
                    <h2><a href="tomorrowland.html">Tomorrowland</a></h2>
    
                    <img src="@/assets/calender.svg" alt="date">
                    <p>Di, 05. Nov | 20:00</p>
    
                    <img src="@/assets/location.svg" alt="calender">
                    <i>HTWG Konstanz</i>
    
    
                </div>
    
                <div class="review-container">
                    <img src="@/assets/star-fill.svg" alt="reviews">
                    <img src="@/assets/star-fill.svg" alt="reviews">
                    <img src="@/assets/star-fill.svg" alt="reviews">
                    <img src="@/assets/star-fill.svg" alt="reviews">
                </div>
    
                
                
                </div>
    
    </template>

    
    
    
    
    <style>
    
    
    .event-card {
        background-color: #57164A;
        border-radius: 8px;
        text-align: center;
        overflow: hidden;
    }
    
    .event-card img {
        width: 100%; 
        height: 200px; 
        object-fit: cover; 
        border-top-left-radius: 8px; 
        border-top-right-radius: 8px; 
    }
    
    
    .event-card-text{
        padding: 30px;
        font-family: "Rubik", sans-serif;
    }
    
    .event-card-text img {
        width: 20px;
        height: 20px;
        float: left;
    }
    
    
    .event-card h2 a {
        color: white; 
        text-decoration: none; 
    }
    
    .event-card h2 a:hover {
        text-decoration: underline; 
        color: #FFD700; 
    }
    
    
    .review-container img {
        width: 20px;
        height: 20px;
        align-items: center;
        margin-bottom: 20px;
    }
    
    
    
    </style>