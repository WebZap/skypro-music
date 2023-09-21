import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonPlayTrack = (props) => (
    <ContentLoader
        //Присваем компоненту css-класс
        speed={2.5} // Скорость анимации загрузки
        width={122} // Устанавливаем ширину заглушки **
        height={51} // Устанавливаем высоту заглушки **
        viewBox="0 0 122 51" // Устанавливаем видовое окно
        backgroundColor="#1f1f1f" // Устанавливаем цвет фона заглушки.
        foregroundColor="#ecebeb" // Устанавливаем цвет переднего плана заглушки.
        {...props} // Передаем пропсы из компоненты в SkeletonSidebar в ContentLoader
    >
        <rect x="0" y="0" rx="0" ry="0" width="51" height="51" />{" "}
        <rect x="63" y="7" rx="0" ry="0" width="59" height="15" />{" "}
        <rect x="63" y="29" rx="0" ry="0" width="59" height="15" />{" "}
        {/* Создаем прямоугольник с определенными параметрами (положение, скругление углов, ширина, высота) */}
    </ContentLoader>
);

export default SkeletonPlayTrack;
