/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Decal, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
	// Use useLoader to load the texture
	const decal = useLoader(THREE.TextureLoader, `${imgUrl}`);

	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff82b"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal} // Load texture from useLoader
					flatShading
				/>
			</mesh>
		</>
	);
};

Ball.propTypes = {
	imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
	BallCanvas.propTypes = {
		icon: PropTypes.string.isRequired,
	};

	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					// maxPolarAngle={Math.PI / 2}
					// minPolarAngle={Math.PI / 2}
					enablePan={false}
				/>
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
