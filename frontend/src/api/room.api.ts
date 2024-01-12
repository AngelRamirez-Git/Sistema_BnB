export class RoomApi {
    public static async getAll() {
        const res = await fetch("http://localhost:3001/rooms", {
            method: "GET",
        });
        
        const data = res.json();
      
        return data;
    }
}