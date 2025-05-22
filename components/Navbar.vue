<template>
  <header class="bg-white font-montreal shadow-md relative z-50">
    <div
      class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="cursor-pointer">
        <img src="/header.png" alt="Logo" class="h-12 w-auto" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-8 font-medium relative">
        <div class="flex space-x-8 text-[#42529F] font-bold">
          <NuxtLink
            v-for="(item, i) in navItems"
            :key="i"
            :to="item.to || '#'"
            class="nav-link relative"
            :class="{
              active:
                (route.path.startsWith('/admissions') &&
                  item.label === 'Admissions') ||
                route.path === item.to,
            }"
            @click.prevent="item.label === 'Admissions' && toggleDropdown"
            @mouseenter="item.label === 'Admissions' && (showDropdown = true)"
            @mouseleave="item.label === 'Admissions' && (showDropdown = false)"
          >
            <span class="prefix">{{ item.label.slice(0, 3) }}</span
            >{{ item.label.slice(3) }}

            <!-- Dropdown -->
            <div
              v-if="item.label === 'Admissions' && showDropdown"
              class="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg border border-gray-200 z-50 rounded-md pt-2 pb-2"
              @mouseenter="showDropdown = true"
              @mouseleave="showDropdown = false"
            >
              <NuxtLink
                v-for="(child, idx) in admissionsSubLinks"
                :key="idx"
                :to="child.to"
                class="flex items-center space-x-3 px-5 py-2.5 hover:bg-gray-100 text-[#42529F] font-medium"
                :class="{ 'font-semibold': route.path === child.to }"
              >
                <span
                  class="w-2 h-2 rounded-full border-2"
                  :class="
                    route.path === child.to
                      ? 'bg-[#42529F] border-[#42529F]'
                      : 'border-[#42529F]'
                  "
                ></span>
                <span>{{ child.label }}</span>
              </NuxtLink>
            </div>
          </NuxtLink>
        </div>

        <div class="w-px h-6 bg-black mx-2"></div>

        <!-- Desktop Login Button -->
        <button
          class="login-btn group relative flex px-5 py-2 font-helvetica text-white overflow-hidden w-[110px] justify-start"
        >
          <div
            class="flex items-center gap-2 w-full transition-all duration-300 group-hover:justify-center"
          >
            <span class="icon-wrapper w-[18px] flex justify-center">
              <LogIn size="18" class="icon transition-all duration-300" />
            </span>
            <span class="label relative z-10">Login</span>
          </div>
        </button>
      </nav>

      <!-- Hamburger (Mobile Only) -->
      <button class="md:hidden" @click="isMobileOpen = true">
        <Menu size="26" class="text-[#42529F]" />
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition name="fade">
      <div
        v-show="isMobileOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <!-- Click outside to close -->
        <div class="absolute inset-0" @click="isMobileOpen = false"></div>

        <!-- Slide-out mobile drawer -->
        <transition name="slide-in">
          <div
            v-show="isMobileOpen"
            class="absolute right-0 top-0 w-80 max-w-full h-full bg-[#42529F] p-6 shadow-xl z-50 flex flex-col"
          >
            <!-- Header -->
            <div class="flex justify-end items-center mb-8">
              <button
                @click="isMobileOpen = false"
                class="flex items-center space-x-2 text-white"
              >
                <span>Close</span>
                <X size="24" font-weight="600" />
              </button>
            </div>

            <!-- Nav Items -->

            <div class="space-y-4 text-white font-semibold">
              <div v-for="(item, i) in navItems" :key="i">
                <div>
                  <NuxtLink
                    :to="item.to || '#'"
                    @click="() => handleMobileNavClick(item)"
                    class="flex items-center justify-between text-base pb-3"
                  >
                    <span>{{ item.label }}</span>
                    <ChevronRight
                      v-if="item.label === 'Admissions'"
                      :class="{ '-rotate-90': showMobileDropdown }"
                      class="transition-transform"
                    />
                    <ChevronRight v-else />
                  </NuxtLink>

                  <!-- Admissions Dropdown -->
                  <div
                    v-if="item.label === 'Admissions' && showMobileDropdown"
                    class="ml-4 mt-2 space-y-3"
                  >
                    <NuxtLink
                      v-for="(child, idx) in admissionsSubLinks"
                      :key="idx"
                      :to="child.to"
                      class="flex items-center space-x-3 text-sm font-medium"
                      @click="isMobileOpen = false"
                    >
                      <span
                        class="w-2 h-2 rounded-full border-2"
                        :class="
                          route.path === child.to
                            ? 'bg-white border-white'
                            : 'border-white'
                        "
                      ></span>
                      <span>{{ child.label }}</span>
                    </NuxtLink>
                  </div>

                  <!-- Line under each item -->
                  <div
                    class="border-b border-white border-opacity-30 mt-2"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Login Button -->
            <button
              class="mt-8 bg-white text-[#42529F] w-full py-2 flex items-center justify-center space-x-2"
            >
              <LogIn size="18" />
              <span>Login</span>
            </button>
          </div>
        </transition>
      </div>
    </transition>
  </header>
</template>

<script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { Menu, X, ChevronDown, LogIn } from "lucide-vue-next";

  const route = useRoute();
  const showDropdown = ref(false);
  const isMobileOpen = ref(false);
  const mobileDropdown = ref(false);

  const showMobileDropdown = ref(false);

  function handleMobileNavClick(item) {
    if (item.label === "Admissions") {
      showMobileDropdown.value = !showMobileDropdown.value;
    } else {
      isMobileOpen.value = false;
    }
  }

  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Admissions" },
    { label: "School Life", to: "/school-life" },
    { label: "Parent Resources", to: "/parent-resources" },
  ];

  const admissionsSubLinks = [
    { label: "Early Years", to: "/admissions/early-years" },
    { label: "Primary", to: "/admissions/primary" },
    { label: "Secondary", to: "/admissions/secondary" },
  ];

  function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
  }
</script>

<style scoped>
  .nav-link {
    @apply relative font-bold text-[#42529F] transition;
  }
  .nav-link .prefix {
    position: relative;
    z-index: 1;
    padding: 4px 0 4px 5px;
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
    transition: width 0.3s ease;
    z-index: 0;
  }
  .nav-link:hover::before,
  .nav-link.active::before {
    width: calc(3ch + 10px);
  }
  .nav-link:hover .prefix,
  .nav-link.active .prefix {
    color: white;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-in-enter-from,
  .slide-in-leave-to {
    transform: translateX(100%);
  }

  /*  LOGIN BUTTON ANIMATION  */
  .login-btn {
    /* blue base */
    background-color: #42529f;
  }

  /* thin red bar (left) that expands on hover */
  .login-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 8px; /* initial red width */
    background: #d63324; /* red */
    transition: width 0.35s ease;
  }

  .login-btn:hover::before {
    width: 100%; /* slide to full width */
  }

  /* icon fades / slides away on hover */
  .login-btn .icon {
    transition: opacity 0.35s ease, transform 0.35s ease;
  }

  .login-btn:hover .icon {
    opacity: 0;
    transform: translateX(-6px);
  }

  /* make sure text stays above the red overlay */
  .login-btn .label {
    position: relative;
    z-index: 1;
  }
</style>
