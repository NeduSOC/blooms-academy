<template>
  <header class="bg-white font-montreal shadow-md">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="cursor-pointer">
          <img src="/header.png" alt="Logo" class="h-12 w-auto" />
        </NuxtLink>
      </div>

      <!-- Nav Links -->
      <nav class="hidden md:flex items-center space-x-8 font-medium">
        <div class="flex space-x-8 text-[#42529F] font-bold">
          <NuxtLink
            v-for="(item, i) in navItems"
            :key="i"
            :to="item.to"
            class="nav-link"
            :class="{ active: route.path === item.to }"
          >
            <span class="prefix">{{ item.label.slice(0, 3) }}</span
            >{{ item.label.slice(3) }}
          </NuxtLink>
        </div>

        <div class="w-px h-6 bg-black mx-2"></div>

        <button
          class="bg-[#42529F] text-white px-5 py-2 hover:bg-[#2f327a] transition flex items-center font-helvetica"
        >
          <LogIn size="18" class="mr-2" />
          Login
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
  const route = useRoute();

  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Admissions", to: "/admissions" },
    { label: "School Life", to: "/school-life" },
    { label: "Parent Resources", to: "/parent-resources" },
  ];

  const activeLink = ref("");
</script>

<style scoped>
  .nav-link {
    @apply relative font-bold text-[#42529F] transition;
  }

  .nav-link .prefix {
    position: relative;
    z-index: 1;
    padding: 4px 0 4px 5px; /* Top, bottom, and left padding */
    display: inline-block;
    transition: color 0.3s ease;
  }

  .nav-link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 2.4em;
    background-color: #42529f;
    transform: translateY(-50%);
    border-radius: 0.25rem;
    transition: width 0.3s ease;
    z-index: 0;
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    width: calc(3ch + 10px); /* 3 letters + 5px left + 5px buffer */
  }

  .nav-link:hover .prefix,
  .nav-link.active .prefix {
    color: white;
  }
</style>
