<script >
//  import RepoList from "./components/ReposList"
import NavigationBar from './components/NavigationBar.vue';
import PageFooter from './components/PageFooter.vue'
export default{
   components: {
    NavigationBar,
    PageFooter

  },
 
  data(){
    return {
      user:null
    }
  }
 
}


</script>

<template>
  <div class="container">
    <navigation-bar/>

    <router-view></router-view>
    <page-footer/>
    
  </div>
  
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration :none;

}
body{
  font-family: 'Poppins', sans-serif;
    background-color: #ebebeb;
}
.container{
  background-color: #ebebeb;
  max-width: 1440px;
 min-height: 100vh;
 margin-inline:auto;
  
}
.btn{
   padding:16px 32px;
  text-decoration: none;
  background: #3A6ED5;
  border-radius: 5px;
  color: #ebebeb;
  align-self: stretch;
  text-align: center;
  
}
main{
  /* min-height: 100vh; */
}
nav{
  width:90%;
  margin-inline: auto;
  padding: 20px 0;
  margin-bottom: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.521);
 
}
.error-container{
   width:90%;
  margin-inline: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 185px);
}
.error-wrapper{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.error-code{
  color:#1570EF;
  font-weight: 600;
}
.error-buttons{
  display: flex;
  gap: 16px;
  align-items: center;
}
nav a{
   text-decoration: none;
   color: inherit;
}
.profile-container{
  margin-top: 20vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* border: 1px solid #000?; */
}

.profile{
  width: 90%;
  /* min-width: 400px; */
  /* border: 1px solid #000; */
  border-radius: 5px;
  /* box-shadow: 0 2px 0 2px #171718; */
  margin-inline:auto;
  color:#ebebeb;
  background:#18181d;
  overflow: hidden;

}
@media(min-width:500px){
  .profile{
    width: 35%;
    min-width: 400px;
  }
}
.profile .image{
   height: 250px;
   /* border: 1px solid #000; */
   overflow: hidden;

}
.profile img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
 
}
.profile-details{
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  

}
.profile-details{
  font-size: 14px;
}
.profile-details p:has(span){
  display: flex;
  gap:1rem;
  align-items: center;
  align-self: flex-start;
}
.profile-details p>*:nth-child(1){
  font-size: 1.5rem;
}
.profile-details p span{
  color:#868686
}

.profile a{
  padding:16px 32px;
  text-decoration: none;
  background: #3A6ED5;
  border-radius: 5px;
  color: #ebebeb;
  align-self: stretch;
  text-align: center;
  
}
.profile .username{
  font-weight: 400;
  font-size: 22px;
  


}
.profile .fullname{
  color: #8a8a8c87;
}

/* repos page styles */
.repos-container{
  width: 90%;
  max-width: 900px;
  margin-inline:auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* border: 1px solid #000; */
}
.repos{
   display: flex;
  flex-direction: column;
  flex: 1;
  
}
.return-btn{
  border: none;
  font-size: clamp(16px 14px 12px);
  font-family: inherit;
  display: flex;
  background: #fff;
  border: 1px solid #7d7b7b;
  border-radius: 8px;
  padding: 1.5vw 3vw;
  display: flex;
  align-items: center;
  gap: 1.5vw;
  align-self: flex-start;
 
}
.btn-wrapper{
   margin-bottom: 10px;
}

.repo{
  /* border: 1px solid #000; */
  /* border: 2px solid #868686; */
  margin-bottom: 20px;
  min-height: 112px;
  display: block;
  text-decoration: none;
  font-size: 12px;
  color: #ebebeb;
  background: #18181d;;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 1px 2px 0px rgba(79,52,52,0.35);
}
.repo .name{
  font-weight: 400;
}
.repo p{
  color: #868686;
}
 .description{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp:2;
  
}


.pagination{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  

  margin-top: auto;
}
.pagination .buttons button{
  padding:16px ;
   box-shadow: 0 0px 1px  gray;
   font-size: 20px;
  border-radius: 100px;
  border: none;
  background: #fff;
  margin-right: 10px;
  opacity: .8;
}
.pagination .buttons button:hover,.pagination .buttons button:focus{
   box-shadow: 0 2px 2px  gray;
   opacity: 1;
}

button{
  cursor: pointer;
}
button:hover{
  opacity: .5;
}
.pages{
  display: flex;
  gap: 10px;
  font-size: 1rem;
  


 
  padding: 2px;
  /* border: 1px solid #000; */
}
.buttons{
  display: flex;

}
.pages button{
  padding: 10px;
  
   box-shadow: 0 2px 2px  gray;
  border-radius: 4px;
  border: none;
  background: #fff;
}

/* slected repo styling */
.selected-repo{
  margin-inline:auto;
  width: 90%;
  max-width: 1221px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 100vh;
}
.selected-repo>p span,.languages>span {
  font-weight: bold;
}
.selected-repo h1{
  color:gray;
  font-weight: 300;
}
.languages{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.languages p >*:nth-child(2){
  font-weight: 300;
  margin-left: .3rem;
}

footer{
  width: 90%;
  max-width: 1229px;
  margin: 0 auto;
  margin-top: 2rem ;
  border-top: 2px solid #000;
  padding: 2rem 0;
}

footer p{
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}
</style>
