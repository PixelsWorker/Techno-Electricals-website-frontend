const contactApp = Vue.createApp({
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: ""
            },
            successMessage: ""
        };
    },
    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/contact/', this.form)
                .then(response => {
                    this.successMessage = "Message sent successfully!";
                    this.form = { name: "", email: "", message: "" }; // Clear form
                })
                .catch(error => console.error("Error submitting form:", error));
        }
    }
});

contactApp.mount("#contactApp");
