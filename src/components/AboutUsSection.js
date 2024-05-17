import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import Typewriter from 'typewriter-effect';
import '../styles/AboutUsSection.css';

const SaturnModel = () => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, '/models/saturn.glb');

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Adjust rotation speed
    }
  });

  return (
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const AnimatedSaturn = ({ scrollY }) => {
  const { viewport } = useThree();
  const scale = scrollY / viewport.height + 1; // Adjust scale based on scroll position

  const spring = useSpring({
    scale: scale > 2 ? 2 : scale, // Limit the maximum scale to 2
  });

  return (
    <animated.group scale={spring.scale}>
      <SaturnModel />
    </animated.group>
  );
};

const AboutUsSection = ({ scrollY }) => {
  return (
    <section className="about-us-section">
      <Canvas className="saturn-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSaturn scrollY={scrollY} />
      </Canvas>
      <div className="about-us-content">
        <h2>About Us</h2>
        <div className="typing-animation">
          <Typewriter
            options={{
              strings: ['We are a cutting-edge technology company focused on innovation...'],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
