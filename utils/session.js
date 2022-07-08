
import config from '../config/index.js'
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
    sessionStore.create(sessionId, session)
}


export const startSessionScheduler= (ms) => {
    ms = ms > 1000 ? ms : 1000 
    interval = setInterval( () => {
        checkSessionValid();
    }, ms);
}

const  checkSessionValid = async () => {
    const limit = config.sessionTimeOut
    const sessions = await sessionStore.find();
    const sessionIds =  Object.getOwnPropertyNames(sessions) 

    sessionIds.forEach( async ( sessionId) => { 
        const session = await sessionStore.find(sessionId)
        const updateDate = new Date(session.updateDate).getTime()
        const nowDate = new Date().getTime();
        if(nowDate - updateDate > limit){
            sessionStore.delete(sessionId)
        }

    }) 
}

