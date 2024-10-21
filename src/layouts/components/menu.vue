<template>
  <div class="menu xy-bg-primary">
    <div class="logo">
      <i class="fab fa-bilibili"></i>
      <span>日益努力</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl
        v-for="(menu, index) of menus"
        :key="index">
        <dt @click="handleClick(menu)">
          <section>
            <i
              :class="menu.icon"
              class="mr-2"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down text-sm duration-300" :class="{'rotate-180': menu.active}"></i>
          </section>
        </dt>
        <transition name="fade">
          <div v-show="menu.active">
            <dd
              v-for="(child, index) in menu.children"
              :key="index"
              :class="{ active: child.active }"
              class="duration-300 transform transition-opacity">
              {{ child.title }}
            </dd>
          </div>
        </transition>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}

interface IMenu extends IMenuItem {
  children: IMenuItem[]
}

const menus = reactive<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fas fa-house-user',
    active: true,
    children: [
      {
        title: '404页面',
        active: true
      },
      {
        title: '403页面'
      }
    ]
  },
  {
    title: '编辑器',
    icon: 'fas fa-house-user',
    children: [
      {
        title: 'markdown文本器',
        active: true
      },
      {
        title: '富文本编辑器'
      }
    ]
  }
])

const resetMenus = () => {
  menus.forEach((pmenu) => {
    console.log(pmenu);
    
    pmenu.active = false
    pmenu.children?.forEach((cmenu) => (cmenu.active = false))
  })
}

const handleClick = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  if(pmenu.active){
    pmenu.active = false
  }else{
    resetMenus()
    pmenu.active = true
  }

}
</script>

<style lang="scss" scoped>
.menu {
  @apply w-[220px];

  .logo {
    @apply flex justify-center items-center p-4;

    i {
      @apply text-sky-500 text-4xl mr-4;
    }
    span {
      @apply text-gray-200 text-lg font-mono;
    }
  }

  .left-container {
    /* 进入动画 */
    .fade-enter-active {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .fade-enter-from {
      opacity: 0;
      transform: scaleY(0.95);
    }

    /* 离开动画直接消失 */
    .fade-leave-active {
      transition: none;
      opacity: 0;
      transform: scaleY(1);
    }

    @apply px-4 cursor-pointer;

    dl {
      @apply text-gray-300 text-sm;

      dt {
        @apply text-sm mt-6 flex justify-between items-center;
      }

      dd {
        @apply py-2 pl-4 my-2 text-sm text-gray-300 rounded-md hover:bg-sky-600 duration-300;

        &.active {
          @apply bg-sky-700;
        }
      }
    }
  }
}
</style>
