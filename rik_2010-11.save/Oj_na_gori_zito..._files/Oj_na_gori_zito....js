// Created by iWeb 3.0.2 local-build-20101129

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="16"><param name="src" value="Media/%D0%9E%D0%B8%CC%86%20%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%80%D1%96%20%D0%B6%D0%B8%D1%82%D0%BE.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="300" height="16"><param name="src" value="Media/%D0%9E%D0%B8%CC%86%20%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%80%D1%96%20%D0%B6%D0%B8%D1%82%D0%BE.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="300" height="16" data="Media/%D0%9E%D0%B8%CC%86%20%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%80%D1%96%20%D0%B6%D0%B8%D1%82%D0%BE.mp3"><param name="src" value="Media/%D0%9E%D0%B8%CC%86%20%D0%BD%D0%B0%20%D0%B3%D0%BE%D1%80%D1%96%20%D0%B6%D0%B8%D1%82%D0%BE.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Oj_na_gori_zito..._files/Oj_na_gori_zito...Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
