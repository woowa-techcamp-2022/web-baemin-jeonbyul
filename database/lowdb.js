import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

export default class LowDB {
    
    constructor(jsonFile) {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const file = join(__dirname, jsonFile)
        const adapter = new JSONFile(file)
        const db = new Low(adapter)
        this.db = db;
    }

    async connection(){
        await this.db.read()
        this.db.data = this.db.data || {  } 
    }

    async create( key, value ){
        this.db.data[key] = value
        await this.db.write();
    }

    async find(key){
        if(key){
            const value = this.db.data[key]; 
            return value;
        }else{
            const value = this.db.data
            return value
        }
    }

    async delete(key){
        delete this.db.data[key]
        await this.db.write();
    }

  }