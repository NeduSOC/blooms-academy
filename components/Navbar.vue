<template>
  <header class="bg-white shadow-sm relative z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="cursor-pointer">
        <img src="/logo.png" alt="Saint Thomas Episcopal School" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <div class="flex items-center space-x-8">
          <div
            v-for="(item, i) in navItems"
            :key="i"
            class="relative nav-item"
          >
            <NuxtLink
              v-if="!item.hasDropdown"
              :to="item.to"
              class="nav-link text-[#42529F] font-medium hover:text-white hover:bg-[#42529F] transition-colors duration-200 px-4 py-4"
              :class="{ 'active': isActive(item) }"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- Dropdown trigger -->
            <div
              v-else
              class="dropdown-container"
              @mouseenter="showDropdown(item.label)"
              @mouseleave="hideDropdown(item.label)"
            >
              <button
                class="nav-link text-[#42529F] font-medium hover:text-white hover:bg-[#42529F] transition-colors duration-200 px-4 py-4 flex items-center gap-1"
                :class="{ 'active': isActive(item) }"
                @click="handleDropdownClick(item.label, item.to)"
              >
                {{ item.label }}
                <Icon 
                  name="heroicons:chevron-down" 
                  class="w-3 h-3 transition-transform duration-300"
                  :class="{ 'rotate-180': dropdownStates[item.label] }"
                />
              </button>

              <!-- Dropdown Menu -->
              <Transition name="dropdown">
                <div
                  v-if="item.hasDropdown && dropdownStates[item.label]"
                  class="dropdown-menu absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50 flex"
                >
                  <div class="dropdown-content px-2">
                    <NuxtLink
                      v-for="(subItem, idx) in item.dropdown"
                      :key="idx"
                      :to="subItem.to"
                      class="dropdown-item block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#42529F] rounded-md transition-all duration-200 font-medium"
                      @click="closeDropdown(item.label)"
                    >
                      {{ subItem.label }}
                    </NuxtLink>
                  </div>
                  <div class="flex-1 border-l border-gray-200"></div>
                  <div class="dropdown-image-container">
                    <img class="dropdown-image" src="@/assets/img/admission.jpg" alt="Admission" />
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Login Button -->
        <button 
          class="login-btn bg-[#42529F] text-white px-6 py-2 rounded hover:bg-[#2a3a7a] transition-all duration-200 flex items-center space-x-2"
          @click="handleLogin"
        >
          <Icon name="heroicons:lock-closed" class="w-4 h-4" />
          <span>Login</span>
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle mobile menu"
      >
        <Icon 
          :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
          class="w-6 h-6 text-[#42529F]" 
        />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
        @click="closeMobileMenu"
      >
        <div
          class="absolute right-0 top-0 w-80 max-w-full h-full bg-white shadow-xl overflow-y-auto"
          @click.stop
        >
          <!-- Mobile Header -->
          <div class="flex justify-between items-center p-6 border-b border-gray-200">
            <img src="/logo.png" alt="Logo" class="h-8 w-auto" />
            <button 
              @click="closeMobileMenu" 
              class="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <Icon name="heroicons:x-mark" class="w-6 h-6 text-[#42529F]" />
            </button>
          </div>

          <!-- Mobile Nav Items -->
          <div class="py-4">
            <div v-for="(item, i) in navItems" :key="i" class="border-b border-gray-100 last:border-b-0">
              <div class="px-6 py-3">
                <button
                  v-if="item.hasDropdown"
                  @click="toggleMobileDropdown(item.label)"
                  class="flex items-center justify-between w-full text-left text-[#42529F] font-medium hover:text-[#2a3a7a] transition-colors duration-200"
                  :class="{ 'text-[#2a3a7a]': isActive(item) }"
                >
                  <span>{{ item.label }}</span>
                  <Icon
                    name="heroicons:chevron-down"
                    class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': mobileDropdownStates[item.label] }"
                  />
                </button>
                <NuxtLink
                  v-else
                  :to="item.to"
                  class="block text-[#42529F] font-medium hover:text-[#2a3a7a] transition-colors duration-200"
                  :class="{ 'text-[#2a3a7a] font-semibold': isActive(item) }"
                  @click="closeMobileMenu"
                >
                  {{ item.label }}
                </NuxtLink>

                <!-- Mobile Dropdown -->
                <Transition name="mobile-dropdown">
                  <div
                    v-if="item.hasDropdown && mobileDropdownStates[item.label]"
                    class="mt-3 ml-4 space-y-2"
                  >
                    <NuxtLink
                      v-for="(subItem, idx) in item.dropdown"
                      :key="idx"
                      :to="subItem.to"
                      class="block text-sm text-gray-600 hover:text-[#42529F] py-2 px-2 rounded transition-colors duration-200"
                      @click="closeMobileMenu"
                    >
                      {{ subItem.label }}
                    </NuxtLink>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <!-- Mobile Login Button -->
          <div class="p-6 border-t border-gray-200">
            <button 
              class="w-full bg-[#42529F] text-white py-3 px-4 rounded hover:bg-[#2a3a7a] transition-all duration-200 flex items-center justify-center space-x-2"
              @click="handleLogin"
            >
              <Icon name="heroicons:lock-closed" class="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>

const route = useRoute()
const router = useRouter()

// State management
const isMobileMenuOpen = ref(false)
const dropdownStates = reactive({})
const mobileDropdownStates = reactive({})

// Dropdown timeout for better UX
let dropdownTimeout = null

// Navigation items
const navItems = [
  { label: "About", to: "/about" },
  { 
    label: "Admissions", 
    to: "/",
    hasDropdown: true,
    dropdown: [
      // { label: "Admissions Overview", to: "/admissions" },
      { label: "Early Years Program", to: "/admissions/early-years" },
      { label: "Primary School", to: "/admissions/primary" },
      { label: "Secondary School", to: "/admissions/secondary" },
      { label: "Apply Now", to: "/admissions/apply" },
      { label: "Tuition & Financial Aid", to: "/admissions/tuition" }
    ]
  },
  { label: "Academics", to: "/academics" },
  { label: "Arts", to: "/arts" },
  { label: "Athletics", to: "/athletics" },
  { label: "Giving", to: "/giving" }
]

// Methods
const isActive = (item) => {
  if (item.hasDropdown) {
    return item.dropdown?.some(subItem => route.path === subItem.to) || route.path.startsWith('/admissions')
  }
  return route.path === item.to
}

const toggleDropdown = (label) => {
  // Close other dropdowns
  Object.keys(dropdownStates).forEach(key => {
    if (key !== label) {
      dropdownStates[key] = false
    }
  })
  dropdownStates[label] = !dropdownStates[label]
}

const showDropdown = (label) => {
  if (dropdownTimeout) {
    clearTimeout(dropdownTimeout)
  }
  // Close other dropdowns
  Object.keys(dropdownStates).forEach(key => {
    if (key !== label) {
      dropdownStates[key] = false
    }
  })
  dropdownStates[label] = true
}

const hideDropdown = (label) => {
  dropdownTimeout = setTimeout(() => {
    dropdownStates[label] = false
  }, 150)
}

const handleDropdownClick = (label, to) => {
  // If dropdown has a main URL, navigate there
  if (to) {
    router.push(to)
  } else {
    // Otherwise toggle dropdown
    toggleDropdown(label)
  }
}

const closeDropdown = (label) => {
  dropdownStates[label] = false
}

const closeAllDropdowns = () => {
  Object.keys(dropdownStates).forEach(key => {
    dropdownStates[key] = false
  })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // Prevent body scroll when mobile menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
  
  // Reset mobile dropdown states
  Object.keys(mobileDropdownStates).forEach(key => {
    mobileDropdownStates[key] = false
  })
}

const toggleMobileDropdown = (label) => {
  mobileDropdownStates[label] = !mobileDropdownStates[label]
}

const handleLogin = () => {
  // Add your login logic here
  console.log('Login clicked')
  // Example: router.push('/login')
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape') {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    } else {
      closeAllDropdowns()
    }
  }
}

// Handle clicks outside dropdown
const handleClickOutside = (event) => {
  if (!event.target.closest('.nav-item')) {
    closeAllDropdowns()
  }
}

// Initialize dropdown states
onMounted(() => {
  navItems.forEach(item => {
    if (item.hasDropdown) {
      dropdownStates[item.label] = false
      mobileDropdownStates[item.label] = false
    }
  })
  
  // Add event listeners
  document.addEventListener('keydown', handleEscape)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // Clean up event listeners
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('click', handleClickOutside)
  
  // Reset body overflow
  document.body.style.overflow = ''
})

// Watch route changes to close mobile menu
watch(() => route.path, () => {
  closeMobileMenu()
  closeAllDropdowns()
})
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link.active {
  font-weight: 600;
}

.nav-link.active {
  background-color: #42529F;
  color: white;
}

.login-btn {
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 82, 159, 0.3);
}

/* Fixed dropdown menu styles */
.dropdown-menu {
  border-top: 8px solid #42529F !important;
  border-radius: 0px !important;
  min-width: 300px !important;
  width: max-content;
  max-width: 800px;
}

.dropdown-content {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
}

.dropdown-image-container {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.dropdown-image {
  max-width: 250px;
  width: auto;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.dropdown-item {
  border-radius: 6px;
  font-weight: 500;
  position: relative;
}

.dropdown-item:hover {
  background-color: #eff6ff;
  transform: translateX(2px);
}

.dropdown-container {
  position: relative;
}

/* Smooth dropdown transitions */
.dropdown-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.2s ease;
}

.mobile-dropdown-enter-from {
  opacity: 0;
  max-height: 0;
}

.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  opacity: 1;
  max-height: 200px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }
}

/* Responsive dropdown adjustments */
@media (max-width: 1024px) {
  .dropdown-menu {
    max-width: 600px;
  }
  
  .dropdown-image {
    max-width: 200px;
    max-height: 200px;
  }
}

@media (max-width: 768px) {
  .dropdown-menu {
    display: none; /* Hide desktop dropdown on mobile */
  }
}
</style>