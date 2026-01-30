<template>
  <div>
    <h2>Consultar por ID</h2>
    <input v-model.number="id" placeholder="Ingrese ID" />
    <button @click="consultarPorId">Consultar</button>
    <pre>{{ estudiante }}</pre>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "@/clients/MatriculaClient";

export default {
  props: {
    defaultId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      id: this.defaultId,
      estudiante: null,
    };
  },
  methods: {
    async consultarPorId() {
      const res = await consultarPorIdFachada(this.id);
      this.estudiante = res;
      console.log(res);
    },
  },
};
</script>
