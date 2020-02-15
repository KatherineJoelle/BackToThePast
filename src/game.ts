import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d6dea640-b953-48b9-bfb0-d750c5f43ba1/src/item"
import Script2 from "../4519a0b9-98ef-4034-ab93-88134d1458e8/src/item"
import Script3 from "../6f54ea17-43bc-4b1e-a8c1-c9b24ff6e038/src/item"
import Script4 from "../221ca611-e905-43e8-ab98-f627c4287e74/src/item"
import Script5 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script6 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script7 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script8 from "../6ab20acc-eff6-4272-8243-c183e70a9fa1/src/item"
import Script9 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script10 from "../acbd6376-6c33-46b8-abb2-22c083540e9e/src/item"
import Script11 from "../7402ef02-fc7f-4e19-b44a-4613ee2526c5/src/item"
import Script12 from "../6d694c78-6dd5-4a4d-acee-21dbf67dd464/src/item"
import Script13 from "../0dc18897-c8fb-4673-8c39-5f7879a84379/src/item"
import Script14 from "../63cf389e-d14f-4b1a-8bd3-abccb5682255/src/item"
import Script15 from "../f7573b6c-f5d3-403c-ad74-2657adbe4a54/src/item"
import Script16 from "../dd9fb5a1-7530-4e07-ac3f-3e50572c239f/src/item"
import Script17 from "../d6043ef0-5f53-4dd0-8956-d1819c4c5046/src/item"
import Script18 from "../e948f0c2-0adc-406b-a2a4-76939071faa5/src/item"
import Script19 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"
import Script20 from "../18d6cc5f-e136-4e55-b1a9-14d451b7df54/src/item"
import Script21 from "../43166e90-5f00-4d06-ab07-8cefae85cbd1/src/item"
import Script22 from "../6464f5ed-d97d-49fc-9c99-4f9e2069dc71/src/item"
import Script23 from "../51ff7609-407f-481d-991b-8449ef59b390/src/item"
import Script24 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"
import Script25 from "../c37b52bf-204c-4c8f-aee5-3249129b8141/src/item"
import Script26 from "../0764e129-9fff-4158-98f0-6db8665dcf7b/src/item"
import Script27 from "../274df603-dd2b-4a32-b2a0-c4ad758cb037/src/item"
import Script28 from "../a186416e-81f1-4d0a-b0cd-a4b0077d264d/src/item"
import Script29 from "../a56ac3e0-aef8-48b9-b55b-844b3fa77056/src/item"
import Script30 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script31 from "../bb11e1cf-bed2-4ce8-be37-fe8bf953346d/src/item"
import Script32 from "../15fc8bc9-3240-460b-b767-a378b6366a5b/src/item"
import Script33 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script34 from "../6f380825-70bb-42f9-8dce-57563c7ac582/src/item"
import Script35 from "../6267507e-7b6c-49ef-be4c-cdab372e64cd/src/item"
import Script36 from "../a91b2938-246c-4178-a869-588377ad4fb8/src/item"
import Script37 from "../0b8f3b57-a7f3-48aa-a88a-41098f264566/src/item"
import Script38 from "../9d1d8101-5c1f-4a92-9603-b8e01b06bb48/src/item"
import Script39 from "../1fc96600-3d45-45f6-b364-86aa8cd15587/src/item"
import Script40 from "../1889bcdc-5608-48fa-9158-b0a56f0afa8b/src/item"
import Script41 from "../ad67f3a9-fa15-4e06-aced-a2a7716ebf85/src/item"
import Script42 from "../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item"
import CrateScript from "../f5291efe-2cbd-4882-9485-35bd2d0b8fb0/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const medicalBayScanner = new Entity('medicalBayScanner')
engine.addEntity(medicalBayScanner)
medicalBayScanner.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(25.167390823364258, 0.5725555419921875, 2.5886740684509277),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
medicalBayScanner.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/HealthBed_01/HealthBed_01.glb")
gltfShape.withCollisions = true
gltfShape.visible = true
medicalBayScanner.addComponentOrReplace(gltfShape)

const parrot = new Entity('parrot')
engine.addEntity(parrot)
parrot.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.45958137512207, 1.3788564205169678, 92.44359588623047),
  rotation: new Quaternion(-3.015245651020993e-15, 0.954347550868988, -1.1376707931276542e-7, 0.2986985743045807),
  scale: new Vector3(0.31338590383529663, 0.30669569969177246, 0.2997312545776367)
})
parrot.addComponentOrReplace(transform3)

const padlock = new Entity('padlock')
engine.addEntity(padlock)
padlock.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(30.271242141723633, 3.4125213623046875, 5.94852876663208),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
padlock.addComponentOrReplace(transform4)

const roundSignpost = new Entity('roundSignpost')
engine.addEntity(roundSignpost)
roundSignpost.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(37, 0.8943581581115723, 10.499999046325684),
  rotation: new Quaternion(0, 0.19509033858776093, -2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(1, 1, 1)
})
roundSignpost.addComponentOrReplace(transform5)

const scroll = new Entity('scroll')
engine.addEntity(scroll)
scroll.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(18.578489303588867, 1.3181039094924927, 5.6318230628967285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll.addComponentOrReplace(transform6)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(23.60322380065918, 0.06668341159820557, 82.7798080444336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.469499349594116, 0.2816150188446045, 3.357264995574951)
})
verticalPlatform.addComponentOrReplace(transform7)

const tools2 = new Entity('tools2')
engine.addEntity(tools2)
tools2.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(23.646259307861328, 0, 82.3060302734375),
  rotation: new Quaternion(1.1079706793151126e-14, -0.28778523206710815, 3.430667661064035e-8, 0.9576950073242188),
  scale: new Vector3(1, 1, 1)
})
tools2.addComponentOrReplace(transform8)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(22.980667114257812, 27.055084228515625, 66.69906616210938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform9)

const verticalPlatform2 = new Entity('verticalPlatform2')
engine.addEntity(verticalPlatform2)
verticalPlatform2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(13.282303810119629, 0, 92.61092376708984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.767568826675415, 0.3542773723602295, 1)
})
verticalPlatform2.addComponentOrReplace(transform10)

const padlock2 = new Entity('padlock2')
engine.addEntity(padlock2)
padlock2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(13.286149024963379, 0.12463647127151489, 90.852783203125),
  rotation: new Quaternion(-0.435091495513916, -6.2712274484511e-8, -1.531069102611582e-7, 0.9003863334655762),
  scale: new Vector3(1, 1, 1)
})
padlock2.addComponentOrReplace(transform11)

const delorean2 = new Entity('delorean2')
engine.addEntity(delorean2)
delorean2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(23.093416213989258, 1.0359392166137695, 81.98521423339844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
delorean2.addComponentOrReplace(transform12)
const gltfShape2 = new GLTFShape("models/deLorean.glb")
gltfShape2.withCollisions = true
gltfShape2.visible = true
delorean2.addComponentOrReplace(gltfShape2)

const tools3 = new Entity('tools3')
engine.addEntity(tools3)
tools3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(24.314794540405273, 0, 0.7085312604904175),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.642210960388184, 1, 1.0000004768371582)
})
tools3.addComponentOrReplace(transform13)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(24.027362823486328, 0.28811168670654297, 3.3736839294433594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.454734802246094, 0.7644205093383789, 5.818234443664551)
})
triggerArea.addComponentOrReplace(transform14)

const tools4 = new Entity('tools4')
engine.addEntity(tools4)
tools4.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(18.112449645996094, 0.8199014663696289, 3.25618314743042),
  rotation: new Quaternion(-2.8107176874451805e-15, -0.6999884247779846, 8.344510860069931e-8, 0.7141542434692383),
  scale: new Vector3(2.881864070892334, 1, 1.0000001192092896)
})
tools4.addComponentOrReplace(transform15)

const padlockRomanNumber = new Entity('padlockRomanNumber')
engine.addEntity(padlockRomanNumber)
padlockRomanNumber.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(12.70130443572998, 11.645378112792969, 32.046390533447266),
  rotation: new Quaternion(0.031191909685730934, -0.7048459649085999, 0.026163475587964058, -0.7081912159919739),
  scale: new Vector3(1, 1, 1)
})
padlockRomanNumber.addComponentOrReplace(transform16)

const fantasyIronKey = new Entity('fantasyIronKey')
engine.addEntity(fantasyIronKey)
fantasyIronKey.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(3.91363787651062, 11.018381118774414, 31.142288208007812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6122877597808838, 1, 1)
})
fantasyIronKey.addComponentOrReplace(transform17)

const scifiChest = new Entity('scifiChest')
engine.addEntity(scifiChest)
scifiChest.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(3.8686866760253906, 10.033014297485352, 31.159643173217773),
  rotation: new Quaternion(-3.822235750968557e-15, -0.9683308601379395, 1.1543402678171333e-7, -0.24967074394226074),
  scale: new Vector3(1, 1, 1)
})
scifiChest.addComponentOrReplace(transform18)

const cableBox = new Entity('cableBox')
engine.addEntity(cableBox)
cableBox.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(35.611732482910156, 24.292768478393555, 50.027156829833984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cableBox.addComponentOrReplace(transform19)

const policeSiren = new Entity('policeSiren')
engine.addEntity(policeSiren)
policeSiren.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(38.78366470336914, 28.794715881347656, 59.5),
  rotation: new Quaternion(-0.6929038763046265, -0.710299551486969, 0.0903383269906044, -0.0848403126001358),
  scale: new Vector3(1, 1, 1)
})
policeSiren.addComponentOrReplace(transform20)

const verticalHallwayDoo = new Entity('verticalHallwayDoo')
engine.addEntity(verticalHallwayDoo)
verticalHallwayDoo.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(30.350826263427734, 0.5, 3.28999662399292),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0276538133621216, 1.3576879501342773, 0.9999999403953552)
})
verticalHallwayDoo.addComponentOrReplace(transform21)

const verticalHallwayDoo2 = new Entity('verticalHallwayDoo2')
engine.addEntity(verticalHallwayDoo2)
verticalHallwayDoo2.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(11.989985466003418, 9.937673568725586, 28.364540100097656),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.3272948265075684, 2.5045437812805176, 0.3235369920730591)
})
verticalHallwayDoo2.addComponentOrReplace(transform22)

const parrot2 = new Entity('parrot2')
engine.addEntity(parrot2)
parrot2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(4.089826583862305, 12.966851234436035, 26),
  rotation: new Quaternion(-5.059347910982433e-16, 0.592933177947998, -7.068314999969516e-8, 0.8052517771720886),
  scale: new Vector3(1, 1, 1)
})
parrot2.addComponentOrReplace(transform23)

const chest = new Entity('chest')
engine.addEntity(chest)
chest.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(18.912952423095703, 1.2024743556976318, 5.630038261413574),
  rotation: new Quaternion(3.147408625297555e-15, 0.9997553825378418, -1.1918011466605094e-7, -0.02211884967982769),
  scale: new Vector3(1, 1, 1)
})
chest.addComponentOrReplace(transform24)

const silverKey = new Entity('silverKey')
engine.addEntity(silverKey)
silverKey.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(21.494192123413086, 3.3684730529785156, 1.0276908874511719),
  rotation: new Quaternion(-0.5103142857551575, 0.4894684851169586, -0.4894685447216034, 0.5103142261505127),
  scale: new Vector3(0.6874674558639526, 0.6874629259109497, 0.6874673962593079)
})
silverKey.addComponentOrReplace(transform25)

const scifiChest2 = new Entity('scifiChest2')
engine.addEntity(scifiChest2)
scifiChest2.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(45.56463623046875, 0.029072046279907227, 17.303470611572266),
  rotation: new Quaternion(-1.2483022699284058e-14, 0.8847216367721558, -1.0546703776981303e-7, -0.46611979603767395),
  scale: new Vector3(1, 1, 1)
})
scifiChest2.addComponentOrReplace(transform26)

const countdownTimer = new Entity('countdownTimer')
engine.addEntity(countdownTimer)
countdownTimer.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(45.72118377685547, 0.827304482460022, 17.06130599975586),
  rotation: new Quaternion(-4.2006680489451494e-15, 0.9589664340019226, -1.1431768598413328e-7, 0.2835196554660797),
  scale: new Vector3(0.1922590732574463, 0.1922590732574463, 0.1922590732574463)
})
countdownTimer.addComponentOrReplace(transform27)

const scroll2 = new Entity('scroll2')
engine.addEntity(scroll2)
scroll2.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(45.59000015258789, 1.0500303506851196, 17.330224990844727),
  rotation: new Quaternion(-4.2897448924146086e-16, 0.9636545777320862, -1.1487656337294538e-7, 0.26715150475502014),
  scale: new Vector3(0.76751708984375, 0.76751708984375, 0.76751708984375)
})
scroll2.addComponentOrReplace(transform28)

const fantasyChest = new Entity('fantasyChest')
engine.addEntity(fantasyChest)
fantasyChest.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(3.58115816116333, 0.9292311668395996, 16.950733184814453),
  rotation: new Quaternion(0.04232438653707504, 0.6884011626243591, 0.1615663319826126, 0.7058390974998474),
  scale: new Vector3(1, 1, 1)
})
fantasyChest.addComponentOrReplace(transform29)

const blueAccessCard = new Entity('blueAccessCard')
engine.addEntity(blueAccessCard)
blueAccessCard.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(11.24831771850586, 22.665611267089844, 24.278053283691406),
  rotation: new Quaternion(0.0014490669127553701, 0.21221823990345, 0.006672472693026066, 0.9771984219551086),
  scale: new Vector3(1, 1, 1)
})
blueAccessCard.addComponentOrReplace(transform30)

const verticalHallwayDoo3 = new Entity('verticalHallwayDoo3')
engine.addEntity(verticalHallwayDoo3)
verticalHallwayDoo3.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(31.949527740478516, 21.803070068359375, 55.17074966430664),
  rotation: new Quaternion(-1.5039369616405194e-15, 0.6742120981216431, -8.037233101276797e-8, 0.7385377883911133),
  scale: new Vector3(1.2284469604492188, 1.2284469604492188, 1.2284469604492188)
})
verticalHallwayDoo3.addComponentOrReplace(transform31)

const greenLightButton = new Entity('greenLightButton')
engine.addEntity(greenLightButton)
greenLightButton.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(31.75516128540039, 24.47511863708496, 57.095314025878906),
  rotation: new Quaternion(0, 0, 0.6851629614830017, 0.7283897995948792),
  scale: new Vector3(1, 1, 1)
})
greenLightButton.addComponentOrReplace(transform32)

const padlock3 = new Entity('padlock3')
engine.addEntity(padlock3)
padlock3.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(31.96063232421875, 24.708160400390625, 61.258689880371094),
  rotation: new Quaternion(-2.2369311738763657e-14, -0.7393417954444885, 8.813638174842708e-8, 0.6733303666114807),
  scale: new Vector3(1, 1, 1)
})
padlock3.addComponentOrReplace(transform33)

const woodenTrapdoor = new Entity('woodenTrapdoor')
engine.addEntity(woodenTrapdoor)
woodenTrapdoor.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(31.851619720458984, 24.938186645507812, 61.280460357666016),
  rotation: new Quaternion(0, 0, -0.745076060295105, 0.6669796109199524),
  scale: new Vector3(0.5273590087890625, 0.5273590087890625, 0.5273590087890625)
})
woodenTrapdoor.addComponentOrReplace(transform34)

const verticalHallwayDoo4 = new Entity('verticalHallwayDoo4')
engine.addEntity(verticalHallwayDoo4)
verticalHallwayDoo4.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(12.035346031188965, 18.770771026611328, 66.02345275878906),
  rotation: new Quaternion(2.5939208751448633e-15, -0.8335519433021545, 9.936712075386822e-8, 0.5524411797523499),
  scale: new Vector3(0.3837894797325134, 1.6353830099105835, 0.9739798307418823)
})
verticalHallwayDoo4.addComponentOrReplace(transform35)

const verticalPlatform3 = new Entity('verticalPlatform3')
engine.addEntity(verticalPlatform3)
verticalPlatform3.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(10.192737579345703, 4.0392937660217285, 20.34392547607422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalPlatform3.addComponentOrReplace(transform36)

const blueLightButton = new Entity('blueLightButton')
engine.addEntity(blueLightButton)
blueLightButton.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(11.763277053833008, 10.761086463928223, 23.827463150024414),
  rotation: new Quaternion(-0.7127454876899719, 9.626001108744273e-16, 8.49658761126193e-8, 0.7014228105545044),
  scale: new Vector3(1, 1, 1)
})
blueLightButton.addComponentOrReplace(transform37)

const blueLightCube = new Entity('blueLightCube')
engine.addEntity(blueLightCube)
blueLightCube.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(10.183971405029297, 2.490264415740967, 20.255285263061523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.3115386962890625, 4.306508541107178, 3.3115386962890625)
})
blueLightCube.addComponentOrReplace(transform38)
const gltfShape3 = new GLTFShape("models/LightCube_02/LightCube_02.glb")
gltfShape3.withCollisions = true
gltfShape3.visible = true
blueLightCube.addComponentOrReplace(gltfShape3)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(39.28156280517578, 19.30986213684082, 55.300262451171875),
  rotation: new Quaternion(0.019351836293935776, -0.7125453948974609, -0.019668137654662132, 0.7010833621025085),
  scale: new Vector3(1.5144767761230469, 3.3568038940429688, 1.5144767761230469)
})
ironFenceDoor.addComponentOrReplace(transform39)

const chest2 = new Entity('chest2')
engine.addEntity(chest2)
chest2.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(40.370845794677734, 18.04973793029785, 59.93285369873047),
  rotation: new Quaternion(0.10512237995862961, 0.6997435688972473, -0.018535377457737923, 0.7063743472099304),
  scale: new Vector3(1, 1, 1)
})
chest2.addComponentOrReplace(transform40)

const bronzeKey = new Entity('bronzeKey')
engine.addEntity(bronzeKey)
bronzeKey.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(10.880111694335938, 10.364304542541504, 33.292938232421875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bronzeKey.addComponentOrReplace(transform41)

const scroll3 = new Entity('scroll3')
engine.addEntity(scroll3)
scroll3.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(3.498002529144287, 1.401383876800537, 17.167875289916992),
  rotation: new Quaternion(0.17398062348365784, -1.1097109005643127e-16, -2.074010296837514e-8, 0.9847490787506104),
  scale: new Vector3(1, 1, 1)
})
scroll3.addComponentOrReplace(transform42)

const scifiLever = new Entity('scifiLever')
engine.addEntity(scifiLever)
scifiLever.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(4.5582194328308105, 0.45624637603759766, 93.39949798583984),
  rotation: new Quaternion(4.18682583652112e-15, -0.9996671676635742, 1.1916960573898905e-7, 0.0257980078458786),
  scale: new Vector3(9.045783042907715, 7.317002296447754, 1.4155465364456177)
})
scifiLever.addComponentOrReplace(transform43)

const scroll4 = new Entity('scroll4')
engine.addEntity(scroll4)
scroll4.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(40.56733703613281, 18.30482292175293, 59.68006896972656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll4.addComponentOrReplace(transform44)

const scifiChest3 = new Entity('scifiChest3')
engine.addEntity(scifiChest3)
scifiChest3.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(11.726221084594727, 20.745040893554688, 67.67789459228516),
  rotation: new Quaternion(3.2991701684983483e-17, 0.7112667560577393, -8.478959045987722e-8, 0.7029222249984741),
  scale: new Vector3(1.0000001192092896, 2.5170962810516357, 1.0000001192092896)
})
scifiChest3.addComponentOrReplace(transform45)

const padlock4 = new Entity('padlock4')
engine.addEntity(padlock4)
padlock4.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(11.690984725952148, 23.44449806213379, 67.68820190429688),
  rotation: new Quaternion(-4.468698601972209e-16, 0.7102453112602234, -8.466783185667737e-8, 0.7039543390274048),
  scale: new Vector3(0.5786962509155273, 0.5786962509155273, 0.5786962509155273)
})
padlock4.addComponentOrReplace(transform46)

const ironFenceDoor2 = new Entity('ironFenceDoor2')
engine.addEntity(ironFenceDoor2)
ironFenceDoor2.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(42.29172134399414, 16.84286117553711, 66.60283660888672),
  rotation: new Quaternion(-0.0027468756306916475, -0.9999711513519287, -0.000019331993826199323, -0.007081008981913328),
  scale: new Vector3(1.795467734336853, 2.9921183586120605, 1)
})
ironFenceDoor2.addComponentOrReplace(transform47)

const verticalPlatform4 = new Entity('verticalPlatform4')
engine.addEntity(verticalPlatform4)
verticalPlatform4.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(43, 16.26809310913086, 82),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.8940536975860596, 1, 1.000000238418579)
})
verticalPlatform4.addComponentOrReplace(transform48)

const blueLightBlock = new Entity('blueLightBlock')
engine.addEntity(blueLightBlock)
blueLightBlock.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(43, 17.0225830078125, 84),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.648642539978027, 31.062612533569336, 1.0000007152557373)
})
blueLightBlock.addComponentOrReplace(transform49)
const gltfShape4 = new GLTFShape("models/LightBlock_02/LightBlock_02.glb")
gltfShape4.withCollisions = true
gltfShape4.visible = true
blueLightBlock.addComponentOrReplace(gltfShape4)

const fingerprintAccessC = new Entity('fingerprintAccessC')
engine.addEntity(fingerprintAccessC)
fingerprintAccessC.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(42.87109375, 21.046064376831055, 83.89118194580078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fingerprintAccessC.addComponentOrReplace(transform50)

const toggleButton = new Entity('toggleButton')
engine.addEntity(toggleButton)
toggleButton.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(40.114540100097656, 21.228832244873047, 78.56529235839844),
  rotation: new Quaternion(0.3972552418708801, 0.4757508933544159, -0.5491504669189453, 0.5606096386909485),
  scale: new Vector3(1, 1, 1)
})
toggleButton.addComponentOrReplace(transform51)

const ironFenceDoor3 = new Entity('ironFenceDoor3')
engine.addEntity(ironFenceDoor3)
ironFenceDoor3.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(2.6945924758911133, 1.5492095947265625, 81.92510223388672),
  rotation: new Quaternion(1.351483418991599e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(1.3956577777862549, 2.4409403800964355, 1.3495616912841797)
})
ironFenceDoor3.addComponentOrReplace(transform52)

const verticalHallwayDoo5 = new Entity('verticalHallwayDoo5')
engine.addEntity(verticalHallwayDoo5)
verticalHallwayDoo5.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(4.877723693847656, 0.5, 87.41165161132812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1474440097808838, 1.7433596849441528, 1)
})
verticalHallwayDoo5.addComponentOrReplace(transform53)

const fantasyIronKey2 = new Entity('fantasyIronKey2')
engine.addEntity(fantasyIronKey2)
fantasyIronKey2.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(2.071815013885498, 3.600855827331543, 71.23090362548828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fantasyIronKey2.addComponentOrReplace(transform54)

const utilityHallway = new Entity('utilityHallway')
engine.addEntity(utilityHallway)
utilityHallway.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(28, 22.576339721679688, 67),
  rotation: new Quaternion(1.2979546424942714e-15, -0.6984467506408691, 8.32613196166676e-8, 0.7156620025634766),
  scale: new Vector3(0.7863434553146362, 1.3137078285217285, 2.796344757080078)
})
utilityHallway.addComponentOrReplace(transform55)
const gltfShape5 = new GLTFShape("models/Hallway_Module_StraightHalf_01.glb")
gltfShape5.withCollisions = true
gltfShape5.visible = true
utilityHallway.addComponentOrReplace(gltfShape5)

const verticalHallwayDoo6 = new Entity('verticalHallwayDoo6')
engine.addEntity(verticalHallwayDoo6)
verticalHallwayDoo6.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(19.5, 22.725648880004883, 67.21646881103516),
  rotation: new Quaternion(-3.432161355708868e-16, 0.7048267722129822, -8.402188456102522e-8, 0.7093794941902161),
  scale: new Vector3(0.6783233284950256, 0.9513833522796631, 0.2076905369758606)
})
verticalHallwayDoo6.addComponentOrReplace(transform56)

const faceAccessCard = new Entity('faceAccessCard')
engine.addEntity(faceAccessCard)
faceAccessCard.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(37, 19.956966400146484, 48.5),
  rotation: new Quaternion(-5.389182540643258e-16, -0.7830364108085632, 9.334520711945515e-8, 0.6219758987426758),
  scale: new Vector3(1, 1, 1)
})
faceAccessCard.addComponentOrReplace(transform57)

const scroll5 = new Entity('scroll5')
engine.addEntity(scroll5)
scroll5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(35.57057189941406, 25.52734375, 50.3740119934082),
  rotation: new Quaternion(0.011193054728209972, -0.7063561081886292, 0.013110024854540825, 0.7076467871665955),
  scale: new Vector3(1, 1, 1)
})
scroll5.addComponentOrReplace(transform58)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(27.503305435180664, 22.227886199951172, 66.84259033203125),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2965188026428223, 5.014585018157959, 2.990000009536743)
})
scoreboard.addComponentOrReplace(transform59)

const shipSWheel = new Entity('shipSWheel')
engine.addEntity(shipSWheel)
shipSWheel.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(26.972204208374023, 22.564693450927734, 68.29183959960938),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.7322750091552734, 1.7322750091552734, 1.7322750091552734)
})
shipSWheel.addComponentOrReplace(transform60)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape6 = new GLTFShape("models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb")
gltfShape6.withCollisions = true
gltfShape6.visible = true
entity.addComponentOrReplace(gltfShape6)
const transform61 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform61)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape6)
const transform62 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform62)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape6)
const transform63 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform63)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape6)
const transform64 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform64)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape6)
const transform65 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform65)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape6)
const transform66 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform66)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform67)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape6)
const transform68 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform68)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape6)
const transform69 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform69)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape6)
const transform70 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform70)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape6)
const transform71 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform71)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape6)
const transform72 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform72)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape6)
const transform73 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform73)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape6)
const transform74 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform74)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape6)
const transform75 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform75)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape6)
const transform76 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform76)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape6)
const transform77 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform77)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape6)
const transform78 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform78)

const alienpulpo12 = new Entity('alienpulpo12')
engine.addEntity(alienpulpo12)
alienpulpo12.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(10.08591079711914, 22.64041519165039, 31.198986053466797),
  rotation: new Quaternion(-1.918229855277001e-16, 0.6681089997291565, -7.964479209476849e-8, 0.7440634369850159),
  scale: new Vector3(0.8153781890869141, 0.8153781890869141, 0.8153781890869141)
})
alienpulpo12.addComponentOrReplace(transform79)
const gltfShape7 = new GLTFShape("models/ALIENPULPO1.glb")
gltfShape7.withCollisions = true
gltfShape7.visible = true
alienpulpo12.addComponentOrReplace(gltfShape7)

const alienpulpo22 = new Entity('alienpulpo22')
engine.addEntity(alienpulpo22)
alienpulpo22.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(6.469967842102051, 0.65142822265625, 8.419939041137695),
  rotation: new Quaternion(-2.2640356882049995e-16, 0.3867306709289551, -4.610188497622403e-8, 0.9221927523612976),
  scale: new Vector3(0.8920860290527344, 0.8920860290527344, 0.8920860290527344)
})
alienpulpo22.addComponentOrReplace(transform80)
const gltfShape8 = new GLTFShape("models/ALIENPULPO2.glb")
gltfShape8.withCollisions = true
gltfShape8.visible = true
alienpulpo22.addComponentOrReplace(gltfShape8)

const alienpulpo32 = new Entity('alienpulpo32')
engine.addEntity(alienpulpo32)
alienpulpo32.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(23.7644100189209, 22.561235427856445, 61.34447479248047),
  rotation: new Quaternion(4.181449718404897e-15, 0.9876482486724854, -1.1773682473403824e-7, -0.15668760240077972),
  scale: new Vector3(0.6636848449707031, 0.6636848449707031, 0.6636848449707031)
})
alienpulpo32.addComponentOrReplace(transform81)
const gltfShape9 = new GLTFShape("models/ALIENPULPO3.glb")
gltfShape9.withCollisions = true
gltfShape9.visible = true
alienpulpo32.addComponentOrReplace(gltfShape9)

const vacapintadaaniblend = new Entity('vacapintadaaniblend')
engine.addEntity(vacapintadaaniblend)
vacapintadaaniblend.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(36.37805938720703, 5.472348690032959, 24.94515609741211),
  rotation: new Quaternion(0.012066186405718327, -0.8095987439155579, -0.00009789178875507787, 0.5868597030639648),
  scale: new Vector3(1, 1, 1)
})
vacapintadaaniblend.addComponentOrReplace(transform82)
const gltfShape10 = new GLTFShape("models/VACAPINTADAaniblend.glb")
gltfShape10.withCollisions = true
gltfShape10.visible = true
vacapintadaaniblend.addComponentOrReplace(gltfShape10)

const rayo2 = new Entity('rayo2')
engine.addEntity(rayo2)
rayo2.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(24.147289276123047, 21.930089950561523, 40.57963562011719),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rayo2.addComponentOrReplace(transform83)
const gltfShape11 = new GLTFShape("models/RAYO2.glb")
gltfShape11.withCollisions = true
gltfShape11.visible = true
rayo2.addComponentOrReplace(gltfShape11)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(23.5921630859375, 22.5531063079834, 61.320587158203125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.6291985511779785, 1)
})
clickArea2.addComponentOrReplace(transform84)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(10.041030883789062, 22.5531063079834, 29.108688354492188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2253260612487793, 3.7680258750915527, 4.940244674682617)
})
clickArea3.addComponentOrReplace(transform85)

const clickArea4 = new Entity('clickArea4')
engine.addEntity(clickArea4)
clickArea4.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(8.019379615783691, 1.0531063079833984, 8.659021377563477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.977661609649658, 3.7680258750915527, 4.940244674682617)
})
clickArea4.addComponentOrReplace(transform86)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(37.1479606628418, 4.399393081665039, 22.453964233398438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.0948333740234375, 4.707988739013672, 6.147582054138184)
})
triggerArea3.addComponentOrReplace(transform87)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(5.670368194580078, 1.514479637145996, 91.63583374023438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.219653129577637, 7.378727912902832, 1.0000001192092896)
})
invisibleWall.addComponentOrReplace(transform88)

const redLightButton = new Entity('redLightButton')
engine.addEntity(redLightButton)
redLightButton.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(7.714489459991455, 3.603005886077881, 89.29447174072266),
  rotation: new Quaternion(0.02668793499469757, 0.08554238080978394, 0.3697699308395386, 0.9247921705245972),
  scale: new Vector3(1, 1, 1)
})
redLightButton.addComponentOrReplace(transform89)

const shortCableAdapter = new Entity('shortCableAdapter')
engine.addEntity(shortCableAdapter)
shortCableAdapter.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 70.0019302368164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter.addComponentOrReplace(transform90)
const gltfShape12 = new GLTFShape("models/Cable_Adapter_01/Cable_Adapter_01.glb")
gltfShape12.withCollisions = true
gltfShape12.visible = true
shortCableAdapter.addComponentOrReplace(gltfShape12)

const shortCableAdapter2 = new Entity('shortCableAdapter2')
engine.addEntity(shortCableAdapter2)
shortCableAdapter2.setParent(_scene)
shortCableAdapter2.addComponentOrReplace(gltfShape12)
const transform91 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 71.8590087890625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter2.addComponentOrReplace(transform91)

const shortCableAdapter3 = new Entity('shortCableAdapter3')
engine.addEntity(shortCableAdapter3)
shortCableAdapter3.setParent(_scene)
shortCableAdapter3.addComponentOrReplace(gltfShape12)
const transform92 = new Transform({
  position: new Vector3(46.04143142700195, 17.551292419433594, 73.67903900146484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter3.addComponentOrReplace(transform92)

const shortCableAdapter4 = new Entity('shortCableAdapter4')
engine.addEntity(shortCableAdapter4)
shortCableAdapter4.setParent(_scene)
shortCableAdapter4.addComponentOrReplace(gltfShape12)
const transform93 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 77.38145446777344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter4.addComponentOrReplace(transform93)

const shortCableAdapter5 = new Entity('shortCableAdapter5')
engine.addEntity(shortCableAdapter5)
shortCableAdapter5.setParent(_scene)
shortCableAdapter5.addComponentOrReplace(gltfShape12)
const transform94 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 75.54192352294922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter5.addComponentOrReplace(transform94)

const shortCableAdapter6 = new Entity('shortCableAdapter6')
engine.addEntity(shortCableAdapter6)
shortCableAdapter6.setParent(_scene)
shortCableAdapter6.addComponentOrReplace(gltfShape12)
const transform95 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 79.10794067382812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter6.addComponentOrReplace(transform95)

const shortCableAdapter7 = new Entity('shortCableAdapter7')
engine.addEntity(shortCableAdapter7)
shortCableAdapter7.setParent(_scene)
shortCableAdapter7.addComponentOrReplace(gltfShape12)
const transform96 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 80.98104095458984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter7.addComponentOrReplace(transform96)

const shortCableAdapter8 = new Entity('shortCableAdapter8')
engine.addEntity(shortCableAdapter8)
shortCableAdapter8.setParent(_scene)
shortCableAdapter8.addComponentOrReplace(gltfShape12)
const transform97 = new Transform({
  position: new Vector3(46.041473388671875, 17.551292419433594, 82.8255386352539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter8.addComponentOrReplace(transform97)

const mOrangeStripedCable = new Entity('mOrangeStripedCable')
engine.addEntity(mOrangeStripedCable)
mOrangeStripedCable.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(30.63182830810547, 1.2199736833572388, 82.82587432861328),
  rotation: new Quaternion(3.1499152075467173e-15, 0.21197454631328583, -2.526933506885598e-8, -0.9772751927375793),
  scale: new Vector3(1, 1, 1)
})
mOrangeStripedCable.addComponentOrReplace(transform98)
const gltfShape13 = new GLTFShape("models/Cable_1M_Curve_01/Cable_1M_Curve_01.glb")
gltfShape13.withCollisions = true
gltfShape13.visible = true
mOrangeStripedCable.addComponentOrReplace(gltfShape13)

const mLongLoopedCable = new Entity('mLongLoopedCable')
engine.addEntity(mLongLoopedCable)
mLongLoopedCable.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(28.085575103759766, 0.1058816909790039, 74.1541519165039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mLongLoopedCable.addComponentOrReplace(transform99)
const gltfShape14 = new GLTFShape("models/Cable_2M_Curve_02/Cable_2M_Curve_02.glb")
gltfShape14.withCollisions = true
gltfShape14.visible = true
mLongLoopedCable.addComponentOrReplace(gltfShape14)

const mOrangeStripedCable2 = new Entity('mOrangeStripedCable2')
engine.addEntity(mOrangeStripedCable2)
mOrangeStripedCable2.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(30.501489639282227, 0.14853620529174805, 88.34086608886719),
  rotation: new Quaternion(7.36772749451187e-17, -0.4181172251701355, 4.984345025604853e-8, 0.9083930850028992),
  scale: new Vector3(1, 1, 1)
})
mOrangeStripedCable2.addComponentOrReplace(transform100)
const gltfShape15 = new GLTFShape("models/Cable_2M_02/Cable_2M_02.glb")
gltfShape15.withCollisions = true
gltfShape15.visible = true
mOrangeStripedCable2.addComponentOrReplace(gltfShape15)

const tweezers = new Entity('tweezers')
engine.addEntity(tweezers)
tweezers.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(30.62749671936035, 1.1712796688079834, 85.32512664794922),
  rotation: new Quaternion(-1.0687192043030839e-16, 0.8912005424499512, -1.0623937640730219e-7, -0.4536096155643463),
  scale: new Vector3(1, 1, 1)
})
tweezers.addComponentOrReplace(transform101)
const gltfShape16 = new GLTFShape("models/Tweezers_01/Tweezers_01.glb")
gltfShape16.withCollisions = true
gltfShape16.visible = true
tweezers.addComponentOrReplace(gltfShape16)

const tieredDesk = new Entity('tieredDesk')
engine.addEntity(tieredDesk)
tieredDesk.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(28.5, 0.03253209590911865, 73.42913055419922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tieredDesk.addComponentOrReplace(transform102)
const gltfShape17 = new GLTFShape("models/Desk_01/Desk_01.glb")
gltfShape17.withCollisions = true
gltfShape17.visible = true
tieredDesk.addComponentOrReplace(gltfShape17)

const octagonalTable = new Entity('octagonalTable')
engine.addEntity(octagonalTable)
octagonalTable.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(30.791793823242188, 1.2830802202224731, 78.74518585205078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2372417449951172, 0.2372417449951172, 0.2372417449951172)
})
octagonalTable.addComponentOrReplace(transform103)
const gltfShape18 = new GLTFShape("models/DigitalTable_01/DigitalTable_01.glb")
gltfShape18.withCollisions = true
gltfShape18.visible = true
octagonalTable.addComponentOrReplace(gltfShape18)

const curvedPipe = new Entity('curvedPipe')
engine.addEntity(curvedPipe)
curvedPipe.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(20.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe.addComponentOrReplace(transform104)
const gltfShape19 = new GLTFShape("models/Pipe_Curve_05M_01/Pipe_Curve_05M_01.glb")
gltfShape19.withCollisions = true
gltfShape19.visible = true
curvedPipe.addComponentOrReplace(gltfShape19)

const curvedPipe2 = new Entity('curvedPipe2')
engine.addEntity(curvedPipe2)
curvedPipe2.setParent(_scene)
curvedPipe2.addComponentOrReplace(gltfShape19)
const transform105 = new Transform({
  position: new Vector3(19.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe2.addComponentOrReplace(transform105)

const curvedPipe3 = new Entity('curvedPipe3')
engine.addEntity(curvedPipe3)
curvedPipe3.setParent(_scene)
curvedPipe3.addComponentOrReplace(gltfShape19)
const transform106 = new Transform({
  position: new Vector3(18.5, 0, 73.9808120727539),
  rotation: new Quaternion(-6.692902301134779e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
curvedPipe3.addComponentOrReplace(transform106)

const dreamwhisperCodex = new Entity('dreamwhisperCodex')
engine.addEntity(dreamwhisperCodex)
dreamwhisperCodex.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(30.463171005249023, 1.1891719102859497, 85.98006439208984),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
dreamwhisperCodex.addComponentOrReplace(transform107)
const gltfShape20 = new GLTFShape("models/Book_05/Book_05.glb")
gltfShape20.withCollisions = true
gltfShape20.visible = true
dreamwhisperCodex.addComponentOrReplace(gltfShape20)

const goldenOctahedronPeridot = new Entity('goldenOctahedronPeridot')
engine.addEntity(goldenOctahedronPeridot)
goldenOctahedronPeridot.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(30.71699333190918, 2, 83.63725280761719),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot.addComponentOrReplace(transform108)
const gltfShape21 = new GLTFShape("models/Gem_07/Gem_07.glb")
gltfShape21.withCollisions = true
gltfShape21.visible = true
goldenOctahedronPeridot.addComponentOrReplace(gltfShape21)

const goldenOctahedronPeridot2 = new Entity('goldenOctahedronPeridot2')
engine.addEntity(goldenOctahedronPeridot2)
goldenOctahedronPeridot2.setParent(_scene)
goldenOctahedronPeridot2.addComponentOrReplace(gltfShape21)
const transform109 = new Transform({
  position: new Vector3(30.52064323425293, 2, 83.90122985839844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot2.addComponentOrReplace(transform109)

const goldenOctahedronPeridot3 = new Entity('goldenOctahedronPeridot3')
engine.addEntity(goldenOctahedronPeridot3)
goldenOctahedronPeridot3.setParent(_scene)
goldenOctahedronPeridot3.addComponentOrReplace(gltfShape21)
const transform110 = new Transform({
  position: new Vector3(30.78558349609375, 2, 83.9820785522461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49434661865234375, 0.49434661865234375, 0.49434661865234375)
})
goldenOctahedronPeridot3.addComponentOrReplace(transform110)

const papyrusScroll = new Entity('papyrusScroll')
engine.addEntity(papyrusScroll)
papyrusScroll.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(30.926403045654297, 2.217773199081421, 83.3128433227539),
  rotation: new Quaternion(-1.621115578973018e-16, 0.4002441167831421, -4.771281325588461e-8, 0.9164085984230042),
  scale: new Vector3(1, 1, 1)
})
papyrusScroll.addComponentOrReplace(transform111)
const gltfShape22 = new GLTFShape("models/Papyrus_01/Papyrus_01.glb")
gltfShape22.withCollisions = true
gltfShape22.visible = true
papyrusScroll.addComponentOrReplace(gltfShape22)

const parchment = new Entity('parchment')
engine.addEntity(parchment)
parchment.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(30.70166778564453, 2.5872721672058105, 85.8226547241211),
  rotation: new Quaternion(0.6578626036643982, 0.2592618763446808, -0.25926196575164795, 0.657862663269043),
  scale: new Vector3(1, 1, 1)
})
parchment.addComponentOrReplace(transform112)
const gltfShape23 = new GLTFShape("models/Parchement_01/Parchement_01.glb")
gltfShape23.withCollisions = true
gltfShape23.visible = true
parchment.addComponentOrReplace(gltfShape23)

const pirateScroll = new Entity('pirateScroll')
engine.addEntity(pirateScroll)
pirateScroll.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(16.496665954589844, 1.047481894493103, 84.5771713256836),
  rotation: new Quaternion(0, 0, 0.14215245842933655, 0.9898448586463928),
  scale: new Vector3(1, 1, 1)
})
pirateScroll.addComponentOrReplace(transform113)
const gltfShape24 = new GLTFShape("models/Map_03/Map_03.glb")
gltfShape24.withCollisions = true
gltfShape24.visible = true
pirateScroll.addComponentOrReplace(gltfShape24)

const runeScroll = new Entity('runeScroll')
engine.addEntity(runeScroll)
runeScroll.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(15.972322463989258, 0.7992825508117676, 90.01255798339844),
  rotation: new Quaternion(1.242854884577583e-16, 0.9409821629524231, -1.1217380091466111e-7, -0.33845609426498413),
  scale: new Vector3(1, 1, 1)
})
runeScroll.addComponentOrReplace(transform114)
const gltfShape25 = new GLTFShape("models/PapyrusOpen_01/PapyrusOpen_01.glb")
gltfShape25.withCollisions = true
gltfShape25.visible = true
runeScroll.addComponentOrReplace(gltfShape25)

const treasureMap = new Entity('treasureMap')
engine.addEntity(treasureMap)
treasureMap.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(30.582122802734375, 1.2053313255310059, 82.13886260986328),
  rotation: new Quaternion(4.0928221729743966e-17, -0.8894359469413757, 1.0602901312495305e-7, -0.4570598900318146),
  scale: new Vector3(1, 1, 1)
})
treasureMap.addComponentOrReplace(transform115)
const gltfShape26 = new GLTFShape("models/Map_04/Map_04.glb")
gltfShape26.withCollisions = true
gltfShape26.visible = true
treasureMap.addComponentOrReplace(gltfShape26)

const spellScroll = new Entity('spellScroll')
engine.addEntity(spellScroll)
spellScroll.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(30.803483963012695, 0.20482230186462402, 90.20243072509766),
  rotation: new Quaternion(-7.445754713775057e-16, -0.39236870408058167, 4.6773994455406864e-8, 0.919808030128479),
  scale: new Vector3(1, 1, 1)
})
spellScroll.addComponentOrReplace(transform116)
const gltfShape27 = new GLTFShape("models/Map_01/Map_01.glb")
gltfShape27.withCollisions = true
gltfShape27.visible = true
spellScroll.addComponentOrReplace(gltfShape27)

const bumboo = new Entity('bumboo')
engine.addEntity(bumboo)
bumboo.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(30.92813491821289, 1.2070215940475464, 87.15747833251953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5854225158691406, 0.5854225158691406, 0.5854225158691406)
})
bumboo.addComponentOrReplace(transform117)
const gltfShape28 = new GLTFShape("models/Bottle_03/Bottle_03.glb")
gltfShape28.withCollisions = true
gltfShape28.visible = true
bumboo.addComponentOrReplace(gltfShape28)

const computerThin = new Entity('computerThin')
engine.addEntity(computerThin)
computerThin.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(30.721315383911133, 0, 92.0452651977539),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
computerThin.addComponentOrReplace(transform118)
const gltfShape29 = new GLTFShape("models/Computer_01/Computer_01.glb")
gltfShape29.withCollisions = true
gltfShape29.visible = true
computerThin.addComponentOrReplace(gltfShape29)

const computerWide = new Entity('computerWide')
engine.addEntity(computerWide)
computerWide.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(34.5, 0.09049367904663086, 74.3517837524414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
computerWide.addComponentOrReplace(transform119)
const gltfShape30 = new GLTFShape("models/Computer_02/Computer_02.glb")
gltfShape30.withCollisions = true
gltfShape30.visible = true
computerWide.addComponentOrReplace(gltfShape30)

const curvedGreyDrawers = new Entity('curvedGreyDrawers')
engine.addEntity(curvedGreyDrawers)
curvedGreyDrawers.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(26.172805786132812, 0.07689237594604492, 74.12007904052734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers.addComponentOrReplace(transform120)
const gltfShape31 = new GLTFShape("models/Drawer_03/Drawer_03.glb")
gltfShape31.withCollisions = true
gltfShape31.visible = true
curvedGreyDrawers.addComponentOrReplace(gltfShape31)

const curvedGreyDrawers2 = new Entity('curvedGreyDrawers2')
engine.addEntity(curvedGreyDrawers2)
curvedGreyDrawers2.setParent(_scene)
curvedGreyDrawers2.addComponentOrReplace(gltfShape31)
const transform121 = new Transform({
  position: new Vector3(25.014368057250977, 0.07689237594604492, 74.12898254394531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers2.addComponentOrReplace(transform121)

const curvedGreyDrawers3 = new Entity('curvedGreyDrawers3')
engine.addEntity(curvedGreyDrawers3)
curvedGreyDrawers3.setParent(_scene)
curvedGreyDrawers3.addComponentOrReplace(gltfShape31)
const transform122 = new Transform({
  position: new Vector3(24.014368057250977, 0.07689237594604492, 74.12898254394531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedGreyDrawers3.addComponentOrReplace(transform122)

const gin = new Entity('gin')
engine.addEntity(gin)
gin.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(21.015554428100586, 0.9672110080718994, 92.79570770263672),
  rotation: new Quaternion(8.728150208061215e-15, 0.9930129647254944, -1.1837634872335911e-7, -0.11800575256347656),
  scale: new Vector3(1, 1, 1)
})
gin.addComponentOrReplace(transform123)
const gltfShape32 = new GLTFShape("models/Bottle_08/Bottle_08.glb")
gltfShape32.withCollisions = true
gltfShape32.visible = true
gin.addComponentOrReplace(gltfShape32)

const greyDrawers = new Entity('greyDrawers')
engine.addEntity(greyDrawers)
greyDrawers.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(23, 0, 74),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greyDrawers.addComponentOrReplace(transform124)
const gltfShape33 = new GLTFShape("models/Drawer_01/Drawer_01.glb")
gltfShape33.withCollisions = true
gltfShape33.visible = true
greyDrawers.addComponentOrReplace(gltfShape33)

const infoDisc = new Entity('infoDisc')
engine.addEntity(infoDisc)
infoDisc.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(22.01648712158203, 0.9522666931152344, 92.6396484375),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
infoDisc.addComponentOrReplace(transform125)
const gltfShape34 = new GLTFShape("models/DiscSciFi_01/DiscSciFi_01.glb")
gltfShape34.withCollisions = true
gltfShape34.visible = true
infoDisc.addComponentOrReplace(gltfShape34)

const monitorScreen = new Entity('monitorScreen')
engine.addEntity(monitorScreen)
monitorScreen.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(23.140466690063477, 0.968134880065918, 92.70137023925781),
  rotation: new Quaternion(-5.001426739258e-15, -0.9807853698730469, 1.1691871293351142e-7, 0.19509033858776093),
  scale: new Vector3(1, 1, 1)
})
monitorScreen.addComponentOrReplace(transform126)
const gltfShape35 = new GLTFShape("models/Monitor_01/Monitor_01.glb")
gltfShape35.withCollisions = true
gltfShape35.visible = true
monitorScreen.addComponentOrReplace(gltfShape35)

const paintBucket = new Entity('paintBucket')
engine.addEntity(paintBucket)
paintBucket.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(19.120792388916016, 0.10424423217773438, 91.18781280517578),
  rotation: new Quaternion(2.2702619097629106e-16, -0.419666051864624, 5.002808478593579e-8, 0.9076786041259766),
  scale: new Vector3(0.5706233978271484, 0.5706233978271484, 0.5706233978271484)
})
paintBucket.addComponentOrReplace(transform127)
const gltfShape36 = new GLTFShape("models/PaintBucket_01/PaintBucket_01.glb")
gltfShape36.withCollisions = true
gltfShape36.visible = true
paintBucket.addComponentOrReplace(gltfShape36)

const woodenWheel = new Entity('woodenWheel')
engine.addEntity(woodenWheel)
woodenWheel.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(19.692501068115234, 0.23780393600463867, 86.5),
  rotation: new Quaternion(-0.16221170127391815, 0.5448951721191406, 0.10838636010885239, 0.8154931664466858),
  scale: new Vector3(1, 1, 1)
})
woodenWheel.addComponentOrReplace(transform128)
const gltfShape37 = new GLTFShape("models/Wheel_01/Wheel_01.glb")
gltfShape37.withCollisions = true
gltfShape37.visible = true
woodenWheel.addComponentOrReplace(gltfShape37)

const streetClock = new Entity('streetClock')
engine.addEntity(streetClock)
streetClock.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(13.5, 0.06325888633728027, 74.18231201171875),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(1, 1, 1)
})
streetClock.addComponentOrReplace(transform129)
const gltfShape38 = new GLTFShape("models/StreetClock_01/StreetClock_01.glb")
gltfShape38.withCollisions = true
gltfShape38.visible = true
streetClock.addComponentOrReplace(gltfShape38)

const countdownTimer2 = new Entity('countdownTimer2')
engine.addEntity(countdownTimer2)
countdownTimer2.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(15.445372581481934, 1.288953185081482, 86.79395294189453),
  rotation: new Quaternion(-1.7037508692275063e-14, -0.6955452561378479, 8.291546294003638e-8, -0.7184823155403137),
  scale: new Vector3(1, 1, 1)
})
countdownTimer2.addComponentOrReplace(transform130)

const countdownTimer3 = new Entity('countdownTimer3')
engine.addEntity(countdownTimer3)
countdownTimer3.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(15.445372581481934, 1.288953185081482, 87.36611938476562),
  rotation: new Quaternion(-1.7037508692275063e-14, -0.6955452561378479, 8.291546294003638e-8, -0.7184823155403137),
  scale: new Vector3(1, 1, 1)
})
countdownTimer3.addComponentOrReplace(transform131)

const countdownTimer4 = new Entity('countdownTimer4')
engine.addEntity(countdownTimer4)
countdownTimer4.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(24.06916046142578, 2.552797317504883, 92.91096496582031),
  rotation: new Quaternion(9.262015592957813e-15, 0.9999721050262451, -1.1920594289449582e-7, -0.007475783117115498),
  scale: new Vector3(1, 1, 1)
})
countdownTimer4.addComponentOrReplace(transform132)

const ventFloorPanel = new Entity('ventFloorPanel')
engine.addEntity(ventFloorPanel)
ventFloorPanel.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(14.305432319641113, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel.addComponentOrReplace(transform133)
const gltfShape39 = new GLTFShape("models/Floor_Module_05/Floor_Module_05.glb")
gltfShape39.withCollisions = true
gltfShape39.visible = true
ventFloorPanel.addComponentOrReplace(gltfShape39)

const ventFloorPanel2 = new Entity('ventFloorPanel2')
engine.addEntity(ventFloorPanel2)
ventFloorPanel2.setParent(_scene)
ventFloorPanel2.addComponentOrReplace(gltfShape39)
const transform134 = new Transform({
  position: new Vector3(17.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel2.addComponentOrReplace(transform134)

const ventFloorPanel3 = new Entity('ventFloorPanel3')
engine.addEntity(ventFloorPanel3)
ventFloorPanel3.setParent(_scene)
ventFloorPanel3.addComponentOrReplace(gltfShape39)
const transform135 = new Transform({
  position: new Vector3(20.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel3.addComponentOrReplace(transform135)

const ventFloorPanel4 = new Entity('ventFloorPanel4')
engine.addEntity(ventFloorPanel4)
ventFloorPanel4.setParent(_scene)
ventFloorPanel4.addComponentOrReplace(gltfShape39)
const transform136 = new Transform({
  position: new Vector3(22.80543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel4.addComponentOrReplace(transform136)

const ventFloorPanel5 = new Entity('ventFloorPanel5')
engine.addEntity(ventFloorPanel5)
ventFloorPanel5.setParent(_scene)
ventFloorPanel5.addComponentOrReplace(gltfShape39)
const transform137 = new Transform({
  position: new Vector3(25.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel5.addComponentOrReplace(transform137)

const ventFloorPanel6 = new Entity('ventFloorPanel6')
engine.addEntity(ventFloorPanel6)
ventFloorPanel6.setParent(_scene)
ventFloorPanel6.addComponentOrReplace(gltfShape39)
const transform138 = new Transform({
  position: new Vector3(27.80543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel6.addComponentOrReplace(transform138)

const ventFloorPanel7 = new Entity('ventFloorPanel7')
engine.addEntity(ventFloorPanel7)
ventFloorPanel7.setParent(_scene)
ventFloorPanel7.addComponentOrReplace(gltfShape39)
const transform139 = new Transform({
  position: new Vector3(30.30543327331543, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel7.addComponentOrReplace(transform139)

const ventFloorPanel8 = new Entity('ventFloorPanel8')
engine.addEntity(ventFloorPanel8)
ventFloorPanel8.setParent(_scene)
ventFloorPanel8.addComponentOrReplace(gltfShape39)
const transform140 = new Transform({
  position: new Vector3(14.305432319641113, 0, 93.17509460449219),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 6.387600421905518)
})
ventFloorPanel8.addComponentOrReplace(transform140)

const blueNeonTube = new Entity('blueNeonTube')
engine.addEntity(blueNeonTube)
blueNeonTube.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(15.026832580566406, 3.7014355659484863, 85.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.173821210861206, 1, 1)
})
blueNeonTube.addComponentOrReplace(transform141)
const gltfShape40 = new GLTFShape("models/NeonLightTube_04/NeonLightTube_04.glb")
gltfShape40.withCollisions = true
gltfShape40.visible = true
blueNeonTube.addComponentOrReplace(gltfShape40)

const scroll6 = new Entity('scroll6')
engine.addEntity(scroll6)
scroll6.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(14.493066787719727, 16.02018165588379, 42.150508880615234),
  rotation: new Quaternion(-0.18357938528060913, -0.8007844090461731, -0.30532708764076233, 0.48147517442703247),
  scale: new Vector3(1, 1, 1)
})
scroll6.addComponentOrReplace(transform142)

const verticalHallwayDoo7 = new Entity('verticalHallwayDoo7')
engine.addEntity(verticalHallwayDoo7)
verticalHallwayDoo7.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(13.380016326904297, 0, 78.13340759277344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4281625747680664, 0.7590780258178711, 0.7590780258178711)
})
verticalHallwayDoo7.addComponentOrReplace(transform143)

const buttonChest = new Entity('buttonChest')
engine.addEntity(buttonChest)
buttonChest.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(15.323091506958008, 1.0708973407745361, 92.62623596191406),
  rotation: new Quaternion(-6.505165472027805e-18, 0.04902709648013115, -5.844484451955623e-9, 0.9987974762916565),
  scale: new Vector3(0.8345222473144531, 0.8345222473144531, 0.8345222473144531)
})
buttonChest.addComponentOrReplace(transform144)

const verticalHallwayDoo8 = new Entity('verticalHallwayDoo8')
engine.addEntity(verticalHallwayDoo8)
verticalHallwayDoo8.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(33.99541091918945, 0, 78),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8280017375946045, 0.9028594493865967, 0.9371986389160156)
})
verticalHallwayDoo8.addComponentOrReplace(transform145)

const padlock5 = new Entity('padlock5')
engine.addEntity(padlock5)
padlock5.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(34.522491455078125, 1.6308958530426025, 74.1685791015625),
  rotation: new Quaternion(-0.06392046064138412, 5.203957842512995e-18, 7.619912700818077e-9, 0.9979550242424011),
  scale: new Vector3(1, 1, 1)
})
padlock5.addComponentOrReplace(transform146)

const scroll7 = new Entity('scroll7')
engine.addEntity(scroll7)
scroll7.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(28.426637649536133, 0.9968539476394653, 73.98047637939453),
  rotation: new Quaternion(-9.870662340393942e-16, 0.657564103603363, -7.838773541379851e-8, -0.7533986568450928),
  scale: new Vector3(1, 1, 1)
})
scroll7.addComponentOrReplace(transform147)

const headAccessCard = new Entity('headAccessCard')
engine.addEntity(headAccessCard)
headAccessCard.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(31.41756248474121, 1.827182412147522, 88.16009521484375),
  rotation: new Quaternion(0, 0, -0.6988348364830017, 0.7152831554412842),
  scale: new Vector3(1, 1, 1)
})
headAccessCard.addComponentOrReplace(transform148)

const metalTrapdoor2 = new Entity('metalTrapdoor2')
engine.addEntity(metalTrapdoor2)
metalTrapdoor2.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(31.47696304321289, 1.8426539897918701, 88.19257354736328),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.2571525573730469, 0.2571525573730469, 0.2571525573730469)
})
metalTrapdoor2.addComponentOrReplace(transform149)

const greenLightButton2 = new Entity('greenLightButton2')
engine.addEntity(greenLightButton2)
greenLightButton2.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(33.76272964477539, 0.08069324493408203, 92.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.754589080810547, 1, 1.831366777420044)
})
greenLightButton2.addComponentOrReplace(transform150)

const tools5 = new Entity('tools5')
engine.addEntity(tools5)
tools5.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(23.633045196533203, 22.750844955444336, 82.84844207763672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.154325485229492, 1, 7.216909408569336)
})
tools5.addComponentOrReplace(transform151)

const scifiLever2 = new Entity('scifiLever2')
engine.addEntity(scifiLever2)
scifiLever2.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(35.70798110961914, 22.417377471923828, 82.35713195800781),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.867624282836914, 5.867624282836914, 5.867624282836914)
})
scifiLever2.addComponentOrReplace(transform152)

const clickArea5 = new Entity('clickArea5')
engine.addEntity(clickArea5)
clickArea5.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(15.497021675109863, 1.2192357778549194, 89.46353912353516),
  rotation: new Quaternion(3.3155662646676886e-15, 0.7442870140075684, -8.87259261617146e-8, -0.6678599119186401),
  scale: new Vector3(0.39555874466896057, 0.13662035763263702, 0.646013081073761)
})
clickArea5.addComponentOrReplace(transform153)

const scroll8 = new Entity('scroll8')
engine.addEntity(scroll8)
scroll8.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(15.378438949584961, 5.146726608276367, 18.35199546813965),
  rotation: new Quaternion(2.480963525914345e-15, -0.3310868442058563, 3.9468634582817685e-8, 0.9436002969741821),
  scale: new Vector3(1, 1, 1)
})
scroll8.addComponentOrReplace(transform154)

const shortCableAdapter9 = new Entity('shortCableAdapter9')
engine.addEntity(shortCableAdapter9)
shortCableAdapter9.setParent(_scene)
shortCableAdapter9.addComponentOrReplace(gltfShape12)
const transform155 = new Transform({
  position: new Vector3(46.065345764160156, 17.551292419433594, 68.0019302368164),
  rotation: new Quaternion(-0.09412770718336105, 5.203305197009691e-18, 1.122089621219402e-8, 0.9955601692199707),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter9.addComponentOrReplace(transform155)

const shortCableAdapter10 = new Entity('shortCableAdapter10')
engine.addEntity(shortCableAdapter10)
shortCableAdapter10.setParent(_scene)
shortCableAdapter10.addComponentOrReplace(gltfShape12)
const transform156 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 66.17022705078125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter10.addComponentOrReplace(transform156)

const shortCableAdapter11 = new Entity('shortCableAdapter11')
engine.addEntity(shortCableAdapter11)
shortCableAdapter11.setParent(_scene)
shortCableAdapter11.addComponentOrReplace(gltfShape12)
const transform157 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 64.30525207519531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter11.addComponentOrReplace(transform157)

const shortCableAdapter12 = new Entity('shortCableAdapter12')
engine.addEntity(shortCableAdapter12)
shortCableAdapter12.setParent(_scene)
shortCableAdapter12.addComponentOrReplace(gltfShape12)
const transform158 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 62.434730529785156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter12.addComponentOrReplace(transform158)

const shortCableAdapter13 = new Entity('shortCableAdapter13')
engine.addEntity(shortCableAdapter13)
shortCableAdapter13.setParent(_scene)
shortCableAdapter13.addComponentOrReplace(gltfShape12)
const transform159 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 60.642086029052734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter13.addComponentOrReplace(transform159)

const shortCableAdapter14 = new Entity('shortCableAdapter14')
engine.addEntity(shortCableAdapter14)
shortCableAdapter14.setParent(_scene)
shortCableAdapter14.addComponentOrReplace(gltfShape12)
const transform160 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 58.852291107177734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter14.addComponentOrReplace(transform160)

const shortCableAdapter15 = new Entity('shortCableAdapter15')
engine.addEntity(shortCableAdapter15)
shortCableAdapter15.setParent(_scene)
shortCableAdapter15.addComponentOrReplace(gltfShape12)
const transform161 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 57.053043365478516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter15.addComponentOrReplace(transform161)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(24, 20.676055908203125, 73.95116424560547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(14.781481742858887, 7.4547624588012695, 1.0000008344650269)
})
invisibleWall2.addComponentOrReplace(transform162)

const yellowButton = new Entity('yellowButton')
engine.addEntity(yellowButton)
yellowButton.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(24.399660110473633, 22.689653396606445, 77.06977844238281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.1677474975585938, 3.1677474975585938, 3.1677474975585938)
})
yellowButton.addComponentOrReplace(transform163)

const shortCableAdapter16 = new Entity('shortCableAdapter16')
engine.addEntity(shortCableAdapter16)
shortCableAdapter16.setParent(_scene)
shortCableAdapter16.addComponentOrReplace(gltfShape12)
const transform164 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 55.21459197998047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter16.addComponentOrReplace(transform164)

const shortCableAdapter17 = new Entity('shortCableAdapter17')
engine.addEntity(shortCableAdapter17)
shortCableAdapter17.setParent(_scene)
shortCableAdapter17.addComponentOrReplace(gltfShape12)
const transform165 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 53.36128616333008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter17.addComponentOrReplace(transform165)

const shortCableAdapter18 = new Entity('shortCableAdapter18')
engine.addEntity(shortCableAdapter18)
shortCableAdapter18.setParent(_scene)
shortCableAdapter18.addComponentOrReplace(gltfShape12)
const transform166 = new Transform({
  position: new Vector3(46.065345764160156, 17.181142807006836, 51.54668045043945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 6.164621829986572)
})
shortCableAdapter18.addComponentOrReplace(transform166)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(33.19681930541992, 20.759206771850586, 50.24976348876953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.213285207748413, 5.028546333312988, 2.2155184745788574)
})
invisibleWall3.addComponentOrReplace(transform167)

const bloomingBlueAcaciaTree = new Entity('bloomingBlueAcaciaTree')
engine.addEntity(bloomingBlueAcaciaTree)
bloomingBlueAcaciaTree.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(9.75230598449707, 16.98479461669922, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6529617309570312, 1.6529617309570312, 1.6529617309570312)
})
bloomingBlueAcaciaTree.addComponentOrReplace(transform168)
const gltfShape41 = new GLTFShape("models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb")
gltfShape41.withCollisions = true
gltfShape41.visible = true
bloomingBlueAcaciaTree.addComponentOrReplace(gltfShape41)

const tallBlueAcaciaTree = new Entity('tallBlueAcaciaTree')
engine.addEntity(tallBlueAcaciaTree)
tallBlueAcaciaTree.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(40.62702178955078, 9.028440475463867, 34.902915954589844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.85552978515625, 1.85552978515625, 1.85552978515625)
})
tallBlueAcaciaTree.addComponentOrReplace(transform169)
const gltfShape42 = new GLTFShape("models/Tree_Forest_Blue_04/Tree_Forest_Blue_04.glb")
gltfShape42.withCollisions = true
gltfShape42.visible = true
tallBlueAcaciaTree.addComponentOrReplace(gltfShape42)

const clusteredTurquoiseAcaciaTree = new Entity('clusteredTurquoiseAcaciaTree')
engine.addEntity(clusteredTurquoiseAcaciaTree)
clusteredTurquoiseAcaciaTree.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(15.620946884155273, 2.776663303375244, 17.8361873626709),
  rotation: new Quaternion(8.705728928310038e-16, 0.9793487787246704, -1.1674745792333852e-7, 0.2021782398223877),
  scale: new Vector3(1.3690032958984375, 1.3690032958984375, 1.3690032958984375)
})
clusteredTurquoiseAcaciaTree.addComponentOrReplace(transform170)
const gltfShape43 = new GLTFShape("models/Tree_Forest_Turquoise_03/Tree_Forest_Turquoise_03.glb")
gltfShape43.withCollisions = true
gltfShape43.visible = true
clusteredTurquoiseAcaciaTree.addComponentOrReplace(gltfShape43)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(46.5, 0, 57.9289665222168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8192365169525146, 41.11783218383789, 74.912109375)
})
invisibleWall4.addComponentOrReplace(transform171)

const blueAcaciaTree = new Entity('blueAcaciaTree')
engine.addEntity(blueAcaciaTree)
blueAcaciaTree.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(41.487850189208984, 0, 15.229951858520508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4710121154785156, 1.4710121154785156, 1.4710121154785156)
})
blueAcaciaTree.addComponentOrReplace(transform172)
const gltfShape44 = new GLTFShape("models/Tree_Forest_Blue_01/Tree_Forest_Blue_01.glb")
gltfShape44.withCollisions = true
gltfShape44.visible = true
blueAcaciaTree.addComponentOrReplace(gltfShape44)

const bloomingTurquoiseAcaciaTree = new Entity('bloomingTurquoiseAcaciaTree')
engine.addEntity(bloomingTurquoiseAcaciaTree)
bloomingTurquoiseAcaciaTree.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(41.72410202026367, 0, 4.701112747192383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9744949340820312, 0.9744949340820312, 0.9744949340820312)
})
bloomingTurquoiseAcaciaTree.addComponentOrReplace(transform173)
const gltfShape45 = new GLTFShape("models/Tree_Forest_Turquoise_02/Tree_Forest_Turquoise_02.glb")
gltfShape45.withCollisions = true
gltfShape45.visible = true
bloomingTurquoiseAcaciaTree.addComponentOrReplace(gltfShape45)

const terrenoFinal3 = new Entity('terrenoFinal3')
engine.addEntity(terrenoFinal3)
terrenoFinal3.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(23.919570922851562, 0.6475539207458496, 50.586936950683594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9927883148193359, 0.837672233581543, 0.9927883148193359)
})
terrenoFinal3.addComponentOrReplace(transform174)
const gltfShape46 = new GLTFShape("models/terreno_final3.glb")
gltfShape46.withCollisions = true
gltfShape46.visible = true
terrenoFinal3.addComponentOrReplace(gltfShape46)

const ventFloorPanel9 = new Entity('ventFloorPanel9')
engine.addEntity(ventFloorPanel9)
ventFloorPanel9.setParent(_scene)
ventFloorPanel9.addComponentOrReplace(gltfShape39)
const transform175 = new Transform({
  position: new Vector3(37.061737060546875, 0, 93.12052917480469),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 6.387600421905518)
})
ventFloorPanel9.addComponentOrReplace(transform175)

const ventFloorPanel10 = new Entity('ventFloorPanel10')
engine.addEntity(ventFloorPanel10)
ventFloorPanel10.setParent(_scene)
ventFloorPanel10.addComponentOrReplace(gltfShape39)
const transform176 = new Transform({
  position: new Vector3(11.305432319641113, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel10.addComponentOrReplace(transform176)

const ventFloorPanel11 = new Entity('ventFloorPanel11')
engine.addEntity(ventFloorPanel11)
ventFloorPanel11.setParent(_scene)
ventFloorPanel11.addComponentOrReplace(gltfShape39)
const transform177 = new Transform({
  position: new Vector3(33.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel11.addComponentOrReplace(transform177)

const ventFloorPanel12 = new Entity('ventFloorPanel12')
engine.addEntity(ventFloorPanel12)
ventFloorPanel12.setParent(_scene)
ventFloorPanel12.addComponentOrReplace(gltfShape39)
const transform178 = new Transform({
  position: new Vector3(36.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel12.addComponentOrReplace(transform178)

const ventFloorPanel13 = new Entity('ventFloorPanel13')
engine.addEntity(ventFloorPanel13)
ventFloorPanel13.setParent(_scene)
ventFloorPanel13.addComponentOrReplace(gltfShape39)
const transform179 = new Transform({
  position: new Vector3(39.30543518066406, 0, 95.96991729736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel13.addComponentOrReplace(transform179)

const ventFloorPanel14 = new Entity('ventFloorPanel14')
engine.addEntity(ventFloorPanel14)
ventFloorPanel14.setParent(_scene)
ventFloorPanel14.addComponentOrReplace(gltfShape39)
const transform180 = new Transform({
  position: new Vector3(36.80543518066406, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel14.addComponentOrReplace(transform180)

const ventFloorPanel15 = new Entity('ventFloorPanel15')
engine.addEntity(ventFloorPanel15)
ventFloorPanel15.setParent(_scene)
ventFloorPanel15.addComponentOrReplace(gltfShape39)
const transform181 = new Transform({
  position: new Vector3(33.80543518066406, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel15.addComponentOrReplace(transform181)

const ventFloorPanel16 = new Entity('ventFloorPanel16')
engine.addEntity(ventFloorPanel16)
ventFloorPanel16.setParent(_scene)
ventFloorPanel16.addComponentOrReplace(gltfShape39)
const transform182 = new Transform({
  position: new Vector3(31.305435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel16.addComponentOrReplace(transform182)

const ventFloorPanel17 = new Entity('ventFloorPanel17')
engine.addEntity(ventFloorPanel17)
ventFloorPanel17.setParent(_scene)
ventFloorPanel17.addComponentOrReplace(gltfShape39)
const transform183 = new Transform({
  position: new Vector3(28.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel17.addComponentOrReplace(transform183)

const ventFloorPanel18 = new Entity('ventFloorPanel18')
engine.addEntity(ventFloorPanel18)
ventFloorPanel18.setParent(_scene)
ventFloorPanel18.addComponentOrReplace(gltfShape39)
const transform184 = new Transform({
  position: new Vector3(25.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel18.addComponentOrReplace(transform184)

const ventFloorPanel19 = new Entity('ventFloorPanel19')
engine.addEntity(ventFloorPanel19)
ventFloorPanel19.setParent(_scene)
ventFloorPanel19.addComponentOrReplace(gltfShape39)
const transform185 = new Transform({
  position: new Vector3(22.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel19.addComponentOrReplace(transform185)

const ventFloorPanel20 = new Entity('ventFloorPanel20')
engine.addEntity(ventFloorPanel20)
ventFloorPanel20.setParent(_scene)
ventFloorPanel20.addComponentOrReplace(gltfShape39)
const transform186 = new Transform({
  position: new Vector3(19.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel20.addComponentOrReplace(transform186)

const ventFloorPanel21 = new Entity('ventFloorPanel21')
engine.addEntity(ventFloorPanel21)
ventFloorPanel21.setParent(_scene)
ventFloorPanel21.addComponentOrReplace(gltfShape39)
const transform187 = new Transform({
  position: new Vector3(16.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel21.addComponentOrReplace(transform187)

const ventFloorPanel22 = new Entity('ventFloorPanel22')
engine.addEntity(ventFloorPanel22)
ventFloorPanel22.setParent(_scene)
ventFloorPanel22.addComponentOrReplace(gltfShape39)
const transform188 = new Transform({
  position: new Vector3(13.805435180664062, 0, 74.2256851196289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ventFloorPanel22.addComponentOrReplace(transform188)

const scroll10 = new Entity('scroll10')
engine.addEntity(scroll10)
scroll10.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(14.416342735290527, 2.4725024700164795, 84.03308868408203),
  rotation: new Quaternion(2.0988261470077845e-16, -0.020936409011483192, 2.495816220360325e-9, -0.9997808337211609),
  scale: new Vector3(1, 1, 1)
})
scroll10.addComponentOrReplace(transform189)

const buttonChest2 = new Entity('buttonChest2')
engine.addEntity(buttonChest2)
buttonChest2.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(14.704671859741211, 2.599666118621826, 84.0728759765625),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.5, 1.5, 1.5)
})
buttonChest2.addComponentOrReplace(transform190)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(6.747957229614258, 20.898799896240234, 28.30751609802246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.844951629638672, 1, 8.126704216003418)
})
invisibleWall5.addComponentOrReplace(transform191)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(39.376441955566406, 19.53072738647461, 53.5),
  rotation: new Quaternion(0, 0, -0.2052890658378601, 0.9787014126777649),
  scale: new Vector3(1, 0.40589845180511475, 3.3528127670288086)
})
invisibleWall6.addComponentOrReplace(transform192)

const metalTrapdoor3 = new Entity('metalTrapdoor3')
engine.addEntity(metalTrapdoor3)
metalTrapdoor3.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(23.700300216674805, 22.5185546875, 67.24351501464844),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.6013398170471191, 1.0000004768371582, 2.774482250213623)
})
metalTrapdoor3.addComponentOrReplace(transform193)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(10.656765937805176, 0, 78.86331176757812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.598745584487915, 11.043367385864258, 25.53719711303711)
})
invisibleWall7.addComponentOrReplace(transform194)

const tablet = new Entity('tablet')
engine.addEntity(tablet)
tablet.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(19.896257400512695, 24.14000129699707, 74.12420654296875),
  rotation: new Quaternion(-0.7071068286895752, 2.9802322387695312e-8, 1.2665987014770508e-7, -0.7071067690849304),
  scale: new Vector3(7.237974166870117, 7.237974166870117, 7.237974166870117)
})
tablet.addComponentOrReplace(transform195)

const scroll9 = new Entity('scroll9')
engine.addEntity(scroll9)
scroll9.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(23.956745147705078, 1.3092396259307861, 74.16043090820312),
  rotation: new Quaternion(-2.454745156279305e-16, 0.30965209007263184, -3.6913405665472965e-8, 0.9508500099182129),
  scale: new Vector3(1, 1, 1)
})
scroll9.addComponentOrReplace(transform196)

const grassSprout = new Entity('grassSprout')
engine.addEntity(grassSprout)
grassSprout.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(33.10999298095703, 6.020819664001465, 25.422657012939453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout.addComponentOrReplace(transform197)
const gltfShape47 = new GLTFShape("models/Grass_03/Grass_03.glb")
gltfShape47.withCollisions = true
gltfShape47.visible = true
grassSprout.addComponentOrReplace(gltfShape47)

const grassSprout2 = new Entity('grassSprout2')
engine.addEntity(grassSprout2)
grassSprout2.setParent(_scene)
grassSprout2.addComponentOrReplace(gltfShape47)
const transform198 = new Transform({
  position: new Vector3(33.9425048828125, 6.020819664001465, 26.324718475341797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout2.addComponentOrReplace(transform198)

const grassSprout3 = new Entity('grassSprout3')
engine.addEntity(grassSprout3)
grassSprout3.setParent(_scene)
grassSprout3.addComponentOrReplace(gltfShape47)
const transform199 = new Transform({
  position: new Vector3(33.84273910522461, 5.456259250640869, 24.526199340820312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout3.addComponentOrReplace(transform199)

const grassSprout4 = new Entity('grassSprout4')
engine.addEntity(grassSprout4)
grassSprout4.setParent(_scene)
grassSprout4.addComponentOrReplace(gltfShape47)
const transform200 = new Transform({
  position: new Vector3(34.367305755615234, 4.830380916595459, 22.810985565185547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout4.addComponentOrReplace(transform200)

const grassSprout5 = new Entity('grassSprout5')
engine.addEntity(grassSprout5)
grassSprout5.setParent(_scene)
grassSprout5.addComponentOrReplace(gltfShape47)
const transform201 = new Transform({
  position: new Vector3(33.095855712890625, 5.527141094207764, 23.42445182800293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassSprout5.addComponentOrReplace(transform201)

const cyanLeafShrub = new Entity('cyanLeafShrub')
engine.addEntity(cyanLeafShrub)
cyanLeafShrub.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(8.253278732299805, 5.205371379852295, 28.081825256347656),
  rotation: new Quaternion(1.7343662373497608e-18, 0.10413361340761185, -1.2413693184498698e-8, 0.9945633411407471),
  scale: new Vector3(3.515106201171875, 3.515106201171875, 3.515106201171875)
})
cyanLeafShrub.addComponentOrReplace(transform202)
const gltfShape48 = new GLTFShape("models/Vegetation_09/Vegetation_09.glb")
gltfShape48.withCollisions = true
gltfShape48.visible = true
cyanLeafShrub.addComponentOrReplace(gltfShape48)

const cyanLeafShrub2 = new Entity('cyanLeafShrub2')
engine.addEntity(cyanLeafShrub2)
cyanLeafShrub2.setParent(_scene)
cyanLeafShrub2.addComponentOrReplace(gltfShape48)
const transform203 = new Transform({
  position: new Vector3(7.86820125579834, 7.338649749755859, 34.436424255371094),
  rotation: new Quaternion(-3.383562469783238e-15, 0.5606716275215149, -6.683725217726533e-8, 0.8280382752418518),
  scale: new Vector3(3.515106201171875, 3.515106201171875, 3.515106201171875)
})
cyanLeafShrub2.addComponentOrReplace(transform203)

const electricBluePalm = new Entity('electricBluePalm')
engine.addEntity(electricBluePalm)
electricBluePalm.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(16.5, 1.9160175323486328, 15.872905731201172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm.addComponentOrReplace(transform204)
const gltfShape49 = new GLTFShape("models/PlantSF_08/PlantSF_08.glb")
gltfShape49.withCollisions = true
gltfShape49.visible = true
electricBluePalm.addComponentOrReplace(gltfShape49)

const electricBluePalm2 = new Entity('electricBluePalm2')
engine.addEntity(electricBluePalm2)
electricBluePalm2.setParent(_scene)
electricBluePalm2.addComponentOrReplace(gltfShape49)
const transform205 = new Transform({
  position: new Vector3(41.256317138671875, 13.005581855773926, 39.11298751831055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm2.addComponentOrReplace(transform205)

const electricBluePalm3 = new Entity('electricBluePalm3')
engine.addEntity(electricBluePalm3)
electricBluePalm3.setParent(_scene)
electricBluePalm3.addComponentOrReplace(gltfShape49)
const transform206 = new Transform({
  position: new Vector3(9.51801872253418, 15.740333557128906, 60.09178161621094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
electricBluePalm3.addComponentOrReplace(transform206)

const fatsia = new Entity('fatsia')
engine.addEntity(fatsia)
fatsia.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(13.101593971252441, 19.449405670166016, 48.34264373779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fatsia.addComponentOrReplace(transform207)
const gltfShape50 = new GLTFShape("models/Vegetation_10/Vegetation_10.glb")
gltfShape50.withCollisions = true
gltfShape50.visible = true
fatsia.addComponentOrReplace(gltfShape50)

const fatsia2 = new Entity('fatsia2')
engine.addEntity(fatsia2)
fatsia2.setParent(_scene)
fatsia2.addComponentOrReplace(gltfShape50)
const transform208 = new Transform({
  position: new Vector3(31.721153259277344, 0.9858589172363281, 7.342643737792969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6984939575195312, 1.6984939575195312, 1.6984939575195312)
})
fatsia2.addComponentOrReplace(transform208)

const purplePalm = new Entity('purplePalm')
engine.addEntity(purplePalm)
purplePalm.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(40.829776763916016, 8.749282836914062, 33.01197814941406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm.addComponentOrReplace(transform209)
const gltfShape51 = new GLTFShape("models/PlantSF_01/PlantSF_01.glb")
gltfShape51.withCollisions = true
gltfShape51.visible = true
purplePalm.addComponentOrReplace(gltfShape51)

const purplePalm2 = new Entity('purplePalm2')
engine.addEntity(purplePalm2)
purplePalm2.setParent(_scene)
purplePalm2.addComponentOrReplace(gltfShape51)
const transform210 = new Transform({
  position: new Vector3(14.540176391601562, 4.87516450881958, 23.210529327392578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm2.addComponentOrReplace(transform210)

const purplePalm3 = new Entity('purplePalm3')
engine.addEntity(purplePalm3)
purplePalm3.setParent(_scene)
purplePalm3.addComponentOrReplace(gltfShape51)
const transform211 = new Transform({
  position: new Vector3(3.5401763916015625, 0, 1.2105293273925781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purplePalm3.addComponentOrReplace(transform211)

const wildChives = new Entity('wildChives')
engine.addEntity(wildChives)
wildChives.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(41.6672477722168, 0.30455589294433594, 11.286907196044922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wildChives.addComponentOrReplace(transform212)
const gltfShape52 = new GLTFShape("models/Vegetation_07/Vegetation_07.glb")
gltfShape52.withCollisions = true
gltfShape52.visible = true
wildChives.addComponentOrReplace(gltfShape52)

const wildChives2 = new Entity('wildChives2')
engine.addEntity(wildChives2)
wildChives2.setParent(_scene)
wildChives2.addComponentOrReplace(gltfShape52)
const transform213 = new Transform({
  position: new Vector3(10.039741516113281, 1.1032381057739258, 13.04089641571045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8695592880249023, 0.8695592880249023, 0.8695592880249023)
})
wildChives2.addComponentOrReplace(transform213)

const wildChives3 = new Entity('wildChives3')
engine.addEntity(wildChives3)
wildChives3.setParent(_scene)
wildChives3.addComponentOrReplace(gltfShape52)
const transform214 = new Transform({
  position: new Vector3(10.914566040039062, 17.741933822631836, 51.539024353027344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8695592880249023, 0.8695592880249023, 0.8695592880249023)
})
wildChives3.addComponentOrReplace(transform214)

const rayotiempo = new Entity('rayotiempo')
engine.addEntity(rayotiempo)
rayotiempo.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(22.005369186401367, 23.2088565826416, 74.68112182617188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9992790222167969, 0.9992790222167969, 0.9992790222167969)
})
rayotiempo.addComponentOrReplace(transform215)
const gltfShape53 = new GLTFShape("models/rayotiempo.glb")
gltfShape53.withCollisions = true
gltfShape53.visible = true
rayotiempo.addComponentOrReplace(gltfShape53)

const rayotiempo2 = new Entity('rayotiempo2')
engine.addEntity(rayotiempo2)
rayotiempo2.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(21.5, 2, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rayotiempo2.addComponentOrReplace(transform216)
rayotiempo2.addComponentOrReplace(gltfShape53)

const invisibleWall8 = new Entity('invisibleWall8')
engine.addEntity(invisibleWall8)
invisibleWall8.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(24.397722244262695, 22.320350646972656, 77.04273223876953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5215396881103516, 0.8973110318183899, 1.5215396881103516)
})
invisibleWall8.addComponentOrReplace(transform217)

const invisibleWall10 = new Entity('invisibleWall10')
engine.addEntity(invisibleWall10)
invisibleWall10.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(24.087871551513672, 0, 95.25923156738281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(47.29714584350586, 20.251611709594727, 0.4247003495693207)
})
invisibleWall10.addComponentOrReplace(transform218)

const invisibleWall11 = new Entity('invisibleWall11')
engine.addEntity(invisibleWall11)
invisibleWall11.setParent(_scene)
const transform219 = new Transform({
  position: new Vector3(0.5873953104019165, 0, 57.91194152832031),
  rotation: new Quaternion(-3.0390917460685696e-15, -0.7061646580696106, 8.418138719434864e-8, 0.7080477476119995),
  scale: new Vector3(74.6324234008789, 20.251611709594727, 0.5529927611351013)
})
invisibleWall11.addComponentOrReplace(transform219)

const crate = new Entity('crate')
engine.addEntity(crate)
const crateTransform = new Transform({
   position: new Vector3(30.699342727661133, 0.10362625122070312, 77.29105377197266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6663200855255127, 0.6663200855255127, 0.6663200855255127)
})
crate.addComponent(crateTransform)
engine.addEntity(crate)


const crateScript = new CrateScript()


crateScript.init(options)
crateScript.spawn(crate, {
    "collectPointId": `aad5b2cc-7816-4cc0-b9f3-fb2bb28baa45`,
    "campaignId": "fd27539a-30b8-4c29-b8c7-a21a90190abf",
    "visible": true
}, createChannel(channelId, crate, channelBus))

const scroll11 = new Entity('scroll11')
engine.addEntity(scroll11)
scroll11.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(15.616378784179688, 1.1888949871063232, 80.5),
  rotation: new Quaternion(-3.8820750817416063e-17, -0.3419187664985657, 4.075988613294612e-8, 0.9397295713424683),
  scale: new Vector3(1.2959692478179932, 1.2959672212600708, 1.2959692478179932)
})
scroll11.addComponentOrReplace(transform221)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)
squareSignpost.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(14.5, 0.3098665475845337, 1.0349254608154297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareSignpost.addComponentOrReplace(transform222)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
const script16 = new Script16()
const script17 = new Script17()
const script18 = new Script18()
const script19 = new Script19()
const script20 = new Script20()
const script21 = new Script21()
const script22 = new Script22()
const script23 = new Script23()
const script24 = new Script24()
const script25 = new Script25()
const script26 = new Script26()
const script27 = new Script27()
const script28 = new Script28()
const script29 = new Script29()
const script30 = new Script30()
const script31 = new Script31()
const script32 = new Script32()
const script33 = new Script33()
const script34 = new Script34()
const script35 = new Script35()
const script36 = new Script36()
const script37 = new Script37()
const script38 = new Script38()
const script39 = new Script39()
const script40 = new Script40()
const script41 = new Script41()
const script42 = new Script42()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script16.init(options)
script17.init(options)
script18.init(options)
script19.init(options)
script20.init(options)
script21.init(options)
script22.init(options)
script23.init(options)
script24.init(options)
script25.init(options)
script26.init(options)
script27.init(options)
script28.init(options)
script29.init(options)
script30.init(options)
script31.init(options)
script32.init(options)
script33.init(options)
script34.init(options)
script35.init(options)
script36.init(options)
script37.init(options)
script38.init(options)
script39.init(options)
script40.init(options)
script41.init(options)
script42.init(options)
script1.spawn(parrot, {"onActivate":[{"entityName":"parrot","actionId":"activate","values":{}}]}, createChannel(channelId, parrot, channelBus))
script2.spawn(padlock, {"combination":3210,"onSolve":[{"entityName":"verticalHallwayDoo","actionId":"open","values":{}}]}, createChannel(channelId, padlock, channelBus))
script3.spawn(roundSignpost, {"text":"NO HUMANS\nALLOWED","fontSize":20}, createChannel(channelId, roundSignpost, channelBus))
script4.spawn(scroll, {"text":"Dear friend,\nI'm glad the portal worked.\nIf you're reading this then \nthings haven't turned out \nas we hoped. This world\nis different from the one \nyou remember. We don't\nhave much time, start in \n3...2...1...0  Go! Go! Go!","fontSize":30}, createChannel(channelId, scroll, channelBus))
script5.spawn(verticalPlatform, {"distance":80,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script6.spawn(tools2, {}, createChannel(channelId, tools2, channelBus))
script7.spawn(ambientSound, {"sound":"Factory","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script8.spawn(verticalPlatform2, {"distance":70,"speed":3,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform2, channelBus))
script2.spawn(padlock2, {"combination":3142,"onSolve":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, padlock2, channelBus))
script6.spawn(tools3, {}, createChannel(channelId, tools3, channelBus))
script9.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"tools3","actionId":"print","values":{"message":"where am i?","duration":5,"multiplayer":false}}],"onLeave":[{"entityName":"tools3","actionId":"print","values":{"message":"what happened here?","duration":5,"multiplayer":false}}]}, createChannel(channelId, triggerArea, channelBus))
script6.spawn(tools4, {}, createChannel(channelId, tools4, channelBus))
script10.spawn(padlockRomanNumber, {"combination":3142,"onSolve":[{"entityName":"verticalHallwayDoo2","actionId":"open","values":{}}]}, createChannel(channelId, padlockRomanNumber, channelBus))
script11.spawn(fantasyIronKey, {"onUse":[{"entityName":"ironFenceDoor2","actionId":"open","values":{}}],"onEquip":[],"target":"ironFenceDoor2"}, createChannel(channelId, fantasyIronKey, channelBus))
script12.spawn(scifiChest, {"onClick":[{"entityName":"scifiChest","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest, channelBus))
script13.spawn(cableBox, {"redCable":true,"greenCable":true,"blueCable":true,"onClick":[{"entityName":"cableBox","actionId":"toggleBox","values":{}}],"onRedCut":[{"entityName":"verticalHallwayDoo3","actionId":"close","values":{}}],"onBlueCut":[{"entityName":"policeSiren","actionId":"activate","values":{}}],"onBoxClose":[{"entityName":"policeSiren","actionId":"deactivate","values":{}},{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}],"onBoxOpen":[{"entityName":"policeSiren","actionId":"activate","values":{}}],"onGreenCut":[{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}]}, createChannel(channelId, cableBox, channelBus))
script14.spawn(policeSiren, {}, createChannel(channelId, policeSiren, channelBus))
script15.spawn(verticalHallwayDoo, {}, createChannel(channelId, verticalHallwayDoo, channelBus))
script15.spawn(verticalHallwayDoo2, {}, createChannel(channelId, verticalHallwayDoo2, channelBus))
script1.spawn(parrot2, {"onActivate":[{"entityName":"verticalHallwayDoo2","actionId":"close","values":{}}],"onDeactivate":[{"entityName":"verticalHallwayDoo2","actionId":"open","values":{}}]}, createChannel(channelId, parrot2, channelBus))
script16.spawn(chest, {"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"hmm.......\nit's locked","duration":5,"multiplayer":false}}],"onOpen":[]}, createChannel(channelId, chest, channelBus))
script17.spawn(silverKey, {"target":"chest","onUse":[{"entityName":"chest","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a silver key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, silverKey, channelBus))
script12.spawn(scifiChest2, {"onClick":[{"entityName":"scifiChest2","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"countdownTimer","actionId":"activate","values":{}}]}, createChannel(channelId, scifiChest2, channelBus))
script18.spawn(countdownTimer, {"totalTime":30,"active":false,"onThreshold":[{"entityName":"fantasyChest","actionId":"open","values":{}}],"onTimeUp":[{"entityName":"fantasyChest","actionId":"open","values":{}}]}, createChannel(channelId, countdownTimer, channelBus))
script4.spawn(scroll2, {"text":"Everything changed\nwhen our planet \nbecame a threat to\nothers, their thirst\nfor power drained\nour civilisation dry. \nWhen the timer turns\nred you can see \ninside the alien chest.\nBe careful!\n","fontSize":30}, createChannel(channelId, scroll2, channelBus))
script19.spawn(fantasyChest, {"onClick":[]}, createChannel(channelId, fantasyChest, channelBus))
script20.spawn(blueAccessCard, {"target":"ironFenceDoor","onEquip":[],"onUse":[{"entityName":"ironFenceDoor","actionId":"open","values":{}}]}, createChannel(channelId, blueAccessCard, channelBus))
script15.spawn(verticalHallwayDoo3, {}, createChannel(channelId, verticalHallwayDoo3, channelBus))
script21.spawn(greenLightButton, {"onClick":[{"entityName":"woodenTrapdoor","actionId":"open","values":{}}]}, createChannel(channelId, greenLightButton, channelBus))
script2.spawn(padlock3, {"combination":2019,"onSolve":[{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}]}, createChannel(channelId, padlock3, channelBus))
script22.spawn(woodenTrapdoor, {}, createChannel(channelId, woodenTrapdoor, channelBus))
script15.spawn(verticalHallwayDoo4, {}, createChannel(channelId, verticalHallwayDoo4, channelBus))
script8.spawn(verticalPlatform3, {"distance":20,"speed":3,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}]}, createChannel(channelId, verticalPlatform3, channelBus))
script23.spawn(blueLightButton, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueLightButton, channelBus))
script24.spawn(ironFenceDoor, {"onClick":[]}, createChannel(channelId, ironFenceDoor, channelBus))
script16.spawn(chest2, {"onClick":[]}, createChannel(channelId, chest2, channelBus))
script25.spawn(bronzeKey, {"target":"chest2","onUse":[{"entityName":"chest2","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a bronze key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, bronzeKey, channelBus))
script4.spawn(scroll3, {"text":"We don't have much\ntime. The human\nrace is at stake. \nYou must find my \nsecret laboratory \nand turn on the \ntime machine!\n2019 is the key\nyou need...\nGood luck! ","fontSize":30}, createChannel(channelId, scroll3, channelBus))
script26.spawn(scifiLever, {"onActivate":[{"entityName":"verticalHallwayDoo6","actionId":"open","values":{}}],"onDeactivate":[]}, createChannel(channelId, scifiLever, channelBus))
script4.spawn(scroll4, {"text":"It's 2034, fifteen \nyears since the first \ninvasion. The rest of \nus have been hiding\nunderground but this \nyear will be our last. \nExtinction is imminent. \nYou must find a way \nback, remember this \nfateful year, 2034.","fontSize":30}, createChannel(channelId, scroll4, channelBus))
script12.spawn(scifiChest3, {"onClick":[{"entityName":"scifiChest3","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest3, channelBus))
script2.spawn(padlock4, {"combination":2034,"onSolve":[{"entityName":"verticalHallwayDoo4","actionId":"open","values":{}}]}, createChannel(channelId, padlock4, channelBus))
script24.spawn(ironFenceDoor2, {"onClick":[]}, createChannel(channelId, ironFenceDoor2, channelBus))
script5.spawn(verticalPlatform4, {"distance":10,"speed":5,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform4, channelBus))
script27.spawn(fingerprintAccessC, {"target":"verticalHallwayDoo5","onUse":[{"entityName":"verticalHallwayDoo5","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a fingerprint access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, fingerprintAccessC, channelBus))
script28.spawn(toggleButton, {"onActivate":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton, channelBus))
script24.spawn(ironFenceDoor3, {"onClick":[]}, createChannel(channelId, ironFenceDoor3, channelBus))
script15.spawn(verticalHallwayDoo5, {"onOpen":[]}, createChannel(channelId, verticalHallwayDoo5, channelBus))
script11.spawn(fantasyIronKey2, {"target":"ironFenceDoor3","onUse":[{"entityName":"ironFenceDoor3","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"an iron key!","duration":5,"multiplayer":false}}]}, createChannel(channelId, fantasyIronKey2, channelBus))
script15.spawn(verticalHallwayDoo6, {}, createChannel(channelId, verticalHallwayDoo6, channelBus))
script29.spawn(faceAccessCard, {"target":"chest2","onUse":[{"entityName":"chest2","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a face access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, faceAccessCard, channelBus))
script4.spawn(scroll5, {"text":"Great! \nYou're close\nto the secret \nlaboratory...\nWatch out for\nthe aliens\nthey mustn't \nfind my machine... ","fontSize":36}, createChannel(channelId, scroll5, channelBus))
script30.spawn(scoreboard, {"initialVal":0,"threshold":3,"enabled":true,"onThreshold":[{"entityName":"metalTrapdoor3","actionId":"open","values":{}}]}, createChannel(channelId, scoreboard, channelBus))
script31.spawn(shipSWheel, {"onClick":[{"entityName":"scoreboard","actionId":"increase","values":{}}]}, createChannel(channelId, shipSWheel, channelBus))
script32.spawn(clickArea2, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"intruder be gone!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea2, channelBus))
script32.spawn(clickArea3, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"go away!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea3, channelBus))
script32.spawn(clickArea4, {"enabled":true,"onClick":[{"entityName":"tools2","actionId":"print","values":{"message":"intruder!","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea4, channelBus))
script9.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"tools2","actionId":"print","values":{"message":"holy cow","duration":5,"multiplayer":false}}]}, createChannel(channelId, triggerArea3, channelBus))
script33.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script34.spawn(redLightButton, {"onClick":[{"entityName":"invisibleWall","actionId":"disable","values":{}}]}, createChannel(channelId, redLightButton, channelBus))
script35.spawn(countdownTimer2, {"totalTime":60,"active":false}, createChannel(channelId, countdownTimer2, channelBus))
script35.spawn(countdownTimer3, {"totalTime":60,"active":false}, createChannel(channelId, countdownTimer3, channelBus))
script36.spawn(countdownTimer4, {"totalTime":10,"active":false,"onTimeUp":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}},{"entityName":"tools2","actionId":"move","values":{"x":0,"y":23,"z":0,"speed":2,"relative":true,"onComplete":[],"target":"delorean2"}}]}, createChannel(channelId, countdownTimer4, channelBus))
script4.spawn(scroll6, {"text":"finding your\nway is as \neasy as pi\nIII I IV II","fontSize":30}, createChannel(channelId, scroll6, channelBus))
script15.spawn(verticalHallwayDoo7, {}, createChannel(channelId, verticalHallwayDoo7, channelBus))
script37.spawn(buttonChest, {"onClick":[],"onOpen":[{"entityName":"parrot","actionId":"deactivate","values":{}}]}, createChannel(channelId, buttonChest, channelBus))
script15.spawn(verticalHallwayDoo8, {}, createChannel(channelId, verticalHallwayDoo8, channelBus))
script2.spawn(padlock5, {"combination":2020,"onSolve":[{"entityName":"verticalHallwayDoo8","actionId":"open","values":{}}]}, createChannel(channelId, padlock5, channelBus))
script4.spawn(scroll7, {"text":"My dear friend\nEverything is in\nyour hands now. \nWill you save us?\nTravel back in time\nso that humankind\ncan have a future. \n\nX = 100 x 20 + 19 + 1^3","fontSize":30}, createChannel(channelId, scroll7, channelBus))
script38.spawn(headAccessCard, {"target":"verticalHallwayDoo7","onUse":[{"entityName":"verticalHallwayDoo7","actionId":"open","values":{}}],"onEquip":[{"entityName":"tools2","actionId":"print","values":{"message":"a head access card!","duration":5,"multiplayer":false}}]}, createChannel(channelId, headAccessCard, channelBus))
script39.spawn(metalTrapdoor2, {}, createChannel(channelId, metalTrapdoor2, channelBus))
script21.spawn(greenLightButton2, {"onClick":[{"entityName":"metalTrapdoor2","actionId":"open","values":{}}]}, createChannel(channelId, greenLightButton2, channelBus))
script6.spawn(tools5, {}, createChannel(channelId, tools5, channelBus))
script26.spawn(scifiLever2, {"onActivate":[{"entityName":"tools5","actionId":"rotate","values":{"x":0,"y":120,"z":0,"speed":1,"onComplete":[{"entityName":"tools5","actionId":"move","values":{"x":0,"y":0,"z":-30,"speed":4,"relative":false,"onComplete":[{"entityName":"tools5","actionId":"scale","values":{"target":"delorean2","x":0,"y":0,"z":0,"speed":10,"onComplete":[]}}],"target":"delorean2"}}],"target":"delorean2"}},{"entityName":"invisibleWall8","actionId":"disable","values":{}}],"onDeactivate":[]}, createChannel(channelId, scifiLever2, channelBus))
script32.spawn(clickArea5, {"enabled":true,"onClick":[{"entityName":"countdownTimer4","actionId":"activate","values":{}},{"entityName":"tools2","actionId":"print","values":{"message":"the countdown begins!","duration":5,"multiplayer":true}}]}, createChannel(channelId, clickArea5, channelBus))
script4.spawn(scroll8, {"text":"Pay attention to the\nnumbers in my\nnotes, they are the\nkey to opening the\ndoors!","fontSize":30}, createChannel(channelId, scroll8, channelBus))
script33.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script40.spawn(yellowButton, {"onClick":[{"entityName":"invisibleWall2","actionId":"disable","values":{}}]}, createChannel(channelId, yellowButton, channelBus))
script33.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script33.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script4.spawn(scroll10, {"text":"Pi will take you\nto the sky","fontSize":36}, createChannel(channelId, scroll10, channelBus))
script37.spawn(buttonChest2, {"onClick":[{"entityName":"buttonChest2","actionId":"toggle","values":{}}]}, createChannel(channelId, buttonChest2, channelBus))
script33.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script33.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script39.spawn(metalTrapdoor3, {}, createChannel(channelId, metalTrapdoor3, channelBus))
script33.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))
script41.spawn(tablet, {"text":"Congratulations! You did it!\nYou sent the time machine \nto the year 2019 where I'll \nbe waiting for it. Thanks to \nyou and the car the human \nrace can now be saved! ","fontSize":30}, createChannel(channelId, tablet, channelBus))
script4.spawn(scroll9, {"text":"find the remote \ncontrol to activate\nthe time machine!","fontSize":30}, createChannel(channelId, scroll9, channelBus))
script33.spawn(invisibleWall8, {"enabled":true}, createChannel(channelId, invisibleWall8, channelBus))
script33.spawn(invisibleWall10, {"enabled":true}, createChannel(channelId, invisibleWall10, channelBus))
script33.spawn(invisibleWall11, {"enabled":true}, createChannel(channelId, invisibleWall11, channelBus))
script4.spawn(scroll11, {"text":"Back To The Past\n\n     created by\nKJWalker & FGR3D","fontSize":20}, createChannel(channelId, scroll11, channelBus))
script42.spawn(squareSignpost, {"text":"For next challenge\n\"/goto next\"\nin chat window\n","fontSize":15}, createChannel(channelId, squareSignpost, channelBus))