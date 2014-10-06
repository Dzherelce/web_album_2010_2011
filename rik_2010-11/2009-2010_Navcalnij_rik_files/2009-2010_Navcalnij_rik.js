// Created by iWeb 3.0.2 local-build-20101103

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_01.png'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_02.png'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_03.png'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_06.jpg'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_09.jpg'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_08.jpg'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_07.jpg'),IWCreateImage('2009-2010_Navcalnij_rik_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('2009-2010_Navcalnij_rik_files/2009-2010_Navcalnij_rikMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
