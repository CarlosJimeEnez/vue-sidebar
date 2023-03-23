<template>
    <div>
        
    </div>
</template>


<script>
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
export default {
    data(){
        return{
            scene: null, 
            light: null, 
            camera: null,
            renderer: null,
            loader: new GLTFLoader(),
            link1: null
        }
    }, 

    mounted(){
        this.new_scene()
        this.new_light()
        this.new_camera()
        this.cargar_link1()
    },

    methods: {
        new_scene(){
            this.scene = new THREE.Scene()
            this.scene.add(new THREE.AxesHelper(5))
        }, 

        new_camera(){
            this.camera = new THREE.PerspectiveCamera(
                75,
                1,
                0.1,
                100
            )
        }, 

        new_light(){
            this.light = new THREE.SpotLight()
            this.light.position.set(50,50,50)
            this.scene.add(this.light)
        }, 

        new_renderer(){
            this.renderer = new THREE.WebGLRenderer()
            this.renderer.setSize(window.innerWidth, window.innerHeight)
            document.body.appendChild(this.domElement)
        }, 

        cargar_link1(){
            this.loader.load(
                "/src/assets/link0.glb",
                function(gltf){
                    this.link1 = gltf.scene
                    this.scene.add(gltf.scene)
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                },
                (error) => {
                    console.log(error)
                }
            )
        }
    }
}
</script>