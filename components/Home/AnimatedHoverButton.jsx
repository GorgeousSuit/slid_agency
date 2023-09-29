"use client";

import { useEffect } from "react";
import * as THREE from "three";

const HoverAnimation = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document
            .getElementById("animationContainer")
            .appendChild(renderer.domElement);

        const balls = [];

        const geometry = new THREE.SphereGeometry(0.1, 32, 32);

        const button = document.createElement("button");
        button.textContent = "Point to me";
        document.body.appendChild(button);

        button.addEventListener("mouseenter", function () {
            for (let i = 0; i < 10; i++) {
                const material = new THREE.MeshBasicMaterial({
                    color: getRandomColor(),
                });
                const ball = new THREE.Mesh(geometry, material);
                ball.position.x = 0;
                ball.position.y = 0;
                ball.position.z = -1;
                ball.velocity = new THREE.Vector3(
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                    -Math.random(),
                );
                balls.push(ball);
                scene.add(ball);
            }
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            balls.forEach((ball) => {
                ball.position.x += ball.velocity.x;
                ball.position.y += ball.velocity.y;
                ball.position.z += ball.velocity.z;
            });

            renderer.render(scene, camera);
        };

        animate();

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }, []);

    return (
        <section className="">
            <div>
                <div
                    id="animationContainer"
                    className="bg-[#FF4A1C] text-white border-none px-10 py-20 text-16 rounded-5 transition duration-300 transform hover:bg-[#005f84] cursor-pointer top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                >
                    Blabalbal
                </div>
            </div>
        </section>
    );
};

export default HoverAnimation;
