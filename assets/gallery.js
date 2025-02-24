const galleryApp = Vue.createApp({
    data() {
        return {
            images: []
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/gallery/') // Fetch images from Django API
            .then(response => {
                this.images = response.data.map(image => {
                    let fileId = "";
                    
                    // Extract Google Drive file ID
                    if (image.image_url.includes("drive.google.com")) {
                        fileId = image.image_url.match(/[-\w]{25,}/)[0]; // Extract the file ID
                    }

                    return {
                        ...image,
                        full_image_url: `https://drive.google.com/uc?id=${fileId}`, // Full-size image
                        thumbnail_url: `https://drive.google.com/thumbnail?id=${fileId}&sz=w300` // Thumbnail (size: 300px)
                    };
                });

                // Reinitialize Lightbox after Vue updates the DOM
                this.$nextTick(() => {
                    lightbox.init();
                });
            })
            .catch(error => console.error("Error fetching images:", error));
    }
});

galleryApp.mount("#galleryApp");
