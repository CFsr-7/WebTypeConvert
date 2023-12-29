import {
    ElNotification
} from "element-plus";

class NoticeUtils {

    /**
     * @param message
     * @param title
     * @constructor
     */
    static S (message:string,title?:string){
        return ElNotification({
            title,
            message,
            duration:2000,
            type:"success",
        })
    }

    /**
     * @param message
     * @param title
     * @constructor
     */
    static E (message:string,title?:string){
        return ElNotification({
            title,
            message,
            duration:2000,
            type:"error",
        })
    }

    /**
     * @param message
     * @param title
     * @constructor
     */
    static W (message:string,title?:string){
        return ElNotification({
            title,
            message,
            duration:2000,
            type:"warning",
        })
    }

}

export default NoticeUtils
