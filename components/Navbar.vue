<template>
  <nav>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~/assets/logo.png"
            alt="GDSC Logo"
          />
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item>
          <NuxtLink to="/">Home</NuxtLink>
        </b-navbar-item>
        <b-navbar-item>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </b-navbar-item>
        <b-navbar-item>
          <NuxtLink to="/events">Events</NuxtLink>
        </b-navbar-item>
      </template>
    </b-navbar>
  </nav>
</template>
