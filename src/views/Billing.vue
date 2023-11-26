<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7">
        <billing-card />
      </div>
    </div>
  </div>
</template>

<script>
import BillingCard from "./components/BillingCard.vue";

export default {
  name: "Billing",
  components: {
    BillingCard,
  },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
    };
  },
};
</script>
