import BaseApi from "./config/BaseApi";

class TrackApi extends BaseApi {

    getAllTracks = async (actionToSave) => {
        const data = await this.getData(`catalog/track/all/`);
        await actionToSave(data)
    }
    getEntireTrack = async (actionToSave, id) => {
        const data = await this.getData(`catalog/track/${id}`);
        await actionToSave(data)
    }
}

export default TrackApi