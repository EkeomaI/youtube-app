import axios from 'axios';

const KEY='AIzaSyAESFLFadDrjVfaad9ZW_psuLPW3U8f7jE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key:KEY
    }
});