<template>
  <header class="header">
    <nav class="nav">
      <a href="#" class="logo"> 퀸챠 </a>
      <img
        src="@/assets/images/default_profile.png"
        alt="default_profile"
        class="profile"
      />
    </nav>
  </header>
</template>

<script></script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  position: fixed;
  padding: 0.5rem 1rem;
  top: 0;
  left: 0;
  background: #141517;
}

.nav {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: Nanum-Pen-Regular;
  text-decoration: none;

  color: #ff0558;
}

.profile {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
</style>
