// @ts-nocheck

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/player/player.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Idol"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[5, 0, 3.5]}
          scale={2}
          position={[0, -2, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="head_65" position={[0, 1.5, 0]}>
                <group name="bone7_17" position={[0.125, 0.219, -0.219]}>
                  <group name="head_16" position={[-0.125, -1.719, 0.281]}>
                    <mesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="head_0" position={[0, -1.5, 0]}>
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.material_0}
                  />
                </group>

                <group name="head_19" position={[0, -1.5, 0]}>
                  <mesh
                    name="Object_44"
                    geometry={nodes.Object_44.geometry}
                    material={materials.material_0}
                  />
                </group>

                <group name="bone8_50" position={[-0.125, 0.219, -0.219]}>
                  <group name="head_49" position={[0.125, -1.719, 0.281]}>
                    <mesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="head_32" position={[0, -1.5, 0]}>
                  <mesh
                    name="Object_68"
                    geometry={nodes.Object_68.geometry}
                    material={materials.material_0}
                  />
                </group>

                <group name="head_52" position={[0, -1.5, 0]}>
                  <mesh
                    name="Object_106"
                    geometry={nodes.Object_106.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="body_105" position={[0, 0.75, 0]}>
                <group name="bone15_104" position={[0, 0.313, 0.063]}>
                  <group name="body_76" position={[0, -1.188, -0.063]}>
                    <mesh
                      name="Object_150"
                      geometry={nodes.Object_150.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="body_66" position={[0, -0.625, 0]}>
                  <mesh
                    name="Object_129"
                    geometry={nodes.Object_129.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="leftArm_117" position={[0.313, 1.375, 0]}>
                <group name="leftArm_107" position={[-0.313, -1.375, 0]}>
                  <mesh
                    name="Object_201"
                    geometry={nodes.Object_201.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="rightArm_128" position={[-0.313, 1.375, 0]}>
                <group name="rightArm_118" position={[0.313, -1.375, 0]}>
                  <mesh
                    name="Object_217"
                    geometry={nodes.Object_217.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="leftLeg_134" position={[0.119, 0.75, 0]}>
                <group name="leftLeg_131" position={[-0.119, -0.75, 0]}>
                  <mesh
                    name="Object_239"
                    geometry={nodes.Object_239.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="rightLeg_140" position={[-0.119, 0.75, 0]}>
                <group name="rightLeg_137" position={[0.119, -0.75, 0]}>
                  <mesh
                    name="Object_248"
                    geometry={nodes.Object_248.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/player/player.gltf");
