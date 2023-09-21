import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonTrack = (props) => (
    <ContentLoader
        //Присваем компоненту css-класс
        speed={2.5} // Скорость анимации загрузки
        width={1107} // Устанавливаем ширину заглушки **
        height={51} // Устанавливаем высоту заглушки **
        viewBox="0 0 1107 51" // Устанавливаем видовое окно
        backgroundColor="#1f1f1f" // Устанавливаем цвет фона заглушки.
        foregroundColor="#ecebeb" // Устанавливаем цвет переднего плана заглушки.
        {...props} // Передаем пропсы из компоненты в SkeletonSidebar в ContentLoader
    >
        <rect x="0" y="0" rx="0" ry="0" width="51" height="51" />{" "}
        <rect x="65" y="16.49" rx="0" ry="0" width="356" height="19" />{" "}
        <rect x="481" y="16.49" rx="0" ry="0" width="271" height="19" />{" "}
        <rect x="802" y="16.49" rx="0" ry="0" width="305" height="19" />{" "}
        {/* Создаем прямоугольник с определенными параметрами (положение, скругление углов, ширина, высота) */}
    </ContentLoader>
);

export default SkeletonTrack;
