import instanse from "./instanse";


class BaseApi {
    constructor() {
        this.instanse = instanse
    }
    getData = async (url) => {
        try {
            const response = await instanse.get(url)
            return response.data
        } catch (error) {
            alert(error)
        }
    }

}

export default BaseApi
