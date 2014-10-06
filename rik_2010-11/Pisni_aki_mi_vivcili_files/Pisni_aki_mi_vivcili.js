// Created by iWeb 3.0.3 local-build-20110305

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_01.png'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_02.png'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_03.png'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_06.jpg'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_09.jpg'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_08.jpg'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_07.jpg'),IWCreateImage('Pisni_aki_mi_vivcili_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Pisni_aki_mi_vivcili_files/Pisni_aki_mi_vivciliMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
