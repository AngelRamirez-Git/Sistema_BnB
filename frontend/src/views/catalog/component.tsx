import { FC, useEffect, useState } from 'react';
import './catalog.css';
import hanok_1 from './hanok_1.jpg';
import Room_Template from './room/component'
import { RoomApi } from "../../api/room.api";
import { Room } from '../../types/room';
import luxury from './luxury.png';
import traditonal from './traditional.png';
import standard from './standard.png';

export const Catalog: FC = () => {
  const [rooms, setRooms] = useState<Array<Room>>();

  /*
  useEffect(() => {
    async function fetchRooms() {
      const res = await RoomApi.getAll();
      setRooms(res);
    }
    fetchRooms();
  }, []);
*/
  return (
    <>
    {/*
      rooms?.map((room)=>(
        <div>{room._id} - {room.room_type}</div>
      ))
      */}
      <div className="rooms-container">
        <div className="image-container">
          <h1>Nuestro Hanok!</h1>
          <img className="image" src={hanok_1} alt="hanok"/>
        </div>
        <div className="type_rooms-container">
          <div className="column">
          <img className="room-image" src={traditonal} alt="Habitación Tradicional"/>
            <p>Habitación Tradicional</p>
          </div>
          <div className="column">
            <img className="room-image" src={standard} alt="Habitación Estándar"/>
            <p>Habitación Estándar</p>
          </div>
          <div className="column">
          <img className="room-image" src={luxury} alt="Habitación de Lujo"/>
            <p>Habitación de Lujo </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;