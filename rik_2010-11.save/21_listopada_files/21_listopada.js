// Created by iWeb 3.0.2 local-build-20101129

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_4:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('21_listopada_files/Playtime_hills_01.png'),IWCreateImage('21_listopada_files/Playtime_hills_02.png'),IWCreateImage('21_listopada_files/Playtime_hills_03.png'),IWCreateImage('21_listopada_files/Playtime_hills_06.jpg'),IWCreateImage('21_listopada_files/Playtime_hills_09.jpg'),IWCreateImage('21_listopada_files/Playtime_hills_08.png'),IWCreateImage('21_listopada_files/Playtime_hills_07.jpg'),IWCreateImage('21_listopada_files/Playtime_hills_04.png')],null,1,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,57.000000,1.000000,8.000000,388.000000,507.000000,388.000000,507.000000,null,null,null,0.500000),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('21_listopada_files/21_listopadaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
