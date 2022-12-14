const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "0b72410ba51ebc6719e8d68b038805ce",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
