// @ts-nocheck

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models/monster/monster.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Idol"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[5, 0, 2.8]}
          scale={2}
          position={[0, -2, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Head_72" position={[0, 1.5, 0]}>
                <group name="bone2_35" position={[0, 0.25, 0.25]}>
                  <group name="Head_0" position={[0, -1.75, -0.25]}>
                    <mesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="Hat_Layer_1" position={[0, -1.75, -0.25]}>
                    <mesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="bone1_71" position={[0, 0.25, 0.25]}>
                  <group
                    name="bone3_70"
                    position={[-0.019, 0.031, -0.194]}
                    rotation={[0, 0, -Math.PI]}
                  ></group>
                  <group name="Head_36" position={[0, -1.75, -0.25]}>
                    <mesh
                      name="Object_78"
                      geometry={nodes.Object_78.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="Hat_Layer_37" position={[0, -1.75, -0.25]}>
                    <mesh
                      name="Object_80"
                      geometry={nodes.Object_80.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
              </group>
              <group name="Body_147" position={[0, 0.75, 0]}>
                <group name="bone16_144" position={[0, 0.375, 0.063]}>
                  <group name="Body_111" position={[0, -1.125, -0.063]}>
                    <mesh
                      name="Object_225"
                      geometry={nodes.Object_225.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="Body_Layer_112" position={[0, -1.125, -0.063]}>
                    <mesh
                      name="Object_227"
                      geometry={nodes.Object_227.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group name="Body_73" position={[0, -0.75, 0]}>
                  <mesh
                    name="Object_148"
                    geometry={nodes.Object_148.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="RightArm_178" position={[0.313, 1.375, 0]}>
                <group name="Right_Arm_148" position={[-0.313, -1.375, 0]}>
                  <mesh
                    name="Object_286"
                    geometry={nodes.Object_286.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group
                  name="Right_Arm_Layer_149"
                  position={[-0.313, -1.375, 0]}
                >
                  <mesh
                    name="Object_288"
                    geometry={nodes.Object_288.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="LeftArm_240" position={[-0.313, 1.375, 0]}>
                <group name="Left_Arm_210" position={[0.313, -1.375, 0]}>
                  <mesh
                    name="Object_380"
                    geometry={nodes.Object_380.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group name="Left_Arm_Layer_211" position={[0.313, -1.375, 0]}>
                  <mesh
                    name="Object_382"
                    geometry={nodes.Object_382.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="RightLeg_286" position={[0.119, 0.75, 0]}>
                <group name="Right_Leg_272" position={[-0.119, -0.75, 0]}>
                  <mesh
                    name="Object_474"
                    geometry={nodes.Object_474.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group name="Right_Leg_Layer_273" position={[-0.119, -0.75, 0]}>
                  <mesh
                    name="Object_476"
                    geometry={nodes.Object_476.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <group name="LeftLeg_301" position={[-0.119, 0.75, 0]}>
                <group name="Left_Leg_287" position={[0.119, -0.75, 0]}>
                  <mesh
                    name="Object_499"
                    geometry={nodes.Object_499.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group name="Left_Leg_Layer_288" position={[0.119, -0.75, 0]}>
                  <mesh
                    name="Object_501"
                    geometry={nodes.Object_501.geometry}
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

useGLTF.preload("models/monster/monster.gltf");
