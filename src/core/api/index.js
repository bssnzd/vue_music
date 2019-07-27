import request from "./http"
import mock from  "@/mock"

class Apis {
    
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    getSuggest(params) {
        return request({
            method: 'get',
            url: '/search/suggest',
            params
        });
    }
    
}
export default new Apis();