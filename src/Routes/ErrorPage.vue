<template>
    <main className="error-container">
          <div className="error-wrapper">
            <p className='error-code'>404 code</p>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <div className="error-buttons">
              <ReturnButton />
              <router-link to="/" className="btn">
                Take me home
              </router-link>
            </div>
          </div>
        </main>
    
</template>
<script >
export default{
    
}
</script>