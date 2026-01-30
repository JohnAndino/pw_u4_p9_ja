<template>
  <div>
    <h2>Consultar Todos</h2>
    <button @click="consultarTodos">Consultar Todos</button>
    <pre>{{ estudiantes }}</pre>
  </div>
</template>

<script>
import { consultarTodosFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {
    async consultarTodos() {
      const res = await consultarTodosFachada();
      this.estudiantes = res;
      console.log(res);
    },
  },
};
</script>
