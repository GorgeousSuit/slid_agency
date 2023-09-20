"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimationComponent() {
    const sceneContainerRef = useRef(null);
    const dots = [];
    const maxDotsCount = 200;
    const distance = 20;

    useEffect(() => {
        let scene, camera, renderer;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            );
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            sceneContainerRef.current.appendChild(renderer.domElement);

            const light = new THREE.PointLight(0xffffff);
            light.position.set(0, 0, 10);
            scene.add(light);

            for (let i = 0; i < maxDotsCount; i++) {
                generateDot();
            }
        };

        const generateDot = () => {
            if (dots.length < maxDotsCount) {
                const geometry = new THREE.SphereGeometry(0.05, 16, 16);
                const material = new THREE.MeshBasicMaterial({
                    color: getRandomColor(),
                });
                const dot = new THREE.Mesh(geometry, material);
                dot.position.set(
                    Math.random() * 10 - 5,
                    Math.random() * 10 - 5,
                    Math.random() * 10 - 5,
                );
                scene.add(dot);
                dots.push(dot);
            }
        };

        const getRandomColor = () => {
            const color = new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random(),
            );
            return color;
        };

        const animate = () => {
            requestAnimationFrame(animate);

            dots.forEach((dot) => {
                dot.rotation.x += 0.01;
                dot.rotation.y += 0.01;
                dot.position.z -= 0.1;

                if (dot.position.z < -distance) {
                    scene.remove(dot);
                    dots.splice(dots.indexOf(dot), 1);
                    generateDot();
                }
            });

            renderer.render(scene, camera);
        };

        init();
        animate();

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="bg-black w-full h-full sm:hidden">
            <div
                id="scene-container"
                ref={sceneContainerRef}
                className="mb-[-5px] overflow-x-hidden"
            ></div>
        </div>
    );
}
