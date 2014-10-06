// Created by iWeb 3.0.2 local-build-20101224

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="328" height="16"><param name="src" value="Media/%D0%94%D0%B2%D0%B0%20%D0%BF%D1%96%D0%BD%D0%B8%D0%BA%D0%B8,%20%D0%B4%D0%B2%D0%B0%20%D0%BF%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="328" height="16"><param name="src" value="Media/%D0%94%D0%B2%D0%B0%20%D0%BF%D1%96%D0%BD%D0%B8%D0%BA%D0%B8,%20%D0%B4%D0%B2%D0%B0%20%D0%BF%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="328" height="16" data="Media/%D0%94%D0%B2%D0%B0%20%D0%BF%D1%96%D0%BD%D0%B8%D0%BA%D0%B8,%20%D0%B4%D0%B2%D0%B0%20%D0%BF%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8.mp3"><param name="src" value="Media/%D0%94%D0%B2%D0%B0%20%D0%BF%D1%96%D0%BD%D0%B8%D0%BA%D0%B8,%20%D0%B4%D0%B2%D0%B0%20%D0%BF%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Dva_pivniki_files/Dva_pivnikiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
