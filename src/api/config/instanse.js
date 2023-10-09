import axios from "axios";

const instanse = axios.create({
    baseURL: "https://skypro-music-api.skyeng.tech/",
})

export default instanse

// Получить все треки	GET	https://skypro-music-api.skyeng.tech/catalog/track/all/
// Получить трек по id	GET	https://skypro-music-api.skyeng.tech/catalog/track/<id>
// Посмотреть подборки	GET	https://skypro-music-api.skyeng.tech/catalog/selection/
// Посмотреть подборку по id	GET	https://skypro-music-api.skyeng.tech/catalog/selection/<id>/
// Добавить трек в избранное по id *	POST	https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/
// Удалить трек из избранного по id *	DELETE	https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/
// Получить все избранные треки *	GET	https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/
