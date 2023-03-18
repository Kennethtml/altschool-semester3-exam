<template>
   <main className="selected-repo">
        <div className="btn-wrapper">
          <ReturnButton />
        </div>
    <h1>{{repo.name}}</h1>
        <p>
          <span>Author: </span>
          {{repo.owner?.login}}
        </p>
        <p className="repo-descripion">
          <span>Description: </span>
          {{repo.description}}
        </p>
         <p className="created">
            <span>created on: </span>
            {{new Date(repo.created_at).toDateString()}}
          </p>
           <p className="size">
            <span>Repo size:</span> {{repo.size}} kb
          </p>

          <div className="stats">
            <div className="stats-fork">
              <Fork />
              <span>{{repo.forks_count}}</span>
            </div>
            <div className="stats-star">
              <Star />
              <span>{{repo.stargazers_count}}</span>
            </div>
          </div>
          <a className="btn" :href="repo.html_url">
            go to repo
          </a>

      </main>
</template>
<script>
export default{
    data(){
        return{
            repo:null
        }
    },
    beforeMount(){
          fetch(
      "https://api.github.com/repos/kennethtml/"+this.$route.params.id 
    )
      .then((data) => data.json())
      .then((res) => this.repo=res)
    }
    
}
</script>