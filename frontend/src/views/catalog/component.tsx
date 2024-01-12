import { FC, useEffect, useState } from 'react';
import './catalog.css';
import hanok_1 from './hanok_1.jpg';
import TraditionalCat from './traditional-cat/component'
import StandardCat from './standard-cat/component'
import LuxuryCat from './luxury-cat/component'
import { RoomApi } from "../../api/room.api";
import { Room } from '../../types/room';

export const Catalog: FC = () => {
  const [rooms, setRooms] = useState<Array<Room>>();

  useEffect(() => {
    async function fetchRooms() {
      const res = await RoomApi.getAll();
      setRooms(res);
    }
    fetchRooms();
  }, []);

  return (
    <>
    {
      rooms?.map((room)=>(
        <div>{room._id} - {room.room_type}</div>
      ))
    }
      <div className="aboutus-container">
        <div className="image-container">
          <img className="image" src={hanok_1} alt="hanok"/>
            <TraditionalCat></TraditionalCat>
            <StandardCat></StandardCat>
            <LuxuryCat></LuxuryCat>
         </div>
      </div>
    </>
  );
};

export default Catalog;