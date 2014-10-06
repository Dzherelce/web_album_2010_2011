// Created by iWeb 3.0.2 local-build-20101103

function createMediaStream_id2()
{return IWCreatePhotocast("http://yarylo.syets.net/galereya/photo/rik_2010-11/Fotografii_-_1j_urok_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://yarylo.syets.net/galereya/photo/rik_2010-11',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://yarylo.syets.net/galereya/photo/rik_2010-11',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,26),new IWSize(211,217),27,27,0,new IWSize(26,25)),new IWPhotoFrame([IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_01.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_02.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_03.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_06.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_09.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_08.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_07.jpg'),IWCreateImage('Fotografii_-_1j_urok_files/kid_frame-1_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,13.000000,13.000000,13.000000,12.000000,121.000000,120.000000,121.000000,120.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,5.0000),color:'#000000',opacity:0.600000}),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(5.3460,2.7239),color:'#000000',opacity:0.600000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(5.3460,2.7239),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Fotografii_-_1j_urok_files/Fotografii_-_1j_urokMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('Fotografii_-_1j_urok_files','shapeimage_1','0');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
