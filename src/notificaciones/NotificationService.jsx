import { useContext, useState, createContext } from "react";
import classes from './NotificationService.module.css'

const Notification = ({ notificationData }) => {

    const typeClasses = {
        success: classes.success,
        error: classes.error,
        info: classes.info,
        warning: classes.warning
    }

    const positionClasses = {
        upRight: classes.upRight,
    upLeft: classes.upLeft
    }
    const notificationClasses = `${typeClasses[notificationData.type]} ${positionClasses[notificationData.position]}`;

    return (
        <div className={notificationClasses}>
            <h4></h4>
            <p>{notificationData.text}</p>
        </div>
    );
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'success',
        position: 'upRight'
    })

    const showNotification = (type, position, text) => {
        setNotificationData({
            type, position, text
        })

        setTimeout(() => {
         setNotificationData(prev => ({ ...prev, text: '' }))
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {notificationData.text && <Notification notificationData={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}