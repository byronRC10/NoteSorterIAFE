<script setup>
import { ref, onMounted } from "vue";
import { apiService } from "@/services/apiService";

const message = ref("Cargando...");

onMounted(async () => {
  try {
    const data = await apiService.getHello();
    message.value = data.message;
  } catch (err) {
    message.value = "Error al consultar la API";
  }
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="pa-8">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card elevation="10" class="rounded-xl">
              <v-card-title class="text-h5 text-center">
                🚀 Respuesta de la API
              </v-card-title>
              <v-card-text class="text-center">
                {{ message }}
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="primary" variant="elevated" @click="message = 'Refrescando...'">
                  Refrescar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
