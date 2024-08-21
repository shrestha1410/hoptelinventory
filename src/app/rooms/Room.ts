export interface Room {
    totalRooms?:number,
    availableRooms?:number,
    bookedRooms?:number
}
export interface RoomsList{
    roomsType:string,
    amenities:string,
    price:number,
    image:string,
    checkInTime:Date,
    checkOutTime:Date
}