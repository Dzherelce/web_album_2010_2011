// Created by iWeb 3.0.4 local-build-20120630

function createMediaStream_id4()
{return IWCreatePhotocast("http://yarylo.sytes.net/galereya/photo/rik_2010-11/Foto_16_sicna_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://yarylo.sytes.net/galereya/photo/rik_2010-11',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://yarylo.sytes.net/galereya/photo/rik_2010-11',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,0),new IWSize(211,191),27,27,0,new IWSize(26,25)),new IWPhotoFrame([IWCreateImage('Foto_16_sicna_files/kid_frame-1_01.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_02.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_03.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_06.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_09.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_08.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_07.jpg'),IWCreateImage('Foto_16_sicna_files/kid_frame-1_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,13.000000,13.000000,13.000000,12.000000,121.000000,120.000000,121.000000,120.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(5.3460,2.7239),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('Foto_16_sicna_files/Playtime_waves_01.png'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_02.png'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_03.png'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_06.jpg'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_09.jpg'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_08.jpg'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_07.jpg'),IWCreateImage('Foto_16_sicna_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Foto_16_sicna_files/Foto_16_sicnaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
