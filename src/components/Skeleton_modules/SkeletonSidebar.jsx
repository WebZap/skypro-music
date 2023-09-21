import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSidebar = (props) => (
    <ContentLoader
        //Присваем компоненту css-класс
        speed={2.5} // Скорость анимации загрузки
        width={250} // Устанавливаем ширину заглушки **
        height={150} // Устанавливаем высоту заглушки **
        viewBox="0 0 250 150" // Устанавливаем видовое окно
        backgroundColor="#1f1f1f" // Устанавливаем цвет фона заглушки.
        foregroundColor="#ecebeb" // Устанавливаем цвет переднего плана заглушки.
        {...props} // Передаем пропсы из компоненты в SkeletonSidebar в ContentLoader
    >
        <rect x="5" y="-12" rx="0" ry="0" width="250" height="150" />{" "}
        {/* Создаем прямоугольник с определенными параметрами (положение, скругление углов, ширина, высота) */}
    </ContentLoader>
);

export default SkeletonSidebar;
