<template>
    <div>
        <aside :class="`${ is_expanded && 'is-expanded'}`">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Vue">
            </div>
    
            <div class="menu-toggle-wrap">
                
                <button class="menu-toggle" @click="ToggleMenu">
                    <span class="material-icons-outlined">
                        keyboard_double_arrow_right
                    </span>
                </button>

            </div>

            <div class="menu">
                
                <router-link class="button" to ="/">
                    <span class="material-icons"> home </span>
                    <span class="text">Home</span>
                </router-link>

                <router-link class="button" to ="/about">
                    <span class="material-icons">
                        games
                    </span>
                    <span class="text">Control</span>
                </router-link>

            </div>

        </aside>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;    
    background-color: var(--dark);
    color: var(--primary-alt);

    transition: 0.2s ease-out;


    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out; 

            .material-icons {
                font-size: 2rem;
                color: var(--light); 
            }

            &:hover {
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translate(0.5rem);
                }
            }
        }
    }

    h3, .button .text {
        // opacity: 0;
        transition: 0.3s ease-out ;

    }

    .menu {
        margin: 0 -1rem; 
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                margin-right: 1rem;
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light); 
                transition: 0.2s ease-out;
            }

            &:hover, ~&.router-link-exact-active {
                background-color: var(--dark-alt);
                
                .material-icons, .text {
                    color:var(--primary)
                }
            }

            .router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }

       
    }

    &.is-expanded{
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;    
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3 .button .text{
            opacity: 1;
        }

        .button{
            .material-icons{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

}
</style>