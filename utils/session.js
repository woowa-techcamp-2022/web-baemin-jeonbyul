
import LowDB from '../database/lowdb.js' 
const sessionStore = new LowDB("session.json");
sessionStore.connection();
let interval = null;

export const createSessionId = (userId) => {
    const sessionId = Math.random().toString(20).slice(2)
    saveSession(sessionId, userId)
    return sessionId
}


export const getSession = ( sessionId ) => {
    const session = sessionStore.find(sessionId);
    if(!session){
        return null;
    }else{
        updateSessionDate( session.sessionId )
        return session.usesrId
    }
}


const saveSession = (sessionId, userId) => {
    const session = {
        sessionId: sessionId,
        userId: userId,
        updateDate: new Date()
    }
    sessionStore.create( sessionId, session)
}

const updateSessionDate = (sessionId) => {
    const session = sessionStore.find(sessionId)
    session.updateDate = new Date();
}


export const cron = (ms) => {
    ms = ms > 10000 ? ms : 10000 
    interval = setInterval( () => {
        checkSessionValid();
    }, ms);
}

export const  checkSessionValid = () => {
    const limit = 1 * 60 * 1000 //30 * 60 * 1000
    const sessionIds = sessionStore.keys();
    sessionIds.forEach( sessionId => { 
        const updateDate = sessionStore.find(sessionId).updateDate
        const nowDate = new Date();
        if(nowDate - updateDate > limit){
            sessionStore.delete(sessionId)
        }
    }) 
}

