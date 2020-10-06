<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
            <button
              @click="openCamera"
              class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
            >
              Open Camera
            </button>
          </div>
          <video ref="videoRef" autoplay="true" width="100" />
        </div>
        <div class="flex flex-wrap justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1567581935884-3349723552ca"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <button
              @click="detect"
              class="w-32 rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
            >
              <span v-if="isLoading">Loading ... </span>
              <span v-else>Detect Object</span>
            </button>
            <div v-if="result.length > 0">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const imgRef = ref("");
    const videoRef = ref("");
    const isLoading = ref(false);
    const result = ref([]);

    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }

    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind === "videoinput");
        const camId = cams[0].deviceId;
        navigator.mediaDevices
          .getUserMedia({ video: { deviceId: { exact: camId } } })
          .then((stream) => {
            videoRef.value.srcObject = stream;
          });
      }
    }

    return { imgRef, result, detect, isLoading, openCamera, videoRef };
  },
};
</script>

<style></style>
