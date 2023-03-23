<template>
  <TresCanvas>
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]"
    :position="[0,1,4]"
          :look-at="[0,0,0]"
          />
          <TresScene>
            <OrbitControls></OrbitControls>
              <Suspense>
              <TresMesh v-bind="scene">
              </TresMesh>
            </Suspense>
          </TresScene>
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
  </TresCanvas>
  <TresAxesHelper></TresAxesHelper>
        
</template>

<script setup>
////////////////////////
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useRenderLoop, useTres, useLoader } from "@tresjs/core";
import { OrbitControls, GLTFModel, FBXModel, useGLTF } from "@tresjs/cientos"
import {ref, watch, shallowRef} from "vue"

const { scene } = await useLoader(
  GLTFLoader,
  'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/aku-aku/AkuAku.gltf'
  )

 /// Animate:     
 const torusRef = shallowRef(); 
    console.log(torusRef)
    const { onLoop } = useRenderLoop()
    onLoop(() => {
        if(!torusRef.value) return
        torusRef.value.rotation.z += 0.01
        torusRef.value.rotation.y += 0.01
    })
    

</script>
