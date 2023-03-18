<script>
export default {
  data() {
    return {
      repos: [],
      totalItems: 50,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.repos.length / this.itemsPerPage);
    },
    filteredRepos() {
      const startingIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endingIndex = startingIndex + this.itemsPerPage;
      return this.repos.slice(startingIndex, endingIndex);
    },
  },
  mounted() {
    fetch(`https://api.github.com/users/kennethtml/repos`)
      .then((res) => res.json())
      .then((data) => (this.repos = data));
  },
};
</script>

<template>
  <section class="repos-container">
    <router-link to="/"  class="btn-wrapper">
          Return button
    </router-link>

    <div class="repos">
      <li class="repo" v-for="repo in filteredRepos" :key="repo.name">
        <router-link class="repo" :to="`repos/${repo.name}`">
          <h3 className="name">{{ repo.name }}</h3>
          <p className="description">{{ repo.description }}</p>
          <p className="language">{{ repo.language }}</p>
        </router-link>
      </li>
    </div>

    <div class="pagination">

      <div class="buttons">
       
          <button v-if="currentPage > 1" @click="currentPage--">Previous</button>
    

    
          <button @click="currentPage++" class="next" v-if="currentPage < totalPages">Next</button>
       
     
      </div>
     
        <div class="pages">

          <div  v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <button @click="currentPage = page">{{ page }}</button>
          </div>
        </div>
    </div>
  </section>
</template>

<style scoped></style>
