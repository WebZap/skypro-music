import instanse from "./instanse"


const trackApi = {
    async getAllTracks(actionToSave) {
        try {
            const response = await instanse.get(`catalog/track/all/`);
            actionToSave(response.data)
        } catch (error) {
            alert(error)
        }
    },
    async getEntireTrack(actionToSave, id) {
        try {
            const response = await instanse.get(`catalog/track/${id}`);
            actionToSave(response.data)
        } catch (error) {
            alert(error)
        }
    }
}

export default trackApi


