const contactApp = Vue.createApp({
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone_number: "", // Phone number added
                message: ""
            },
            successMessage: "",
            errorMessage: ""
        };
    },
    methods: {
        submitForm() {
            axios.post('https://source-production-b2bb.up.railway.app/api/contact/', this.form)
                .then(response => {
                    this.successMessage = "Message sent successfully!";
                    this.errorMessage = "";
                    this.form = { name: "", email: "", phone_number: "", message: "" }; // Clear form
                })
                .catch(error => {
                    this.errorMessage = "Error submitting form. Please try again.";
                    console.error("Error submitting form:", error);
                });
        }
    }
});

contactApp.mount("#contactApp");
