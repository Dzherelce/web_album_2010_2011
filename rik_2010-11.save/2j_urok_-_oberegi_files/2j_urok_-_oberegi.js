// Created by iWeb 3.0.2 local-build-20101129

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(5.3460,2.7239),color:'#000000',opacity:0.600000}),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(5.3460,2.7239),color:'#000000',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-1.9696,0.3473),color:'#000000',opacity:0.600000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(5.8898,1.1449),color:'#000000',opacity:0.540000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('2j_urok_-_oberegi_files/2j_urok_-_oberegiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('2j_urok_-_oberegi_files','shapeimage_2','0');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
