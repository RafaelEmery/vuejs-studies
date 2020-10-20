<template>
    <div class="sidebar">
        <!-- If isPanelOpen is true the  -->
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import { store, mutations } from '../store';

    export default {
        methods: {
            closeSidebarPanel() {
                this.closeSidebarPanel = mutations.toggleNav;
            }
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>

<style>
    /*Transition speed (enter)*/
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.5s ease;
    }

    /*Transition speed (exit)*/
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    /*Dark effect that activates when you open the side bar*/
    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    /*Setting the sidebar details*/
    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
</style>