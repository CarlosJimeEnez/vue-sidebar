<template>

  <div class="container-fluid">
    
    <div class="row" style="border-color: black; border-style: solid;">

      <!-- Canvas -->
      <div class="col-7" style="background-color: grey; height: 59vh;">
        <Suspense>
        <link0 />
        <!-- <fbx_loaderVue/> -->
        </Suspense>
      </div>
      

      <div class="col">
        <div class="row">
          
          <!-- Sliders_  -->
          <div class="col" style="background-color: aqua;">

            <div clas="row">
                  Motor : 
                  <input  type="range" name="range" id="" max="180"  v-model = "val_slider" style="margin-top: 1%; margin-left: 1%;"> 
                  <span>
                      {{ val_slider }} 
                  </span>
            </div>

          </div>

          <!-- Valores de los Sliders -->
          <div class="col" style="background-color: azure;">

          </div>
            <button @click="send_sliders_val">PLAY</button>          
            <button @click="cero_encoder()"> Cero </button>

        </div>
      </div>
    
    </div>
  </div>

</template>

<script>
import roslib from "roslib"
import ROSLIB from "roslib/src/RosLib"
import link0 from "@/components/link0.vue"
import fbx_loaderVue from '@/components/fbx_loader.vue'


//////////////

export default {
  components: {
    link0,
    fbx_loaderVue
  },

  data(){
    return{
     
      
      //Sliders: 
      val_slider: 0, 
      val_sliders: [
          0,
      ], 

      //ROS
      ros: new roslib.Ros({
        url: "ws://localhost:9090"
      }),

      twist: new ROSLIB.Message({
        linear:{
          x: 0,
          y: 0,
          z: 0
        },

        angular: {
          x: 0,
          y: 0,
          z: 0,
        }
      }),

      cero_msg: new ROSLIB.Message({
        linear:{
          x: 0,
          y: 0,
          z: 0
        },

        angular: {
          x: 0,
          y: 0,
          z: 0,
        }
      }),

    }
  },


  mounted() {
    
    //ROS Configuration: 
    this.ros.on("connection", () => {
      console.log("Connect")
    })
    
    this.ros.on("error", (error) => {
      console.log("Error")
      window.alert("ERROR al conectar con ros_bridge")
    })

    this.ros.on("close", () => {
      console.log("Close")
    })

    
  },


  methods: {
    
    send_sliders_val(){
      console.log("Sliders val:" + this.val_slider)
    }, 

    cero_encoder(){
      // Pone el encoder en cero //
      const zero = new ROSLIB.Topic({
        ros: this.ros,
        name: "/cero_encoder",
        messageType: "geometry_msgs/Twist"
      })      

      this.cero_msg.linear.x = 1
      console.log(this.cero_msg)
      zero.publish(this.cero_msg)
    }, 

    publish_sliders_vals(num){
      const sliders_vals_listener = new ROSLIB.Topic({
        ros: this.ros,
        //Topic:  
        name: "/sliders_val", 
        messageType: "geometry_msgs/Twist"
      })

      this.count = num
      this.twist.angular.x = parseInt(num) 
      console.log(this.twist.angular)

      sliders_vals_listener.publish(this.twist)
    },

},

  
}
</script>