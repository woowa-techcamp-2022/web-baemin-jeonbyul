import LowDB from '../database/lowdb.js' 
const lowDB = new LowDB("users.json");
lowDB.connection();

export const signUp = async (user) => { //password 암호화 하기
    try{
        if( !user || !user.userId) return false; 
        await lowDB.create(user.userId, user)
        return 1;
    }catch{
        return 0;
    }
 }


export const signIn = async (userId, password) => { 
    try{
        const user = await lowDB.find(userId);

        if(!user || user.password != password){
            return null;
        }

        return user;
    }catch{
        return null;
    }
}


