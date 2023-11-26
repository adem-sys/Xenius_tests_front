<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Offres D'emploi</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <!-- ... (votre code existant) ... -->
        <li v-for="(job, index) in jobs" :key="index" class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
          <div class="d-flex flex-column">
            <h6 class="mb-3 text-sm">{{ job.title }}</h6>
            <span class="mb-2 text-xs">
              Company Name:
              <span class="text-dark font-weight-bold ms-sm-2">{{ job.companyName }}</span>
            </span>
            <span class="mb-2 text-xs">
              Email Address:
              <span class="text-dark ms-sm-2 font-weight-bold">{{ job.email }}</span>
            </span>
            <span class="text-xs">
              VAT Number:
              <span class="text-dark ms-sm-2 font-weight-bold">{{ job.vatNumber }}</span>
            </span>
          </div>
          <div class="ms-auto text-end">
            <button v-if="!job.applied" @click="postuler(index)" class="btn btn-link text-dark px-3 mb-0">
              Postuler
            </button>
            <span v-else class="text-success">Postulé</span>
          </div>
        </li>
        <!-- ... (votre code existant) ... -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "billing-card",
  data() {
    return {
      jobs: [
        { title: "Développeur full stack(PHP)", companyName: "DevSoftware", email: "recrutement@devSoftware.com", vatNumber: "FRB1235476", applied: false },
        { title: "Développeur full stack(laravel)", companyName: "StoneTechZone", email: "lucas@stone-tech.com", vatNumber: "FRB1235476", applied: false },
        { title: "Développeur full stack(Vue/Laravel)", companyName: "Fiber Notion", email: "ethan@fiber.com", vatNumber: "FRB1235476", applied: false },
        // ... (ajoutez d'autres offres d'emploi si nécessaire)
      ],
    };
  },
  methods: {
    postuler(index) {
      // Logique de postulation ici
      // Vous pouvez déclencher une requête API pour enregistrer la postulation, ou simplement mettre à jour l'état localement.
      this.jobs[index].applied = true;

    // Affichez l'alerte
    alert("Vous avez postulé à cette offre!"); 

      // Vous pouvez également désactiver le bouton ici si vous le souhaitez
    },
  },
};
</script>
