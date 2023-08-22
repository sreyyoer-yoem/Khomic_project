<template>
    <section>
    <div class="main-container">
        <div class="story-title">
            <div class="title">
                <h2>
                    Neang Romsay Sork
                </h2>
            </div>
            <div class="episode">
                <h3>#1- Episode Title</h3>
            </div>
        </div>
        <div class="top-bar-button">
            <div class="left-buttons">
                <div class="pre-episode">
                    <i class="material-icons">skip_previous</i>
                </div>
                <div class="pre-page">
                    <i class="material-icons">navigate_before</i>
                </div>
            </div>
            <div class="center-button">
                <div class="page-of">
                    Page 1 of 10
                </div>
            </div>
            <div class="right-buttons">
                <div class="next-page">
                    <i class="material-icons">navigate_next</i>
                </div>
                <div class="next-episode">
                    <i class="material-icons">skip_next</i>
                </div>
            </div>
        </div>
        <div class="story-container">
            <img src="../assets/story.jpg" alt="">
        </div>
        <div class="top-bar-button">
            <div class="left-buttons">
                <div class="pre-episode">
                    <i class="material-icons">skip_previous</i>
                </div>
                <div class="pre-page">
                    <i class="material-icons">navigate_before</i>
                </div>
            </div>
            <div class="center-button">
                <div class="pause">
                    <i class="material-icons">pause_circle_filled</i>
                </div>
            </div>
            <div class="right-buttons">
                <div class="next-page">
                    <i class="material-icons">navigate_next</i>
                </div>
                <div class="next-episode">
                    <i class="material-icons">skip_next</i>
                </div>
            </div>
        </div>
        <div class="more-story">
            <div class="previous">
                <i class="material-icons">keyboard_arrow_left</i>
            </div>
            <div class="stories ">
                <div class="story">
                    <img src="../assets/story.jpg" alt="">
                </div>
                <div class="story">
                    <img src="../assets/ep1.jpg" alt="">
                </div>
                <div class="story">
                    <img src="../assets/ep2.jpg" alt="">
                </div>
                <div class="story">
                    <img src="../assets/ep3.jpg" alt="">
                </div>
                <div class="story">
                    <img src="../assets/story.jpg" alt="">
                </div>
                <div class="story">
                    <img src="../assets/ep3.jpg" alt="">
                </div> 
                <div class="story">
                    <img src="../assets/ep1.jpg" alt="">
                </div> 
                <div class="story">
                    <img src="../assets/ep2.jpg" alt="">
                </div> 

            </div>
            <div class="next">
                <i class="material-icons">keyboard_arrow_right</i>
            </div>
        </div>
        <div class="creator">
            <div class="role">
                <p>Creator</p>
            </div>
            <div class="creator-info">
                <div class="profile">
                    <img src="../assets/profile.jpg" alt="">
                </div>
                <div class="creator-name">
                    Soknoeurn Srun
                </div>
            </div>
        </div>
        <div class="comments-container">
            <div class="comment">
                <p>Comments</p>
            </div>
            <div class="comment-box">
                <textarea name="comment" id="" cols="150" rows="10" placeholder="Leave a comment here..."></textarea>
                <hr>
                <div class="options">
                    <div class="left-option">
                        <p><b>GIF</b> </p>
                        <i class="material-icons">photo</i>|
                        <p><b>B</b></p>
                        <p style="font-style: italic;"><b>I</b></p>
                        <p><b><u>U</u></b></p>
                    </div>
                    <div class="comment-button">
                        <button>Comment</button>
                    </div>
                </div>
            </div>
            <div class="commenter">
                <div class="profile-info">
                    <div class="profile">
                        <img src="../assets/profile.jpg" alt="">
                    </div>
                    <div class="user-comment">
                        <div class="name">Gagomi</div>
                        <div class="time">
                            5 hours ago
                        </div>
                        <div class="text-comment">
                            Very good! Please release new episode!
                        </div>
                        <div class="like-dislike-reply">
                            <div class="like">
                                <i class="material-icons">thumb_up</i>
                                <p>20</p>
                            </div>
                            <div class="dislike">
                                <i class="material-icons">thumb_down</i>
                                <p>0</p>
                            </div>
                            <div class="reply">
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer>
        <div class="footer-top">
            footer-top
        </div>
        <div class="footer-bottom">
            footer-bottom
        </div>
    </footer>

    </section>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
body {
    width: 100%;
    font-family: sans-serif;
}
section {
    background: #e6e5e5;
    margin-top: -10px;
}
.main-container {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
.story-title {
    width: 100%;
    margin-top: 10px;
}
.title {
    display: flex;
    justify-content: center;
}
.episode {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
.top-bar-button {
    width: 30%;
    margin:30px auto;
    display: flex;
    justify-content: space-around;
}
.top-bar-button i {
    color: #6e6b6b;
    font-size: 20px;
}
.left-buttons {
    width: 10%;
    display: flex;
    gap: 38px;
}
.center-button {
    width: 80%;
    display: flex;
    justify-content: center;
}
.page-of {
    background: #dad8d8;
    padding: 5px;
    border-radius: 10px;
    color: #6e6b6b;
    /* border: 1px solid rgb(236, 236, 236); */
}
.right-buttons {
    width: 10%;
    display: flex;
    justify-content: flex-end;
    gap: 38px;
}
.pre-episode i, .pre-page i, .next-episode i, .next-page i, .pause i {
    font-size: 30px;
}
.story-container{
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
}
.story-container img {
    width: 50%;
    height: 100%;
}
.more-story{
    width: 100%;
    background: rgb(211, 226, 231);
    height: 25vh;
    display: flex;
}
.previous, .next {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
i {
    font-size: 50px;
    cursor: pointer;
}

.stories {
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    /* gap: 10px; */
}
.story{
    width: 12%;
    height: 20vh;
    margin: auto;
    border-radius: 10px;
}
.story:hover{
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.story img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.creator, .comments-container {
    width: 80%;
    margin: 30px auto ;
}
.role p ,  .comment p {
   font-size: 25px;
}
.creator-info {
    display: flex;
    gap: 20px;
    margin: 20px 0;
}
.profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.creator-info .creator-name {
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.comment-box {
    width: 50%;
    margin-top: 20px;
    background: #ececec;
    border-radius: 10px;

}
.comments-container .comment-box textarea{
    border: none;
    resize: none;
    background: none;
}
textarea:focus {

    outline: rgb(83, 199, 238);
}
.options {
    display: flex;
}
.left-option { 
    width: 80%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
}
.left-option i{ 
    font-size: 20px;
}
.options p , i {
    color: rgb(133, 133, 133);
}
.comment-button {
    width: 20%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
}
.comment-button button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: #c9c7c7;
    cursor: pointer;
}
.comment-button button:hover {
    background: green;
    color: white;
}
.commenter {
    width: 50%;
    margin-top: 10px;
}

.profile-info {
    display: flex;
}
.user-comment {
    width: 50%;
    padding: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: #a3a3a352;
    border-radius: 10px;
}

.time, .reply {
    color: rgb(83, 83, 83);
    font-size: 14px;
}
.text-comment{
    color: #2b2a2a;
}
.like-dislike-reply {
    display: flex;
    gap: 20px;
}
.like, .dislike {
    display: flex;
    gap: 5px;
}
.like i, .dislike i {
    font-size: 20px;
}
.reply {
    cursor: pointer;
}
::placeholder {
    font-family: serif;
    font-size: 14px;
}
footer {
    width: 100%;
    height: 10vh;
    margin-top: 20px;
    background: #c9b8b8;
}
.footer-top, .footer-bottom {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-bottom {
    background: #9c9b9b;
}
@media (max-width: 1200px) {
  section{
    width: 100%;
  }
  .main-container {
    width: 100%;
  }
  .story-container{ 
    width: 100%;
  }
  .page-of {
    font-size: 14px;
    padding: 5px;
  }
  .more-story {
    width: 100%;
    height: 10vh;
  }
  .user-comment {
    background: #a3a3a352;
    width: 75%;
  }
  footer{
    width: 100%;
  }
  .stories {
    width: 80%;
  }
  .story{
    width: 12%;
    height: 8vh;
  }
  .comment {
    width: 100%;
  }
  textarea {
  width: 50ch;
  height: 10ch;
  padding: 10px;
  font-family: sans-serif;
}
::placeholder {
      font-family: sans-serif;
    
  }
  .comment-button button{
    font-size: 12px;
    padding: 5px;
  }
  .comment-box {
    height: 10vh;
  }
}
@media (max-width: 600px) {
  section{
    width: 100%;
  }
  .main-container {
    width: 100%;
  }
  .story-container{ 
    width: 100%;
  }
  .page-of {
    font-size: 14px;
    padding: 5px;
  }
  .more-story {
    width: 100%;
    height: 10vh;
  }
  .user-comment {
    background: #a3a3a352;
    width: 75%;
  }
  footer{
    width: 100%;
  }
  .stories {
    width: 80%;
  }
  .story{
    width: 12%;
    height: 8vh;
  }
  .comment {
    width: 100%;
  }
  textarea {
    width: 15ch;
    height: 10ch;
    padding: 10px;
    font-family: sans-serif;
  }
  ::placeholder {
    font-family: sans-serif;
    font-size: 10px;
  }
  .comment-button button{
    font-size: 12px;
    padding: 5px;
  }
  .comment-box {
    height: 10vh;
  }
}
</style>