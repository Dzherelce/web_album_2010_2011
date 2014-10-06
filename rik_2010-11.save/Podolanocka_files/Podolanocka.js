// Created by iWeb 3.0.2 local-build-20101129

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="206" height="16"><param name="src" value="Media/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="206" height="16"><param name="src" value="Media/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="206" height="16" data="Media/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0.mp3"><param name="src" value="Media/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Podolanocka_files/PodolanockaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');Widget.onload();fixupIECSS3Opacity('id4');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
