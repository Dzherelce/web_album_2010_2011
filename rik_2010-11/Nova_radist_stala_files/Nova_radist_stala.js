// Created by iWeb 3.0.2 local-build-20101224

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="271" height="16"><param name="src" value="Media/48%20-%20%D0%9D%D0%BE%D0%B2%D0%B0%20%D1%80%D0%B0%D0%B4%D1%96%D1%81%D1%82%D1%8C.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="271" height="16"><param name="src" value="Media/48%20-%20%D0%9D%D0%BE%D0%B2%D0%B0%20%D1%80%D0%B0%D0%B4%D1%96%D1%81%D1%82%D1%8C.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="271" height="16" data="Media/48%20-%20%D0%9D%D0%BE%D0%B2%D0%B0%20%D1%80%D0%B0%D0%B4%D1%96%D1%81%D1%82%D1%8C.mp3"><param name="src" value="Media/48%20-%20%D0%9D%D0%BE%D0%B2%D0%B0%20%D1%80%D0%B0%D0%B4%D1%96%D1%81%D1%82%D1%8C.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Nova_radist_stala_files/Nova_radist_stalaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
