import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa' 
import { BiHappy } from 'react-icons/bi';
import {MdCompress, MdOutlineWaterDrop} from "react-icons/md";
import "./Description.css";

function Descriptions({weather, units}) {

    const tempUnits = units === 'metric' ? 'degC' : 'degF'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnits,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnits,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnits,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "Wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ]


  return (
    <div className='section section__description'>
        {cards.map(({id, icon, title, data, unit}) => (
        <div key={id} className='card'>
            <div className='description__card-icon'>
                {icon}
                <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
        </div>
        ))}
    </div>
  )
}

export default Descriptions