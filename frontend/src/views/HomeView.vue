<template>
    <div class="banner">
        <img src="../assets/banner.png" alt="">
    </div>
    <div class="container">
        <div class="new_story">
            <h4>NEW STORY</h4>
        </div>
        <hr>
        <div class="card_container">
            <div class="card" v-for="i in 10" :key="i">
                <div class="img">
                    <img src="../assets/card.jpg" alt="">
                </div>
                <div class="info">
                    <p>Title</p>
                    <i class="material-icons">favorite_border</i>
                    <img class="add_wishlist" src="../assets/add_wishlist.png" alt="">

                </div>
            </div>
        </div>
        <div class="new_story">
            <h4>GENRES</h4>
        </div>
        <hr>
        <div class="card_container">
            <div class="card" v-for="i in 5" :key="i">
                <div class="img">
                    <img src="../assets/ganre.webp" alt="">
                </div>
                <div class="info">
                    <p>Title</p>
                    <i class="material-icons">favorite_border</i>
                    <img class="add_wishlist" src="../assets/add_wishlist.png" alt="">

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner img {
    width: 100%;
    height: 10%;

}

.new_story {
    display: flex;
    justify-content: flex-start;
    margin-top: 2%;
}

hr {
    margin-top: -10px;
}

.new_story h4 {
    background-color: rgb(73, 65, 65);
    padding: 10px;
    color: white;
    width: 200px;

}

.card_container {
    margin-top: 2%;
    display: flex;
    width: 100%;
    flex-wrap: wrap;

}

.card {
    background-color: rgb(182, 184, 182);
    width: 18%;
    border-radius: 5px;
    height: 20%px;
    margin: 1%;


}

.card img {
    width: 100%;
    border-radius: 5px;
    margin-top: 0;
    height: 90%;
}

.info {
    display: flex;
    margin-top: 0;
    padding: 10px;
    /* background-color: aqua; */
}

i {
    margin-left: 40px;
    margin-bottom: 20px;

}

.info img {
    width: 15%;
    height: 60%;
    margin-left: 25%;



}

@media (max-width: 600px) {
    .card {

        width: 48%;

    }

    .new_story h4 {
        width: 120px;
        font-size: 15px;
    }

    .info {
        font-size: 20px;
    }

}

@media (min-width: 601px) and (max-width: 1024px) {
    .card {
        width: 31%;

    }

    .new_story h4 {
        width: 120px;
        font-size: 15px;
    }

    .info img {
        margin-left: 15%;
    }
}
</style>